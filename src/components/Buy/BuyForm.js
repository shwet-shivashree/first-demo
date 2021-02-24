import React, { Component } from "react";

import axios from "axios";
import BuyService from "./BuyService";

class BuyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yourname: "",
      gender: "",
      yourage: Number,
      bloodpressure: "",
      overweight: "",
      sugar: "",
      hypertension: "",
      dailyexercise: "",
      smoking: "",
      alcohol: "",
      drugs: "",
      policyname: "",
      purchasedate: Date,
    };

    this.changeYourNameHandler = this.changeYourNameHandler.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.changeAgeHandler = this.changeAgeHandler.bind(this);
    this.changeBloodNameHandler = this.changeBloodNameHandler.bind(this);
    this.changeOverHandler = this.changeOverHandler.bind(this);
    this.changeSugarNameHandler = this.changeSugarNameHandler.bind(this);
    this.changehyperHandler = this.changehyperHandler.bind(this);
    this.changedailyHandler = this.changedailyHandler.bind(this);
    this.changeSmokingHandler = this.changeSmokingHandler.bind(this);
    this.changeAlcoholHandler = this.changeAlcoholHandler.bind(this);
    this.changeDrugsHandler = this.changeDrugsHandler.bind(this);
    this.changePolicyNameHandler = this.changePolicyNameHandler.bind(this);
    this.changePurchaseDateHandler = this.changePurchaseDateHandler.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  calculate = (e) => {
    e.preventDefault();
    let form = {
      name: this.state.yourname,
      gender: this.state.gender,
      age: this.state.yourage,
      smoking: this.state.smoking,
      alcohol: this.state.alcohol,
      dailyExercise: this.state.dailyexercise,
      drugs: this.state.drugs,
      hyperTension: this.state.hypertension,
      bloodPressure: this.state.bloodpressure,
      sugar: this.state.sugar,
      overweight: this.state.overweight,
      policyName: "Arogya Sanjeevani Insurance Policy",
      purchaseDate: this.state.purchasedate,
    };
    console.log("buy form =>" + JSON.stringify(form));
    // Services.buyPolicy(form)
    //   .then((res) => {
    //     console.log(res);
    //   });
    BuyService.buyPolicy(form).then((res) => {
      console.log(res);
    });
  };

  changeYourNameHandler = (event) => {
    this.setState({ yourname: event.target.value });
  };

  changeGenderHandler = (event) => {
    this.setState({ gender: event.target.value });
  };

  changeAgeHandler = (event) => {
    this.setState({ yourage: event.target.value });
  };

  changeBloodNameHandler = (event) => {
    this.setState({ bloodpressure: event.target.value });
  };

  changeOverHandler = (event) => {
    this.setState({ overweight: event.target.value });
  };

  changeSugarNameHandler = (event) => {
    this.setState({ sugar: event.target.value });
  };

  changehyperHandler = (event) => {
    this.setState({ hypertension: event.target.value });
  };

  changedailyHandler = (event) => {
    this.setState({ dailyexercise: event.target.value });
  };

  changeSmokingHandler = (event) => {
    this.setState({ smoking: event.target.value });
  };

  changeAlcoholHandler = (event) => {
    this.setState({ alcohol: event.target.value });
  };

  changeDrugsHandler = (event) => {
    this.setState({ drugs: event.target.value });
  };

  changePolicyNameHandler = (event) => {
    this.setState({ policyname: event.target.value });
  };

  changePurchaseDateHandler = (event) => {
    this.setState({ purchasedate: event.target.value });
  };

  cancel() {
    this.props.history.push("/");
  }

  buy() {
    this.props.history.push("/buy-form");
  }
  render() {
    return (
      <div>
        <section id="services" className="wizard-section services">
          <div id="design3">
            <h1>Arogya Sanjeevani Insurance Policy</h1>
            <p align="left">
              <h4>What does the policy cover?</h4>A simple and affordable health
              plan designed to meet your insurance needs In the unprecedented
              times that we live in, covering oneself with a health insurance
              cover has become a necessity. Here's an easy to buy plan with that
              covers all your inpatient hospitalisation needs with a wide range
              of sum-insured ₹5 lacs.
              <br />
              <ul>
                Inpatient Care: Covers medical expenses like room rent, ICU
                charges, medical practitioners fee, OT charges, nursing charges
                etc. incurred during hospitalization due to an illness or
                accident for period more than 24 hrs.
                <li>
                  Room Rent, Boarding, Nursing Expenses as provided by the
                  Hospital /Nursing Home, up to 2% of the sum insured subject to
                  maximum of Rs.5000/- per day.
                </li>
                <li>
                  Intensive Care Unit (ICU) /Intensive Cardiac Care Unit (ICCU)
                  expenses up to 5% of sum insured subject to maximum of Rs.
                  10,000/- per day.
                </li>
                <li>
                  Cost is included up to sum-insured for Anesthesia, blood,
                  oxygen, operation theatre charges, surgical appliances,
                  medicines and drugs, diagnostics, diagnostic imaging
                  modalities and such similar other expenses.
                </li>
                <li>Doctor/Surgeons fees is covered</li>
              </ul>
            </p>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6 col-md-6">
              <div className="wizard-content-left d-flex justify-content-center align-items-center">
                <h1>
                  <b>
                    You've made the right choice! Get Arogya Sanjeevani Policy,
                    Reliance General and secure your health instantly-
                  </b>
                </h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-wizard">
                <form action="" method="post" role="form">
                  <div className="form-wizard-header">
                    <p>Fill all form field to go next step</p>
                    <ul className="list-unstyled form-wizard-steps clearfix">
                      <li className="active">
                        <span>1</span>
                      </li>
                      <li>
                        <span>2</span>
                      </li>
                      <li>
                        <span>3</span>
                      </li>
                      <li>
                        <span>4</span>
                      </li>
                      <li>
                        <span>5</span>
                      </li>
                    </ul>
                  </div>
                  <fieldset className="wizard-fieldset show">
                    <h5>Personal Information</h5>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="fname"
                        value={this.state.policyname}
                        onChange={this.changePolicyNameHandler}
                        disabled="Arogya Sanjeevani Insurance Policy"
                      />
                      <label htmlFor="fname" className="wizard-form-text-label">
                        Arogya Sanjeevani Insurance Policy
                      </label>
                      <div className="wizard-form-error"></div>
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control wizard-required"
                        id="fname"
                        value={this.state.yourname}
                        onChange={this.changeYourNameHandler}
                      />
                      <label htmlFor="fname" className="wizard-form-text-label">
                        Your Name*
                      </label>
                      <div className="wizard-form-error"></div>
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control wizard-required"
                        id="fname"
                        value={this.state.gender}
                        onChange={this.changeGenderHandler}
                      />
                      <label htmlFor="fname" className="wizard-form-text-label">
                        Gender*
                      </label>
                      <div className="wizard-form-error"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control wizard-required"
                        id="fname"
                        value={this.state.yourage}
                        onChange={this.changeAgeHandler}
                      />
                      <label htmlFor="fname" className="wizard-form-text-label">
                        Your Age*
                      </label>
                      <div className="wizard-form-error"></div>
                    </div>

                    <div className="form-group">
                      <input
                        type="date"
                        className="form-control wizard-required"
                        id="fname"
                        value={this.state.purchasedate}
                        onChange={this.changePurchaseDateHandler}
                      />
                      <label
                        htmlFor="fname"
                        className="wizard-form-text-label"
                      ></label>
                      <div className="wizard-form-error"></div>
                    </div>

                    <div className="form-group clearfix">
                      <a
                        href="javascript:;"
                        className="form-wizard-next-btn float-right"
                      >
                        Next
                      </a>
                    </div>
                  </fieldset>
                  <fieldset className="wizard-fieldset">
                    <h5>Pre-Health Conditions</h5>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control wizard-required"
                        id="email"
                        value={this.state.bloodpressure}
                        onChange={this.changeBloodNameHandler}
                      />
                      <label htmlFor="email" className="wizard-form-text-label">
                        Blood Pressure*
                      </label>
                      <div className="wizard-form-error"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control wizard-required"
                        id="email"
                        value={this.state.overweight}
                        onChange={this.changeOverHandler}
                      />
                      <label htmlFor="email" className="wizard-form-text-label">
                        Over Weight*
                      </label>
                      <div className="wizard-form-error"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control wizard-required"
                        id="email"
                        value={this.state.sugar}
                        onChange={this.changeSugarNameHandler}
                      />
                      <label id="email" className="wizard-form-text-label">
                        Sugar*
                      </label>
                      <div className="wizard-form-error"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control wizard-required"
                        id="cpwd"
                        value={this.state.hypertension}
                        onChange={this.changehyperHandler}
                      />
                      <label htmlFor="cpwd" className="wizard-form-text-label">
                        Hyper-Tension*
                      </label>
                      <div className="wizard-form-error"></div>
                    </div>
                    <div className="form-group clearfix">
                      <a
                        href="javascript:;"
                        className="form-wizard-previous-btn float-left"
                      >
                        Previous
                      </a>
                      <a
                        href="javascript:;"
                        className="form-wizard-next-btn float-right"
                      >
                        Next
                      </a>
                    </div>
                  </fieldset>
                  <fieldset className="wizard-fieldset">
                    <h5>Your Habits</h5>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control wizard-required"
                        id="bname"
                        value={this.state.dailyexercise}
                        onChange={this.changedailyHandler}
                      />
                      <label htmlFor="bname" className="wizard-form-text-label">
                        Daily Exercise*
                      </label>
                      <div className="wizard-form-error"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control wizard-required"
                        id="brname"
                        value={this.state.smoking}
                        onChange={this.changeSmokingHandler}
                      />
                      <label
                        htmlFor="brname"
                        className="wizard-form-text-label"
                      >
                        Smoking*
                      </label>
                      <div className="wizard-form-error"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control wizard-required"
                        id="acname"
                        value={this.state.alcohol}
                        onChange={this.changeAlcoholHandler}
                      />
                      <label
                        htmlFor="acname"
                        className="wizard-form-text-label"
                      >
                        Alcohol*
                      </label>
                      <div className="wizard-form-error"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control wizard-required"
                        id="acon"
                        value={this.state.drugs}
                        onChange={this.changeDrugsHandler}
                      />
                      <label htmlFor="acon" className="wizard-form-text-label">
                        Drugs*
                      </label>
                      <div className="wizard-form-error"></div>
                    </div>
                    <div className="form-group clearfix">
                      <a
                        href="javascript:;"
                        className="form-wizard-previous-btn float-left"
                      >
                        Previous
                      </a>
                      <a
                        href="javascript:;"
                        className="form-wizard-next-btn float-right"
                        onClick={this.calculate}
                      >
                        Calculate
                      </a>
                    </div>
                  </fieldset>
                  <fieldset className="wizard-fieldset">
                    <div></div>
                    <div className="form-group clearfix">
                      <div>
                        <h2>
                          {this.state.yourname} Thank You For Your Interest
                        </h2>
                        <p>
                          <h2>Summary</h2>
                        </p>
                        <p>Base Plan : ₹ 6746.34</p>
                        <p>Cover Amount : ₹ 5 Lakhs</p>
                        <p>Policy Period : 5 Year</p>
                        <p>Total Amount to Pay Now : ₹ 630/month</p>
                      </div>
                      <a
                        href="javascript:;"
                        className="form-wizard-previous-btn float-left"
                      >
                        Previous
                      </a>
                      <a
                        href="javascript:;"
                        className="form-wizard-next-btn float-right"
                      >
                        Proceed to checkout
                      </a>
                    </div>
                  </fieldset>
                  <fieldset className="wizard-fieldset">
                    <h5>Payment Information</h5>
                    <div className="form-group">
                      Payment Type
                      <div className="wizard-form-radio">
                        <input name="radio-name" id="mastercard" type="radio" />
                        <label htmlFor="mastercard">Master Card</label>
                      </div>
                      <div className="wizard-form-radio">
                        <input name="radio-name" id="visacard" type="radio" />
                        <label htmlFor="visacard">Visa Card</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control wizard-required"
                        id="honame"
                      />
                      <label
                        htmlFor="honame"
                        className="wizard-form-text-label"
                      >
                        Holder Name*
                      </label>
                      <div className="wizard-form-error"></div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control wizard-required"
                            id="cardname"
                          />
                          <label
                            htmlFor="cardname"
                            className="wizard-form-text-label"
                          >
                            Card Number*
                          </label>
                          <div className="wizard-form-error"></div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control wizard-required"
                            id="cvc"
                          />
                          <label
                            htmlFor="cvc"
                            className="wizard-form-text-label"
                          >
                            CVC*
                          </label>
                          <div className="wizard-form-error"></div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">Expiry Date</div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="form-group">
                          <select className="form-control">
                            <option value="">Date</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                            <option value="">11</option>
                            <option value="">12</option>
                            <option value="">13</option>
                            <option value="">14</option>
                            <option value="">15</option>
                            <option value="">16</option>
                            <option value="">17</option>
                            <option value="">18</option>
                            <option value="">19</option>
                            <option value="">20</option>
                            <option value="">21</option>
                            <option value="">22</option>
                            <option value="">23</option>
                            <option value="">24</option>
                            <option value="">25</option>
                            <option value="">26</option>
                            <option value="">27</option>
                            <option value="">28</option>
                            <option value="">29</option>
                            <option value="">30</option>
                            <option value="">31</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="form-group">
                          <select className="form-control">
                            <option value="">Month</option>
                            <option value="">jan</option>
                            <option value="">Feb</option>
                            <option value="">March</option>
                            <option value="">April</option>
                            <option value="">May</option>
                            <option value="">June</option>
                            <option value="">Jully</option>
                            <option value="">August</option>
                            <option value="">Sept</option>
                            <option value="">Oct</option>
                            <option value="">Nov</option>
                            <option value="">Dec</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="form-group">
                          <select className="form-control">
                            <option value="">Years</option>
                            <option value="">2019</option>
                            <option value="">2020</option>
                            <option value="">2021</option>
                            <option value="">2022</option>
                            <option value="">2023</option>
                            <option value="">2024</option>
                            <option value="">2025</option>
                            <option value="">2026</option>
                            <option value="">2027</option>
                            <option value="">2028</option>
                            <option value="">2029</option>
                            <option value="">2030</option>
                            <option value="">2031</option>
                            <option value="">2032</option>
                            <option value="">2033</option>
                            <option value="">2034</option>
                            <option value="">2035</option>
                            <option value="">2036</option>
                            <option value="">2037</option>
                            <option value="">2038</option>
                            <option value="">2039</option>
                            <option value="">2040</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group clearfix">
                      <a
                        href="javascript:;"
                        className="form-wizard-previous-btn float-left"
                        onClick={this.cancel.bind(this)}
                      >
                        Cancel
                      </a>
                      <a
                        href="javascript:;"
                        className="form-wizard-submit float-right"
                        onClick={this.buy.bind(this)}
                      >
                        Pay
                      </a>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default BuyForm;
