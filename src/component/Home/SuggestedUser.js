import React from 'react'

const SuggestedUser = ({name,work,img}) => {
    return (
        <div className="suggestion-usd" >
            <img src={img} alt="" />
            <div className="sgt-text">
    <h4>{name}</h4>
                <span>{work}</span>
            </div>
            <span><i className="la la-plus"></i></span>
        </div>
    )
}

export default SuggestedUser
