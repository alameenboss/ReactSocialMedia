import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const AppliedJobContainer = () => {
    const [show, toggleAction] = useState(false);
    return (
        <div className="post-bar">
            <div className="p-all saved-post">
                <div className="usy-dt">
                    <div className="wordpressdevlp">
                        <h2>Senior Wordpress Developer</h2>
                        <p><i className="la la-clock-o" />Posted on 30 August 2018</p>
                    </div>
                </div>
                <div className="ed-opts">
                <Link to="#" title className="ed-opts-open" onClick={()=>toggleAction(!show)}><i className="la la-ellipsis-v" /></Link>
                    <ul className={`ed-options ${show===true?'active':'' }`}>
                        <li onClick={() => toggleAction(!show)}><Link to="#" title>Edit Post</Link></li>
                        <li onClick={() => toggleAction(!show)}><Link to="#" title>Unsaved</Link></li>
                        <li onClick={() => toggleAction(!show)}><Link to="#" title>Unbid</Link></li>
                        <li onClick={() => toggleAction(!show)}><Link to="#" title>Close</Link></li>
                        <li onClick={() => toggleAction(!show)}><Link to="#" title>Hide</Link></li>
                    </ul>
                </div>
            </div>
            <ul className="savedjob-info saved-info">
                <li>
                    <h3>Applicants</h3>
                    <p>10</p>
                </li>
                <li>
                    <h3>Job Type</h3>
                    <p>Full Time</p>
                </li>
                <li>
                    <h3>Salary</h3>
                    <p>$600 - Mannual</p>
                </li>
                <li>
                    <h3>Posted : 5 Days Ago</h3>
                    <p>Open</p>
                </li>
                <div className="devepbtn saved-btn">
                    <Link className="clrbtn" to="#">Applied</Link>
                    <Link className="clrbtn" to="#">Message</Link>
                    <Link to="#">
                        <i className="far fa-trash-alt" />
                    </Link>
                </div>
            </ul>
        </div>
    )
}

export default AppliedJobContainer
