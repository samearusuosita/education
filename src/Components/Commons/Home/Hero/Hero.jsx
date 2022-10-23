import React from 'react';
import Title from '../../Title/Title';
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="container">
          <div className="row">
            <Title subtitle='WELCOME TO ACADEMIA' title="Best Online Education"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam numquam cumque doloremque commodi ducimus tenetur ipsum quisquam voluptate tempore fuga dolores nostrum blanditiis minima soluta, qui nesciunt expedita mollitia id.</p>
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
