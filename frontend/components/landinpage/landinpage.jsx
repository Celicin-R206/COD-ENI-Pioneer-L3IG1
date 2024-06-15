"use client"
import React, { useEffect } from 'react'
import NavBar from './nav-bar/nav-bar'
import Hero from './hero/hero'
import Marquee from './marquee/marquee'
import './landing.css'
import Brand from './brand/brand'
import Product from './product/product'
import Features from './features/features'
import Partner from './partner/partner'
import Footer from './footer/footer'
import OverlayMenu from './overlay-menu/overlay'
import Lenis from 'lenis'

const Landinpage = () => {
  const lenis = new Lenis()
  useEffect(()=>{
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  },[])
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
        <OverlayMenu/>
    </div>
  )
}

export default Landinpage