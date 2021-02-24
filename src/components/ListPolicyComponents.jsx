import React, { Component } from "react";

class ListPolicyComponents extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   policies: [],
    // };

    this.calculate = this.calculate.bind(this);
  }

  // componentDidMount() {
  //   PolicyServices.getPolicies().then((res) => {
  //     this.setState({ policies: res.data });
  //   });
  // }

  calculate() {
    this.props.history.push("/premium-form");
  }
  render() {
    return (
      <div>
        <h1 className="text-center">Premium calculator</h1>
        <div className="row">
          <button className="btn btn-primary" onClick={this.calculate}>
            Calculate
          </button>
        </div>
        {/* <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>policyId</th>
                <th>policyName</th>
                <th>policyType</th>
                <th>policyAmount</th>
              </tr>
            </thead>

            <tbody>
              {this.state.policies.map((policy) => (
                <tr key={policy.id}>
                  <td>{policy.policyId}</td>
                  <td>{policy.policyName}</td>
                  <td>{policy.policyType}</td>
                  <td>{policy.policyAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    );
  }
}

export default ListPolicyComponents;
