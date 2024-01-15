import React from "react";
import Lpurple from "../Assets/purple-image/lightpurple.svg";
import Mpurple from "../Assets/purple-image/midpurple.svg";
import MDpurple from "../Assets/purple-image/middarkpurple.svg";
import Dpurple from "../Assets/purple-image/darkpurple.svg";

const Skills = () => {
  const object = [
    {
      text: "Problem Solving",
      paragraph:
        "Innovative problem-solving and impactful solutions for a better experience.",
      image: Lpurple,
    },
    {
      text: "UX Metrics",
      paragraph:
        "Data-driven insights for improving user engagement and satisfaction.",
      image: Mpurple,
    },
    {
      text: "Visual Hierarchy",
      paragraph:
        "Compelling visual hierarchy and composition in order to design better.",
      image: MDpurple,
    },
    {
      text: "Design Decisions",
      paragraph:
        "Leveraging valuable data insights to make informed design decisions.",
      image: Dpurple,
    },
  ];
  return (
    <div className="w-[1083px] flex flex-col gap-[50px] mb-[90px]">
      <div className="flex flex-col gap-[12px]">
        <p className="text-[#525252] text-[15px] font-[500]">Skills section</p>
        <h2 className="text-[#FEFFFF] text-[36px] font-[600]">
          Skills & experience
        </h2>
      </div>
      <div className="flex flex-row flex-wrap gap-[24px]">
        {object.map((item, index) => (
          <div
            key={index}
            className="flex flex-row gap-[12px] text-start px-[24px] py-[30px] w-[527px] h-[131px] rounded-[24px] border-[1px] border-solid border-[#525252]"
          >
            <div>
              <div
                className="w-[20px] h-[20px]"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            </div>
            <div className="flex flex-col gap-[4px] w-[369px]">
              <h2 className="text-[#FEFFFF] text-[24px] font-[600] leading-5">
                {item.text}
              </h2>
              <p className="text-[#525252] text-[16px] font-[500]">
                {item.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
