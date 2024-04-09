import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"


export function ToolTipWrapper({ tooltipContent, children }) {
    return (
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>
                {children}
            {/* <Link to={`user/${user._id}`}>
                Orders{pendingOrdersTotal !== 0 && <div className='notification-dot'></div>}
            </Link> */}
            </TooltipTrigger>
            <TooltipContent>
                {tooltipContent}
            {/* <p className='tooltip text-black'>{`${pendingOrdersTotal} Pending Orders`}</p> */}
            </TooltipContent>
        </Tooltip>
        </TooltipProvider>
    )
}