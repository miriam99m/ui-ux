import React from "react";

const Education = () => {
  const object = [
    {
      text: "SoftConstruct",
      paragraph: "Product Designer",
      date: "2021 - Present (Full time)",
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
    <div className="w-[536px] flex flex-col gap-[50px] mb-[90px]">
      <div className="flex flex-col gap-[12px]">
        <p className="text-[#525252] text-[15px] font-[500]">
          Background section
        </p>
        <h2 className="text-[#FEFFFF] text-[36px] font-[600]">
          Education & Career
        </h2>
      </div>
      <div className="flex flex-col gap-[24px]">
        <div>
          <div className="flex flex-row justify-between bg-[var(--bg-box)] h-[53px] rounded-[24px] p-[10px]">
            <div className="w-full">
              <p className="h-full bg-[var(--btn-purple)] shadow-custom rounded-[69px] text-[#FEFFFF] text-[14px] font-[600] px-[16px] py-[6px]">
                Career
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[12px]">
          {object.map((item, index) => (
            <div key={index} className="h-[115px] bg-[var(--bg-box)] border-[1px] border-[#525252] rounded-[24px] p-[24px]">
              <h2 className="text-[#FEFFFF] text-[20px] font-[600] text-start">
                {item.text}
              </h2>
              <p className="text-[#525252] text-[16px] font-[500] text-start">
                {item.paragraph}
              </p>
              <p className="text-[#FEFFFF] text-[12px] font-[300] text-end">
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
