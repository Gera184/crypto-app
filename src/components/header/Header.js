import React from "react";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const global = useSelector((global) => global.global.global.data);

  return (
    <div class="jumbotron text-center">
      {global ? (
        <div class="container-fluid">
          <div classsName="row ">
            <div className="col pb-2">
              <h1 className="title">DAILY NEWS</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h3 className="global">
                {" "}
                Active cryptocurrencies:{" "}
                <span className="green global">
                  {global.active_cryptocurrencies
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </h3>
            </div>
            <div className="col-md-4 ">
              <h3 className="global">
                {" "}
                Markets:
                <span className="green"> {global.markets}</span>
              </h3>
            </div>
            <div className="col-md-4">
              <h3 className="global">
                {" "}
                Market cap change 24h:{" "}
                <span
                  className={
                    global.market_cap_change_percentage_24h_usd > 0
                      ? "green"
                      : "red"
                  }
                >
                  {" "}
                  {Math.floor(global.market_cap_change_percentage_24h_usd)}%
                </span>{" "}
              </h3>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col"></div>
          </div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Header;
