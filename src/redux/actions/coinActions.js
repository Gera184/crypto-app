import { coinsActions } from "../reducers/coinsReducer";
import axios from "axios";
import { endPointes, coinsBaseUrl } from "../../api";
import { Notification } from "../../components/notification/Notification";

function fetchData(endpoint, callback) {
  axios
    .get(coinsBaseUrl + endpoint)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      return error;
    });
}


export const sendCoinData = (dispatch) => {
  fetchData(endPointes.coinsTable, (data) => {
    dispatch(coinsActions.fetchCoinData(data));
  });
};

export const selectedCoinAction = (coinId) => {
  return (dispatch) => {
    fetchData(endPointes.coin + coinId, (data) => {
      dispatch(coinsActions.selectedCoin(data));
    });
  };
};

export const getDatafromStorage = (dispatch) => {
  const dataGetItem = JSON.parse(localStorage.getItem("coins"));
  if (dataGetItem) {
    dispatch(coinsActions.initializeData(dataGetItem));
  }
};

export const AddToStorage = (favorites) => {
  return () => {
    localStorage.setItem("coins", JSON.stringify(favorites));
  };
};

export const AddCoinToFavoritesAction = (coin) => {
  return (dispatch) => {
    dispatch(coinsActions.addCoinToFavorites(coin));
  };
};

export const DeleteCoinAction = (coinId) => {
  return (dispatch) => {
    dispatch(coinsActions.deleteCoinFromFavorites(coinId));
  };
};

export const initializeSelectedCoinAction = (dispatch) => {
  dispatch(coinsActions.initializeSelectedCoin());
};
