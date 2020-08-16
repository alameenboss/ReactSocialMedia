import React from "react";
import UserCard from "./UserCard";
import { useSelector } from 'react-redux';
import LoadingIndicator from './../Shared/LoadingIndicator';

export default function Profiles() {
  const allUsers = useSelector(state => state.allUsers);
  return (
    <section className="companies-info">
      <div className="container">
        <div className="company-title">
          <h3>All Users</h3>
        </div>
        <div className="companies-list">
          <div className="row">
              {
                allUsers.map((value,index)=> <UserCard key={index} value={value}/> )
              }
             </div>
        </div>
        <LoadingIndicator/>
      </div>
    </section>
  );
}
