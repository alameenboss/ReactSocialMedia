import React from 'react'
import { Link } from 'react-router-dom';

function Section3(props) {
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
                            {
                                props.company.gallery.map((value,index)=>
                                    <li key={index}>
                                        <Link to="#" title="">
                                            <img src={value} alt="" />
                                        </Link>
                                    </li>)
                            }
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Section3
