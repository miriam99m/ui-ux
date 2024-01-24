import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import p1 from "../../Assets/project-image/projectOne.svg";
import p2 from "../../Assets/project-image/projectTwo.svg";
import p3 from "../../Assets/project-image/projectThree.svg";
import p4 from "../../Assets/project-image/projectFour.svg";
import p5 from "../../Assets/project-image/projectFour.svg";
import p6 from "../../Assets/project-image/projectFour.svg";
import arrow from "../../Assets/project-image/arrow.svg";
import { Link } from "react-router-dom";

const styles = {
  WorksContainer:
    "w-[1083px] flex flex-col gap-[50px] my-[90px] max-mb:w-full max-mb:px-[33px] max-xs:p-0",
  WorksContainerDiv:
    "flex flex-row flex-wrap gap-[16px] max-mb:flex-col max-mb:items-center max-xs:px-[14px]",
  WorksContainerDivChild:
    "w-[533px] h-[458px] p-[22px] bg-[var(--bg-box)] rounded-[22px] shadow-custom flex flex-col gap-[12px] max-md:w-[344px] max-md:h-[397px] max-mb:w-[46vw] max-xs:w-full",
  WorksContainerTextDiv: "flex justify-between h-[60px] text-start",
  WorksContainerTextP:
    "text-[#FEFFFF] text-[24px] font-[600] max-sb:text-[20px] max-xs:text-[4.6vw]",
  WorksContainerTextSecondP:
    "text-[#525252] text-[16px] font-[500] text-start max-xs:text-[3.7vw] short-text",
  WorksContainerDivArrow:
    "w-[32px] h-[32px] bg-no-repeat arrow my-[10px] cursor-pointer overflow-visible",
  WorksContainerDivImage:
    "w-[487px] h-[353px] bg-no-repeat rounded-[14px] max-mb:w-full max-mb:bg-cover",
};

const Works = () => {
  const arr = [
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
  return (
    <>
      <Header />
      <div className={styles.WorksContainer}>
        <div className={styles.WorksContainerDiv}>
          {arr.map((item, index) => (
            <div key={index} className="max-xs:w-full">
              <div className={styles.WorksContainerDivChild}>
                <div className={styles.WorksContainerTextDiv}>
                  <div className="short-text">
                    <div>
                      <p className={styles.WorksContainerTextP}>
                        {item.project_name}
                      </p>
                    </div>
                    <div>
                      <p className={styles.WorksContainerTextSecondP}>
                        {item.project_title}
                      </p>
                    </div>
                  </div>
                  <Link to={`/project/${item.id}`}>
                    <div
                      className={styles.WorksContainerDivArrow}
                      style={{ backgroundImage: `url(${item.project_arrow})` }}
                    ></div>
                  </Link>
                </div>
                <div
                  className={styles.WorksContainerDivImage}
                  style={{ backgroundImage: `url(${item.project_image})` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Works;
