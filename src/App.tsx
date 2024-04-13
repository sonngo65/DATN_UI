import "./App.css";
import "./style/index.scss";
import HomePage from "./Page/HomePage";
import CartDetail from "./component/user/Cart/CartDetail";
import Payment from "./component/user/Payment";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductDetail } from "./component/user/ProductDetail";
import ProductSearch from "./component/user/ProductSearch";
import News from "./component/user/News";
import OrderHistory from "./component/user/OrderHistory";
import AdminHome from "./component/admin/Home";
import Home from "./component/user/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
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
  {
    path: "/admin",
    element: <AdminHome />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
