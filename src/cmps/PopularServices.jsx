import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { popularServices } from '../routes'


export function PopularServices() {

    return (
        <section className="popular-services main-container full mb-24">
          <h2 className="pb-6 text-[2em] font-extrabold tracking-tighter">Popular services</h2>
  <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {popularServices.map((service, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/5">
            <div className="p-1 h-[19.3em] rounded bg-cover" style={{backgroundImage: `url(${service.imgUrl})`}}>
                <h5 className="text-white mt-4 ml-4 text-[1em]">{service.subTitle}</h5>
                <h3 className="text-white mt-2 ml-4 text-[1.3em]">{service.title}</h3>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

        </section>
    )
}