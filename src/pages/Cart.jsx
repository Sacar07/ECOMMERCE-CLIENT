import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCartItems, removeCartItem } from "../redux/slice/cartSlice";

export default function Cart() {
  const cart = useSelector((store) => store.cart.value);
  const dispatch = useDispatch();
  //   console.log("cart", cart);
  return (
    <>
      {/* {JSON.stringify(cart)} */}
      <div className="container">
        <table className="... border-collapse  border-spacing-2 border border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-600">Products</th>
              <th className="border border-slate-600">Quantity</th>
              <th className="border border-slate-600">Actions</th>
            </tr>
          </thead>
          {cart?.map((el) => {
            return (
              <tbody>
                <tr>
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
