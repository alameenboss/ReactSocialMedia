import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import JobPostContainer from './JobPost/JobPostContainer';
import SavedJobContainer from './JobPost/SavedJobContainer';
import AppliedJobContainer from './JobPost/AppliedJobContainer';
import AppliedCadidatesContainer from './JobPost/AppliedCadidatesContainer';

const UserJobSection = ({ section }) => {
    const tabs = [
        { name: 'Manage Jobs' },
        { name: 'Saved Jobs' },
        { name: 'Applied Jobs' },
        { name: 'Applied cadidates' }]
    const [tab, updateTab] = useState('Manage Jobs');
    return (

        <div className={section === 'Jobs' ? 'product-feed-tab current' : 'product-feed-tab'} id="saved-jobs">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {
                    tabs.map((value, index) =>
                        <li key={index} className="nav-item">
                            <Link to="#"
                                className={`nav-link ${value.name === tab ? 'active' : ''}`}
                                onClick={() => updateTab(value.name)}>{value.name}</Link>
                        </li>
                    )
                }
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className={`tab-pane fade ${'Manage Jobs' === tab ? 'show active' : ''}`} id="mange" role="tabpanel" aria-labelledby="mange-tab">
                    <JobPostContainer />
                </div>
                <div className={`tab-pane fade ${'Saved Jobs' === tab ? 'show active' : ''}`} id="saved" role="tabpanel" aria-labelledby="saved-tab">

                    <SavedJobContainer />
                </div>
                <div className={`tab-pane fade ${'Applied Jobs' === tab ? 'show active' : ''}`} id="applied" role="tabpanel" aria-labelledby="applied-tab">

                    <AppliedJobContainer />

                </div>
                <div className={`tab-pane fade ${'Applied cadidates' === tab ? 'show active' : ''}`} id="cadidates" role="tabpanel" aria-labelledby="cadidates-tab">

                    <AppliedCadidatesContainer />

                </div>
            </div>
        </div>
    )
}

export default UserJobSection
