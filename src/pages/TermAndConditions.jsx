import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";

function TermAndConditions() {
  return (
    <div>
      <Meta title={"TermAndConditions"} />
      <BreadCrumb title="TermAndConditions" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
      </Container>
    </div>
  );
}

export default TermAndConditions;
