import React from "react";
import { NavLink, Link } from "react-router-dom";
import {BsSearch} from 'react-icons/bs';
function Header() {
  return (
    <div>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0 mt-2">Free Shippng Over valley</p>
            </div>

            <div className="col-6">
              <p className="text-end">
                Phone No:{" "}
                <a className="text-white" href="tel:+977 9861683637">
                  +977 9861683637
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h1>
                <Link className="text-white" to="/">
                  Sam.
                </Link>
              </h1>
            </div>
            <div className="col-5">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-tems-center justify-content-between">
                <div>
                  <Link to='/compare-product' className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br />
                      Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br />
                      wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/user.svg" alt="user" />
                    <p className="mb-0">
                      Log in <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/cart' className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center gap-130">
              <div>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-25 d-flex align-items-center"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown" // Change data-toggle to data-bs-toggle
                    aria-expanded="false"
                  >
                    <img src="images/menu.svg" alt="" />
                    <span>Shop Categories</span>
                  </button>
                  <ul
                    className="dropdown-menu"
                    style={{ margin: "0 105px" }}
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menu-links">
                <div className="d-flex align-items-center gap-15">
                  <NavLink className="text-white" to="/">
                    Home
                  </NavLink>
                  <NavLink className="text-white" to="/store">
                    Our Store
                  </NavLink>

                  <NavLink className="text-white" to="/contact">
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
