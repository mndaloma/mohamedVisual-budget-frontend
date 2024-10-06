import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//Routes
import Dashboard, { dasboardLoader } from "./pages/Dashboard";
import Error from "./pages/error";
import Main, { mainLoader } from "./layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dasboardLoader,
        errorElement: <Error />
      },
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
