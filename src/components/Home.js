import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      newpassword: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, newpassword } = this.state;
    console.log(fname, lname, email, newpassword);
    fetch("http://localhost:3000/login-user",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-type":"application.json",
        Accept:"application/json",
        "Access-control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        fname, 
        lname, 
        email, 
        newpassword
      }),
    })
    .then((res) => res.json())
    .then((data)=> {
      console.log(data, "userRegister");
      if(data.status === "ok") {
        alert("login successful");
        window.localStorage.setItem("token", data.data);
        window.location.href="./About";
      }
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h2 className="text-center text-dark mt-5">Kindly Log In!!</h2>
              <div className="text-center mb-5 text-dark">To Access The News</div>
              <div className="card my-5">
                <form className="card-body cardbody-color p-lg-5" onSubmit={this.handleSubmit}>
                  <div className="text-center">
                    <img
                      src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                      className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                      alt="profile"
                      width="200px"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="fname"
                      aria-describedby="namehelp"
                      placeholder="First Name"
                      onChange={(e) => this.setState({ fname: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="lname"
                      aria-describedby="namehelp"
                      placeholder="Last Name"
                      onChange={(e) => this.setState({ lname: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Email ID"
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="newpassword"
                      aria-describedby="newpasswordhelp"
                      placeholder="Password"
                      onChange={(e) => this.setState({ newpassword: e.target.value })}
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                      Login
                    </button>
                  </div>
                  <div id="emailHelp" className="form-text text-center mb-5 text-dark">
                    Not Registered? <a href="/Register" className="text-dark fw-bold">Create an Account</a>
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
