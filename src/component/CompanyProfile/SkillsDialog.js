import React from 'react'
import { Link } from 'react-router-dom';
function SkillsDialog() {
    return (
        <div className="overview-box" id="skills-box">
        <div className="overview-edit">
            <h3>Skills</h3>
            <ul>
                <li><Link to="#" title="" className="skl-name">HTML</Link><Link to="#" title="" className="close-skl"><i className="la la-close"></i></Link></li>
                <li><Link to="#" title="" className="skl-name">php</Link><Link to="#" title="" className="close-skl"><i className="la la-close"></i></Link></li>
                <li><Link to="#" title="" className="skl-name">css</Link><Link to="#" title="" className="close-skl"><i className="la la-close"></i></Link></li>
            </ul>
            <form>
                <input  type="text" name="skills" placeholder="Skills"/>
                <button type="submit" className="save">Save</button>
                <button type="submit" className="save-add">Save &amp; Add More</button>
                <button type="submit" className="cancel">Cancel</button>
            </form>
            <Link to="#" title="" className="close-box"><i className="la la-close"></i></Link>
        </div>
    </div>

    )
}

export default SkillsDialog
