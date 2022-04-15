import { useSetRecoilState } from 'recoil';
import {
    isLoginState,
    userDetails,
} from '../../routers/LoginRouter/LoginRouter';
import { GoogleLoginButton } from '../GoogleLoginButton';

const user = {
    name: 'Daniil Gubaidullin',
    email: 'gubaydullin.dan@gmail.com',
    picture:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const LoginForm = () => {
    const setIsLogin = useSetRecoilState(isLoginState);
    const setUserDetails = useSetRecoilState(userDetails);

    const signIn = () => {
        setIsLogin(true);
        setUserDetails(user);
    };

    return (
        <div className='flex'>
            <GoogleLoginButton signIn={signIn} />
        </div>
    );
};

export default LoginForm;
