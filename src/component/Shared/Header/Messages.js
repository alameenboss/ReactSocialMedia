import React from 'react'

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const fnRenderMessageList = function (messages) {
    return messages.map((msg,index) =>
        <div className="notfication-details" key={index} >
            <div className="noty-user-img">
                <img src={msg.userimageurl} alt="" />
            </div>
            <div className="notification-info">
                <h3><Link to="/app/Home">{msg.username}</Link> </h3>
                <p>{msg.message}</p>
                <span>{msg.time}</span>
            </div>
        </div>);
}



const Messages = (props) => {
    const messages = useSelector(state => state.messages);
    return (
        <div className="notification-box msg" style={{ display: props.showmessage ? 'block' : 'none' }} >
            <div className="nt-title">
                <h4>Setting</h4>
                <Link to="/app/Home" >Clear all</Link>
            </div>
            <div className="nott-list">
                {fnRenderMessageList(messages)}
                <div className="view-all-nots">
                    <Link to="/app/Home" >{props.title}</Link>
                </div>
            </div>
        </div >
    )
}

export default Messages
