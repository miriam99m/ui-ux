import React from "react";
import logo from "../Assets/home-image/icon-logo.svg";

const styles = {
  FooterContainer:
    "w-[1083px] h-[33px]  max-mb:w-full max-mb:px-[33px] max-md:px-[14px] max-mb:w-full max-md:mb-[127px]",
  FooterDiv:
    "flex flex-row items-center justify-between max-md:flex-col max-md:items-start max-md:gap-[20px]",
  FooterContainerDiv: "flex flex-row",
  FooterContainerDivP:
    "bg-[var(--btn-purple)] w-[63px] h-[25px] py-[6px] px-[10px] text-[10px] text-[#FEFFFF] font-[300] text-center align-middle rounded-[69px] shadow-custom",
  FooterTextDiv:
    "bg-[var(--bg-box)] shadow-custom px-[16px] py-[8px] rounded-[69px]",
  FooterTextDivP: "text-[#FEFFFF] text-[14px] font-[600]",
};

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterDiv}>
        <div className={styles.FooterContainerDiv}>
          <div className="pr-[10px] flex justify-center">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <p className={styles.FooterContainerDivP}>Portfolio</p>
          </div>
        </div>
        <div className="max-s:w-full">
          <div className={styles.FooterTextDiv}>
            <p className={styles.FooterTextDivP}>
              © 2024 Miriam. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
