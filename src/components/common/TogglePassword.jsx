import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

export default function TogglePassword(props) {
  const [togglePassword, setTogglePassword] = useState(false);
  function handleTogglePassword() {
    togglePassword ? setTogglePassword(false) : setTogglePassword(true);
  }
  return (
    <>
      <div className="form-group relative">
        <input
          value={props.value}
          name="password"
          placeholder="Password"
          className="form-control block"
          type={togglePassword ? "text" : "password"}
          onChange={props.onChange}
        />
        <div className="absolute right-4 top-4 cursor-pointer">
          <FaEye onClick={handleTogglePassword} />
        </div>
      </div>
    </>
  );
}
