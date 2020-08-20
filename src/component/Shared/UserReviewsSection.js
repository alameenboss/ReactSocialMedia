import React from 'react'
import { Link } from 'react-router-dom'
const UserReviewsSection = ({ section }) => {
  return (
    <div className={section === 'Reviews' ? 'product-feed-tab current' : 'product-feed-tab'} id="rewivewdata">
      <section />
      <div className="posts-section">
        <div className="post-bar reviewtitle">
          <h2>Reviews</h2>
        </div>
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
              <Link to="#" >5.0 of 5 Reviews</Link>
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
        </div>
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
          <div className="job_descp mngdetl">
            <div className="star-descp review">
              <ul>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star-half-o" /></li>
              </ul>
              <Link to="#" >5.0 of 5 Reviews</Link><br /><br />
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
        </div>
      </div>
    </div>

  )
}

export default UserReviewsSection
