import { createBrowserRouter, RouterProvider } from "react-router-dom";

import router from "./routes/router";

const routerReact = createBrowserRouter(router);

function App() {
  return (
    <div className="div">
      <RouterProvider router={routerReact} />
    </div>
  );
}

export default App;
