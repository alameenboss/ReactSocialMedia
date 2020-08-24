import React from 'react'
import { Link } from 'react-router-dom'

const HomeTagSection = () => {
    return (
        <div className="tags-sec full-width">
            <ul>
                <li><Link to="/app/Home">Help Center</Link></li>
                <li><Link to="/app/Home">About</Link></li>
                <li><Link to="/app/Home">Privacy Policy</Link></li>
                <li><Link to="/app/Home">Community Guidelines</Link></li>
                <li><Link to="/app/Home">Cookies Policy</Link></li>
                <li><Link to="/app/Home">Career</Link></li>
                <li><Link to="/app/Home">Language</Link></li>
                <li><Link to="/app/Home">Copyright Policy</Link></li>
            </ul>
            <div className="cp-sec">
                <img src="/assets/images/logo2.png" alt="" />
                <p><img src="/assets/images/cp.png" alt="" />Copyright 2019</p>
            </div>
        </div>
    )
}

export default HomeTagSection
