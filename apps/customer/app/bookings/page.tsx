import React from 'react'

const BookingPage = () => {
    return (
        <div style={{ padding: 24 }}>
            <h1>My Bookings</h1>
            <p>View and manage your court bookings.</p>
            <div style={{ marginTop: 20, color: '#666' }}>
                No bookings yet. Search for courts to get started!
            </div>
        </div>
    )
}

export { BookingPage }
