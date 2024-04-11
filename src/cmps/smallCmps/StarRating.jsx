import { cn } from "@/lib/utils"

export function StarRating({ gig, className }) {
    function showLevel() {
        let level = [false, false, false]
        const mark = gig.owner.level

        for (let i = 0; i < mark; i++) {
            level[i] = true
        }

        return level
    }

    return (
        <span className={cn("level", className) }>
            <span className="level-and-num ml-2">Level {gig.owner.level} </span>
            {showLevel().map((value, idx) => <i key={gig._id + idx}>{value ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="currentColor"><path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="#E4E5E7"><path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path></svg>}</i>)}
        </span>
    )
}