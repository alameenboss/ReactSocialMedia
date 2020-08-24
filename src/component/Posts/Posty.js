import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';

import PostyComments from './PostyComments'

const Posty = (props) => {

    const [showComment, toggleComment] = useState(false);
    const [liked, toggleLike] = useState(false);
    const [show, toggleAction] = useState(false);
    const bookmark = useRef(null);
    const handleClick = (e, action) => {
        e.preventDefault();
        if (action === 'Bookmark') {
            if (bookmark.current.className === 'la la-bookmark')
                bookmark.current.className = 'fa fa-bookmark'
            else
                bookmark.current.className = 'la la-bookmark'
        }
    }

    return (
        <div className="posty" style={{ marginBottom: '20px' }} >
            <div className="post-bar no-margin">
                <div className="post_topbar">
                    <div className="usy-dt">
                        <img src={props.img} alt="" />
                        <div className="usy-name">
                            <h3>{props.name}</h3>
                            <span><img src="/assets/images/clock.png" alt="" />{props.post.PostedTime}</span>
                        </div>
                    </div>
                    <div className="ed-opts">
                        <Link to="#" className="ed-opts-open" onClick={() => toggleAction(!show)}><i className="la la-ellipsis-v" /></Link>
                        <ul className={`ed-options ${show === true ? 'active' : ''}`}>
                            <li onClick={() => toggleAction(!show)}><Link to="/app/Home" >Edit Post</Link></li>
                            <li onClick={() => toggleAction(!show)}><Link to="/app/Home" >Unsaved</Link></li>
                            <li onClick={() => toggleAction(!show)}><Link to="/app/Home" >Unbid</Link></li>
                            <li onClick={() => toggleAction(!show)}><Link to="/app/Home" >Close</Link></li>
                            <li onClick={() => toggleAction(!show)}><Link to="/app/Home" >Hide</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="epi-sec">
                    <ul className="descp">
                        {
                            props.post.Tags.map((value, index) =>
                                <li key={index}>
                                    <img src={value.Icon} alt="" />
                                    <span>{value.Text}</span>
                                </li>
                            )
                        }

                    </ul>
                    <ul className="bk-links">
                        <li>
                            <Link to="#" onClick={(e) => handleClick(e, 'Bookmark')} >
                                <i ref={bookmark} className="la la-bookmark"></i>
                            </Link>
                        </li>
                        <li><Link to={'/Message?user-id=1'} ><i className="la la-envelope"></i></Link></li>
                        <li><Link to="/app/Home" className="bid_now">Bid Now</Link></li>
                    </ul>
                </div>
                <div className="job_descp">
                    <h3>{props.post.Designation}</h3>
                    <ul className="job-dt">
                        <li><Link to="/app/Home" >{props.post.JobType}</Link></li>
                        <li><span>{props.post.Rate}</span></li>
                    </ul>
                    <p>{props.post.PostText}<Link to="/app/Home" >view more</Link></p>
                    <ul className="skill-tags">
                        {
                            props.post.Technology.map((value, index) =>
                                <li key={index}>
                                    <Link to="/app/Home" title={value}>{value}</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="job-status-bar">
                    <ul className="like-com">
                        <li onClick={() => toggleLike(!liked)}>
                            <Link to="#" className={liked ? "liked" : ""} ><i className="fas fa-heart"></i>Like</Link>
                            <img src="/assets/images/liked-img.png" alt="" />
                            <span>{liked ? 26 : 25}</span>
                        </li>
                        <li>
                            <Link to="#" className="com" onClick={() => toggleComment(!showComment)}><i className="fas fa-comment-alt"></i> Comment 15</Link>
                        </li>
                    </ul>
                    <Link to="#"><i className="fas fa-eye"></i>Views 50</Link>
                </div>
            </div>
            {
                showComment ? <PostyComments></PostyComments> : null
            }

            <div ></div>
        </div>
    )
}

export default Posty
