import React from 'react'

import Cover from './Cover';
import CreatePortfolioDialog from './CreatePortfolioDialog';
import EducationDialog from './EducationDialog';
import EstablishDialog from './EstablishDialog';
import ExperienceDialog from './ExperienceDialog';
import LocationDialog from './LocationDialog';
import OverviewDialog from './OverviewDialog';
import SkillsDialog from './SkillsDialog';
import TotalEmployeesDialog from './TotalEmployeesDialog';
import { useSelector } from 'react-redux';
import Section1 from './Layout/Section1';
import Section2 from './Layout/Section2';
import Section3 from './Layout/Section3';


export default function CompanyProfile() {
	const company = useSelector(state => state.company);
	return (
		<>
			<Cover coverImg={company.cover}/>
			<main>
				<div className="main-section">
					<div className="container">
						<div className="main-section-data">
							<div className="row">
								<Section1 company={company}/>
								<Section2 company={company}/>
								<Section3/>
							</div>
						</div>
					</div>
				</div>
			</main>
			<TotalEmployeesDialog />
			<SkillsDialog />
			<OverviewDialog />
			<LocationDialog />
			<ExperienceDialog />
			<EstablishDialog />
			<EducationDialog />
			<CreatePortfolioDialog />
		</>
	)
}
