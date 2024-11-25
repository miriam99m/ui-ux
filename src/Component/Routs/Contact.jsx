import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Istagram from "../../Assets/social-image/insta-icons.png";
import Telegram from "../../Assets/social-image/tele-icons.png";
import Linkdin from "../../Assets/social-image/linkd-icon.png";
import Behance from "../../Assets/social-image/behance-icon.png";
import Google from "../../Assets/social-image/google.png";

const styles = {
  ContactContainerMainDiv:
    "w-[1083px] h-screen flex flex-col max-mb:w-full",
  ContactContainerDivChild: "w-full flex justify-between",
  ContactDivChild:
    "w-[71px] h-[72px] bg-[var(--bg-box)] rounded-[12px] shadow-custom flex justify-center items-center cursor-pointer overflow-visible social",
  ContactEmailDiv:
    "w-[348px] bg-[var(--bg-box)] rounded-[24px] shadow-custom p-[24px]",
  ContactMainContainer:
    "flex flex-col items-center gap-[50px] my-[90px] max-mb:w-full max-mb:px-[33px] max-xs:my-[50px]",
  ContactTextDiv: "flex flex-col gap-[12px] w-fit",
  ContactTextP: "text-[#525252] text-[15px] text-center font-[500]",
  ContactTextH2: "text-[#FEFFFF] text-[36px] font-[600]",
  ContactContainer: "flex flex-col gap-[24px] items-center",
  ContactContainerP: "text-[#525252] text-[16px] text-center font-[400] w-fit",
  ontactContainerSocialDiv:
    "flex flex-row gap-[19px] max-sm:flex-wrap max-sm:flex-row max-sm:justify-center",
};

const Contact = () => {
  const object = [
    {
      link: "https://www.instagram.com/_miriami/?igshid=MzRlODBiNWFlZA%3D%3D",
      image: Istagram,
    },
    {
      link: "https://t.me/Miriam_ian",
      image: Telegram,
    },
    {
      link: "https://www.linkedin.com/in/mariam-melqonyan/",
      image: Linkdin,
    },
    {
      link: "https://www.behance.net/miriamian",
      image: Behance,
    },
    {
      link: "mailto:Mariammelqonyan99.92@gmail.com",
      image: Google,
    },
  ];

  return (
    <>
      <div className={styles.ContactContainerMainDiv}>
        <Header />
        <div className={styles.ContactMainContainer}>
          <div className={styles.ContactTextDiv}>
            <p className={styles.ContactTextP}>Contact</p>
            <h2 className={styles.ContactTextH2}>Get in touch</h2>
          </div>
          <div className={styles.ContactContainer}>
            <p className={styles.ContactContainerP}>
              Promise i will reply back within 24 hours,
            </p>
            <div className={styles.ontactContainerSocialDiv}>
              {object.map((item, index) => (
                <div key={index} className={styles.ContactDivChild}>
                  <a href={item.link} rel="noreferrer" target="_blank">
                    <img src={item.image} alt="social-logo" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
