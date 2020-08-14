import React from 'react'
import HomeUserData from './HomeUserData'
import HomeSuggestions from './HomeSuggestions'
import HomeTagSection from './HomeTagSection'
import AddPostPlaceholder from '../Posts/AddPostPlaceholder'
import LoadingIndicator from '../Shared/LoadingIndicator'

import HomeWidgetAbout from './HomeWidgetAbout'
import HomeWidgetJobs from './HomeWidgetJobs'
import PostyList from '../Posts/PostyList'

export default function Home() {
    return (
        <main>
            <div className="main-section">
                <div className="container">
                    <div className="main-section-data">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                                <div className="main-left-sidebar no-margin">
                                    <HomeUserData></HomeUserData>
                                    <HomeSuggestions></HomeSuggestions>
                                    <HomeTagSection></HomeTagSection>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-8 no-pd">
                                <div className="main-ws-sec">
                                    <AddPostPlaceholder />
                                    <div className="posts-section">
                                        <PostyList />
                                        <LoadingIndicator />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 pd-right-none no-pd">
                                <div className="right-sidebar">
                                    <HomeWidgetAbout />
                                    <HomeWidgetJobs title ="Top Jobs"/>
                                    <HomeWidgetJobs title ="Most Viewed This Week"/>
                                    <HomeSuggestions />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
