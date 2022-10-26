import React from 'react'
import { price } from '../dummyData'

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className="items shadow">
            <h4>{val.name}</h4>
            <h1>
                <span>$</span>
                {val.price}
            </h1>
            <p>{val.desc}</p>
            <button className='outline-btn'>GET START</button>
        </div>
      ))}
    </>
  )
}

export default PriceCard
