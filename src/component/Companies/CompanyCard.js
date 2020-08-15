import React from 'react'
import { Link } from 'react-router-dom'
export default function CompanyCard(props) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="company_profile_info">
                <div className="company-up-info">
                    <img src={props.company.img} alt="" />
                    <h3>{props.company.name}</h3>
                    <h4>{props.company.establish}</h4>
                    <ul>
                        <li><Link to="#" title="" className="follow">Follow</Link></li>
                        <li>
                            <Link to="#" title="" className="message-us">
                                <i className="fa fa-envelope"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link to="company-profile" title="" className="view-more-pro">View Profile</Link>
            </div>
        </div>

    )
}