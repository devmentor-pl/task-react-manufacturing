import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Layout } from "./components/Layout/Layout";
import { GendersPage } from "./views/GendersPage/GendersPage.js";
import { MainPage } from "./views/MainPage/MainPage.js";
import { mainPageLoader } from "./api/mainPageLoader";
import { addProductToFavaoritesAction } from "./api/addProductToFavaoritesAction";
import { productListLoader } from "./api/productListLoader";
import { ProductsList } from "./views/ProductsList/ProductsList.js";
import { ProductDetails } from "./views/ProductDetails/ProductDetails.js";
import { productLoader } from "./api/productLoader";
import { Cart } from "./views/Cart/Cart.js";
import { Favourites } from "./views/Favourites/Favourites.js";
import { favouritesLoader } from "./api/favouritesLoader";
import { deleteFavouriteAction } from "./api/deleteFavouriteAction.js";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { SearchResults } from "./views/SearchResults/SearchResults.js";
import { searchProductsLoader } from "./api/searchProductsLoader.js";
import { ErrorFallback } from "./components/ErrorFallback/ErrorFallback.js";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage.js";

const router = createBrowserRouter([
  {
    path: "/add-to-favaorites/:productId",
    action: addProductToFavaoritesAction,
    errorElement: (
      <ErrorFallback message="Failed to add product to favorites." />
    ),
  },
  {
    path: "/delete-from-favourites/:favouriteId",
    action: deleteFavouriteAction,
    errorElement: (
      <ErrorFallback message="Failed to remove product from favorites." />
    ),
  },
  {
    path: "",
    element: <Layout />,
    errorElement: (
      <ErrorFallback message="Something went wrong with the application layout." />
    ),
    children: [
      {
        path: "/home?",
        element: <MainPage />,
        errorElement: <ErrorFallback message="Failed to load the main page." />,
        children: [
          {
            path: "search",
            element: <SearchResults />,
            loader: searchProductsLoader,
            errorElement: (
              <ErrorFallback message="Could not load search results." />
            ),
          },
        ],
      },
      {
        path: "/basket",
        element: <Cart />,
        errorElement: <ErrorFallback message="Could not load the cart." />,
      },
      {
        path: "/favourite",
        element: <Favourites />,
        loader: favouritesLoader,
        errorElement: (
          <ErrorFallback message="Could not load your favorites." />
        ),
      },
      {
        path: "/:gender",
        element: <GendersPage />,
        loader: mainPageLoader,
        errorElement: (
          <ErrorFallback message="Could not load the gender-specific page." />
        ),
        children: [
          {
            path: "/:gender/:category/:subcategory?",
            element: <ProductsList />,
            loader: productListLoader,
            errorElement: <ErrorFallback message="Failed to load products." />,
          },
          {
            path: "/:gender/:category/:subcategory/:productId",
            element: <ProductDetails />,
            loader: productLoader,
            errorElement: (
              <ErrorFallback message="Could not load the product details." />
            ),
          },
        ],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
