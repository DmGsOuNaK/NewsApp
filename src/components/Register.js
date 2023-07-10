import React, { Component } from 'react';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      newpassword: "",
      confirmpassword: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, newpassword, confirmpassword } = this.state;
    console.log(fname, lname, email, newpassword, confirmpassword);
    fetch("http://localhost:3000/register", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        newpassword,
        confirmpassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  }
  

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h2 className="text-center text-dark mt-5">Please Fill Your Details Here!!</h2>
              <div className="card my-5">
                <form className="card-body cardbody-color p-lg-5" onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="fname"
                      placeholder="First Name"
                      onChange={(e) => this.setState({ fname: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="lname"
                      placeholder="Last Name"
                      onChange={(e) => this.setState({ lname: e.target.value })}
                    />
                  </div>
                  <div className='mb-3'>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Email Id"
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="newpassword"
                      placeholder="Create a Password"
                      onChange={(e) => this.setState({ newpassword: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm the Password"
                      onChange={(e) => this.setState({ confirmpassword: e.target.value })}
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-color px-5 mb-5 w-100">Sign Up</button>
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
