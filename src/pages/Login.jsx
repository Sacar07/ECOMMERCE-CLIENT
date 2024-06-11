import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";

export default function Login() {
  return (
    <>
      <Breadcrumb title="My Account" subtext="pages" />
      <div className="container mx-[auto] mt-[120px] h-[474+50px] w-[544px] border border-[#C2C5E1] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)]">
        <div className="p-[50px]">
          <p className="px-auto text-center font-josefin text-[32px] font-bold">
            Login
          </p>
          <p className="text-center font-lato text-[16px] text-[#9096B2]">
            Please login using account detail below.
          </p>
          <input
            type="text"
            placeholder="Email Address"
            className="mt-[37px] block h-[52px] w-[432px] rounded-[2px] border border-[#C2C5E1] pl-[13px]"
          />
          <input
            placeholder="Password"
            className=" mt-[23px] block h-[52px] w-[432px] rounded-[2px] border border-[#C2C5E1] pl-[13px]"
            type="text"
          />
          <p className="mt-[13px] font-lato text-[17px] text-[#9096B2]">
            Forgot your password?
          </p>
          <button className="mt-[36px] h-[52px] w-[432px] rounded-[3px] bg-secondary font-bold text-white ">
            Sign In
          </button>
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
