import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

/**
 * PUBLIC
 */
import Login from "~/src/pages/Login";

/**
 * PRIVATE
 */
import Home from "~/src/pages/Home";
import Types from "~/src/pages/Types";
import Sizes from "~/src/pages/Sizes";
import Items from "~/src/pages/Items";
import Address from "~/src/pages/Address";
import Orders from "~/src/pages/Orders";

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Login,
        Home,
        Types,
        Sizes,
        Items,
        Address,
        Orders
      },
      {
        initialRouteName: userLogged ? "Home" : "Login",
        backBehavior: "history",
        resetOnBlur: false
      }
    )
  );

export default Routes;
