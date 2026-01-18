'use client'

import React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'ghost'
}

export const Button = ({ children, variant = 'primary', ...rest }: ButtonProps) => {
    const style = {
        padding: '8px 12px',
        borderRadius: 6,
        border: 'none',
        background: variant === 'primary' ? '#0369a1' : 'transparent',
        color: variant === 'primary' ? '#fff' : '#0369a1'
    }
    return (
        <button style={style} {...rest}>{children}</button>
    )
}

export default Button
