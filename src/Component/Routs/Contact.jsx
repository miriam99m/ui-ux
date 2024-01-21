import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Istagram from "../../Assets/social-image/insta-icons.svg";
import Telegram from "../../Assets/social-image/tele-icons.svg";
import Linkdin from "../../Assets/social-image/linkd-icon.svg";
import Behance from "../../Assets/social-image/behance-icon.svg";
import Google from "../../Assets/social-image/google.svg";

const styles = {
  ContactContainerDivChild: "w-full flex justify-between",
  ContactDivChild:
    "w-[71px] h-[72px] bg-[var(--bg-box)] rounded-[12px] shadow-custom flex justify-center items-center cursor-pointer overflow-visible social",
  ContactEmailDiv:
    "w-[348px] bg-[var(--bg-box)] rounded-[24px] shadow-custom p-[24px]",
  ContactMainContainer:
    "flex flex-col items-center gap-[50px] mt-[100px] mb-[100px] max-mb:w-full max-mb:px-[33px]",
  ContactTextDiv: "flex flex-col gap-[12px] w-fit",
  ContactTextP: "text-[#525252] text-[15px] font-[500]",
  ContactTextH2: "text-[#FEFFFF] text-[36px] font-[600]",
  ContactContainer: "flex flex-col gap-[24px] items-center",
  ContactContainerP: "text-[#525252] text-[16px] font-[400] w-fit",
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

  useEffect(() => {
    document.body.classList.add("Contact-body");
    return () => {
      document.body.classList.remove("Contact-body");
    };
  }, []);

  return (
    <div className="w-[1083px] h-screen flex flex-col justify-between pt-[40px] pb-[109px] max-mb:w-full">
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
          <div className="flex flex-row gap-[19px] max-sm:flex-wrap max-sm:flex-row max-sm:justify-center">
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
  );
};

export default Contact;
