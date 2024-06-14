import React from 'react'
import Service from '../service'
import Image from 'next/image'

const Livraison = () => {
  return (
    <div className='livraison_mode'>
        <div className="left">
            <Service/>
            <h4>Mode de livraison</h4>
            <div className="bottom">
                <div className="livraison-mode-wrapper">
                    <div className="livraison active">
                        <div className="top">
                            <Image
                                alt='paositra'
                                src={"/assets/images/paositra-money.svg"}
                                width={70}
                                height={40}
                            />
                            <div>
                                <span>3000 AR</span>
                            </div>
                        </div>
                        <p>Livraison rapide 1 à 2 jours</p>
                    </div>
                    <div className="livraison">
                        <div className="top">
                            <Image
                                alt='paositra'
                                src={"/assets/images/paositra-money.svg"}
                                width={70}
                                height={40}
                            />
                            <div>
                                <span>3000 AR</span>
                            </div>
                        </div>
                        <p>Livraison moyenne 2 à 3 jours</p>
                    </div>
                    <div className="livraison">
                        <div className="top">
                            <Image
                                alt='paositra'
                                src={"/assets/images/paositra-money.svg"}
                                width={70}
                                height={40}
                            />
                            <div>
                                <span>3000 AR</span>
                            </div>
                        </div>
                        <p>Livraison rapide 1 à 2 jours</p>
                    </div>
                </div>
                <button>Validé</button>
            </div>
        </div>
        <div className="right">
            <div className="top">
                <span>Type</span>
                <select name="type-metode" id="">
                    <option value="nouveau">Nouveau</option>
                    <option value="duplicata">Duplicata</option>
                    <option value="renouvellement">Renouvellement</option>
                </select>
            </div>
            <div className="bottom">
                <h4>Vos informaton de livraison</h4>
                <div className="inof-perso">
                    <label htmlFor="">Adresse actuelle</label>
                    <small>Lot IB 365/1555 Tanambao Fianara</small>
                </div>

                <div className="inof-perso">
                    <label htmlFor="">Télephone</label>
                    <small>+26103256899</small>
                </div>

                <div className="inof-perso">
                    <label htmlFor="">N°CIN</label>
                    <small>401123456789</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Livraison