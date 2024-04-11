import { useEffect, useRef, useState } from "react"
import { utilService } from "../services/util.service"
import { gigService } from "../services/gig.service.local"
import { useSearchParams } from "react-router-dom"


export function GigFilter({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
    const [isBudgetModalOpen, setBudgetModalOpen] = useState(false)
    const [budgetValue, setBudgetValue] = useState(0)
    const [budgetValueCustom, setBudgetValueCustom] = useState('')
    const customInputRef = useRef(null)

    const [searchParams, setSearchParams] = useSearchParams()

    onSetFilter = useRef(utilService.debounce(onSetFilter))

    useEffect(() => {
        onSetFilter.current(filterByToEdit)

    }, [filterByToEdit])

    function handleChange(ev) {
        ev.preventDefault()
        setBudgetModalOpen(!isBudgetModalOpen)
        if (budgetValue === "custom") {
            ev.target.value = +budgetValueCustom
            ev.target.name = 'price'
        } else {
            ev.target.value = budgetValue
            ev.target.name = 'price'
        }
        const currentParams = Object.fromEntries(searchParams)
        // ev.preventDefault()
        let { value, name: field, type } = ev.target
        switch (field) {
            case 'price':
                setSearchParams({ ...currentParams, price: value })
                break;
                case 'daysToMake':
                    setSearchParams({ ...currentParams, daysToMake: value })
                    break;
                }
            }
            
            function clearFilter() {
                setFilterByToEdit(gigService.getDefaultFilter())
                setSearchParams({})
            }
            
            function onClearBudget() {
                setBudgetModalOpen(false)
                setBudgetValue(0)
                setBudgetValueCustom('')
                const currentParams = Object.fromEntries(searchParams)
                setSearchParams()
                console.log('currentParams:',currentParams )
            }
            
            function onBudgetModal(value) {
                if (value !== "custom") {
                    setBudgetValue(value)
                    setBudgetValueCustom('')
                } else {
            setBudgetValue("custom")

        }
    }

    return (
        <>
            <section className="gig-filter">
                <div className="budget-filter-container" >
                    <div className={`flex drop-budget-action ${(isBudgetModalOpen) ? "active" : ""}`} onClick={() => setBudgetModalOpen(!isBudgetModalOpen)}>
                        <p >Budget</p>
                        <div className={`fa arrow-points-${(isBudgetModalOpen) ? "up" : "down"}`}></div>
                    </div>

                    {isBudgetModalOpen && <form id="budget-form" onSubmit={handleChange} className="budget-form-filter" >
                        <div className="flex budget-input" onClick={() => onBudgetModal(155)}><span className={`circle ${(budgetValue === 155) ? "active" : ""}`}></span>Value<span className="budget-txt">Under $155</span></div>
                        <div className="flex budget-input" onClick={() => onBudgetModal(232)}><span className={`circle ${(budgetValue === 232) ? "active" : ""}`}></span>Mid-range<span className="budget-txt">$155 - $232</span></div>
                        <div className="flex budget-input" onClick={() => onBudgetModal(233)}><span className={`circle ${(budgetValue === 233) ? "active" : ""}`}></span>High-end<span className="budget-txt">$232 & Above</span></div>
                        <div className="budget-input custom" onClick={() => onBudgetModal("custom")}>
                            <div className="custom-input"><span className={`circle ${(budgetValue === "custom") ? "active" : ""}`}></span>Custom</div>
                            <div><input type="number" value={budgetValueCustom} placeholder="Enter a budget" onChange={(e) => setBudgetValueCustom(e.target.value)} ref={customInputRef} /></div>
                        </div>
                        {/* <div className="line"></div> */}
                        <div className="action-btn-budget-container">
                            <button onClick={onClearBudget} className="btn-clear-budget">Clear All</button>
                            <button form="budget-form" className="btn-apply-budget" type="submit">Apply</button>
                        </div>
                    </form>}
                </div>

                <div className="filter-delivery-time">
                    <select value={filterByToEdit.daysToMake + ""} name="daysToMake" id="delivery" onChange={handleChange} >
                        <option value="">Delivery time</option>
                        <option value="1">Express 24H</option>
                        <option value="3">Up to 3 days</option>
                        <option value="7">Up to 7 days</option>

                    </select>
                </div>

                <div className="clear-filter"><span onClick={clearFilter}>Clear filter</span></div>
            </section >
        </>

    )

}