import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { routes } from "./routes.js";
import { sendCoinData } from "./redux/actions/coinActions";
import { sendglobalData } from "./redux/actions/globalActions";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sendCoinData);
    dispatch(sendglobalData);
  }, []);

  return (
    <div className="background">
      <Router>
        <Navbar />
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={route.path}
                exact
                element={route.element}
                path={route.path}
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
};
