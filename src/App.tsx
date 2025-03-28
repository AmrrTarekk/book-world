import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import ErrorPage from "./pages/NotFound/NotFound";
import MainLayout from "./layout/MainLayout";

const Home = lazy(() => import("./pages/Home"));
const ShopBooks = lazy(() => import("./pages/ShopBooks"));
const Author = lazy(() => import("./pages/Author"));
const Books = lazy(() => import("./pages/Books"));
const Stores = lazy(() => import("./pages/Stores"));
const StoreInventory = lazy(() => import("./pages/StoresInventory"));

function SecondAppRoutes() {
  useEffect(() => {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("lang", localStorage?.getItem("lang") || "en");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="shop"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="stores"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Stores />
            </Suspense>
          }
        />
        <Route
          path="author"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Author />
            </Suspense>
          }
        />
        <Route
          path="books"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Books />
            </Suspense>
          }
        />
        <Route
          path="shop/books"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ShopBooks />
            </Suspense>
          }
        />
        <Route
          path="stores/cover-discovery"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <StoreInventory />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default SecondAppRoutes;
