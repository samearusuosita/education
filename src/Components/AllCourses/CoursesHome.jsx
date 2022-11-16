import React from 'react'
import Back from '../Commons/Back/Back'
import Title from '../Commons/Title/Title'
import CourseCard from './CourseCard'
import OnlineCourses from './OnlineCourses'

const CoursesHome = () => {
  return (
    <>
      <Back title="Explore Courses"/>
      <Title subtitle="LATEST COURSES" title="Explore our Trediing Courses"/>
      <CourseCard/>
      <OnlineCourses/>
    </>
  )
}

export default CoursesHome
