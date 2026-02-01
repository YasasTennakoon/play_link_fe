'use client'

import { AuthProvider } from "@common/auth/auth/AuthContext"

interface ProvidersProps {
    children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}
