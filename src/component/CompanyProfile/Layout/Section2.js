import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import LoadingIndicator from '../../Shared/LoadingIndicator';
import PostyList from '../../Posts/PostyList';
import Rating from '../../Shared/Rating';
import CompanyInfo from './../CompanyInfo';
import CompanyPortfolio from './../CompanyPortfolio';

function Section2({ company }) {

    const [section, toggleSection] = useState('Feed');
    return (
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
                                company.sections.map((value,index)=>
                                    <li key={index} data-tab="feed-dd" 
                                        className={section === value.name?'active':''}
                                        onClick={()=>toggleSection(value.name)}>
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
                <div className={section === 'Feed'?'product-feed-tab current':'product-feed-tab'} id="feed-dd">
                    <div className="posts-section">
                        <PostyList name={company.name} img={company.dpimg} />
                        <LoadingIndicator />
                    </div>
                </div>
                <div className={section === 'Info'?'product-feed-tab current':'product-feed-tab'} id="info-dd">
                    <CompanyInfo />
                </div>
                <div className={section === 'Portfolio'?'product-feed-tab current':'product-feed-tab'} id="portfolio-dd">
                    <CompanyPortfolio />
                </div>
            </div>
        </div>

    )
}

export default Section2
