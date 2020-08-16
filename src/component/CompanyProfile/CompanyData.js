import React from 'react';
import { Link } from 'react-router-dom';

function CompanyData() {
    return (
        <div className="user_profile">
            <div className="user-pro-img">
                <img src="assets/images/resources/company-profile.png" alt="" />
            </div>
            <div className="user_pro_status">
                <ul className="flw-hr">
                    <li><Link to="#" title="" className="flww"><i className="la la-plus"></i> Follow</Link></li>
                </ul>
                <ul className="flw-status">
                    <li>
                        <span>Following</span>
                        <b>34</b>
                    </li>
                    <li>
                        <span>Followers</span>
                        <b>155</b>
                    </li>
                </ul>
            </div>
            <ul className="social_links">
                <li><Link to="#" title=""><i className="la la-globe"></i> www.example.com</Link></li>
                <li><Link to="#" title=""><i className="fa fa-facebook-square"></i> Http://www.facebook.com/john...</Link></li>
                <li><Link to="#" title=""><i className="fa fa-twitter"></i> Http://www.Twitter.com/john...</Link></li>
                <li><Link to="#" title=""><i className="fa fa-google-plus-square"></i> Http://www.googleplus.com/john...</Link></li>
                <li><Link to="#" title=""><i className="fa fa-behance-square"></i> Http://www.behance.com/john...</Link></li>
                <li><Link to="#" title=""><i className="fa fa-pinterest"></i> Http://www.pinterest.com/john...</Link></li>
                <li><Link to="#" title=""><i className="fa fa-instagram"></i> Http://www.instagram.com/john...</Link></li>
                <li><Link to="#" title=""><i className="fa fa-youtube"></i> Http://www.youtube.com/john...</Link></li>
            </ul>
        </div>
    )
}

export default CompanyData
