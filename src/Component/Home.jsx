import React from "react";
import emoji from "../Assets/home-image/emoji-blink.svg";
import laptop from "../Assets/home-image/emoji-laptop.svg";
import flag from "../Assets/home-image/flag.svg";
import cute from "../Assets/home-image/emoji-cute.svg";
import Istagram from "../Assets/social-image/insta-icons.svg";
import Telegram from "../Assets/social-image/tele-icons.svg";
import Linkdin from "../Assets/social-image/linkd-icon.svg";
import Behance from "../Assets/social-image/behance-icon.svg";

const styles = {
  homeContainer:
    "w-[1083px] h-[335px] my-[90px] justify-center flex gap-[23px] max-mb:w-full max-mb:px-[33px] max-mb:h-fit max-md:flex-col max-md:items-center max-md:px-[14px] max-md:gap-[23px] max-sm:flex-start",
  homeDivOne:
    "w-[348px] bg-[var(--bg-box)] rounded-[24px] shadow-custom p-[24px] flex max-md:w-[343px] max-xs:w-full",
  homeDivtwo:
    "w-[341px] flex flex-col items-center gap-[17px] max-mb:w-[26vw] max-md:w-[343px] max-xs:w-full",
  homeDivtwoDivOne:
    "w-full h-[114px] bg-[var(--bg-box)] rounded-[24px] shadow-custom p-[24px] max-mb:w-[26vw] max-md:w-full max-mb:px-[12px]",
  homeDivtwoDivTwo:
    "w-full flex gap-[19px] max-mb:w-[26vw] max-lg:flex-wrap max-lg:w-[200px] max-lg:justify-center max-md:w-full max-xs:",
  homeDivtwoDivChild:
    "w-[71px] h-[72px] bg-[var(--bg-box)] rounded-[12px] shadow-custom flex justify-center items-center cursor-pointer overflow-visible social",
  homeDivtwoDivThree:
    "w-full h-[114px] bg-[var(--bg-box)] rounded-[24px] shadow-custom p-[24px] max-mb:w-[26vw] max-md:w-full",
  homeDivThree:
    "w-[348px] bg-[var(--bg-box)] rounded-[24px] shadow-custom p-[24px] max-md:w-[343px] max-md:h-[330px] max-xs:w-full",
  homeDivOneFirstDiv: "w-full flex flex-col gap-[24px] justify-center",
  homeDivOneFirstImage: "flex justify-start",
  homeDivOneFirstDivH1:
    "text-[#FEFFFF] text-[36px] font-[600] text-start max-mb:text-[30px] max-lg:text-[27px] max-md:text-[32px]",
  homeDivOneFirstDivP: "text-[#525252] text-[15px] font-[500] text-start",
  homeDivSecondDiv: "flex justify-between h-full",
  homeDivSecondDivText: "flex flex-col justify-between",
  homeDivSecondDivTextPOne:
    "text-[#525252] text-[24px] font-[400] text-start max-mb:text-[22px] max-lg:text-[18px] max-md:text-[24px]",
  homeDivSecondDivTextPTwo:
    "text-[#FEFFFF] text-[24px] font-[600] text-start max-mb:text-[22px] max-lg:text-[20px] max-md:text-[24px] max-mb:leading-5",
  homeDivSecondDivImageDiv: "flex justify-center items-center w-[40px]",
  homeDivSecondDivImage: "w-[40px] h-[40px]",
  homeDivtwoDivThreeCountainer: "flex justify-between h-full",
  homeDivtwoDivThreeDiv: "flex flex-col justify-between",
  homeDivtwoDivThreeDivPOne:
    "text-[24px] text-[#525252] font-[400]  max-mb:text-[22px] max-lg:text-[20px] max-md:text-[24px]",
  homeDivtwoDivThreeDivPTwo:
    "text-[24px] text-[#FEFFFF] font-[600]  max-mb:text-[22px] max-lg:text-[20px] max-md:text-[24px]",
  homeDivtwoDivThreeImage: "flex justify-center items-center w-[40px]",
  homeDivThreeContainer:
    "h-full flex flex-col gap-[24px] max-lg:justify-center",
  homeDivThreeP:
    "text-[#FEFFFF] text-[36px] font-[600] max-md:text-[30px] max-mb:text-[32px] max-lg:text-[27px] max-md:text-[32px]",
  homeDivThreeButton:
    "w-[275px] h-[55px] px-[10px] py-[8px] bg-[var(--btn-purple)] text-[#FEFFFF] text-[24px] font-[600] rounded-[103px] max-mb:w-full",
};

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeDivOne}>
        <div className={styles.homeDivOneFirstDiv}>
          <div className={styles.homeDivOneFirstImage}>
            <img src={emoji} alt="blinking-emoji" />
          </div>
          <div>
            <h1 className={styles.homeDivOneFirstDivH1}>
              Innovative UX,
              <br />
              Stunning UI
            </h1>
          </div>
          <div>
            <p className={styles.homeDivOneFirstDivP}>Miriam . Freelancer</p>
          </div>
        </div>
      </div>
      <div className={styles.homeDivtwo}>
        <div className={styles.homeDivtwoDivOne}>
          <div className={styles.homeDivSecondDiv}>
            <div className={styles.homeDivSecondDivText}>
              <p className={styles.homeDivSecondDivTextPOne}>Position</p>
              <p className={styles.homeDivSecondDivTextPTwo}>UI / UX Desiger</p>
            </div>
            <div className={styles.homeDivSecondDivImageDiv}>
              <img
                src={laptop}
                alt="emoji-laptop"
                className={styles.homeDivSecondDivImage}
              />
            </div>
          </div>
        </div>
        <div className={styles.homeDivtwoDivTwo}>
          <div className={styles.homeDivtwoDivChild}>
            <a
              href="https://www.instagram.com/_miriami/?igshid=MzRlODBiNWFlZA%3D%3D"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Istagram} alt="social-Istagram" />
            </a>
          </div>
          <div className={styles.homeDivtwoDivChild}>
            <a href="https://t.me/Miriam_ian" rel="noreferrer" target="_blank">
              <img src={Telegram} alt="social-Telegram" />
            </a>
          </div>
          <div className={styles.homeDivtwoDivChild}>
            <a
              href="https://www.linkedin.com/in/mariam-melqonyan/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Linkdin} alt="social-Linkdin" />
            </a>
          </div>
          <div className={styles.homeDivtwoDivChild}>
            <a
              href="https://www.behance.net/miriamian"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Behance} alt="social-Behance" />
            </a>
          </div>
        </div>
        <div className={styles.homeDivtwoDivThree}>
          <div className={styles.homeDivtwoDivThreeCountainer}>
            <div className={styles.homeDivtwoDivThreeDiv}>
              <p className={styles.homeDivtwoDivThreeDivPOne}>Based in</p>
              <p className={styles.homeDivtwoDivThreeDivPTwo}>Armenia</p>
            </div>
            <div className={styles.homeDivtwoDivThreeImage}>
              <img src={flag} alt="Armanian-flag" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homeDivThree}>
        <div className={styles.homeDivThreeContainer}>
          <div>
            <img src={cute} alt="emoji-cute" />
          </div>
          <div>
            <p className={styles.homeDivThreeP}>Wanna work together?</p>
          </div>
          <div>
            <a href="mailto:Mariammelqonyan99.92@gmail.com" rel="noreferrer">
              <button className={styles.homeDivThreeButton}>Email</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
