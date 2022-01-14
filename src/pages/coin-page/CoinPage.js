import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AddCoinToFavoritesAction,
  AddToStorage,
} from "../../redux/actions/coinActions";
import "./CoinPage.css";

const CoinPage = () => {
  const favorites = useSelector((coin) => coin.coins.favorites);
  const coin = useSelector((coin) => coin.coins.selectedCoin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (favorites.length !== 0) {
      dispatch(AddToStorage(favorites));
    }
  }, [favorites]);

  const AddCoinToFavoritesHandler = () => {
    dispatch(AddCoinToFavoritesAction(coin));
  };

  return (
    <div className="container p-5 coin-page-container text-center">
      {coin.market_data ? (
        <>
          <div className="row">
            <div className="col">
              <img src={coin.image.large} alt="" />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col">
              <span class="badge bg-light text-dark">
                Rank #{coin.market_cap_rank}
              </span>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col">
              <span>
                {coin.name} ({coin.symbol})
              </span>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col">
              <h1 className="coin-price">
                $
                {coin.market_data.current_price.usd
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                <span
                  className={`${
                    coin.market_data.market_cap_change_percentage_24h > 0
                      ? "green"
                      : "red"
                  }  pl-1 market_cap_change_percentage_24h`}
                >
                  {coin.market_data.market_cap_change_percentage_24h}%
                </span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <span className="text">
                Market Cap: $
                {coin.market_data.market_cap.usd
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </div>
            <div className="col-md-6">
              <span className="text">
                Circulating Supply: $
                {coin.market_data.circulating_supply
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-md-6">
              <span className="text">
                Hashing Algorithm: {coin.hashing_algorithm}
              </span>
            </div>
            <div className="col-md-6">
              <span className="text">
                Total Supply:
                {""}{" "}
                {coin.market_data.total_supply === null
                  ? " ?"
                  : coin.market_data.total_supply
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-md-6">
              <span className="text">
                High 24h: $
                {coin.market_data.high_24h.usd
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </div>
            <div className="col-md-6">
              <span className="text">
                Low 24h: $
                {coin.market_data.low_24h.usd
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col">
              <button onClick={AddCoinToFavoritesHandler}>
                Add to Favorites
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </div>
  );
};

export default CoinPage;
