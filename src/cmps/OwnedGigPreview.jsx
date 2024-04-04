


export function OwnedGigPreview({ ownedGig }) {
    console.log(ownedGig);

    return (
    <>
        <img src={ownedGig.imgUrls} alt="" />
        <h3>{ownedGig.title}</h3>
        <p>$ {ownedGig.price}</p>
    </>
            
    )
}