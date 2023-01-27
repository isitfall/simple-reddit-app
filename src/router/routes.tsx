import React from "react";
import {createBrowserRouter} from "react-router-dom";
import {Main} from "../pages/Main";
import {Auth} from "../pages/Auth";

export const router = createBrowserRouter([
//     {
//     path: '/',
//     element: <Main />,
// },
    {
    // path: '/auth',
    path: '/',
    element: <Auth />
}])