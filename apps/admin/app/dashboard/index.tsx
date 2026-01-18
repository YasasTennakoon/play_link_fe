import React from 'react'

const DashboardPage = () => {
    return (
        <div style={{ padding: 24 }}>
            <h1>Dashboard</h1>
            <p>Platform overview and analytics.</p>
            <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                <div style={{ padding: 20, background: '#fff', borderRadius: 8, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <h3>Total Venues</h3>
                    <p style={{ fontSize: 32, fontWeight: 'bold', margin: '8px 0' }}>0</p>
                </div>
                <div style={{ padding: 20, background: '#fff', borderRadius: 8, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <h3>Total Bookings</h3>
                    <p style={{ fontSize: 32, fontWeight: 'bold', margin: '8px 0' }}>0</p>
                </div>
                <div style={{ padding: 20, background: '#fff', borderRadius: 8, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <h3>Active Users</h3>
                    <p style={{ fontSize: 32, fontWeight: 'bold', margin: '8px 0' }}>0</p>
                </div>
            </div>
        </div>
    )
}

export { DashboardPage }
