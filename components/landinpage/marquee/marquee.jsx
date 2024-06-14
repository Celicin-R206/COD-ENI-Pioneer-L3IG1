import Image from 'next/image'
import React from 'react'
import MarqueeWrapper from "@/components/magicui/marquee";
import './marquee.css'

const Marquee = () => {
  return (
    <div className='marquee'>
        <MarqueeWrapper className="[--duration:20s]">
        <div className="content relative overflow-hidden p-4">
            <Image
            alt='mq-star'
            src={"/assets/images/mq-star.svg"}
            width={20}
            height={20}
            />
            <span>Ecole nationale de l'informatique</span>
        </div>
        <div className="content relative overflow-hidden p-4">
            <Image
            alt='mq-star'
            src={"/assets/images/mq-star.svg"}
            width={20}
            height={20}
            />
            <span>Université de Fianarantsoa</span>
        </div>
        <div className="content relative overflow-hidden p-4">
            <Image
            alt='mq-star'
            src={"/assets/images/mq-star.svg"}
            width={20}
            height={20}
            />
            <span>Ecole nationale de l'informatique</span>
        </div>
        <div className="content relative overflow-hidden p-4">
            <Image
            alt='mq-star'
            src={"/assets/images/mq-star.svg"}
            width={20}
            height={20}
            />
            <span>Ecole nationale de l'informatique</span>
        </div>
        </MarqueeWrapper>    
    </div>
  )
}

export default Marquee