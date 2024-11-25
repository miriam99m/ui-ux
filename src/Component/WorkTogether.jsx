import React from "react";
import image from "../Assets/home-image/emoji-vi.png";

const styles = {
  main: "w-full flex flex-col items-center max-mb:px-[33px] max-md:h-fit max-md:px-[14px]",
  WorkTogetherContainer:
    "w-[1083px] flex flex-col items-center gap-[24px] border-[1px] border-[#525252] rounded-[24px] p-[24px] mb-[90px] max-mb:w-full max-md:w-[348px] max-md:h-fit max-xs:w-full",
  WorkTogetherH2: "text-[#FEFFFF] text-[36px] font-[600] max-md:text-center",
  WorkTogetherBtn:
    "w-[230px] h-[55px] bg-[var(--btn-purple)] rounded-[103px] text-[#FEFFFF] font-[600] text-[24px]",
  WorkTogetherP: "text-[#525252] text-[16px] font-[400] max-md:text-center",
};

const WorkTogether = () => {
  return (
    <div className={styles.main}>
      <div className={styles.WorkTogetherContainer}>
        <img className="w-[77px]" src={image} alt="emoji" />
        <h2 className={styles.WorkTogetherH2}>Wanna work together?</h2>
        <a href="mailto:Mariammelqonyan99.92@gmail.com" rel="noreferrer">
          <button className={styles.WorkTogetherBtn}>Write me</button>
        </a>
        <p className={styles.WorkTogetherP}>
          Promise i will reply back within 24 hours,
        </p>
      </div>
    </div>
  );
};

export default WorkTogether;
