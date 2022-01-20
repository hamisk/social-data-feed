import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import Post from '../Post/Post';
import './Feed.scss'

const API_URL = 'http://localhost:8080'

function Feed() {

    const [userList, setUserList] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [noOfPostsToDisplay, setNoOfPostsToDisplay] = useState(10);
    const [userPosts, setUserPosts] = useState(false);
    const [isSearch, setIsSearch] = useState(false)

    useEffect(() => {
        axios
            .all([axios.get(API_URL + '/api/posts/users'),
                axios.get(API_URL + '/api/posts')])
            .then(axios.spread((...responses) => {
                console.log(responses)
                const userArray = responses[0].data.map(user => ({ label: user, value: user }))
                setUserList(userArray)
                setAllPosts(responses[1].data)
                setUserPosts(responses[1].data.slice(0, noOfPostsToDisplay))
            }))
    }, [noOfPostsToDisplay])

    const getUserPosts = (user) => {
        axios
            .get(API_URL + '/api/posts/' + user)
            .then(response => {
                setUserPosts(response.data)
            })
    }

    return (
        <div className="feed">
            <h2 className="feed__heading">Social Feed & Activity Data</h2>
            <h3 className="feed__heading">Post Feed</h3>
            <div className="feed__select-wrapper">
                <Select
                    options={userList}
                    onChange={opt => {
                        getUserPosts(opt.value)
                        setIsSearch(true)}}/>
            </div>
            <div className="feed__posts">
                {userPosts ? 
                userPosts.map(post => <Post key={post._id} userPost={post}/>)
                : "" }
            </div>
            <button className="feed__load-more" onClick={() => {
                setNoOfPostsToDisplay(prevN => prevN + 10)
                setIsSearch(false)}}>
                    {isSearch ? "Show All" : "Load More..."}</button>
        </div>
    );
}

export default Feed;
