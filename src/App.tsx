import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./component/user/Header";
import HomePage from "./Page/HomePage";
import ProductDetailPage from "./Page/ProductDetailPage";

function App() {
  return <ProductDetailPage />;
}

export default App;
