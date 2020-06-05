import React from 'react'
import { Link } from 'react-router-dom'

const HomeSuggestions = () => {
    return (
        <div className="suggestions full-width">
            <div className="sd-title">
                <h3>Title</h3>
                <i className="la la-ellipsis-v"></i>
            </div>
            <div className="suggestions-list">
                <div className="suggestion-usd" > {/* *ngFor="let item of suggestedUsers" */}
                    <img src="..." alt="" />
                    <div className="sgt-text">
                        <h4>item_name</h4>
                        <span>item_designation</span>
                    </div>
                    <span><i className="la la-plus"></i></span>
                </div>
                <div className="view-more">
                    <Link to="/" title="">View More</Link>
                </div>
            </div>
        </div>
    )
}

export default HomeSuggestions
