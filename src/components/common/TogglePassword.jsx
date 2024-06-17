import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import ErrorMessage from "./ErrorMessage";

export default function TogglePassword() {
  const [togglePassword, setTogglePassword] = useState(false);
  function handleTogglePassword() {
    togglePassword ? setTogglePassword(false) : setTogglePassword(true);
  }
  return (
    <>
      <div className="form-group relative">
        <input
          name="password"
          placeholder="Password"
          className="form-control block"
          type={togglePassword ? "text" : "password"}
        />
        <div className="absolute right-4 top-4 cursor-pointer">
          <FaEye onClick={handleTogglePassword} />
        </div>
        
      </div>
    </>
  );
}
