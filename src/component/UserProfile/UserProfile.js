import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LoadingIndicator from './../Shared/LoadingIndicator'
import PostyList from './../Posts/PostyList'
import Rating from './../Shared/Rating'
import CompanyInfo from './../Shared/CompanyInfo';
import Cover from './../Shared/Cover';
import CompanyPortfolio from './../Shared/CompanyPortfolio';
import HomeSuggestions from '../Home/HomeSuggestions'
import CompanyData from './../Shared/CompanyData';

export default function UserProfile() {
    const company = useSelector(state => state.company);
    const [section, toggleSection] = useState('Feed');
    return (
        <>
            <Cover coverImg='/assets/images/resources/cover-img.jpg' />
            <main>
                <div className="main-section">
                    <div className="container">
                        <div className="main-section-data">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="main-left-sidebar">
                                        <CompanyData img="/assets/user/alameen.jpg"
                                            following={company.following}
                                            followers={company.followers}
                                            sociallinks={company.sociallinks}
                                        />
                                        <HomeSuggestions />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="main-ws-sec">
                                        <div className="user-tab-sec">
                                            <h3>Alameen Shaik Dawood</h3>
                                            <div className="star-descp">
                                                <span>Graphic Designer at Self Employed</span>
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
                                        <div className={section === 'Feed' ? 'product-feed-tab current' : 'product-feed-tab'} id="feed-dd">
                                            <div className="posts-section">
                                                <PostyList name="Alameen Shaik Dawood" img={company.dpimg} />
                                                <LoadingIndicator />
                                            </div>
                                        </div>
                                        <div className={section === 'Info' ? 'product-feed-tab current' : 'product-feed-tab'} id="info-dd">
                                            <CompanyInfo />
                                        </div>
                                        <div className={section === 'Portfolio' ? 'product-feed-tab current' : 'product-feed-tab'} id="portfolio-dd">
                                            <CompanyPortfolio portfolio={company.portfolio} />
                                        </div>
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
                                                <img src="/assets/images/photo-icon.png" alt="" />
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
