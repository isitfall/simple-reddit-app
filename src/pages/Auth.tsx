import React from 'react';
import {BaseButton} from "../components/common/base-button/base-button";
import {AppLayout} from "../layout/app-layout/app-layout";

export const Auth = () => {
    return (
        <main className='h-screen flex justify-center items-center app-header'>
            <BaseButton onClick={() => {}} label={'Login with Reddit'} className={'bg-red-600 border-none'}/>
        </main>
    )
}