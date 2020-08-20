import React from 'react'
import { Link } from 'react-router-dom';

function UserCard(props) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="company_profile_info">
          <div className="company-up-info">
            <img src={props.value.img} alt="" />
    <h3>{props.value.name}</h3>
    <h4>{props.value.work}</h4>
            <ul>
              <li>
                <Link to="#" className="follow">
                  Follow
                </Link>
              </li>
              <li>
                <Link to="#" className="message-us">
                  <i className="fa fa-envelope"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="hire-us">
                  Hire
                </Link>
              </li>
            </ul>
          </div>
          <Link to="user-profile.html" className="view-more-pro">
            View Profile
          </Link>
        </div>
      </div>
  
    )
}

export default UserCard
