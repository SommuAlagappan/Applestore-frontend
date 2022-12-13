import React from 'react'

function Footer() {
  return (
    <div className="mt-5 pb-4 foot">
    <div className="row">
      <div className="col-lg-4 mt-md-5 mt-3">
        <div className="text-white text-center">
          Copyright <i className="fa-regular fa-copyright"></i> 2022 Apple
          Store. All rights reserved.
        </div>
      </div>

      <div className="col-lg-4 mt-md-3 mt-2 ">
        <div className="text-white text-center">
          <div className="fs-4 text-white fw-bold">Follow us on</div>

          <a
            href="https://www.facebook.com/"
            className="inheri"
            target="_blank"
          >
            <i class="fa-brands fa-facebook fs-1"></i>
          </a>

          <a href="https://twitter.com/" className="inheri" target="_blank">
            <i className="fa-brands fa-twitter fs-1 ms-3"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            className="inheri"
            target="_blank"
          >
            <i class="fa-brands fa-instagram fs-1 ms-3"></i>
          </a>
          <a
            href="https://www.youtube.com/"
            className="inheri"
            target="_blank"
          >
            <i className="fa-brands fa-youtube fs-1 ms-3"></i>
          </a>
        </div>
      </div>

      <div className="col-lg-4 text-white mt-md-5 mt-2 text-center">
        Terms of Service | Privacy Policy
      </div>
    </div>
  </div>
 
  )
}

export default Footer