import {utilService as u} from '../services/util.service'
import 'animate.css'
export function BestPart() {
    

    function dance(e){
        e.preventDefault()
        const content = e.target.innerText.split('')
        const spannedContent = content.map((l, i) => `<span key=${i} style='color: ${u.getRandomColor()}; margin: 0'>${l}</span>`).join('')
        e.target.innerHTML = spannedContent
    }
    function unDance(e){
        const content = e.target.innerText.split('')
        const spannedContent = content.map((l, i) => `<span key=${i} style='margin: 0'>${l}</span>`).join('')
        e.target.innerHTML = spannedContent
    }

    return (
        <section className="video-section flex full main-container">
            <div className="flex video-layout">
                <div className="site-info">
                    <div className="side-text" >
                        <h1 onClick={(e) => u.animate(e,'animate__shakeY')}>The best part? Everything.</h1>
                        <ul>
                            <li>
                                <section className="flex align-center">
                                    <span><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a">
                                        <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path>
                                        <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path>
                                    </svg></span>
                                    <h6>Stick to your budget</h6>
                                </section>
                                <p onContextMenu={dance} onClick={unDance} className='transition-colors'>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
                            </li>
                            <li>
                                <section className="flex align-center">
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a">
                                            <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path>
                                            <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path>
                                        </svg>
                                    </span>
                                    <h6>Get quality work done quickly</h6>
                                </section>
                                <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
                            </li>
                            <li>
                                <section className="flex align-center">
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a">
                                            <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path>
                                            <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path>
                                        </svg>
                                    </span>
                                    <h6>Pay when you're happy</h6>
                                </section>
                                <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
                            </li>
                            <li>
                                <section className="flex align-center">
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a">
                                            <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path>
                                            <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path>
                                        </svg>
                                    </span>
                                    <h6>Count on 24/7 support</h6>
                                </section>
                                <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="vid-container flex-center" >
                    <img src="https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670793711/gigs/ostlxosopzlu6ccomezg.webp" onClick={(e) => u.animate(e,'animate__shakeY')}/>
                </div>
            </div>
        </section>
    )
}