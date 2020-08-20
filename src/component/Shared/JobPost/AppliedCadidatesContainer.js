import React,{useState} from 'react'
import { Link } from 'react-router-dom';
const AppliedCadidatesContainer = () => {
    const [show, toggleAction] = useState(false);
    return (
        <div className="post-bar">
            <div className="post_topbar applied-post">
                <div className="usy-dt">
                    <img src="/reactsocialmedia/assets/images/resources/us-pic.png" alt="" />
                    <div className="usy-name">
                        <h3>John Doe</h3>
                        <div className="epi-sec epi2">
                            <ul className="descp descptab bklink">
                                <li><img src="/reactsocialmedia/assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                <li><img src="/reactsocialmedia/assets/images/icon9.png" alt="" /><span>India</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="ed-opts">
                    <Link to="#" title className="ed-opts-open" onClick={()=>toggleAction(!show)}><i className="la la-ellipsis-v" /></Link>
                    <ul className={`ed-options ${show===true?'active':'' }`}>
                        <li onClick={() => toggleAction(!show)}><Link to="#" title>Edit Post</Link></li>
                        <li onClick={() => toggleAction(!show)}><Link to="#" title>Accept</Link></li>
                        <li onClick={() => toggleAction(!show)}><Link to="#" title>Unbid</Link></li>
                        <li onClick={() => toggleAction(!show)}><Link to="#" title>Close</Link></li>
                        <li onClick={() => toggleAction(!show)}><Link to="#" title>Hide</Link></li>
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
                            <Link to="#" title>5.0 of 5 Reviews</Link>
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
