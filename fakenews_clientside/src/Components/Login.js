import React, { useState }  from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Login() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = () => {
    let param = {
      username: email,
      password: password,
    };

    fetch("http://13.210.84.16/login", {
      method: "POST",
      body: JSON.stringify(param),
    }).then((response) => {
      console.log(response);
      response.json().then((data) => {
        if(data.status==401){
            alert('User Not Found')
        }else{
            localStorage.setItem('isLoggedIn',true)
            window.location.href = '/'
        }
      });
    });
  };
  
  return (
    <>
      <Header />
      <section className="hero-section d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12 mx-auto">
            <form
                className="custom-form login-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                <h2 className="hero-title text-center mb-4 pb-2">Login Form</h2>

                <div className="form-floating mb-4 p-0">
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setemail(e.target.value)}
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    className="form-control"
                    placeholder="Email address"
                    required=""
                  />

                  <label for="email">Email address</label>
                </div>

                <div className="form-floating p-0">
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => setpassword(e.target.value)}
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    required=""
                  />

                  <label for="password">Password</label>
                </div>

                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-5 col-12">
                  <button 
                      className="btn custom-btn custom-border-btn"
                      style={{backgroundColor:"#000000"}}
                    >
                      Login
                    </button> 
                  </div>

                  <div className="col-lg-5 col-12">
                    <Link
                      to="/register"
                      className="btn custom-btn custom-border-btn"
                      style={{backgroundColor:"#000000"}}
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
