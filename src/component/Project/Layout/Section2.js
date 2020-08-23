import React from 'react'
import PostyList from './../../Posts/PostyList';
import LoadingIndicator from './../../Shared/LoadingIndicator';
const Section2 = () => {
    return (
        <div className="col-lg-6">
            <div className="main-ws-sec">
                <div className="posts-section">
                    <PostyList name="Alameen Shaik Dawood"
                        img="assets/images/resources/us-pic.png" />
                    <LoadingIndicator />
                </div>
            </div>
        </div>

    )
}

export default Section2
