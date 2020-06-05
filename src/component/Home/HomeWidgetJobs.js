import React from 'react'

const HomeWidgetJobs = () => {
    return (
        <div className="widget widget-jobs">
            <div className="sd-title">
                <h3>title</h3>
                <i className="la la-ellipsis-v"></i>
            </div>
            <div className="jobs-list">
                <div className="job-info" >
                    {/* *ngFor="let item of topJobs" */}
                    <div className="job-details">
                        <h3>item.Title</h3>
                        <p>item.Description</p>
                    </div>
                    <div className="hr-rate">
                        <span>item.Rate</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeWidgetJobs
