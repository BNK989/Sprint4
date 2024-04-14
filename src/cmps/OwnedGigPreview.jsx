import { Link } from "react-router-dom";



export function OwnedGigPreview({ ownedGig }) {
    return (
        <>
            <Link to={`/manage_gigs/${ownedGig._id}`}>
                <img src={ownedGig?.imgUrls[0] || 'https://source.unsplash.com/random/307%C3%97408'} alt="gig-image" />
                <div>
                    <span>{ownedGig.title}</span>
                    <span className="price">$ {(ownedGig.packages)? ownedGig.packages.basic.price : ownedGig.price }</span>
                </div>
            </Link>

        </>

    )
}