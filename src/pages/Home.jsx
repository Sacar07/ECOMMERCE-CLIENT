import React from "react";
import Banner from "../components/home/Banner";
import Header from "../components/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrendingProducts from "../components/home/FeaturedProducts";

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

  const products = [
    {
      image: "/assets/chair-1.png",
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      image: "/assets/chair-2.png",
      name: "Swing chair",
      code: "Code - Y523202",
      price: "$50.00",
    },
    {
      image: "/assets/chair-3.png",
      name: "Hanging chair",
      code: "Code - Y523203",
      price: "$32.99",
    },
    {
      image: "/assets/chair-4.png",
      name: "Cante Chair",
      code: "Code - Y523204",
      price: "$44.50",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
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
          return (
            <Banner
              background={el.background}
              label={el.label}
              heading={el.heading}
              description={el.description}
              redirectUrl={el.redirectUrl}
            />
          );
        })}
      </Slider>
      <div className="container grid gap-[30px] py-[125px] sm:py-[140px] md:grid-cols-2 md:py-[158px] lg:grid-cols-4 lg:py-[178px] xl:py-[200px] xxl:py-[226px] ">
        {products.map((el) => {
          return <TrendingProducts
          image= {el.image}
          code= {el.code}
          price = {el.price}
          name = {el.name}
          />;
        })}
      </div>
    </>
  );
}
