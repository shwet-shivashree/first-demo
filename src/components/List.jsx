import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
  }

  buyNow() {
    this.props.history.push("/login");
  }

  render() {
    return (
      <div className="mt-5">
        <br />
        <div id="design3" className="mt-5">
          <h1>
            Health Insurance with Coronavirus Coverage
            <br /> Policy Period 1 year and ₹ 3 lac Health Cover Starts @ ₹
            630/month
          </h1>
          <h4>
            <ul align="left">
              <li>Annual Health Checkup</li>
              <li>In Patient Hospitalization</li>
              <li>Auto Recharge of Policy </li>
              <li>Sum Insured Avail Discount upto 20%*</li>
            </ul>
          </h4>

          <p align="left">
            <h4>What does the policy cover?</h4>Our Customized health plans
            cover hospitalization expenses for coronavirus subject to terms and
            conditions of the policy. Everything from pre-hospitalization
            expenses to post-hospitalization expenses gets covered within our
            health plans. We also cover quarantine related medical expenses on
            the advice of a registered medical practitioner and at a registered
            facility. Health policies with Coronavirus insurance cover are
            beneficial as it covers medical expenses related to covid 19 and
            other medical emergencies: Some of the significant features of the
            policy include: -
            <br />
            <ul>
              <li>
                In-patient Hospitalisation: The corona insurance policy will
                cover expenses up to the sum insured for hospitalization
                exceeding 24 hours.
              </li>
              <li>
                Pre-Hospitalization: Under this feature, the medical expenses
                incurred by the policyholder, from 30 days prior to getting
                hospitalized, will be covered in the policy.
              </li>
              <li>
                Intensive Care Unit (ICU) /Intensive Cardiac Care Unit (ICCU)
                expenses up to 5% of sum insured subject to maximum of Rs.
                10,000/- per day.
              </li>
              <li>
                Post-Hospitalization: The plan will cover medical expenses
                incurred by the policyholder, for a period of 60 days after
                discharge from the hospital.
              </li>
              <li>
                Other Features: Under this plan you will get additional features
                such as cashless treatment, annual health checkup, lifelong
                renewability, tax benefit and many more
              </li>
              <li>Doctor/Surgeons fees is covered</li>
            </ul>
          </p>
        </div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={this.buyNow.bind(this)}
        >
          Your link to good health
          <br />
          Buy Now
        </button>
        <div id="design3" className="mt-5">
          <h1>
            Arogya Sanjeevani Insurance Policy
            <br />
            Policy Period 1 year and ₹ 4 lac Health Cover Starts @ ₹ 720/month
          </h1>

          <p align="left">
            <h4>What does the policy cover?</h4>A simple and affordable health
            plan designed to meet your insurance needs In the unprecedented
            times that we live in, covering oneself with a health insurance
            cover has become a necessity. Here's an easy to buy plan with that
            covers all your inpatient hospitalisation needs with a wide range of
            sum-insured ₹5 lacs.
            <br />
            <ul>
              Inpatient Care: Covers medical expenses like room rent, ICU
              charges, medical practitioners fee, OT charges, nursing charges
              etc. incurred during hospitalization due to an illness or accident
              for period more than 24 hrs.
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
                medicines and drugs, diagnostics, diagnostic imaging modalities
                and such similar other expenses.
              </li>
              <li>Doctor/Surgeons fees is covered</li>
            </ul>
          </p>
        </div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={this.buyNow.bind(this)}
        >
          Your link to good health
          <br />
          Buy Now
        </button>
      </div>
    );
  }
}
export default List;
