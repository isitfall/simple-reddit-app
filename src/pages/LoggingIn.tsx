import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {BaseButton} from "../components/common/base-button/base-button";
import {Loader} from "../components/common/loader/loader";

export const LoggingIn = () => {
    const {search} = useLocation();

    useEffect(() => {
        const query = new URLSearchParams(search);
        fetch(`${process.env.REACT_APP_REDIRECT_URI}?code=${query.get('code')}`);
    })

    return(
        <main className='h-screen flex justify-center items-center app-header'>
            <Loader className="loader animate-spin" />
        </main>
    )
}