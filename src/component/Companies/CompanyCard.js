import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
export default function CompanyCard(props) {
    const follow = useRef(null);

    const handleClick = (action, id) => {
        if (action === 'Follow') {
            if(follow.current.innerHTML === 'Following')
                follow.current.innerHTML = 'Follow'
            else
            follow.current.innerHTML = 'Following'
            
        }
    }

    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="company_profile_info">
                <div className="company-up-info">
                    <img src={props.company.img} alt="" />
                    <h3>{props.company.name}</h3>
                    <h4>{props.company.establish}</h4>
                    <ul>
                        <li>
                            <Link to="#" ref={follow} onClick={() => handleClick('Follow', props.company.id)} className="follow">
                                Follow
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Message?company-id=' + props.company.id} className="message-us">
                                <i className="fa fa-envelope"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link to={'/app/companyprofile?company-id=' + props.company.id} className="view-more-pro">View Profile</Link>
            </div>
        </div>

    )
}