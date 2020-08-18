import React from 'react'
import HomeSuggestions from '../../Home/HomeSuggestions';
import CompanyData from './../CompanyData';

function Section1({company}) {
    return (
        <div className="col-lg-3">
            <div className="main-left-sidebar">
                <CompanyData img={company.img}
                    following={company.following}
                    followers={company.followers}
                    sociallinks={company.sociallinks}
                />
                <HomeSuggestions />
            </div>
        </div>

    )
}

export default Section1
