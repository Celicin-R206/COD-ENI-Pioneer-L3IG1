"use client"

import React, { useEffect, useState } from 'react'
import Service from '../service'
import Image from 'next/image'
import { useParams } from "next/navigation";
import { useService } from '@/lib/swr/service';
import { useRouter } from 'next/navigation';

const Livraison = () => {

  const [toggle,setToggle] = useState(1)
  const params = useParams()
  const router = useRouter()
  const {id} = params
  const {service} = useService(id)

  useEffect(()=>{
    localStorage.setItem('service',JSON.stringify(service?.data))
    localStorage.setItem('livraison-price',3000)
  },[service])
  
  const toggleActive = (t,price)=>{
    localStorage.setItem('livraison-price',price)
    setToggle(t)
  }

  return (
    <div className='livraison_mode'>
        <div className="left">
            <Service data={service?.data} livraison={true}/>
            <h4>Mode de livraison</h4>
            <div className="bottom">
                <div className="livraison-mode-wrapper">
                    <div className={`livraison ${toggle===1? "active":""}`} onClick={()=>toggleActive(1,3000)}>
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
                    <div className={`livraison ${toggle===2? "active":""}`} onClick={()=>toggleActive(2,1500)}>
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
                    <div className={`livraison ${toggle===3? "active":""}`} onClick={()=>toggleActive(3,0)}>
                        <div className="top">
                            <Image
                                alt='paositra'
                                src={"/assets/images/paositra-money.svg"}
                                width={70}
                                height={40}
                            />
                            <div>
                                <span>0 AR</span>
                            </div>
                        </div>
                        <p>Livraison rapide 10 à 15 jours</p>
                    </div>
                </div>
                <button onClick={()=>router.push(`/main/service/${id}/paiement`)}>Validé</button>
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