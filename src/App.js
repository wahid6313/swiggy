import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contacts from "./components/Contacts.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

//app layout----------------------------------
const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

//router---------------------------------------
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

//RECONSILATION--------------------------------
//virtual dom is the representation of the dom.
//reconsilatoion of a reacts uses in this and a divs algorithm find out the difference between trees only re renders specific position with your app that is only found in div algorithm.

//unique key > index key > no key   (>=greater than)
//no key is not acceptable
//index key is a last option
//unique key is a best practice

//REACT FIBER----------------------------------

//two types of exports/imports-----------------

//----1 types------
//----default exports / ipmorts
//exports default componrnts;
//imports components from "path" ;

//----2 Types------
//----named eports / imports
//exports constant components ;
//import {components} from "path" ;

//Reacts Hook---
//normal js utility function
//--2 Hooks -- (  usState()--super power state variables in reacts.
// and            useEffect()--it is used with call back function () => {} and dependencies of an array.
//)
