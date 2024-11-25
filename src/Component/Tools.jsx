import React from "react";
import figma from "../Assets/tools-image/figma-icon.png";
import ps from "../Assets/tools-image/ps-icon.png";
import ai from "../Assets/tools-image/ai-icon.png";
import xd from "../Assets/tools-image/xd-icon.png";

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
    "h-[148px] border-[1px] border-[#525252] rounded-b-[24px] flex flex-row justify-center align-center items-center gap-[12px] max-md:w-[344px] max-xs:w-full max-s:h-fit max-s:py-[30px]",
  ToolsChildrenImage:
    "w-[100px] h-[100px] bg-center bg-no-repeat flex flex-col items-center justify-center border-[1px] border-[#525252] rounded-[82px] max-md:w-[62px] max-md:h-[62px] bg-size",
  ExplanationContainer: "w-full flex flex-col max-md:items-center",
};

const Tools = () => {
  const object = [
    {
      image: figma,
      className: "w-[36px] h-[54px] max-md:w-[22px] max-md:h-[34px]",
    },
    {
      image: ps,
      className: "w-[58px] h-[43px] max-md:w-[40px] max-md:h-[30px]",
    },
    {
      image: ai,
      className: "w-[52px] h-[45px] max-md:w-[32px] max-md:h-[28px]",
    },
    {
      image: xd,
      className: "w-[63px] h-[43px] max-md:w-[38px] max-md:h-[26px]",
    },
  ];

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
          <div className="flex flex-wrap gap-[12px] max-s:justify-evenly max-s:items-center max-s:w-[200px]">
            {object.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-[100px] h-[100px] max-md:w-[62px] max-md:h-[62px] border border-gray-500 rounded-full overflow-hidden"
              >
                <div
                  className={`bg-center bg-no-repeat ${item.className}`}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "contain", // Ensures the image fits without being cut
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
