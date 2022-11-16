import React from 'react';
import Back from '../Commons/Back/Back';
import PriceCard from './PriceCard';
import "./Price.css";
import Faq from './Faq';

const Price = () => {
  return (
    <div>
      <Back title="Chose the Right Plan"/>
      <section className='price padding'>
        <div className="container gridB">
            <PriceCard/>
            
        </div>
      </section>
      <Faq/>
    </div>
  )
}

export default Price
