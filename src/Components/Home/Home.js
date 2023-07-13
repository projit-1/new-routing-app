import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Tshirt from '../Tshirt/Tshirt'
import './Home.css'

export default function Home() {
  const tshirts = useLoaderData()
  console.log(tshirts)
  return (
    <div>
        <h1>Home</h1>
        <div className='singleTshirt'>
          {tshirts.map((tshirt)=>(<Tshirt 
          key={tshirt._id} 
          tshirt={tshirt}
          ></Tshirt>))}
        </div>
    </div>
  )
}
