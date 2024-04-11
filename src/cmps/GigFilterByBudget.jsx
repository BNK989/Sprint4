import { useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"



export function GigFilterByBudget({ handleChange, isBudgetModalOpen, handleModal }) {
    const [budgetValue, setBudgetValue] = useState(0)
    const [budgetValueCustom, setBudgetValueCustom] = useState('')
    const customInputRef = useRef(null)
    const [searchParams, setSearchParams] = useSearchParams()

    console.log('budgetValue:', budgetValue)

    function onBudgetModal(value) {
        if (value !== "custom") {
            setBudgetValue(value)
            setBudgetValueCustom('')
        } else {
            setBudgetValue("custom")

        }
    }

    function onClearBudget() {
        handleModal('budget')
        setBudgetValue(0)
        setBudgetValueCustom('')
        const currentParams = Object.fromEntries(searchParams)
        delete currentParams.price
        setSearchParams({...currentParams})
    }

    return (<>
        {/* <section className="gig-filter"> */}
            <div className="budget-filter-container" >
                <div className={`flex drop-budget-action ${(isBudgetModalOpen) ? "active" : ""}`} onClick={() => handleModal('budget')}>
                    <p >Budget</p>
                    <div className={`fa arrow-points-${(isBudgetModalOpen) ? "up" : "down"}`}></div>
                </div>

                {isBudgetModalOpen && <form id="budget-form" onSubmit={(e) => handleChange(e, budgetValue, budgetValueCustom)} className="budget-form-filter" >
                    <div className="flex budget-input" onClick={() => onBudgetModal(155)}><span className={`circle ${(budgetValue === 155) ? "active" : ""}`}></span>Value<span className="budget-txt">Under $155</span></div>
                    <div className="flex budget-input" onClick={() => onBudgetModal(232)}><span className={`circle ${(budgetValue === 232) ? "active" : ""}`}></span>Mid-range<span className="budget-txt">$155 - $232</span></div>
                    <div className="flex budget-input" onClick={() => onBudgetModal(233)}><span className={`circle ${(budgetValue === 233) ? "active" : ""}`}></span>High-end<span className="budget-txt">$232 & Above</span></div>
                    <div className="budget-input custom" onClick={() => onBudgetModal("custom")}>
                        <div className="custom-input"><span className={`circle ${(budgetValue === "custom") ? "active" : ""}`}></span>Custom</div>
                        <div><input type="number" value={budgetValueCustom} placeholder="Enter a budget" onChange={(e) => setBudgetValueCustom(e.target.value)} ref={customInputRef} /></div>
                    </div>
              
                    <div className="action-btn-budget-container">
                        <button onClick={onClearBudget} className="btn-clear-budget">Clear All</button>
                        <button form="budget-form" className="btn-apply-budget" type="submit">Apply</button>
                    </div>
                </form>}
            </div>
        {/* </section> */}
    </>)
}