import React from 'react'
import { Link } from 'react-router-dom'

const postTopbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

const AddPostPlaceholder = () => {
    return (
        <div className="post-topbar" style={postTopbarStyle}> 
            <div className="user-picy">
                <img src="/assets/user/alameen.jpg" alt="" />
            </div>
            <div style={{textAlign:'center'}}>What is in your mind?</div>
            <div className="post-st">
                <ul>
                    <li><Link className="post_project active" to="/app/Home" >Create Post</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default AddPostPlaceholder
