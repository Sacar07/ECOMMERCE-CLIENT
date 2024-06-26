import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RootComponent from "./components/common/RootComponent";
import Products from "./pages/products/Products";
import Slug from "./pages/products/Slug";
import Signup from "./pages/Signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/slice/userSlice";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const router = createBrowserRouter([
    {
      path: "",
      element: <RootComponent />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "products",
          children: [
            {
              path: "",
              element: <Products />,
            },
            {
              path: ":slug",
              element: <Slug />,
            },
          ],
        },
      ],
    },
  ]);
  let token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(setUser(res.data));
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <InfinitySpin
            visible={true}
            width="200"
            color="#7E33E0"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
        <div className="font-lato">
          <RouterProvider router={router} />
          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default App;

// /* ctrl+shift+\ toggle figma */
