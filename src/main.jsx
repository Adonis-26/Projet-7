import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import FicheLogement from "./Pages/FicheLogement/FicheLogement";
import Page404 from "./pages/Page404/Page404";
import A_Propos from "./pages/A_Propos/A_Propos";


const HeaderFooterLayout = ()  => {
  return <>
     <Header />
      <Outlet />
     <Footer />
  </>
}
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
  {
    path: "/a_propos",
    element:
        <h1>a propos</h1>
  },

])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);