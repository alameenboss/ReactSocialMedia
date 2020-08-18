import React from 'react'
import { Link } from 'react-router-dom'
export default function Project() {
  return (
    <>
      <div>
        <div className="search-sec">
          <div className="container">
            <div className="search-box">
              <form>
                <input type="text" name="search" placeholder="Search keywords" />
                <button type="submit">Search</button>
              </form>
            </div>{/*search-box end*/}
          </div>
        </div>
        <main>
          <div className="main-section">
            <div className="container">
              <div className="main-section-data">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="filter-secs">
                      <div className="filter-heading">
                        <h3>Filters</h3>
                        <Link to="#" title>Clear all filters</Link>
                      </div>{/*filter-heading end*/}
                      <div className="paddy">
                        <div className="filter-dd">
                          <div className="filter-ttl">
                            <h3>Skills</h3>
                            <Link to="#" title>Clear</Link>
                          </div>
                          <form>
                            <input type="text" name="search-skills" placeholder="Search skills" />
                          </form>
                        </div>
                        <div className="filter-dd">
                          <div className="filter-ttl">
                            <h3>Availabilty</h3>
                            <Link to="#" title>Clear</Link>
                          </div>
                          <ul className="avail-checks">
                            <li>
                              <input type="radio" name="cc" id="c1" />
                              <label htmlFor="c1">
                                <span />
                              </label>
                              <small>Hourly</small>
                            </li>
                            <li>
                              <input type="radio" name="cc" id="c2" />
                              <label htmlFor="c2">
                                <span />
                              </label>
                              <small>Part Time</small>
                            </li>
                            <li>
                              <input type="radio" name="cc" id="c3" />
                              <label htmlFor="c3">
                                <span />
                              </label>
                              <small>Full Time</small>
                            </li>
                          </ul>
                        </div>
                        <div className="filter-dd">
                          <div className="filter-ttl">
                            <h3>Job Type</h3>
                            <Link to="#" title>Clear</Link>
                          </div>
                          <form className="job-tp">
                            <select>
                              <option>Select a job type</option>
                              <option>Select a job type</option>
                              <option>Select a job type</option>
                              <option>Select a job type</option>
                            </select>
                            <i className="fa fa-ellipsis-v" aria-hidden="true" />
                          </form>
                        </div>
                        <div className="filter-dd">
                          <div className="filter-ttl">
                            <h3>Pay Rate / Hr ($)</h3>
                            <Link to="#" title>Clear</Link>
                          </div>
                          <div className="rg-slider">
                            <input className="rn-slider slider-input" type="hidden" defaultValue="5,50" style={{ display: 'none' }} /><div className="slider-container theme-green" style={{ width: '300px' }}>			<div className="back-bar">                <div className="selected-bar" style={{ width: '93px', left: '10.5px' }} />                <div className="pointer low" style={{ left: '4px' }} /><div className="pointer-label low" style={{ left: '0px' }}>5</div>                <div className="pointer high" style={{ left: '97px' }} /><div className="pointer-label high" style={{ left: '78px' }}>50</div>                <div className="clickable-dummy" />          </div>            <div className="scale" />		</div>
                          </div>
                          <div className="rg-limit">
                            <h4>1</h4>
                            <h4>100+</h4>
                          </div>{/*rg-limit end*/}
                        </div>
                        <div className="filter-dd">
                          <div className="filter-ttl">
                            <h3>Experience Level</h3>
                            <Link to="#" title>Clear</Link>
                          </div>
                          <form className="job-tp">
                            <select>
                              <option>Select a experience level</option>
                              <option>3 years</option>
                              <option>4 years</option>
                              <option>5 years</option>
                            </select>
                            <i className="fa fa-ellipsis-v" aria-hidden="true" />
                          </form>
                        </div>
                        <div className="filter-dd">
                          <div className="filter-ttl">
                            <h3>Countries</h3>
                            <Link to="#" title>Clear</Link>
                          </div>
                          <form className="job-tp">
                            <select>
                              <option>Select a country</option>
                              <option>United Kingdom</option>
                              <option>United States</option>
                              <option>Russia</option>
                            </select>
                            <i className="fa fa-ellipsis-v" aria-hidden="true" />
                          </form>
                        </div>
                      </div>
                    </div>{/*filter-secs end*/}
                  </div>
                  <div className="col-lg-6">
                    <div className="main-ws-sec">
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
                              <li><Link to="#" title>Photoshop</Link></li>
                              <li><Link to="#" title>Illustrator</Link></li>
                              <li><Link to="#" title>Corel Draw</Link></li>
                            </ul>
                          </div>
                          <div className="job-status-bar">
                            <ul className="like-com">
                              <li>
                                <Link to="#" className="active"><i className="fas fa-heart" /> Like</Link>
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
                              <li><Link to="#" title>Photoshop</Link></li>
                              <li><Link to="#" title>Illustrator</Link></li>
                              <li><Link to="#" title>Corel Draw</Link></li>
                            </ul>
                          </div>
                          <div className="job-status-bar">
                            <ul className="like-com">
                              <li>
                                <Link to="#" className="active"><i className="fas fa-heart" /> Like</Link>
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
                              <li><Link to="#" title>Photoshop</Link></li>
                              <li><Link to="#" title>Illustrator</Link></li>
                              <li><Link to="#" title>Corel Draw</Link></li>
                            </ul>
                          </div>
                          <div className="job-status-bar">
                            <ul className="like-com">
                              <li>
                                <Link to="#" className="active"><i className="fas fa-heart" /> Like</Link>
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
                              <li><Link to="#" title>Photoshop</Link></li>
                              <li><Link to="#" title>Illustrator</Link></li>
                              <li><Link to="#" title>Corel Draw</Link></li>
                            </ul>
                          </div>
                          <div className="job-status-bar">
                            <ul className="like-com">
                              <li>
                                <Link to="#" className="active"><i className="fas fa-heart" /> Like</Link>
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
                    </div>{/*main-ws-sec end*/}
                  </div>
                  <div className="col-lg-3">
                    <div className="right-sidebar">
                      <div className="widget widget-about">
                        <img src="/reactsocialmedia/assets/images/wd-logo.png" alt="" />
                        <h3>Track Time on Workwise</h3>
                        <span>Pay only for the Hours worked</span>
                        <div className="sign_link">
                          <h3><Link to="sign-in.html" title>Sign up</Link></h3>
                          <Link to="#" title>Learn More</Link>
                        </div>
                      </div>{/*widget-about end*/}
                      <div className="widget widget-jobs">
                        <div className="sd-title">
                          <h3>Top Jobs</h3>
                          <i className="la la-ellipsis-v" />
                        </div>
                        <div className="jobs-list">
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior Product Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior UI / UX Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Junior Seo Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior PHP Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior Developer Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                        </div>{/*jobs-list end*/}
                      </div>{/*widget-jobs end*/}
                      <div className="widget widget-jobs">
                        <div className="sd-title">
                          <h3>Most Viewed This Week</h3>
                          <i className="la la-ellipsis-v" />
                        </div>
                        <div className="jobs-list">
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior Product Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior UI / UX Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Junior Seo Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                        </div>{/*jobs-list end*/}
                      </div>{/*widget-jobs end*/}
                    </div>{/*right-sidebar end*/}
                  </div>
                </div>
              </div>{/* main-section-data end*/}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}