import React from "react";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../redux/slice/cartSlice";
import { toast } from "react-toastify";

export default function TrendingProducts(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        navigate(`/products/${props._id}`);
      }}
      className="group relative bg-primary-light pt-[46px] shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)]  hover:cursor-pointer "
    >
      <div
        onClick={(e) => {
          e.stopPropagation(); //to avoid the Slug component to render which renders when its parents onclick is triggered
          dispatch(addCartItem(props));
          toast.success("Product added to the cart");
        }}
        className="absolute left-[11px] top-[11px] hidden h-[30px] w-[30px] items-center justify-center rounded-full bg-[#EEEFFB] transition-all hover:bg-secondary group-hover:flex"
      >
        <CiShoppingCart className="text-[#00009D]" />
      </div>
      <div className="absolute left-[57px] top-[11px] hidden h-[30px] w-[30px] items-center justify-center transition-all group-hover:flex ">
        <CiHeart className="text-[#00009D]" />
      </div>
      <div className="absolute left-[90px] top-[11px] hidden h-[30px] w-[30px] items-center justify-center transition-all group-hover:flex ">
        <CiSearch className="h-[15px] w-[15px] text-[#00009D]" />
      </div>
      <img
        src={props.image}
        className="mx-auto mb-[10px] mt-[32px] h-[150px] w-full object-cover "
        alt="chair-1"
      />
      <div className="space-y-[12px] bg-white p-[15px] text-center transition-all group-hover:bg-[#2F1AC4] ">
        <p className="font-lato text-[18px] font-bold text-secondary group-hover:text-white">
          {props.name}
        </p>
        <div className="flex justify-center gap-[5px]">
          <div className="h-[4px] w-[14px]  rounded  bg-[#05E6B7]"></div>
          <div className="h-[4px] w-[14px] rounded bg-secondary"></div>
          <div className="h-[4px] w-[14px] rounded bg-[#00009D]"></div>
        </div>
        <p className="font-josefin text-[14px] text-[#151875] group-hover:text-white">
          Code - Y523201
        </p>
        <p className="font-lato text-[14px] text-[#151875] group-hover:text-white">
          {props.price}
        </p>
      </div>
    </div>
  );
}
