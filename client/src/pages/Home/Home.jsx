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
                <h2 className="home__heading">Activity Table</h2>
                <ActivityTable />
            </div>
        </div>
    );
}

export default Home;
