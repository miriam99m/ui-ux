import React from "react";
import miriam from "../Assets/home-image/Ellipse.svg";

const styles = {
  AboutContainer: "w-[614px] h-[410px] mb-[90px] flex flex-col gap-[50px]",
  AboutTextDiv: "flex flex-col gap-[12px]",
  AboutTextDivP: "text-[#525252] text-[15px] font-[500] text-center",
  AboutTextDivH2: "text-[#FEFFFF] text-[36px] font-[600] text-center",
  AboutTextDivContainer: "flex flex-row gap-[34px]",
  AboutTextDieImage:
    "bg-[var(--bg-box)] w-[284px] h-[232px] rounded-[24px] px-[48px] py-[22px]",
  AboutTextDivContainerP: "text-[#FEFFFF] text-[18px] font-[500]",
  AboutTextDivContP: "text-[#525252] text-[18px] font-[500] text-start",
};

const About = () => {
  return (
    <div className={styles.AboutContainer}>
      <div>
        <div className={styles.AboutTextDiv}>
          <p className={styles.AboutTextDivP}>About me</p>
          <h2 className={styles.AboutTextDivH2}>Who is the creative mind?</h2>
        </div>
      </div>
      <div className={styles.AboutTextDivContainer}>
        <div className={styles.AboutTextDiv}>
          <div className={styles.AboutTextDieImage}>
            <img src={miriam} alt="Miriam" />
          </div>
          <div>
            <p className={styles.AboutTextDivContainerP}>Miriam</p>
          </div>
        </div>
        <div>
          <p className={styles.AboutTextDivContP}>
            I'm Miriam, a passionate and experienced UI UX designer, tea lover,
            art enthusiast based in Armenia. With over 4 years of expertise in
            the field, I have dedicated myself to creating exceptional user
            experiences that blend functionality and aesthetics seamlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
