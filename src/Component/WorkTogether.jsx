import React from "react";
import image from "../Assets/home-image/emoji-vi.svg";

const styles = {
  WorkTogetherContainer:
    "w-[1083px] flex flex-col items-center gap-[24px] border-[1px] border-[#525252] rounded-[24px] p-[24px] mb-[90px] max-xl:w-[84vw]",
  WorkTogetherH2: "text-[#FEFFFF] text-[36px] font-[600]",
  WorkTogetherBtn:
    "w-[230px] h-[55px] bg-[var(--btn-purple)] rounded-[103px] text-[#FEFFFF] font-[600] text-[24px]",
  WorkTogetherP: "text-[#525252] text-[16px] font-[400]",
};

const WorkTogether = () => {
  return (
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
  );
};

export default WorkTogether;
