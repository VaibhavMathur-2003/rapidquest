import React from "react";
import DataBar from "./DataBar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Income = () => {
  return (
    <div className="income">
      <div>
        <h5 style={{ marginBottom: "0", color: "#4433FF" }}>
          Retirement Income
        </h5>
        <h2 style={{ marginTop: "0" }}>Starting Year 2056</h2>
      </div>
      <div className="incomecards" style={{ display: "flex" }}>
        <div>
          <h2>＄300,000</h2>
          <p>My Goal</p>
          <hr style={{ border: "1px solid blue" }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginRight: "30px" }}>
            <h2>59%</h2>
            <p>Goal Achieved</p>
            <hr style={{ border: "1px solid blue" }} />
          </div>
          <div>
            <h2>＄300</h2>
            <p>Est. Monthly Income</p>
            <hr style={{ border: "1px solid blue" }} />
          </div>
        </div>
      </div>
      <div>
        <h2>Contributions Overtime</h2>
        <DataBar />
      </div>
      <div style={{ marginTop: "30px" }}>
        <h2>How do I compare to my peers</h2>
        <p>These number represent current goal achievement</p>
      </div>
      <div className="compare">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div className="drop">
            <label for="cars">Age:</label>
            <select style={{ border: "none" }} id="cars" name="cars">
              <option style={{ border: "none" }} value="volvo">
                Under 30
              </option>
            </select>
          </div>
          <div className="drop">
            <label for="cars">Salary:</label>
            <select style={{ border: "none" }} id="cars" name="cars">
              <option style={{ border: "none" }} value="volvo">
                K20 - K30
              </option>
            </select>
          </div>
          <div className="drop">
            <label for="cars">Gender:</label>
            <select style={{ border: "none" }} id="cars" name="cars">
              <option style={{ border: "none" }} value="volvo">
                Male
              </option>
            </select>
          </div>
        </div>
        <div className="circle">
          <div style={{ margin: "0px 20px" }}>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: `#3EB489`,
                textColor: "black",
                textSize: "1.5rem",
              })}
              value={78}
              text={`78%`}
            />
          </div>
          <div style={{ margin: "0px 20px" }}>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: `#3EB489`,
                textColor: "black",
                textSize: "1.5rem",
              })}
              value={95}
              text={`95%`}
            />
          </div>
          <div style={{ margin: "0px 20px" }}>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: `#3EB489`,
                textColor: "black",
                textSize: "1.5rem",
              })}
              value={59}
              text={`59%`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income;
