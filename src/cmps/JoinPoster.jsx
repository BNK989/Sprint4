import { useState } from "react"
// import { LoginSignup } from "./LoginSignup"

export function JoinPoster() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    function onOpenModal() {
        setIsModalOpen(true)
    }

    function onCloseModal() {
        setIsModalOpen(false)
    }

    return (
        <div className="join-poster-container flex">
            <picture className="join-image">
                <source media="(min-width: 1160px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_2.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608129/bg-signup-1400-x2.png 2x" />
                <source media="(min-width: 900px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608114/bg-signup-1160-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_2.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608134/bg-signup-1160-x2.png 2x"></source>
                <img alt="The talent you need" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png" loading="lazy"></img>
            </picture>
            <div className="signup-text">
                <h2 className="title">Freelance services at your <i>fingertips!</i></h2>
                <a onClick={onOpenModal} className=" btn-signup clean-link">
                    Join 5err
                </a>
            </div>
            {/* <LoginSignup
                isModalOpen={isModalOpen}
                onCloseModal={onCloseModal} /> */}
        </div>
    )
}