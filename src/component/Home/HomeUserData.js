import React from 'react'
import { Link } from 'react-router-dom'

const HomeUserData = () => {
    return (
        <div className="user-data full-width">
            <div className="user-profile">
                <div className="username-dt">
                    <div className="usr-pic">
                        <img src="..." alt="" />
                    </div>
                </div>
                <div className="user-specs">
                    <h3>Name</h3>
                    <span>Designation</span>
                </div>
            </div>
            <ul className="user-fw-status">
                <li>
                    <h4>Following</h4>
                    <span>40</span>
                </li>
                <li>
                    <h4>Followers</h4>
                    <span>30</span>
                </li>
                <li>
                    <Link to="/my-profile"  title="">View Profile</Link>
                </li>
            </ul>
        </div>
    )
}

export default HomeUserData
