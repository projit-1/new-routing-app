import React from 'react'
import './Uncle.css'

export default function Uncle({House}) {
  return (
    <div className='unclecss'>
        <h2>Uncle</h2>
        <h3>House: {House}</h3>
    </div>
  )
}
