import React from 'react';
import { testimonal } from '../../../dummyData';
import Title from '../../Title/Title';
import "./Test.css";

const Test = () => {
  return (
    <>
      <section className='testimonial padding'>
        <div className="container">
            <Title subtitle="Testimonial" title="Our Successful Students"/>

            <div className="content grid2">
                {testimonal.map((val) =>(
                    <div className="items shadow">
                        <div className="box flex">
                            <div className="img">
                                <img src={val.cover} alt="" />
                                <i className='fa fa-quote-left icon'></i>
                            </div>
                            <div className="name">
                                <h2>{val.name}</h2>
                                <span>{val.post}</span>
                            </div>
                        </div>
                        <p>{val.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default Test
