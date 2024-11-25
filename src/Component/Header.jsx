import React from "react";
import logo from "../Assets/home-image/icon-logo.png";
import { Link } from "react-router-dom";

const styles = {
  headerContainer:
    "w-[1083px] h-[33px] mt-[40px] flex flex-row justify-between items-center max-mb:w-full max-mb:px-[33px] max-md:h-fit max-md:flex-col max-md:gap-[17px] max-md:items-start max-md:w-full max-md:px-[14px]",
  headerDivOne: "flex flex-row items-center cursor-pointer",
  headerDivOneP:
    "bg-[var(--btn-purple)] w-[63px] h-[25px] py-[6px] px-[10px] text-[10px] text-[#FEFFFF] font-[300] text-center align-middle rounded-[69px] shadow-custom",
  headerDivTwoUl:
    "flex flex-row gap-[13px] text-[#FEFFFF] text-[14px] font-[600] max-md:flex-wrap max-md:gap-[13px]",
  headerDivTwoli:
    "bg-[var(--bg-box)] h-[25px] py-[3px] px-[10px] text-[#FEFFFF] font-[300] text-center rounded-[69px] shadow-custom cursor-pointer",
};

function Header() {
  return (
    <div className={styles.headerContainer}>
      <Link rel="stylesheet" to="/">
        <div className={styles.headerDivOne}>
          <div className="pr-[10px]">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <p className={styles.headerDivOneP}>Portfolio</p>
          </div>
        </div>
      </Link>
      <div>
        <div>
          <ul className={styles.headerDivTwoUl}>
            <Link className={styles.headerDivTwoli} rel="stylesheet" to="/">
              home.
            </Link>
            <Link
              className={styles.headerDivTwoli}
              rel="stylesheet"
              to="/AboutMe"
            >
              about me.
            </Link>
            <Link
              className={styles.headerDivTwoli}
              rel="stylesheet"
              to="/Works"
            >
              works.
            </Link>
            <Link
              className={styles.headerDivTwoli}
              rel="stylesheet"
              to="/Contact"
            >
              contact.
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
