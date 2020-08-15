import React, { useState } from "react";
import { Link } from 'react-router-dom'

const UserChat = (props) => {
    const [show = false, toggleshow] = useState(0);
    return (
        <div className="chatbox">
        <div className="chat-mg" onClick={() => toggleshow(!show)}>
          <Link to="#" title="">
            <img src={props.userinfo.img} alt="" />
          </Link>
          <span>{props.userinfo.count}</span>
        </div>
        <div className={show ? 'conversation-box active' : 'conversation-box'}>
          <div className="con-title mg-3">
            <div className="chat-user-info">
              <img src={props.userinfo.img} alt="" />
              <h3>
              {props.userinfo.name} <span className="status-info"></span>
              </h3>
            </div>
            <div className="st-icons">
              <Link to="#" title="">
                <i className="la la-cog"></i>
              </Link>
              <Link to="#" title="" className="close-chat">
                <i className="la la-minus-square"></i>
              </Link>
              <Link to="#" title="" className="close-chat" onClick={() => toggleshow(!show)}>
                <i className="la la-close"></i>
              </Link>
            </div>
          </div>
          <div className="chat-hist scroll">
                <div className="chat-msg">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec rutrum congue leo eget malesuada. Vivamus suscipit
                    tortor eget felis porttitor.
                  </p>
                  <span>Sat, Aug 23, 1:10 PM</span>
                </div>
                <div className="date-nd">
                  <span>Sunday, August 24</span>
                </div>
                <div className="chat-msg st2">
                  <p>Cras ultricies ligula.</p>
                  <span>5 minutes ago</span>
                </div>
                <div className="chat-msg">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec rutrum congue leo eget malesuada. Vivamus suscipit
                    tortor eget felis porttitor.
                  </p>
                  <span>Sat, Aug 23, 1:10 PM</span>
                </div>
          </div>
          <div className="typing-msg">
            <form>
              <textarea placeholder="Type a message here"></textarea>
              <button type="submit">
                <i className="la la-send"></i>
              </button>
            </form>
            <ul className="ft-options">
              <li>
                <Link to="#" title="">
                  <i className="la la-smile-o"></i>
                </Link>
              </li>
              <li>
                <Link to="#" title="">
                  <i className="la la-camera"></i>
                </Link>
              </li>
              <li>
                <Link to="#" title="">
                  <i className="la la-paperclip"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
    );
}

export default UserChat