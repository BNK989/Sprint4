import { useSearchParams } from "react-router-dom"

export function ActiveFilters({ filterBy }) {

    const [searchParams, setSearchParams] = useSearchParams()

    const onClearBudget = () => {
        const currentParams = Object.fromEntries(searchParams)
        delete currentParams.price
        setSearchParams({...currentParams})
    }

    return (
        <div className="active-filters mt-4">
            {!!filterBy.price && 
            <span onClick={onClearBudget} className="flex-center py-1 px-4 bg-gray1 hover:text-gray-500 cursor-pointer rounded-full text-sm max-w-fit font-bold">
                Budget: ${filterBy.price} 
                <span className="relative ml-3 h-2 w-2">
                    <svg className="float-left" width="9" height="9" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="#74767e">
                        <path d="m8.485 7 4.487-4.487.926-.925a.35.35 0 0 0 0-.495l-.99-.99a.35.35 0 0 0-.495 0L7 5.515 1.588.102a.35.35 0 0 0-.495 0l-.99.99a.35.35 0 0 0 0 .495L5.514 7 .102 12.413a.35.35 0 0 0 0 .495l.99.99a.35.35 0 0 0 .495 0L7 8.485l4.487 4.487.926.926a.35.35 0 0 0 .495 0l.99-.99a.35.35 0 0 0 0-.495L8.485 7Z"></path>
                    </svg>
                </span>
            </span>}
            
        </div>
    )
}