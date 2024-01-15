import React from "react";
import figma from "../Assets/tools-image/figma-icon.svg"
import ps from "../Assets/tools-image/ps-icon.svg";
import ai from "../Assets/tools-image/ai-icon.svg";
import xd from "../Assets/tools-image/xd-icon.svg";

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
    <div className="w-[1083px] flex flex-col gap-[50px] mb-[90px]">
      <div className="flex flex-col gap-[12px]">
        <p className="text-[#525252] text-[15px] font-[500]">Tools section</p>
        <h2 className="text-[#FEFFFF] text-[36px] font-[600]">
          Tools & Software
        </h2>
      </div>
      <div>
        <div className="bg-[var(--bg-box)] h-[40px] rounded-t-[24px] px-[48px] p-[10px]">
          <p className="text-[#525252] text-[16px] font-[400]">
            Here are the tools and software i use
          </p>
        </div>
        <div className="h-[148px] border-[1px] border-[#525252] rounded-b-[24px] flex flex-row justify-center align-center items-center gap-[12px]">
          {object.map((item, index) => (
            <div
              className="w-[100px] h-[100px] p-[24px] bg-center bg-no-repeat flex flex-col items-center justify-center border-[1px] border-[#525252] rounded-[82px]"
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
