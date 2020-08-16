import React from 'react'
import { Link } from 'react-router-dom'

const HomeTagSection = () => {
    return (
        <div className="tags-sec full-width">
            <ul>
                <li><Link to="/">Help Center</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Privacy Policy</Link></li>
                <li><Link to="/">Community Guidelines</Link></li>
                <li><Link to="/">Cookies Policy</Link></li>
                <li><Link to="/">Career</Link></li>
                <li><Link to="/">Language</Link></li>
                <li><Link to="/">Copyright Policy</Link></li>
            </ul>
            <div className="cp-sec">
                <img src="reactsocialmedia/assets/images/logo2.png" alt="" />
                <p><img src="reactsocialmedia/assets/images/cp.png" alt="" />Copyright 2019</p>
            </div>
        </div>
    )
}

export default HomeTagSection
