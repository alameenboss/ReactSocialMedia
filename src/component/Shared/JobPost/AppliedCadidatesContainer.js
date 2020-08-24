import React,{useState} from 'react'
import { Link } from 'react-router-dom';
const AppliedCadidatesContainer = () => {
    const [show, toggleAction] = useState(false);
    return (
        <div className="post-bar">
            <div className="post_topbar applied-post">
                <div className="usy-dt">
                    <img src="/assets/user/alameen.jpg" alt="" />
                    <div className="usy-name">
                        <h3>Alameen Shaik Dawood</h3>
                        <div className="epi-sec epi2">
                            <ul className="descp descptab bklink">
                                <li><img src="/assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                <li><img src="/assets/images/icon9.png" alt="" /><span>India</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="ed-opts">
                    <Link to="#" className="ed-opts-open" onClick={()=>toggleAction(!show)}><i className="la la-ellipsis-v" /></Link>
                    <ul className={`ed-options ${show===true?'active':'' }`}>
                        <li onClick={() => toggleAction(!show)}><Link to="#">Edit Post</Link></li>
                        <li onClick={() => toggleAction(!show)}><Link to="#">Accept</Link></li>
                        <li onClick={() => toggleAction(!show)}><Link to="#">Unbid</Link></li>
                        <li onClick={() => toggleAction(!show)}><Link to="#">Close</Link></li>
                        <li onClick={() => toggleAction(!show)}><Link to="#">Hide</Link></li>
                    </ul>
                </div>
                <div className="job_descp noborder">
                    <div className="star-descp review profilecnd">
                        <ul className="bklik">
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star-half-o" /></li>
                            <Link to="#">5.0 of 5 Reviews</Link>
                        </ul>
                    </div>
                    <div className="devepbtn appliedinfo noreply">
                        <Link className="clrbtn" to="#">Accept</Link>
                        <Link className="clrbtn" to="#">View Profile</Link>
                        <Link className="clrbtn" to="#">Message</Link>
                        <Link to="#">
                            <i className="far fa-trash-alt" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppliedCadidatesContainer
