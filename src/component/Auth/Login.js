import React from 'react'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="wrapper">
            <div className="sign-in-page">
                <div className="signin-popup">
                    <div className="signin-pop">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="cmp-info">
                                    <div className="cm-logo">
                                        <img src="reactsocialmedia/assets/images/cm-logo.png" alt="" />
                                        <p>Workwise,  is a global freelancing platform and social networking where businesses and independent professionals connect and collaborate remotely</p>
                                    </div>
                                    <img src="reactsocialmedia/assets/images/cm-main-img.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="login-sec">
                                    <ul className="sign-control">
                                        <li data-tab="tab-1" className="current"><Link to="#" >Sign in</Link></li>
                                        <li data-tab="tab-2"><Link to="#" >Sign up</Link></li>
                                    </ul>
                                    <div className="sign_in_sec current" id="tab-1">

                                        <h3>Sign in</h3>
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-12 no-pdd">
                                                    <div className="sn-field">
                                                        <input type="text" name="username" placeholder="Username" />
                                                        <i className="la la-user"></i>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 no-pdd">
                                                    <div className="sn-field">
                                                        <input type="password" name="password" placeholder="Password" />
                                                        <i className="la la-lock"></i>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 no-pdd">
                                                    <div className="checky-sec">
                                                        <div className="fgt-sec">
                                                            <input type="checkbox" name="cc" id="c1" />
                                                            <label htmlFor="c1">
                                                                <span></span>
                                                            </label>
                                                            <small>Remember me</small>
                                                        </div>
                                                        <Link to="#" >Forgot Password?</Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 no-pdd">
                                                    <button type="submit" value="submit">Sign in</button>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="login-resources">
                                            <h4>Login Via Social Account</h4>
                                            <ul>
                                                <li><Link to="#" className="fb"><i className="fa fa-facebook"></i>Login Via Facebook</Link></li>
                                                <li><Link to="#" className="tw"><i className="fa fa-twitter"></i>Login Via Twitter</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sign_in_sec" id="tab-2">
                                        <div className="signup-tab">
                                            <i className="fa fa-long-arrow-left"></i>
                                            <h2>johndoe@example.com</h2>
                                            <ul>
                                                <li data-tab="tab-3" className="current"><Link to="#" >User</Link></li>
                                                <li data-tab="tab-4"><Link to="#" >Company</Link></li>
                                            </ul>
                                        </div>
                                        <div className="dff-tab current" id="tab-3">
                                            <form>
                                                <div className="row">
                                                    <div className="col-lg-12 no-pdd">
                                                        <div className="sn-field">
                                                            <input type="text" name="name" placeholder="Full Name" />
                                                            <i className="la la-user"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 no-pdd">
                                                        <div className="sn-field">
                                                            <input type="text" name="country" placeholder="Country" />
                                                            <i className="la la-globe"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 no-pdd">
                                                        <div className="sn-field">
                                                            <select>
                                                                <option>Category</option>
                                                                <option>Category 1</option>
                                                                <option>Category 2</option>
                                                                <option>Category 3</option>
                                                                <option>Category 4</option>
                                                            </select>
                                                            <i className="la la-dropbox"></i>
                                                            <span><i className="fa fa-ellipsis-h"></i></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 no-pdd">
                                                        <div className="sn-field">
                                                            <input type="password" name="password" placeholder="Password" />
                                                            <i className="la la-lock"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 no-pdd">
                                                        <div className="sn-field">
                                                            <input type="password" name="repeat-password" placeholder="Repeat Password" />
                                                            <i className="la la-lock"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 no-pdd">
                                                        <div className="checky-sec st2">
                                                            <div className="fgt-sec">
                                                                <input type="checkbox" name="cc" id="c2" />
                                                                <label htmlFor="c2">
                                                                    <span></span>
                                                                </label>
                                                                <small>Yes, I understand and agree to the workwise Terms &amp; Conditions.</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 no-pdd">
                                                        <button type="submit" value="submit">Get Started</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="dff-tab" id="tab-4">
                                            <form>
                                                <div className="row">
                                                    <div className="col-lg-12 no-pdd">
                                                        <div className="sn-field">
                                                            <input type="text" name="company-name" placeholder="Company Name" />
                                                            <i className="la la-building"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 no-pdd">
                                                        <div className="sn-field">
                                                            <input type="text" name="country" placeholder="Country" />
                                                            <i className="la la-globe"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 no-pdd">
                                                        <div className="sn-field">
                                                            <input type="password" name="password" placeholder="Password" />
                                                            <i className="la la-lock"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 no-pdd">
                                                        <div className="sn-field">
                                                            <input type="password" name="repeat-password" placeholder="Repeat Password" />
                                                            <i className="la la-lock"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 no-pdd">
                                                        <div className="checky-sec st2">
                                                            <div className="fgt-sec">
                                                                <input type="checkbox" name="cc" id="c3" />
                                                                <label htmlFor="c3">
                                                                    <span></span>
                                                                </label>
                                                                <small>Yes, I understand and agree to the workwise Terms &amp; Conditions.</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 no-pdd">
                                                        <button type="submit" value="submit">Get Started</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footy-sec">
                    <div className="container">
                        <ul>
                            <li><Link to="help-center.html" >Help Center</Link></li>
                            <li><Link to="about.html" >About</Link></li>
                            <li><Link to="#" >Privacy Policy</Link></li>
                            <li><Link to="#" >Community Guidelines</Link></li>
                            <li><Link to="#" >Cookies Policy</Link></li>
                            <li><Link to="#" >Career</Link></li>
                            <li><Link to="forum.html" >Forum</Link></li>
                            <li><Link to="#" >Language</Link></li>
                            <li><Link to="#" >Copyright Policy</Link></li>
                        </ul>
                        <p><img src="reactsocialmedia/assets/images/copy-icon.png" alt="" />Copyright 2019</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
