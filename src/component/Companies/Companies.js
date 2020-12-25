import React,{useState,useEffect} from 'react'
//import { useSelector } from 'react-redux';
import CompanyCard from './CompanyCard'
import LoadingIndicator from '../Shared/LoadingIndicator'
import firebase from '../../firebase'

export default function Companies() {
	//const companies = useSelector(state => state.companies);
	const [companies,setCompany]=useState([]);
	useEffect(() => {
		const familyTreeMembersRef = firebase.database().ref('Company');
		familyTreeMembersRef.on('value',(snapshot) => {
			let companyDetails = snapshot.val();
			setCompany(companyDetails);
		});
	}, [])
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
/*
export default function Companies() {
	const [companies,setCompany]=useState([]);
	useEffect(() => {
		const familyTreeMembersRef = firebase.database().ref('familyTreeMembers');
		familyTreeMembersRef.on('value',(snapshot) => {
			let companyDetails = snapshot.val();
			let newState =[];
			for (let company in companyDetails){
				newState.push({
					id:company,
					name:companyDetails[company].primaryName,
					country:companyDetails[company].addressCounty,
					postalCode:companyDetails[company].postalCode
				});
			}
			setCompany(newState);
		});
	}, [])
    return (
        <section className="companies-info">
			<div className="container">
				<div className="company-title">
					<h3>All Companies</h3>
				</div>
				<div className="companies-list">
					<div className="row">
						{
							companies.map((value, index) =>  
							<CompanyCard key={index} company={value}/> )
						}
					</div>
				</div>
				<LoadingIndicator/>
			</div>
		</section>
    )
}
*/