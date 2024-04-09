import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

function Signup() {
  return (
    <div>
      <Meta title={"Signup"} />
      <BreadCrumb title="Signup" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Signup</h3>
              <form className="d-flex flex-column gap-15">
                <CustomInput
                  type="text"
                  name="name"
                  placeholder="Name"
                  classname="form-control"
                />
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  classname="form-control"
                />
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Phone Number"
                  classname="form-control"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  classname="form-control"
                />
                <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                  <button className="button border-0" type="submit">
                    Signup
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
