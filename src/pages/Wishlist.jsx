import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';

function Wishlist() {
  return (
    <div>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wistlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <div className="px-2 py-3">
                  <h5 className="title">Iphone 15 pro max</h5>
                  <h6 className="price">$ 500</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wistlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <div className="px-2 py-3">
                  <h5 className="title">Iphone 15 pro max</h5>
                  <h6 className="price">$ 500</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wistlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <div className="px-2 py-3">
                  <h5 className="title">Iphone 15 pro max</h5>
                  <h6 className="price">$ 500</h6>
                </div>
              </div>
            </div>
          </div>
        
      </Container>
    </div>
  );
}

export default Wishlist