import { useEffect, useRef, useState } from "react"
import { utilService } from "../services/util.service"
import { gigService } from "../services/gig.service.local"




export function GigFilter({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
    const [isBudgetModalOpen, setBudgetModalOpen] = useState(false)

    onSetFilter = useRef(utilService.debounce(onSetFilter))
    useEffect(() => {
        onSetFilter.current(filterByToEdit)

    }, [filterByToEdit])

    function handleChange(ev) {
        console.log('hay');
        // ev.preventDefault()
        let { value, name: field, type } = ev.target
        console.log(field);
        if (field === 'price' || field === 'daysToMake') {
            value = type = +value
        } else {
            value = type === 'number' ? +value : value
        }
        console.log(value);
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    function clearFilter() {
        setFilterByToEdit(gigService.getDefaultFilter())
    }

    function onBudgetModal() {
        setBudgetModalOpen(true)
    }

    return (
        <>
            <section className="gig-filter">
                <div className="filter-price">
                    <select value={filterByToEdit.price + ""} name="price" id="price" onChange={handleChange} >
                        <option value="">budget</option>
                        <option value="100">Under $100</option>
                        <option value="200">$100 - $200</option>
                        <option value="201">Above $200</option>
                    </select>
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

                {/* <div onClick={onBudgetModal} className="budget-filter-container" >
                    <p>Budget</p>
                    <div className={`fa arrow-points-${(isBudgetModalOpen) ? "up-arrow" : "down-arrow"}`}></div>
                </div> */}
                {/* {isBudgetModalOpen && <form onSubmit={handleChange} >
                        <div className="flex" onClick={handleChange}><div className="circle"></div>Under $100</div>
                        <div className="flex" onClick={handleChange}><div className="circle"></div>$100 - $200</div>
                        <div className="flex" onClick={handleChange}><div className="circle"></div>Above $200</div>  
                        <button>Apply</button>
                    </form>} */}


        </section >
        </>

    )

}