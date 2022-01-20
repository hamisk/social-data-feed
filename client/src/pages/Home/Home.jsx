import React from 'react';
import ActivityTable from '../../components/ActivityTable/ActivityTable';
import Feed from '../../components/Feed/Feed';
import './Home.scss'


function Home() {
    return (
        <div className='home'>
            <div className='home__column-left'>
                <div className="home__feed">
                    <Feed />
                </div>
            </div>
            <div className="home__column-right">
                <h1 className="home__column-title">Right Column Title</h1>
                <p className="home__column-text">Right column text</p>
                <ActivityTable />
            </div>
        </div>
    );
}

export default Home;
