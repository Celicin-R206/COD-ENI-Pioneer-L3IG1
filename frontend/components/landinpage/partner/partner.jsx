import Image from 'next/image'
import React from 'react'
import "./partner.css"

const Partner = () => {
  return (
    <div className='containers partner'>
        <span className="blue">Partenaires...</span>
        <div className='partner-wrapper'>
            <Image
            alt='partenaire'
            src={"/assets/images/partenaire1.svg"}
            width={30}
            height={30}
            />
            <Image
            alt='partenaire'
            src={"/assets/images/partenaire2.svg"}
            width={30}
            height={30}
            />
            <Image
            alt='partenaire'
            src={"/assets/images/partenaire3.svg"}
            width={30}
            height={30}
            />
            <Image
            alt='partenaire'
            src={"/assets/images/partenaire4.svg"}
            width={30}
            height={30}
            />
            <Image
            alt='partenaire'
            src={"/assets/images/partenaire5.svg"}
            width={30}
            height={30}
            />
            <Image
            alt='partenaire'
            src={"/assets/images/partenaire6.svg"}
            width={30}
            height={30}
            />
            <Image
            alt='partenaire'
            src={"/assets/images/partenaire7.svg"}
            width={30}
            height={30}
            />
        </div>
    </div>
  )
}

export default Partner