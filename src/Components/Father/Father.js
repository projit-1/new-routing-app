import React from 'react'
import Mayself from '../Myself/Mayself'
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'
import './Father.css'

export default function Father({House, Ring}) {
  return (
    <div className='fathercss'>
      <h2>Father</h2>
      <h3>House: {House}</h3>
     <Mayself House= {House} Ring ={Ring}></Mayself>
      <Brother House= {House}></Brother>
      <Sister House= {House}></Sister>
    </div>
  )
}
