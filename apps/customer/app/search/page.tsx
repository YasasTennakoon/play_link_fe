import React from 'react'
import { Button } from '@playlink/ui'

const SearchPage = () => {
    return (
        <div style={{ padding: 24 }}>
            <h1>Search Courts</h1>
            <p>Find indoor and outdoor courts near you.</p>
            <div style={{ marginTop: 20, display: 'flex', gap: 12, flexDirection: 'column', maxWidth: 400 }}>
                <input type="text" placeholder="Location" style={{ padding: 8, borderRadius: 4, border: '1px solid #ddd' }} />
                <select style={{ padding: 8, borderRadius: 4, border: '1px solid #ddd' }}>
                    <option>Badminton</option>
                    <option>Tennis</option>
                    <option>Basketball</option>
                </select>
                <Button>Search</Button>
            </div>
        </div>
    )
}

export { SearchPage }
