import React from "react";
import { useSelector } from "react-redux";

const HomeWidgetJobs = ({ title }) => {
  const jobList = useSelector((state) => state.jobs);

  return (
    <div className="widget widget-jobs">
      <div className="sd-title">
        <h3>{title}</h3>
        <i className="la la-ellipsis-v"></i>
      </div>
      <div className="jobs-list">
        {jobList.map((value, index) => (
          <div key={index} className="job-info">
            <div className="job-details">
              <h3>{value.title}</h3>
              <p>{value.title}</p>
            </div>
            <div className="hr-rate">
              <span>{value.Rate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeWidgetJobs;
