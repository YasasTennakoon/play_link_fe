"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
    const router = useRouter();
    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await login(username, password);
            router.push('/modules/dashboard');
        } catch (err: any) {
            console.error('Login error:', err);
            if (!err.response) {
                setError("Cannot connect to server. Please check your connection.");
            } else if (err.response.status === 401) {
                setError("Invalid username or password.");
            } else {
                const errorMsg = err?.response?.data?.message || err?.message || "Login failed. Please try again.";
                setError(errorMsg);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        // Implement Google OAuth login
        console.log("Google login clicked");
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-50">
            {/* Left - Form card */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 sm:p-8">
                    <div className="mb-6 text-center">
                        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">PlayLink Login</h1>
                        <p className="mt-1 text-sm text-slate-500">If you have an account, please login</p>
                    </div>

                    {error && (
                        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-1">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg placeholder-gray-400 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                style={{ height: "40px" }}
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-2 py-3 bg-gray-50 border border-gray-200 rounded-lg placeholder-gray-400 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                style={{ height: "40px" }}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div />
                            <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Forgot Password?</a>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full mt-1 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 disabled:opacity-50"
                        >
                            {loading ? "Logging in..." : "Log In"}
                        </button>

                        <div className="flex items-center my-2">
                            <div className="flex-1 h-px bg-gray-200" />
                            <div className="px-3 text-sm text-gray-500">OR</div>
                            <div className="flex-1 h-px bg-gray-200" />
                        </div>

                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-lg bg-white hover:bg-gray-50"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden>
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span className="text-sm font-medium text-slate-700">Login with Google</span>
                        </button>

                        <div className="text-center text-sm mt-3">
                            <span className="text-slate-600">If you don't have an account... </span>
                            <button
                                type="button"
                                onClick={() => router.push('/auth/register')}
                                className="ml-2 inline-flex items-center px-3 py-1 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;