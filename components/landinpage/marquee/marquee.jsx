import Image from 'next/image'
import React from 'react'
import './marquee.css'

const Marquee = () => {
  return (
    <div className='marquee'>
        <div>
            <Image
            alt='mq-star'
            src={"/assets/images/mq-star.svg"}
            width={20}
            height={20}
            />
            <span>Ecole nationale de l'informatique</span>
        </div>
        <div>
            <Image
            alt='mq-star'
            src={"/assets/images/mq-star.svg"}
            width={20}
            height={20}
            />
            <span>Université de Fianarantsoa</span>
        </div>
        <div>
            <Image
            alt='mq-star'
            src={"/assets/images/mq-star.svg"}
            width={20}
            height={20}
            />
            <span>Ecole nationale de l'informatique</span>
        </div>
        <div>
            <Image
            alt='mq-star'
            src={"/assets/images/mq-star.svg"}
            width={20}
            height={20}
            />
            <span>Ecole nationale de l'informatique</span>
        </div>
    </div>
  )
}

export default Marquee