import React from 'react'
import './Tshir.css'

export default function Tshirt({tshirt}) {
    const {_id,name,picture,price} = tshirt
  return (
    <div className='Tshirt'>
      <img className='t-image' src={picture} alt={name} />
        <h2>{name}</h2>
        <h4> Price: $ {price}</h4>
    </div>
  )
}
