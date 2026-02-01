"use client"

import React, { createContext, useState, useEffect, useCallback } from "react";
import { loginApi, logoutApi } from "../api/auth.api";
import {
    setAccessToken,
    clearTokens,
    getAccessToken,
    getStoredUser,
    setStoredUser
} from "../utils/tokenStorage";
import api from "../api/axios";

interface AuthContextType {
    user: any;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (userName: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Restore session on mount
    useEffect(() => {
        const restoreSession = async () => {
            console.log('AuthContext: Checking for existing session...');

            // First check sessionStorage for existing session
            const storedToken = getAccessToken();
            const storedUser = getStoredUser();

            if (storedToken && storedUser) {
                console.log('AuthContext: Found stored session, restoring...');
                setUser(storedUser);
                setIsLoading(false);
                return;
            }

            // No stored session, try refresh token (HTTP-only cookie)
            try {
                console.log('AuthContext: Trying refresh token...');
                const res = await api.post('/auth/refresh');
                const { accessToken, user: userData } = res.data;

                console.log('AuthContext: Session restored via refresh token');
                setAccessToken(accessToken);
                setStoredUser(userData);
                setUser(userData);
            } catch (error: any) {
                console.log('AuthContext: No valid session, user needs to login');
                clearTokens();
            } finally {
                setIsLoading(false);
            }
        };

        restoreSession();
    }, []);

    const login = useCallback(async (userName: string, password: string) => {
        console.log('AuthContext: Logging in...');
        const data = await loginApi(userName, password);
        console.log('AuthContext: Login successful', data);

        setAccessToken(data.accessToken);
        setStoredUser(data.user);
        setUser(data.user);
    }, []);

    const logout = useCallback(async () => {
        console.log('AuthContext: Logging out...');
        try {
            await logoutApi();
        } catch (error) {
            console.error('AuthContext: Logout API error (continuing anyway)', error);
        } finally {
            clearTokens();
            setUser(null);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                isLoading,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
