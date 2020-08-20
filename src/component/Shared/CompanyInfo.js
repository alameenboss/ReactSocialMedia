import React from 'react'
import { Link } from 'react-router-dom';

const CompanyInfo = () => {
    return (
        <>
            <div className="user-profile-ov">
                <h3>
                    <Link to="#" className="overview-open">Overview</Link>
                    <Link to="#" className="overview-open"><i className="fa fa-pencil"></i></Link>
                </h3>
                <p>
                    Don’t delay content because you’re struggling to fill in the blanks. Do some research, put something in there, test and get some quick feedback. Iterate until you get it right. There are many ways to get real content, have a look at the tips below
                </p>
            </div>
            <div className="user-profile-ov st2">
                <h3>
                    <Link to="#" className="esp-bx-open">Establish Since </Link>
                    <Link to="#" className="esp-bx-open"><i className="fa fa-pencil"></i></Link>
                    <Link to="#" className="esp-bx-open"><i className="fa fa-plus-square"></i></Link>
                </h3>
                <span>February 2004</span>
            </div>
            <div className="user-profile-ov">
                <h3><Link to="#" className="emp-open">Total Employees</Link>
                    <Link to="#" className="emp-open"><i className="fa fa-pencil"></i></Link>
                    <Link to="#" className="emp-open"><i className="fa fa-plus-square"></i></Link>
                </h3>
                <span>17,048</span>
            </div>
            <div className="user-profile-ov">
                <h3>
                    <Link to="#" className="lct-box-open">Location</Link>
                    <Link to="#" className="lct-box-open"><i className="fa fa-pencil"></i></Link>
                    <Link to="#" className="lct-box-open"><i className="fa fa-plus-square"></i></Link>
                </h3>
                <h4>USA</h4>
                <p> Menlo Park, California, United States</p>
            </div>

        </>
    )
}

export default CompanyInfo
