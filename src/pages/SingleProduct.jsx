import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactImageZoom from "react-image-zoom";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import watch from '../assets/watch.jpg'
import ReactImageMagnify from "react-image-magnify";
import Color from "../components/Color"
import { Link } from "react-router-dom";
import { IoGitCompareOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Container from "../components/Container";


function SingleProduct() {
  const [copied, setCopied] = useState(false);
const copyToClipboard = (text) => {
  console.log("text", text);
  var textField = document.createElement("textarea");
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand("copy");
  textField.remove();
  setCopied(true);

  setTimeout(()=>{
    setCopied(false);
  },3000);
};

  const Imageulr='/images/watch.jpg'
  
  const [orderedProduct, setOrderedProduct] = useState(true);
   const [value, setValue] = useState("");

   const handleChange = (e) => {
     const inputValue = e.target.value;
     // Check if input is empty or within range
     if (
       inputValue === "" ||
       (parseInt(inputValue, 10) >= 1 && parseInt(inputValue, 10) <= 20)
     ) {
       setValue(inputValue);
     }
   };

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />

      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div id="main">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "watch",
                      isFluidWidth: true,
                      src: Imageulr,
                    },
                    largeImage: {
                      src: Imageulr,
                      width: 1200,
                      height: 1800,
                    },
                    className: "large-image-style",
                  }}
                />
              </div>
            </div>
            <div
              className="other-product-images d-flex flex-wrap gap-15"
              style={{ maxHeight: "200px", overflow: "auto" }}
            >
              <div>
                <img className="img-fluid" src={Imageulr} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={Imageulr} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={Imageulr} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={Imageulr} alt="" />
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom ">
                <h3 className="title">
                  Beautiful watch with fully water proof
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ 100</p>

                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    value={3}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 Reviews)</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">Havels</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data badge border-1">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border-1 bg-white text-dark border-secondary">
                      xl
                    </span>
                    <span className="badge border-1 bg-white text-dark border-secondary">
                      xxl
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Color :</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-15 flex-row mt-2">
                  <h3 className="product-heading">Quantity :</h3>
                  <div>
                    <input
                      type="number"
                      onChange={handleChange}
                      value={value}
                      min={1}
                      max={20}
                      style={{ width: "70px" }}
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0">Add To cart</button>
                    <button className="button signup">Buy Now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 mt-4">
                  <div>
                    <a href="" className="fs-5 me-2">
                      <IoGitCompareOutline />
                      Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="" className="fs-5 me-2">
                      <CiHeart />
                      Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column  my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br />
                    <b>5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex gap-10  align-items-center my-3">
                  <h3 className="product-heading"> Product Link :</h3>
                  <div>
                    <button
                      className="copy-link"
                      onClick={() =>
                        copyToClipboard(
                          "https://getbootstrap.com/docs/5.0/components/accordion/"
                        )
                      }
                    >
                      Copy product Link
                    </button>
                    {copied && (
                      <span>
                        {" "}
                        <br />
                        Link Copied!
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>

            <div className="bg-white p-3 ">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores facilis magni totam repellendus ex illum sunt fugiat
                natus corporis repellat? Illo sapiente repellat nam doloremque
                ipsum recusandae pariatur dolorem consectetur!
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      value={3}
                      size={24}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      value={3}
                      size={24}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      placeholder="comments"
                      cols="30"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review ">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Samir</h6>
                    <ReactStars
                      count={5}
                      value={3}
                      size={24}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatum quaerat, minus repudiandae odio reiciendis magnam
                    ad aut quos cum ut eveniet ex voluptas quisquam dolorum est
                    id accusantium. Eos, iste.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
    </>
  );
}

export default SingleProduct;
