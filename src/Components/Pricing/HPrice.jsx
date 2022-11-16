import React from 'react'
import Title from '../Commons/Title/Title'
import PriceCard from './PriceCard'

const HPrice = () => {
  return (
    <>
      <section className='price padding'>
        <Title subtitle="Our Pricing" title="Pricing & Package"/>
          <div className="price container gridB">
            <PriceCard/>
          </div>
        </section>
    </>
  )
}

export default HPrice
