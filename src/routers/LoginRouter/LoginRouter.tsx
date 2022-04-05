import { Routes, Route, Navigate } from 'react-router-dom';
import { atom, useRecoilValue } from 'recoil';
import { LoginPage } from '../../pages/LoginPage';
import { HomeRouter } from '../HomeRouter';

export const isLoginState = atom({
    key: 'isLoginState',
    default: false,
});

const LoginRouter = () => {
    const isLogin = useRecoilValue<boolean>(isLoginState);

    return (
        <Routes>
            {isLogin ? (
                <>
                    <Route path='*' element={<Navigate to='/' />} />
                    <Route path='/' element={<HomeRouter />} />
                </>
            ) : (
                <>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='*' element={<Navigate to='/login' />} />
                </>
            )}
        </Routes>
    );
};

export default LoginRouter;
