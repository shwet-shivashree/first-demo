import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
function Res() {
  useEffect(() => {
    document.title = "Add User || Health Insurance System";
  }, []);

  const [user, setUser] = useState({});

  //form handler function
  const handleForm = (e) => {
    console.log(user);
    postDatatoServer(user);
    e.preventDefault();
  };

  //create function to post data on server
  const postDatatoServer = (data) => {
    axios
      .post(`http://localhost:8582/api/addUser`, data)
      .then(
        (response) => {
          console.log(response);
          console.log("sucess");
          alert(
            `Thank You ${user.firstName} for Register with Star Policy Bajar`
          );
          // toast.success(
          //   "Thank You ${user.firstName} for Register with Star Policy Bajar"
          // );
        },
        (error) => {
          console.log(error);
          console.log("error");
        }
      )
      .then(this.props.history.push("/login"));
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3 mt-5">
            <h3 className="text-center">Register Here</h3>
            <div className="card-body">
              <form onSubmit={handleForm}>
                {/* <h3> Sign Up</h3> */}

                <div className="form-group mr2" align="left">
                  <label>First Name : </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter First Name"
                    onChange={(e) => {
                      setUser({ ...user, firstName: e.target.value });
                    }}
                  />
                </div>

                <div className="form-group" align="left">
                  <label>Last Name : </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter Last Name"
                    onChange={(e) => {
                      setUser({ ...user, lastName: e.target.value });
                    }}
                  />
                </div>

                <div className="form-group" align="left">
                  <label>User Name : </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter User Name"
                    onChange={(e) => {
                      setUser({ ...user, username: e.target.value });
                    }}
                  />
                </div>

                <div className="form-group" align="left">
                  <label>Password : </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your Password"
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                    }}
                  />
                </div>

                <div className="form-group" align="left">
                  <label>Email Id : </label>
                  <input
                    type="mail"
                    className="form-control"
                    id="email"
                    placeholder="Enter your Email Id"
                    onChange={(e) => {
                      setUser({ ...user, mail: e.target.value });
                    }}
                  />
                </div>

                <div className="form-group" align="left">
                  <label>Mobile No : </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mob"
                    placeholder="Enter your mobile No"
                    onChange={(e) => {
                      setUser({ ...user, mob: e.target.value });
                    }}
                  />
                </div>

                <div className="form-group" align="left">
                  <label>City : </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter your city"
                    onChange={(e) => {
                      setUser({ ...user, address: e.target.value });
                    }}
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

export default Res;
