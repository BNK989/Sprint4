


export function OwnedGigPreview({ ownedGig }) {
    return (
        <>
            <img src={ownedGig.imgUrls[0]} alt="" />
            <div>
                <span>{ownedGig.title}</span>
                <span className="price">$ {ownedGig.price}</span>
            </div>

        </>

    )
}