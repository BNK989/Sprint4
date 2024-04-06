import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { gigService } from "../services/gig.service.local";


export function GigDetails() {
    const { gigId } = useParams()
    const navigate = useNavigate()
    const [gig, setGig] = useState(null)

    console.log('gigId:', gigId)

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
        <section className="main-details-container">


            <section className="gig-details">
                <h1 className="gig-title">{gig.title}</h1>

                <div className="gig-user">
                    <img src={gig.owner.imgUrl} alt="" />

                    <div className="user-details">
                        <p>{gig.owner.fullname}</p>

                        <div className="user-rate">
                            <span className="fa star"></span>
                            <span>{gig.owner.rate} (1k)</span>
                        </div>
                    </div>
                </div>

                <img className="main-img" src={gig.imgUrls} alt="" />

                <section className="about-this-gig">
                    <p>About this gig</p>
                    {/* <pre>{gig.description}</pre> */}
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Consequuntur enim, officia soluta accusantium quaerat
                    minima cum corporis consectetur vero odit, et
                    delectus ipsa recusandae
                    provident dolor maxime eius. Ipsa, saepe.

                </section>

            </section>



            <section className="order-details">
                <div className="btns">
                    <button className="btn-basic">Basic</button>
                    <button className="btn-standard">Standard</button>
                    <button className="btn-premium">Premium</button>
                </div>

                <main className="main-details">
                    <div className="price">
                        <h1>{gig.price}$</h1>
                        <p>save tp to 20% with subscribe to save</p>
                    </div>

                    <div className="desc"><span>Lorem</span> ipsum, dolor sit amet  obcaecati veritatis, consequuntur aperiam deleniti neque et.</div>

                    <div className="delivery-details">

                        {/* <span className="fa-reg clock"></span> */}
                        <span className="fa clock"></span>
                        <span>{gig.daysToMake} Days delivery</span>
                    </div>

                    {gig.whatIncluded && <article className="whats-included">
                        <details>
                            <summary>what's included</summary>
                            <ul className="clean-list">
                                <li className="fa vi"><span className={(gig.whatIncluded.ConceptIncluded) ? 'fa include' : 'fa not-include' }></span>  1 Concept Included </li>
                                <li className="fa vi"><span className={(gig.whatIncluded.IncludeSourceFile) ? 'fa include' : 'fa not-include' }></span> Include Source File </li>
                                <li className="fa vi"><span className={(gig.whatIncluded.StationeryDesigns) ? 'fa include' : 'fa not-include' }></span> Stationery Designs</li>
                            </ul>
                        </details>
                    </article>}
                    <div className="continue-btn"><span className="continue">Continue</span> <span className="fa arrow"></span></div>
                    <div className="Compare-btn"><span className="continue">Compare packages</span></div>
                </main>

            </section>


        </section>
    )
}