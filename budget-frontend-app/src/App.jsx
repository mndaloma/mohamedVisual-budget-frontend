import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//Routes
import Dashboard, { dasboardLoader } from "./pages/Dashboard";
import Error from "./pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: dasboardLoader,
    errorElement: <Error />
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
