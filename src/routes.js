import Main from "./components/main/Main";
import CoinPage from "./pages/coin-page/CoinPage";
import { Favorites } from "./pages/favorites/Favorites";

export const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/coin",
    element: <CoinPage />,
  },
];
