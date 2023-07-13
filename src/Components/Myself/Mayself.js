import React from 'react'
import Special from '../Special/Special'
import './Myself.css'

export default function Mayself({House,Ring}) {
  return (
    <div className='myselfcss'>
        <h2>Mayself</h2>
        <h3>House: {House}</h3>
        <Special House= {House} Ring ={Ring}></Special>
    </div>
  )
}
