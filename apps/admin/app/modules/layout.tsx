'use client'

import ProtectedRoute from "@common/auth/routes/ProtectedRoute"
import Navigation from "./components/navigation/Navigation"

interface ProtectedLayoutProps {
    children: React.ReactNode
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
    return (
        <ProtectedRoute>
            <div className="flex min-h-screen bg-gray-50">
                <Navigation />
                <main className="flex-1 p-8">
                    {children}
                </main>
            </div>
        </ProtectedRoute>
    )
}

export default ProtectedLayout
