import React from 'react'
import Topbar from '../../components/Topbar/Topbar.jsx'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import Feed from '../../components/Feed/Feed.jsx'
import Rightbar from '../../components/Rightbar/Rightbar.jsx'
import './Home.css'

const Home = () => {
    return (
        <>
        <Topbar />
        <div className="homeContainer">

            {/* side bar */}
            <Sidebar />

            {/* feeds in middle */}
            <Feed />

            {/* rightbar */}
            <Rightbar />
        </div>
        
        </>

    )
}


export default Home
