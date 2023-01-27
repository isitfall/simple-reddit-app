import React, {useEffect} from 'react';
import {BaseButton} from "../components/common/base-button/base-button";
import uniqId from 'uniqid';

export const Auth = () => {
    function openLogin() {
        window.open(`https://www.reddit.com/api/v1/authorize?client_id=${process.env.REACT_APP_ID}&response_type=code&state=${uniqId('uniq-')}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&duration=permanent&scope=read`, '_self');
    }

    useEffect(() => {
        console.log('env', process.env.REACT_APP_ID);
    })

    return (
        <main className='h-screen flex justify-center items-center app-header'>
            <BaseButton onClick={openLogin} label={'Login with Reddit'} className={'bg-red-600 border-none'}/>
        </main>
    )
}