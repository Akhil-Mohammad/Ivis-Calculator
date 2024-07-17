import React from "react";
import "./Home.css";
import CalculatorOnBitrate from "./calculatorOnBitrate";
import CalculatorOnSizeAndTime from "./calculatorOnSizeAndTime";
import CalculateStorageAndBandwidth from "./calculatorOnCamerasAndBandwidth";
import HomeNav from "./HomeNav";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
        <div>
          <HomeNav></HomeNav>
        </div>
        <br />
        <br />

        <div className="row">
          <div className="col-4 col-with-border">
            <CalculatorOnBitrate />
          </div>
          <div className="col-4 col-with-border">
            <CalculatorOnSizeAndTime />
          </div>

          <div className="col-4 col-with-border">
            <CalculateStorageAndBandwidth />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
