import React from 'react'
import { Link } from 'react-router-dom'
const UserPaymentSection = ({ section }) => {
  return (
    <div className={section === 'Payment' ? 'product-feed-tab current' : 'product-feed-tab'} id="payment-dd">
      <div className="billing-method">
        <ul>
          <li>
            <h3>Add Billing Method</h3>
            <Link to="#" ><i className="fa fa-plus-circle" /></Link>
          </li>
          <li>
            <h3>See Activity</h3>
            <Link to="#" >View All</Link>
          </li>
          <li>
            <h3>Total Money</h3>
            <span>$0.00</span>
          </li>
        </ul>
        <div className="lt-sec">
          <img src="/assets/images/lt-icon.png" alt="" />
          <h4>All your transactions are saved here</h4>
          <Link to="#" >Click Here</Link>
        </div>
      </div>
      <div className="add-billing-method">
        <h3>Add Billing Method</h3>
        <h4><img src="/assets/images/dlr-icon.png" alt="" /><span>With workwise payment protection , only pay for work delivered.</span></h4>
        <div className="payment_methods">
          <h4>Credit or Debit Cards</h4>
          <form>
            <div className="row">
              <div className="col-lg-12">
                <div className="cc-head">
                  <h5>Card Number</h5>
                  <ul>
                    <li><img src="/assets/images/cc-icon1.png" alt="" /></li>
                    <li><img src="/assets/images/cc-icon2.png" alt="" /></li>
                    <li><img src="/assets/images/cc-icon3.png" alt="" /></li>
                    <li><img src="/assets/images/cc-icon4.png" alt="" /></li>
                  </ul>
                </div>
                <div className="inpt-field pd-moree">
                  <input type="text" name="cc-number" placeholder="CC Number" />
                  <i className="fa fa-credit-card" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cc-head">
                  <h5>First Name</h5>
                </div>
                <div className="inpt-field">
                  <input type="text" name="f-name" placeholder="First Name"/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cc-head">
                  <h5>Last Name</h5>
                </div>
                <div className="inpt-field">
                  <input type="text" name="l-name" placeholder="Last Name"/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cc-head">
                  <h5>Expiresons</h5>
                </div>
                <div className="rowwy">
                  <div className="row">
                    <div className="col-lg-6 pd-left-none no-pd">
                      <div className="inpt-field">
                        <input type="text" name="f-name" placeholder="First Name"/>
                      </div>
                    </div>
                    <div className="col-lg-6 pd-right-none no-pd">
                      <div className="inpt-field">
                        <input type="text" name="f-name" placeholder="Last Name"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cc-head">
                  <h5>Cvv (Security Code) <i className="fa fa-question-circle" /></h5>
                </div>
                <div className="inpt-field">
                  <input type="text" name="l-name" placeholder="Last Name"/>
                </div>
              </div>
              <div className="col-lg-12">
                <button type="submit">Continue</button>
              </div>
            </div>
          </form>
          <h4>Add Paypal Account</h4>
        </div>
      </div>
    </div>

  )
}

export default UserPaymentSection
