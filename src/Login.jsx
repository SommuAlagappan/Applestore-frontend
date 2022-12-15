import React from "react";
import {  useFormik } from "formik";
import {  Link, useNavigate } from "react-router-dom";
import './App.css';
import { env } from "./Config";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


function Login() {

    let navigate = useNavigate()
 
  let formik = useFormik({
    initialValues: {
      emailAddress: "",
      password: "",
    },

    onSubmit: async (values) => {
      // console.log(values);

      try {
        let loginData = await axios.post(`${env.api}/login`, values)
        // console.log(values)

        if(loginData.status === 200) {

            window.localStorage.setItem("app-token", loginData.data.token)
            toast.success("Logged in successfully")
            navigate("/dashboard")
            
          }
          
        }
       catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
        
      }
    },
  });

  return (
    <>
 
 <nav className="navbar navbar-expand-lg navbar-dark bg-black">
    <div className="container">
      <span className="navbar-brand">
        <img
          src="assets/Applelogo.png"
          alt="logo"
          style={{ width: "40px", height: "40px" }}
          className="d-inline-block align-text-bottom me-2"
          loading="lazy"
        />
        <span className="h1">Apple Store</span>
      </span>
    </div>
  </nav>
     
      <h3 className="display-3 fw-normal text-center mt-3 text-white" id="login">
        Login
      </h3>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mx-auto">
            <div className="card formtrans">
              <div className="card-body">

                <form onSubmit={formik.handleSubmit} >

                  {/* <!-- Username --> */}
                  <div className="my-2">
                    <label for="username" className="form-label text-white lead">
                      Username<span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="Username">
                        <i className="fa-solid fa-user"></i>
                      </span>
                      <input
                        id="username"
                        type="email"
                        className="form-control formtrans"
                        // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        placeholder="Enter the email"

                        value={formik.values.emailAddress}
                        onChange={formik.handleChange}
                        name="emailAddress"

                        aria-label="Username"
                        aria-describedby="Username"
                        required
                      />
                    </div>
                  </div>

                  {/* <!-- Password --> */}
                  <div className="my-2">
                    <label for="Password1" className="form-label text-white lead">
                      Password<span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="password">
                        <i className="fa-solid fa-key"></i>
                      </span>
                      <input
                        type="password"
                        id="Password1"
                        className="form-control formtrans"
                        placeholder="Enter your password"
                        aria-label="password"

                        value={formik.values.password}
                        onChange={formik.handleChange}
                        name="password"

                        aria-describedby="password"
                        // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        // title="Must contain at least one number and one uppercase and lowercase letter and at least 8 or more characters"
                        required
                      />
                    </div>
                  </div>

                  {/* <!-- Submit button --> */}
                  <div className="d-grid gap-2 pt-2">
                    <button type="submit" className="btn btn-light">
                      <i className="fa-solid fa-lock me-1"></i>
                      <span className="lead fw-normal">Login</span>
                    </button>
                  </div>
                </form>
                <div>
          <p class="text-center text-white lead fs-5 mt-3">Don't have an account? <Link to={"/"} class="text-primary fw-normal tdn">Register now</Link></p>
        </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mt-5 pt-5">
          <div className="design text-white">
    <h4>Login Credentials:</h4>
    <span className="lead fw-normal">Username : <span className="lead fst-italic">user@gmail.com</span> </span><br/>
    <span className="lead fw-normal">Password : <span className="lead fst-italic">Welcome@123</span></span><br/>
    <span className="lead fst-italic">New users can also register and log in </span>
  </div>
          </div>
        </div>
      </div>
 
    </>
  );
}

export default Login;
