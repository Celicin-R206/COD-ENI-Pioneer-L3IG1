"use client"

import React, { useEffect, useState } from 'react'

import gsap from 'gsap'
// import './menu.css'

import SplitText from '../../../lib/Split3.min.js'

const MenuBtn = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const [menuBtn,setMenuBtn] = useState(
        <div className="cta-menu openMenu">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.726 25.119">
                    <path id="icons8_Menu" d="M3.786,5a1.794,1.794,0,0,0,0,3.589H35.939a1.794,1.794,0,0,0,0-3.589Zm0,10.765a1.794,1.794,0,0,0,0,3.589H35.939a1.794,1.794,0,0,0,0-3.589Zm0,10.765a1.794,1.794,0,0,0,0,3.589H35.939a1.794,1.794,0,0,0,0-3.589Z" transform="translate(-2 -5)" fill="#000"/>
                </svg>
            </div>
    )
    const [closeMenu,setCloseMenu] = useState(null)


    useEffect(()=>{

        const {innerWidth} = window
        const width = innerWidth

        const closeMenuF =()=>{
            setIsMenuOpen(false)
            console.log("close-menu")
            gsap.to(".overlay-svg path",{
                duration:1.1,
                attr: {
                  d: `M0 0 Q${width/2} 0, ${width} 0`
                },
                ease:"power2"})
            
            
            gsap.to(".overlay-menu",{duration:0.5,yPercent:0, ease:"power2"})
            gsap.to(".overlay-menu .content",{duration:0.5,opacity:0, ease:"power2.inOut"})
            gsap.to(".overlay-text div",{duration:1,yPercent:0, ease:"power2.inOut"})
            gsap.to(".info-menu > div > div",{duration:1,opacity:0,yPercent:100, ease:"power2.inOut"})
            gsap.to(".overlay-blob",{duration:0.3,opacity:0, ease:"power2"})
            gsap.to(".cta-menu",{duration:0.5,borderColor:"#000", ease:"power2"})

        //     // gsap.to(overlayTexts,{
        //     //     y:48,
        //     //     opacity:0,
        //     //     stagger:0.02,
        //     //     ease:"elastic.out(0.5, 0.4)",
        //     //  }) 
            
        }

        function animateMenu (){
    //         // const split1 = new SplitText('#id1',{
    //         //     type: "chars",
    //         //     charsClass: "lineChildren"
    //         // })
        
    //         // const split2 = new SplitText('#id2',{
    //         //     type: "chars",
    //         //     charsClass: "lineChildren"
    //         // })
        
    //         // const split3 = new SplitText('#id3',{
    //         //     type: "chars",
    //         //     charsClass: "lineChildren"
    //         // })
        
    //         // const split4 = new SplitText('#id4',{
    //         //     type: "chars",
    //         //     charsClass: "lineChildren"
    //         // })

    //         // const split5 = new SplitText('#id5',{
    //         //     type: "chars",
    //         //     charsClass: "lineChildren"
    //         // })

            
    //         // gsap.to(split1.chars,{
    //         //     delay:0.3,
    //         //     x:0,
    //         //     opacity:1,
    //         //     stagger:0.05,
    //         //     duration:0.7,
    //         //     ease:"elastic.out(0.5, 0.4)",
    //         //  })
    //         // gsap.to(split2.chars,{
    //         //     delay:0.4,
    //         //     x:0,
    //         //     opacity:1,
    //         //     stagger:0.05,
    //         //     duration:0.7,
    //         //     ease:"elastic.out(0.5, 0.4)",
    //         // })
    //         // gsap.to(split3.chars,{
    //         //     delay:0.5,
    //         //     x:0,
    //         //     opacity:1,
    //         //     stagger:0.05,
    //         //     duration:0.7,
    //         //     ease:"elastic.out(0.5, 0.4)",
    //         // })
    //         // gsap.to(split4.chars,{
    //         //     delay:0.6,
    //         //     x:0,
    //         //     opacity:1,
    //         //     stagger:0.05,
    //         //     duration:0.7,
    //         //     ease:"elastic.out(0.5, 0.4)",
    //         // })

    //         // gsap.to(split5.chars,{
    //         //     delay:0.7,
    //         //     x:0,
    //         //     opacity:1,
    //         //     stagger:0.05,
    //         //     duration:0.7,
    //         //     ease:"elastic.out(0.5, 0.4)",
                
    //         // })
            
    //         // gsap.to(overlayTexts,{
    //         //     delay:0.6,
    //         //     y:0,
    //         //     opacity:1,
    //         //     stagger:0.02,
    //         //     duration:1,
    //         //     ease:"elastic.out(0.5, 0.4)",
    //         //  }) 
            console.log("animate-menu")
            gsap.to(".overlay-svg path",{
                duration:1,
                attr: {
                  d: `M0 0 Q${width/2} 450, ${width} 0`
                },
                ease:"power2"})
            gsap.to(".overlay-menu",{duration:1,yPercent:100, ease:"power2"})
            gsap.to(".overlay-menu .content",{duration:1,opacity:1, ease:"power2.inOut"})
            gsap.to(".overlay-blob",{delay:1,duration:1,opacity:1, ease:"power2"})
            gsap.to(".overlay-text div",{delay:0.5,duration:1,yPercent:-100, ease:"power2.inOut",stagger:0.2})
            gsap.to(".info-menu.info-menu1 > div > div",{delay:0.5,duration:1,opacity:1,yPercent:-100, ease:"power2.inOut",stagger:0.2})
            gsap.to(".info-menu.info-menu2 > div > div",{delay:0.5,duration:1,opacity:1,yPercent:-100, ease:"power2.inOut",stagger:0.2})
            gsap.to(".info-menu.info-menu3 > div > div",{delay:0.5,duration:1,opacity:1,yPercent:-100, ease:"power2.inOut",stagger:0.2})
            gsap.to(".cta-menu",{duration:0.5,borderColor:"#004491", ease:"power2"})

            setCloseMenu( prev=> <div className="cta-menu close" onClick={closeMenuF}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96">
             <path d="M4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312L10.585938 12L4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031L12 13.414062L18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969L13.414062 12L19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688L12 10.585938L5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" fill="#004491"/>
            </svg>
        </div>)
            setIsMenuOpen(true)

           
        }
    
    
        

        

        setMenuBtn(
            <div className="cta-menu openMenu" onClick={animateMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.726 25.119">
                    <path id="icons8_Menu" d="M3.786,5a1.794,1.794,0,0,0,0,3.589H35.939a1.794,1.794,0,0,0,0-3.589Zm0,10.765a1.794,1.794,0,0,0,0,3.589H35.939a1.794,1.794,0,0,0,0-3.589Zm0,10.765a1.794,1.794,0,0,0,0,3.589H35.939a1.794,1.794,0,0,0,0-3.589Z" transform="translate(-2 -5)" fill="#000"/>
                </svg>
            </div>
        )
    },[])

    if(isMenuOpen) return closeMenu
    
  return (
    <>  
        {menuBtn}
    </>
  )
}

export default MenuBtn