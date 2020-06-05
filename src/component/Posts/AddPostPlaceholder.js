import React from 'react'
import { Link } from 'react-router-dom'

const AddPostPlaceholder = () => {
    return (
        <div className="post-topbar">
            <div className="user-picy">
                <img src="assets/images/resources/user-pic.png" alt="" />
            </div>
            <div style={{textAlign:'center'}}>What is in your mind?</div>
            <div className="post-st">
                <ul>
                    <li><Link className="post_project active" to="/" title="">Create Post</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default AddPostPlaceholder
