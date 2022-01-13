import React, { useState, useEffect } from "react";
import "./CoinsTable.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  AddCoinToFavoritesAction,
  selectedCoinAction,
} from "../../redux/actions/coinActions";

const CoinsTable = () => {
  const coins = useSelector((coins) => coins.coins.coins);
  const favorites = useSelector((favorites) => favorites.coins.favorites);
  const [sortedCoins, setSortedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setSortedCoins(coins);
  }, [coins, favorites]);

  const addItemToFavoritesHandler = (coin) => {
    dispatch(AddCoinToFavoritesAction(coin));
  };

  const selectedCoinHandler = (coinId) => {
    dispatch(selectedCoinAction(coinId));
  };

  const sortByPrice = () => {
    const newToggle = !toggle;
    setToggle(newToggle);

    if (newToggle) {
      const sorted = [...coins].sort((a, b) =>
        b.current_price < a.current_price ? 1 : -1
      );
      setSortedCoins(sorted);
    } else {
      const sorted = [...coins].sort((a, b) =>
        b.current_price > a.current_price ? 1 : -1
      );
      setSortedCoins(sorted);
    }
  };

  const filteredQuery = sortedCoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <>
      <div className="col text-center pb-2">
        <input
          className="search-input"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="coins-table table-responsive">
        <table class="table table-hover table-striped table-dark text-center">
          {filteredQuery.length !== 0 ? (
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Coin </th>
                <th scope="col">
                  <a onClick={sortByPrice}>
                    Price
                    <span className="pl-1">
                      {toggle ? (
                        <i class="fas fa-arrow-up"></i>
                      ) : (
                        <i class="fas fa-arrow-down"></i>
                      )}
                    </span>{" "}
                  </a>
                </th>
                <th scope="col">24h</th>
                <th scope="col">24h Volume</th>
                <th scope="col">Mkt Cap</th>
              </tr>
            </thead>
          ) : (
            <p>no results</p>
          )}

          <tbody>
            {filteredQuery.map((coin, index) => {
              const {
                id,
                name,
                current_price,
                total_volume,
                price_change_percentage_24h,
                market_cap,
                image,
              } = coin;

              return (
                <tr key={id}>
                  <th scope="row">
                    <i
                      class={`far fa-star  pr-1 $ `}
                      onClick={() => {
                        addItemToFavoritesHandler(coin);
                      }}
                    ></i>
                    {index}
                  </th>

                  <Link
                    to={{
                      pathname: "/coin",
                    }}
                    onClick={() => {
                      selectedCoinHandler(id);
                    }}
                  >
                    <td className="coin-name">
                      <img src={image} className="table-image pr-1" />
                      {name}
                    </td>
                  </Link>
                  <td>
                    $
                    {current_price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </td>

                  <td
                    className={
                      price_change_percentage_24h > 0 ? "green" : "red"
                    }
                  >
                    {" "}
                    {price_change_percentage_24h}%
                  </td>
                  <td>
                    {" "}
                    $
                    {total_volume
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </td>
                  <td>
                    $
                    {market_cap
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CoinsTable;
