import { globalActions } from "../reducers/globalReducer";
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

export const sendglobalData = (dispatch) => {
  fetchData(endPointes.marketTotals, (data) => {
    dispatch(globalActions.fetchGlobalData(data));
  });
};
