import React from "react";
import logo from "../Assets/home-image/icon-logo.svg";

const Footer = () => {
  return (
    <div className="w-[1083px] h-[33px]">
      <div className="flex flex-row items-center justify-between cursor-pointer">
        <div className="flex flex-row">
          <div className="pr-[10px]">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <p className="bg-[var(--btn-purple)] w-[63px] h-[25px] py-[6px] px-[10px] text-[10px] text-[#FEFFFF] font-[300] text-center align-middle rounded-[69px] shadow-custom">
              Portfolio
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[var(--bg-box)] shadow-custom px-[16px] py-[8px] rounded-[69px]">
            <p className="text-[#FEFFFF] text-[14px] font-[600]">
              © 2023 Miriam. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
