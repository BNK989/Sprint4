import { useState } from "react"
import { useSearchParams } from "react-router-dom"


export function GigFilterByDeliveryTime({ setDeliveryModalOpen, isDeliveryModalOpen,handleChangeDelivery }) {
    const [deliveryValue, setDeliveryValue] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams()

    function onDeliveryModal(value) {
        setDeliveryValue(value)

    }

    function onClearDelivery() {
        setDeliveryModalOpen(false)
        setDeliveryValue('')
        const currentParams = Object.fromEntries(searchParams)
        delete currentParams.daysToMake
        setSearchParams()
    }

    return (
        <>
            <div className="filter-delivery-time">

                <div className="delivery-filter-container" >
                    <div className={`flex drop-delivery-action ${(isDeliveryModalOpen) ? "active" : ""}`} onClick={() => setDeliveryModalOpen(!isDeliveryModalOpen)}>
                        <p >Delivery time</p>
                        <div className={`fa arrow-points-${(isDeliveryModalOpen) ? "up" : "down"}`}></div>
                    </div>

                    {isDeliveryModalOpen && <form id="delivery-form" onSubmit={(e) => handleChangeDelivery(e, deliveryValue)} className="delivery-form-filter" >
                        <div className="flex delivery-input" onClick={() => onDeliveryModal(1)}><span className={`circle ${(deliveryValue === 1) ? "active" : ""}`}></span><span className="delivery-txt">Express 24H</span></div>
                        <div className="flex delivery-input" onClick={() => onDeliveryModal(3)}><span className={`circle ${(deliveryValue === 3) ? "active" : ""}`}></span><span className="delivery-txt">Up to 3 days</span></div>
                        <div className="flex delivery-input" onClick={() => onDeliveryModal(7)}><span className={`circle ${(deliveryValue === 7) ? "active" : ""}`}></span><span className="delivery-txt">Up to 7 days</span></div>
                        <div className="flex delivery-input" onClick={() => onDeliveryModal(0)}><span className={`circle ${(deliveryValue === 0) ? "active" : ""}`}></span><span className="delivery-txt">Anytime</span></div>

                        <div className="action-btn-delivery-container">
                            <button onClick={onClearDelivery} className="btn-clear-delivery">Clear All</button>
                            <button form="delivery-form" className="btn-apply-delivery" type="submit">Apply</button>
                        </div>
                    </form>}
                </div>
            </div>
        </>
    )
}