import React from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/routes";

import './style.css'

export const App = () => {

  return <RouterProvider router={router} />

};
