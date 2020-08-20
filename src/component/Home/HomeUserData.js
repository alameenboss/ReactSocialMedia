import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const HomeUserData = () => {
    const myInfo = useSelector(state => state.myInfo);
    return (
        <div className="user-data full-width">
            <div className="user-profile">
                <div className="username-dt">
                    <div className="usr-pic">
                        <img src={myInfo.img} alt="" />
                    </div>
                </div>
                <div className="user-specs">
                    <h3>{myInfo.name}</h3>
                    <span>{myInfo.work}</span>
                </div>
            </div>
            <ul className="user-fw-status">
                <li>
                    <h4>Following</h4>
                    <span>{myInfo.following}</span>
                </li>
                <li>
                    <h4>Followers</h4>
                    <span>{myInfo.followers}</span>
                </li>
                <li>
                    <Link to="/my-profile"  >View Profile</Link>
                </li>
            </ul>
        </div>
    )
}

export default HomeUserData
