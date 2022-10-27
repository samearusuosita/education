import React from 'react'
import Back from '../Commons/Back/Back'
import CourseCard from './CourseCard'
import OnlineCourses from './OnlineCourses'

const CoursesHome = () => {
  return (
    <>
      <Back title="Explore Courses"/>
      <CourseCard/>
      <OnlineCourses/>
    </>
  )
}

export default CoursesHome
