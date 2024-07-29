import React from "react";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";

export default function LatestProducts(props) {
  return (
    <>
      <div className="group relative h-[301px] w-[340px] bg-primary-light shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)]  transition-all hover:bg-white sm:w-[360px]">
        <img
          className="absolute left-[18px] top-[25px] hidden h-[56px] w-[84px] transition-all group-hover:block"
          src="/assets/sale.png"
          alt=""
        />
        <img
          className="mx-auto mb-[10px] mt-[33px] h-[217px] w-full object-cover"
          src={props.image}
          alt="image load failed"
        />
        <div className="absolute left-[20px] top-[153px] hidden h-[30px] w-[30px] transition-all group-hover:block ">
          <span>
            <CiShoppingCart className="rounded-full bg-primary-light text-[#151875] " />
          </span>
          <span>
            <CiHeart className="mt-[17px] text-[#151875]" />
          </span>
          <span>
            <CiSearch className="mt-[14px] text-[#151875]" />
          </span>
        </div>

        <div className=" flex justify-between bg-white p-[8px] font-josefin text-[16px] transition-all ">
          <p>{props.name}</p>
          <div className="mr-[6px] flex gap-[10px] text-[14px]">
            <p>{props.discountedPrice}</p>
            <p className="text-secondary line-through">{props.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
