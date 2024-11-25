import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import miriam from "../../Assets/home-image/Ellipse.png";
import blink from "../../Assets/about-image/about-blink-emoji.png";
import cloud from "../../Assets/about-image/about-cloud-emoji.png";
import confused from "../../Assets/about-image/about-confused-emoji.png";
import laptop from "../../Assets/about-image/about-laptop-emoji.png";
import Lpurple from "../../Assets/purple-image/lightpurple.png";
import Mpurple from "../../Assets/purple-image/midpurple.png";
import MDpurple from "../../Assets/purple-image/middarkpurple.png";
import Dpurple from "../../Assets/purple-image/darkpurple.png";
import image from "../../Assets/home-image/emoji-vi.png";

const styles = {
  AboutMeContainer:
    "w-[1083px] flex flex-col items-center gap-[90px] my-[90px] max-mb:w-full max-mb:px-[33px] max-md:gap-[34px] max-xs:px-[14px]",
  AboutMeDescriptionContainer:
    "w-[573px] flex flex-col gap-[50px] max-md:w-full",
  AboutMeDescriptionDiv: "flex flex-col items-center gap-[12px]",
  AboutMeDescriptionDivP: "text-[#525252] text-[15px] font-[500]",
  AboutMeDescriptionDivH2:
    "text-[#FEFFFF] text-[36px] font-[600] max-md:text-[32px] max-md:text-center max-md:text-[32px]",
  AboutMeDescriptionImageContainer:
    "flex flex-row gap-[34px] max-md:flex-col max-md:items-center",
  AboutMeDescriptionImage:
    "w-[243px] h-[243px] bg-no-repeat bg-cover max-xs:bg-center",
  AboutMeDescriptionImageP:
    "text-[#525252] text-[18px] font-[500] w-[296px] text-start max-md:text-center max-xs:w-full",
  AboutMeDescriptionTextContainer:
    "w-[625px] flex flex-row gap-[24px] text-start max-md:flex-col max-md:items-center max-md:pag-[34px] max-md:w-full",
  AboutMeDescriptionTextP:
    "text-[#525252] text-[18px] font-[500] w-[296px] text-start max-md:text-center max-xs:w-full",
  AboutMeDescriptionTextH2:
    "text-[#FEFFFF] text-[32px] font-[600] w-[304px] max-md:text-center max-md:text-[32px] max-xs:w-full",
  AboutMeEmojiContainer:
    "flex flex-row gap-[69px] max-mb:flex-wrap max-mb:justify-center max-md:mb-[16px]",
  AboutMeEmojiImage:
    "w-[188px] h-[188px] bg-no-repeat bg-center bg-[var(--bg-box)] rounded-[50%]",
  AboutMeEmojiImageTextP: "text-[#FEFFFF] text-[18px] font-[500]",
  AboutMeSkillContainer: "flex flex-col gap-[50px]",
  AboutMeSkillBox:
    "flex flex-row justify-center flex-wrap justify-between gap-y-[24px] max-mb:justify-center max-mb:gap-x-[28px] max-md:justify-center container-skill max-mb:flex-col max-md:items-center max-md:mb-[16px]",
  AboutMeSkillElements:
    "flex flex-row gap-[12px] text-start px-[24px] py-[30px] w-[527px] h-[131px] rounded-[24px] border-[1px] border-solid border-[#525252] max-md:w-[348px] max-xs:w-[81.8vw] max-xs:h-fit",
  AboutMeSkilsImage: "w-[20px] h-[20px]",
  AboutMeSkillTextContainer: "flex flex-col gap-[4px] w-[369px]",
  AboutMeSkillTextP: "text-[#525252] text-[16px] font-[500]",
  AboutMeSkillTextH2:
    "text-[#FEFFFF] text-[24px] font-[600] leading-5 max-xs:leading-7",
  AboutMeWorkTogetherContainer:
    "w-full flex flex-col items-center gap-[24px] border-[1px] border-[#525252] rounded-[24px] p-[24px] max-mb:w-[527px] max-md:w-[348px] max-xs:w-[81.8vw]",
  AboutMeWorkTogetherBtn:
    "w-[230px] h-[55px] bg-[var(--btn-purple)] rounded-[103px] text-[#FEFFFF] font-[600] text-[24px] max-md:w-[54vw] ",
  AboutMeWorkTogetherP:
    "text-[#525252] text-[16px] font-[400] max-md:text-center",
};

const AboutMe = () => {
  const object = [
    {
      image: blink,
      text: "Innovative Thinking",
      skillText: "Problem Solving",
      paragraph:
        "Innovative problem-solving and impactful solutions for a better experience.",
      skillImage: Lpurple,
    },
    {
      image: cloud,
      text: "Attention to Detail",
      skillText: "UX Metrics",
      paragraph:
        "Data-driven insights for improving user engagement and satisfaction.",
      skillImage: Mpurple,
    },
    {
      image: laptop,
      text: "Continuous Improvement",
      skillText: "Visual Hierarchy",
      paragraph:
        "Compelling visual hierarchy and composition in order to design better.",
      skillImage: MDpurple,
    },
    {
      image: confused,
      text: "User-centric Focus",
      skillText: "Design Decisions",
      paragraph:
        "Leveraging valuable data insights to make informed design decisions.",
      skillImage: Dpurple,
    },
  ];
  return (
    <>
      <Header />
      <div className={styles.AboutMeContainer}>
        <div className={styles.AboutMeDescriptionContainer}>
          <div className={styles.AboutMeDescriptionDiv}>
            <p className={styles.AboutMeDescriptionDivP}>About me</p>
            <h2 className={styles.AboutMeDescriptionDivH2}>
              Who is the creative mind?
            </h2>
          </div>
          <div className={styles.AboutMeDescriptionImageContainer}>
            <div
              className={styles.AboutMeDescriptionImage}
              style={{ backgroundImage: `url(${miriam})` }}
            ></div>
            <div>
              <p className={styles.AboutMeDescriptionImageP}>
                I'm Miriam, a passionate and experienced UI UX designer, tea
                lover, art enthusiast based in Armenia. With over 4 years of
                expertise in the field, I have dedicated myself to creating
                exceptional user experiences that blend functionality and
                aesthetics seamlessly.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.AboutMeDescriptionTextContainer}>
          <p className={styles.AboutMeDescriptionTextP}>
            Communication for more effective collaboration. I prioritize
            transparent communication for productive collaboration, creating an
            environment where feedback is valued, and exceptional outcomes are
            achieved.
          </p>
          <h2 className={styles.AboutMeDescriptionTextH2}>
            I value open and honest communication for more effective
            collaboration.
          </h2>
        </div>
        <div className={styles.AboutMeEmojiContainer}>
          {object.map((item, index) => (
            <div key={index}>
              <div className={styles.AboutMeDescriptionDiv}>
                <div
                  className={styles.AboutMeEmojiImage}
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <p className={styles.AboutMeEmojiImageTextP}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.AboutMeSkillContainer}>
          <div className={styles.AboutMeDescriptionDiv}>
            <p className={styles.AboutMeDescriptionDivP}>Skills section</p>
            <h2 className={styles.AboutMeDescriptionDivH2}>
              Skills & experience
            </h2>
          </div>
          <div className={styles.AboutMeSkillBox}>
            {object.map((item, index) => (
              <div key={index} className={styles.AboutMeSkillElements}>
                <div>
                  <div
                    className={styles.AboutMeSkilsImage}
                    style={{ backgroundImage: `url(${item.skillImage})` }}
                  ></div>
                </div>
                <div className={styles.AboutMeSkillTextContainer}>
                  <h2 className={styles.AboutMeSkillTextH2}>
                    {item.skillText}
                  </h2>
                  <p className={styles.AboutMeSkillTextP}>{item.paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.AboutMeWorkTogetherContainer}>
          <img className="w-[77px]" src={image} alt="emoji" />
          <h2 className={styles.AboutMeDescriptionDivH2}>
            Wanna work together?
          </h2>
          <a href="mailto:Mariammelqonyan99.92@gmail.com" rel="noreferrer">
            <button className={styles.AboutMeWorkTogetherBtn}>Write me</button>
          </a>
          <p className={styles.AboutMeWorkTogetherP}>
            Promise i will reply back within 24 hours,
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMe;
