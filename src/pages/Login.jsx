import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import TogglePassword from "../components/common/TogglePassword";

export default function Login() {
  return (
    <>
      <Breadcrumb title="My Account" subtext="pages" />
      <div className="container mx-[auto] mt-[120px] h-[474+50px] w-[544px] shadow-[1px_4px_25px_0px_rgba(0,0,0,0.3)]">
        <div className="p-[50px]">
          <p className="px-auto text-center font-josefin text-[32px] font-bold">
            Login
          </p>
          <p className="text-center font-lato text-[16px] text-[#9096B2]">
            Please login using account detail below.
          </p>
          <div className="form-group">
            <input
              type="text"
              placeholder="Email Address"
              className="form-control mt-[37px] block"
            />
          </div>
          <TogglePassword />
          <p className="mt-[13px] font-lato text-[17px] text-[#9096B2]">
            Forgot your password?
          </p>
          <button className="btn mt-[36px] w-full  ">Sign In</button>
          <p className="mt-[28px] text-center font-lato text-[17px] text-[#9096B2] ">
            Don’t have an Account?{" "}
            <Link className="text-primary" to={"/signup"}>
              {" "}
              Create account
            </Link>
          </p>
        </div>
      </div>
      <img
        className="mx-auto mt-[110px]"
        src="/assets/login-banner.png"
        alt=""
      />
    </>
  );
}
