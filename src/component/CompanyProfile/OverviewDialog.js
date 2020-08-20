import React from 'react'
import { Link } from 'react-router-dom';
function OverviewDialog() {
    return (
        <div className="overview-box" id="overview-box">
			<div className="overview-edit">
				<h3>Overview</h3>
				<span>5000 character left</span>
				<form>
					<textarea></textarea>
					<button type="submit" className="save">Save</button>
					<button type="submit" className="cancel">Cancel</button>
				</form>
				<Link to="#" className="close-box"><i className="la la-close"></i></Link>
			</div>
		</div>
        
    )
}

export default OverviewDialog
