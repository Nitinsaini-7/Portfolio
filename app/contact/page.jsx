import React from 'react'
import { StickyNavbar } from '../components/navbar'
import Contact from './contact'
import Footer from '../components/footer'

const ContactPage = () => {
  return (
    <div className='mt-10'>
        <StickyNavbar/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default ContactPage