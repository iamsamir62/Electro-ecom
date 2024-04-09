import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { services } from "../utils/data";


function Home() {
  return (
    <div>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>Special sell</h4>
                <h5>Iphone15</h5>
                <p>Daily discount upto $50.</p>
                <Link className="button">Buy Now</Link>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <div className="d-flex gap-10  flex-wrap justify-content-between align-items-center">
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Special sell</h4>
                  <h5>Iphone15</h5>
                  <p>Daily discount upto $50.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Special sell</h4>
                  <h5>Iphone15</h5>
                  <p>Daily discount upto $50.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Special sell</h4>
                  <h5>Iphone15</h5>
                  <p>Daily discount upto $50.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Special sell</h4>
                  <h5>Iphone15</h5>
                  <p>Daily discount upto $50.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Meta title={"Home"} />
      <BreadCrumb title="Home" />
      <Container class1>
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      {/* Example, replace `service.title` with actual property name */}
                      <p className="mb-0">{i.tagline}</p>{" "}
                      {/* Same here for `service.description` */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Headphone</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Headphone</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img
                src="images/watchblack.jpg"
                className="img-fluid"
                alt="famous products"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series</h6>
                <p>From $399 or $16.62//mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img
                src="images/watchblack.jpg"
                className="img-fluid"
                alt="famous products"
              />
              <div className="famous-content position-absolute">
                <h5>Studio Display</h5>
                <h6>Smart Watch Series</h6>
                <p>From $399 or $16.62//mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img
                src="images/watchblack.jpg"
                className="img-fluid"
                alt="famous products"
              />
              <div className="famous-content position-absolute">
                <h5>Studio Display</h5>
                <h6>Smart Watch Series</h6>
                <p>From $399 or $16.62//mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img
                src="images/watchblack.jpg"
                className="img-fluid"
                alt="famous products"
              />
              <div className="famous-content position-absolute">
                <h5>Studio Display</h5>
                <h6>Smart Watch Series</h6>
                <p>From $399 or $16.62//mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        
      </Container>
      <Container class1="marque-wrapper py-5">
        
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper ">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        
      </Container>
    </div>
  );
}

export default Home;
