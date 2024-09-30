import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/NotFound/NotFound";
import { lazy, Suspense, useEffect } from "react";
import MainLayout from "./layout/MainLayout";

const Home = lazy(() => import("./pages/Home"));
const ShopBooks = lazy(() => import("./pages/ShopBooks"));
const Author = lazy(() => import("./pages/Author"));
const Books = lazy(() => import("./pages/Books"));
const Stores = lazy(() => import("./pages/Stores"));
const StoreInventory = lazy(() => import("./pages/StoresInventory"));

function App() {
  useEffect(() => {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("lang", localStorage?.getItem("lang") || "en");
  }, []);

  const router = createBrowserRouter([
    {
      path: `/`,
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: `/`,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: `/shop`,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },

        {
          path: `/stores`,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Stores />
            </Suspense>
          ),
        },
        {
          path: `/author`,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Author />
            </Suspense>
          ),
        },
        {
          path: `/books`,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Books />
            </Suspense>
          ),
        },
        {
          path: `/shop/books`,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <ShopBooks />
            </Suspense>
          ),
        },
        {
          path: `/stores/cover-discovery`,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <StoreInventory />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
