import "./App.css";
import "./style/_custom.scss";
import "./style/index.scss";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./component/user/Header";
import HomePage from "./Page/HomePage";
import ProductDetailPage from "./Page/ProductDetailPage";
import PaymentPage from "./Page/PaymentPage";
import CartDetail from "./component/user/Cart/CartDetail";
import CartDetailPage from "./Page/CartDetailPage";
import ProductSearchPage from "./Page/ProductSearchPage";
import NewsPage from "./Page/NewsPage";
import Payment from "./component/user/Payment";
import OrderHistoryPage from "./Page/OrderHistoryPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import path from "path";
import { ProductDetail } from "./component/user/ProductDetail";
import ProductSearch from "./component/user/ProductSearch";
import News from "./component/user/News";
import OrderHistory from "./component/user/OrderHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/product/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <CartDetail />,
      },
      {
        path: "/product/search",
        element: <ProductSearch />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/order/:accountId",
        element: <OrderHistory />,
      },
    ],
  },

  {
    path: "/payment",
    element: <Payment />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
