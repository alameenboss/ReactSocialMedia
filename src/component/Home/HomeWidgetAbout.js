import React from 'react'
import { Link } from 'react-router-dom'

const HomeWidgetAbout = () => {
    return (
        <div className="widget widget-about">
            <img src="/assets/images/wd-logo.png" alt="" />
            <h3>Track Time on Workwise</h3>
            <span>Pay only for the Hours worked</span>
            <div className="sign_link">
                <h3><Link to="/SignIn" >Sign up</Link></h3>
                <Link to="/app/Home" >Learn More</Link>
            </div>
        </div>
    )
}

export default HomeWidgetAbout
