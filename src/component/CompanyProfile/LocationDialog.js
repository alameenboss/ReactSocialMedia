import React from 'react'
import { Link } from 'react-router-dom';
function LocationDialog() {
    return (
        <div className="overview-box" id="location-box">
			<div className="overview-edit">
				<h3>Location</h3>
				<form>
					<div className="datefm">
						<select>
							<option>Country</option>
							<option value="pakistan">Pakistan</option>
							<option value="england">England</option>
							<option value="india">India</option>
							<option value="usa">United Sates</option>
						</select>
						<i className="fa fa-globe"></i>
					</div>
					<div className="datefm">
						<select>
							<option>City</option>
							<option value="london">London</option>
							<option value="new-york">New York</option>
							<option value="sydney">Sydney</option>
							<option value="chicago">Chicago</option>
						</select>
						<i className="fa fa-map-marker"></i>
					</div>
					<button type="submit" className="save">Save</button>
					<button type="submit" className="cancel">Cancel</button>
				</form>
				<Link to="#" className="close-box"><i className="la la-close"></i></Link>
			</div>
		</div>

    )
}

export default LocationDialog
