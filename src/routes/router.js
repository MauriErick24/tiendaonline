import CartView from "../views/CartView";
import { Main } from "../layout/Main";
import Home from "../views/Home";
import Landing from "../views/Landing";
import { NotFound } from "../views/NotFound";
import Product from "../views/Product";

const router = [
  {
    path: "/",
    element: <Landing />,
    errorElement: <NotFound />,
  },
  {
    path: "/home",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/product/:id",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Product />,
      },
    ],
  },
  {
    path: "/cart",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <CartView />,
      },
    ],
  },
];

export default router;
