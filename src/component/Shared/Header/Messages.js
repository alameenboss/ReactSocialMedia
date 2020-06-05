import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const fnRenderMessageList = function (messages) {
    return messages.map((msg,index) =>
        <div className="notfication-details" key={index} >
            <div className="noty-user-img">
                <img src={msg.userimageurl} alt="" />
            </div>
            <div className="notification-info">
                <h3><Link to="/">{msg.username}</Link> </h3>
                <p>{msg.message}</p>
                <span>{msg.time}</span>
            </div>
        </div>);
}



const Messages = (props) => {
    const messages = useSelector(state => state.messages);
    const dispatch = useDispatch();
   

    return (
        <div className="notification-box msg" style={{ display: props.showmessage ? 'block' : 'none' }}>
            <div className="nt-title">
                <h4>Setting</h4>
                <Link to="/" title="">Clear all</Link>
            </div>
            <div className="nott-list">
                {fnRenderMessageList(messages)}
                <div className="view-all-nots">
                    <Link to="/" title="">{props.title}</Link>
                </div>
            </div>
        </div >
    )
}

export default Messages
