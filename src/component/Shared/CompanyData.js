import React from 'react';
import { Link } from 'react-router-dom';

function CompanyData({ img, following, followers, sociallinks }) {

    return (
        <div className="user_profile">
            <div className="user-pro-img">
                <img src={img} alt="" />
            </div>
            <div className="user_pro_status">
                <ul className="flw-hr">
                    <li><Link to="#" title="" className="flww"><i className="la la-plus"></i> Follow</Link></li>
                    <li><Link to="#" title className="hre">Hire</Link></li>
                </ul>
                <ul className="flw-status">
                    <li>
                        <span>Following</span>
                        <b>{following}</b>
                    </li>
                    <li>
                        <span>Followers</span>
                        <b>{followers}</b>
                    </li>
                </ul>
            </div>
            <ul className="social_links">
                {
                    sociallinks.map((value, index) => <li key={index}><Link to="#" title=""><i className={value.Icon}></i>{value.website}</Link></li>)
                }
            </ul>
        </div>
    )
}

export default CompanyData
