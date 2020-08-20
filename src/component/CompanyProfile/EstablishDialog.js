import React from 'react'
import { Link } from 'react-router-dom';
function EstablishDialog() {
    return (
        <div className="overview-box" id="establish-box">
			<div className="overview-edit">
				<h3>Establish Since</h3>
				<form>
					<div className="daty">
						<input  type="text" name="establish" placeholder="Select Date" className="datepicker flatpickr-input" readOnly="readonly"/>
						<i className="fa fa-calendar"></i>
					</div>
					<button type="submit" className="save">Save</button>
					<button type="submit" className="cancel">Cancel</button>
				</form>
				<Link to="#" className="close-box"><i className="la la-close"></i></Link>
			</div>
		</div>

    )
}

export default EstablishDialog
