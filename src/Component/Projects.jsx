import React from "react";
import p1 from "../Assets/project-image/projectOne.svg";
import p2 from "../Assets/project-image/projectTwo.svg";
import p3 from "../Assets/project-image/projectThree.svg";
import p4 from "../Assets/project-image/projectFour.svg";
import arrow from "../Assets/project-image/arrow.svg";

const styles = {
  ProjectsContainer: "w-[1083px] flex flex-col gap-[50px] mb-[90px]",
  ProjectsTextDiv: "flex flex-col gap-[12px]",
  ProjectsTextDivP: "text-[#525252] text-[15px] font-[500]",
  ProjectsTextDivH2: "text-[#FEFFFF] text-[36px] font-[600]",
  ProjectsChildrenContainer: "flex flex-row flex-wrap gap-[16px]",
  ProjectsChildrenDiv:
    "w-[533px] h-[458px] p-[22px] bg-[var(--bg-box)] rounded-[22px] shadow-custom flex flex-col gap-[12px]",
  ProjectsChildrenTextDiv: "flex justify-between h-[60px]",
  ProjectsChildrenTextDivPOne: "text-[#FEFFFF] text-[24px] font-[600]",
  ProjectsChildrenTextDivPTwo:
    "text-[#525252] text-[16px] font-[500] text-start",
  ProjectsChildrenArrow:
    "w-[32px] bg-no-repeat arrow my-[10px] cursor-pointer overflow-visible",
  ProjectsChildrenImage: "w-[487px] h-[353px] bg-no-repeat rounded-[14px]",
  ProjectsChildrenButtom:
    "w-[71px] h-[31px] bg-[var(--bg-box)] text-[#FEFFFF] text-[12px] font-[600] rounded-[69px] cursor-pointer shadow-custom",
};

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
    <div className={styles.ProjectsContainer}>
      <div className={styles.ProjectsTextDiv}>
        <p className={styles.ProjectsTextDivP}>Portfolio section</p>
        <h2 className={styles.ProjectsTextDivH2}>Dessign showcase</h2>
      </div>
      <div className={styles.ProjectsChildrenContainer}>
        {arr.map((item, index) => (
          <div key={index}>
            <div className={styles.ProjectsChildrenDiv}>
              <div className={styles.ProjectsChildrenTextDiv}>
                <div>
                  <div>
                    <p className={styles.ProjectsChildrenTextDivPOne}>
                      {item.project_name}
                    </p>
                  </div>
                  <div>
                    <p className={styles.ProjectsChildrenTextDivPTwo}>
                      {item.project_title}
                    </p>
                  </div>
                </div>
                <div
                  className={styles.ProjectsChildrenArrow}
                  style={{ backgroundImage: `url(${item.project_arrow})` }}
                ></div>
              </div>
              <div
                className={styles.ProjectsChildrenImage}
                style={{ backgroundImage: `url(${item.project_image})` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button className={styles.ProjectsChildrenButtom}>see all</button>
      </div>
    </div>
  );
};

export default Projects;
