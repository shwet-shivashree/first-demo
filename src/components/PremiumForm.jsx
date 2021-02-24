import React, { Component } from "react";
import Services from "./Services";

class PremiumForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      premiumForm: {
        yourname: " ",
        gender: " ",
        yourage: " ",
        bloodpressure: " ",
        overweight: " ",
        sugar: " ",
        hypertension: " ",
        dailyexercise: " ",
        smoking: " ",
        alcohol: " ",
        drugs: " ",
      },
      premiumAmount: "",
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
    this.calculate = this.calculate.bind(this);
  }

  calculate = (e) => {
    e.preventDefault();
    let premiumForm = {
      name: this.state.yourname,
      gender: this.state.gender,
      age: this.state.yourage,
      smoking: this.state.smoking,
      alcohol: this.state.alcohol,
      dailyExercise: this.state.dailyexercise,
      drugs: this.state.drugs,
      hyperTension: this.state.hypertension,
      bloodPressure: this.state.bloodpressure,
      bloodSugar: this.state.sugar,
      overWeight: this.state.overweight,
    };
    console.log("premium form =>" + JSON.stringify(premiumForm));
    Services.calculatePremium(premiumForm).then((res) => {
      console.log(res);
      this.setState({ premiumAmount: res.data });
    });

    // var result = new Promise((resolve, reject) => {
    //   resolve(Services.calculatePremium(form));
    // });
    //const res = result.then();
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

  cancel() {
    this.props.history.push("/List");
  }

  render() {
    return (
      <div>
        <section class="wizard-section">
          <div class="container" data-aos="fade-up">
            <div class="row no-gutters">
              <div class="col-lg-6 col-md-6">
                <div class="wizard-content-left d-flex justify-content-center align-items-center">
                  <h1>
                    <b>Your Health, Our Promise</b>
                    <h3>Please provide your details to get premium amount</h3>
                  </h1>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="form-wizard">
                  <form action="" method="post" role="form">
                    <div class="form-wizard-header">
                      <p>Fill all form field to go next step</p>
                      <ul class="list-unstyled form-wizard-steps clearfix">
                        <li class="active">
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
                      </ul>
                    </div>
                    <fieldset class="wizard-fieldset show">
                      <h5>Personal Information</h5>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control wizard-required"
                          id="fname"
                          value={this.state.yourname}
                          onChange={this.changeYourNameHandler}
                        />
                        <label for="fname" class="wizard-form-text-label">
                          Your Name*
                        </label>
                        <div class="wizard-form-error"></div>
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control wizard-required"
                          id="fname"
                          value={this.state.gender}
                          onChange={this.changeGenderHandler}
                        />
                        <label for="fname" class="wizard-form-text-label">
                          Gender*
                        </label>
                        <div class="wizard-form-error"></div>
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control wizard-required"
                          id="fname"
                          value={this.state.yourage}
                          onChange={this.changeAgeHandler}
                        />
                        <label for="fname" class="wizard-form-text-label">
                          Your Age*
                        </label>
                        <div class="wizard-form-error"></div>
                      </div>
                      <div class="form-group clearfix">
                        <a
                          href="javascript:;"
                          class="form-wizard-next-btn float-right"
                        >
                          Next
                        </a>
                      </div>
                    </fieldset>
                    <fieldset class="wizard-fieldset">
                      <h5>Pre-Health Conditions</h5>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control wizard-required"
                          id="email"
                          value={this.state.bloodpressure}
                          onChange={this.changeBloodNameHandler}
                        />
                        <label for="email" class="wizard-form-text-label">
                          Blood Pressure*
                        </label>
                        <div class="wizard-form-error"></div>
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control wizard-required"
                          id="username"
                          value={this.state.overweight}
                          onChange={this.changeOverHandler}
                        />
                        <label for="username" class="wizard-form-text-label">
                          Over Weight*
                        </label>
                        <div class="wizard-form-error"></div>
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control wizard-required"
                          id="pwd"
                          value={this.state.sugar}
                          onChange={this.changeSugarNameHandler}
                        />
                        <label for="pwd" class="wizard-form-text-label">
                          Sugar*
                        </label>
                        <div class="wizard-form-error"></div>
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control wizard-required"
                          id="cpwd"
                          value={this.state.hypertension}
                          onChange={this.changehyperHandler}
                        />
                        <label for="cpwd" class="wizard-form-text-label">
                          Hyper-Tension*
                        </label>
                        <div class="wizard-form-error"></div>
                      </div>
                      <div class="form-group clearfix">
                        <a
                          href="javascript:;"
                          class="form-wizard-previous-btn float-left"
                        >
                          Previous
                        </a>
                        <a
                          href="javascript:;"
                          class="form-wizard-next-btn float-right"
                        >
                          Next
                        </a>
                      </div>
                    </fieldset>
                    <fieldset class="wizard-fieldset">
                      <h5>Your Habits</h5>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control wizard-required"
                          id="bname"
                          value={this.state.dailyexercise}
                          onChange={this.changedailyHandler}
                        />
                        <label for="bname" class="wizard-form-text-label">
                          Daily Exercise*
                        </label>
                        <div class="wizard-form-error"></div>
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control wizard-required"
                          id="brname"
                          value={this.state.smoking}
                          onChange={this.changeSmokingHandler}
                        />
                        <label for="brname" class="wizard-form-text-label">
                          Smoking*
                        </label>
                        <div class="wizard-form-error"></div>
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control wizard-required"
                          id="acname"
                          value={this.state.alcohol}
                          onChange={this.changeAlcoholHandler}
                        />
                        <label for="acname" class="wizard-form-text-label">
                          Alcohol*
                        </label>
                        <div class="wizard-form-error"></div>
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control wizard-required"
                          id="acon"
                          value={this.state.drugs}
                          onChange={this.changeDrugsHandler}
                        />
                        <label for="acon" class="wizard-form-text-label">
                          Drugs*
                        </label>
                        <div class="wizard-form-error"></div>
                      </div>
                      <div class="form-group clearfix">
                        <a
                          href="javascript:;"
                          class="form-wizard-previous-btn float-left"
                        >
                          Previous
                        </a>
                        <a
                          href="javascript:;"
                          class="form-wizard-next-btn float-right"
                          onClick={this.calculate}
                        >
                          Calculate
                        </a>
                      </div>
                    </fieldset>
                    <fieldset class="wizard-fieldset">
                      <div></div>
                      <div class="form-group clearfix">
                        <div>
                          <p>
                            <h1>{this.state.premiumForm.yourname} </h1> Thank
                            You For Your Interest
                          </p>
                          <p>
                            <h2>Summary</h2>
                          </p>
                          <p>Base Plan : ₹ {this.state.premiumAmount}</p>
                          <p>Cover Amount : ₹ 3 Lakhs</p>
                          <p>Policy Period : 1 Year</p>
                        </div>
                        <a
                          href="javascript:;"
                          class="form-wizard-previous-btn float-left"
                        >
                          Previous
                        </a>
                        <a
                          href="javascript:;"
                          class="form-wizard-next-btn float-right"
                          onClick={this.cancel.bind(this)}
                        >
                          Proceed to Proposal
                        </a>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default PremiumForm;
