import React from "react";
import image from "../Assets/home-image/emoji-vi.svg";

const WorkTogether = () => {
  return (
    <div className="w-[1083px] flex flex-col items-center gap-[24px] border-[1px] border-[#525252] rounded-[24px] p-[24px] mb-[90px]">
      <img className="w-[77px]" src={image} alt="emoji" />
      <h2 className="text-[#FEFFFF] text-[36px] font-[600]">
        Wanna work together?
      </h2>
      <a href="mailto:Mariammelqonyan99.92@gmail.com" rel="noreferrer">
        <button className="w-[230px] h-[55px] bg-[var(--btn-purple)] rounded-[103px] text-[#FEFFFF] font-[600] text-[24px]">
          Write me
        </button>
      </a>
      <p className="text-[#525252] text-[16px] font-[400]">
        Promise i will reply back within 24 hours,
      </p>
    </div>
  );
};

export default WorkTogether;
