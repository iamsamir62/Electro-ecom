import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../components/Container";
function Cart() {
  return (
    <div>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper homw-wrapper-2 py-5">
        
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img src={watch} className="img-fluid" alt="" />
                  </div>
                  <div className="w-75">
                    <p>TTTTT</p>
                    <p>Size:s</p>
                    <p>Color :Black</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$678</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      type="number"
                      className="form-control"
                      name=""
                      id=""
                      min={1}
                      max={20}
                    />
                  </div>
                  <div>
                    <MdDeleteForever size={25} />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$678</h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/" className="button">
                  Continue To Shopping
                </Link>

                <div className="d-flex align-items-end flex-column">
                  <h4>SubTotal : $1000</h4>
                  <p>Taxes and Shipping calculated at checkout </p>
                  <Link to="/checkout" className="button">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </div>
  );
}

export default Cart;
