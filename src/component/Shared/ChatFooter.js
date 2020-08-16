import React from "react";
import ChatList from './Chat/ChatList';
import UsersChat from './Chat/UsersChat'

export default function ChatFooter() {
  return (
    <div className="chatbox-list" style={{right: '104.5px'}}>
      <UsersChat key={1} userinfo={{name:'John Deo',count:4,img:'reactsocialmedia/assets/images/resources/usr-img1.png'}}/>
      <UsersChat key={2} userinfo={{name:'John Deo',count:2,img:'reactsocialmedia/assets/images/resources/usr-img2.png'}}/>
     
      <ChatList/>
    </div>
  );
}
