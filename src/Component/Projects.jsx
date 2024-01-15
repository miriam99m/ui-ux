import React from "react";
import p1 from "../Assets/project-image/projectOne.svg";
import p2 from "../Assets/project-image/projectTwo.svg";
import p3 from "../Assets/project-image/projectThree.svg";
import p4 from "../Assets/project-image/projectFour.svg";
import arrow from "../Assets/project-image/arrow.svg";

const Projects = () => {
  const arr = [
    {
      project_name: "Project name 1",
      project_title: "Title 1",
      project_image: p1,
      project_arrow: arrow,
    },
    {
      project_name: "Project name 2",
      project_title: "Title 2",
      project_image: p2,
      project_arrow: arrow,
    },
    {
      project_name: "Project name 3",
      project_title: "Title 3",
      project_image: p3,
      project_arrow: arrow,
    },
    {
      project_name: "Project name 4",
      project_title: "Title 4",
      project_image: p4,
      project_arrow: arrow,
    },
  ];

  return (
    <div className="w-[1083px] flex flex-col gap-[50px] mb-[90px]">
      <div className="flex flex-col gap-[12px]">
        <p className="text-[#525252] text-[15px] font-[500]">
          Portfolio section
        </p>
        <h2 className="text-[#FEFFFF] text-[36px] font-[600]">
          Dessign showcase
        </h2>
      </div>
      <div className="flex flex-row flex-wrap gap-[16px]">
        {arr.map((item, index) => (
          <div key={index}>
            <div className="w-[533px] h-[458px] p-[22px] bg-[var(--bg-box)] rounded-[22px] shadow-custom flex flex-col gap-[12px]">
              <div className="flex justify-between h-[60px]">
                <div>
                  <div>
                    <p className="text-[#FEFFFF] text-[24px] font-[600]">
                      {item.project_name}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#525252] text-[16px] font-[500] text-start">
                      {item.project_title}
                    </p>
                  </div>
                </div>
                <div
                  className="w-[32px] bg-no-repeat arrow my-[10px] cursor-pointer overflow-visible"
                  style={{ backgroundImage: `url(${item.project_arrow})` }}
                ></div>
              </div>
              <div
                className="w-[487px] h-[353px] bg-no-repeat rounded-[14px]"
                style={{ backgroundImage: `url(${item.project_image})` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button className="w-[71px] h-[31px] bg-[var(--bg-box)] text-[#FEFFFF] text-[12px] font-[600] rounded-[69px] cursor-pointer shadow-custom">
          see all
        </button>
      </div>
    </div>
  );
};

export default Projects;
