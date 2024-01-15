import { useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import p1 from "../../Assets/project-image/projectOne.svg";
import p2 from "../../Assets/project-image/projectTwo.svg";
import p3 from "../../Assets/project-image/projectThree.svg";
import p4 from "../../Assets/project-image/projectFour.svg";

const styles = {
  ProjectListContainer: "w-[1083px] my-[90px] flex flex-col gap-[50px]",
  ProjectListHeading: "flex flex-col gap-[12px]",
  ProjectListHeadingP: "text-[#525252] text-[15px] font-[500]",
  ProjectListHeadingH2: "text-[#FEFFFF] text-[36px] font-[600]",
  ProjectListSecondContainer: "flex flex-col items-center gap-[12px]",
  ProjectListDescriptionContainer:
    "flex flex-row justify-center gap-[9px] w-fit",
  ProjectListDescription:
    "text-[#FEFFFF] text-[14px] font-[400] bg-[#0f0f0f] rounded-[69px] shadow-custom px-[16px] py-[8px]",
  ProjectListProjectContainer: "w-[781px] p-[24px] flex flex-col gap-[24px]",
  ProjectListProjectImage:
    "w-[733px] h-[465px] bg-no-repeat bg-cover rounded-[24px]",
  ProjectListProjectP: "text-[#525252] text-[20px] font-[400] text-start",
};
const ProjectList = () => {
  const ProjectList = [
    {
      id: "project1",
      title: "The Fusion of Orange, Black, and White",
      content1:
        "Moxa Template is a testament to the power of design in elevating your portfolio. With its vibrant color palette of orange, black, and white, Moxa Template creates a visually stunning backdrop for your creative work. The warmth of orange adds a touch of energy and creativity, while the contrast of black and white provides a sophisticated and modern aesthetic. This harmonious fusion of colors sets the stage for a portfolio design that commands attention and leaves a lasting impression on your audience.",
      content2:
        "Beyond its captivating color scheme, Moxa Template is designed to showcase your work in the best possible light. The layout and structure are carefully crafted to create an intuitive and engaging user experience. From clean and organized galleries to dynamic project showcases, Moxa Template offers a range of customizable components to highlight your portfolio. The use of captivating visuals, elegant typography, and strategic whitespace creates a visually balanced and immersive presentation, allowing your work to shine and resonate with viewers.",
      content3:
        "Moxa Template is a testament to the power of design in elevating your portfolio. With its vibrant color palette of orange, black, and white, Moxa Template creates a visually stunning backdrop for your creative work. The warmth of orange adds a touch of energy and creativity, while the contrast of black and white provides a sophisticated and modern aesthetic. This harmonious fusion of colors sets the stage for a portfolio design that commands attention and leaves a lasting impression on your audience.",
      content4:
        "Beyond its captivating color scheme, Moxa Template is designed to showcase your work in the best possible light. The layout and structure are carefully crafted to create an intuitive and engaging user experience. From clean and organized galleries to dynamic project showcases, Moxa Template offers a range of customizable components to highlight your portfolio. The use of captivating visuals, elegant typography, and strategic whitespace creates a visually balanced and immersive presentation, allowing your work to shine and resonate with viewers.",
      buttonText: "Design type",
      image: p1,
    },
    {
      id: "project2",
      title: "Project 2 Title",
      content1: "Details about Project 2...",
      content2: "Details about Project 2...",
      content3: "Details about Project 2...",
      content4: "Details about Project 2...",
      buttonText: "Company name",
      image: p2,
    },
    {
      id: "project3",
      title: "Project 3 Title",
      content1: "Details about Project 3...",
      content2: "Details about Project 3...",
      content3: "Details about Project 3...",
      content4: "Details about Project 3...",
      buttonText: "Date finished",
      image: p3,
    },
    {
      id: "project4",
      title: "Project 4 Title",
      content1: "Details about Project 4...",
      content2: "Details about Project 4...",
      content3: "Details about Project 4...",
      content4: "Details about Project 4...",
      buttonText: "Website link here",
      image: p4,
    },
  ];

  const { projectId } = useParams();
  const project = ProjectList.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Header />
      <div className={styles.ProjectListContainer}>
        <div className={styles.ProjectListHeading}>
          <p className={styles.ProjectListHeadingP}>For product name</p>
          <h1 className={styles.ProjectListHeadingH2}>Project name</h1>
        </div>
        <div className={styles.ProjectListSecondContainer}>
          <div className={styles.ProjectListDescriptionContainer}>
            {ProjectList.map((item, index) => (
              <div key={index}>
                <div className={styles.ProjectListDescription}>
                  {item.buttonText}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.ProjectListProjectContainer}>
            <div
              className={styles.ProjectListProjectImage}
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div>
              <h2 className={styles.ProjectListHeadingH2}>{project.title}</h2>
            </div>
            <div>
              <p className={styles.ProjectListProjectP}>{project.content1}</p>
              <br />
              <p className={styles.ProjectListProjectP}>{project.content2}</p>
              <br />
              <p className={styles.ProjectListProjectP}>{project.content3}</p>
              <br />
              <p className={styles.ProjectListProjectP}>{project.content4}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectList;
