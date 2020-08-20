import React from 'react'
import { Link } from 'react-router-dom';
function TotalEmployeesDialog() {
    return (
        <div className="overview-box" id="total-employes">
			<div className="overview-edit">
				<h3>Total Employees</h3>
				<form>
					<input  type="text" name="employes" placeholder="Type in numbers"/>
					<button type="submit" className="save">Save</button>
					<button type="submit" className="cancel">Cancel</button>
				</form>
				<Link to="#" className="close-box"><i className="la la-close"></i></Link>
			</div>
		</div>
        
    )
}

export default TotalEmployeesDialog
