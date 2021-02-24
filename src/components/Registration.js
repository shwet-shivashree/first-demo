import React, { Component } from "react";
import axios from "axios";
class Registration extends Component {
  validate = () => {
    let flag = true;

    if (this.state.firstName === "") {
      flag = false;
      this.setState({ firstNameError: "First Name is Required" });
    } else {
      this.setState({ firstNameError: "" });
    }

    if (this.state.lastName === "") {
      flag = false;
      this.setState({ lastNameError: "Last Name is Required" });
    } else {
      this.setState({ lastNameError: "" });
    }

    if (this.state.userName === "") {
      flag = false;
      this.setState({ userNameError: "User Name is Required" });
    } else {
      this.setState({ userNameError: "" });
    }

    if (this.state.password === "") {
      flag = false;
      this.setState({ passwordError: "Password is Required" });
    } else {
      this.setState({ passwordError: "" });
    }

    if (this.state.email === "") {
      flag = false;
      this.setState({ emailError: "Email Is Required" });
    } else {
      this.setState({ emailError: "" });
    }

    if (this.state.mob === "") {
      flag = false;
      this.setState({ mobError: "Mobile No Is Required" });
    } else {
      this.setState({ mobError: "" });
    }

    if (this.state.address === "") {
      flag = false;
      this.setState({ addressError: "City Is Required" });
    } else {
      this.setState({ addressError: "" });
    }

    return flag;
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = this.validate();
    if (!isValid) {
      return false;
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Register Here</h3>
              <div className="card-body">
                <form onSubmit={this.saveUser}>
                  {/* <h3> Sign Up</h3> */}

                  <div className="form-group mr2">
                    <div className="alert-danger">
                      {this.state.firstNameError}
                    </div>
                    <label>First Name : </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Enter First Name"
                      value={this.state.firstName}
                      onChange={(event) =>
                        this.setState({ firstName: event.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <div className="alert-danger">
                      {this.state.lastNameError}
                    </div>
                    <label>Last Name : </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Enter Last Name"
                      value={this.state.lastName}
                      onChange={(event) =>
                        this.setState({ lastName: event.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <div className="alert-danger">
                      {this.state.userNameError}
                    </div>
                    <label>User Name : </label>
                    <input
                      type="text"
                      className="form-control"
                      id="userName"
                      placeholder="Enter User Name"
                      value={this.state.userName}
                      onChange={(event) =>
                        this.setState({ userName: event.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <div className="alert-danger">
                      {this.state.passwordError}
                    </div>
                    <label>Password : </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your Password"
                      value={this.state.password}
                      onChange={(event) =>
                        this.setState({ password: event.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <div className="alert-danger">{this.state.emailError}</div>
                    <label>Email Id : </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your Email Id"
                      value={this.state.email}
                      onChange={(event) =>
                        this.setState({ email: event.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <div className="alert-danger">{this.state.mobError}</div>
                    <label>Mobile No : </label>
                    <input
                      type="text"
                      className="form-control"
                      id="mob"
                      placeholder="Enter your mobile No"
                      value={this.state.mob}
                      onChange={(event) =>
                        this.setState({ mob: event.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <div className="alert-danger">
                      {this.state.addressError}
                    </div>
                    <label>City : </label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="Enter your city"
                      value={this.state.address}
                      onChange={(event) =>
                        this.setState({ address: event.target.value })
                      }
                    />
                  </div>
                  {/* <button className="btn btn-success" onClick={this.saveUser}>Sign Up</button> */}
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Registration;
