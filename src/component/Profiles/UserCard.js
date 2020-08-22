import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

function UserCard(props) {
  const follow = useRef(null);
  const hire = useRef(null);

  const handleClick = (action, id) => {
    //alert(action + ' user with id: ' + id)
    if (action === 'Follow') {
      if (follow.current.innerHTML === 'Following')
        follow.current.innerHTML = 'Follow'
      else
        follow.current.innerHTML = 'Following'
    }
    if (action === 'Hire') {
      if (hire.current.innerHTML === 'Hired')
        hire.current.innerHTML = 'Hire'
      else
        hire.current.innerHTML = 'Hired'
    }
  }

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
      <div className="company_profile_info">
        <div className="company-up-info">
          <img src={props.value.img} alt="" />
          <h3>{props.value.name}</h3>
          <h4>{props.value.work}</h4>
          <ul>
            <li>
              <Link to='#' ref={follow} onClick={() => handleClick('Follow', props.value.id)} className="follow">
                Follow
                </Link>
            </li>
            <li>
              <Link to={'/Message?user-id=' + props.value.id} className="message-us">
                <i className="fa fa-envelope"></i>
              </Link>
            </li>
            <li>
              <Link to='#' ref={hire} onClick={() => handleClick('Hire', props.value.id)} className="hire-us">
                Hire
                </Link>
            </li>
          </ul>
        </div>
        <Link to={'/UserProfile?user-id=' + props.value.id} className="view-more-pro">
          View Profile
          </Link>
      </div>
    </div>

  )
}

export default UserCard
