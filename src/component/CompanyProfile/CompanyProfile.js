import React from 'react'
import { Link } from 'react-router-dom';


export default function CompanyProfile() {
    return (
        <div>
        <section className="cover-sec">
			<img src="assets/images/resources/company-cover.jpg" alt=""/>
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
											<img src="assets/images/resources/company-profile.png" alt="" />
										</div>
										<div className="user_pro_status">
											<ul className="flw-hr">
												<li><Link to="#" title="" className="flww"><i className="la la-plus"></i> Follow</Link></li>
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
										</div>
										<ul className="social_links">
											<li><Link to="#" title=""><i className="la la-globe"></i> www.example.com</Link></li>
											<li><Link to="#" title=""><i className="fa fa-facebook-square"></i> Http://www.facebook.com/john...</Link></li>
											<li><Link to="#" title=""><i className="fa fa-twitter"></i> Http://www.Twitter.com/john...</Link></li>
											<li><Link to="#" title=""><i className="fa fa-google-plus-square"></i> Http://www.googleplus.com/john...</Link></li>
											<li><Link to="#" title=""><i className="fa fa-behance-square"></i> Http://www.behance.com/john...</Link></li>
											<li><Link to="#" title=""><i className="fa fa-pinterest"></i> Http://www.pinterest.com/john...</Link></li>
											<li><Link to="#" title=""><i className="fa fa-instagram"></i> Http://www.instagram.com/john...</Link></li>
											<li><Link to="#" title=""><i className="fa fa-youtube"></i> Http://www.youtube.com/john...</Link></li>
										</ul>
									</div>
									<div className="suggestions full-width">
										<div className="sd-title">
											<h3>Suggestions</h3>
											<i className="la la-ellipsis-v"></i>
										</div>
										<div className="suggestions-list">
											<div className="suggestion-usd">
												<img src="assets/images/resources/s1.png" alt="" />
												<div className="sgt-text">
													<h4>Jessica William</h4>
													<span>Graphic Designer</span>
												</div>
												<span><i className="la la-plus"></i></span>
											</div>
											<div className="suggestion-usd">
												<img src="assets/images/resources/s2.png" alt="" />
												<div className="sgt-text">
													<h4>John Doe</h4>
													<span>PHP Developer</span>
												</div>
												<span><i className="la la-plus"></i></span>
											</div>
											<div className="suggestion-usd">
												<img src="assets/images/resources/s3.png" alt="" />
												<div className="sgt-text">
													<h4>Poonam</h4>
													<span>Wordpress Developer</span>
												</div>
												<span><i className="la la-plus"></i></span>
											</div>
											<div className="suggestion-usd">
												<img src="assets/images/resources/s4.png" alt="" />
												<div className="sgt-text">
													<h4>Bill Gates</h4>
													<span>C &amp; C++ Developer</span>
												</div>
												<span><i className="la la-plus"></i></span>
											</div>
											<div className="suggestion-usd">
												<img src="assets/images/resources/s5.png" alt="" />
												<div className="sgt-text">
													<h4>Jessica William</h4>
													<span>Graphic Designer</span>
												</div>
												<span><i className="la la-plus"></i></span>
											</div>
											<div className="suggestion-usd">
												<img src="assets/images/resources/s6.png" alt="" />
												<div className="sgt-text">
													<h4>John Doe</h4>
													<span>PHP Developer</span>
												</div>
												<span><i className="la la-plus"></i></span>
											</div>
											<div className="view-more">
												<Link to="#" title="">View More</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="main-ws-sec">
									<div className="user-tab-sec">
										<h3>Facebook Inc.</h3>
										<div className="star-descp">
											<span>Established Since 2009</span>
											<ul>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
											</ul>
										</div>
										<div className="tab-feed">
											<ul>
												<li data-tab="feed-dd" className="active">
													<Link to="#" title="">
														<img src="assets/images/ic1.png" alt="" />
														<span>Feed</span>
													</Link>
												</li>
												<li data-tab="info-dd">
													<Link to="#" title="">
														<img src="assets/images/ic2.png" alt="" />
														<span>Info</span>
													</Link>
												</li>
												<li data-tab="portfolio-dd">
													<Link to="#" title="">
														<img src="assets/images/ic3.png" alt="" />
														<span>Portfolio</span>
													</Link>
												</li>
											</ul>
										</div>
									</div>
									<div className="product-feed-tab current" id="feed-dd">
										<div className="posts-section">
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="assets/images/resources/company-pic.png" alt="" />
														<div className="usy-name">
															<h3>Facebook Inc.</h3>
															<span><img src="assets/images/clock.png" alt=""/>3 min ago</span>
														</div>
													</div>
													<div className="ed-opts">
														<Link to="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></Link>
														<ul className="ed-options">
															<li><Link to="#" title="">Edit Post</Link></li>
															<li><Link to="#" title="">Unsaved</Link></li>
															<li><Link to="#" title="">Unbid</Link></li>
															<li><Link to="#" title="">Close</Link></li>
															<li><Link to="#" title="">Hide</Link></li>
														</ul>
													</div>
												</div>
												<div className="epi-sec">
													<ul className="descp">
														<li><img src="assets/images/icon8.png" alt=""/><span>Epic Coder</span></li>
														<li><img src="assets/images/icon9.png" alt=""/><span>India</span></li>
													</ul>
													<ul className="bk-links">
														<li><Link to="#" title=""><i className="la la-bookmark"></i></Link></li>
														<li><Link to="#" title=""><i className="la la-envelope"></i></Link></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>Senior PHP Developer</h3>
													<ul className="job-dt">
														<li><Link to="#" title="">Full Time</Link></li>
														<li><span>$30 / hr</span></li>
													</ul>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <Link to="#" title="">view more</Link></p>
													<ul className="skill-tags">
														<li><Link to="#" title="">HTML</Link></li>
														<li><Link to="#" title="">PHP</Link></li>
														<li><Link to="#" title="">CSS</Link></li>
														<li><Link to="#" title="">Javascript</Link></li>
														<li><Link to="#" title="">Wordpress</Link></li> 	
													</ul>
												</div>
												<div className="job-status-bar">
													<ul className="like-com">
														<li>
															<Link to="#" className="active"><i className="fas fa-heart"></i> Like</Link>
															<img src="assets/images/liked-img.png" alt="" />
															<span>25</span>
														</li>
														<li><Link to="#" className="com"><i className="fas fa-comment-alt"></i> Comments 15</Link></li>
													</ul>
													<Link to="#"><i className="fas fa-eye"></i>Views 50</Link>
												</div>
											</div>
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="assets/images/resources/company-pic.png" alt="" />
														<div className="usy-name">
															<h3>Facebook Inc.</h3>
															<span><img src="assets/images/clock.png" alt=""/>3 min ago</span>
														</div>
													</div>
													<div className="ed-opts">
														<Link to="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></Link>
														<ul className="ed-options">
															<li><Link to="#" title="">Edit Post</Link></li>
															<li><Link to="#" title="">Unsaved</Link></li>
															<li><Link to="#" title="">Unbid</Link></li>
															<li><Link to="#" title="">Close</Link></li>
															<li><Link to="#" title="">Hide</Link></li>
														</ul>
													</div>
												</div>
												<div className="epi-sec">
													<ul className="descp">
														<li><img src="assets/images/icon8.png" alt=""/><span>Epic Coder</span></li>
														<li><img src="assets/images/icon9.png" alt=""/><span>India</span></li>
													</ul>
													<ul className="bk-links">
														<li><Link to="#" title=""><i className="la la-bookmark"></i></Link></li>
														<li><Link to="#" title=""><i className="la la-envelope"></i></Link></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>Senior UI / UX designer</h3>
													<ul className="job-dt">
														<li><Link to="#" title="">Full Time</Link></li>
														<li><span>$30 / hr</span></li>
													</ul>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <Link to="#" title="">view more</Link></p>
													<ul className="skill-tags">
														<li><Link to="#" title="">HTML</Link></li>
														<li><Link to="#" title="">PHP</Link></li>
														<li><Link to="#" title="">CSS</Link></li>
														<li><Link to="#" title="">Javascript</Link></li>
														<li><Link to="#" title="">Wordpress</Link></li> 	
													</ul>
												</div>
												<div className="job-status-bar">
													<ul className="like-com">
														<li>
															<Link to="#"><i className="fas fa-heart"></i> Like</Link>
															<img src="assets/images/liked-img.png" alt="" />
															<span>25</span>
														</li>
														<li><Link to="#" className="com"><i className="fas fa-comment-alt"></i> Comments 15</Link></li>
													</ul>
													<Link to="#"><i className="fas fa-eye"></i>Views 50</Link>
												</div>
											</div>
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="assets/images/resources/company-pic.png" alt="" />
														<div className="usy-name">
															<h3>Facebook Inc.</h3>
															<span><img src="assets/images/clock.png" alt=""/>3 min ago</span>
														</div>
													</div>
													<div className="ed-opts">
														<Link to="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></Link>
														<ul className="ed-options">
															<li><Link to="#" title="">Edit Post</Link></li>
															<li><Link to="#" title="">Unsaved</Link></li>
															<li><Link to="#" title="">Unbid</Link></li>
															<li><Link to="#" title="">Close</Link></li>
															<li><Link to="#" title="">Hide</Link></li>
														</ul>
													</div>
												</div>
												<div className="epi-sec">
													<ul className="descp">
														<li><img src="assets/images/icon8.png" alt=""/><span>Epic Coder</span></li>
														<li><img src="assets/images/icon9.png" alt=""/><span>India</span></li>
													</ul>
													<ul className="bk-links">
														<li><Link to="#" title=""><i className="la la-bookmark"></i></Link></li>
														<li><Link to="#" title=""><i className="la la-envelope"></i></Link></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>Senior Wordpress Developer</h3>
													<ul className="job-dt">
														<li><Link to="#" title="">Full Time</Link></li>
														<li><span>$30 / hr</span></li>
													</ul>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <Link to="#" title="">view more</Link></p>
													<ul className="skill-tags">
														<li><Link to="#" title="">HTML</Link></li>
														<li><Link to="#" title="">PHP</Link></li>
														<li><Link to="#" title="">CSS</Link></li>
														<li><Link to="#" title="">Javascript</Link></li>
														<li><Link to="#" title="">Wordpress</Link></li> 	
													</ul>
												</div>
												<div className="job-status-bar">
													<ul className="like-com">
														<li>
															<Link to="#"><i className="fas fa-heart"></i> Like</Link>
															<img src="assets/images/liked-img.png" alt="" />
															<span>25</span>
														</li>
														<li><Link to="#" className="com"><i className="fas fa-comment-alt"></i> Comments 15</Link></li>
													</ul>
													<Link to="#"><i className="fas fa-eye"></i>Views 50</Link>
												</div>
											</div>
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="assets/images/resources/company-pic.png" alt="" />
														<div className="usy-name">
															<h3>Facebook Inc. 	</h3>
															<span><img src="assets/images/clock.png" alt=""/>3 min ago</span>
														</div>
													</div>
													<div className="ed-opts">
														<Link to="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></Link>
														<ul className="ed-options">
															<li><Link to="#" title="">Edit Post</Link></li>
															<li><Link to="#" title="">Unsaved</Link></li>
															<li><Link to="#" title="">Unbid</Link></li>
															<li><Link to="#" title="">Close</Link></li>
															<li><Link to="#" title="">Hide</Link></li>
														</ul>
													</div>
												</div>
												<div className="epi-sec">
													<ul className="descp">
														<li><img src="assets/images/icon8.png" alt=""/><span>Epic Coder</span></li>
														<li><img src="assets/images/icon9.png" alt=""/><span>India</span></li>
													</ul>
													<ul className="bk-links">
														<li><Link to="#" title=""><i className="la la-bookmark"></i></Link></li>
														<li><Link to="#" title=""><i className="la la-envelope"></i></Link></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>Senior UI / UX designer</h3>
													<ul className="job-dt">
														<li><Link to="#" title="">Full Time</Link></li>
														<li><span>$30 / hr</span></li>
													</ul>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <Link to="#" title="">view more</Link></p>
													<ul className="skill-tags">
														<li><Link to="#" title="">HTML</Link></li>
														<li><Link to="#" title="">PHP</Link></li>
														<li><Link to="#" title="">CSS</Link></li>
														<li><Link to="#" title="">Javascript</Link></li>
														<li><Link to="#" title="">Wordpress</Link></li> 	
													</ul>
												</div>
												<div className="job-status-bar">
													<ul className="like-com">
														<li>
															<Link to="#"><i className="fas fa-heart"></i> Like</Link>
															<img src="assets/images/liked-img.png" alt="" />
															<span>25</span>
														</li>
														<li><Link to="#" className="com"><i className="fas fa-comment-alt"></i> Comments 15</Link></li>
													</ul>
													<Link to="#"><i className="fas fa-eye"></i>Views 50</Link>
												</div>
											</div>
											<div className="process-comm">
												<div className="spinner">
													<div className="bounce1"></div>
													<div className="bounce2"></div>
													<div className="bounce3"></div>
												</div>
											</div>
										</div>
									</div>
									<div className="product-feed-tab" id="info-dd">
										<div className="user-profile-ov">
											<h3><Link to="#" title="" className="overview-open">Overview</Link> <Link to="#" title="" className="overview-open"><i className="fa fa-pencil"></i></Link></h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus. Aliquam accumsan ac magna convallis bibendum. Quisque laoreet augue eget augue fermentum scelerisque. Vivamus dignissim mollis est dictum blandit. Nam porta auctor neque sed congue. Nullam rutrum eget ex at maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem.</p>
										</div>
										<div className="user-profile-ov st2">
											<h3><Link to="#" title="" className="esp-bx-open">Establish Since </Link><Link to="#" title="" className="esp-bx-open"><i className="fa fa-pencil"></i></Link> <Link to="#" title="" className="esp-bx-open"><i className="fa fa-plus-square"></i></Link></h3>
											<span>February 2004</span>
										</div>
										<div className="user-profile-ov">
											<h3><Link to="#" title="" className="emp-open">Total Employees</Link> <Link to="#" title="" className="emp-open"><i className="fa fa-pencil"></i></Link> <Link to="#" title="" className="emp-open"><i className="fa fa-plus-square"></i></Link></h3>
											<span>17,048</span>
										</div>
										<div className="user-profile-ov">
											<h3><Link to="#" title="" className="lct-box-open">Location</Link> <Link to="#" title="" className="lct-box-open"><i className="fa fa-pencil"></i></Link> <Link to="#" title="" className="lct-box-open"><i className="fa fa-plus-square"></i></Link></h3>
											<h4>USA</h4>
											<p> Menlo Park, California, United States</p>
										</div>
									</div>
									<div className="product-feed-tab" id="portfolio-dd">
										<div className="portfolio-gallery-sec">
											<h3>Portfolio</h3>
											<div className="gallery_pf">
												<div className="row">
													<div className="col-lg-4 col-md-4 col-sm-4 col-6">
														<div className="gallery_pt">
															<img src="assets/images/resources/pf-img1.jpg" alt="" />
															<Link to="#" title=""><img src="assets/images/all-out.png" alt=""/></Link>
														</div>
													</div>
													<div className="col-lg-4 col-md-4 col-sm-4 col-6">
														<div className="gallery_pt">
															<img src="assets/images/resources/pf-img2.jpg" alt="" />
															<Link to="#" title=""><img src="assets/images/all-out.png" alt=""/></Link>
														</div>
													</div>
													<div className="col-lg-4 col-md-4 col-sm-4 col-6">
														<div className="gallery_pt">
															<img src="assets/images/resources/pf-img3.jpg" alt="" />
															<Link to="#" title=""><img src="assets/images/all-out.png" alt=""/></Link>
														</div>
													</div>
													<div className="col-lg-4 col-md-4 col-sm-4 col-6">
														<div className="gallery_pt">
															<img src="assets/images/resources/pf-img4.jpg" alt="" />
															<Link to="#" title=""><img src="assets/images/all-out.png" alt=""/></Link>
														</div>
													</div>
													<div className="col-lg-4 col-md-4 col-sm-4 col-6">
														<div className="gallery_pt">
															<img src="assets/images/resources/pf-img5.jpg" alt="" />
															<Link to="#" title=""><img src="assets/images/all-out.png" alt=""/></Link>
														</div>
													</div>
													<div className="col-lg-4 col-md-4 col-sm-4 col-6">
														<div className="gallery_pt">
															<img src="assets/images/resources/pf-img6.jpg" alt="" />
															<Link to="#" title=""><img src="assets/images/all-out.png" alt=""/></Link>
														</div>
													</div>
													<div className="col-lg-4 col-md-4 col-sm-4 col-6">
														<div className="gallery_pt">
															<img src="assets/images/resources/pf-img7.jpg" alt="" />
															<Link to="#" title=""><img src="assets/images/all-out.png" alt=""/></Link>
														</div>
													</div>
													<div className="col-lg-4 col-md-4 col-sm-4 col-6">
														<div className="gallery_pt">
															<img src="assets/images/resources/pf-img8.jpg" alt="" />
															<Link to="#" title=""><img src="assets/images/all-out.png" alt=""/></Link>
														</div>
													</div>
													<div className="col-lg-4 col-md-4 col-sm-4 col-6">
														<div className="gallery_pt">
															<img src="assets/images/resources/pf-img9.jpg" alt="" />
															<Link to="#" title=""><img src="assets/images/all-out.png" alt=""/></Link>
														</div>
													</div>
													<div className="col-lg-4 col-md-4 col-sm-4 col-6">
														<div className="gallery_pt">
															<img src="assets/images/resources/pf-img10.jpg" alt="" />
															<Link to="#" title=""><img src="assets/images/all-out.png" alt=""/></Link>
														</div>
													</div>
												</div>
											</div>
										</div>
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
											<img src="assets/images/photo-icon.png" alt="" />
										</div>
										<div className="pf-gallery">
											<ul>
												<li><Link to="#" title=""><img src="assets/images/resources/pf-gallery1.png" alt=""/></Link></li>
												<li><Link to="#" title=""><img src="assets/images/resources/pf-gallery2.png" alt=""/></Link></li>
												<li><Link to="#" title=""><img src="assets/images/resources/pf-gallery3.png" alt=""/></Link></li>
												<li><Link to="#" title=""><img src="assets/images/resources/pf-gallery4.png" alt=""/></Link></li>
												<li><Link to="#" title=""><img src="assets/images/resources/pf-gallery5.png" alt=""/></Link></li>
												<li><Link to="#" title=""><img src="assets/images/resources/pf-gallery6.png" alt=""/></Link></li>
												<li><Link to="#" title=""><img src="assets/images/resources/pf-gallery7.png" alt=""/></Link></li>
												<li><Link to="#" title=""><img src="assets/images/resources/pf-gallery8.png" alt=""/></Link></li>
												<li><Link to="#" title=""><img src="assets/images/resources/pf-gallery9.png" alt=""/></Link></li>
												<li><Link to="#" title=""><img src="assets/images/resources/pf-gallery10.png" alt=""/></Link></li>
												<li><Link to="#" title=""><img src="assets/images/resources/pf-gallery11.png" alt=""/></Link></li>
												<li><Link to="#" title=""><img src="assets/images/resources/pf-gallery12.png" alt=""/></Link></li>
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
        <div className="overview-box" id="overview-box">
			<div className="overview-edit">
				<h3>Overview</h3>
				<span>5000 character left</span>
				<form>
					<textarea></textarea>
					<button type="submit" className="save">Save</button>
					<button type="submit" className="cancel">Cancel</button>
				</form>
				<Link to="#" title="" className="close-box"><i className="la la-close"></i></Link>
			</div>
		</div>
        <div className="overview-box" id="experience-box">
			<div className="overview-edit">
				<h3>Experience</h3>
				<form>
					<input  type="text" name="subject" placeholder="Subject"/>
					<textarea></textarea>
					<button type="submit" className="save">Save</button>
					<button type="submit" className="save-add">Save &amp; Add More</button>
					<button type="submit" className="cancel">Cancel</button>
				</form>
				<Link to="#" title="" className="close-box"><i className="la la-close"></i></Link>
			</div>
		</div>
        <div className="overview-box" id="education-box">
			<div className="overview-edit">
				<h3>Education</h3>
				<form>
					<input  type="text" name="school" placeholder="School / University"/>
					<div className="datepicky">
						<div className="row">
							<div className="col-lg-6 no-left-pd">
								<div className="datefm">
									<input  type="text" name="from" placeholder="From" className="datepicker flatpickr-input" readonly="readonly"/>	
									<i className="fa fa-calendar"></i>
								</div>
							</div>
							<div className="col-lg-6 no-righ-pd">
								<div className="datefm">
									<input  type="text" name="to" placeholder="To" className="datepicker flatpickr-input" readonly="readonly"/>
									<i className="fa fa-calendar"></i>
								</div>
							</div>
						</div>
					</div>
					<input  type="text" name="degree" placeholder="Degree"/>
					<textarea placeholder="Description"></textarea>
					<button type="submit" className="save">Save</button>
					<button type="submit" className="save-add">Save &amp; Add More</button>
					<button type="submit" className="cancel">Cancel</button>
				</form>
				<Link to="#" title="" className="close-box"><i className="la la-close"></i></Link>
			</div>
		</div>

        <div className="overview-box" id="location-box">
			<div className="overview-edit">
				<h3>Location</h3>
				<form>
					<div className="datefm">
						<select>
							<option>Country</option>
							<option value="pakistan">Pakistan</option>
							<option value="england">England</option>
							<option value="india">India</option>
							<option value="usa">United Sates</option>
						</select>
						<i className="fa fa-globe"></i>
					</div>
					<div className="datefm">
						<select>
							<option>City</option>
							<option value="london">London</option>
							<option value="new-york">New York</option>
							<option value="sydney">Sydney</option>
							<option value="chicago">Chicago</option>
						</select>
						<i className="fa fa-map-marker"></i>
					</div>
					<button type="submit" className="save">Save</button>
					<button type="submit" className="cancel">Cancel</button>
				</form>
				<Link to="#" title="" className="close-box"><i className="la la-close"></i></Link>
			</div>
		</div>

        <div className="overview-box" id="skills-box">
			<div className="overview-edit">
				<h3>Skills</h3>
				<ul>
					<li><Link to="#" title="" className="skl-name">HTML</Link><Link to="#" title="" className="close-skl"><i className="la la-close"></i></Link></li>
					<li><Link to="#" title="" className="skl-name">php</Link><Link to="#" title="" className="close-skl"><i className="la la-close"></i></Link></li>
					<li><Link to="#" title="" className="skl-name">css</Link><Link to="#" title="" className="close-skl"><i className="la la-close"></i></Link></li>
				</ul>
				<form>
					<input  type="text" name="skills" placeholder="Skills"/>
					<button type="submit" className="save">Save</button>
					<button type="submit" className="save-add">Save &amp; Add More</button>
					<button type="submit" className="cancel">Cancel</button>
				</form>
				<Link to="#" title="" className="close-box"><i className="la la-close"></i></Link>
			</div>
		</div>

        <div className="overview-box" id="create-portfolio">
			<div className="overview-edit">
				<h3>Create Portfolio</h3>
				<form>
					<input  type="text" name="pf-name" placeholder="Portfolio Name"/>
					<div className="file-submit nomg">
						<input  type="file" name="file"/>
					</div>
					<div className="pf-img">
						<img src="assets/images/resources/np.png" alt="" />
					</div>
					<input  type="text" name="website-url" placeholder="htp://www.example.com"/>
					<button type="submit" className="save">Save</button>
					<button type="submit" className="cancel">Cancel</button>
				</form>
				<Link to="#" title="" className="close-box"><i className="la la-close"></i></Link>
			</div>
		</div>

        <div className="overview-box" id="establish-box">
			<div className="overview-edit">
				<h3>Establish Since</h3>
				<form>
					<div className="daty">
						<input  type="text" name="establish" placeholder="Select Date" className="datepicker flatpickr-input" readonly="readonly"/>
						<i className="fa fa-calendar"></i>
					</div>
					<button type="submit" className="save">Save</button>
					<button type="submit" className="cancel">Cancel</button>
				</form>
				<Link to="#" title="" className="close-box"><i className="la la-close"></i></Link>
			</div>
		</div>

        <div className="overview-box" id="total-employes">
			<div className="overview-edit">
				<h3>Total Employees</h3>
				<form>
					<input  type="text" name="employes" placeholder="Type in numbers"/>
					<button type="submit" className="save">Save</button>
					<button type="submit" className="cancel">Cancel</button>
				</form>
				<Link to="#" title="" className="close-box"><i className="la la-close"></i></Link>
			</div>
		</div>
        </div>
    )
}
