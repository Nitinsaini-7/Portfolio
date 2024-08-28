import React from 'react'
import { StickyNavbar } from '../components/navbar'
import Skills from './skills'
import Footer from '../components/footer'

const SkillsPage = () => {
  return (
    <div className='mt-10'>
        <StickyNavbar/>
        <Skills/>
        <Footer/>
    </div>
  )
}

export default SkillsPage