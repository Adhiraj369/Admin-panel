import React, { useRef, useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import ImgBack from '../../assets/login.jpg';
import Logo from '../../assets/logoMain.png';
import Button from '../../components/Button';

export default function Login({ onLogin }) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loggedIn, setLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { setEmail, setIsAuthenticated } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // Simple validation
        if ((email === 'you@water.com' || email === 'you@garbage.com') && password === '1')
 {
            setEmail(email); // Save the email in context
            setIsAuthenticated(true);
            setLoggedIn(true);
            onLogin(true); // Notify parent component
        } else {
            setErrorMessage('Please fill in both fields');
            setLoggedIn(false);
            onLogin(false);
        }
    }

    if (loggedIn) {
        return <Navigate to="/admin/dashboard" />;
    }

    return (
        <div className="relative h-screen w-full flex items-center justify-center">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url(${ImgBack})` }}
            ></div>
            <div className="relative z-10">
                <div className="relative rounded-full transition duration-300 hover:shadow-custom">
                    <svg height="550" width="550">
                        <circle cx="275" cy="275" r="275" fill="white" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-white z-30">
                        <form onSubmit={handleSubmit}>
                            <ul className="flex flex-col justify-center items-center relative">
                                <li className="flex items-center justify-center">
                                    <img
                                        src={Logo}
                                        alt="Logo"
                                        className="w-2/3 h-2/3 mb-8"
                                    />
                                </li>
                                <li>
                                    <input
                                        ref={emailRef}
                                        type="email"
                                        className="focus:outline-none border-none text-slate-900 p-2 shadow-lg text-lg rounded-md transition duration-300 focus:shadow-custom m-3"
                                        placeholder="Email"
                                    />
                                </li>
                                <li>
                                    <input
                                        type="password"
                                        ref={passwordRef}
                                        className="focus:outline-none border-none text-slate-900 p-2 m-3 shadow-lg text-lg rounded-md transition duration-300 focus:shadow-custom"
                                        placeholder="Password"
                                    />
                                </li>
                                {errorMessage && (
                                    <li className="text-red-500 text-sm mt-2">
                                        {errorMessage}
                                    </li>
                                )}
                                <li>
                                    <Button type="submit">Login</Button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
