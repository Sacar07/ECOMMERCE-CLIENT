import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/common/Breadcrumb";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../redux/slice/cartSlice";
import { IoStarSharp } from "react-icons/io5";
import Products from "./Products";
import { CiHeart } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Slug() {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);

  useEffect(() => {
    axios
      .get(`https://ecommerce-sagartmg2.vercel.app/api/products/${params.slug}`)
      .then((res) => {
        // console.log("res", res.data.data);
        setProduct(res.data.data);
      })
      .catch((err) => {});
  }, []);
  console.log(product);
  return (
    <>
      <Breadcrumb title="Product Details" subtext="pages" />

      <div className="container  flex gap-[21px] shadow-xl">
        <div className="space-y-[11px] py-[13px]">
          <img className="size-[150px]" src={product.image} alt="" />
          <img src={product.image} className="size-[150px]" alt="" />
          <img className="size-[150px]" src={product.image} alt="" />
        </div>

        <div>
          <img
            className="h-[498px] w-[375px] py-[13px]"
            src={product.image}
            alt=""
          />
        </div>

        <div className="space-y-2 font-josefin text-[#151875]">
          <div className="pt-[123px]">
            <IoStarSharp className="inline-block  text-[#FFC416]" />
            <IoStarSharp className="inline-block text-[#FFC416]" />
            <IoStarSharp className="inline-block text-[#FFC416]" />
            <IoStarSharp className="inline-block text-[#FFC416]" />
            <IoStarSharp className="inline-block text-[#FFC416]" />(
            {product?.reviews[0]?.rating})
          </div>
          <div>
            <span>${product.price}</span>
            <span className="pl-[18px] text-secondary line-through">
              ${product.price}{" "}
            </span>
          </div>
          <p className="font-bold">Color</p>
          <p className="text-[16px] text-[#A9ACC6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus porttitor purus, et volutpat sit.
          </p>
          <button
            onClick={() => {
              dispatch(addCartItem(product));
            }}
            className="btn"
          >
            Add to cart
          </button>
          <button>
            <CiHeart className="ml-3 inline-block size-6" />
          </button>{" "}
          <div className="font-bold  ">Categories: {product.categories[0]}</div>
          <p className="font-bold  ">Tags</p>
          <div className="font-bold  ">
            Share
            <span className="pl-[15px] ">
              <FaFacebook className="inline-block " />{" "}
              <FaInstagram className="ml-[10px] inline-block" />{" "}
              <FaTwitter className="ml-[10px] inline-block" />
            </span>
          </div>
        </div>
      </div>
      <div className="container w-full bg-[#F9F8FE]"></div>
    </>
  );
}
