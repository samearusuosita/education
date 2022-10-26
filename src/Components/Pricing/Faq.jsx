import React from 'react'
import Title from '../Commons/Title/Title'
import { faq } from '../dummyData'

const Faq = () => {


  const [click, setClick] = React.useState(false)

  const toggle = (index) => {
    if (click === index) {
      return setClick(null)
    }
    setClick(index)
  }

  return (
    <>
      <Title subtitle="FAQS" title="Frequently Asked Questions"/>
      <section className='faq'>
        <div className="container">
          {faq.map((val, index) =>(
              <div className="box">
                <button className='accordion' onClick={() => toggle(index)} key={index}>
                  <h1>{val.title}</h1>
                  <span>{click === index? <i className='fa facheron-down'></i> : <i className='fa facheron-right'></i>}</span>
                </button>
               {click === index ? (
                 <div className="text">
                 <p>{val.desc}</p>
               </div>
               ) : null}
              </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Faq
