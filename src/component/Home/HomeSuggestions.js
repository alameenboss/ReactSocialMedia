import React from 'react'
import { Link } from 'react-router-dom'
import SuggestedUser from './SuggestedUser'
import { useSelector } from 'react-redux';

const HomeSuggestions = () => {

    const suggestedUserList = useSelector(state => state.users);

    return (
        <div className="suggestions full-width">
            <div className="sd-title">
                <h3>Suggestions</h3>
                <i className="la la-ellipsis-v"></i>
            </div>
            <div className="suggestions-list">

                {
                suggestedUserList.map((value, index) => 
                    <SuggestedUser 
                        key={index}
                        name={value.name}
                        work={value.work}
                        img={value.img}/> )
                }
                <div className="view-more">
                    <Link to="/" title="">View More</Link>
                </div>
            </div>
        </div>
    )
}

export default HomeSuggestions
