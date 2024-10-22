import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App"
import Home from "../home/Home"
import Shop from "../shop/Shop"
import About from "../components/About"
import Blog from "../components/Blog"
import Signup from "../components/Signup";
import SingleBook from "../components/SingleBook";
import CartPage from "../cart/CartPage";

  const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
            path: '/',
            element:<Home/>,
        }, 
        {
            path: "/shop",
            element: <Shop/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/blog",
            element: <Blog/>,
        },
        {
            path: "sign-up",
            element: <Signup/>,
        },
        {
            path:"/book/:id",
            element: <SingleBook />,
            loader: ({params}) => fetch(`http://localhost:3000/book/${params.id}`)
        },
        {
            path:"/cart",
            element: <CartPage />
        }
    ]
  },
]);

export default router 