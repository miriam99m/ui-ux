import React from "react";
import figma from "../Assets/tools-image/figma-icon.svg"
import ps from "../Assets/tools-image/ps-icon.svg";
import ai from "../Assets/tools-image/ai-icon.svg";
import xd from "../Assets/tools-image/xd-icon.svg";

const styles = {
  ToolsContainer: "w-[1083px] flex flex-col gap-[50px] mb-[90px]",
  ToolsTextDiv: "flex flex-col gap-[12px]",
  ToolsTextDivP: "text-[#525252] text-[15px] font-[500]",
  ToolsTextDivH2: "text-[#FEFFFF] text-[36px] font-[600]",
  ToolsDivExplanation:
    "bg-[var(--bg-box)] h-[40px] rounded-t-[24px] px-[48px] p-[10px]",
  ToolsDivExplanationText: "text-[#525252] text-[16px] font-[400]",
  ToolsChildrenDiv: "h-[148px] border-[1px] border-[#525252] rounded-b-[24px] flex flex-row justify-center align-center items-center gap-[12px]",
  ToolsChildrenImage: "w-[100px] h-[100px] p-[24px] bg-center bg-no-repeat flex flex-col items-center justify-center border-[1px] border-[#525252] rounded-[82px]",
};

const Tools = () => {
    const object = [
      {
        image: figma,
      },
      {
        image: ps,
      },
      {
        image: ai,
      },
      {
        image: xd,
      },
    ];
  return (
    <div className={styles.ToolsContainer}>
      <div className={styles.ToolsTextDiv}>
        <p className={styles.ToolsTextDivP}>Tools section</p>
        <h2 className={styles.ToolsTextDivH2}>Tools & Software</h2>
      </div>
      <div>
        <div className={styles.ToolsDivExplanation}>
          <p className={styles.ToolsDivExplanationText}>
            Here are the tools and software i use
          </p>
        </div>
        <div className={styles.ToolsChildrenDiv}>
          {object.map((item, index) => (
            <div
              className={styles.ToolsChildrenImage}
              style={{ backgroundImage: `url(${item.image})` }}
              key={index}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
