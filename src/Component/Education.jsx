import React from "react";

const styles = {
  EducationContainer:
    "w-[536px] flex flex-col gap-[50px] mb-[90px] max-md:w-full max-md:px-[14px]",
  EducationTextDiv: "flex flex-col gap-[12px] max-md:items-center",
  EducationTextP: "text-[#525252] text-[15px] font-[500]",
  EducationTextH2:
    "text-[#FEFFFF] text-[36px] font-[600] max-md:text-[32px] max-xs:text-center",
  EducationChildrenDiv:
    "flex flex-col gap-[24px] max-md:items-center max-xs:w-full",
  EducationButtonDiv:
    "flex flex-row bg-[var(--bg-box)] h-[53px] rounded-[24px] p-[10px] max-md:w-[341px] max-xs:w-full",
  EducationButtonDivP:
    "h-full bg-[var(--btn-purple)] shadow-custom rounded-[69px] text-[#FEFFFF] text-[14px] font-[600] px-[16px] py-[6px] max-md:w-full max-md:text-center",
  EducationChildrenContainer:
    "h-[115px] bg-[var(--bg-box)] border-[1px] border-[#525252] rounded-[24px] p-[24px] max-md:w-[341px] max-xs:w-full max-xs:h-fit max-xs:flex max-xs:flex-col max-xs:gap-[4px]",
  EducationChildrenContainerH2:
    "text-[#FEFFFF] text-[20px] font-[600] text-start",
  EducationChildrenContainerPOne:
    "text-[#525252] text-[16px] font-[500] text-start",
  EducationChildrenContainerPTwo:
    "text-[#FEFFFF] text-[12px] font-[300] text-end",
};

const Education = () => {
  const object = [
    {
      text: "SoftConstruct",
      paragraph: "Product Designer",
      date: "2021 - Present (Full time)",
    },
    {
      text: "Happy Life",
      paragraph: "UI/UX Designer",
      date: "2022 - Present (Part time)",
    },
    {
      text: "Futurest",
      paragraph: "UI/UX Designer/ Stakeholder",
      date: "2021 - Present (Freelance)",
    },
    {
      text: "E-World LLC",
      paragraph: "UI/UX Designer",
      date: "6 months (Full time) (One time project)",
    },
    {
      text: "ITHIRE LLC",
      paragraph: "UI/UX Designer",
      date: "2020 - 2021 (Full time)",
    },
  ];
  return (
    <div className={styles.EducationContainer}>
      <div className={styles.EducationTextDiv}>
        <p className={styles.EducationTextP}>Background section</p>
        <h2 className={styles.EducationTextH2}>Education & Career</h2>
      </div>
      <div className={styles.EducationChildrenDiv}>
        <div className="max-xs:w-full">
          <div className={styles.EducationButtonDiv}>
            <div className="w-full max-md:flex max-md:justify-center">
              <p className={styles.EducationButtonDivP}>Career</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[12px] max-xs:w-full">
          {object.map((item, index) => (
            <div key={index} className={styles.EducationChildrenContainer}>
              <h2 className={styles.EducationChildrenContainerH2}>
                {item.text}
              </h2>
              <p className={styles.EducationChildrenContainerPOne}>
                {item.paragraph}
              </p>
              <p className={styles.EducationChildrenContainerPTwo}>
                {item.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
