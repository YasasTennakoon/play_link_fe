// Token storage - using sessionStorage for persistence with security
// Access token: sessionStorage (cleared when browser closes)
// Refresh token: HTTP-only cookie (managed by backend)

const ACCESS_TOKEN_KEY = 'playlink_access_token';
const USER_KEY = 'playlink_user';

// Check if running in browser
const isBrowser = () => typeof window !== 'undefined';

export const getAccessToken = (): string | null => {
    if (!isBrowser()) return null;
    return sessionStorage.getItem(ACCESS_TOKEN_KEY);
};

export const setAccessToken = (token: string): void => {
    if (!isBrowser()) return;
    sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const getStoredUser = (): any | null => {
    if (!isBrowser()) return null;
    const user = sessionStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
};

export const setStoredUser = (user: any): void => {
    if (!isBrowser()) return;
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const clearTokens = (): void => {
    if (!isBrowser()) return;
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    sessionStorage.removeItem(USER_KEY);
};

export const hasValidToken = (): boolean => {
    return !!getAccessToken();
};
