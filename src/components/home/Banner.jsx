import React from "react";

export default function Banner(props) {
  return (
    <>
      {/* <img src={banner1} /> one way */}

      <div className={`${props.background} bg-cover bg-center bg-no-repeat`}>
        <div className="container py-[118px] sm:py-[132px] md:py-[148px] lg:py-[166px] xl:py-[186px] xxl:py-[210px] ">
          <p className="font-lato text-[16px] font-bold text-secondary">   
            {props.label}
          </p>
          <p className="font-josefin text-[29px] font-bold sm:text-[32px] md:w-[700px] md:text-[36px] lg:text-[42px] xl:text-[46px] xxl:text-[52px]">
            {props.heading}
          </p>
          <p className="font-lato text-[16px] font-bold text-[#8A8FB9] md:w-[560px]">
            {props.description}
          </p>
          <button  className="btn mt-4 font-josefin" to={props.redirectUrl}>Shop Now</button>
        </div>
      </div>
    </>
  );
}
