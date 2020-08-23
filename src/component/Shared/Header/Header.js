import React, { useState } from 'react'
import Menu from './Menu'
import NavUserInfo from './NavUserInfo'
import { Link } from 'react-router-dom'

const Header = () => {
    const [show, toggleshow] = useState(false);
    return (
        <header className="sticky-top">
            <div className="container">
                <div className="header-data">
                    <div className="logo">
                        <Link to="/reactsocialmedia" >
                            <img src="/assets/images/logo.png" alt="" />

                        </Link>
                    </div>
                    <div className="search-bar">
                        <form>
                            <input type="text" name="search" placeholder="Search..." />
                            <button type="submit"><i className="la la-search"></i></button>
                        </form>
                    </div>
                    <Menu toggleClassName={show ? 'active' : null} ></Menu>
                    <div className="menu-btn" onClick={() => toggleshow(!show)}>
                        <Link to="#" ><i className="fa fa-bars"></i></Link>
                    </div>
                    <NavUserInfo></NavUserInfo>
                </div>
            </div >
        </header >
    )
}

export default Header
