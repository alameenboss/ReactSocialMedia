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
import UserJobSection from './../Shared/UserJobSection';
import UserBidsSection from './../Shared/UserBidsSection';
import UserPaymentSection from './../Shared/UserPaymentSection';
import UserReviewsSection from './../Shared/UserReviewsSection';

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
                                <Link to="#" >
                                  <img src={value.icon} alt="" />
                                  <span>{value.name}</span>
                                </Link>
                              </li>
                            )
                          }
                        </ul>
                      </div>
                    </div>

                    <UserJobSection section={section} />

                    <div className={section === 'Feed' ? 'product-feed-tab current' : 'product-feed-tab'} id="feed-dd">
                      <div className="posts-section">
                        <PostyList name={company.name} img={company.dpimg} />
                        <LoadingIndicator />
                      </div>
                    </div>

                    <UserBidsSection section={section} />

                    <div className={section === 'Info' ? 'product-feed-tab current' : 'product-feed-tab'} id="info-dd">
                      <div className="user-profile-ov">
                        <h3><Link to="#"  className="overview-open">Overview</Link> <Link to="#"  className="overview-open"><i className="fa fa-pencil" /></Link></h3>
                        <p>The content should be relevant to your product and users. When people are able to read the content, they will give you feedback about the copy and how they feel about it. This will push you to reflect on the type of messages you communicate and the tone of voice that makes people trust your platform.</p>
                      </div>
                      <div className="user-profile-ov st2">
                        <h3><Link to="#"  className="exp-bx-open">Experience </Link><Link to="#"  className="exp-bx-open"><i className="fa fa-pencil" /></Link> <Link to="#"  className="exp-bx-open"><i className="fa fa-plus-square" /></Link></h3>
                        <h4>Web designer <Link to="#" ><i className="fa fa-pencil" /></Link></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
                        <h4>UI / UX Designer <Link to="#" ><i className="fa fa-pencil" /></Link></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id.</p>
                        <h4>PHP developer <Link to="#" ><i className="fa fa-pencil" /></Link></h4>
                        <p className="no-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
                      </div>
                      <div className="user-profile-ov">
                        <h3><Link to="#"  className="ed-box-open">Education</Link> <Link to="#"  className="ed-box-open"><i className="fa fa-pencil" /></Link> <Link to="#" ><i className="fa fa-plus-square" /></Link></h3>
                        <h4>Master of Computer Science</h4>
                        <span>2015 - 2018</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
                      </div>
                      <div className="user-profile-ov">
                        <h3><Link to="#"  className="lct-box-open">Location</Link> <Link to="#"  className="lct-box-open"><i className="fa fa-pencil" /></Link> <Link to="#" ><i className="fa fa-plus-square" /></Link></h3>
                        <h4>India</h4>
                        <p>151/4 BT Chownk, Delhi </p>
                      </div>
                      <div className="user-profile-ov">
                        <h3><Link to="#"  className="skills-open">Skills</Link> <Link to="#"  className="skills-open"><i className="fa fa-pencil" /></Link> <Link to="#"><i className="fa fa-plus-square" /></Link></h3>
                        <ul>
                          <li><Link to="#" >HTML</Link></li>
                          <li><Link to="#" >PHP</Link></li>
                          <li><Link to="#" >CSS</Link></li>
                          <li><Link to="#" >Javascript</Link></li>
                          <li><Link to="#" >Wordpress</Link></li>
                          <li><Link to="#" >Photoshop</Link></li>
                          <li><Link to="#" >Illustrator</Link></li>
                          <li><Link to="#" >Corel Draw</Link></li>
                        </ul>
                      </div>
                    </div>

                    <UserReviewsSection section={section} />

                    <div className={section === 'Portfolio' ? 'product-feed-tab current' : 'product-feed-tab'} id="portfolio-dd">
                      <CompanyPortfolio portfolio={company.portfolio} />
                    </div>

                    <UserPaymentSection section={section} />

                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="right-sidebar">
                    <div className="message-btn">
                      <Link to="#" ><i className="fa fa-envelope"></i> Message</Link>
                      <Link to="#" ><i className="fas fa-cog" /> Setting</Link>
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
                                <Link to="#" >
                                  <img src={value} alt="" />
                                </Link>
                              </li>)
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
