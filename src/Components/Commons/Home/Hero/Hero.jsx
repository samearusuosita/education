import React from 'react';
import Title from '../../Title/Title';
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="container">
          <div className="row">
            <Title subtitle='WELCOME TO THE FIRST BEST FRONTEND' title="No Video Online Training"/>
            <p>Get an internship opportunity after you complete all 8 courses. Learn by building projects every week. You will only learn what you need to be job read and start earning.</p>
            <div className="button">
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSES <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>    
    </>
  )
}

export default Hero
