import { NavLink } from 'react-router';
import './LoginForm.css';
import { useEffect, useState } from 'react';

interface LoginFormProps{
    handleLogin: (
        login: string,
        password: string
    ) => Promise<void>;
}

export default function LoginForm({handleLogin}: LoginFormProps){

    const [ login, setLogin ] = useState('testuser');
    const [ password, setPassword ] = useState('123456');

    useEffect(() => {
        console.log(login, password);
    }, [login, password])


    return (
        <div className="login-form">
            <div className="login-form__header">
                <h2 className="login-form__title">Login</h2>
                <div className="login-form__decoration-line"></div>
                <p className="login-form__text">Welcome onboard with us!</p>
            </div>
            <div className="login-form__body">
                <div className="login-form__input-container">
                    <label className="login-form__label">
                        Username <br></br>
                        <input 
                        value={login}
                        onChange={(event) => setLogin(event.target.value)}
                        className="login-form__input" type="text" placeholder="Enter your username"></input>
                    </label>
                </div>
                <div className="login-form__input-container">
                    <label className="login-form__label">
                        Password <br></br>
                        <input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="login-form__input" type="password" placeholder="Enter your password"></input>
                    </label>
                    <NavLink
                    to='/'
                    className="login-form__body-forgot-password-link">Forgot Password?</NavLink>
                </div>
            </div>
            <div className="login-form__footer">
                <button onClick={() => handleLogin(login, password)} className="login-form__login-button" type="submit">Login</button>
                <p className="login-form__footer-text">New to Logo?<NavLink to='/' className="login-form__footer-register-link"> <b>Register</b> Here</NavLink></p>
            </div>
        </div>
    );
}