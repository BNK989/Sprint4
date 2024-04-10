import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { utilService as util } from '../../services/util.service'


function randomGender() {
    return Math.random() < 0.5 ? 'male' : 'female'
}

export function QuickAvatar({ className,user }) {
    return (
        <Avatar className={cn(className)}>
            <AvatarImage 
                src={user.imgUrl}
                // src={`https://xsgames.co/randomusers/avatar.php?g=${randomGender()}`}
            />
            <AvatarFallback>
                {util.getInitials(user.fullname)}
            </AvatarFallback>
        </Avatar>
    )
}