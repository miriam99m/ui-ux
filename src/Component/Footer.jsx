import React from "react";
import footerLogo from "../Assets/home-image/footer-logo.png";

const styles = {
  FooterContainer:
    "w-[1083px] h-fit mb-[90px] max-mb:w-full max-mb:px-[33px] max-md:px-[14px] max-mb:w-full",
  FooterDiv:
    "flex flex-row items-center justify-between max-md:flex-col max-md:items-start max-md:gap-[20px]",
  FooterContainerDiv: "flex flex-row items-center",
  FooterContainerDivContainer: "pr-[10px] flex justify-center h-fit",
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
          <div className={styles.FooterContainerDivContainer}>
            <img src={footerLogo} alt="logo" />
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
