import React from 'react'
import { Link } from 'react-router-dom';

const CompanyInfo = () => {
    return (
        <>
            <div className="user-profile-ov">
                <h3>
                    <Link to="#" title="" className="overview-open">Overview</Link>
                    <Link to="#" title="" className="overview-open"><i className="fa fa-pencil"></i></Link>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus. Aliquam accumsan ac magna convallis bibendum. Quisque laoreet augue eget augue fermentum scelerisque. Vivamus dignissim mollis est dictum blandit. Nam porta auctor neque sed congue. Nullam rutrum eget ex at maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem.</p>
            </div>
            <div className="user-profile-ov st2">
                <h3>
                    <Link to="#" title="" className="esp-bx-open">Establish Since </Link>
                    <Link to="#" title="" className="esp-bx-open"><i className="fa fa-pencil"></i></Link>
                    <Link to="#" title="" className="esp-bx-open"><i className="fa fa-plus-square"></i></Link>
                </h3>
                <span>February 2004</span>
            </div>
            <div className="user-profile-ov">
                <h3><Link to="#" title="" className="emp-open">Total Employees</Link>
                    <Link to="#" title="" className="emp-open"><i className="fa fa-pencil"></i></Link>
                    <Link to="#" title="" className="emp-open"><i className="fa fa-plus-square"></i></Link>
                </h3>
                <span>17,048</span>
            </div>
            <div className="user-profile-ov">
                <h3>
                    <Link to="#" title="" className="lct-box-open">Location</Link>
                    <Link to="#" title="" className="lct-box-open"><i className="fa fa-pencil"></i></Link>
                    <Link to="#" title="" className="lct-box-open"><i className="fa fa-plus-square"></i></Link>
                </h3>
                <h4>USA</h4>
                <p> Menlo Park, California, United States</p>
            </div>

        </>
    )
}

export default CompanyInfo
