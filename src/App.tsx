import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Notfound from "./Routes/Notfound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Header />
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/character/:id",
          element: <Detail />,
        },
        {
          path: "/*",
          element: <Notfound />,
        }
      ],
    },
  ]);// router setting


  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
