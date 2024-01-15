import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Istagram from "../../Assets/social-image/insta-icons.svg";
import Telegram from "../../Assets/social-image/tele-icons.svg";
import Linkdin from "../../Assets/social-image/linkd-icon.svg";
import Behance from "../../Assets/social-image/behance-icon.svg";
import cute from "../../Assets/home-image/emoji-cute.svg";
import p4 from "../../Assets/project-image/projectFour.svg";

const styles = {
  ContactContainerDivChild: "w-full flex justify-between",
  ContactDivChild:
    "w-[71px] h-[72px] bg-[var(--bg-box)] rounded-[12px] shadow-custom flex justify-center items-center cursor-pointer overflow-visible social",
  ContactEmailDiv:
    "w-[348px] bg-[var(--bg-box)] rounded-[24px] shadow-custom p-[24px]",
  ContactMainContainer:
    "flex flex-col items-center gap-[50px] mt-[100px] mb-[100px]",
  ContactTextDiv: "flex flex-col gap-[12px] w-fit",
  ContactTextP: "text-[#525252] text-[15px] font-[500]",
  ContactTextH2: "text-[#FEFFFF] text-[36px] font-[600]",
  ContactContainer: "flex flex-col gap-[24px] items-center",
  ContactContainerP: "text-[#525252] text-[16px] font-[400] w-fit",
  ContactEmailContainer: "mb-[90px] flex flex-row justify-between",
  ContactEmailDivCont: "flex flex-col gap-[24px]",
  ContactEmailDivContP: "text-[#FEFFFF] text-[36px] font-[600]",
  ContactEmailDivContBtn: "w-[275px] h-[55px] px-[10px] py-[8px] bg-[var(--btn-purple)] text-[#FEFFFF] text-[24px] font-[600] rounded-[103px]",
};

const Contact = () => {
  return (
    <div className="w-[1083px]">
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
          <div className="w-[350px]">
            <div className={styles.ContactContainerDivChild}>
              <div className={styles.ContactDivChild}>
                <a
                  href="https://www.instagram.com/_miriami/?igshid=MzRlODBiNWFlZA%3D%3D"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={Istagram} alt="social-Istagram" />
                </a>
              </div>
              <div className={styles.ContactDivChild}>
                <a
                  href="https://t.me/Miriam_ian"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={Telegram} alt="social-Telegram" />
                </a>
              </div>
              <div className={styles.ContactDivChild}>
                <a
                  href="https://www.linkedin.com/in/mariam-melqonyan/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={Linkdin} alt="social-Linkdin" />
                </a>
              </div>
              <div className={styles.ContactDivChild}>
                <a
                  href="https://www.behance.net/miriamian"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={Behance} alt="social-Behance" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ContactEmailContainer}>
        <div className={styles.ContactEmailDiv}>
          <div className={styles.ContactEmailDivCont}>
            <div>
              <img src={cute} alt="emoji-cute" />
            </div>
            <div>
              <p className={styles.ContactEmailDivContP}>
                Wanna work together?
              </p>
            </div>
            <div>
              <a href="mailto:Mariammelqonyan99.92@gmail.com" rel="noreferrer">
                <button className={styles.ContactEmailDivContBtn}>Email</button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[700px] h-[347px] bg-[var(--bg-box)] rounded-[24px] shadow-custom p-[24px]">
            <div className="flex flex-row justify-between ">
              <div className="bg-[var(--bg-color)] w-[400px] h-[300px] flex flex-row flex-wrap gap-[20px] justify-center rounded-[24px] p-[28px] shadow-down">
                <img
                  src={p4}
                  alt="project"
                  className="w-[150px] h-[110px] rounded-[12px] shadow-custom"
                />
                <img
                  src={p4}
                  alt="project"
                  className="w-[150px] h-[110px] rounded-[12px]"
                />
                <img
                  src={p4}
                  alt="project"
                  className="w-[150px] h-[110px] rounded-[12px]"
                />
                <img
                  src={p4}
                  alt="project"
                  className="w-[150px] h-[110px] rounded-[12px]"
                />
              </div>
              <div>
                <p className="text-[#525252] text-[16px] text-start font-[400] w-[270px] pl-[10px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  eveniet at vitae dolorem placeat quasi exercitationem
                  voluptatem enim officia illo, totam maxime reprehenderit
                  explicabo optio eaque dolores animi voluptatum. Explicabo.
                  Provident quisquam, tempore accusamus quas laborum libero
                  molestiae?tempore accusamus quas laborum
                  <a
                    href="mailto:Mariammelqonyan99.92@gmail.com"
                    className="pl-[20px]"
                  >
                    <button className="w-[100px] h-[22px] bg-[var(--btn-purple)] text-[#FEFFFF] text-[12px] font-[600] rounded-[103px]">
                      Email
                    </button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
