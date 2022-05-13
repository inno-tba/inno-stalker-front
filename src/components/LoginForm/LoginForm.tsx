import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import {
    isLoginState,
    userDetails,
} from '../../routers/LoginRouter/LoginRouter';
import { GoogleLoginButton } from '../GoogleLoginButton';

const LoginForm = () => {
    const [userEmail, setUserEmail] = useState<string>('dan@gmail.com');
    const [userPassword, setUserPassword] = useState<string>('123');

    const setIsLogin = useSetRecoilState(isLoginState);
    const setUserDetails = useSetRecoilState(userDetails);

    const signIn = async () => {
        const data = new URLSearchParams({
            email: userEmail,
            password: userPassword,
        });

        const token: { token: string } = await fetch(
            'http://localhost:5001/auth/sign-in',
            {
                method: 'POST',
                body: data,
            }
        )
            .then((res) => res.json())
            .catch(() => {
                console.log('Failed to fetch!');
            });

        const user = {
            name: '',
            email: userEmail,
            password: userPassword,
            picture:
                'https://sun9-79.userapi.com/impf/c856136/v856136827/590c6/tJFWJzVdir0.jpg?size=810x1080&quality=96&sign=c7a15cf14a713399cf8868ff7083ca35&type=album',
        };

        if (token.token) {
            setIsLogin(true);
            setUserDetails(user);
        } else {
            console.log('Invalid user credentials!');
        }
    };

    const isInputsValid = () => {
        return userEmail.length > 0 && userPassword.length > 0;
    };

    return (
        <section className='h-screen'>
            <div className='container px-6 py-12 h-full'>
                <div className='flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
                    <div className='md:w-8/12 lg:w-6/12 mb-12 md:mb-0'>
                        <img
                            src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
                            className='w-full'
                            alt='Phone'
                        />
                    </div>
                    <div className='md:w-8/12 lg:w-5/12 lg:ml-20'>
                        <form>
                            <div className='mb-6'>
                                <input
                                    type='text'
                                    className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                    placeholder='Email address'
                                    value={userEmail}
                                    onChange={(e) =>
                                        setUserEmail(e.target.value)
                                    }
                                />
                            </div>

                            <div className='mb-6'>
                                <input
                                    type='password'
                                    className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                    placeholder='Password'
                                    value={userPassword}
                                    onChange={(e) =>
                                        setUserPassword(e.target.value)
                                    }
                                />
                            </div>

                            <button
                                type='button'
                                className='inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full disabled:px-8 disabled:py-3 disabled:text-white disabled:bg-blue-300 disabled:rounded disabled:focus:outline-none disabled:shadow-none'
                                data-mdb-ripple='true'
                                data-mdb-ripple-color='light'
                                onClick={signIn}
                                disabled={!isInputsValid()}
                            >
                                Sign in
                            </button>

                            <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
                                <p className='text-center font-semibold mx-4 mb-0'>
                                    OR
                                </p>
                            </div>

                            <p className='focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3'>
                                <GoogleLoginButton signIn={signIn} />
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;
