import React from 'react'
//import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Posty from './Posty';

const PostyList = () => {

    const postList = useSelector(state => state.posts);
    return (
        <>
        {
            postList.map((value, index) =>  <Posty key={index} post={value}></Posty> )
        }
        </>
    )
}

export default PostyList
