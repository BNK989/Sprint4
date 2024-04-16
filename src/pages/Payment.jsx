import { showErrorMsg } from "@/services/event-bus.service"
import { gigService } from "@/services/gig.service"
import { addOrder } from "@/store/actions/order.actions"

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"

export function Payment() {
    const { gigId } = useParams()
    const [gig, setGig] = useState(null)
    const user = useSelector(storeState => storeState.userModule.user)
    const navigate = useNavigate()

    useEffect(() => {
        loadGig()
    }, [gigId])

    async function loadGig() {
        try {
            const gig = await gigService.getById(gigId)
            setGig(gig)
        } catch (err) {
            showErrorMsg('Cannot load gig')
            navigate('/explore')
        }
    }

    async function onConfirm() {
        try {
            const order = await addOrder(gigId)
            navigate('/')
        } catch (err) {
            showErrorMsg('Cannot confirm order')

        }
    }

    if (!gig) return <h1>Loading</h1>
    return (

        <section className="payment-container">

            <section className="payment-option">
                <span className="title">Payment Option</span>

                <form >

                    <div className="inputBox">
                        <label htmlFor="cardNum">
                            Card number
                        </label>
                        <input type="text" id="cardNum"
                            placeholder="1111-2222-3333-4444"
                            maxLength="19" />
                    </div>
                    <div className="datas">

                        <div className="inputBox">
                            <label htmlFor="">Expiration date</label>
                            <input type="text" id="inputBox"
                                placeholder="00/00"
                                maxLength="5" />
                        </div>

                        <div className="inputBox">
                            <label
                            // htmlFor="cvv"
                            >Security code</label>
                            <input type="text" id="cvv"
                                placeholder="123"
                                maxLength="3" />
                        </div>
                    </div>

                    <div className="inputBox">
                        <label htmlFor="cardhold-name">
                            cardholder's name
                        </label>
                        <input type="text" id="cardhold-name"
                            placeholder=""
                            maxLength="3"
                        />
                    </div>
                </form>

            </section>

            <section className="order-info">

                <section className="info">
                    <div className="gig-mini-info">
                        <img className="gig-img" src={gig.imgUrls[0]} alt="gig image" />
                        <span className="gig-title">{gig.title}</span>
                    </div>

                    <div className="line"></div>

                    <div className="price">
                        <span>Package includes</span>
                        <span className="price-num">{gig.packages.standard.price}$</span>


                        {/* <p>save tp to 20% with subscribe to save</p> */}
                    </div>
                    <article className="whats-included">
                        {/* <details>
                            <summary>What's included</summary> */}
                        <ul className="clean-list">
                            <li className="fa vi"><span className={(gig.packages.standard.whatIncluded.ConceptIncluded) ? 'fa include' : 'fa not-include'}></span>  1 Concept Included </li>
                            <li className="fa vi"><span className={(gig.packages.standard.whatIncluded.IncludeSourceFile) ? 'fa include' : 'fa not-include'}></span> Include Source File </li>
                            <li className="fa vi"><span className={(gig.packages.standard.whatIncluded.StationeryDesigns) ? 'fa include' : 'fa not-include'}></span> Stationery Designs</li>
                        </ul>
                        {/* </details> */}
                    </article>
                    {gig.whatIncluded && <article className="whats-included">
                        <div className=" vi"><span className={(gig.whatIncluded.ConceptIncluded) ? 'fa include' : 'fa not-include'}></span>  1 Concept Included </div>
                        <div className=" vi"><span className={(gig.whatIncluded.IncludeSourceFile) ? 'fa include' : 'fa not-include'}></span> Include Source File </div>
                        <div className=" vi"><span className={(gig.whatIncluded.StationeryDesigns) ? 'fa include' : 'fa not-include'}></span> Stationery Designs</div>
                    </article>}

                </section>

                <section className="order">
                    <div className="service-fee">
                        <span className="title">Service fee</span>
                        <span className="price">5$</span>
                    </div>
                    <div className="vat">
                        <span className="title">VAT</span>
                        <span className="price">7$</span>
                    </div>

                    <i className="line12"></i>

                    <div className="total">
                        <span className="title">Total</span>
                        <span className="price">{gig.packages.standard.price + 5 + 7}$</span>
                    </div>
                    <div className="time">
                        <span className="title">Total delivery time</span>
                        <span className="price">{gig.packages.standard.daysToMake} <span>{(gig.daysToMake > 1) ? 'days' : 'day'} </span></span>
                    </div>

                    <section className="pay">
                        <button className="confirm-btn" onClick={onConfirm}>Confirm & Pay</button>
                        <span>SLL Secure Payment</span>
                        <span>you will be charged {gig.packages.standard.price + 5 + 7}$ total amount</span>
                    </section>
                </section>

            </section>
        </section>

    )
}