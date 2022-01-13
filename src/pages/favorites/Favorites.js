import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../components/modal/Modal";
import {
  getDatafromStorage,
  selectedCoinAction,
  AddToStorage,
} from "../../redux/actions/coinActions";
import "./Favorites.css";

export const Favorites = () => {
  const favorites = useSelector((favorites) => favorites.coins.favorites);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getDatafromStorage);
  }, []);

  useEffect(() => {
    if (favorites.length !== 0) {
      dispatch(AddToStorage(favorites));
    }
  }, [favorites]);

  const selectedCoinHandler = (coinId) => {
    dispatch(selectedCoinAction(coinId));
  };

  return (
    <>
      {favorites.length === 0 && (
        <div className=" text-center none-favorites">Nothing added yet</div>
      )}
      <div className="container text-center">
        <div className="row ">
          {favorites.map((coin, index) => (
            <div className="col-md-3 p-5" key={index}>
              <img
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="favorite-img"
                onClick={() => {
                  selectedCoinHandler(coin.id);
                }}
                src={coin.image.large ? coin.image.large : coin.image}
              />
            </div>
          ))}
        </div>
      </div>
      {favorites.length !== 0 && <Modal />}
    </>
  );
};
