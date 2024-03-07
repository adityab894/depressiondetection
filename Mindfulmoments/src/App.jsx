import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Splash from "./pages/Splash";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Result from "./pages/Result";
import Input from "./pages/Input";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/result",
    element: <Result />,
  },
  {
    path: "/input",
    element: <Input />,
  },
]);

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 4500));
      setLoading(false);
    };
    fetchData();
  }, []);
  return <div>{loading ? <Splash /> : <RouterProvider router={router} />}</div>;
}

export default App;
