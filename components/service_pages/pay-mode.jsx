"use client"

import React, { useState } from 'react'
import Service from '../service'
import Image from 'next/image'

const PayMode = () => {
    const [toggle,setToggle] = useState(1)
    const [payServ,setPayServ] = useState('Orange Money')

    const toggleActive = (t)=>{
        setToggle(t)
    }

const validation = ()=>{
    const service = JSON.parse(localStorage.getItem('service'))
    const livraisonPrice = localStorage.getItem('livraison-price')

    console.log(service,livraisonPrice,payServ)
}

  return (
    <div className='pay_mode'>
        <div className='top'>
            <h4>Mode de payement</h4>
            <div>
                <div className={`pay-service ${toggle===1? "active":""}`} onClick={()=>{toggleActive(1),setPayServ('Orange Money')}}>
                    <Image
                    alt='pay_mode'
                    src={"/assets/images/orange-money.svg"}
                    width={60}
                    height={60}
                    />
                    <div>
                        <h4>Orange Money</h4>
                        <small>Payement securiser</small>
                    </div>
                </div>
                <div className={`pay-service ${toggle===2? "active":""}`} onClick={()=>{toggleActive(2),setPayServ('Airtel Money')}}>
                    <Image
                    alt='pay_mode'
                    src={"/assets/images/airtel-money.svg"}
                    width={60}
                    height={60}
                    />
                    <div>
                        <h4>Airtel Money</h4>
                        <small>Payement securiser</small>
                    </div>
                </div>
                <div className={`pay-service ${toggle===3? "active":""}`} onClick={()=>{toggleActive(3),setPayServ('M-Vola')}}>
                    <Image
                    alt='pay_mode'
                    src={"/assets/images/mvola.svg"}
                    width={60}
                    height={60}
                    />
                    <div>
                        <h4>M-Vola</h4>
                        <small>Payement securiser</small>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <h4>Verifier les informatons</h4>

                <div>
                    <h6>Document demander</h6>
                    <div>
                        <small>Renouvellement de CIN</small>
                        <span className="price">3000 AR</span>
                    </div>
                </div>

                <div>
                    <h6>Livraison</h6>
                    <div>
                        <small>Lot IB 4784/7884 Tanambao Zoara</small>
                        <span className="price">2000 AR</span>
                    </div>
                </div>

                <div>
                    <div>
                        <h6>Total</h6>
                        <span className="price">5000 AR</span>
                    </div>
                </div>
            </div>
            <div className="right">
                <h4>Passer au paiement</h4>
                <span>Télephone</span>
                <div>
                    <Image
                        alt='Mada-flag'
                        src={"/assets/images/flag.svg"}
                        width={40}
                        height={40}
                    />
                    <span>+261326603472</span>
                </div>
                <button onClick={validation}>Valider</button>
            </div>
        </div>

    </div>
  )
}

export default PayMode