/**
 * header
 *   -logo
 *   -nav items
 * body
 *  -search bar
 *  -resturant list
 *       -card
 *         --img
 *           name
 *           cuisine
 *           address
 *           price
 *           distance
 *           rating
 * footer
 *   related link
 *   copy right
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";
import Headercomponent from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";

const AppLayout = () => {
  return (
    <>
      <Headercomponent />
      <Home />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
