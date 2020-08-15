import React from 'react'
import { useSelector } from 'react-redux';
import CompanyCard from './CompanyCard'
import LoadingIndicator from '../Shared/LoadingIndicator'

export default function Companies() {
	const companies = useSelector(state => state.companies);
    return (
        <section className="companies-info">
			<div className="container">
				<div className="company-title">
					<h3>All Companies</h3>
				</div>
				<div className="companies-list">
					<div className="row">
						{
							companies.map((value, index) =>  <CompanyCard key={index} company={value}/> )
						}
					</div>
				</div>
				<LoadingIndicator/>
			</div>
		</section>
    )
}
