"use client"
import React, { useEffect, useState } from 'react'

const OverlayMenu = () => {

  const [width,setWidth] = useState(null)

  useEffect(()=>{
    const {innerWidth} = window
    setWidth(innerWidth)
  },[])

  return (
    <div className='overlay-menu'>
       <div className="content">
          <svg className='overlay-svg'>
            <path d={`M0 0 Q${width/2} 0, ${width} 0`}></path>
        </svg>
       </div> 
    </div>
  )
}

export default OverlayMenu