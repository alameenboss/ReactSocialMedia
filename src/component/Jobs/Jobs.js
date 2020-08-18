import React from 'react'
import Section1 from './Layout/Section1';
import Section2 from './Layout/Section2';
import Section3 from './Layout/Section3';
import SearchBox from './../Shared/SearchBox';
export default function Jobs() {
  return (
    <>
      <SearchBox />
      <main>
        <div className="main-section">
          <div className="container">
            <div className="main-section-data">
              <div className="row">
                <Section1 />
                <Section2 />
                <Section3 />
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}
