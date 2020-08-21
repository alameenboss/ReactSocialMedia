import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavUserInfo = () => {
    const myInfo = useSelector(state => state.myInfo);
    const [show=false, toggleshow] = useState(0);
    return (
        <div className="user-account">
            <div className="user-info" onClick={() => toggleshow(!show)}>
                <img src={myInfo.img2} alt="" />
                <i className="la la-sort-down"></i>
            </div>
            <div className="user-account-settingss" id="users" style={{ display: show ? 'block' : 'none' }}>
                <h3><Link to="/"  >{myInfo.firstName}</Link></h3>
                <h3>Online Status</h3>
                <ul className="on-off-status">
                    <li>
                        <div className="fgt-sec">
                            <input type="radio" name="cc" id="c5" />
                            <label htmlFor="c5">
                                <span></span>
                            </label>
                            <small>Online</small>
                        </div>
                    </li>
                    <li>
                        <div className="fgt-sec">
                            <input type="radio" name="cc" id="c6" />
                            <label htmlFor="c6">
                                <span></span>
                            </label>
                            <small>Offline</small>
                        </div>
                    </li>
                </ul>
                <h3>Custom Status</h3>
                <div className="search_form">
                    <form>
                        <input type="text" name="search" />
                        <button type="submit">Ok</button>
                    </form>
                </div>

                <h3>Setting</h3>
                <ul className="us-links">
                    <li><Link to="/AccountSetting" >Account Setting</Link></li>
                    <li><Link to="/Privacy" >Privacy</Link></li>
                    <li><Link to="/Faqs" >Faqs</Link></li>
                    <li><Link to="/Terms" >Terms & Conditions</Link></li>
                </ul>
                <h3 className="tc"><Link to="/Logout" >Logout</Link></h3>
            </div>

        </div>
    )
}

export default NavUserInfo
