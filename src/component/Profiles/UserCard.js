import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

function UserCard({ value }) {
  const variants = {hidden: { opacity: 0},visible: { opacity: 1}}
  const follow = useRef(null);
  const hire = useRef(null);
  const handleClick = (action, id) => {
    if (action === 'Follow')
      follow.current.innerHTML = follow.current.innerHTML === 'Following' ? 'Follow' : 'Following';
    if (action === 'Hire')
      hire.current.innerHTML = hire.current.innerHTML === 'Hired' ? 'Hire' : 'Hired';
  }

  return (
    <motion.div initial="hidden" animate="visible" transition={{ duration: 1 }} variants={variants} className="col-lg-3 col-md-4 col-sm-6 col-12">
      <motion.div whileHover={{ scale: 1.1 }} className="company_profile_info">
        <div className="company-up-info">
          <img src={value.picture.medium} alt="" />
          <h3>{value.name.first + ' ' + value.name.last}</h3>
          <h4>{value.location.city + ',' + value.location.state}</h4>
          <ul>
            <li>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link to='#' ref={follow} onClick={() => handleClick('Follow', value.login.uuid)} className="follow">
              Follow
              </Link>
            </motion.div>
            </li>
            <li>
              <Link to={'/Message?user-id=' + value.login.uuid} className="message-us">
                <i className="fa fa-envelope"></i>
              </Link>
            </li>
            <li>
              <Link to='#' ref={hire} onClick={() => handleClick('Hire', value.login.uuid)} className="hire-us">
                Hire
                </Link>
            </li>
          </ul>
        </div>
        <Link to={'/UserProfile?user-id=' + value.login.uuid} className="view-more-pro">
          View Profile
          </Link>
      </motion.div>
    </motion.div>

  )
}

export default UserCard
