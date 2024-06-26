import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { QuickAvatar } from "./shanCN/QuickAvatar"
import { StarRating } from "./smallCmps/StarRating"
import { AppCarousel } from "@/components/ui/AppCarousel"


export function GigPreview({ gig }) {


    function showLevel() {
        let level = [false, false, false]
        const mark = gig.owner.level

        for (let i = 0; i < mark; i++) {
            level[i] = true
        }

        return level
    }

    const carouselItem = (img, i) => (
        <CarouselItem key={i}>
            <Link to={`/explore/${gig._id}`}>
                <img src={img} alt={`image-idx-${i}`} />
            </Link>
        </CarouselItem>
    )


    // <i class="fa-sharp fa-solid fa-sparkle"></i>
    return (<>
        <div className="main-img">
            {/* <img src={gig.imgUrls[0]} alt="" /> */}
            {/* <Carousel className="w-full ">
                    <CarouselContent>
                        {gig.imgUrls?.map((img, index) => (
                            <CarouselItem key={index}>
                                <Link to={`/explore/${gig._id}`}>
                                <img src={img} alt={`image-idx-${index}`} />
                                </Link>
                               // <div className="p-1">
                                   // <Card>
                                    //    <CardContent className="flex aspect-square items-center justify-center p-6">
                                     //       <span className="text-4xl font-semibold">{index + 1}</span>
                                    //    </CardContent>
                                //    </Card>
                              //  </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel> */}
            <AppCarousel
                items={gig.imgUrls}
                renderItem={carouselItem}
                className="md:w-full w-[82vw]"
                opts={{ align: "start" }}
            >
            </AppCarousel>
        </div>

        <div className="gig-owner-mini">
            <div className="gig-user">
                {/* <img src={gig.owner.imgUrl} alt="owner image" /> */}
                <QuickAvatar user={gig.owner} className="owner image aspect-square h-6 w-6 flex-center" />
                <p><span>{gig.owner.fullname}</span></p>
            </div>
            <StarRating gig={gig} />

            {/* <span className="level">
                <span className="level-and-num">Level {gig.owner.level} </span>
                {showLevel().map((value, idx) => <i key={gig._id + idx} >{value ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="currentColor"><path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="#E4E5E7"><path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path></svg>}</i>)}</span> */}
        </div>

        <div className="gig-details"><Link to={`/explore/${gig._id}`}>{gig.title}</Link></div>

        <div className="gig-user-rate">
            {/* <span className="fa star"></span> */}
            <span className="star"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
            <span className="rate">{gig.owner.rate} <span>(1k)</span></span>
        </div>

        <div className="gig-price">From {gig.packages.basic.price}$</div>
        {/* <span>level {gig.owner.level} {showLevel().map((value , idx) => <i key={gig._id + idx} className={value ? 'fa fa-full-star' : "bad"}></i>)}</span> */}
    </>
    )
}
