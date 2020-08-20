import React from 'react'
import { Link } from 'react-router-dom';
function ExperienceDialog() {
    return (
        <div className="overview-box" id="experience-box">
			<div className="overview-edit">
				<h3>Experience</h3>
				<form>
					<input  type="text" name="subject" placeholder="Subject"/>
					<textarea></textarea>
					<button type="submit" className="save">Save</button>
					<button type="submit" className="save-add">Save &amp; Add More</button>
					<button type="submit" className="cancel">Cancel</button>
				</form>
				<Link to="#" className="close-box"><i className="la la-close"></i></Link>
			</div>
		</div>
        
    )
}

export default ExperienceDialog
