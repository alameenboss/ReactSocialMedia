import React from 'react'
import { Link } from 'react-router-dom'

const JobPostContainer = () => {
    return (

        <div className="posts-bar">
            <div className="post-bar bgclr">
                <div className="wordpressdevlp">
                    <h2>Senior Wordpress Developer</h2>
                    <p><i className="la la-clock-o" />Posted on 30 August 2018</p>
                </div>
                <br />
                <div className="row no-gutters">
                    <div className="col-md-6 col-sm-12">
                        <div className="cadidatesbtn">
                            <button type="button" className="btn btn-primary">
                                <span className="badge badge-light">3</span>Candidates
                      </button>
                            <Link to="#">
                                <i className="far fa-edit" />
                            </Link>
                            <Link to="#">
                                <i className="far fa-trash-alt" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <ul className="bk-links bklink">
                            <li><Link to="#" ><i className="la la-bookmark" /></Link></li>
                            <li><Link to="#" ><i className="la la-envelope" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default JobPostContainer
