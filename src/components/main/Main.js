import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Main.css";
import CoinsTable from "../table/CoinsTable";
import Header from "../header/Header";
import {
  AddToStorage,
  getDatafromStorage,
} from "../../redux/actions/coinActions";

const Main = () => {
  const favorites = useSelector((favorites) => favorites).coins.favorites;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDatafromStorage);
  }, []);

  useEffect(() => {
    if (favorites.length !== 0) {
      dispatch(AddToStorage(favorites));
    }
  }, [favorites]);

  return (
    <>
      <Header />
      <CoinsTable />
    </>
  );
};

export default Main;
