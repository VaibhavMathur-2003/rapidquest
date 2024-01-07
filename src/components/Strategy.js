import React, { useState } from "react";

const Strategy = () => {
  const [contri, setContri] = useState(12);
  const [age, setage] = useState(65);

  return (
    <div className="strategy">
      <div className="retire">
        <h2>Retirement Strategy</h2>
        <div>
          <h4>Employment Contribution</h4>
          <div style={{ display: "flex" }}>
            <input
              style={{ width: "100%" }}
              type="range"
              onChange={(e) => setContri(e.value)}
            />
            <h6>{contri}%</h6>
          </div>
        </div>
        <div>
          <h4>Retirement Age</h4>
          <div style={{ display: "flex" }}>
            <input
              style={{ width: "100%" }}
              type="range"
              onChange={(e) => setage(e.value)}
            />
            <h6>{age}</h6>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <h4>Employer Contribution</h4>
          <h6>8.4%</h6>
        </div>
        <div style={{ display: "flex" }}>
          <h4>Interest Rate</h4>
          <h6>5%</h6>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="strategybutton">Update</button>
      </div>
      <div className="docs">
        <a
          style={{
            textDecoration: "none",
            color: "#4433FF",
            fontWeight: "bold",
          }}
          href="/"
        >
          View Help Docs >
        </a>
        <div style={{display:'flex', marginTop:"40px"}}>
          <div
            style={{
              borderLeft: "1.5px solid #4433FF", // Thin vertical line style
              height: "100px", // Adjust height as needed
            }}
          ></div>
          <div>
            <h5>Are you considering a</h5>
            <h4 style={{ marginTop: "0" }}>Housing Advance</h4>
            <p>Limited time reduced interest</p>
            <p style={{ color: "#4433FF" }}>Learn More ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
