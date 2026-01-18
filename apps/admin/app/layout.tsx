import './globals.css'
import React from 'react'

export const metadata = {
    title: 'PlayLink — Admin',
    description: 'PlayLink admin app'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

export default RootLayout;
