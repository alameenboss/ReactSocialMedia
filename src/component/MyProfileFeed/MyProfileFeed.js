import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Cover from './../Shared/Cover';
import CompanyData from './../Shared/CompanyData';
import HomeSuggestions from './../Home/HomeSuggestions';
import Rating from './../Shared/Rating';
import LoadingIndicator from './../Shared/LoadingIndicator';
import PostyList from './../Posts/PostyList';
import CompanyPortfolio from './../Shared/CompanyPortfolio';

export default function MyProfileFeed() {
  const company = useSelector(state => state.company);
  const [section, toggleSection] = useState('Feed');
  return (
    <>

      <Cover coverImg="/reactsocialmedia/assets/images/resources/cover-img.jpg" />

      <main>
        <div className="main-section">
          <div className="container">
            <div className="main-section-data">
              <div className="row">
                <div className="col-lg-3">
                  <div className="main-left-sidebar">
                    <CompanyData img="/reactsocialmedia/assets/images/resources/user-pro-img.png"
                      following="34"
                      followers="155"
                      sociallinks={company.sociallinks}
                    />
                    <HomeSuggestions />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="main-ws-sec">
                    <div className="user-tab-sec">
                      <h3>{company.name}</h3>
                      <div className="star-descp">
                        <span>{company.establish}</span>
                        <Rating />
                      </div>
                      <div className="tab-feed">
                        <ul>
                          {
                            company.sections.map((value, index) =>
                              <li key={index} data-tab="feed-dd"
                                className={section === value.name ? 'active' : ''}
                                onClick={() => toggleSection(value.name)}>
                                <Link to="#" title="">
                                  <img src={value.icon} alt="" />
                                  <span>{value.name}</span>
                                </Link>
                              </li>
                            )
                          }
                        </ul>
                      </div>
                    </div>

                    <div className={section === 'Jobs' ? 'product-feed-tab current' : 'product-feed-tab'} id="saved-jobs">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                          <Link className="nav-link active" id="mange-tab" data-toggle="tab" to="#mange" role="tab" aria-controls="home" aria-selected="true">Manage Jobs</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" id="saved-tab" data-toggle="tab" to="#saved" role="tab" aria-controls="profile" aria-selected="false">Saved Jobs</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" id="contact-tab" data-toggle="tab" to="#applied" role="tab" aria-controls="applied" aria-selected="false">Applied Jobs</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" id="cadidates-tab" data-toggle="tab" to="#cadidates" role="tab" aria-controls="contact" aria-selected="false">Applied cadidates</Link>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="mange" role="tabpanel" aria-labelledby="mange-tab">
                          <div className="posts-bar">
                            <div className="post-bar bgclr">
                              <div className="wordpressdevlp">
                                <h2>Senior Wordpress Developer</h2>
                                <p><i className="la la-clock-o" />Posted on 30 August 2018</p>
                              </div>
                              <br />
                              <div className="row no-gutters">
                                <div className="col-md-6 col-sm-12">
                                  <div className="cadidatesbtn">
                                    <button type="button" className="btn btn-primary">
                                      <span className="badge badge-light">3</span>Candidates
                                      </button>
                                    <Link to="#">
                                      <i className="far fa-edit" />
                                    </Link>
                                    <Link to="#">
                                      <i className="far fa-trash-alt" />
                                    </Link>
                                  </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                  <ul className="bk-links bklink">
                                    <li><Link to="#" title><i className="la la-bookmark" /></Link></li>
                                    <li><Link to="#" title><i className="la la-envelope" /></Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="posts-bar">
                            <div className="post-bar bgclr">
                              <div className="wordpressdevlp">
                                <h2>Senior Php Developer</h2>
                                <p><i className="la la-clock-o" /> Posted on 29 August 2018</p>
                              </div>
                              <br />
                              <div className="row no-gutters">
                                <div className="col-md-6 col-sm-12">
                                  <div className="cadidatesbtn">
                                    <button type="button" className="btn btn-primary">
                                      <span className="badge badge-light">3</span>Candidates
                                      </button>
                                    <Link to="#">
                                      <i className="far fa-edit" />
                                    </Link>
                                    <Link to="#">
                                      <i className="far fa-trash-alt" />
                                    </Link>
                                  </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                  <ul className="bk-links bklink">
                                    <li><Link to="#" title><i className="la la-bookmark" /></Link></li>
                                    <li><Link to="#" title><i className="la la-envelope" /></Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="posts-bar">
                            <div className="post-bar bgclr">
                              <div className="wordpressdevlp">
                                <h2>Senior UI UX Designer</h2>
                                <div className="row no-gutters">
                                  <div className="col-md-6 col-sm-12">
                                    <p className="posttext"><i className="la la-clock-o" />Posted on 5 June 2018</p>
                                  </div>
                                  <div className="col-md-6 col-sm-12">
                                    <p><i className="la la-clock-o" />Expiried on 5 October 2018</p>
                                  </div>
                                </div>
                              </div>
                              <br />
                              <div className="row no-gutters">
                                <div className="col-md-6 col-sm-12">
                                  <div className="cadidatesbtn">
                                    <button type="button" className="btn btn-primary">
                                      <span className="badge badge-light">3</span>Candidates
                                      </button>
                                    <Link to="#">
                                      <i className="far fa-trash-alt" />
                                    </Link>
                                  </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                  <ul className="bk-links bklink">
                                    <li><Link to="#" title><i className="la la-bookmark" /></Link></li>
                                    <li><Link to="#" title><i className="la la-envelope" /></Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="saved" role="tabpanel" aria-labelledby="saved-tab">
                          <div className="post-bar">
                            <div className="p-all saved-post">
                              <div className="usy-dt">
                                <div className="wordpressdevlp">
                                  <h2>Senior Wordpress Developer</h2>
                                  <p><i className="la la-clock-o" />Posted on 30 August 2018</p>
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
                            <ul className="savedjob-info saved-info">
                              <li>
                                <h3>Applicants</h3>
                                <p>10</p>
                              </li>
                              <li>
                                <h3>Job Type</h3>
                                <p>Full Time</p>
                              </li>
                              <li>
                                <h3>Salary</h3>
                                <p>$600 - Mannual</p>
                              </li>
                              <li>
                                <h3>Posted : 5 Days Ago</h3>
                                <p>Open</p>
                              </li>
                              <div className="devepbtn saved-btn">
                                <Link className="clrbtn" to="#">Unsaved</Link>
                                <Link className="clrbtn" to="#">Message</Link>
                              </div>
                            </ul>
                          </div>
                          <div className="post-bar">
                            <div className="p-all saved-post">
                              <div className="usy-dt">
                                <div className="wordpressdevlp">
                                  <h2>Senior PHP Developer</h2>
                                  <p><i className="la la-clock-o" />Posted on 30 August 2018</p>
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
                            <ul className="savedjob-info saved-info">
                              <li>
                                <h3>Applicants</h3>
                                <p>10</p>
                              </li>
                              <li>
                                <h3>Job Type</h3>
                                <p>Full Time</p>
                              </li>
                              <li>
                                <h3>Salary</h3>
                                <p>$600 - Mannual</p>
                              </li>
                              <li>
                                <h3>Posted : 5 Days Ago</h3>
                                <p>Open</p>
                              </li>
                              <div className="devepbtn saved-btn">
                                <Link className="clrbtn" to="#">Unsaved</Link>
                                <Link className="clrbtn" to="#">Message</Link>
                              </div>
                            </ul>
                          </div>
                          <div className="post-bar">
                            <div className="p-all saved-post">
                              <div className="usy-dt">
                                <div className="wordpressdevlp">
                                  <h2>UI UX Designer</h2>
                                  <p><i className="la la-clock-o" />Posted on 30 August 2018</p>
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
                            <ul className="savedjob-info saved-info">
                              <li>
                                <h3>Applicants</h3>
                                <p>10</p>
                              </li>
                              <li>
                                <h3>Job Type</h3>
                                <p>Full Time</p>
                              </li>
                              <li>
                                <h3>Salary</h3>
                                <p>$600 - Mannual</p>
                              </li>
                              <li>
                                <h3>Posted : 5 Days Ago</h3>
                                <p>Open</p>
                              </li>
                              <div className="devepbtn saved-btn">
                                <Link className="clrbtn" to="#">Unsaved</Link>
                                <Link className="clrbtn" to="#">Message</Link>
                              </div>
                            </ul>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="applied" role="tabpanel" aria-labelledby="applied-tab">
                          <div className="post-bar">
                            <div className="p-all saved-post">
                              <div className="usy-dt">
                                <div className="wordpressdevlp">
                                  <h2>Senior Wordpress Developer</h2>
                                  <p><i className="la la-clock-o" />Posted on 30 August 2018</p>
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
                            <ul className="savedjob-info saved-info">
                              <li>
                                <h3>Applicants</h3>
                                <p>10</p>
                              </li>
                              <li>
                                <h3>Job Type</h3>
                                <p>Full Time</p>
                              </li>
                              <li>
                                <h3>Salary</h3>
                                <p>$600 - Mannual</p>
                              </li>
                              <li>
                                <h3>Posted : 5 Days Ago</h3>
                                <p>Open</p>
                              </li>
                              <div className="devepbtn saved-btn">
                                <Link className="clrbtn" to="#">Applied</Link>
                                <Link className="clrbtn" to="#">Message</Link>
                                <Link to="#">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </div>
                            </ul>
                          </div>
                          <div className="post-bar">
                            <div className="p-all saved-post">
                              <div className="usy-dt">
                                <div className="wordpressdevlp">
                                  <h2>Senior PHP Developer</h2>
                                  <p><i className="la la-clock-o" />Posted on 30 August 2018</p>
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
                            <ul className="savedjob-info saved-info">
                              <li>
                                <h3>Applicants</h3>
                                <p>10</p>
                              </li>
                              <li>
                                <h3>Job Type</h3>
                                <p>Full Time</p>
                              </li>
                              <li>
                                <h3>Salary</h3>
                                <p>$600 - Mannual</p>
                              </li>
                              <li>
                                <h3>Posted : 5 Days Ago</h3>
                                <p>Open</p>
                              </li>
                              <div className="devepbtn saved-btn">
                                <Link className="clrbtn" to="#">Applied</Link>
                                <Link className="clrbtn" to="#">Message</Link>
                                <Link to="#">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </div>
                            </ul>
                          </div>
                          <div className="post-bar">
                            <div className="p-all saved-post">
                              <div className="usy-dt">
                                <div className="wordpressdevlp">
                                  <h2>UI UX Designer</h2>
                                  <p><i className="la la-clock-o" />Posted on 30 August 2018</p>
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
                            <ul className="savedjob-info saved-info">
                              <li>
                                <h3>Applicants</h3>
                                <p>10</p>
                              </li>
                              <li>
                                <h3>Job Type</h3>
                                <p>Full Time</p>
                              </li>
                              <li>
                                <h3>Salary</h3>
                                <p>$600 - Mannual</p>
                              </li>
                              <li>
                                <h3>Posted : 5 Days Ago</h3>
                                <p>Open</p>
                              </li>
                              <div className="devepbtn saved-btn">
                                <Link className="clrbtn" to="#">Applied</Link>
                                <Link className="clrbtn" to="#">Message</Link>
                                <Link to="#">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </div>
                            </ul>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="cadidates" role="tabpanel" aria-labelledby="cadidates-tab">
                          <div className="post-bar">
                            <div className="post_topbar applied-post">
                              <div className="usy-dt">
                                <img src="/reactsocialmedia/assets/images/resources/us-pic.png" alt="" />
                                <div className="usy-name">
                                  <h3>John Doe</h3>
                                  <div className="epi-sec epi2">
                                    <ul className="descp descptab bklink">
                                      <li><img src="/reactsocialmedia/assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                      <li><img src="/reactsocialmedia/assets/images/icon9.png" alt="" /><span>India</span></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="ed-opts">
                                <Link to="#" title className="ed-opts-open"><i className="la la-ellipsis-v" /></Link>
                                <ul className="ed-options">
                                  <li><Link to="#" title>Edit Post</Link></li>
                                  <li><Link to="#" title>Accept</Link></li>
                                  <li><Link to="#" title>Unbid</Link></li>
                                  <li><Link to="#" title>Close</Link></li>
                                  <li><Link to="#" title>Hide</Link></li>
                                </ul>
                              </div>
                              <div className="job_descp noborder">
                                <div className="star-descp review profilecnd">
                                  <ul className="bklik">
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star-half-o" /></li>
                                    <Link to="#" title>5.0 of 5 Reviews</Link>
                                  </ul>
                                </div>
                                <div className="devepbtn appliedinfo noreply">
                                  <Link className="clrbtn" to="#">Accept</Link>
                                  <Link className="clrbtn" to="#">View Profile</Link>
                                  <Link className="clrbtn" to="#">Message</Link>
                                  <Link to="#">
                                    <i className="far fa-trash-alt" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post-bar">
                            <div className="post_topbar  applied-post">
                              <div className="usy-dt">
                                <img src="/reactsocialmedia/assets/images/resources/us-pic.png" alt="" />
                                <div className="usy-name">
                                  <h3>John Doe</h3>
                                  <div className="epi-sec epi2">
                                    <ul className="descp descptab bklink">
                                      <li><img src="/reactsocialmedia/assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                      <li><img src="/reactsocialmedia/assets/images/icon9.png" alt="" /><span>India</span></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="ed-opts">
                                <Link to="#" title className="ed-opts-open"><i className="la la-ellipsis-v" /></Link>
                                <ul className="ed-options">
                                  <li><Link to="#" title>Edit Post</Link></li>
                                  <li><Link to="#" title>Accept</Link></li>
                                  <li><Link to="#" title>Unbid</Link></li>
                                  <li><Link to="#" title>Close</Link></li>
                                  <li><Link to="#" title>Hide</Link></li>
                                </ul>
                              </div>
                              <div className="job_descp noborder">
                                <div className="star-descp review profilecnd">
                                  <ul className="bklik">
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star-half-o" /></li>
                                    <Link to="#" title>5.0 of 5 Reviews</Link>
                                  </ul>
                                </div>
                                <div className="devepbtn appliedinfo noreply">
                                  <Link className="clrbtn" to="#">Accept</Link>
                                  <Link className="clrbtn" to="#">View Profile</Link>
                                  <Link className="clrbtn" to="#">Message</Link>
                                  <Link to="#">
                                    <i className="far fa-trash-alt" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post-bar">
                            <div className="post_topbar applied-post">
                              <div className="usy-dt">
                                <img src="/reactsocialmedia/assets/images/resources/us-pic.png" alt="" />
                                <div className="usy-name">
                                  <h3>John Doe</h3>
                                  <div className="epi-sec epi2">
                                    <ul className="descp descptab bklink">
                                      <li><img src="/reactsocialmedia/assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                      <li><img src="/reactsocialmedia/assets/images/icon9.png" alt="" /><span>India</span></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="ed-opts">
                                <Link to="#" title className="ed-opts-open"><i className="la la-ellipsis-v" /></Link>
                                <ul className="ed-options">
                                  <li><Link to="#" title>Edit Post</Link></li>
                                  <li><Link to="#" title>Accept</Link></li>
                                  <li><Link to="#" title>Unbid</Link></li>
                                  <li><Link to="#" title>Close</Link></li>
                                  <li><Link to="#" title>Hide</Link></li>
                                </ul>
                              </div>
                              <div className="job_descp noborder">
                                <div className="star-descp review profilecnd">
                                  <ul className="bklik">
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star-half-o" /></li>
                                    <Link to="#" title>5.0 of 5 Reviews</Link>
                                  </ul>
                                </div>
                                <div className="devepbtn appliedinfo noreply">
                                  <Link className="clrbtn" to="#">Accept</Link>
                                  <Link className="clrbtn" to="#">View Profile</Link>
                                  <Link className="clrbtn" to="#">Message</Link>
                                  <Link to="#">
                                    <i className="far fa-trash-alt" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={section === 'Feed' ? 'product-feed-tab current' : 'product-feed-tab'} id="feed-dd">
                      <div className="posts-section">
                        <PostyList name={company.name} img={company.dpimg} />
                        <LoadingIndicator />
                      </div>
                    </div>
                    <div className={section === 'Bids' ? 'product-feed-tab current' : 'product-feed-tab'} id="my-bids">
                      <ul className="nav nav-tabs bid-tab" id="myTab" role="tablist">
                        <li className="nav-item">
                          <Link className="nav-link active" id="home-tab" data-toggle="tab" to="#home" role="tab" aria-controls="home" aria-selected="true">Manage Bids</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" id="bidders-tab" data-toggle="tab" to="#bidders" role="tab" aria-controls="contact" aria-selected="false">Manage Bidders</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" id="profile-tab" data-toggle="tab" to="#profile" role="tab" aria-controls="profile" aria-selected="false">My Active Bids</Link>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <div className="post-bar">
                            <div className="post_topbar">
                              <div className="wordpressdevlp">
                                <h2>Travel Wordpress Theme</h2>
                                <p><i className="la la-clock-o" />5 Hour Lefts</p>
                              </div>
                              <ul className="savedjob-info mangebid manbids">
                                <li>
                                  <h3>Bids</h3>
                                  <p>4</p>
                                </li>
                                <li>
                                  <h3>Avg Bid (USD)</h3>
                                  <p>$510</p>
                                </li>
                                <li>
                                  <h3>Project Budget (USD)</h3>
                                  <p>$500 - $600</p>
                                </li>
                                <ul className="bk-links bklink">
                                  <li><Link to="#" title><i className="la la-bookmark" /></Link></li>
                                  <li><Link to="#" title><i className="la la-envelope" /></Link></li>
                                </ul>
                              </ul>
                              <br />
                              <div className="cadidatesbtn bidsbtn">
                                <button type="button" className="btn btn-primary">
                                  <span className="badge badge-light">3</span>Candidates
                                  </button>
                                <Link to="#">
                                  <i className="far fa-edit" />
                                </Link>
                                <Link to="#">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="post-bar">
                            <div className="post_topbar">
                              <div className="wordpressdevlp">
                                <h2>Travel Wordpress Theme</h2>
                                <p><i className="la la-clock-o" />5 Hour Lefts</p>
                              </div>
                              <ul className="savedjob-info mangebid manbids">
                                <li>
                                  <h3>Bids</h3>
                                  <p>4</p>
                                </li>
                                <li>
                                  <h3>Avg Bid (USD)</h3>
                                  <p>$510</p>
                                </li>
                                <li>
                                  <h3>Project Budget (USD)</h3>
                                  <p>$500 - $600</p>
                                </li>
                                <ul className="bk-links bklink">
                                  <li><Link to="#" title><i className="la la-bookmark" /></Link></li>
                                  <li><Link to="#" title><i className="la la-envelope" /></Link></li>
                                </ul>
                              </ul>
                              <br />
                              <div className="cadidatesbtn bidsbtn">
                                <button type="button" className="btn btn-primary">
                                  <span className="badge badge-light">3</span>Candidates
                                  </button>
                                <Link to="#">
                                  <i className="far fa-edit" />
                                </Link>
                                <Link to="#">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="post-bar">
                            <div className="post_topbar">
                              <div className="wordpressdevlp">
                                <h2>Travel Wordpress Theme</h2>
                                <p><i className="la la-clock-o" />5 Hour Lefts</p>
                              </div>
                              <ul className="savedjob-info mangebid manbids">
                                <li>
                                  <h3>Bids</h3>
                                  <p>4</p>
                                </li>
                                <li>
                                  <h3>Avg Bid (USD)</h3>
                                  <p>$510</p>
                                </li>
                                <li>
                                  <h3>Project Budget (USD)</h3>
                                  <p>$500 - $600</p>
                                </li>
                                <ul className="bk-links bklink">
                                  <li><Link to="#" title><i className="la la-bookmark" /></Link></li>
                                  <li><Link to="#" title><i className="la la-envelope" /></Link></li>
                                </ul>
                              </ul>
                              <br />
                              <div className="cadidatesbtn bidsbtn">
                                <button type="button" className="btn btn-primary">
                                  <span className="badge badge-light">3</span>Candidates
                                  </button>
                                <Link to="#">
                                  <i className="far fa-edit" />
                                </Link>
                                <Link to="#">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                          <div className="post-bar">
                            <div className="post_topbar active-bids">
                              <div className="usy-dt">
                                <div className="wordpressdevlp">
                                  <h2>Travel Wordpress Theme</h2>
                                </div>
                              </div>
                            </div>
                            <ul className="savedjob-info activ-bidinfo">
                              <li>
                                <h3>Fixed Price</h3>
                                <p>$500</p>
                              </li>
                              <li>
                                <h3>Delivery Time</h3>
                                <p>8 Days</p>
                              </li>
                              <div className="devepbtn activebtn">
                                <Link to="#">
                                  <i className="far fa-edit" />
                                </Link>
                                <Link to="#">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </div>
                            </ul>
                          </div>
                          <div className="post-bar">
                            <div className="post_topbar active-bids">
                              <div className="usy-dt">
                                <div className="wordpressdevlp">
                                  <h2>Restaurant Android Application</h2>
                                </div>
                              </div>
                            </div>
                            <ul className="savedjob-info activ-bidinfo">
                              <li>
                                <h3>Fixed Price</h3>
                                <p>$1500</p>
                              </li>
                              <li>
                                <h3>Delivery Time</h3>
                                <p>15 Days</p>
                              </li>
                              <div className="devepbtn activebtn">
                                <Link to="#">
                                  <i className="far fa-edit" />
                                </Link>
                                <Link to="#">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </div>
                            </ul>
                          </div>
                          <div className="post-bar">
                            <div className="post_topbar active-bids">
                              <div className="usy-dt">
                                <div className="wordpressdevlp">
                                  <h2>Online Shopping Html Template with PHP</h2>
                                </div>
                              </div>
                            </div>
                            <ul className="savedjob-info activ-bidinfo">
                              <li>
                                <h3>Fixed Price</h3>
                                <p>$1500</p>
                              </li>
                              <li>
                                <h3>Delivery Time</h3>
                                <p>15 Days</p>
                              </li>
                              <div className="devepbtn activebtn">
                                <Link to="#">
                                  <i className="far fa-edit" />
                                </Link>
                                <Link to="#">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </div>
                            </ul>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                          <div className="post-bar">
                            <div className="post_topbar">
                              <div className="usy-dt">
                                <div className="wordpressdevlp">
                                  <h2>Senior Wordpress Developer</h2>
                                  <br />
                                  <p><i className="la la-clock-o" />Posted on 30 August 2018</p>
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
                            <ul className="savedjob-info">
                              <li>
                                <h3>Applicants</h3>
                                <p>10</p>
                              </li>
                              <li>
                                <h3>Job Type</h3>
                                <p>Full Time</p>
                              </li>
                              <li>
                                <h3>Salary</h3>
                                <p>$600 - Mannual</p>
                              </li>
                              <li>
                                <h3>Posted : 5 Days Ago</h3>
                                <p>Open</p>
                              </li>
                              <div className="devepbtn">
                                <Link className="clrbtn" to="#">Applied</Link>
                                <Link className="clrbtn" to="#">Message</Link>
                                <Link to="#">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </div>
                            </ul>
                          </div>
                          <div className="post-bar">
                            <div className="post_topbar">
                              <div className="usy-dt">
                                <div className="wordpressdevlp">
                                  <h2>Senior PHP Developer</h2>
                                  <br />
                                  <p><i className="la la-clock-o" />Posted on 30 August 2018</p>
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
                            <ul className="savedjob-info">
                              <li>
                                <h3>Applicants</h3>
                                <p>10</p>
                              </li>
                              <li>
                                <h3>Job Type</h3>
                                <p>Full Time</p>
                              </li>
                              <li>
                                <h3>Salary</h3>
                                <p>$600 - Mannual</p>
                              </li>
                              <li>
                                <h3>Posted : 5 Days Ago</h3>
                                <p>Open</p>
                              </li>
                              <div className="devepbtn">
                                <Link className="clrbtn" to="#">Applied</Link>
                                <Link className="clrbtn" to="#">Message</Link>
                                <Link to="#">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </div>
                            </ul>
                          </div>
                          <div className="post-bar">
                            <div className="post_topbar">
                              <div className="usy-dt">
                                <div className="wordpressdevlp">
                                  <h2>UI UX Designer</h2>
                                  <br />
                                  <p><i className="la la-clock-o" />Posted on 30 August 2018</p>
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
                            <ul className="savedjob-info">
                              <li>
                                <h3>Applicants</h3>
                                <p>10</p>
                              </li>
                              <li>
                                <h3>Job Type</h3>
                                <p>Full Time</p>
                              </li>
                              <li>
                                <h3>Salary</h3>
                                <p>$600 - Mannual</p>
                              </li>
                              <li>
                                <h3>Posted : 5 Days Ago</h3>
                                <p>Open</p>
                              </li>
                              <div className="devepbtn">
                                <Link className="clrbtn" to="#">Applied</Link>
                                <Link className="clrbtn" to="#">Message</Link>
                                <Link to="#">
                                  <i className="far fa-trash-alt" />
                                </Link>
                              </div>
                            </ul>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="bidders" role="tabpanel" aria-labelledby="bidders-tab">
                          <div className="post-bar">
                            <div className="post_topbar post-bid">
                              <div className="usy-dt">
                                <img src="/reactsocialmedia/assets/images/resources/us-pic.png" alt="" />
                                <div className="usy-name">
                                  <h3>John Doe</h3>
                                  <div className="epi-sec epi2">
                                    <ul className="descp descptab bklink">
                                      <li><img src="/reactsocialmedia/assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                      <li><img src="/reactsocialmedia/assets/images/icon9.png" alt="" /><span>India</span></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="ed-opts">
                                <Link to="#" title className="ed-opts-open"><i className="la la-ellipsis-v" /></Link>
                                <ul className="ed-options">
                                  <li><Link to="#" title>Edit Post</Link></li>
                                  <li><Link to="#" title>Accept</Link></li>
                                  <li><Link to="#" title>Unbid</Link></li>
                                  <li><Link to="#" title>Close</Link></li>
                                  <li><Link to="#" title>Hide</Link></li>
                                </ul>
                              </div>
                              <div className="job_descp noborder">
                                <div className="star-descp review profilecnd">
                                  <ul className="bklik">
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star-half-o" /></li>
                                    <Link to="#" title>5.0 of 5 Reviews</Link>
                                  </ul>
                                </div>
                                <ul className="savedjob-info biddersinfo">
                                  <li>
                                    <h3>Fixed Price</h3>
                                    <p>$500</p>
                                  </li>
                                  <li>
                                    <h3>Delivery Time</h3>
                                    <p>10 Days</p>
                                  </li>
                                </ul>
                                <div className="devepbtn appliedinfo bidsbtn">
                                  <Link className="clrbtn" to="#">Accept</Link>
                                  <Link className="clrbtn" to="#">View Profile</Link>
                                  <Link className="clrbtn" to="#">Message</Link>
                                  <Link to="#">
                                    <i className="far fa-trash-alt" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post-bar">
                            <div className="post_topbar post-bid">
                              <div className="usy-dt">
                                <img src="/reactsocialmedia/assets/images/resources/Jassica.html" alt="" />
                                <div className="usy-name">
                                  <h3>John Doe</h3>
                                  <div className="epi-sec epi2">
                                    <ul className="descp descptab bklink">
                                      <li><img src="/reactsocialmedia/assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                      <li><img src="/reactsocialmedia/assets/images/icon9.png" alt="" /><span>India</span></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="ed-opts">
                                <Link to="#" title className="ed-opts-open"><i className="la la-ellipsis-v" /></Link>
                                <ul className="ed-options">
                                  <li><Link to="#" title>Edit Post</Link></li>
                                  <li><Link to="#" title>Accept</Link></li>
                                  <li><Link to="#" title>Unbid</Link></li>
                                  <li><Link to="#" title>Close</Link></li>
                                  <li><Link to="#" title>Hide</Link></li>
                                </ul>
                              </div>
                              <div className="job_descp noborder">
                                <div className="star-descp review profilecnd">
                                  <ul className="bklik">
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star-half-o" /></li>
                                    <Link to="#" title>5.0 of 5 Reviews</Link>
                                  </ul>
                                </div>
                                <ul className="savedjob-info biddersinfo">
                                  <li>
                                    <h3>Fixed Price</h3>
                                    <p>$500</p>
                                  </li>
                                  <li>
                                    <h3>Delivery Time</h3>
                                    <p>10 Days</p>
                                  </li>
                                </ul>
                                <div className="devepbtn appliedinfo bidsbtn">
                                  <Link className="clrbtn" to="#">Accept</Link>
                                  <Link className="clrbtn" to="#">View Profile</Link>
                                  <Link className="clrbtn" to="#">Message</Link>
                                  <Link to="#">
                                    <i className="far fa-trash-alt" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="post-bar">
                            <div className="post_topbar post-bid">
                              <div className="usy-dt">
                                <img src="/reactsocialmedia/assets/images/resources/rock.jpg" alt="" />
                                <div className="usy-name">
                                  <h3>John Doe</h3>
                                  <div className="epi-sec epi2">
                                    <ul className="descp descptab bklink">
                                      <li><img src="/reactsocialmedia/assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                      <li><img src="/reactsocialmedia/assets/images/icon9.png" alt="" /><span>India</span></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="ed-opts">
                                <Link to="#" title className="ed-opts-open"><i className="la la-ellipsis-v" /></Link>
                                <ul className="ed-options">
                                  <li><Link to="#" title>Edit Post</Link></li>
                                  <li><Link to="#" title>Accept</Link></li>
                                  <li><Link to="#" title>Unbid</Link></li>
                                  <li><Link to="#" title>Close</Link></li>
                                  <li><Link to="#" title>Hide</Link></li>
                                </ul>
                              </div>
                              <div className="job_descp noborder">
                                <div className="star-descp review profilecnd">
                                  <ul className="bklik">
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star-half-o" /></li>
                                    <Link to="#" title>5.0 of 5 Reviews</Link>
                                  </ul>
                                </div>
                                <ul className="savedjob-info biddersinfo">
                                  <li>
                                    <h3>Fixed Price</h3>
                                    <p>$500</p>
                                  </li>
                                  <li>
                                    <h3>Delivery Time</h3>
                                    <p>10 Days</p>
                                  </li>
                                </ul>
                                <div className="devepbtn appliedinfo bidsbtn">
                                  <Link className="clrbtn" to="#">Accept</Link>
                                  <Link className="clrbtn" to="#">View Profile</Link>
                                  <Link className="clrbtn" to="#">Message</Link>
                                  <Link to="#">
                                    <i className="far fa-trash-alt" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{/*product-feed-tab end*/}
                    <div className={section === 'Info' ? 'product-feed-tab current' : 'product-feed-tab'} id="info-dd">
                      <div className="user-profile-ov">
                        <h3><Link to="#" title className="overview-open">Overview</Link> <Link to="#" title className="overview-open"><i className="fa fa-pencil" /></Link></h3>
                        <p>The content should be relevant to your product and users. When people are able to read the content, they will give you feedback about the copy and how they feel about it. This will push you to reflect on the type of messages you communicate and the tone of voice that makes people trust your platform.</p>
                      </div>{/*user-profile-ov end*/}
                      <div className="user-profile-ov st2">
                        <h3><Link to="#" title className="exp-bx-open">Experience </Link><Link to="#" title className="exp-bx-open"><i className="fa fa-pencil" /></Link> <Link to="#" title className="exp-bx-open"><i className="fa fa-plus-square" /></Link></h3>
                        <h4>Web designer <Link to="#" title><i className="fa fa-pencil" /></Link></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
                        <h4>UI / UX Designer <Link to="#" title><i className="fa fa-pencil" /></Link></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id.</p>
                        <h4>PHP developer <Link to="#" title><i className="fa fa-pencil" /></Link></h4>
                        <p className="no-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
                      </div>{/*user-profile-ov end*/}
                      <div className="user-profile-ov">
                        <h3><Link to="#" title className="ed-box-open">Education</Link> <Link to="#" title className="ed-box-open"><i className="fa fa-pencil" /></Link> <Link to="#" title><i className="fa fa-plus-square" /></Link></h3>
                        <h4>Master of Computer Science</h4>
                        <span>2015 - 2018</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
                      </div>{/*user-profile-ov end*/}
                      <div className="user-profile-ov">
                        <h3><Link to="#" title className="lct-box-open">Location</Link> <Link to="#" title className="lct-box-open"><i className="fa fa-pencil" /></Link> <Link to="#" title><i className="fa fa-plus-square" /></Link></h3>
                        <h4>India</h4>
                        <p>151/4 BT Chownk, Delhi </p>
                      </div>{/*user-profile-ov end*/}
                      <div className="user-profile-ov">
                        <h3><Link to="#" title className="skills-open">Skills</Link> <Link to="#" title className="skills-open"><i className="fa fa-pencil" /></Link> <Link to="#"><i className="fa fa-plus-square" /></Link></h3>
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
                    <div className={section === 'Reviews' ? 'product-feed-tab current' : 'product-feed-tab'} id="rewivewdata">
                      <section />
                      <div className="posts-section">
                        <div className="post-bar reviewtitle">
                          <h2>Reviews</h2>
                        </div>{/*post-bar end*/}
                        <div className="post-bar ">
                          <div className="post_topbar">
                            <div className="usy-dt">
                              <img src="/reactsocialmedia/assets/images/resources/bg-img3.png" alt="" />
                              <div className="usy-name">
                                <h3>Rock William</h3>
                                <div className="epi-sec epi2">
                                  <ul className="descp review-lt">
                                    <li><img src="/reactsocialmedia/assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                    <li><img src="/reactsocialmedia/assets/images/icon9.png" alt="" /><span>India</span></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="job_descp mngdetl">
                            <div className="star-descp review">
                              <ul>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star-half-o" /></li>
                              </ul>
                              <Link to="#" title>5.0 of 5 Reviews</Link>
                            </div>
                            <div className="reviewtext">
                              <p>Lorem ipsum dolor sit amet, adipiscing elit. Nulla luctus mi et porttitor ultrices</p>
                              <hr />
                            </div>
                            <div className="post_topbar post-reply">
                              <div className="usy-dt">
                                <img src="/reactsocialmedia/assets/images/resources/bg-img4.png" alt="" />
                                <div className="usy-name">
                                  <h3>John Doe</h3>
                                  <div className="epi-sec epi2">
                                    <p><i className="la la-clock-o" />3 min ago</p>
                                    <p className="tahnks">Thanks :)</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="post_topbar rep-post rep-thanks">
                              <hr />
                              <div className="usy-dt">
                                <img src="/reactsocialmedia/assets/images/resources/bg-img4.png" alt="" />
                                <input className="reply" type="text" placeholder="Reply" />
                                <Link className="replybtn" to="#">Send</Link>
                              </div>
                            </div>
                          </div>
                        </div>{/*post-bar end*/}
                        <div className="post-bar post-thanks">
                          <div className="post_topbar">
                            <div className="usy-dt">
                              <img src="/reactsocialmedia/assets/images/resources/bg-img1.png" alt="" />
                              <div className="usy-name">
                                <h3>Jassica William</h3>
                                <div className="epi-sec epi2">
                                  <ul className="descp review-lt">
                                    <li><img src="/reactsocialmedia/assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                    <li><img src="/reactsocialmedia/assets/images/icon9.png" alt="" /><span>India</span></li>
                                  </ul>
                                </div>
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
                          <div className="job_descp mngdetl">
                            <div className="star-descp review">
                              <ul>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star-half-o" /></li>
                              </ul>
                              <Link to="#" title>5.0 of 5 Reviews</Link><br /><br />
                              <p>Awesome Work, Thanks John!</p>
                              <hr />
                            </div>
                            <div className="post_topbar rep-post">
                              <div className="usy-dt">
                                <img src="/reactsocialmedia/assets/images/resources/bg-img4.png" alt="" />
                                <input className="reply" type="text" placeholder="Reply" />
                                <Link className="replybtn" to="#">Send</Link>
                              </div>
                            </div>
                          </div>
                        </div>{/*post-bar end*/}
                      </div>{/*posts-section end*/}
                    </div>{/*product-feed-tab end*/}

                    <div className={section === 'Portfolio' ? 'product-feed-tab current' : 'product-feed-tab'} id="portfolio-dd">
                      <CompanyPortfolio portfolio={company.portfolio} />
                    </div>
                    <div className={section === 'Payment' ? 'product-feed-tab current' : 'product-feed-tab'} id="payment-dd">
                      <div className="billing-method">
                        <ul>
                          <li>
                            <h3>Add Billing Method</h3>
                            <Link to="#" title><i className="fa fa-plus-circle" /></Link>
                          </li>
                          <li>
                            <h3>See Activity</h3>
                            <Link to="#" title>View All</Link>
                          </li>
                          <li>
                            <h3>Total Money</h3>
                            <span>$0.00</span>
                          </li>
                        </ul>
                        <div className="lt-sec">
                          <img src="/reactsocialmedia/assets/images/lt-icon.png" alt="" />
                          <h4>All your transactions are saved here</h4>
                          <Link to="#" title>Click Here</Link>
                        </div>
                      </div>{/*billing-method end*/}
                      <div className="add-billing-method">
                        <h3>Add Billing Method</h3>
                        <h4><img src="/reactsocialmedia/assets/images/dlr-icon.png" alt="" /><span>With workwise payment protection , only pay for work delivered.</span></h4>
                        <div className="payment_methods">
                          <h4>Credit or Debit Cards</h4>
                          <form>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="cc-head">
                                  <h5>Card Number</h5>
                                  <ul>
                                    <li><img src="/reactsocialmedia/assets/images/cc-icon1.png" alt="" /></li>
                                    <li><img src="/reactsocialmedia/assets/images/cc-icon2.png" alt="" /></li>
                                    <li><img src="/reactsocialmedia/assets/images/cc-icon3.png" alt="" /></li>
                                    <li><img src="/reactsocialmedia/assets/images/cc-icon4.png" alt="" /></li>
                                  </ul>
                                </div>
                                <div className="inpt-field pd-moree">
                                  <input type="text" name="cc-number" placeholder />
                                  <i className="fa fa-credit-card" />
                                </div>{/*inpt-field end*/}
                              </div>
                              <div className="col-lg-6">
                                <div className="cc-head">
                                  <h5>First Name</h5>
                                </div>
                                <div className="inpt-field">
                                  <input type="text" name="f-name" placeholder />
                                </div>{/*inpt-field end*/}
                              </div>
                              <div className="col-lg-6">
                                <div className="cc-head">
                                  <h5>Last Name</h5>
                                </div>
                                <div className="inpt-field">
                                  <input type="text" name="l-name" placeholder />
                                </div>{/*inpt-field end*/}
                              </div>
                              <div className="col-lg-6">
                                <div className="cc-head">
                                  <h5>Expiresons</h5>
                                </div>
                                <div className="rowwy">
                                  <div className="row">
                                    <div className="col-lg-6 pd-left-none no-pd">
                                      <div className="inpt-field">
                                        <input type="text" name="f-name" placeholder />
                                      </div>{/*inpt-field end*/}
                                    </div>
                                    <div className="col-lg-6 pd-right-none no-pd">
                                      <div className="inpt-field">
                                        <input type="text" name="f-name" placeholder />
                                      </div>{/*inpt-field end*/}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="cc-head">
                                  <h5>Cvv (Security Code) <i className="fa fa-question-circle" /></h5>
                                </div>
                                <div className="inpt-field">
                                  <input type="text" name="l-name" placeholder />
                                </div>{/*inpt-field end*/}
                              </div>
                              <div className="col-lg-12">
                                <button type="submit">Continue</button>
                              </div>
                            </div>
                          </form>
                          <h4>Add Paypal Account</h4>
                        </div>
                      </div>{/*add-billing-method end*/}
                    </div>{/*product-feed-tab end*/}
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="right-sidebar">
                    <div className="message-btn">
                      <Link to="#" title=""><i className="fa fa-envelope"></i> Message</Link>
                      <Link to="#" title=""><i className="fas fa-cog" /> Setting</Link>
                    </div>
                    <div className="widget widget-portfolio">
                      <div className="wd-heady">
                        <h3>Portfolio</h3>
                        <img src="/reactsocialmedia/assets/images/photo-icon.png" alt="" />
                      </div>
                      <div className="pf-gallery">
                        <ul>
                          {
                            company.gallery.map((value, index) =>
                              <li key={index}>
                                <Link to="#" title="">
                                  <img src={value} alt="" />
                                </Link>
                              </li>)
                          }
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
