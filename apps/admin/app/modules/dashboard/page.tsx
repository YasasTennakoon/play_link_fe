'use client'

import React from 'react'

const DashboardPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
            <p className="text-gray-600 mb-8">Platform overview and analytics.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Venues</h3>
                    <p className="text-3xl font-bold text-blue-600">0</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Bookings</h3>
                    <p className="text-3xl font-bold text-green-600">0</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Users</h3>
                    <p className="text-3xl font-bold text-purple-600">0</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage