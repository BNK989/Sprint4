import { Link } from "react-router-dom";

export function UnderHeader({categories}) {
    //CSS IN _AppHeader

    return (
    <section className="relative under-header main-container full">
        {/* <button className="lg:hidden  w-2 absolute left-arrow"> // setup for horizontal scroll
        <span className="icon-chevron w-4 h-4 " aria-hidden="true" style={{fill: 'rgb(122, 125, 133)'}}>
            <svg className="cursor-pointer" width="8" height="15" viewBox="0 0 8 15" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.2279 0.690653L7.84662 1.30934C7.99306 1.45578 7.99306 1.69322 7.84662 1.83968L2.19978 7.5L7.84662 13.1603C7.99306 13.3067 7.99306 13.5442 7.84662 13.6907L7.2279 14.3094C7.08147 14.4558 6.84403 14.4558 6.69756 14.3094L0.153374 7.76518C0.00693607 7.61875 0.00693607 7.38131 0.153374 7.23484L6.69756 0.690653C6.84403 0.544184 7.08147 0.544184 7.2279 0.690653Z"></path>
            </svg>
        </span>
    </button> */}
        <ul className='flex clean-list max-w-[1400px] overflow-hidden'>
            {categories?.map(cat => <li className='capitalize' key={cat}><Link className='font-light whitespace-nowrap' to={`/explore/?cat=${cat.replace(/&/g, '-')}`}>{cat}</Link></li>)}

        </ul>
    </section>
    )
}