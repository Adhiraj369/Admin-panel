
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [email, setEmail] = useState(() => localStorage.getItem('email') || '');
    const [isAuthenticated, setIsAuthenticated] = useState(() => JSON.parse(localStorage.getItem('isAuthenticated')) || false);


    const role = email.endsWith('@garbage.com') ? 'garbage' : 'user';

    useEffect(() => {
        localStorage.setItem('email', email);
        localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    }, [email, isAuthenticated]);

    return (
        <AuthContext.Provider value={{ email, setEmail, isAuthenticated, setIsAuthenticated, role }}>
            {children}
        </AuthContext.Provider>
    );
}
