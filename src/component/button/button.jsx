import React from 'react'
import './button.styles.scss'

const Button = ({ className, children}) => (
    <button className={className}>
        {children}
    </button>
)

export default Button;