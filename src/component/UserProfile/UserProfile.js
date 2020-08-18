import React from 'react'
import { Link } from 'react-router-dom'
export default function UserProfile() {
    return (
        <>
            <section className="cover-sec">
                <img src="/reactsocialmedia/assets/images/resources/cover-img.jpg" alt="" />
            </section>
            <main>
                <div className="main-section">
                    <div className="container">
                        <div className="main-section-data">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="main-left-sidebar">
                                        <div className="user_profile">
                                            <div className="user-pro-img">
                                                <img src="/reactsocialmedia/assets/images/resources/user-pro-img.png" alt="" />
                                            </div>{/*user-pro-img end*/}
                                            <div className="user_pro_status">
                                                <ul className="flw-hr">
                                                    <li><Link to="#" title className="flww"><i className="la la-plus" /> Follow</Link></li>
                                                    <li><Link to="#" title className="hre">Hire</Link></li>
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
                                            </div>{/*user_pro_status end*/}
                                            <ul className="social_links">
                                                <li><Link to="#" title><i className="la la-globe" /> www.example.com</Link></li>
                                                <li><Link to="#" title><i className="fa fa-facebook-square" /> Http://www.facebook.com/john...</Link></li>
                                                <li><Link to="#" title><i className="fa fa-twitter" /> Http://www.Twitter.com/john...</Link></li>
                                                <li><Link to="#" title><i className="fa fa-google-plus-square" /> Http://www.googleplus.com/john...</Link></li>
                                                <li><Link to="#" title><i className="fa fa-behance-square" /> Http://www.behance.com/john...</Link></li>
                                                <li><Link to="#" title><i className="fa fa-pinterest" /> Http://www.pinterest.com/john...</Link></li>
                                                <li><Link to="#" title><i className="fa fa-instagram" /> Http://www.instagram.com/john...</Link></li>
                                                <li><Link to="#" title><i className="fa fa-youtube" /> Http://www.youtube.com/john...</Link></li>
                                            </ul>
                                        </div>{/*user_profile end*/}
                                        <div className="suggestions full-width">
                                            <div className="sd-title">
                                                <h3>Suggestions</h3>
                                                <i className="la la-ellipsis-v" />
                                            </div>{/*sd-title end*/}
                                            <div className="suggestions-list">
                                                <div className="suggestion-usd">
                                                    <img src="/reactsocialmedia/assets/images/resources/s1.png" alt="" />
                                                    <div className="sgt-text">
                                                        <h4>Jessica William</h4>
                                                        <span>Graphic Designer</span>
                                                    </div>
                                                    <span><i className="la la-plus" /></span>
                                                </div>
                                                <div className="suggestion-usd">
                                                    <img src="/reactsocialmedia/assets/images/resources/s2.png" alt="" />
                                                    <div className="sgt-text">
                                                        <h4>John Doe</h4>
                                                        <span>PHP Developer</span>
                                                    </div>
                                                    <span><i className="la la-plus" /></span>
                                                </div>
                                                <div className="suggestion-usd">
                                                    <img src="/reactsocialmedia/assets/images/resources/s3.png" alt="" />
                                                    <div className="sgt-text">
                                                        <h4>Poonam</h4>
                                                        <span>Wordpress Developer</span>
                                                    </div>
                                                    <span><i className="la la-plus" /></span>
                                                </div>
                                                <div className="suggestion-usd">
                                                    <img src="/reactsocialmedia/assets/images/resources/s4.png" alt="" />
                                                    <div className="sgt-text">
                                                        <h4>Bill Gates</h4>
                                                        <span>C &amp; C++ Developer</span>
                                                    </div>
                                                    <span><i className="la la-plus" /></span>
                                                </div>
                                                <div className="suggestion-usd">
                                                    <img src="/reactsocialmedia/assets/images/resources/s5.png" alt="" />
                                                    <div className="sgt-text">
                                                        <h4>Jessica William</h4>
                                                        <span>Graphic Designer</span>
                                                    </div>
                                                    <span><i className="la la-plus" /></span>
                                                </div>
                                                <div className="suggestion-usd">
                                                    <img src="/reactsocialmedia/assets/images/resources/s6.png" alt="" />
                                                    <div className="sgt-text">
                                                        <h4>John Doe</h4>
                                                        <span>PHP Developer</span>
                                                    </div>
                                                    <span><i className="la la-plus" /></span>
                                                </div>
                                                <div className="view-more">
                                                    <Link to="#" title>View More</Link>
                                                </div>
                                            </div>{/*suggestions-list end*/}
                                        </div>{/*suggestions end*/}
                                    </div>{/*main-left-sidebar end*/}
                                </div>
                                <div className="col-lg-6">
                                    <div className="main-ws-sec">
                                        <div className="user-tab-sec">
                                            <h3>John Doe</h3>
                                            <div className="star-descp">
                                                <span>Graphic Designer at Self Employed</span>
                                                <ul>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star" /></li>
                                                    <li><i className="fa fa-star-half-o" /></li>
                                                </ul>
                                            </div>{/*star-descp end*/}
                                            <div className="tab-feed">
                                                <ul>
                                                    <li data-tab="feed-dd" className="active">
                                                        <Link to="#" title>
                                                            <img src="/reactsocialmedia/assets/images/ic1.png" alt="" />
                                                            <span>Feed</span>
                                                        </Link>
                                                    </li>
                                                    <li data-tab="info-dd">
                                                        <Link to="#" title>
                                                            <img src="/reactsocialmedia/assets/images/ic2.png" alt="" />
                                                            <span>Info</span>
                                                        </Link>
                                                    </li>
                                                    <li data-tab="portfolio-dd">
                                                        <Link to="#" title>
                                                            <img src="/reactsocialmedia/assets/images/ic3.png" alt="" />
                                                            <span>Portfolio</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>{/* tab-feed end*/}
                                        </div>{/*user-tab-sec end*/}
                                        <div className="product-feed-tab current" id="feed-dd">
                                            <div className="posts-section">
                                                <div className="post-bar">
                                                    <div className="post_topbar">
                                                        <div className="usy-dt">
                                                            <img src="/reactsocialmedia/assets/images/resources/us-pic.png" alt="" />
                                                            <div className="usy-name">
                                                                <h3>John Doe</h3>
                                                                <span><img src="/reactsocialmedia/assets/images/clock.png" alt="" />3 min ago</span>
                                                            </div>
                                                        </div>
                                                        <div className="ed-opts">
                                                            <Link to="#" title className="ed-opts-open"><i className="la la-ellipsis-v" /></Link>
                                                            <ul className="ed-options">
                                                                <li><Link to="#" title>Edit Post</Link></li>
                                                                <li><Link to="#" title>Unsaved</Link></li>
                                                                <li><Link to="#" title>Unbid</Link></li>
                                                                <li><Link to="#" title>Close</Link></li>
                                                                <li><Link to="#" title>Hide</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="epi-sec">
                                                        <ul className="descp">
                                                            <li><img src="/reactsocialmedia/assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                                            <li><img src="/reactsocialmedia/assets/images/icon9.png" alt="" /><span>India</span></li>
                                                        </ul>
                                                        <ul className="bk-links">
                                                            <li><Link to="#" title><i className="la la-bookmark" /></Link></li>
                                                            <li><Link to="#" title><i className="la la-envelope" /></Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="job_descp">
                                                        <h3>Senior Wordpress Developer</h3>
                                                        <ul className="job-dt">
                                                            <li><Link to="#" title>Full Time</Link></li>
                                                            <li><span>$30 / hr</span></li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <Link to="#" title>view more</Link></p>
                                                        <ul className="skill-tags">
                                                            <li><Link to="#" title>HTML</Link></li>
                                                            <li><Link to="#" title>PHP</Link></li>
                                                            <li><Link to="#" title>CSS</Link></li>
                                                            <li><Link to="#" title>Javascript</Link></li>
                                                            <li><Link to="#" title>Wordpress</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="job-status-bar">
                                                        <ul className="like-com">
                                                            <li>
                                                                <Link to="#"><i className="fas fa-heart" /> Like</Link>
                                                                <img src="/reactsocialmedia/assets/images/liked-img.png" alt="" />
                                                                <span>25</span>
                                                            </li>
                                                            <li><Link to="#" className="com"><i className="fas fa-comment-alt" /> Comments 15</Link></li>
                                                        </ul>
                                                        <Link to="#"><i className="fas fa-eye" />Views 50</Link>
                                                    </div>
                                                </div>{/*post-bar end*/}
                                                <div className="post-bar">
                                                    <div className="post_topbar">
                                                        <div className="usy-dt">
                                                            <img src="/reactsocialmedia/assets/images/resources/us-pic.png" alt="" />
                                                            <div className="usy-name">
                                                                <h3>John Doe</h3>
                                                                <span><img src="/reactsocialmedia/assets/images/clock.png" alt="" />3 min ago</span>
                                                            </div>
                                                        </div>
                                                        <div className="ed-opts">
                                                            <Link to="#" title className="ed-opts-open"><i className="la la-ellipsis-v" /></Link>
                                                            <ul className="ed-options">
                                                                <li><Link to="#" title>Edit Post</Link></li>
                                                                <li><Link to="#" title>Unsaved</Link></li>
                                                                <li><Link to="#" title>Unbid</Link></li>
                                                                <li><Link to="#" title>Close</Link></li>
                                                                <li><Link to="#" title>Hide</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="epi-sec">
                                                        <ul className="descp">
                                                            <li><img src="/reactsocialmedia/assets/images/icon8.png" alt="" /><span>Front End Developer</span></li>
                                                            <li><img src="/reactsocialmedia/assets/images/icon9.png" alt="" /><span>India</span></li>
                                                        </ul>
                                                        <ul className="bk-links">
                                                            <li><Link to="#" title><i className="la la-bookmark" /></Link></li>
                                                            <li><Link to="#" title><i className="la la-envelope" /></Link></li>
                                                            <li><Link to="#" title className="bid_now">Bid Now</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="job_descp">
                                                        <h3>Simple Classified Site</h3>
                                                        <ul className="job-dt">
                                                            <li><span>$300 - $350</span></li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <Link to="#" title>view more</Link></p>
                                                        <ul className="skill-tags">
                                                            <li><Link to="#" title>HTML</Link></li>
                                                            <li><Link to="#" title>PHP</Link></li>
                                                            <li><Link to="#" title>CSS</Link></li>
                                                            <li><Link to="#" title>Javascript</Link></li>
                                                            <li><Link to="#" title>Wordpress</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="job-status-bar">
                                                        <ul className="like-com">
                                                            <li>
                                                                <Link to="#"><i className="fas fa-heart" /> Like</Link>
                                                                <img src="/reactsocialmedia/assets/images/liked-img.png" alt="" />
                                                                <span>25</span>
                                                            </li>
                                                            <li><Link to="#" className="com"><i className="fas fa-comment-alt" /> Comments 15</Link></li>
                                                        </ul>
                                                        <Link to="#"><i className="fas fa-eye" />Views 50</Link>
                                                    </div>
                                                </div>{/*post-bar end*/}
                                                <div className="post-bar">
                                                    <div className="post_topbar">
                                                        <div className="usy-dt">
                                                            <img src="/reactsocialmedia/assets/images/resources/us-pc2.png" alt="" />
                                                            <div className="usy-name">
                                                                <h3>John Doe</h3>
                                                                <span><img src="/reactsocialmedia/assets/images/clock.png" alt="" />3 min ago</span>
                                                            </div>
                                                        </div>
                                                        <div className="ed-opts">
                                                            <Link to="#" title className="ed-opts-open"><i className="la la-ellipsis-v" /></Link>
                                                            <ul className="ed-options">
                                                                <li><Link to="#" title>Edit Post</Link></li>
                                                                <li><Link to="#" title>Unsaved</Link></li>
                                                                <li><Link to="#" title>Unbid</Link></li>
                                                                <li><Link to="#" title>Close</Link></li>
                                                                <li><Link to="#" title>Hide</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="epi-sec">
                                                        <ul className="descp">
                                                            <li><img src="/reactsocialmedia/assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                                            <li><img src="/reactsocialmedia/assets/images/icon9.png" alt="" /><span>India</span></li>
                                                        </ul>
                                                        <ul className="bk-links">
                                                            <li><Link to="#" title><i className="la la-bookmark" /></Link></li>
                                                            <li><Link to="#" title><i className="la la-envelope" /></Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="job_descp">
                                                        <h3>Senior UI / UX designer</h3>
                                                        <ul className="job-dt">
                                                            <li><Link to="#" title>Par Time</Link></li>
                                                            <li><span>$10 / hr</span></li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <Link to="#" title>view more</Link></p>
                                                        <ul className="skill-tags">
                                                            <li><Link to="#" title>HTML</Link></li>
                                                            <li><Link to="#" title>PHP</Link></li>
                                                            <li><Link to="#" title>CSS</Link></li>
                                                            <li><Link to="#" title>Javascript</Link></li>
                                                            <li><Link to="#" title>Wordpress</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="job-status-bar">
                                                        <ul className="like-com">
                                                            <li>
                                                                <Link to="#"><i className="fas fa-heart" /> Like</Link>
                                                                <img src="/reactsocialmedia/assets/images/liked-img.png" alt="" />
                                                                <span>25</span>
                                                            </li>
                                                            <li><Link to="#" className="com"><i className="fas fa-comment-alt" /> Comments 15</Link></li>
                                                        </ul>
                                                        <Link to="#"><i className="fas fa-eye" />Views 50</Link>
                                                    </div>
                                                </div>{/*post-bar end*/}
                                                <div className="post-bar">
                                                    <div className="post_topbar">
                                                        <div className="usy-dt">
                                                            <img src="/reactsocialmedia/assets/images/resources/us-pic.png" alt="" />
                                                            <div className="usy-name">
                                                                <h3>John Doe</h3>
                                                                <span><img src="/reactsocialmedia/assets/images/clock.png" alt="" />3 min ago</span>
                                                            </div>
                                                        </div>
                                                        <div className="ed-opts">
                                                            <Link to="#" title className="ed-opts-open"><i className="la la-ellipsis-v" /></Link>
                                                            <ul className="ed-options">
                                                                <li><Link to="#" title>Edit Post</Link></li>
                                                                <li><Link to="#" title>Unsaved</Link></li>
                                                                <li><Link to="#" title>Unbid</Link></li>
                                                                <li><Link to="#" title>Close</Link></li>
                                                                <li><Link to="#" title>Hide</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="epi-sec">
                                                        <ul className="descp">
                                                            <li><img src="/reactsocialmedia/assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                                            <li><img src="/reactsocialmedia/assets/images/icon9.png" alt="" /><span>India</span></li>
                                                        </ul>
                                                        <ul className="bk-links">
                                                            <li><Link to="#" title><i className="la la-bookmark" /></Link></li>
                                                            <li><Link to="#" title><i className="la la-envelope" /></Link></li>
                                                            <li><Link to="#" title className="bid_now">Bid Now</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="job_descp">
                                                        <h3>Ios Shopping mobile app</h3>
                                                        <ul className="job-dt">
                                                            <li><span>$300 - $350</span></li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <Link to="#" title>view more</Link></p>
                                                        <ul className="skill-tags">
                                                            <li><Link to="#" title>HTML</Link></li>
                                                            <li><Link to="#" title>PHP</Link></li>
                                                            <li><Link to="#" title>CSS</Link></li>
                                                            <li><Link to="#" title>Javascript</Link></li>
                                                            <li><Link to="#" title>Wordpress</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="job-status-bar">
                                                        <ul className="like-com">
                                                            <li>
                                                                <Link to="#"><i className="fas fa-heart" /> Like</Link>
                                                                <img src="/reactsocialmedia/assets/images/liked-img.png" alt="" />
                                                                <span>25</span>
                                                            </li>
                                                            <li><Link to="#" className="com"><i className="fas fa-comment-alt" /> Comments 15</Link></li>
                                                        </ul>
                                                        <Link to="#"><i className="fas fa-eye" />Views 50</Link>
                                                    </div>
                                                </div>{/*post-bar end*/}
                                                <div className="process-comm">
                                                    <div className="spinner">
                                                        <div className="bounce1" />
                                                        <div className="bounce2" />
                                                        <div className="bounce3" />
                                                    </div>
                                                </div>{/*process-comm end*/}
                                            </div>{/*posts-section end*/}
                                        </div>{/*product-feed-tab end*/}
                                        <div className="product-feed-tab" id="info-dd">
                                            <div className="user-profile-ov">
                                                <h3>Overview</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus. Aliquam accumsan ac magna convallis bibendum. Quisque laoreet augue eget augue fermentum scelerisque. Vivamus dignissim mollis est dictum blandit. Nam porta auctor neque sed congue. Nullam rutrum eget ex at maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem.</p>
                                            </div>{/*user-profile-ov end*/}
                                            <div className="user-profile-ov st2">
                                                <h3>Experience</h3>
                                                <h4>Web designer</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
                                                <h4>UI / UX Designer</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id.</p>
                                                <h4>PHP developer</h4>
                                                <p className="no-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
                                            </div>{/*user-profile-ov end*/}
                                            <div className="user-profile-ov">
                                                <h3>Education</h3>
                                                <h4>Master of Computer Science</h4>
                                                <span>2015 - 2018</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
                                            </div>{/*user-profile-ov end*/}
                                            <div className="user-profile-ov">
                                                <h3>Location</h3>
                                                <h4>India</h4>
                                                <p>151/4 BT Chownk, Delhi </p>
                                            </div>{/*user-profile-ov end*/}
                                            <div className="user-profile-ov">
                                                <h3>Skills</h3>
                                                <ul>
                                                    <li><Link to="#" title>HTML</Link></li>
                                                    <li><Link to="#" title>PHP</Link></li>
                                                    <li><Link to="#" title>CSS</Link></li>
                                                    <li><Link to="#" title>Javascript</Link></li>
                                                    <li><Link to="#" title>Wordpress</Link></li>
                                                    <li><Link to="#" title>Photoshop</Link></li>
                                                    <li><Link to="#" title>Illustrator</Link></li>
                                                    <li><Link to="#" title>Corel Draw</Link></li>
                                                </ul>
                                            </div>{/*user-profile-ov end*/}
                                        </div>{/*product-feed-tab end*/}
                                        <div className="product-feed-tab" id="portfolio-dd">
                                            <div className="portfolio-gallery-sec">
                                                <h3>Portfolio</h3>
                                                <div className="gallery_pf">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                            <div className="gallery_pt">
                                                                <img src="/reactsocialmedia/assets/images/resources/pf-img1.jpg" alt="" />
                                                                <Link to="#" title><img src="/reactsocialmedia/assets/images/all-out.png" alt="" /></Link>
                                                            </div>{/*gallery_pt end*/}
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                            <div className="gallery_pt">
                                                                <img src="/reactsocialmedia/assets/images/resources/pf-img2.jpg" alt="" />
                                                                <Link to="#" title><img src="/reactsocialmedia/assets/images/all-out.png" alt="" /></Link>
                                                            </div>{/*gallery_pt end*/}
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                            <div className="gallery_pt">
                                                                <img src="/reactsocialmedia/assets/images/resources/pf-img3.jpg" alt="" />
                                                                <Link to="#" title><img src="/reactsocialmedia/assets/images/all-out.png" alt="" /></Link>
                                                            </div>{/*gallery_pt end*/}
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                            <div className="gallery_pt">
                                                                <img src="/reactsocialmedia/assets/images/resources/pf-img4.jpg" alt="" />
                                                                <Link to="#" title><img src="/reactsocialmedia/assets/images/all-out.png" alt="" /></Link>
                                                            </div>{/*gallery_pt end*/}
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                            <div className="gallery_pt">
                                                                <img src="/reactsocialmedia/assets/images/resources/pf-img5.jpg" alt="" />
                                                                <Link to="#" title><img src="/reactsocialmedia/assets/images/all-out.png" alt="" /></Link>
                                                            </div>{/*gallery_pt end*/}
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                            <div className="gallery_pt">
                                                                <img src="/reactsocialmedia/assets/images/resources/pf-img6.jpg" alt="" />
                                                                <Link to="#" title><img src="/reactsocialmedia/assets/images/all-out.png" alt="" /></Link>
                                                            </div>{/*gallery_pt end*/}
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                            <div className="gallery_pt">
                                                                <img src="/reactsocialmedia/assets/images/resources/pf-img7.jpg" alt="" />
                                                                <Link to="#" title><img src="/reactsocialmedia/assets/images/all-out.png" alt="" /></Link>
                                                            </div>{/*gallery_pt end*/}
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                            <div className="gallery_pt">
                                                                <img src="/reactsocialmedia/assets/images/resources/pf-img8.jpg" alt="" />
                                                                <Link to="#" title><img src="/reactsocialmedia/assets/images/all-out.png" alt="" /></Link>
                                                            </div>{/*gallery_pt end*/}
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                            <div className="gallery_pt">
                                                                <img src="/reactsocialmedia/assets/images/resources/pf-img9.jpg" alt="" />
                                                                <Link to="#" title><img src="/reactsocialmedia/assets/images/all-out.png" alt="" /></Link>
                                                            </div>{/*gallery_pt end*/}
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                                            <div className="gallery_pt">
                                                                <img src="/reactsocialmedia/assets/images/resources/pf-img10.jpg" alt="" />
                                                                <Link to="#" title><img src="/reactsocialmedia/assets/images/all-out.png" alt="" /></Link>
                                                            </div>{/*gallery_pt end*/}
                                                        </div>
                                                    </div>
                                                </div>{/*gallery_pf end*/}
                                            </div>{/*portfolio-gallery-sec end*/}
                                        </div>{/*product-feed-tab end*/}
                                    </div>{/*main-ws-sec end*/}
                                </div>
                                <div className="col-lg-3">
                                    <div className="right-sidebar">
                                        <div className="message-btn">
                                            <Link to="#" title><i className="fa fa-envelope" /> Message</Link>
                                        </div>
                                        <div className="widget widget-portfolio">
                                            <div className="wd-heady">
                                                <h3>Portfolio</h3>
                                                <img src="/reactsocialmedia/assets/images/photo-icon.png" alt="" />
                                            </div>
                                            <div className="pf-gallery">
                                                <ul>
                                                    <li><Link to="#" title><img src="/reactsocialmedia/assets/images/resources/pf-gallery1.png" alt="" /></Link></li>
                                                    <li><Link to="#" title><img src="/reactsocialmedia/assets/images/resources/pf-gallery2.png" alt="" /></Link></li>
                                                    <li><Link to="#" title><img src="/reactsocialmedia/assets/images/resources/pf-gallery3.png" alt="" /></Link></li>
                                                    <li><Link to="#" title><img src="/reactsocialmedia/assets/images/resources/pf-gallery4.png" alt="" /></Link></li>
                                                    <li><Link to="#" title><img src="/reactsocialmedia/assets/images/resources/pf-gallery5.png" alt="" /></Link></li>
                                                    <li><Link to="#" title><img src="/reactsocialmedia/assets/images/resources/pf-gallery6.png" alt="" /></Link></li>
                                                    <li><Link to="#" title><img src="/reactsocialmedia/assets/images/resources/pf-gallery7.png" alt="" /></Link></li>
                                                    <li><Link to="#" title><img src="/reactsocialmedia/assets/images/resources/pf-gallery8.png" alt="" /></Link></li>
                                                    <li><Link to="#" title><img src="/reactsocialmedia/assets/images/resources/pf-gallery9.png" alt="" /></Link></li>
                                                    <li><Link to="#" title><img src="/reactsocialmedia/assets/images/resources/pf-gallery10.png" alt="" /></Link></li>
                                                    <li><Link to="#" title><img src="/reactsocialmedia/assets/images/resources/pf-gallery11.png" alt="" /></Link></li>
                                                    <li><Link to="#" title><img src="/reactsocialmedia/assets/images/resources/pf-gallery12.png" alt="" /></Link></li>
                                                </ul>
                                            </div>{/*pf-gallery end*/}
                                        </div>{/*widget-portfolio end*/}
                                    </div>{/*right-sidebar end*/}
                                </div>
                            </div>
                        </div>{/* main-section-data end*/}
                    </div>
                </div>
            </main>
        </>

    )
}