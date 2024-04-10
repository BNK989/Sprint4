import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function CustomPaging() {
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img src={`https://picsum.photos/400/300.jpg`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <>
        <h1 className="mt-10">hello</h1>
        <div className="m-5 slider-container w-56 gap-3">
            <Slider {...settings}>
                <div>
                <img src={"https://picsum.photos/400/300.jpg"} />
                </div>
                <div>
                <img src={"https://picsum.photos/400/301.jpg"} />
                </div>
                <div>
                <img src={"https://picsum.photos/400/302.jpg"} />
                </div>
                <div>
                <img src={"https://picsum.photos/400/303.jpg"} />
                </div>
            </Slider>
        </div>
    </>
  )
}

// export default CustomPaging;