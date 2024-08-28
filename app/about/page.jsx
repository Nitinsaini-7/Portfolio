import React from 'react'
import { StickyNavbar } from '../components/navbar'
import About from './about'
import Footer from '../components/footer'

const AboutPage = () => {
  return (
    <div className='mt-10'>
        <StickyNavbar/>
        <About/>
        <Footer/>
    </div>
  )
}

export default AboutPage