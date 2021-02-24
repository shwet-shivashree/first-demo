import React, { Component } from "react";

class CheckOut extends Component {
  constructor(props) {
    super(props);
  }

  //   buy() {
  //     this.props.history.push("/buy-form");
  //   }

  render() {
    return (
      <div>
        <div class="container mt-5 mb-5 d-flex justify-content-center">
          <div class="card p-5">
            <br />
            <div>
              <h4 class="heading">The right cover, at right price</h4>
              <p class="text">
                Please make the payment to start enjoying all the features of
                our premium plan as soon as possible
              </p>
            </div>
            <div class="pricing p-3 rounded mt-4 d-flex justify-content-between">
              <div class="images d-flex flex-row align-items-center">
                <img
                  src="https://i.imgur.com/S17BrTx.png"
                  class="rounded"
                  width="60"
                />
                <div class="d-flex flex-column ml-4">
                  <span class="business">
                    Health Insurance with Coronavirus Coverage
                  </span>
                  <span class="plan">@ ₹ 630/month</span>
                </div>
              </div>

              <div class="d-flex flex-row align-items-center">
                <sup class="dollar font-weight-bold"> ₹ </sup>
                <span class="amount ml-1 mr-1">630</span>
                <span class="year font-weight-bold">/month</span>
              </div>
            </div>{" "}
            <span class="detail mt-5">Payment details</span>
            <div class="credit rounded mt-4 d-flex justify-content-between align-items-center">
              <div class="d-flex flex-row align-items-center">
                {" "}
                <img
                  src="https://i.imgur.com/qHX7vY1.png"
                  class="rounded"
                  width="70"
                />
                <div class="d-flex flex-column ml-3">
                  <span class="business">Credit Card</span>
                  <span class="plan">
                    <input
                      type="text"
                      placeholder="XXXX XXXX XXXX XXXX"
                    ></input>
                  </span>
                </div>
              </div>
              <div>
                <input type="text" class="form-control cvv" placeholder="CVC" />
              </div>
            </div>
            <div class="credit rounded mt-2 d-flex justify-content-between align-items-center"></div>
            <h6 class="mt-4 text-primary">Holder Name</h6>
            <div class="email mt-2">
              <input
                type="text"
                class="form-control email-text"
                placeholder="Holder Name"
              />
            </div>
            <div class="mt-3">
              <a
                class="btn btn-primary btn-block payment-button"
                href="/loggedIn"
              >
                Proceed to payment <i class="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CheckOut;
