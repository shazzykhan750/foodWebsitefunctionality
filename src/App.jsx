import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./component/Body";
import Header from "./component/Header";
import About from "./component/About";
import Contact from "./component/Contact";
import Applayout from "./component/Applayout";
import ResturantMenu from "./component/ResturantMenu";
import { lazy, Suspense } from "react";
import Shimmer from "./component/Shimmer";
import Cart from "./component/Cart";

function App() {
  const Grocery = lazy(() => import("./component/Grocery"));
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/grocery",
          element: (
            <Suspense fallback={<Shimmer />}>
              <Grocery />
            </Suspense>
          ),
        },
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/resturant/:id",
          element: <ResturantMenu />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
