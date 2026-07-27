import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CategoryPage from "./pages/sidebar/CategoryPage";
import Videos from "./pages/Videos";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import WebStories from "./pages/WebStories";
import Epaper from "./pages/Epaper";

// Router component ke bahar — HMR properly kaam kare
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            index: true,
            element: <CategoryPage />,
          },
          {
            path: "category/:categoryId",
            element: <CategoryPage />,
          },
        ],
      },
      {
        path: "videos",
        element: <Videos />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
      {
        path: "web-stories",
        element: <WebStories />,
      },
      {
        path: "e-paper",
        element: <Epaper />,
      },
      {
        path: "e-paper/:editionId",
        element: <Epaper />,
      },
      {
        path: "magazine/:magazineId",
        element: <Epaper />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
