import React, { useContext } from 'react'
import './Special.css'
import { RingContext } from '../Grandpa/Grandpa'

export default function Special({House,Ring}) {

  const goldring = useContext(RingContext)

  return (
    <div className='specialcss'>
        <h2>Special</h2>
        <h3>House: {House}</h3>
        <h3>Ring: {Ring}</h3>
        <h3>Gold Ring: {goldring}</h3>
    </div>
  )
}
