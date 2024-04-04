import { Link } from "react-router-dom"


export function GigPreview({ gig }) {


    function showLevel() {
        let level = [false, false, false]
        const mark = gig.owner.level

        for (let i = 0; i < mark; i++) {
            level[i] = true
        }

        return level        
    }

    console.log('showLevel():', showLevel())

    // <i class="fa-sharp fa-solid fa-sparkle"></i>
    return (<>
        <div className="main-img">
            <img src={gig.imgUrls} alt="" />
        </div>

        <div className="gig-owner-mini">
            <div className="gig-user">
                <img src={gig.owner.imgUrl} alt="" />
                <p>{gig.owner.fullname}</p>
            </div>

            {/* buggggggggggggggggggggggggggg  */}
            {/* <span>level {gig.owner.level} {showLevel().map((value , idx) => <i key={gig._id + idx} className={value ? 'fa fa-full-star' : "bad"}></i>)}</span> */}
            <span>level {gig.owner.level} {showLevel().map((value, idx) => <i key={gig._id + idx} >{value ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="currentColor"><path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="#E4E5E7"><path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path></svg>}</i>)}</span>
        </div>
        {/* <i class="fa-solid fa-star"></i> */}
        {/* <Link className="toy-details" to={`/toy/${toy._id}`}>Details</Link> */}
        <div><Link className="gig-details" to={`/explore/${gig._id}`}>{gig.title}</Link></div>

        <div className="gig-user-rate">
            <span className="fa fa-solid fa-star">⭐ </span>
            <span>{gig.owner.rate} (1k)</span>
        </div>

        <div className="gig-price">{gig.price}$</div>

    </>
    )
}
