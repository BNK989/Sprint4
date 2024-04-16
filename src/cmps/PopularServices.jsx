import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { popularServices } from '../routes'
import { AppCarousel } from "@/components/ui/AppCarousel"


/* export function PopularServices() {

    return (
        <section className="popular-services main-container full mb-24">
          <h2 className="md:pb-6 pb-2 text-[2em] font-extrabold tracking-tighter">Popular services</h2>
  <Carousel
      opts={{
        align: "start",
      }}
      className="md:w-full w-[82vw]"
    >
      <CarouselContent>
        {popularServices.map((service, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/5">
            <div className="img-card p-1 h-[19.3em] rounded bg-cover hover:opacity-85 duration-300" style={{backgroundImage: `url(${service.imgUrl})`}}>
                <h5 className="text-white mt-[.4em] ml-[.4em] text-[1em]">{service.subTitle}</h5>
                <h3 className="text-white font-extrabold leading-none ml-[.4em] text-[1.3em]">{service.title}</h3>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

        </section>
    )
} */

//Testing AppCarousel API


export function PopularServices() {

  const carouselItem = (service, i) => (
    <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/5">
      <div className="img-card p-1 h-[19.3em] rounded bg-cover hover:opacity-85 duration-300" style={{ backgroundImage: `url(${service.imgUrl})` }}>
        <h5 className="text-white mt-[.4em] ml-[.4em] text-[1em]">{service.subTitle}</h5>
        <h3 className="text-white font-extrabold leading-none ml-[.4em] text-[1.3em]">{service.title}</h3>
      </div>
    </CarouselItem>
  )

  return (
    <section className="popular-services main-container full mb-24">
      <h2 className="md:pb-6 pb-2 text-[2em] font-extrabold tracking-tighter">Popular services</h2>
      <AppCarousel
        items={popularServices}
        renderItem={carouselItem}
        className="md:w-full w-[82vw]"
        opts={{ align: "start" }}
      >
      </AppCarousel>

    </section>
  )
}