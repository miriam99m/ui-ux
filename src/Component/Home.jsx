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
};

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeDivOne}>
        <div className="w-full flex flex-col justify-center gap-[24px]">
          <div className="flex justify-start">
            <img src={emoji} alt="blinking-emoji" />
          </div>
          <div>
            <h1 className="text-[#FEFFFF] text-[36px] font-[600] text-start">
              Innovative UX,
              <br />
              Stunning UI
            </h1>
          </div>
          <div>
            <p className="text-[#525252] text-[15px] font-[500] text-start">
              Miriam . Freelancer
            </p>
          </div>
        </div>
      </div>
      <div className={styles.homeDivtwo}>
        <div className={styles.homeDivtwoDivOne}>
          <div className="flex justify-between h-[66px]">
            <div className="flex flex-col">
              <p className="text-[#525252] text-[24px] font-[400] text-start">
                Position
              </p>
              <p className="text-[#FEFFFF] text-[24px] font-[600] text-start">
                UI / UX Desiger
              </p>
            </div>
            <div className="flex justify-center items-center w-[40px]">
              <img
                src={laptop}
                alt="emoji-laptop"
                className="w-[40px] h-[40px]"
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
          <div className="flex justify-between h-full">
            <div className="flex flex-col">
              <p className="text-[24px] text-[#525252] font-[400]">Based in</p>
              <p className="text-[24px] text-[#FEFFFF] font-[600]">Armenia</p>
            </div>
            <div className="flex justify-center items-center w-[40px]">
              <img src={flag} alt="Armanian-flag" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homeDivThree}>
        <div className="flex flex-col gap-[24px]">
          <div>
            <img src={cute} alt="emoji-cute" />
          </div>
          <div>
            <p className="text-[#FEFFFF] text-[36px] font-[600]">
              Wanna work together?
            </p>
          </div>
          <div>
            <a href="mailto:Mariammelqonyan99.92@gmail.com" rel="noreferrer">
              <button className="w-[275px] h-[55px] px-[10px] py-[8px] bg-[var(--btn-purple)] text-[#FEFFFF] text-[24px] font-[600] rounded-[103px]">
                Email
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
