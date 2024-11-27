import React from "react";
import p4 from "../../Assets/project-image/upcomming.png";
import Header from "../Header";
import Footer from "../Footer";

const styles = {
  UpcommingDiv: "max-md:flex max-md:justify-center max-md:mx-[14px]",
  UpcommingSecondDiv:
    "w-[522px] h-[636px] bg-[var(--bg-box)] rounded-[22px] mt-[60px] mb-[90px] shadow-custom flex flex-col items-center project-detail max-md:h-[50%] max-md:w-[73%] max-xs:w-full",
  UpcommingTitle:
    "font-montserrat font-[600] text-[36px] text-[#FEFFFF] mt-[40px] max-md:text-[2rem] max-xs:text-[1.7rem]",
  UpcommingImageDiv:
    "w-[422px] h-[305px] my-[50px] max-md:w-[81%] max-md:h-[81%] max-xs:my-[25px]",
  UpcommingImage: "rounded-[11px]",
  UpcommingTextOne:
    "font-montserrat font-[400] text-[20px] text-[#DCDCDC] mb-[24px] max-md:text-center max-md:w-[81%] max-xs:text-[1rem]",
  UpcommingTextTwo:
    "w-[422px] font-montserrat font-[400] text-[20px] text-[#DCDCDC] mb-[24px] max-md:text-center max-md:w-[81%] max-xs:text-[1rem]",
};
const UpComming = () => {
  return (
    <>
      <Header />
      <div className={styles.UpcommingDiv}>
        <div className={styles.UpcommingSecondDiv}>
          <h1 className={styles.UpcommingTitle}>Up Comming</h1>
          <div className={styles.UpcommingImageDiv}>
            <img src={p4} alt="Up Comming" className={styles.UpcommingImage} />
          </div>
          <p className={styles.UpcommingTextOne}>Up Comming project details</p>
          <p className={styles.UpcommingTextTwo}>
            Stay tuned for more updates about this project.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpComming;
