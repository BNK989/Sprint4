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
          <h2 className="pb-6 text-3xl font-extrabold">Popular services</h2>
  <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {popularServices.map((service, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/5">
            <div className="p-1 h-80" style={{backgroundImage: `url(${service.imgUrl})`}}>
                <h5 className="text-white mt-4 ml-4 text-[1em]">{service.subTitle}</h5>
                <h3 className="text-white mt-2 ml-4 text-[1.3em]">{service.title}</h3>
                {/* <img src="https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670793304/gigs/jezoetuwvxqzc115bria.webp" alt={i} /> */}
              {/* <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{i + 1}</span>
                </CardContent>
              </Card> */}
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