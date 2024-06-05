import React from 'react'
import './Button.css'

const Button = ({icon, name, bgColor = '#ff3700', color = '#ffffffff'}) => {
  return (
    <a href="#" className="mainButton" style={{color: color, background: bgColor}}> {icon} {name}</a>
  )
}

export default Button