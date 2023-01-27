import React from "react";
import {createBrowserRouter} from "react-router-dom";
import {Auth} from "../pages/Auth";
import {LoggingIn} from "../pages/LoggingIn";

export const router = createBrowserRouter([
//     {
//     path: '/',
//     element: <Main />,
// },
    {
        // path: '/auth',
        path: '/',
        element: <Auth/>,
    }, {
        path: '/auth/reddit/callback',
        element: <LoggingIn/>,
    }])