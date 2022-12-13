import React from 'react'
import { Link,  useNavigate } from 'react-router-dom'

function Navbar({count}) {

  let navigate= useNavigate()
  let logout = () => {
    window.localStorage.clear()
    navigate("/")
}

  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
    <div className="container">
      <span className="navbar-brand">
        <img
          src="https://seeklogo.com/images/A/apple-logo-52C416BDDD-seeklogo.com.png"
          alt="logo"
          style={{ width: "40px", height: "40px" }}
          className="d-inline-block align-text-bottom me-2"
          loading="lazy"
        />
        <span className="h1">Apple Store</span>
      </span>

      {/* <!-- Toggle button --> */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* <!-- Menu --> */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto me-2">

        <li className="nav-item d-flex justify-content-center">
                <Link to={"/dashboard"} className="nav-link active me-2 text-center mt-2">
                  Home
                </Link>
              </li>
              
          <Link
            type="button"
            className="btn btn-outline-light mt-2 me-2 "
            to= {"/cart"}>
            
            <i className="fa-solid fa-cart-shopping me-2"></i>
            Cart <span className='badge text-black rounded-circle bg-light fw-bolder'>{count}</span> 
       
          </Link>



          <button onClick={logout}
           
            type="button"
            className="btn btn-outline-light me-2 mt-2 "
          >
            Logout
          </button>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;