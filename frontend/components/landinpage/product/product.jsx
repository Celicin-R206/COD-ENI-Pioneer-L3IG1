import Image from 'next/image'
import React from 'react'
import './product.css'

const Product = () => {
  return (
    <div className='containers product'>
        <div className="product-wrapper">
          <div className="left">
            <Image 
            alt='product'
            src={"/assets/images/product.svg"}
            width={40}
            height={50}
            />
            <span>03 / Abstract-contest</span>
          </div>
          <div className="middle">
            <span className='blue'>. Product photography -</span>
            <h2>Capturing the perfect frame for your product</h2>
            <p>Recevez des confirmations par e-mail et des rappels pour les paiements des frais de scolarité. Recevez des confirmations par e-mail</p>
            <button className='btn primary'> <div>Commencer maintenant</div> </button>
          </div>
          <div className="right">
            <Image 
            alt='product'
            src={"/assets/images/product.svg"}
            width={40}
            height={50}
            />
            <span>03 / Abstract-contest</span>
          </div>
        </div>
    </div>
  )
}

export default Product