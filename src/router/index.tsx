import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Shop from "../pages/shop";
import MainLayout from "../components/main-layout";
import ProductsShop from "../pages/products-shop";
import ProceedCheckout from "../pages/proceed-checkout";
import Blogs from "../pages/blogs";
import Rendering from "../components/blogs/rendering";
import Profile from "../pages/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/shop/:category/:id",
        element: <Shop />,
      },
      {
        path: "/products-shop",
        element: <ProductsShop />,
      },
      {
        path: "/proceed-checkout",
        element: <ProceedCheckout />,
      },
      {
        path: "/blog/:created_by/:id",
        element: <Rendering />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
