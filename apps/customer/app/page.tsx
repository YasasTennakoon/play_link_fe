'use client'

import React from 'react'
import { Button } from '@playlink/ui'

const Page = () => {
    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold mb-4">PlayLink — Customer</h1>
            <p className="text-gray-600 mb-6">Welcome to the customer app. Start building your booking experience here.</p>
            <div className="mt-4">
                <Button onClick={() => alert('Find Courts!')}>Find Courts</Button>
            </div>
        </main>
    )
}

export default Page
