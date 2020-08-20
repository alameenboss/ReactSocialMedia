import React from 'react'
import { Link } from 'react-router-dom';
function EducationDialog() {
    return (
        <div className="overview-box" id="education-box">
			<div className="overview-edit">
				<h3>Education</h3>
				<form>
					<input  type="text" name="school" placeholder="School / University"/>
					<div className="datepicky">
						<div className="row">
							<div className="col-lg-6 no-left-pd">
								<div className="datefm">
									<input  type="text" name="from" placeholder="From" className="datepicker flatpickr-input" readOnly="readonly"/>	
									<i className="fa fa-calendar"></i>
								</div>
							</div>
							<div className="col-lg-6 no-righ-pd">
								<div className="datefm">
									<input  type="text" name="to" placeholder="To" className="datepicker flatpickr-input" readOnly="readonly"/>
									<i className="fa fa-calendar"></i>
								</div>
							</div>
						</div>
					</div>
					<input  type="text" name="degree" placeholder="Degree"/>
					<textarea placeholder="Description"></textarea>
					<button type="submit" className="save">Save</button>
					<button type="submit" className="save-add">Save &amp; Add More</button>
					<button type="submit" className="cancel">Cancel</button>
				</form>
				<Link to="#" className="close-box"><i className="la la-close"></i></Link>
			</div>
		</div>

    )
}

export default EducationDialog
