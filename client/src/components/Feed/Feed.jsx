import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import Post from '../Post/Post';
import './Feed.scss'

const API_URL = 'http://localhost:8080'

function Feed() {

    const [userList, setUserList] = useState([]);
    const [selectedUser, setSelectedUser] = useState([]);
    const [userPosts, setUserPosts] = useState(false);


    useEffect(() => {
        axios
            .get(API_URL + '/api/posts/users')
            .then(response => {
                const userArray = response.data.map(user => ({ label: user, value: user }))
                setUserList(userArray)
            })
    }, [])

    const getUserPosts = (user) => {
        axios
            .get(API_URL + '/api/posts/' + user)
            .then(response => {
                setUserPosts(response.data)
            })
    }

    return (
        <div className="feed">
            <h2 className="feed__heading">Post Feed</h2>
            <Select 
                options={userList}
                onChange={opt => {
                    setSelectedUser(opt.value)
                    getUserPosts(opt.value)}}/>
            <div className="feed__posts">
                {userPosts ? 
                userPosts.map(post => <Post key={post._id} userPost={post}/>)
                : "" }
            </div>
        </div>
    );
}

export default Feed;
