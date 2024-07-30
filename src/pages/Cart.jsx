import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartItem,
  clearCartItems,
  decreaseCartItem,
  removeCartItem,
  setCartItem,
} from "../redux/slice/cartSlice";
import { MdCancel } from "react-icons/md";
import Breadcrumb from "../components/common/Breadcrumb";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Cart() {
  const cart = useSelector((store) => store.cart.value);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("saving", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      console.log("loading", savedCart);
      dispatch(setCartItem(JSON.parse(savedCart)));
    }
  }, [dispatch]);

  return (
    <>
      {/* {JSON.stringify(cart)} */}
      {console.log("cart is", cart)}
      <Breadcrumb title="Shopping Cart" subtext="pages" />
      <div className="container mt-[130px]">
        <table className=" border-collapse  border-spacing-2 ">
          <thead>
            <tr className="font-josefin  text-[#1D3178]">
              <th className="p-2">Product</th>
              <th className="columns-2 p-2">Price</th>
              <th className="columns-2 p-2">Quantity</th>
              <th className=" p-2">Total</th>
              {/* <th className="p-2 ">Cart Totals</th> */}
            </tr>
          </thead>
          {cart?.map((el) => {
            return (
              <tbody className="space-y-10 ">
                <tr key={el._id} className="relative border-b p-4">
                  <td className=" columns-2 p-[10px] ">
                    <div className=" flex  gap-[16px] ">
                      <img className="size-[84px]" src={el.image} alt="" />
                      <div className="absolute left-[84px] top-0 cursor-pointer">
                        <MdCancel
                          onClick={() => dispatch(removeCartItem(el._id))}
                        />
                      </div>
                      <div className=" font-josefin text-[14px] font-bold ">
                        {el.name}
                        <div className="text-[12px] font-normal text-[#A1A8C1]">
                          Color: Brown <br />
                          Size: XL
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="relative columns-2 text-center font-josefin text-[14px]">
                    <div className="absolute">${el.price}</div>
                  </td>
                  <td className="relative columns-2 text-center font-josefin text-[12px]">
                    <div className=" absolute left-[20px] bg-gray-100 text-[#BEBFC2]">
                      {" "}
                      <span
                        onClick={() => {
                          dispatch(decreaseCartItem(el));
                        }}
                        className="inline-block cursor-pointer bg-[#E7E7EF] "
                      >
                        <FaMinus />
                      </span>{" "}
                      <span className="p-[6px]  ">{el.quantity}</span>
                      <span
                        onClick={() => {
                          dispatch(addCartItem(el));
                        }}
                        className="inline-block cursor-pointer bg-[#E7E7EF] "
                      >
                        <FaPlus />
                      </span>
                    </div>
                  </td>
                  <td className="relative columns-2 text-center font-josefin text-[14px] ">
                    <div className="absolute left-[10px]">
                      ${el.price * el.quantity}
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <table className="absolute left-[1000px] top-[547px]">
          <thead>
            <tr className=" p-[34px]">
              <th className="pb-[42px] text-[#1D3178]">Cart Totals</th>
            </tr>
          </thead>
          <tbody className="  bg-[#E8E6F1]">
            <tr className="border-b border-b-slate-300  pt-[34px]">
              <td className="px-4 py-2 pt-[34px] ">Subtotals:</td>
              <td className="px-4 py-2 pt-[34px] ">
                $ {cart.reduce((acc, el) => acc + el.price * el.quantity, 0)}
              </td>
            </tr>
            <tr className="border-b border-b-slate-300">
              <td className="px-4 py-2 pt-[34px] ">Totals:</td>
              <td className="px-4 py-2  pt-[34px]">
                $
                {cart.reduce((acc, el) => acc + el.price * el.quantity, 0) +
                  100}
              </td>
            </tr>
            <tr className="">
              <td className="bg-[#E8E6F1] px-4  py-2   pt-[27px] font-lato text-[12px] text-[#8A91AB] ">
                shipping and taxes calculated at checkout
              </td>
              <td> </td>
            </tr>
            <button className="btn mb-[32px] ml-20  mt-[34px] px-4  py-2">
              Proceed To Checkout
            </button>
            <td></td>
          </tbody>
          {/* <span className="bg-[#E8E6F1] px-4   py-2 font-lato text-[12px] text-[#8A91AB] ">
            shipping and taxes calculated at checkout
          </span> */}
        </table>

        <button
          onClick={() => {
            dispatch(clearCartItems());
          }}
          className="btn mt-6"
        >
          {" "}
          Clear all
        </button>
      </div>
    </>
  );
}
