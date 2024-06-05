import React from "react";
import Banner from "../components/home/Banner";
import Header from "../components/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbBackground } from "react-icons/tb";

export default function Home() {
  const banners = [
    {
      background: "bg-banner-1",
      label: "Best Furniture For Your Castle....",
      heading: "New Furniture Collection Trends in 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna inest adipiscing in phasellus non in justo.",
      redirectUrl: "/home",
    },
    {
      background: "bg-banner-2",
      label: "Best Furniture For Your Castle....",
      heading: "Fresh Furniture Collection Trends in 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna inest adipiscing in phasellus non in justo.",
      redirectUrl: "/pages",
    },
    {
      background: "bg-banner-3",
      label: "Best Furniture For Your Castle....",
      heading: "Sold out Furniture Collection Trends in 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna inest adipiscing in phasellus non in justo.",
      redirectUrl: "/products",
    },
  ];
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Header />
      <Slider {...settings}>
        {banners.map((el) => {
          return (<Banner
            background={el.background}
            label={el.label}
            heading={el.heading}
            description={el.description}
            redirectUrl={el.redirectUrl}
          />)
        })}
      </Slider>
    </>
  );
}
