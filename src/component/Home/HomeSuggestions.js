import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SuggestedUser from './SuggestedUser'
//import { useSelector } from 'react-redux';

const HomeSuggestions = () => {

    const [users, setUsers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=5")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.results)
                    setUsers(result.results);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    //setError(error);
                }
            )
    }, []);

    //const suggestedUserList = useSelector(state => state.users);

    return (
        <div className="suggestions full-width">
            <div className="sd-title">
                <h3>Suggestions</h3>
                <i className="la la-ellipsis-v"></i>
            </div>
            <div className="suggestions-list">

                {
                    isLoaded && users.map((user, index) =>
                        <SuggestedUser
                            key={index}
                            name={user.name.last}
                            work={user.location.state}
                            img={user.picture.thumbnail} />)
                }
                <div className="view-more">
                    <Link to="/" >View More</Link>
                </div>
            </div>
        </div>
    )
}

export default HomeSuggestions
