import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./demo.body.css";
import img3 from "./images/handpic.png";
import img4 from "./images/noreturn.png";

const DemoContainer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 uploadBox">
          <h3> Go paperless, store everything electronically</h3>
          <img
            src={img3}
            className="demoImg card-shadow"
            height="200px"
            width="200px"
          ></img>
        </div>
        {/* <div className="col-4 uploadBox">
          <h2> Demo Image</h2>
          <img src="https://via.placeholder.com/150" className="demoImg"></img>
        </div> */}
        <div className="col-6 uploadBox">
          <h3 className="mr-1"> Well maybe not everything...</h3>
          <img
            src={img4}
            className="demoImg card-shadow"
            height="200px"
            width="300px"
          ></img>
        </div>
      </div>
      <div className="row">
        <div className="col-12 uploadBox1 d-flex justify-content-center">
          <h1 className="mb-4">
            <div>For everything else proofBox has your back </div>
            <button className="try-now">
              <Link to="demo" id="mainLink">
                Try Now
              </Link>
            </button>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default DemoContainer;
