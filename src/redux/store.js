import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from "./reducers/coinsReducer";
import globalReducer from "./reducers/globalReducer";
import commentsReducer from "./reducers/commentsReducer";

const store = configureStore({
  reducer: {
    coins: coinsReducer,
    global: globalReducer,
    comments: commentsReducer,
  },
});

export default store;
