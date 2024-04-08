import { gigService } from "@/services/gig.service.local"
import { useEffect, useState } from "react"
import { useParams } from "react-router"



export function Payment() {
    const { gigId } = useParams()
    const [gig, setGig] = useState(null)


    useEffect(() => {
        loadGig()
    }, [gigId])

    async function loadGig() {
        try {
            const gig = await gigService.getById(gigId)
            console.log('gig:', gig)
            setGig(gig)
        } catch (err) {
            console.log('Had issues in gig details', err)
            showErrorMsg('Cannot load gig')
            navigate('/explore')
        }
    }

    if (!gig) return <h1>Loading</h1>
    return (

        <section className="payment-container">

            <section className="payment-option">
                <span className="title">Payment Options</span>

                <form action="">

                    <div className="inputBox">
                        <label htmlFor="cardNum">
                            Card number
                        </label>
                        <input type="text" id="cardNum"
                            placeholder="1111-2222-3333-4444"
                            maxLength="19" />
                    </div>

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
                        <img className="gig-img" src={gig.imgUrls[0]} alt="owner image" />
                        <span className="gig-title">{gig.title}</span>
                    </div>

                    <div className="line"></div>

                    <div className="price">
                        <span>Basic Package</span>
                        <span className="price-num">{gig.price}$</span>

                        {/* <p>save tp to 20% with subscribe to save</p> */}
                    </div>

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
                        <span className="price">{gig.price + 5 + 7}$</span>
                    </div>
                    <div className="time">
                        <span className="title">Total delivery time</span>
                        <span className="price">{gig.daysToMake} <span>{(gig.daysToMake > 1) ? 'days' : 'day' } </span></span>
                    </div>

                    <section className="pay">
                        <button className="confirm-btn">Confirm & Pay</button>
                        <span>SLL Secure Payment</span>
                        <span>you will be charged {gig.price + 5 + 7}$ total amount</span>
                    </section>
                </section>

            </section>
        </section>

    )
}