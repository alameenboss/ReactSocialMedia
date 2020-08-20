import React from 'react'
import { Link } from 'react-router-dom';
function CreatePortfolioDialog() {
    return (
        <div className="overview-box" id="create-portfolio">
			<div className="overview-edit">
				<h3>Create Portfolio</h3>
				<form>
					<input  type="text" name="pf-name" placeholder="Portfolio Name"/>
					<div className="file-submit nomg">
						<input  type="file" name="file"/>
					</div>
					<div className="pf-img">
						<img src="reactsocialmedia/assets/images/resources/np.png" alt="" />
					</div>
					<input  type="text" name="website-url" placeholder="htp://www.example.com"/>
					<button type="submit" className="save">Save</button>
					<button type="submit" className="cancel">Cancel</button>
				</form>
				<Link to="#" className="close-box"><i className="la la-close"></i></Link>
			</div>
		</div>

    )
}

export default CreatePortfolioDialog
