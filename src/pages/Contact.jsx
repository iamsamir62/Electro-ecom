import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

import {
  IoHome,
  IoCall,
  IoMail,
  IoInformationCircleOutline,
} from "react-icons/io5";




function Contact() {
  return (
    <div>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d439.930224335283!2d82.85089891027006!3d28.1025650890696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997b58fc5cebdfd%3A0x2130f627f41d3b75!2s4V32%2B2HG%2C%20Pyuthan%2022300!5e0!3m2!1sen!2snp!4v1712485157427!5m2!1sen!2snp"
                width="600"
                height="450"
                className="border: 0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between ">
                <div>
                  <h3 className="contact-title mb-0">Contact </h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
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
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us </h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <IoHome className="fs-5" />
                        <address className='mb-0'>Swargdwari-8,Pyuthan</address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <IoCall className="fs-5" />
                        <a href="tel:+977 9861683637">+977 9861683637</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <IoMail className="fs-5" />
                        <a href="mailto:kcsamir1961@gmail.com">
                          kcsamir1961@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <IoInformationCircleOutline className="fs-4" />
                        <p className='mb-0'>Sunday - Friday 10AM-9PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
      </Container>
    </div>
  );
}

export default Contact