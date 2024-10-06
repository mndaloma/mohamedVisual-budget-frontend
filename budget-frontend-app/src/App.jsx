import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//Routes
import Dashboard, { dasboardLoader } from "./pages/Dashboard";
import Error from "./pages/error";
//layouts
import Main, { mainLoader } from "./layouts/Main";
//Actions
import { logoutAction } from "./action/Logout";

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
      {
        path: "logout",
        action: logoutAction
      }
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
