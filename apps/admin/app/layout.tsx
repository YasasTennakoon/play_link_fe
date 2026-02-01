import './globals.css'
import React from 'react'
import { Providers } from './providers'

export const metadata = {
    title: 'PlayLink — Admin',
    description: 'PlayLink admin app'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}

export default RootLayout
