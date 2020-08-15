import React from "react";
import UserCard from "./UserCard";
import { useSelector } from 'react-redux';
import LoadingIndicator from './../Shared/LoadingIndicator';

export default function Profiles() {
  const allUsers = useSelector(state => state.allUsers);
  return (
    <section class="companies-info">
      <div class="container">
        <div class="company-title">
          <h3>All Users</h3>
        </div>
        <div class="companies-list">
          <div class="row">
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
