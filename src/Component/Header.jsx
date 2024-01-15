import React from "react";
import logo from "../Assets/home-image/icon-logo.svg";
import { Link, useLocation } from "react-router-dom";

const styles = {
  headerContainer:
    "w-[1083px] h-[33px] flex flex-row justify-between items-center",
  headerDivOne: "flex flex-row items-center cursor-pointer",
  headerDivOneP:
    "bg-[var(--btn-purple)] w-[63px] h-[25px] py-[6px] px-[10px] text-[10px] text-[#FEFFFF] font-[300] text-center align-middle rounded-[69px] shadow-custom",
  headerDivTwoUl:
    "flex flex-row gap-[13px] text-[#FEFFFF] text-[14px] font-[600]",
  headerDivTwoli:
    "bg-[var(--bg-box)] h-[25px] py-[3px] px-[10px] text-[#FEFFFF] font-[300] text-center align-middle rounded-[69px] shadow-custom cursor-pointer",
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
