import React, { createContext } from 'react'

import Uncle from '../Uncle/Uncle'
import Unt from '../Unt/Unt'
import './Grandpa.css'
import Father from '../Father/Father';

 export const RingContext =createContext('Gold Ring')

export default function Grandpa() {
  const House = "Grandpa's House";
  const Ring = "Diamond Ring";
  return (
   <RingContext.Provider value='GOLD RING'>
     <div>
      <h2>Grandpa</h2>
      <h3>House: {House}</h3>
      <h3>Ring: {Ring}</h3>
      <section className='Flex'>
       <Father House ={House} Ring ={Ring}></Father>
        <Uncle House ={House}></Uncle>
        <Unt House ={House} ></Unt>
      </section>
    </div>
   </RingContext.Provider>
  )
}
