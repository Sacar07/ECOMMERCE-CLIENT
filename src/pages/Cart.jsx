import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartItem,
  clearCartItems,
  removeCartItem,
  setCartItem,
} from "../redux/slice/cartSlice";
import { MdCancel } from "react-icons/md";

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
      {JSON.stringify(cart)}
      <div className="container">
        <table className="... border-collapse  border-spacing-2 border border-slate-500">
          <thead>
            <tr className="font-josefin">
              <th className="border border-slate-600">Product</th>
              <th className="border border-slate-600">Price</th>
              <th className="border border-slate-600">Quantity</th>
              <th className="border border-slate-600">Total</th>
              <th className="border border-slate-600">Cart Totals</th>
              {/* <th className="border border-slate-600">Actions</th> */}
            </tr>
          </thead>
          {cart?.map((el) => {
            return (
              <tbody>
                <tr key={el._id}>
                  <td className="size-[84px] border border-slate-700">
                    <img src={el.image} alt="" />
                    <MdCancel />
                  </td>
                  <td className="border border-slate-700">{el.name}</td>
                  <td className="border border-slate-700">{el.quantity}</td>

                  <button
                    onClick={() => dispatch(removeCartItem(el._id))}
                    className="rounded-md border border-black text-[12px] "
                  >
                    Delete
                  </button>
                </tr>
              </tbody>
            );
          })}
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
