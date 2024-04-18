import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "./carousel"

export const AppCarousel = ({ items, renderItem, className, opts, fullWidth = true }) => {
    
    const fullWidthClass = fullWidth ? "w-full" : ""
    const { align, loop = true, startIndex = 0 } = opts

    return <Carousel
        className={`${fullWidthClass} ${className}`}
        opts={{
            align,
            loop,
            startIndex
        }}>
        <CarouselContent>
            {items.map(renderItem)}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
    
}