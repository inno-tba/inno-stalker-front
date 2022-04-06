import { useSetRecoilState } from 'recoil';
import { isLoginState } from '../../routers/LoginRouter/LoginRouter';
import { GoogleLoginButton } from '../GoogleLoginButton';

const LoginForm = () => {
    const setIsLogin = useSetRecoilState(isLoginState);

    const signIn = () => {
        setIsLogin(true);
    };

    return (
        <div className='flex'>
            <GoogleLoginButton signIn={signIn} />
        </div>
    );
};

export default LoginForm;
