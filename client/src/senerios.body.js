import "./senerios.body.css";
import React from "react";
import img from "./images/frustratedScotty.jpg";
import img2 from "./images/scottysGirl.jpg";
const SeneriosContainer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 nonUser">
          <h2 className="seneriosTitle">proofBox User</h2>
          <div className="d-flex justify-content-center">
            <img
              src={img2}
              height="500px"
              width="350px"
              className="userImg d-block card-shadow"
            ></img>
          </div>
          <ul className="userText">
            <li>
              {" "}
              <p>Becky looks happy</p>
            </li>
            <li>
              <p>Becky was able use her recipts for tax deductions </p>
            </li>
            <li>
              <p>Becky got a refund this year</p>
            </li>
            <li>
              <p>Becky has been a proofbox user for 13 months now </p>
            </li>
          </ul>
        </div>
        <div className="col-6 proofBoxUser">
          <h2 className="seneriosTitle ">Non proofBox User</h2>
          <div className="d-flex justify-content-center">
            <img
              src={img}
              height="450px"
              width="400px"
              className="nonUserImg card-shadow mb-4"
            ></img>
          </div>
          <div
            className="userText"
            className="userText d-flex justify-content-center"
          >
            <ul>
              <li>
                {" "}
                <p>Scotty looks frustrated</p>
              </li>
              <li>
                <p>Scotty lost import documents</p>
              </li>
              <li>
                <p>Scotty owes the goverment money this year </p>
              </li>
              <li>
                <p>Scotty is not a proofBox user </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SeneriosContainer;
