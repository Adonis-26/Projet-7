import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import FicheLogement from "./pages/FicheLogement/FicheLogement";
import Page404 from "./pages/Page404/Page404";
import A_Propos from "./pages/A_Propos/A_Propos";
import HeaderFooterLayout from "./layout/HeaderFooterLayout";


const router = createBrowserRouter([
  {
    path:"/",
    element:  <HeaderFooterLayout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/apartement/:apartementId", 
        element: <FicheLogement />
      },
      {
        path: "/a_propos",
        element: <A_Propos />
      },
    ],
    errorElement: (
      <>
        <Header />
        <Page404 />
         <Footer />
      </>
    ),
  },

])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);