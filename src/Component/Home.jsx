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
  homeContainer: "w-[1083px] h-[335px] my-[90px] flex justify-between",
  homeDivOne:
    "w-[348px] bg-[var(--bg-box)] rounded-[24px] shadow-custom p-[24px] flex",
  homeDivtwo: "w-[341px] flex flex-col justify-between",
  homeDivtwoDivOne:
    "w-full h-[114px] bg-[var(--bg-box)] rounded-[24px] shadow-custom p-[24px]",
  homeDivtwoDivTwo: "w-full flex justify-between",
  homeDivtwoDivChild:
    "w-[71px] h-[72px] bg-[var(--bg-box)] rounded-[12px] shadow-custom flex justify-center items-center cursor-pointer overflow-visible social",
  homeDivtwoDivThree:
    "w-full h-[114px] bg-[var(--bg-box)] rounded-[24px] shadow-custom p-[24px]",
  homeDivThree:
    "w-[348px] bg-[var(--bg-box)] rounded-[24px] shadow-custom p-[24px]",
  homeDivOneFirstDiv: "w-full flex flex-col justify-center gap-[24px]",
  homeDivOneFirstImage: "flex justify-start",
  homeDivOneFirstDivH1: "text-[#FEFFFF] text-[36px] font-[600] text-start",
  homeDivOneFirstDivP: "text-[#525252] text-[15px] font-[500] text-start",
  homeDivSecondDiv: "flex justify-between h-[66px]",
  homeDivSecondDivText: "flex flex-col",
  homeDivSecondDivTextPOne: "text-[#525252] text-[24px] font-[400] text-start",
  homeDivSecondDivTextPTwo: "text-[#FEFFFF] text-[24px] font-[600] text-start",
  homeDivSecondDivImageDiv: "flex justify-center items-center w-[40px]",
  homeDivSecondDivImage: "w-[40px] h-[40px]",
  homeDivtwoDivThreeCountainer: "flex justify-between h-full",
  homeDivtwoDivThreeDiv: "flex flex-col",
  homeDivtwoDivThreeDivPOne: "text-[24px] text-[#525252] font-[400]",
  homeDivtwoDivThreeDivPTwo: "text-[24px] text-[#FEFFFF] font-[600]",
  homeDivtwoDivThreeImage: "flex justify-center items-center w-[40px]",
  homeDivThreeContainer: "flex flex-col gap-[24px]",
  homeDivThreeP: "text-[#FEFFFF] text-[36px] font-[600]",
  homeDivThreeButton:
    "w-[275px] h-[55px] px-[10px] py-[8px] bg-[var(--btn-purple)] text-[#FEFFFF] text-[24px] font-[600] rounded-[103px]",
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
