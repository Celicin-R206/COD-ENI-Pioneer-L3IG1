import React from 'react'
import Service from '../service'
import Image from 'next/image'

const PayMode = () => {
  return (
    <div className='pay_mode'>
        <div className='top'>
            <h4>Mode de payement</h4>
            <div>
                <div className="pay-service">
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
                <div className="pay-service">
                    <Image
                    alt='pay_mode'
                    src={"/assets/images/airtel-money.svg"}
                    width={60}
                    height={60}
                    />
                    <div>
                        <h4>Orange Money</h4>
                        <small>Payement securiser</small>
                    </div>
                </div>
                <div className="pay-service">
                    <Image
                    alt='pay_mode'
                    src={"/assets/images/mvola.svg"}
                    width={60}
                    height={60}
                    />
                    <div>
                        <h4>Orange Money</h4>
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
                    <h6>Document demander</h6>
                    <div>
                        <small>Renouvellement de CIN</small>
                        <span className="price">3000 AR</span>
                    </div>
                </div>

                <div>
                    <div>
                        <h6>Total</h6>
                        <span className="price">3000 AR</span>
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
                <button>Valider</button>
            </div>
        </div>

    </div>
  )
}

export default PayMode