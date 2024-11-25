import React from "react";
import Lpurple from "../Assets/purple-image/lightpurple.png";
import Mpurple from "../Assets/purple-image/midpurple.png";
import MDpurple from "../Assets/purple-image/middarkpurple.png";
import Dpurple from "../Assets/purple-image/darkpurple.png";

const styles = {
  SkillsContainer:
    "w-[1083px] flex flex-col gap-[50px] mb-[90px] max-mb:w-full max-md:w-full max-md:px-[14px]",
  SkillsTextDiv: "flex flex-col gap-[12px] max-md:items-center",
  SkillsTextDivP: "text-[#525252] text-[15px] font-[500]",
  SkillsTextDivH2:
    "text-[#FEFFFF] text-[36px] font-[600] max-md:text-[32px] max-xs:text-center",
  SkillsChildrenContainer:
    "flex flex-row justify-center flex-wrap justify-between gap-y-[24px] max-mb:justify-center max-mb:gap-x-[28px] max-md:justify-center container-skill max-md:flex-col max-md:items-center ",
  SkillsChildrenDiv:
    "flex flex-row gap-[12px] text-start px-[24px] py-[30px] w-[48%] h-[131px] rounded-[24px] border-[1px] border-solid border-[#525252] max-md:py-[20px] max-mb:w-[348px] max-xs:w-full max-xs:h-fit",
  SkillsChildrenImage: "w-[20px] h-[20px]",
  SkillsChildrenDivText: "flex flex-col gap-[4px] w-[369px]",
  SkillsChildrenDivTextH2:
    "text-[#FEFFFF] text-[24px] font-[600] leading-5 max-xs:leading-8",
  SkillsChildrenDivTextP: "text-[#525252] text-[16px] font-[500]",
};

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
    <div className={styles.SkillsContainer}>
      <div className={styles.SkillsTextDiv}>
        <p className={styles.SkillsTextDivP}>Skills section</p>
        <h2 className={styles.SkillsTextDivH2}>Skills & experience</h2>
      </div>
      <div className={styles.SkillsChildrenContainer}>
        {object.map((item, index) => (
          <div key={index} className={styles.SkillsChildrenDiv}>
            <div>
              <div
                className={styles.SkillsChildrenImage}
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            </div>
            <div className={styles.SkillsChildrenDivText}>
              <h2 className={styles.SkillsChildrenDivTextH2}>{item.text}</h2>
              <p className={styles.SkillsChildrenDivTextP}>{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
