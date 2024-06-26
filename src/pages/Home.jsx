import React, { useEffect } from "react";
import Banner from "../components/home/Banner";
import Header from "../components/common/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LatestProducts from "../components/home/LatestProducts";
import axios from "axios";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TrendingProducts from "../components/home/TrendingProducts";

export default function Home() {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);

  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products/trending")
      .then((res) => {
        const data = res.data.data;
        //  console.log("data is", data);
        setTrendingProducts(data || []);
        setIsloading(false);
      })
      .catch((err) => {});

    axios
      .get(
        "https://ecommerce-sagartmg2.vercel.app/api/products?page=2&per_page=6",
      )
      .then((res) => {
        // console.log("res is", res.data.products);
        setLatestProducts(res.data.products || []);
        setIsloading(false);
      })
      .catch((err) => {});
  }, []);

  // console.log("product is", product);

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

  const latestProduct = [
    {
      image: "/assets/latest-1.png",
      name: "Comfort Handy Craft",
      price: "$65.00",
      discountedPrice: "$42.00",
    },
    {
      image: "/assets/latest-1.png",
      name: "Comfort Handy",
      price: "$65.00",
      discountedPrice: "$42.00",
    },
    {
      image: "/assets/latest-1.png",
      name: "Handy Craft",
      price: "$65.00",
      discountedPrice: "$42.00",
    },
    {
      image: "/assets/latest-6.png",
      name: "Comfort Craft",
      price: "$65.00",
      discountedPrice: "$42.00",
    },
    {
      image: "/assets/latest-5.png",
      name: "Comfort Handy Craft",
      price: "$65.00",
      discountedPrice: "$42.00",
    },
    {
      image: "/assets/latest-6.png",
      name: "Comfort Handy",
      price: "$65.00",
      discountedPrice: "$42.00",
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
        {trendingProducts.map((el) => {
          return (
            <TrendingProducts
              key={el._id}
              _id={el._id}
              image={el.image}
              code={el.code}
              price={el.price}
              name={el.name}
            />
          );
        })}
        {isLoading &&
          [1, 2, 3, 4].map((el) => {
            return <Skeleton className="h-[250px] w-[250px]" />;
          })}
        {!isLoading && trendingProducts.length == 0 && (
          <>
            <p>Error fetching data...</p>
          </>
        )}
      </div>
      <div className="container">
        <p className="text-center font-josefin text-[30px] font-bold text-[#151875] sm:text-[42px]">
          Latest Products
        </p>

        <ul className="mt-[19px] flex justify-center gap-[15px] font-lato text-[14px] text-[#151875] sm:gap-[60px] sm:text-[18px]">
          <li className="text-secondary underline">New Arrival</li>
          <li>Best Seller</li>
          <li>Featured</li>
          <li>Special Offer</li>
        </ul>

        <div className="container grid  gap-[116px] pt-[58px] md:grid-cols-2 lg:grid-cols-3 ">
          {latestProducts.map((el) => {
            return (
              <LatestProducts
                key={el._id}
                image={el.image}
                name={el.name}
                price={el.price}
                discountedPrice={el.price}
              />
            );
          })}

          {isLoading &&
            [1, 2, 3, 4, 5, 6].map((el) => {
              return <Skeleton className="h-[301px] w-[340px]" />;
            })}

          {!isLoading && latestProducts.length == 0 && (
            <>
              <p>Error fetching data</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
