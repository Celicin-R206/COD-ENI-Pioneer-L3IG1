import React from 'react'
import NavBar from './nav-bar/nav-bar'
import Hero from './hero/hero'
import Marquee from './marquee/marquee'
import './landing.css'
import Brand from './brand/brand'
import Product from './product/product'
import Features from './features/features'
import Partner from './partner/partner'
import Footer from './footer/footer'

const Landinpage = () => {
  return (
    <div className='landinpage'>
        <NavBar/>
        <Hero/>
        <Marquee/>
        <Brand/>
        <div className="vertical-separator"></div>
        <Product/>
        <div className="vertical-separator"></div>
        <Features/>
        <Partner/>
        <Footer/>
    </div>
  )
}

export default Landinpage