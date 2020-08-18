import React from 'react'
import { Link } from 'react-router-dom';

function Section3() {
    return (
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

    )
}

export default Section3
