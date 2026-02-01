'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@common/auth/hooks/useAuth'

const Navigation = () => {
    const pathname = usePathname()
    const { user, logout } = useAuth()

    const handleLogout = async () => {
        await logout()
    }

    const navItems = [
        {
            name: 'Dashboard',
            href: '/modules/dashboard',
            icon: '📊'
        },
        {
            name: 'Venues',
            href: '/modules/venues',
            icon: '🏟️'
        }
    ]

    return (
        <div className="bg-white shadow-sm border-r border-gray-200 w-64 min-h-screen">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
                <h1 className="text-xl font-bold text-gray-900">PlayLink Admin</h1>
                {user && (
                    <p className="text-sm text-gray-600 mt-1">
                        {user.email || user.userName}
                    </p>
                )}
            </div>

            {/* Navigation Links */}
            <nav className="p-4">
                <ul className="space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                {/* Logout Button */}
                <div className="absolute bottom-6 left-4 right-4">
                    <button
                        onClick={handleLogout}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-700 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors border border-red-200"
                    >
                        <span>🚪</span>
                        Logout
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navigation