import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      err: "",
    };
  }

  login(e) {
    e.preventDefault();
    var username = e.target.elements.username.value;
    var password = e.target.elements.password.value;
    if (username == "Diksha_23" && password == "diksha") {
      this.props.history.push("/Checkout");
    } else {
      this.setState({
        err: "Please enter Correct username and password",
      });
    }
  }
  render() {
    let format = {
      color: "red",
      align: "center",
    };
    return (
      // <div>
      //     <h1 align="center">Login</h1><br/>
      //     <span style={format}> {this.state.err != '' ? this.state.err: ''}</span>
      //     <form method="post" onSubmit={this.login.bind(this)} align="center"class="form-group">
      //     <div class="form-group">
      //     <label for="usr">Name:</label><input type="text" name="username"/>
      //         <br /><br/>
      //         </div>
      //         <div class="form-group">
      //         <label for="pwd">Password:</label><input type="password" name="password"/>
      //         <br /><br/>
      //         </div>
      //         <input type="submit" class="btn btn-info" value="login"/>
      //     </form>
      // </div>
      <div id="login">
        <h1 class="text-center text-info pt-5 mt-5">
          Your Health Our Priority
        </h1>
        <div class="container">
          <div
            id="login-row"
            class="row justify-content-center align-items-center"
          >
            <div id="login-column" class="col-md-6">
              <div id="login-box" class="col-md-12">
                <form
                  id="login-form"
                  class="form"
                  action=""
                  onSubmit={this.login.bind(this)}
                  method="post"
                >
                  <h3 class="text-center text-info">Login</h3>
                  <span style={format}>
                    {" "}
                    {this.state.err != "" ? this.state.err : ""}
                  </span>
                  <div class="form-group" align="left">
                    <label for="username" class="text-info">
                      Username:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      id="username"
                      class="form-control"
                      align="left"
                    />
                  </div>
                  <div class="form-group" align="left">
                    <label for="password" class="text-info">
                      Password:
                    </label>
                    <br />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="form-control"
                      align="left"
                    />
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-outline-info">
                      Submit
                    </button>
                    <div>
                      <a href="/res">Register Here</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
