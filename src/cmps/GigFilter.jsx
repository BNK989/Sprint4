import { useEffect, useRef, useState } from "react"
import { utilService } from "../services/util.service"
import { gigService } from "../services/gig.service.local"
import { useSearchParams } from "react-router-dom"
import { GigFilterByBudget } from "./GigFilterByBudget"
import { GigFilterByDeliveryTime } from "./GigFilterByDeliveryTime"


export function GigFilter({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
    const [isBudgetModalOpen, setBudgetModalOpen] = useState(false)
    const [isDeliveryModalOpen, setDeliveryModalOpen] = useState(false)

    const [searchParams, setSearchParams] = useSearchParams()

    onSetFilter = useRef(utilService.debounce(onSetFilter))

    useEffect(() => {
        onSetFilter.current(filterByToEdit)

    }, [filterByToEdit])

    function handleChange(ev,budgetValue,budgetValueCustom) {
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
        let { value, name: field, type } = ev.target
        switch (field) {
            case 'price':
                setSearchParams({ ...currentParams, price: value })
                break;
        }
    }

    function handleChangeDelivery(ev,deliveryValue){
        ev.preventDefault()
        setDeliveryModalOpen(!isDeliveryModalOpen)
        ev.target.value = deliveryValue
        ev.target.name = 'daysToMake'
        const currentParams = Object.fromEntries(searchParams)
        let { value, name: field, type } = ev.target
        switch (field) {
            case 'daysToMake':
                setSearchParams({ ...currentParams, daysToMake: value })
                break;
        }
    }

    function clearFilter() {
        setFilterByToEdit(gigService.getDefaultFilter())
        setSearchParams({})
    }

    return (
        <>
            <section className="gig-filter">
            <GigFilterByBudget handleChange={handleChange} setBudgetModalOpen={setBudgetModalOpen} isBudgetModalOpen={isBudgetModalOpen}/>

            <GigFilterByDeliveryTime setDeliveryModalOpen={setDeliveryModalOpen} isDeliveryModalOpen={isDeliveryModalOpen} handleChangeDelivery={handleChangeDelivery}/>   
     
                <div className="clear-filter"><span onClick={clearFilter}>Clear filter</span></div>
            </section >
        </>

    )

}