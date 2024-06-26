import React from 'react'
import { Link } from "react-router-dom";
import { BsLinkedin,BsGithub,BsFacebook,BsInstagram } from 'react-icons/bs';
import newsletter from "../images/newsletter.png"




function Footer() {
  return (
    <div>
      <footer className="py-4">
        <div className="container xxl">
          <div className="row align-items-center">
            <div className="col-5 ">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign up for News Letter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno:401 Near Balaju,
                  <br />
                  PostCode:44611
                </address>
                <a
                  href="tel:+977 9861683637"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +977 9861683637
                </a>
                <a
                  href="mailto:                  kcsamir1961@gmail.com
"
                  className="mt-2 d-block mb-0 text-white"
                >
                  kcsamir1961@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-15">
                  <a className="text-white" to="#">
                    <BsLinkedin />
                  </a>
                  <a className="text-white" to="#">
                    <BsFacebook />
                  </a>
                  <a className="text-white" to="#">
                    <BsGithub />
                  </a>
                  <a className="text-white" to="#">
                    <BsInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()};Powered by Sam
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer