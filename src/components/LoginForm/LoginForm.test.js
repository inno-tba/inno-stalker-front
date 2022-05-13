import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginForm from './LoginForm';

test('Is sign in button disabled when email and password are empty', async () => {
    render(<LoginForm />);

    const inputEmailField = screen.getByPlaceholderText('Email address');
    const inputPasswordField = screen.getByPlaceholderText('Password');

    const signInButton = screen.getByRole('button', { name: 'Sign in' });

    fireEvent.change(inputEmailField, { target: { value: '' } });
    fireEvent.change(inputPasswordField, { target: { value: '' } });

    expect(signInButton).toBeDisabled();
});

test('Is sign in button disabled when email is empty', async () => {
    render(<LoginForm />);

    const inputEmailField = screen.getByPlaceholderText('Email address');
    const inputPasswordField = screen.getByPlaceholderText('Password');

    const signInButton = screen.getByRole('button', { name: 'Sign in' });

    fireEvent.change(inputEmailField, { target: { value: '' } });
    fireEvent.change(inputPasswordField, { target: { value: 'password' } });

    expect(signInButton).toBeDisabled();
});

test('Is sign in button disabled when password is empty', async () => {
    render(<LoginForm />);

    const inputEmailField = screen.getByPlaceholderText('Email address');
    const inputPasswordField = screen.getByPlaceholderText('Password');

    const signInButton = screen.getByRole('button', { name: 'Sign in' });

    fireEvent.change(inputEmailField, { target: { value: 'dan@gmail.com' } });
    fireEvent.change(inputPasswordField, { target: { value: '' } });

    expect(signInButton).toBeDisabled();
});

test('Is sign in button enabled when email and password are not empty', async () => {
    render(<LoginForm />);

    const inputEmailField = screen.getByPlaceholderText('Email address');
    const inputPasswordField = screen.getByPlaceholderText('Password');

    const signInButton = screen.getByRole('button', { name: 'Sign in' });

    fireEvent.change(inputEmailField, { target: { value: 'dan@gmail.com' } });
    fireEvent.change(inputPasswordField, { target: { value: 'password' } });

    expect(signInButton).toBeEnabled();
});
