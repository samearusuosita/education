import React from 'react'
import AboutCard from '../../About/AboutCard'
import HBlog from '../../Blog/HBlog'
import HPrice from '../../Pricing/HPrice'
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
      <HBlog/>
      <HPrice/>
    </div>
  )
}

export default Home
