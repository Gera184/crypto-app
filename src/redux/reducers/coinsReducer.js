import { createSlice } from "@reduxjs/toolkit";
import { Notification } from "../../components/notification/Notification";

const coinsSlice = createSlice({
  name: "coins",
  initialState: {
    coins: [],
    selectedCoin: {},
    favorites: [],
  },
  reducers: {
    fetchCoinData(state, action) {
      state.coins = action.payload;
    },
    selectedCoin(state, action) {
      state.selectedCoin = action.payload;
    },

    initializeData(state, action) {
      state.favorites = action.payload;
    },
    initializeSelectedCoin(state) {
      state.selectedCoin = {};
    },
    deleteCoinFromFavorites(state, action) {
      const id = action.payload;
      const existingItem = (state.favorites = state.favorites.filter(
        (item) => item.id !== id
      ));

      if (existingItem.length === 0) {
        localStorage.removeItem("coins");
      }
    },
    addCoinToFavorites(state, action) {
      const newItem = action.payload;
      const existingItem = state.favorites.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        state.favorites.push({
          id: newItem.id,
          symbol: newItem.symbol,
          name: newItem.name,
          image: newItem.image,
          current_price: newItem.current_price,
          market_cap_rank: newItem.market_cap_rank,
          is_pressed: true,
        });

        Notification("success");
      } else {
        Notification("exist");
      }
    },
  },
});

export const coinsActions = coinsSlice.actions;

export default coinsSlice.reducer;
