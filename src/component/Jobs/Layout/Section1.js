import React from 'react'
import { Link } from 'react-router-dom';
const Section1 = () => {
  return (
    <div className="col-lg-3">
      <div className="filter-secs">
        <div className="filter-heading">
          <h3>Filters</h3>
          <Link to="#" >Clear all filters</Link>
        </div>{/*filter-heading end*/}
        <div className="paddy">
          <div className="filter-dd">
            <div className="filter-ttl">
              <h3>Skills</h3>
              <Link to="#" >Clear</Link>
            </div>
            <form>
              <input type="text" name="search-skills" placeholder="Search skills" />
            </form>
          </div>
          <div className="filter-dd">
            <div className="filter-ttl">
              <h3>Availabilty</h3>
              <Link to="#" >Clear</Link>
            </div>
            <ul className="avail-checks">
              <li>
                <input type="radio" name="cc" id="c1" />
                <label htmlFor="c1">
                  <span />
                </label>
                <small>Hourly</small>
              </li>
              <li>
                <input type="radio" name="cc" id="c2" />
                <label htmlFor="c2">
                  <span />
                </label>
                <small>Part Time</small>
              </li>
              <li>
                <input type="radio" name="cc" id="c3" />
                <label htmlFor="c3">
                  <span />
                </label>
                <small>Full Time</small>
              </li>
            </ul>
          </div>
          <div className="filter-dd">
            <div className="filter-ttl">
              <h3>Job Type</h3>
              <Link to="#" >Clear</Link>
            </div>
            <form className="job-tp">
              <select>
                <option>Select a job type</option>
                <option>Select a job type</option>
                <option>Select a job type</option>
                <option>Select a job type</option>
              </select>
              <i className="fa fa-ellipsis-v" aria-hidden="true" />
            </form>
          </div>
          <div className="filter-dd">
            <div className="filter-ttl">
              <h3>Pay Rate / Hr ($)</h3>
              <Link to="#" >Clear</Link>
            </div>
            <div className="rg-slider">
              <input className="rn-slider slider-input" type="hidden" defaultValue="5,50" style={{ display: 'none' }} /><div className="slider-container theme-green" style={{ width: '300px' }}>			<div className="back-bar">                <div className="selected-bar" style={{ width: '93px', left: '10.5px' }} />                <div className="pointer low" style={{ left: '4px' }} /><div className="pointer-label low" style={{ left: '0px' }}>5</div>                <div className="pointer high" style={{ left: '97px' }} /><div className="pointer-label high" style={{ left: '78px' }}>50</div>                <div className="clickable-dummy" />          </div>            <div className="scale" />		</div>
            </div>
            <div className="rg-limit">
              <h4>1</h4>
              <h4>100+</h4>
            </div>{/*rg-limit end*/}
          </div>
          <div className="filter-dd">
            <div className="filter-ttl">
              <h3>Experience Level</h3>
              <Link to="#" >Clear</Link>
            </div>
            <form className="job-tp">
              <select>
                <option>Select a experience level</option>
                <option>3 years</option>
                <option>4 years</option>
                <option>5 years</option>
              </select>
              <i className="fa fa-ellipsis-v" aria-hidden="true" />
            </form>
          </div>
          <div className="filter-dd">
            <div className="filter-ttl">
              <h3>Countries</h3>
              <Link to="#" >Clear</Link>
            </div>
            <form className="job-tp">
              <select>
                <option>Select a country</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Russia</option>
              </select>
              <i className="fa fa-ellipsis-v" aria-hidden="true" />
            </form>
          </div>
        </div>
      </div>{/*filter-secs end*/}
    </div>

  )
}

export default Section1
