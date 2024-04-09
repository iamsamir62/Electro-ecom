import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import Color from "../components/Color";
import Container from "../components/Container";


function OurStore() {
  const [grid,setGrid]=useState(4);
  
  return (
    <div>
      <Meta title={"Our store"} />
      <BreadCrumb title="Our Store" />
      <Container className="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Laptop</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Phone</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availability</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="stock"
                    id="inStock"
                  />
                  <label className="form-check-label" htmlFor="inStock">
                    In Stock (1)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="stock"
                    id="outStock"
                  />
                  <label className="form-check-label" htmlFor="outStock">
                    Out Stock (0)
                  </label>
                </div>
              </div>
              <h5 className="sub-title">Price</h5>
              <div className="d-flex gap-10 align-items-center">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput"
                    placeholder="From"
                  />
                  <label htmlFor="floatingInput">From</label>
                </div>
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="To"
                  />
                  <label htmlFor="floatingInput">To</label>
                </div>
              </div>
              <h5 className="sub-title">Colors</h5>
              <div>
                <div className="d-flex flex-wrap">
                  <Color />
                </div>
              </div>
              <h5 className="sub-title">Size</h5>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="stock"
                    id="color-1"
                  />
                  <label className="form-check-label" htmlFor="color-1">
                    S(2)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="stock"
                    id="color-2"
                  />
                  <label className="form-check-label" htmlFor="color-2">
                    m(2)
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-secondary rounded-3 py-2 px-3">
                    Camera
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10pack multi coloerd for students
                    </h5>
                    <ReactStars
                      count={5}
                      value={3} // Pass a number instead of a string
                      size={24}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$500</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10pack multi coloerd for students
                    </h5>
                    <ReactStars
                      count={5}
                      value={3} // Pass a number instead of a string
                      size={24}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$500</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select name="" className="form-control form-select" id="">
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best Selling</option>
                    <option value="title-ascending">Alphabetically, A-z</option>
                    <option value="title-descending">
                      Alphabetically, A-z
                    </option>
                    <option value="price-ascending">Price low to high</option>
                    <option value="price-descending">Price high to low</option>
                    <option value="created-ascending">Date,old to new</option>
                    <option value="created-descending">Date,new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center grid gap-10">
                  <p className="totalproducts mb-0">21 products</p>
                  <div className="d-flex gap-10 align-items-center">
                    <img
                      onClick={() => setGrid(3)}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid 4"
                    />
                    <img
                      onClick={() => setGrid(4)}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid 3"
                    />
                    <img
                      onClick={() => setGrid(6)}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid 2"
                    />
                    <img
                      onClick={() => setGrid(12)}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid 1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OurStore;
