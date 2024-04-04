

export function GigPreview({ gig }) {


    return (<>
        <div className="main-img">
            <img src={gig.imgUrls} alt="" />
        </div>

        <div className="gig-owner-mini">
            <div className="gig-user">
                <img src={gig.owner.imgUrl} alt="" />
                <p>{gig.owner.fullname}</p>
            </div>
            <p>level{gig.owner.level}</p>
        </div>
    </>
    )
}
