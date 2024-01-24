import React, { useState, useRef } from "react";
import p1 from "../Assets/project-image/projectOne.svg";
import p2 from "../Assets/project-image/projectTwo.svg";
import p3 from "../Assets/project-image/projectThree.svg";
import p4 from "../Assets/project-image/projectFour.svg";
import p5 from "../Assets/project-image/projectFour.svg";
import p6 from "../Assets/project-image/projectFour.svg";
import arrow from "../Assets/project-image/arrow.svg";
import { Link } from "react-router-dom";

const styles = {
  ProjectsContainer:
    "w-[1083px] flex flex-col gap-[50px] mb-[90px] max-xl:w-full max-md:px-[14px] max-md:items-center",
  ProjectsTextDiv: "flex flex-col gap-[12px] max-md:items-center",
  ProjectsTextDivP: "text-[#525252] text-[15px] font-[500]",
  ProjectsTextDivH2:
    "text-[#FEFFFF] text-[36px] font-[600] max-md:text-[32px] max-xs:text-center",
  ProjectsChildrenContainer:
    "flex flex-row justify-center flex-wrap gap-[16px] max-md:flex-col max-mb:w-full",
  ProjectsChildrenDiv:
    "w-[533px] h-[458px] p-[22px] bg-[var(--bg-box)] rounded-[22px] shadow-custom flex flex-col gap-[12px] max-md:w-[344px] max-md:h-[397px] max-mb:w-[46vw] max-xs:w-full",
  ProjectsChildrenTextDiv: "flex justify-between h-[60px]",
  ProjectsChildrenTextDivPOne:
    "text-[#FEFFFF] text-[24px] font-[600] text-start max-md:text-[18px] max-mb:text-[20px]",
  ProjectsChildrenTextDivPTwo:
    "text-[#525252] text-[16px] font-[500] text-start max-md:text-[16px] short-text",
  ProjectsChildrenArrow:
    "w-[32px] h-[32px] bg-no-repeat arrow my-[10px] cursor-pointer overflow-visible",
  ProjectsChildrenImage:
    "w-[487px] h-[353px] bg-no-repeat rounded-[14px] max-mb:w-full max-mb:bg-cover",
  ProjectsChildrenButtom:
    "w-[71px] h-[31px] bg-[var(--bg-box)] text-[#FEFFFF] text-[12px] font-[600] rounded-[69px] cursor-pointer shadow-custom",
};

export const arr = [
  {
    id: "project1",
    project_name: "FastexVerse",
    project_title: "First Metaverse in Armenia",
    project_image: p1,
    project_arrow: arrow,
  },
  {
    id: "project2",
    project_name: "Barekam Logistic Service",
    project_title: "Cargo transportation from Europe to Armenia",
    project_image: p2,
    project_arrow: arrow,
  },
  {
    id: "project3",
    project_name: "Futurest",
    project_title: "Event/Tickets App",
    project_image: p3,
    project_arrow: arrow,
  },
  {
    id: "project4",
    project_name: "Solo By Taqsim",
    project_title: "Virtual instrument",
    project_image: p4,
    project_arrow: arrow,
  },
  {
    id: "project5",
    project_name: "Up Comming",
    project_title: "Up Comming",
    project_image: p5,
    project_arrow: arrow,
  },
  {
    id: "project6",
    project_name: "Up Comming",
    project_title: "Up Comming",
    project_image: p6,
    project_arrow: arrow,
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projectsContainerRef = useRef(null);

  const toggleShowAll = () => {
    setShowAll(!showAll);

    if (showAll) {
      projectsContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={projectsContainerRef} className={styles.ProjectsContainer}>
      <div className={styles.ProjectsTextDiv}>
        <p className={styles.ProjectsTextDivP}>Portfolio section</p>
        <h2 className={styles.ProjectsTextDivH2}>Dessign showcase</h2>
      </div>
      <div className={styles.ProjectsChildrenContainer}>
        {arr.slice(0, showAll ? arr.length : 4).map((item, index) => (
          <div
            key={index}
            className="max-md:w-full max-md:flex max-md:justify-center max-xs:justify-start max-xs:w-full"
          >
            <div className={styles.ProjectsChildrenDiv}>
              <div className={styles.ProjectsChildrenTextDiv}>
                <div className="short-text">
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
                <Link to={`/project/${item.id}`}>
                  <div
                    className={styles.ProjectsChildrenArrow}
                    style={{ backgroundImage: `url(${item.project_arrow})` }}
                  ></div>
                </Link>
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
        <button
          className={styles.ProjectsChildrenButtom}
          onClick={toggleShowAll}
        >
          {showAll ? "See Less" : "See All"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
