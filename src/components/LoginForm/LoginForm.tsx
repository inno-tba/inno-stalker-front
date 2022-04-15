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
        'https://sun9-79.userapi.com/impf/c856136/v856136827/590c6/tJFWJzVdir0.jpg?size=810x1080&quality=96&sign=c7a15cf14a713399cf8868ff7083ca35&type=album',
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
