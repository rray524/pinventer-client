import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/Error/ErrorPage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Forgot from "./pages/Auth/Forgot";
import Reset from "./pages/Auth/Reset";
import Dashboard from "./pages/dashboard/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";
import Layout from "./components/Layout/Layout";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProduct from "./pages/addProduct/AddProduct";
import ProductDetail from "./components/product/productDetail/ProductDetail";
import EditProduct from "./pages/editProduct/EditProduct";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";
import Contact from "./pages/contact/Contact";

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/resetpassword/:resetToken",
    element: <Reset />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
  },
  {
    path: "/dashboard",
    element: (
      <Sidebar>
        <Layout>
          <Dashboard />
        </Layout>
      </Sidebar>
    ),
  },
  {
    path: "/add-product",
    element: (
      <Sidebar>
        <Layout>
          <AddProduct />
        </Layout>
      </Sidebar>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <Sidebar>
        <Layout>
          <ProductDetail />
        </Layout>
      </Sidebar>
    ),
  },
  {
    path: "/edit-product/:id",
    element: (
      <Sidebar>
        <Layout>
          <EditProduct />
        </Layout>
      </Sidebar>
    ),
  },
  {
    path: "/profile",
    element: (
      <Sidebar>
        <Layout>
          <Profile />
        </Layout>
      </Sidebar>
    ),
  },
  {
    path: "/edit-profile",
    element: (
      <Sidebar>
        <Layout>
          <EditProfile />
        </Layout>
      </Sidebar>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <Sidebar>
        <Layout>
          <Contact />
        </Layout>
      </Sidebar>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ToastContainer />
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </>
);
