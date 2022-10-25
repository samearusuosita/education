import React from 'react'
import AboutCard from '../../About/AboutCard'
import HAbout from './Hero/HAbout'
import Hero from './Hero/Hero'
import Test from './Testimonials/Test'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutCard/>
      <HAbout/>
      <Test/>
    </div>
  )
}

export default Home
