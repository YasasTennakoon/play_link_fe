'use client'

import React from 'react'
import { Button } from '@playlink/ui'

const Page = () => {
    return (
        <main style={{ padding: 24 }}>
            <h1>PlayLink — Customer</h1>
            <p>Welcome to the customer app. Start building your booking experience here.</p>
            <div style={{ marginTop: 16 }}>
                <Button onClick={() => alert('Find Courts!')}>Find Courts</Button>
            </div>
        </main>
    )
}

export default Page
