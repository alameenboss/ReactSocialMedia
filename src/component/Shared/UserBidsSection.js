import React from 'react'
import { Link } from 'react-router-dom'

const UserBidsSection = ({ section }) => {
  return (
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
                  <li><Link to="#" ><i className="la la-bookmark" /></Link></li>
                  <li><Link to="#" ><i className="la la-envelope" /></Link></li>
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
                  <li><Link to="#" ><i className="la la-bookmark" /></Link></li>
                  <li><Link to="#" ><i className="la la-envelope" /></Link></li>
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
                  <li><Link to="#" ><i className="la la-bookmark" /></Link></li>
                  <li><Link to="#" ><i className="la la-envelope" /></Link></li>
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
                <Link to="#"  className="ed-opts-open"><i className="la la-ellipsis-v" /></Link>
                <ul className="ed-options">
                  <li><Link to="#" >Edit Post</Link></li>
                  <li><Link to="#" >Unsaved</Link></li>
                  <li><Link to="#" >Unbid</Link></li>
                  <li><Link to="#" >Close</Link></li>
                  <li><Link to="#" >Hide</Link></li>
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
                <Link to="#"  className="ed-opts-open"><i className="la la-ellipsis-v" /></Link>
                <ul className="ed-options">
                  <li><Link to="#" >Edit Post</Link></li>
                  <li><Link to="#" >Unsaved</Link></li>
                  <li><Link to="#" >Unbid</Link></li>
                  <li><Link to="#" >Close</Link></li>
                  <li><Link to="#" >Hide</Link></li>
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
                <Link to="#"  className="ed-opts-open"><i className="la la-ellipsis-v" /></Link>
                <ul className="ed-options">
                  <li><Link to="#" >Edit Post</Link></li>
                  <li><Link to="#" >Unsaved</Link></li>
                  <li><Link to="#" >Unbid</Link></li>
                  <li><Link to="#" >Close</Link></li>
                  <li><Link to="#" >Hide</Link></li>
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
                <img src="/assets/images/resources/us-pic.png" alt="" />
                <div className="usy-name">
                  <h3>Alameen Shaik Dawood</h3>
                  <div className="epi-sec epi2">
                    <ul className="descp descptab bklink">
                      <li><img src="/assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                      <li><img src="/assets/images/icon9.png" alt="" /><span>India</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="ed-opts">
                <Link to="#"  className="ed-opts-open"><i className="la la-ellipsis-v" /></Link>
                <ul className="ed-options">
                  <li><Link to="#" >Edit Post</Link></li>
                  <li><Link to="#" >Accept</Link></li>
                  <li><Link to="#" >Unbid</Link></li>
                  <li><Link to="#" >Close</Link></li>
                  <li><Link to="#" >Hide</Link></li>
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
                    <Link to="#" >5.0 of 5 Reviews</Link>
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
                <img src="/assets/images/resources/Jassica.html" alt="" />
                <div className="usy-name">
                  <h3>Alameen Shaik Dawood</h3>
                  <div className="epi-sec epi2">
                    <ul className="descp descptab bklink">
                      <li><img src="/assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                      <li><img src="/assets/images/icon9.png" alt="" /><span>India</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="ed-opts">
                <Link to="#"  className="ed-opts-open"><i className="la la-ellipsis-v" /></Link>
                <ul className="ed-options">
                  <li><Link to="#" >Edit Post</Link></li>
                  <li><Link to="#" >Accept</Link></li>
                  <li><Link to="#" >Unbid</Link></li>
                  <li><Link to="#" >Close</Link></li>
                  <li><Link to="#" >Hide</Link></li>
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
                    <Link to="#" >5.0 of 5 Reviews</Link>
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
                <img src="/assets/images/resources/rock.jpg" alt="" />
                <div className="usy-name">
                  <h3>Alameen Shaik Dawood</h3>
                  <div className="epi-sec epi2">
                    <ul className="descp descptab bklink">
                      <li><img src="/assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                      <li><img src="/assets/images/icon9.png" alt="" /><span>India</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="ed-opts">
                <Link to="#"  className="ed-opts-open"><i className="la la-ellipsis-v" /></Link>
                <ul className="ed-options">
                  <li><Link to="#" >Edit Post</Link></li>
                  <li><Link to="#" >Accept</Link></li>
                  <li><Link to="#" >Unbid</Link></li>
                  <li><Link to="#" >Close</Link></li>
                  <li><Link to="#" >Hide</Link></li>
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
                    <Link to="#" >5.0 of 5 Reviews</Link>
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
    </div>

  )
}

export default UserBidsSection
