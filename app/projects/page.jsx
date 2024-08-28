import React from 'react'
import { StickyNavbar } from '../components/navbar'
import Project from './project'
import Footer from '../components/footer'

const ProjectsPage = () => {
  return (
    <div className='mt-10'>
        <StickyNavbar/>
        <Project/>
        <Footer/>
    </div>
  )
}

export default ProjectsPage