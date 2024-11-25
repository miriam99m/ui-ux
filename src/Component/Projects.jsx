import React, { useState, useRef } from "react";
import p1 from "../Assets/project-image/iPhone14Problackmini.png";
import p2 from "../Assets/project-image/Futurest.png";
import p3 from "../Assets/project-image/Solo.png";
import p4 from "../Assets/project-image/upcomming.png";
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
  ProjectsChildrenContainerContainer:
    "max-md:w-full max-md:flex max-md:justify-center max-xs:justify-start max-xs:w-full",
  ProjectsChildrenDiv:
    "w-[533px] h-[458px] p-[22px] bg-[var(--bg-box)] rounded-[22px] shadow-custom flex flex-col gap-[12px] max-md:w-[344px] max-mb:w-[46vw] max-xs:w-full max-mb:h-fit",
  ProjectsChildrenTextDiv: "flex justify-between h-[60px]",
  ProjectsChildrenTextDivPOne:
    "text-[#FEFFFF] text-[24px] font-[600] text-start max-md:text-[18px] max-mb:text-[20px]",
  ProjectsChildrenTextDivPTwo:
    "text-[#525252] text-[16px] font-[500] text-start max-md:text-[16px] short-text",
  ProjectsChildrenArrow:
    "w-[32px] h-[32px] bg-no-repeat arrow my-[10px] cursor-pointer overflow-visible bg-center",
  ProjectsChildrenImage:
    "w-[487px] h-[353px] bg-no-repeat rounded-[14px] max-mb:w-full max-mb:bg-center max-mb:h-[350px]",
  ProjectsChildrenButtom:
    "w-[71px] h-[31px] bg-[var(--bg-box)] text-[#FEFFFF] text-[12px] font-[600] rounded-[69px] cursor-pointer shadow-custom",
};

export const arr = [
  {
    id: "Futurest",
    project_name: "Futurest",
    project_title: "Event/Tickets App",
    project_image: p2,
    project_arrow: arrow,
    about_project: "About Project",
  },
  {
    id: "SkyPtoP",
    project_name: "SkyPtoP",
    project_title: "Urgent delivery of items around the world",
    project_image: p1,
    project_arrow: arrow,
    about_project: "About Project",
  },
  {
    id: "SoloByTaqsim",
    project_name: "Solo By Taqsim",
    project_title: "Virtual instrument",
    project_image: p3,
    project_arrow: arrow,
    about_project: "About Project",
  },
  {
    id: "UpComming",
    project_name: "Up Comming",
    project_title: "Up Comming",
    project_image: p4,
    project_arrow: arrow,
    about_project: "About Project",
  },
  {
    id: "UpComming",
    project_name: "Up Comming",
    project_title: "Up Comming",
    project_image: p4,
    project_arrow: arrow,
    about_project: "About Project",
  },
  {
    id: "UpComming",
    project_name: "Up Comming",
    project_title: "Up Comming",
    project_image: p4,
    project_arrow: arrow,
    about_project: "About Project",
  },
  {
    id: "UpComming",
    project_name: "Up Comming",
    project_title: "Up Comming",
    project_image: p4,
    project_arrow: arrow,
    about_project: "About Project",
  },
  {
    id: "UpComming",
    project_name: "Up Comming",
    project_title: "Up Comming",
    project_image: p4,
    project_arrow: arrow,
    about_project: "About Project",
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
            className={styles.ProjectsChildrenContainerContainer}
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
                <Link
                  to={`/project/${item.id}`}
                  onClick={(e) => {
                    if (e.button === 1) {
                      window.open(
                        `/project/${item.id}`,
                        "_blank",
                        "noopener,noreferrer"
                      );
                      e.preventDefault();
                    }
                  }}
                >
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
