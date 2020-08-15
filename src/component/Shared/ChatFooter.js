import React from "react";
import { Link } from 'react-router-dom'
export default function ChatFooter() {
  return (
    <div className="chatbox-list">
      <div className="chatbox">
        <div className="chat-mg">
          <Link to="#" title="">
            <img src="assets/images/resources/usr-img1.png" alt="" />
          </Link>
          <span>2</span>
        </div>
        <div className="conversation-box">
          <div className="con-title mg-3">
            <div className="chat-user-info">
              <img src="assets/images/resources/us-img1.png" alt="" />
              <h3>
                John Doe <span className="status-info"></span>
              </h3>
            </div>
            <div className="st-icons">
              <Link to="#" title="">
                <i className="la la-cog"></i>
              </Link>
              <Link to="#" title="" className="close-chat">
                <i className="la la-minus-square"></i>
              </Link>
              <Link to="#" title="" className="close-chat">
                <i className="la la-close"></i>
              </Link>
            </div>
          </div>
          <div
            className="chat-hist mCustomScrollbar _mCS_1"
            data-mcs-theme="dark"
          >
            <div
              id="mCSB_1"
              className="mCustomScrollBox mCS-dark mCSB_vertical mCSB_inside"
              style={{maxHeight:'none'}}
              tabIndex="0"
            >
              <div
                id="mCSB_1_container"
                className="mCSB_container"
                style={{position:'relative', top:0, left:0}}
                dir="ltr"
              >
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
              <div
                id="mCSB_1_scrollbar_vertical"
                className="mCSB_scrollTools mCSB_1_scrollbar mCS-dark mCSB_scrollTools_vertical"
                style={{display: 'block'}}
              >
                <div className="mCSB_draggerContainer">
                  <div
                    id="mCSB_1_dragger_vertical"
                    className="mCSB_dragger"
                    style={{position: 'absolute', 
                    minHeight: '30px',
                    display: 'block',
                    height: '198px', 
                    maxHeight: '270px', 
                    top: '0px'}}>
                    <div
                      className="mCSB_dragger_bar"
                      style={{lineHeight: '30px'}}
                    ></div>
                  </div>
                  <div className="mCSB_draggerRail"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="typing-msg">
            <form>
              <textarea placeholder="Type a message here"></textarea>
              <button type="submit">
                <i className="fa fa-send"></i>
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
                  <i className="fa fa-paperclip"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="chatbox">
        <div className="chat-mg">
          <Link to="#" title="">
            <img src="assets/images/resources/usr-img2.png" alt="" />
          </Link>
        </div>
        <div className="conversation-box">
          <div className="con-title mg-3">
            <div className="chat-user-info">
              <img src="assets/images/resources/us-img1.png" alt="" />
              <h3>
                John Doe <span className="status-info"></span>
              </h3>
            </div>
            <div className="st-icons">
              <Link to="#" title="">
                <i className="la la-cog"></i>
              </Link>
              <Link to="#" title="" className="close-chat">
                <i className="la la-minus-square"></i>
              </Link>
              <Link to="#" title="" className="close-chat">
                <i className="la la-close"></i>
              </Link>
            </div>
          </div>
          <div
            className="chat-hist mCustomScrollbar _mCS_2"
            data-mcs-theme="dark"
          >
            <div
              id="mCSB_2"
              className="mCustomScrollBox mCS-dark mCSB_vertical mCSB_inside"
              tabIndex="0"
              style={{maxHeight: 'none'}}
            >
              <div
                id="mCSB_2_container"
                className="mCSB_container"
                style={{position:'relative',top:'0',left:'0'}}
                dir="ltr"
              >
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
              <div
                id="mCSB_2_scrollbar_vertical"
                className="mCSB_scrollTools mCSB_2_scrollbar mCS-dark mCSB_scrollTools_vertical"
                style={{display: 'block'}}
              >
                <div className="mCSB_draggerContainer">
                  <div
                    id="mCSB_2_dragger_vertical"
                    className="mCSB_dragger"
                    style={{position: 'absolute', 
                    minHeight: '30px', 
                    display: 'block', 
                    height: '198px', 
                    maxHeight: '270px', 
                    top: '0px'}}
                  >
                    <div
                      className="mCSB_dragger_bar"
                      style={{lineHeight: '30px'}}
                    ></div>
                  </div>
                  <div className="mCSB_draggerRail"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="typing-msg">
            <form>
              <textarea placeholder="Type a message here"></textarea>
              <button type="submit">
                <i className="fa fa-send"></i>
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
                  <i className="fa fa-paperclip"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="chatbox">
        <div className="chat-mg bx">
          <Link to="#" title="">
            <img src="assets/images/chat.png" alt="" />
          </Link>
          <span>2</span>
        </div>
        <div className="conversation-box">
          <div className="con-title">
            <h3>Messages</h3>
            <Link to="#" title="" className="close-chat">
              <i className="la la-minus-square"></i>
            </Link>
          </div>
          <div className="chat-list">
            <div className="conv-list active">
              <div className="usrr-pic">
                <img src="assets/images/resources/usy1.png" alt="" />
                <span className="active-status activee"></span>
              </div>
              <div className="usy-info">
                <h3>John Doe</h3>
                <span>
                  Lorem ipsum dolor <img src="assets/images/smley.png" alt="" />
                </span>
              </div>
              <div className="ct-time">
                <span>1:55 PM</span>
              </div>
              <span className="msg-numbers">2</span>
            </div>
            <div className="conv-list">
              <div className="usrr-pic">
                <img src="assets/images/resources/usy2.png" alt="" />
              </div>
              <div className="usy-info">
                <h3>John Doe</h3>
                <span>
                  Lorem ipsum dolor <img src="assets/images/smley.png" alt="" />
                </span>
              </div>
              <div className="ct-time">
                <span>11:39 PM</span>
              </div>
            </div>
            <div className="conv-list">
              <div className="usrr-pic">
                <img src="assets/images/resources/usy3.png" alt="" />
              </div>
              <div className="usy-info">
                <h3>John Doe</h3>
                <span>
                  Lorem ipsum dolor <img src="assets/images/smley.png" alt="" />
                </span>
              </div>
              <div className="ct-time">
                <span>0.28 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
