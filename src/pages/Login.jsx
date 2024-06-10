import React from "react";

export default function Login() {
  return (
    <>
      <div className="h-[160px] w-full bg-[#F6F5FF]  pt-[54px] shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)]  sm:h-[180px] sm:pt-[61px]  md:h-[200px] md:pt-[69px] lg:h-[226px] lg:pt-[77px]  xl:h-[254px] xl:pt-[87px]  xxl:h-[286px] xxl:pt-[98px]">
        <div className="container">
          <p className="font-josefin text-[36px] font-bold text-[#101750]">
            My Account
          </p>
          <p className="font-lato">
            Home . Pages .{" "}
            <span className="text-[16px] text-secondary">My Account</span>
          </p>
        </div>
      </div>
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
            Don’t have an Account?Create account
          </p>
        </div>
      </div>
        <img className="mx-auto mt-[110px]" src="/assets/login-banner.png" alt="" />
    </>
  );
}
