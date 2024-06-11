import React from "react";

export default function Breadcrumb(props) {
  return (
    <>
      <div className="h-[160px] w-full bg-[#F6F5FF]  pt-[54px] shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)]  sm:h-[180px] sm:pt-[61px]  md:h-[200px] md:pt-[69px] lg:h-[226px] lg:pt-[77px]  xl:h-[254px] xl:pt-[87px]  xxl:h-[286px] xxl:pt-[98px]">
        <div className="container">
          <p className="font-josefin text-[36px] font-bold text-[#101750]">
            {props.title}
          </p>
          <p className="font-lato">
            Home . {props.subtext} .{" "}
            <span className="text-[16px] text-secondary">{props.title}</span>
          </p>
        </div>
      </div>
    </>
  );
}
