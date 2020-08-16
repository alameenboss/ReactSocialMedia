import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const ChatList = () => {
    const [show = false, toggleshow] = useState(0);
    const chatUserList = useSelector(state => state.users);
    return (
        <div className="chatbox">
            <div className="chat-mg bx" onClick={() => toggleshow(!show)}>
                <Link to="#" title="" >
                    <img src="reactsocialmedia/assets/images/chat.png" alt="" />
                </Link>
                <span>2</span>
            </div>
            <div className={show ? 'conversation-box active' : 'conversation-box'}>
                <div className="con-title">
                    <h3>Messages</h3>
                    <Link to="#" title="" className="close-chat" onClick={() => toggleshow(!show)}>
                        <i className="la la-minus-square"></i>
                    </Link>
                </div>
                <div className="chat-list scroll">
                {
                    chatUserList.map((value,index)=>
                    <div key={index} className="conv-list active">
                        <div className="usrr-pic">
                            <img src={value.img} alt="" style={{ maxWidth: '40px' }} />
                            <span className="active-status activee"></span>
                        </div>
                        <div className="usy-info">
                            <h3>{value.name} </h3>
                            <span>
                                Lorem ipsum dolor <img src="reactsocialmedia/assets/images/smley.png" alt="" />
                            </span>
                        </div>
                        <div className="ct-time">
                            <span>0.28 AM</span>
                        </div>
                        <span className="msg-numbers">2</span>
                    </div>)
                }

                </div>
            </div>
        </div>
    );
}

export default ChatList