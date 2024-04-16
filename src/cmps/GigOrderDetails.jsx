import { useState } from "react";
import { Link } from "react-router-dom";

export function GigOrderDetails({gig}){
    const [isPackage, setPackage] = useState('basic')
    const pack =  gig.packages[isPackage]
    
return <section className="order-details">
                <div className="btns">
                    <button onClick={()=>setPackage('basic')} className={`btn-basic ${(isPackage === 'basic')? 'active' : ''}`}>Basic</button>
                    <button onClick={()=>setPackage('standard')} className={`btn-standard ${(isPackage === 'standard')? 'active' : ''}`}>Standard</button>
                    <button onClick={()=>setPackage('premium')} className={`btn-premium ${(isPackage === 'premium')? 'active' : ''}`}>Premium</button>
                </div>

                <main className="main-details">
                    <div className="price">
                        <span>{isPackage.charAt(0).toUpperCase() + isPackage.slice(1)} Package</span>
                        <span className="price-num">{pack.price}$</span>

                    </div>

                    <div className="desc">Two unique High quality design concepts with HQ jpg and transparent png.</div>

                    <div className="delivery-details">

                        <span className="clock"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg></span>
                        <span>{pack.daysToMake} Days delivery</span>
                    </div>

                    {pack.whatIncluded && <article className="whats-included">
                        <details>
                            <summary>What's included</summary>
                            <ul className="clean-list">
                                <li className="fa vi"><span className={(pack.whatIncluded.ConceptIncluded) ? 'fa include' : 'fa not-include'}></span>  1 Concept Included </li>
                                <li className="fa vi"><span className={(pack.whatIncluded.IncludeSourceFile) ? 'fa include' : 'fa not-include'}></span> Include Source File </li>
                                <li className="fa vi"><span className={(pack.whatIncluded.StationeryDesigns) ? 'fa include' : 'fa not-include'}></span> Stationery Designs</li>
                            </ul>
                        </details>
                    </article>}
                    <Link to={`/payment/${gig._id}`}><div className="continue-btn"><span className="continue">Continue</span> <span className="fa arrow"></span></div></Link>
                    <div className="Compare-btn"><span className="continue">Compare packages</span></div>
                </main>

            </section>
}