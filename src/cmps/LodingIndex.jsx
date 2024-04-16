import { Skeleton } from "@/components/ui/skeleton"
export function LoadingIndex() {

    return (
        <>
            {/* <div className="skeleton-container gig-list"> */}
                <ul className="gig-list">
                    <li className="gig-preview"><SkeletonCard /></li>
                    <li><SkeletonCard /></li>
                    <li><SkeletonCard /></li>
                    <li><SkeletonCard /></li>
                </ul>
            {/* </div> */}
        </>

    )
}
function SkeletonCard() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[190px] w-[315px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
}