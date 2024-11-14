import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "@/components/Layout";
import Portfolio from "@/components/Portfolio";
import { Articles, NotFound } from "@/components/pages";
import { Thoughts, Projects } from "@/components/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Portfolio />,
      },
      {
        path: "thoughts",
        element: <Thoughts />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
