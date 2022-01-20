import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ActivityTable.scss'

const API_URL = 'http://localhost:8080'

function ActivityTable() {

    const [noOfDays, setNoOfDays] = useState(180);
    const [activitySummary, setActivitySummary] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        axios
            .get(API_URL + '/api/posts/lastNdays/' + noOfDays)
            .then(response => {
                const recentPosts = response.data
                const users = [...new Set(recentPosts.map(post => post.name))]
                users.forEach(user => {
                    let userPosts = recentPosts.filter(post => post.name === user)
                    let userPostCount = userPosts.length
                    let totalLikes = userPosts.reduce((a, b) => a + (b.likes || 0), 0)
    
                    setActivitySummary(prevSummary => [...prevSummary, [user, userPostCount, totalLikes]])
                })
                console.log(activitySummary)
                setIsLoaded(true)
            })
    }, [noOfDays])

    return (
        <div className='activity-table'>
            <div className="activity-table__range-select">
                <p className='activity-table__text'>User Activity Summary for last 180 days</p>
            </div>
            <div className="activity-table__table">
                <div className="activity-table__header">
                    <p className="activity-table__sub-user">Username</p>
                    <p className="activity-table__sub--mid">Total Posts</p>
                    <p className="activity-table__sub">Total Likes</p>
                </div>
                <div className="activity-table__rows">
                    {isLoaded ?
                    activitySummary.map((user, index) =>
                        <div className="activity-table__row" key={index}>
                            <p className="activity-table__row-text-user">{user[0]}</p>
                            <p className="activity-table__row-text">{user[1]}</p>
                            <p className="activity-table__row-text">{user[2]}</p>
                        </div>
                    )
                    : "" }
                </div>
            </div>
        </div>
    );
}

export default ActivityTable;
