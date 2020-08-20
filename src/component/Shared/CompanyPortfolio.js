import React from 'react'
import { Link } from 'react-router-dom';

const CompanyPortfolio = ({ portfolio }) => {
    return (
        <div className="portfolio-gallery-sec">
            <h3>Portfolio</h3>
            {
                true && <div className="portfolio-btn">
                <Link to="#" ><i className="fas fa-plus-square" /> Add Portfolio</Link>
              </div>
            }
            <div className="gallery_pf">
                <div className="row">
                    {portfolio.map((value, index) =>
                        <div key={index} className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="gallery_pt">
                                <img src={value.img} alt="" />
                                <Link to="#"><img src="reactsocialmedia/assets/images/all-out.png" alt="" /></Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default CompanyPortfolio
