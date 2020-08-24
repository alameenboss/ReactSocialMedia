import React from "react";
import ChatList from './Chat/ChatList';
import UsersChat from './Chat/UsersChat'

export default function ChatFooter() {
  return (
    <div className="chatbox-list" style={{right: '104.5px'}}>
      <UsersChat key={1} userinfo={{name:'Alameen Shaik Dawood',count:4,img:'/assets/images/resources/usr-img1.png'}}/>
      <UsersChat key={2} userinfo={{name:'Alameen Shaik Dawood',count:2,img:'/assets/images/resources/usr-img2.png'}}/>
     
      <ChatList/>
    </div>
  );
}
