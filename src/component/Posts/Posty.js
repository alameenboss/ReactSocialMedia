import React from 'react'
import { Link } from 'react-router-dom';

import PostyComments from './PostyComments'

const Posty = (props) => {
    console.log(JSON.stringify(props));
    return (
        <div className="posty" style={{marginBottom:'20px'}} >
            <div className="post-bar no-margin">
                <div className="post_topbar">
                    <div className="usy-dt">
                        <img src={props.post.ImageUrl} alt="" />
                        <div className="usy-name">
                            <h3>{props.post.Name}</h3>
                            <span><img src="assets/images/clock.png" alt="" />{props.post.PostedTime}</span>
                        </div>
                    </div>
                    <div className="ed-opts">
                        <Link to="/" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></Link>
                        <ul className="ed-options">
                            <li><Link to="/" title="">Edit Post</Link></li>
                            <li><Link to="/" title="">Unsaved</Link></li>
                            <li><Link to="/" title="">Unbid</Link></li>
                            <li><Link to="/" title="">Close</Link></li>
                            <li><Link to="/" title="">Hide</Link></li>
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
                        <li><Link to="/" title=""><i className="la la-bookmark"></i></Link></li>
                        <li><Link to="/" title=""><i className="la la-envelope"></i></Link></li>
                        <li><Link to="/" title="" className="bid_now">Bid Now</Link></li>
                    </ul>
                </div>
                <div className="job_descp">
                    <h3>{props.post.Designation}</h3>
                    <ul className="job-dt">
                        <li><Link to="/" title="">{props.post.JobType}</Link></li>
                        <li><span>{props.post.Rate}</span></li>
                    </ul>
                    <p>{props.post.PostText}<Link to="/" title="">view more</Link></p>
                    <ul className="skill-tags">
                        {
                            props.post.Technology.map((value, index) =>  
                                <li key={index}>
                                    <Link to="/" title={value}>{value}</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="job-status-bar">
                    <ul className="like-com">
                        <li>
                            <Link to="/"><i className="fas fa-heart"></i> Like</Link>
                            <img src="assets/images/liked-img.png" alt="" />
                            <span>25</span>
                        </li>
                        <li>
                            <Link to="/" className="com"><i className="fas fa-comment-alt"></i> Comment 15</Link>
                        </li>
                    </ul>
                    <Link to="/"><i className="fas fa-eye"></i>Views 50</Link>
                </div>
            </div>
            <PostyComments></PostyComments>
            <div ></div>
        </div>
    )
}

export default Posty
