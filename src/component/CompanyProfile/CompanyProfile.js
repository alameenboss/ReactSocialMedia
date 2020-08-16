import React from 'react'
import { Link } from 'react-router-dom';
import Cover from './Cover';
import CreatePortfolioDialog from './CreatePortfolioDialog';
import EducationDialog from './EducationDialog';
import EstablishDialog from './EstablishDialog';
import ExperienceDialog from './ExperienceDialog';
import LocationDialog from './LocationDialog';
import OverviewDialog from './OverviewDialog';
import SkillsDialog from './SkillsDialog';
import TotalEmployeesDialog from './TotalEmployeesDialog';
import HomeSuggestions from '../Home/HomeSuggestions';
import CompanyData from './CompanyData';
import LoadingIndicator from './../Shared/LoadingIndicator';
import PostyList from './../Posts/PostyList';
import Rating from '../Shared/Rating';
import CompanyInfo from './CompanyInfo';
import CompanyPortfolio from './CompanyPortfolio';

export default function CompanyProfile() {
	return (
		<>
			<Cover />
			<main>
				<div className="main-section">
					<div className="container">
						<div className="main-section-data">
							<div className="row">
								<div className="col-lg-3">
									<div className="main-left-sidebar">
										<CompanyData />
										<HomeSuggestions />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="main-ws-sec">
										<div className="user-tab-sec">
											<h3>Facebook Inc.</h3>
											<div className="star-descp">
												<span>Established Since 2009</span>
												<Rating />
											</div>
											<div className="tab-feed">
												<ul>
													<li data-tab="feed-dd" className="active">
														<Link to="#" title="">
															<img src="reactsocialmedia/assets/images/ic1.png" alt="" />
															<span>Feed</span>
														</Link>
													</li>
													<li data-tab="info-dd">
														<Link to="#" title="">
															<img src="reactsocialmedia/assets/images/ic2.png" alt="" />
															<span>Info</span>
														</Link>
													</li>
													<li data-tab="portfolio-dd">
														<Link to="#" title="">
															<img src="reactsocialmedia/assets/images/ic3.png" alt="" />
															<span>Portfolio</span>
														</Link>
													</li>
												</ul>
											</div>
										</div>
										<div className="product-feed-tab current" id="feed-dd">
											<div className="posts-section">
												<PostyList name="Facebook Inc." img="reactsocialmedia/assets/images/resources/company-pic.png" />
												<LoadingIndicator />
											</div>
										</div>
										<div className="product-feed-tab" id="info-dd">
											<CompanyInfo />
										</div>
										<div className="product-feed-tab" id="portfolio-dd">
											<CompanyPortfolio />
										</div>
									</div>
								</div>
								<div className="col-lg-3">
									<div className="right-sidebar">
										<div className="message-btn">
											<Link to="#" title=""><i className="fa fa-envelope"></i> Message</Link>
										</div>
										<div className="widget widget-portfolio">
											<div className="wd-heady">
												<h3>Portfolio</h3>
												<img src="reactsocialmedia/assets/images/photo-icon.png" alt="" />
											</div>
											<div className="pf-gallery">
												<ul>
													<li><Link to="#" title=""><img src="reactsocialmedia/assets/images/resources/pf-gallery1.png" alt="" /></Link></li>
													<li><Link to="#" title=""><img src="reactsocialmedia/assets/images/resources/pf-gallery2.png" alt="" /></Link></li>
													<li><Link to="#" title=""><img src="reactsocialmedia/assets/images/resources/pf-gallery3.png" alt="" /></Link></li>
													<li><Link to="#" title=""><img src="reactsocialmedia/assets/images/resources/pf-gallery4.png" alt="" /></Link></li>
													<li><Link to="#" title=""><img src="reactsocialmedia/assets/images/resources/pf-gallery5.png" alt="" /></Link></li>
													<li><Link to="#" title=""><img src="reactsocialmedia/assets/images/resources/pf-gallery6.png" alt="" /></Link></li>
													<li><Link to="#" title=""><img src="reactsocialmedia/assets/images/resources/pf-gallery7.png" alt="" /></Link></li>
													<li><Link to="#" title=""><img src="reactsocialmedia/assets/images/resources/pf-gallery8.png" alt="" /></Link></li>
													<li><Link to="#" title=""><img src="reactsocialmedia/assets/images/resources/pf-gallery9.png" alt="" /></Link></li>
													<li><Link to="#" title=""><img src="reactsocialmedia/assets/images/resources/pf-gallery10.png" alt="" /></Link></li>
													<li><Link to="#" title=""><img src="reactsocialmedia/assets/images/resources/pf-gallery11.png" alt="" /></Link></li>
													<li><Link to="#" title=""><img src="reactsocialmedia/assets/images/resources/pf-gallery12.png" alt="" /></Link></li>
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

			<TotalEmployeesDialog />
			<SkillsDialog />
			<OverviewDialog />
			<LocationDialog />
			<ExperienceDialog />
			<EstablishDialog />
			<EducationDialog />
			<CreatePortfolioDialog />
		</>
	)
}
