import React from "react";
import figma from "../Assets/tools-image/figma-icon.svg";
import ps from "../Assets/tools-image/ps-icon.svg";
import ai from "../Assets/tools-image/ai-icon.svg";
import xd from "../Assets/tools-image/xd-icon.svg";

const styles = {
  ToolsContainer:
    "w-[1083px] flex flex-col gap-[50px] mb-[90px] max-mb:px-[33px] max-mb:w-full max-md:w-full max-md:px-[14px]",
  ToolsTextDiv: "flex flex-col gap-[12px] max-md:items-center",
  ToolsTextDivP: "text-[#525252] text-[15px] font-[500]",
  ToolsTextDivH2:
    "text-[#FEFFFF] text-[36px] font-[600] max-md:text-[32px] max-xs:text-center",
  ToolsDivExplanation:
    "bg-[var(--bg-box)] h-[40px] rounded-t-[24px] px-[48px] p-[10px] max-md:w-[344px] max-md:px-[10px] max-md:text-center max-xs:w-full  max-xs:h-fit",
  ToolsDivExplanationText: "text-[#525252] text-[16px] font-[400]",
  ToolsChildrenDiv:
    "h-[148px] border-[1px] border-[#525252] rounded-b-[24px] flex flex-row justify-center align-center items-center gap-[12px] childs-flex max-md:w-[344px] max-xs:w-full",
  ToolsChildrenImage:
    "w-[100px] h-[100px] p-[24px] bg-center bg-no-repeat flex flex-col items-center justify-center border-[1px] border-[#525252] rounded-[82px] max-md:w-[62px] max-md:h-[62px] bg-size",
  ExplanationContainer: "w-full flex flex-col max-md:items-center",
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
  const backgroundSizeStyle = {
    backgroundSize: "40px 30px",
  };
  return (
    <div className={styles.ToolsContainer}>
      <div className={styles.ToolsTextDiv}>
        <p className={styles.ToolsTextDivP}>Tools section</p>
        <h2 className={styles.ToolsTextDivH2}>Tools & Software</h2>
      </div>
      <div className={styles.ExplanationContainer}>
        <div className={styles.ToolsDivExplanation}>
          <p className={styles.ToolsDivExplanationText}>
            Here are the tools and software i use
          </p>
        </div>
        <div className={styles.ToolsChildrenDiv}>
          {object.map((item, index) => (
            <div
              className={styles.ToolsChildrenImage}
              style={{
                ...backgroundSizeStyle,
                backgroundImage: `url(${item.image})`,
              }}
              key={index}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
