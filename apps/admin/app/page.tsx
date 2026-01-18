'use client'

import React from 'react'
import { Button } from '@playlink/ui'

const Page = () => {
    return (
        <main style={{ padding: 24 }}>
            <h1>PlayLink — Admin</h1>
            <p>Admin dashboard scaffold — manage venues and bookings.</p>
            <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
                <Button>Manage Venues</Button>
                <Button variant="ghost">View Reports</Button>
            </div>
        </main>
    )
}

export default Page
