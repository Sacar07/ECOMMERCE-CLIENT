import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      {" "}
      {/* <img src={banner1} /> one way */}
      <Slider {...settings}>
        <div>
          <img
            className="w-[1920px] h-[764px]"
            src="/assets/banner-1.png"
            alt="banner-1"
          />{" "}
          {/* slash / vaneko public react ma */}
        </div>
        <div>
          <img
            className="w-[1920px] h-[764px]"
            src="/assets/banner-2.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-[1920px] h-[764px]"
            src="/assets/banner-3.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
