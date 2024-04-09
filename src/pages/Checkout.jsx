import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import watch from '../images/watch.jpg'
import Container from "../components/Container";
function Checkout() {
  return (
    <div>
      <Meta title={"Checkout"} />
      <BreadCrumb title="Checkout" />
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Sam.</h3>
                <nav
                  className=""
                  style={{ "--bs-breadcrumb-divider": "'>'" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/cart" className="text-dark">
                        Cart
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Information
                    </li>
                    <li className="breadcrumb-item active">Shipping</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Contact Information</h4>
                <p className="user-details total">samir kc (kcsamir1961@gmail.com)</p>
                <h4 className="mb-3"> Shipping Address</h4>
                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                      name=""
                      id=""
                    />
                  </div>

                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Zip-code"
                      className="form-control"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <IoIosArrowRoundBack className="me-1" size={20} />
                        Return to cart
                      </Link>
                      <Link to="/cart" className="button">
                        Continue to Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-10 mb-2 align-items-center">
                  <div className="w-75 d-flex fap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "2px", right: "2px" }}
                        className="badge bg-danger text-white rounded-circle p-2 position-absolute"
                      >
                        1
                      </span>
                      <img className="img-fluid" src={watch} alt="" />
                    </div>
                    <div>
                      <h5 className="total-price">jhgus</h5>
                      <p className="total-price">jhytug</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="total">$187</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">Subtotal</p>
                  <p className="total-price">$98974</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">$98974</p>
                </div>
              </div>
              <div className="d-flex justify-content-between border-bottom py-4 align-items-center">
                <h4 className="total">Total</h4>
                <h5 className="total-price"> $98974</h5>
              </div>
            </div>
          </div>
        
      </Container>
    </div>
  );
}

export default Checkout;
