import React from 'react'

const HomeWidgetJobs = ({title}) => {
    return (
        <div className="widget widget-jobs">
            <div className="sd-title">
                <h3>{title}</h3>
                <i className="la la-ellipsis-v"></i>
            </div>
            <div className="jobs-list">
                <div className="job-info" >
                    {/* *ngFor="let item of topJobs" */}
                    <div className="job-details">
                        <h3>Senior Product Designer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    </div>
                    <div className="hr-rate">
                        <span>$25/hr</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeWidgetJobs
