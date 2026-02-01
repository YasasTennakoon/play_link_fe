# PlayLink Authentication Module

JWT-based authentication system with refresh token support for the PlayLink monorepo.

## Features

- ✅ JWT access & refresh tokens
- ✅ Automatic token refresh on expiration
- ✅ Request queuing during token refresh
- ✅ Protected routes
- ✅ Reusable auth components
- ✅ TypeScript support
- ✅ Next.js App Router compatible
- ✅ Tailwind CSS styling

## Quick Start

### 1. Wrap your app with AuthProvider

In your app's root layout or page:

```tsx
'use client'

import { AuthProvider } from '@playlink/auth'

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
```

### 2. Create a Login Page

Create `app/login/page.tsx`:

```tsx
'use client'

import { AuthProvider } from '@playlink/auth'
import Login from '@playlink/auth/pages/Login'

export default function LoginPage() {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  )
}
```

### 3. Protect Routes

```tsx
'use client'

import { ProtectedRoute, useAuth } from '@playlink/auth'

function DashboardContent() {
  const { user, logout } = useAuth()
  
  return (
    <div>
      <h1>Welcome, {user?.email}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}
```

## API Configuration

Set the API base URL in your `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

## Backend API Requirements

Your backend must implement these endpoints:

| Endpoint | Method | Request Body | Response |
|----------|--------|--------------|----------|
| `/auth/login` | POST | `{ email, password }` | `{ accessToken, user }` |
| `/auth/logout` | POST | - | - |
| `/auth/refresh-token` | POST | - | `{ accessToken }` (uses refresh cookie) |

### Expected Response Format

**Login/Register Response:**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "123",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

**Refresh Token Response:**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## Components

### Login
Pre-styled login form component.

```tsx
import Login from '@playlink/auth/pages/Login'

<Login />
```

### ProtectedRoute
Wrapper that redirects to `/login` if not authenticated.

```tsx
import { ProtectedRoute } from '@playlink/auth'

<ProtectedRoute>
  <YourProtectedContent />
</ProtectedRoute>
```

### useAuth Hook
Access auth state and methods.

```tsx
import { useAuth } from '@playlink/auth'

function MyComponent() {
  const { 
    user,           // Current user object
    isAuthenticated, // Boolean
    login,          // (email, password) => Promise<void>
    logout          // () => Promise<void>
  } = useAuth()
  
  // Use auth methods...
}
```

## Token Management

Tokens are stored in memory (not localStorage) for better security. The refresh token is sent via HTTP-only cookies from your backend.

### Token Refresh Flow

1. Request fails with 401
2. Interceptor catches error
3. Calls `/auth/refresh-token` endpoint
4. Receives new access token
5. Retries original request
6. Queues other failed requests and retries them

## Architecture

```
common/auth/
├── api/
│   ├── auth.api.ts      # Auth API methods
│   └── axios.ts         # Axios instance with interceptors
├── auth/
│   └── AuthContext.tsx  # Auth provider & context
├── hooks/
│   └── useAuth.ts       # useAuth hook
├── pages/
│   └── Login.tsx        # Login page component
├── routes/
│   └── ProtectedRoute.tsx
└── utils/
    └── tokenStorage.ts  # Token storage utilities
```

## Troubleshooting

### "useContext is not a function"
Make sure all files using React hooks have `'use client'` directive at the top.

### "address already in use"
Kill the existing process:
```bash
lsof -ti:3001 | xargs kill -9
```

### Login redirects not working
Ensure you're wrapping components that use `useAuth` with `AuthProvider`.

## Security Notes

- Access tokens are stored in memory (cleared on page refresh)
- Refresh tokens should be HTTP-only cookies (set by backend)
- All API calls automatically include the access token
- Token refresh happens automatically on 401 responses
