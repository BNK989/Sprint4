


export function OwnedGigPreview({ ownedGig }) {
    return (
    <>
        <img src={ownedGig.imgUrls[0]} alt="" />
        <h3>{ownedGig.title}</h3>
        <p>$ {ownedGig.price}</p>
    </>
            
    )
}