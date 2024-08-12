import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";

export default function PageNotFound() {
  return (
    <div>
      <Breadcrumb title="404 Not Found" subtext="Pages" />

      <img className="mx-auto" src="public/assets/image.png" alt="" />
      <img
        className="mx-auto mb-[60px] mt-[156px]"
        src="public/assets/login-banner.png"
        alt=""
      />
    </div>
  );
}
