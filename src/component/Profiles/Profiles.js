import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { useSelector } from 'react-redux';
import LoadingIndicator from './../Shared/LoadingIndicator';

export default function Profiles() {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then(res => res.json())
      .then(
        (result) => {
          setUsers(result.results);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          //setError(error);
        }
      )
  }, []);

  //const allUsers = useSelector(state => state.allUsers);
  return (
    <section className="companies-info">
      <div className="container">
        <div className="company-title">
          <h3>All Users</h3>
        </div>
        <div className="companies-list">
          <div className="row">
            {
              isLoaded && users.map((value, index) => <UserCard key={index} value={value} />)
            }
          </div>
        </div>
        <LoadingIndicator />
      </div>
    </section>
  );
}
