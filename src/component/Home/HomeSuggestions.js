import React from 'react'
import { Link } from 'react-router-dom'
import SuggestedUser from './SuggestedUser'
const HomeSuggestions = () => {
    return (
        <div className="suggestions full-width">
            <div className="sd-title">
                <h3>Suggestions</h3>
                <i className="la la-ellipsis-v"></i>
            </div>
            <div className="suggestions-list">
                <SuggestedUser 
                name="Jessica William" 
                work="Graphic Designer" 
                img="assets/images/resources/s1.png"/>
                <SuggestedUser 
                name="John Doe" 
                work="PHP Developer"
                img="assets/images/resources/s2.png"/>
                <SuggestedUser 
                name="Poonam" 
                work="Wordpress Developer"
                img="assets/images/resources/s3.png"/>                
                <div className="view-more">
                    <Link to="/" title="">View More</Link>
                </div>
            </div>
        </div>
    )
}

export default HomeSuggestions
