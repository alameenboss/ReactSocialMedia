import React from 'react'
import { Link } from 'react-router-dom'

const PostyComments = () => {
    return (
        <div className="comment-section">
            <Link to="/" className="plus-ic">
                <i className="la la-plus"></i>
            </Link>
            <div className="comment-sec">
                <ul>
                    <li>
                        <div className="comment-list">
                            <div className="bg-img">
                                <img src="reactsocialmedia/assets/images/resources/bg-img1.png" alt="" />
                            </div>
                            <div className="comment">
                                <h3>Jessica William</h3>
                                <span><img src="reactsocialmedia/assets/images/clock.png" alt="" /> 3 min ago</span>
                                <p>Lorem ipsum dolor sit amet, </p>
                                <Link to="/" className="active"><i className="fa fa-reply-all"></i>Reply</Link>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <div className="comment-list">
                                    <div className="bg-img">
                                        <img src="reactsocialmedia/assets/images/resources/bg-img2.png" alt="" />
                                    </div>
                                    <div className="comment">
                                        <h3>Alameen Shaik Dawood</h3>
                                        <span><img src="reactsocialmedia/assets/images/clock.png" alt="" /> 3 min ago</span>
                                        <p>Hi Alameen Shaik Dawood </p>
                                        <Link to="/" ><i className="fa fa-reply-all"></i>Reply</Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className="comment-list">
                            <div className="bg-img">
                                <img src="reactsocialmedia/assets/images/resources/bg-img3.png" alt="" />
                            </div>
                            <div className="comment">
                                <h3>Alameen Shaik Dawood</h3>
                                <span><img src="reactsocialmedia/assets/images/clock.png" alt="" /> 3 min ago</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at.</p>
                                <Link to="/" ><i className="fa fa-reply-all"></i>Reply</Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="post-comment">
                <div className="cm_img">
                    <img src="reactsocialmedia/assets/images/resources/bg-img4.png" alt="" />
                </div>
                <div className="comment_box">
                    <form>
                        <input type="text" placeholder="Post a comment" />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PostyComments
