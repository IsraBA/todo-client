import React from 'react'

export default function Button({text, icon, func}) {
  return (
    <button onClick={func}>{text + icon}</button>
  )
}
