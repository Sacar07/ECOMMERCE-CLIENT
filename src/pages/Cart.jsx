import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCartItems } from "../redux/slice/cartSlice";

export default function Cart() {
  const cart = useSelector((store) => store.cart.value);
  const dispatch = useDispatch();
//   console.log("cart", cart);
  return (
    <>
      <div className="container">
        <p> List of cart items:</p>
        <ul>
          {cart?.map((el) => {
            return <li>{el}</li>;
          })}
        </ul>
        <button onClick={() => {
            dispatch(clearCartItems())
        }} className="btn"> Clear all</button>
      </div>
    </>
  );
}
