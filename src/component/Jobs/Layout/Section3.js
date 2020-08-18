import React from 'react'
import HomeWidgetAbout from './../../Home/HomeWidgetAbout';
import HomeWidgetJobs from './../../Home/HomeWidgetJobs';
const Section3 = () => {
    return (
        <div className="col-lg-3">
            <div className="right-sidebar">
                <HomeWidgetAbout />
                <HomeWidgetJobs title="Top Jobs" />
                <HomeWidgetJobs title="Most Viewed This Week" />
            </div>
        </div>

    )
}

export default Section3
