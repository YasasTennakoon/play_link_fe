'use client'

import React from 'react'
import { Button } from '@playlink/ui'

const VenuesPage = () => {
    return (
        <div style={{ padding: 24 }}>
            <h1>Manage Venues</h1>
            <p>Approve, edit, or remove venue listings.</p>
            <div style={{ marginTop: 20 }}>
                <Button>Add New Venue</Button>
            </div>
            <div style={{ marginTop: 20, color: '#666' }}>
                No venues registered yet.
            </div>
        </div>
    )
}

export default VenuesPage
