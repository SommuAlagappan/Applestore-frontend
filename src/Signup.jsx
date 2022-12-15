
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { env } from "./Config";

function Signup() {
let navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      fullName:"",
      mobileNumber:"",
      emailAddress: "",
      password: "",
    },
    // validate: (values) => {
    //   let errors = {}

      
    //   if(values.fullName.length < 3){
    //       errors.fullName = "Please enter the fullname"
    //   }
    
    //   if(values.emailAddress.length <5 ){
    //     errors.emailAddress = "Please provide a valid email address"
    //   }

    //   if(values.mobileNumber.length <= 9){
    //     errors.mobileNumber = "Please provide a valid mobile number"
    //   }

    //   if(values.password.length < 8){
    //     errors.password = "Password must contain atleast 8 characters"
    //   }

    //   return errors
    // },

    onSubmit: async (values) => {
      // console.log(values);

      try {
        let registerData = await axios.post(`${env.api}/register`, values)
        // console.log(registerData)

        if(registerData.status === 200) {
          toast.success("User registered successfully")
          navigate("/login");
        }
         
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
        
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


       <div className="container ">
       <div className="row ">

<div className="col-md-6 ">
  <img src="assets/Applesignup1.png" className="mt-md-4 img-fluid ms-md-5" alt="applesignuplogo" style={{height:"520px", width:"370px"}}  />
  
  <div className="design text-white">
    <h4>Login Credentials:</h4>
    <span className="lead fw-normal">Username : <span className="lead fst-italic">user@gmail.com</span> </span><br/>
    <span className="lead fw-normal">Password : <span className="lead fst-italic">Welcome@123</span></span><br/>
    <span className="lead fst-italic">New users can also register and log in </span>
  </div>
  </div>

          <div className="col-md-6">
            <div className="col-md-8 mx-auto">
            <div className="card formtrans">
            <h3 className="display-3 fw-normal text-center mt-4 text-white" id="login">
        Register Form
      </h3>
              <div className="card-body">

                <form onSubmit={formik.handleSubmit}>
                  {/* <!-- Full name --> */}
                  <div className="mb-3">
                    <label for="name" className="form-label text-white lead ">
                      Full name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      value={formik.values.fullName}
                                  onChange={formik.handleChange}
                                  name="fullName"
                      className="form-control formtrans"
                      id="name"
                      aria-describedby="emailHelp"
                      placeholder="Enter your full name"
                      required
                    />
                    <span className="text-warning">{formik.errors.fullName}</span>
                  </div>
                  

                  {/* <!-- Mobile number --> */}
                  <div className="mb-3">
                    <label for="number" className="form-label text-white lead">
                      Mobile number<span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control formtrans"
                      id="number"
                      value={formik.values.mobileNumber}
                                  onChange={formik.handleChange}
                                  name="mobileNumber"

                      aria-describedby="emailHelp"
                      placeholder="Enter your mobile number"
                      required
                    />
                 
                  <span className="text-warning">{formik.errors.mobileNumber}</span>
                  </div>

                  {/* <!-- Email --> */}
                  <div className="mb-3">
                    <label for="email" className="form-label text-white lead">
                      Email address<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      value={formik.values.emailAddress}
                          onChange={formik.handleChange}
                          name="emailAddress"

                      className="form-control formtrans"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter your email"
                      required
                    />
               
                  <span className="text-warning">{formik.errors.emailAddress}</span>
                  </div>
                  {/* <!-- Password --> */}
                  <div className="my-3">
                    <label for="exampleInputPassword1" className="form-label text-white lead">
                      Password<span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      name="password"
                      className="form-control formtrans"
                      id="exampleInputPassword1"
                      placeholder="Enter your password"
                      required
                    />
           
                  <span className="text-warning">{formik.errors.password}</span>
                  </div>

                  {/* <!-- Terms and Condition checkbox --> */}
                  <div className="mb-3 form-check text-white lead">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                      required
                    />
                    <label className="form-check-label fs-6" for="exampleCheck1">
                      I agree to the terms and conditions
                    </label>
                  </div>

                  {/* <!-- Submit button --> */}
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-light">
                    <i class="fa-solid fa-arrow-up-right-from-square me-2"></i>
                        <span className="fw-normal lead">Submit</span>
            
                    </button>
                  </div>
                </form>
              </div>
              <p class="text-center fs-5 text-white lead ">Already a member, Click here for <Link to={"/login"} class="text-primary fw-normal tdn">Login</Link></p>

            </div>
          </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
