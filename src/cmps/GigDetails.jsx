import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { gigService } from "../services/gig.service"
import { Link } from "react-router-dom"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ReviewsStats } from "./ReviewsStats"
import { BreadcrumbWithCustomSeparator } from "./BreadcrumbWithCustomSeparator"
import { QuickAvatar } from "./shanCN/QuickAvatar"
import { StarRating } from "./smallCmps/StarRating"
import { GigOrderDetails } from "./GigOrderDetails"


export function GigDetails() {
    const { gigId } = useParams()
    const navigate = useNavigate()
    const [gig, setGig] = useState(null)
    const [carouselIdx, setCarouselIdx] = useState(0)


  

    useEffect(() => {
        loadGig()
    }, [gigId])


    async function loadGig() {
        try {
            const gig = await gigService.getById(gigId)
            setGig(gig)
        } catch (err) {
            console.error('Had issues in gig details', err)
            showErrorMsg('Cannot load gig')
            navigate('/explore')
        }
    }

    function showRate(review) {
        let stars = [false, false, false, false, false]
        const count = review.rate

        for (let i = 0; i < count; i++) {
            stars[i] = true
        }
        return stars
    }

    function stateStats() {
        const totalReviews = gig.reviews.length
        const fiveStars = gig.reviews.filter(review => review.rate === 5).length
        const fourStars = gig.reviews.filter(review => review.rate === 4).length
        const threeStars = gig.reviews.filter(review => review.rate === 3).length
        const twoStars = gig.reviews.filter(review => review.rate === 2).length
        const oneStar = gig.reviews.filter(review => review.rate === 1).length

        return { totalReviews, fiveStars, fourStars, threeStars, twoStars, oneStar }

    }


    if (!gig) return <h1>Loading</h1>
    return (
        <section className="main-details-container">

            <section className="gig-details">
                <div className="breadcrumb-container">
                    <BreadcrumbWithCustomSeparator />
                </div>
                <h1 className="gig-title">{gig.title}</h1>

                <div className="gig-user flex">
                    <QuickAvatar user={gig.owner} className="w-16 h-16"/>
                    {/* <img src={gig.owner.imgUrl} alt="owner image" /> */}

                    <div className="user-details">
                        
                        <div className="flex ">
                            <p className="border-r flex-center">{gig.owner.fullname}</p>
                            <StarRating gig={gig} className="flex-center gap-1"/>
                        </div>

                        <div className="user-rate mt-2">
                            <span className="fa star"></span>
                            <span className="rate-num pr-4  mr-4">{gig.owner.rate} <span>(1k)</span></span>
                            {gig.owner.ordersCount && <span className="border-l pl-4">3 Orders in queue</span>}
                        </div>

                    </div>

                </div>
                <div className="line"></div>
                {/* <img className="main-img" src={gig.imgUrls[0]} alt="" /> */}
                <div className="main-img">
                    <Carousel className="w-full mb-5" opts={{align: "start", loop: true,  startIndex: carouselIdx}}>
                        <CarouselContent>
                            {gig.imgUrls?.map((img, index) => (
                                <CarouselItem key={index}>
                                    {/* {setCarouselIdx(index)} */}
                                    <img src={img} alt={`image-idx-${index}`} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                        <div className="-mt-3 flex justify-start">
                            {gig.imgUrls?.map((img, index) => (
                                <img onClick={()=> setCarouselIdx(index)} key={index} className={`ml-1 w-[100px] h-[60px] ${index === carouselIdx ? "border-2 border-orange" : ""}`} src={img} alt={`image-idx-${index}`} />
                            ))}
                        </div>
                </div>

                <section className="about-this-gig">
                    <p>About this gig</p>
                    {/* <span>{gig.description}</span> */}
                    <span className="txt">
                        <span>
                            Hey I'll design a modern, creative and professional 3d logo for
                            your business I assure high quality and aesthetic guidelines for
                            your logo design. You will get an excellent service at affordable price.
                        </span>

                        <span>
                            I have vast graphics designing experience.
                            i have 2K+ satisfied customers worldwide.
                        </span>
                        <span>
                            As a creative artist i understand the importance
                            of a modern 3d logo, It reflects an advanced outlook of the company.
                        </span>


                        <span>
                            If you are interested in getting my services kindly send a message
                            first with your logo requirements, We will discuss about it and then
                            an order will be placed for it. After this i will take the initial
                            requirements and will design Mockups(concepts) for my client and will
                            show them.
                        </span>
                        <span>
                            Thanks for taking the time to view my profile!
                        </span>

                    </span>


                </section>

                <div className="line"></div>


                <section className="about-user">
                    <h1 className="title">Get to know {gig.owner.fullname}</h1>
                    <div className="gig-user">
                    <QuickAvatar user={gig.owner} className="w-20 h-20"/>
                        {/* <img src={gig.owner.imgUrl} alt="owner image" /> */}

                        <div className="user-details">
                            <p>{gig.owner.fullname}</p>
                            <span className="user-desc">Minimalist Logo and Brand Designer</span>
                            <div className="user-rate">
                                <span className="fa star"></span>
                                <span className="rate-num">{gig.owner.rate} <span>(1k)</span></span>
                            </div>
                        </div>
                    </div>
                    <button className="btn-contact-me">Contact me</button>

                    <section className="more-details">
                        <div className="user-stats">
                            <span className="main from">From <span>Israel</span></span>
                            <span className="main since">Member since<span></span>May 2023</span>
                            <span className="main avg">Avg. response time <span>1 hour</span></span>
                            <span className="main delivery">Last delivery<span>about 15 minutes</span></span>
                            <span className="main languages">Languages<span>English, French, Hebrew</span></span>
                        </div>
                        <div className="line"></div>
                        <div className="summery">
                            <span>Hey... i am {gig.owner.fullname}, A freelance graphics and logo designer, working with a well reputed organization for the past 6 years.</span>
                            <span>I have around 2k satisfied customers World wide. I'll help you to take your business to the next level. Contact me for more info.</span>
                            <span>Simply click my name to open my profile and gig portfolio </span>
                        </div>
                    </section>

                </section>
                <div className="line"></div>

            </section>
                            <GigOrderDetails gig={gig}/>
            {/* <section className="order-details">
                <div className="btns">
                    <button className="btn-basic">Basic</button>
                    <button className="btn-standard">Standard</button>
                    <button className="btn-premium">Premium</button>
                </div>

                <main className="main-details">
                    <div className="price">
                        <span>Basic</span>
                        <span className="price-num">{gig.price}$</span>

                    </div>

                    <div className="desc">Two unique High quality design concepts with HQ jpg and transparent png.</div>

                    <div className="delivery-details">

                        <span className="clock"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg></span>
                        <span>{gig.daysToMake} Days delivery</span>
                    </div>

                    {gig.whatIncluded && <article className="whats-included">
                        <details>
                            <summary>what's included</summary>
                            <ul className="clean-list">
                                <li className="fa vi"><span className={(gig.whatIncluded.ConceptIncluded) ? 'fa include' : 'fa not-include'}></span>  1 Concept Included </li>
                                <li className="fa vi"><span className={(gig.whatIncluded.IncludeSourceFile) ? 'fa include' : 'fa not-include'}></span> Include Source File </li>
                                <li className="fa vi"><span className={(gig.whatIncluded.StationeryDesigns) ? 'fa include' : 'fa not-include'}></span> Stationery Designs</li>
                            </ul>
                        </details>
                    </article>}
                    <Link to={`/payment/${gig._id}`}><div className="continue-btn"><span className="continue">Continue</span> <span className="fa arrow"></span></div></Link>
                    <div className="Compare-btn"><span className="continue">Compare packages</span></div>
                </main>

            </section> */}

            <section className="order-reviews-container">
                <div className="title">Reviews</div>

                <ReviewsStats stateStats={stateStats()} />

                <ul>
                    {gig.reviews.map((review, idx) => (
                        <li key={idx}>
                            <div className="line"></div>
                            <div className="by">
                                <img src={review.by.imgUrl} alt="owner image" />

                                <div className="user-info">

                                    <span className="user-name">{review.by.fullname}</span>

                                    <div className="from">
                                        <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f1.png" alt="" />
                                        <span>Israel</span>
                                    </div>

                                </div>
                            </div>

                            <div className="rate">
                                {showRate(review).map((value, idx) => <i key={gig._id + idx} >{value ? <svg width="14.5" height="14.5" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg> : <svg width="14.5" height="14.5" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.9327 9.18715L13.875 6.37996L9.81731 5.79395L8 2.18336L6.18269 5.79395L2.125 6.37996L5.06731 9.18715L4.36538 13.1664L8 11.2854L11.625 13.1664L10.9327 9.18715ZM16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7826 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>}</i>)}
                                <span className="rate-num">{review.rate}</span>
                            </div>

                            <div className="review-txt">{review.txt}</div>

                            <div className="helpful">
                                <span className="title">Helpful?</span>
                                <span className="yes">
                                    <svg width="13" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.89 14.75H1C0.59 14.75 0.25 14.41 0.25 14V8C0.25 7.59 0.59 7.25 1 7.25H3.46L6.05 0.72C6.16 0.43 6.44 0.25 6.75 0.25H7.67C8.59 0.25 9.34 0.98 9.34 1.87V5.45H13.17C14 5.45 14.78 5.84 15.27 6.48C15.73 7.1 15.87 7.87 15.66 8.6L14.39 12.93C14.08 13.99 13.06 14.74 11.9 14.74L11.89 14.75ZM4.75 13.25H11.89C12.38 13.25 12.81 12.95 12.94 12.52L14.21 8.19C14.32 7.81 14.16 7.52 14.06 7.39C13.85 7.12 13.53 6.96 13.16 6.96H8.58C8.17 6.96 7.83 6.62 7.83 6.21V1.87C7.83 1.81 7.76 1.75 7.66 1.75H7.25L4.74 8.08V13.25H4.75ZM1.75 13.25H3.25V8.75H1.75V13.25V13.25Z"></path></svg>
                                    Yes
                                </span>
                                <span className="no">
                                    <svg width="13" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.25533 14.75H8.33533C7.41533 14.75 6.66533 14.03 6.66533 13.13L6.66533 9.55H2.83533C2.00533 9.55 1.22533 9.16 0.735326 8.52C0.275326 7.9 0.135326 7.13 0.345326 6.4L1.62533 2.06C1.93533 1 2.95533 0.25 4.11533 0.25L15.0053 0.25C15.4153 0.25 15.7553 0.59 15.7553 1V7C15.7553 7.41 15.4153 7.75 15.0053 7.75H12.5453L9.95533 14.28C9.84533 14.57 9.56533 14.75 9.25533 14.75ZM4.11533 1.75C3.62533 1.75 3.19533 2.05 3.06533 2.48L1.79533 6.81C1.68533 7.19 1.84533 7.48 1.94533 7.61C2.15533 7.88 2.47533 8.04 2.84533 8.04H7.42533C7.83533 8.04 8.17533 8.38 8.17533 8.79L8.17533 13.12C8.17533 13.17 8.24533 13.24 8.34533 13.24H8.75533L11.2653 6.91V1.75L4.11533 1.75ZM12.7553 6.25H14.2553V1.75L12.7553 1.75V6.25Z"></path></svg>
                                    No
                                </span>
                            </div>


                        </li>))}
                </ul>

            </section>


        </section>
    )
}
