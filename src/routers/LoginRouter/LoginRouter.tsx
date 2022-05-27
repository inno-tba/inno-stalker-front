import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import {atom, RecoilRoot, useRecoilValue} from 'recoil';
import { LoginPage } from '../../pages/LoginPage';
import { HomeRouter } from '../HomeRouter';

export const isLoginState = atom({
    key: 'isLoginState',
    default: false,
});

export const userDetails = atom({
    key: 'userDetails',
    default: {
        name: '',
        email: '',
        picture: '',
    },
});

const LoginRouter = () => {
    // const isLogin = useRecoilValue<boolean>(isLoginState);
    const isLogin = true
    console.log('IM in login')

    return <LoginPage />;
    // return <Routes> <RecoilRoot><HomeRouter /> </RecoilRoot></Routes>;


    //
    // return (
    //     <Routes>
    //         {isLogin ? (
    //             <>
    //                 <Route path='*' element={<HomeRouter />} />
    //             </>
    //         ) : (
    //             <>
    //                 <Route path='*' element={<Navigate to='/login' />} />
    //                 <Route path='/login' element={<LoginPage />} />
    //             </>
    //         )}
    //     </Routes>
    // );
};

export default LoginRouter;
