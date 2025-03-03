import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [email, setEmail] = useState(() => localStorage.getItem('email') || '');
    const [isAuthenticated, setIsAuthenticated] = useState(() => JSON.parse(localStorage.getItem('isAuthenticated')) || false);
    const [isAdmin, setIsAdmin] = useState(() => JSON.parse(localStorage.getItem('isAdmin')) || false);

    const role = email.endsWith('@garbage.com') ? 'garbage' : 
                 email.endsWith('@admin.com') ? 'admin' :
                 email.endsWith('@water.com') ? 'waterUser' : 
                 email.endsWith('@dead.com') ? 'deadUser' : 
                 email.endsWith('@stagnent.com') ? 'stagnant' : 
                 email.endsWith('@road.com') ? 'road' : 
                 email.endsWith('@transport.com') ? 'transport' : 
                 email.endsWith('@toilet.com') ? 'toilet' : 
                 email.endsWith('@manhole.com') ? 'manhole' : 'user';

    useEffect(() => {
        localStorage.setItem('email', email);
        localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
        localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
    }, [email, isAuthenticated, isAdmin]);

    const logout = () => {
        setEmail('');
        setIsAuthenticated(false);
        setIsAdmin(false);
        localStorage.removeItem('email');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('isAdmin');
    };

    return (
        <AuthContext.Provider value={{ email, setEmail, isAuthenticated, setIsAuthenticated, role, isAdmin, setIsAdmin, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
