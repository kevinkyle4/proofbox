import React from "react";
import "./stats.body.css";
const StatsContainer = () => {
  return (
    <div className="infoBox">
      <h2 className="d-flex justify-content-center">
        Join proofBox and start saving
      </h2>
      <div className="infoBox">
        <div className="row">
          <div className="col-4">
            <ul>
              <li> Proof of purchase for warranties: </li>
              <li> Expense reimbursements: </li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li> Proof of major expenses: </li>
              <li> Budgeting and reconciling: </li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li> Merchandise returns or exchanges:</li>
              <li> Tax deductions:</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StatsContainer;
