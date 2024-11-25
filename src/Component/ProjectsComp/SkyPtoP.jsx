import React, { useEffect } from "react";
import Skyptop from "../../Assets/Skyptop/iPhone14Problack.png";
import Aa from "../../Assets/futurest-img/a-futurest.png";
import Header from "../Header";
import Footer from "../Footer";
import rocket from "../../Assets/futurest-img/Rocket.png";
import dart from "../../Assets/futurest-img/dart.png";
import paint from "../../Assets/futurest-img/paint.png";
import phone from "../../Assets/futurest-img/phone.png";
import figma from "../../Assets/futurest-img/figma.png";
import alex from "../../Assets/futurest-img/alex.png";
import Kseniya from "../../Assets/futurest-img/kseniya.png";
import rocketship from "../../Assets/futurest-img/rocketship.png";
import star from "../../Assets/futurest-img/star.png";
import skyPtopdesign from "../../Assets/Skyptop/Skyptopdesign.png";
import Empathy from "../../Assets/Skyptop/Empathy.svg";
import Define from "../../Assets/Skyptop/Define.png";
import Ideate from "../../Assets/Skyptop/Ideate.png";
import Prototype from "../../Assets/Skyptop/Prototype.png";
import Test from "../../Assets/Skyptop/Test.png";

const styles = {
  ProjectListSecondContainerInerDiv:
    "flex flex-col gap-[50px] max-lg:gap-[25px] max-s:w-full",
  ProjectListSecondContainerInerDivTitleDiv: "flex flex-col gap-[12px]",
  ProjectListSecondContainerInerDivTitleDivP:
    "text-[#525252] font-montserrat font-[500] text-[15px] leading-[18px] text-center max-xs:text-[15px]",
  ProjectListSecondContainerInerDivTitleDivH1:
    "text-[#ffffff] font-[600] text-[36px] leading-[43px] text-center max-xs:text-[32px] max-mb:text-[32px]",
  ProjectListGridContainerMain:
    "w-[100vw] px-[102px] max-mb:px-[33px] max-xs:px-[14px] mt-[221px] max-md:mt-[50px]",
  ProjectListGridContainerDiscriptionDiv:
    "flex flex-col gap-[24px] mb-[50px] w-[77.78vw] max-mb:w-auto max-sb:items-center",
  ProjectListGridContainerDiscriptionH1:
    "text-[36px] text-[#feffff] leading-[43px] font-[600] max-xs:text-[32px]",
  ProjectListGridContainerDiscriptionP:
    "text-[22px] text-[#6E2FEB] leading-[26px] font-[700] mb-[50px] max-xs:text-[18px]",
  ProjectListGridContainer:
    "grid justify-center grid-cols-4 grid-rows-2 gap-x-[25px] gap-y-[59px] w-[1120px] mt-[120px] max-xxl:w-[77.78vw] max-sb:grid-cols-2 max-sb:grid-rows-4 max-xs:grid-cols-1 max-xs:grid-rows-8 max-sb:gap-y-[7.68vw] max-mb:w-full max-xs:flex max-xs:flex-col max-xs:gap-y-4",
  ProjectListSecondContainerInfoDiv:
    "flex gap-[9px] justify-center max-ss:flex-wrap mt-[50px]",
  ProjectListSecondContainerInfoDivText:
    "h-[33px] py-[6px] px-[16px] text-[#FEFFFF] font-[400] text-center rounded-[69px] shadow-custom max-md:text-[13px] max-md:h-auto",
  ProjectListGridChild1:
    "bg-[#1A1A1A] rounded-[13.8px] row-span-2 w-[18.47] h-[572px] px-[23px] pt-[23px] max-mb:w-full",
  ProjectListGridChild1ColorDiv:
    "w-[215px] h-[404px] rounded-[13.8px] bg-[#0AC6AD] max-xxl:w-full ",
  ProjectListGridChild1TextDiv: "pt-[52px] flex flex-col items-start gap-[6px]",
  ProjectListGridChild1Text1:
    "font-[300] text-[18px] leading-[21px] text-[#ffffffde]",
  ProjectListGridChild1Text2:
    "font-[500] text-[18px] leading-[21px] text-[#ffffffde]",
  ProjectListGridChild2:
    "bg-[#1A1A1A] rounded-[13.8px] w-[265px] h-[253px] px-[17px] py-[17px] max-xxl:w-full max-sb:h-fit",
  ProjectListGridChild2ColorDiv:
    "w-[230px] h-[134px] rounded-[13.8px] bg-[#c4c8cc] max-xxl:w-full",
  ProjectListGridChild2TextDiv: "pt-[17px] flex flex-col items-start gap-[6px]",
  ProjectListGridChild3:
    "bg-[#1A1A1A] rounded-[13.8px] row-span-2 w-[263px] h-[572px] px-[14px] py-[23px] max-xxl:w-full max-xs:h-fit",
  ProjectListGridChild3LogoTextDiv:
    "pt-[107px] flex flex-col items-start gap-[6px] max-mb:w-[265px] max-xs:pt-0 max-xs:pb-[50px] max-sb:w-full",
  ProjectListGridChild4:
    " bg-[#1A1A1A] rounded-[13.8px] w-full h-[256px] px-[17px] pt-[17px] flex flex-col items-start max-mb:w-[20vw] max-mb:w-full",
  ProjectListGridChild4LogoTextDiv:
    "flex flex-col items-start gap-[6px] pl-[17px]",
  ProjectListGridChild5:
    " bg-[#1A1A1A] rounded-[13.8px] w-[265px] h-[256px] px-[17px] pt-[17px] max-xxl:w-full",
  ProjectListGridChild5ColorDiv:
    "w-[230px] h-[134px] rounded-[13.8px] bg-[#ffffff] max-xxl:w-full",
  ProjectListGridChild5TextDiv: "pt-[17px] flex flex-col items-start gap-[6px]",
  ProjectListGridChild6:
    " bg-[#1A1A1A] rounded-[13.8px] w-full h-[256px] px-[17px] pt-[17px] flex flex-col items-start max-mb:w-[20vw] max-mb:w-full",
  ProjectListGridChild6TextDiv: "flex flex-col items-start gap-[6px] pl-[17px]",
  ScopeMainDiv: "px-[33px] max-mb:px-[33px] max-xs:px-[14px]",
  ScopeMainContainer:
    "w-[1234px] mb-[120px] max-xxl:w-full max-xxl:flex max-xxl:flex-col max-xxl:items-center",
  ScopeMainContainerFirstDiv: "mb-[100px]",
  ScopeMainContainerSecondDivContainer:
    "flex flex-col gap-[80px] max-ss:gap-[50px]",
  ScopeMainContainerCardDiv:
    "flex justify-end gap-[40px] max-xxl:flex-wrap max-xxl:justify-center max-md:gap-[5vw]",
  ScopeMainCardDiv:
    "w-[267px] h-[250px] bg-[#1a1a1a] rounded-[30px] max-md:h-fit max-ss:w-full",
  ScopeMainCardImgOne:
    "absolute w-[60px] top-[-20px] left-[-20px] max-md:w-[64px] max-ss:w-[55px] max-ss:top-[-15px] max-ss:left-[-12px]",
  ScopeMainPDiv: "p-[32px] flex flex-col gap-[18px]",
  ScopeMainDivPar:
    "font-[600] text-[20px] text-[#ffffff] leading-[20px] tracking-[-0.25px] text-left",
  ScopeMainDivParTwo:
    "font-[400] text-[15px] text-[#ffffff] leading-[24px] tracking-[-0.25px] text-left",
  ScopeMainCardImgTwo:
    "absolute w-[60px] top-[-25px] left-[-20px] max-md:w-[64px] max-ss:w-[55px] max-ss:top-[-15px] max-ss:left-[-12px]",
  ScopeMainCardImgThree:
    "absolute w-[60px] top-[-27px] left-[-28px] max-md:w-[64px] max-ss:w-[55px] max-ss:top-[-15px] max-ss:left-[-12px]",
  ScopeMainCardImgFore:
    "absolute w-[60px] top-[-30px] left-[-28px] max-md:w-[64px] max-ss:w-[52px] max-ss:top-[-20px] max-ss:left-[-20px]",
  ScopeMainCardMainDiv: "flex flex-col items-center",
  ScopeMainCardDivLastCart:
    "py-[20px] pr-[17px] pl-[31px] w-[608px] h-[176px] bg-[#1a1a1a] rounded-[30px] flex gap-[11px] max-ss:w-[90vw] max-ss:h-fit max-ss:pl-[18px]",
  ScopeMainLastCartImg: "w-[210px] h-[64px]",
  ScopeMainLastCartSecondDiv: "flex flex-col justify-center gap-[11px]",
  ScopeMainLastCartSecondDivP:
    "font-[400] text-[18px] text-[#ffffff] leading-[20px] tracking-[-0.25px] text-left max-md:w-full",
  ScopeMainLastCartSecondDivPSpan:
    "font-[700] text-[18px] text-[#ffffff] leading-[20px] tracking-[-0.25px]",
  ScopeMainLastCartSecondDivLastP:
    "font-[400] text-[17px] text-[#ffffff] leading-[24px] tracking-[-0.25px] text-left max-ss:text-[15px]",
  UserPersonMainDiv:
    "w-[1130px] mt-[120px] flex flex-col items-center gap-[57px] max-mb:w-full max-ss:px-[14px] max-ss:gap-[35px]",
  UserPersonMainDivP: "text-[22px] text-[#6E2FEB] leading-[26px] font-[700]",
  UserPersonSecondDiv:
    "mb-[17px] flex gap-[27px] max-lg:gap-[16px] max-mb:flex-col max-ss:w-full",
  UserPersonContainerDiv: "flex flex-col justify-between gap-[16px] h-full",
  UserPersonContainerDivTwo:
    "bg-[#1a1a1a] flex gap-[43px] items-center justify-center w-[360px] h-[154px] mx-auto rounded-[20px] max-mb:w-full max-mb:m-0 max-lg:pr-[3.9vw] max-lg:pl-[3.9vw] max-lg:gap-[2.5vw] max-ss:m-0 max-ss:gap-[43px] max-xs:px-[18px]",
  UserPersonContainerDivTwoImg: "w-[120px] h-[112px]",
  UserPersonContainerDivTwoH1:
    "text-[32px] text-[#ffffff] leading-[38px] font-[300] text-start max-lg:text-[28px]",
  UserPersonCartMainDiv:
    "bg-[#1a1a1a] flex flex-col justify-start gap-[21px] items-center w-[360px] h-[354px] row-span-2 mx-auto rounded-[20px] pt-[68px] pb-[33px] pl-[40px] pr-[75px] max-mb:w-full max-mb:h-fit max-mb:m-0 max-lg:pl-[3.9vw] max-lg:pt-[6vw] max-lg:pb-[3.2vw] max-lg:pr-[3.9vw] max-lg:gap-[2vw] max-ss:m-0 max-ss:h-fit max-xs:p-[18px]",
  UserPersonCartMainSecondDiv:
    "flex gap-[3px] w-full max-mb:w-[239px] max-mb:justify-start",
  UserPersonCartFirstCart: "flex flex-row",
  UserPersonCartFirstCartImg: "mr-[5px]",
  UserPersonCartFirstCartP:
    "text-[24px] text-[#ffffff] font-[700] leading-[28px] text-start max-lg:text-[20px]",
  UserPersonCartSecondCartMainDiv:
    "flex flex-col gap-[12px] max-ss:w-full max-ss:items-center",
  UserPersonCartSecondCartMainInerDiv:
    "flex flex-col gap-[15px] max-ss:justify-center",
  UserPersonCartSecondCart: "flex gap-[11px] leading-[20px]",
  UserPersonCartSecondCartImg: "w-[15px] h-[20px]",
  ProjectListChartTitle: "font-[700] text-[22px] text-[#6e2feb] leading-[26px]",
  UserPersonCartSecondCartP:
    "text-[14px] text-[#ffffff] font-[300] leading-[20px] max-lg:text-[14px] text-start",
  UserPersonCartTheredCartMainDiv: "flex flex-col gap-[16px] max-lg:gap-[16px]",
  UserPersonCartTheredCartContainerDiv:
    "bg-[#1a1a1a] flex items-center justify-center col-span-2 w-[741px] h-[80px] mx-auto rounded-[20px] max-mb:w-[65vw] max-ss:m-0 max-ss:w-full",
  UserPersonCartTheredCartP:
    "text-[16px] text-[#ffffff] font-[300] leading-[22px] text-center max-ss:px-[10px] max-xs:p-[18px]",
  UserPersonCartForthCartMainDiv:
    "flex justify-between max-ss:gap-[16px] max-xs:flex-col",
  UserPersonCartForthCartDiv:
    "bg-[#1a1a1a] flex flex-col gap-[20px] items-start w-[354px] h-[197px] row-span-2 rounded-[20px] pt-[28px] pb-[31px] pl-[26px] pr-[40px] max-lg:gap-[2vw] max-lg:pb-[3vw] max-lg:pt-[2.7vw] max-lg:pl-[2.5vw] max-lg:pr-[3.9vw] max-mb:w-[31vw] max-ss:w-full max-xs:h-fit max-xs:p-[18px]",
  UserPersonCartForthDiv: "flex gap-[9.5px] w-full",
  UserPersonCartForthDivP:
    "text-[24px] text-[#ffffff] font-[700] leading-[28px] max-lg:text-[20px]",
  UserPersonCartForthDivPSevond:
    "text-[14px] text-[#ffffff] font-[300] leading-[22px] max-lg:text-[14px]",
  UserPersonCartFifthDivMain:
    "bg-[#1a1a1a] flex flex-col gap-[20px] items-center  w-[360px] h-[197px] row-span-2 rounded-[20px] pt-[27px] pb-[52px] pl-[26px] pr-[32px] max-lg:gap-[2vw] max-mb:w-[31.8vw] max-lg:pb-[3vw] max-lg:pt-[2.7vw] max-lg:pl-[2.5vw] max-lg:pr-[3.9vw] max-ss:w-full max-xs:h-fit max-xs:p-[18px]",
  UserPersonCartFifthDiv: "text-start w-full",
  UserPersonCartFifthDivP:
    "text-[24px] text-[#ffffff] font-[700] leading-[28px] max-lg:text-[20px]",
  UserPersonCartFifthDivPar:
    "text-[14px] text-[#ffffff] font-[300] leading-[22px] text-start max-lg:text-[14px]",
  UserPersonCartSixthDivMain:
    "bg-[#1a1a1a] flex flex-col gap-[20px] items-center w-[741px] h-[224px] mx-auto rounded-[20px] pt-[39px] pb-[53px] pl-[32px] pr-[44px] max-mb:w-[65vw] max-lg:pb-[3vw] max-lg:pt-[2.7vw] max-lg:pl-[2.5vw] max-lg:pr-[3.9vw] max-ss:m-0 max-ss:w-full max-xs:h-fit max-xs:p-[18px]",
};

const SkyPtoP = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#01050A";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="project-detail relative">
      <Header />
      <div>
        <div className="relative">
          <div className={styles.ProjectListSecondContainerInerDiv}>
            <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 max-mb:w-full max-lg:static max-lg:transform-none max-lg:mt-[90px]">
              <div className={styles.ProjectListSecondContainerInerDivTitleDiv}>
                <p
                  className={styles.ProjectListSecondContainerInerDivTitleDivP}
                >
                  About Project
                </p>
                <h1
                  className={styles.ProjectListSecondContainerInerDivTitleDivH1}
                >
                  SkyPtoP
                </h1>
              </div>
              <div className={styles.ProjectListSecondContainerInfoDiv}>
                <div className="flex gap-[9px] max-ss:flex-wrap">
                  {["Deliver/track/send", "App", "Delivery", "View"].map(
                    (label) => (
                      <div key={label}>
                        <p className="h-[33px] py-[6px] px-[16px] bg-[#0f0f0f] text-[#FEFFFF] text-[14px] font-[400] text-center rounded-[69px] shadow-custom">
                          {label}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center ">
              <img src={Skyptop} alt="Skyptop" className="max-xxl:w-full" />
            </div>
          </div>
        </div>
        <div className="w-screen absolute top-[787px] max-xxl:top-[56.94vw] max-lg:top-[87vw] max-sb:top-[92vw] max-md:static">
          <div className="w-[1234px] max-xxl:w-full flex justify-center">
            <div className="w-[720px] max-md:w-[80vw]">
              <div className="flex flex-col gap-[25px] max-ss:gap-[18px] max-md:mt-[20px]">
                <h2 className="text-[#FEFFFF] text-[36px] font-[600] leading-[43px] text-center max-xxl:text-[2.5vw] max-md:text-[32px]">
                  About SkyPtoP
                </h2>
                <p className="text-[#DCDCDC] text-[20px] font-[400] leading-[24px] text-center max-xxl:text-[1.39vw] max-md:text-[16px]">
                  SkyPtoP provides a convenient online service for finding
                  fellow-travellers who can deliver your parcel on their way. We
                  have created a functional platform that allows you to estimate
                  the cost of delivery, choose a suitable fellow-traveller and
                  arrange delivery online.
                </p>
                <p className="text-[#DCDCDC] text-[20px] font-[400] leading-[24px] text-center max-xxl:text-[1.39vw] max-md:text-[16px]">
                  We strive to make the process of sending parcels as simple and
                  convenient as possible for everyone. Our service allows you to
                  save time and money, and also contributes to environmental
                  safety. We use existing routes and do not create additional
                  traffic flows. Our team consists of experienced developers who
                  are constantly working to improve our service and expand its
                  functionality. We provide guarantees of safety and reliability
                  of delivery. Join our online community and send your parcels
                  quickly, conveniently and safely!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ProjectListGridContainerMain}>
        <div className={styles.ProjectListGridContainerDiscriptionDiv}>
          <h2 className={styles.ProjectListGridContainerDiscriptionH1}>
            Style guide
          </h2>
          <p className={styles.ProjectListGridContainerDiscriptionP}>
            Color Palette/Typefaces
          </p>
        </div>
        <div className={styles.ProjectListGridContainer}>
          <div className={styles.ProjectListGridChild1}>
            <div className={styles.ProjectListGridChild1ColorDiv}></div>
            <div className={styles.ProjectListGridChild1TextDiv}>
              <p className={styles.ProjectListGridChild1Text1}>#0AC6AD</p>
              <p className={styles.ProjectListGridChild1Text2}>Solid green</p>
            </div>
          </div>
          <div className={styles.ProjectListGridChild2}>
            <div className={styles.ProjectListGridChild2ColorDiv}></div>
            <div className={styles.ProjectListGridChild2TextDiv}>
              <p className={styles.ProjectListGridChild1Text1}>#C4C8CC</p>
              <p className={styles.ProjectListGridChild1Text2}>Solid grey</p>
            </div>
          </div>
          <div className={styles.ProjectListGridChild3}>
            <div>
              <img src={Aa} alt="logo" className="w-[245px] h-[312px]" />
            </div>
            <div className={styles.ProjectListGridChild3LogoTextDiv}>
              <p className={styles.ProjectListGridChild1Text1}>
                SF Pro Display
              </p>
              <p className={styles.ProjectListGridChild1Text2}>Regular</p>
            </div>
          </div>
          <div className={styles.ProjectListGridChild4}>
            <div>
              <img
                src={Aa}
                alt="logo"
                className="w-[168px] h-[172px] max-xxl:w-[150px]"
              />
            </div>
            <div className={styles.ProjectListGridChild4LogoTextDiv}>
              <p className={styles.ProjectListGridChild1Text1}>
                SF Pro Display
              </p>
              <p className={styles.ProjectListGridChild1Text2}>Medium</p>
            </div>
          </div>
          <div className={styles.ProjectListGridChild5}>
            <div className={styles.ProjectListGridChild5ColorDiv}></div>
            <div className={styles.ProjectListGridChild5TextDiv}>
              <p className={styles.ProjectListGridChild1Text1}>#FFFFFF</p>
              <p className={styles.ProjectListGridChild1Text2}>Solid white</p>
            </div>
          </div>
          <div className={styles.ProjectListGridChild6}>
            <div>
              <img
                src={Aa}
                alt="logo"
                className="w-[168px] h-[172px] max-xxl:w-[150px]"
              />
            </div>
            <div className={styles.ProjectListGridChild6TextDiv}>
              <p className={styles.ProjectListGridChild1Text1}>
                SF Pro Display
              </p>
              <p className={styles.ProjectListGridChild1Text2}>Bold</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ScopeMainDiv}>
        <div className={styles.ScopeMainContainer}>
          <div className={styles.ScopeMainContainerFirstDiv}>
            <p className={styles.ProjectListChartTitle}>
              The scope of our work
            </p>
          </div>
          <div className={styles.ScopeMainContainerSecondDivContainer}>
            <div className={styles.ScopeMainContainerCardDiv}>
              <div className={styles.ScopeMainCardDiv}>
                <div className="relative">
                  <img
                    src={rocket}
                    alt="rocket"
                    className={styles.ScopeMainCardImgOne}
                  />
                </div>
                <div className={styles.ScopeMainPDiv}>
                  <p className={styles.ScopeMainDivPar}>Research</p>
                  <p className={styles.ScopeMainDivParTwo}>
                    We conducted competitors analysis, determined the main user
                    personas, goals, and jobs for the future project.
                  </p>
                </div>
              </div>
              <div className={styles.ScopeMainCardDiv}>
                <div className="relative">
                  <img
                    src={dart}
                    alt="rocket"
                    className={styles.ScopeMainCardImgTwo}
                  />
                </div>
                <div className={styles.ScopeMainPDiv}>
                  <p className={styles.ScopeMainDivPar}>UX Design</p>
                  <p className={styles.ScopeMainDivParTwo}>
                    We provided the main prototypes of future screens and a user
                    flow, describing the potential client’s actions during the
                    app interaction.
                  </p>
                </div>
              </div>
              <div className={styles.ScopeMainCardDiv}>
                <div className="relative">
                  <img
                    src={paint}
                    alt="rocket"
                    className={styles.ScopeMainCardImgThree}
                  />
                </div>
                <div className={styles.ScopeMainPDiv}>
                  <p className={styles.ScopeMainDivPar}>UI Design</p>
                  <p className={styles.ScopeMainDivParTwo}>
                    We started drawing and working out all the application
                    details using the main color chosen by the customer and the
                    mood boards one.
                  </p>
                </div>
              </div>
              <div className={styles.ScopeMainCardDiv}>
                <div className="relative">
                  <img
                    src={phone}
                    alt="rocket"
                    className={styles.ScopeMainCardImgFore}
                  />
                </div>
                <div className={styles.ScopeMainPDiv}>
                  <p className={styles.ScopeMainDivPar}>User Testing</p>
                  <p className={styles.ScopeMainDivParTwo}>
                    With high-fidelity mockups ready, we decided to do a second
                    round of testing with users.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.ScopeMainCardMainDiv}>
                <div className={styles.ScopeMainCardDivLastCart}>
                  <div className={styles.ScopeMainLastCartImg}>
                    <img src={figma} alt="rocket" className="w-[64px] " />
                  </div>
                  <div className={styles.ScopeMainLastCartSecondDiv}>
                    <p className={styles.ScopeMainLastCartSecondDivP}>
                      Our tool of choice
                      <span className={styles.ScopeMainLastCartSecondDivPSpan}>
                        Figma
                      </span>
                    </p>
                    <p className={styles.ScopeMainLastCartSecondDivLastP}>
                      From the beginning, we knew that we needed a tool that
                      would enable us to cooperate rapidly at every stage of the
                      design process. Figma let us organize the wholde process
                      very effectively and keep all the files in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[120px]">
        <div>
          <div className="mb-[50px] max-md:text-center">
            <h2 className={styles.ProjectListChartTitle}>Design process</h2>
          </div>
          <div className="w-[877PX] flex flex-col flex-wrap gap-[100px] items-center max-lg:w-[100vw] max-md:text-center">
            <div className="flex gap-[39px] max-ss:flex-col">
              <div className="w-[434px] max-lg:w-[42vw] flex flex-col items-center max-ss:px-[33px] max-ss:w-full max-xs:px-[14px]">
                <img src={Empathy} alt="" />
                <div className="flex flex-col gap-[16px] mt-[16px]">
                  <h2 className="text-[24px] text-[#ffffff] font-[700] leading-[36px] tracking-[2px] max-ss:text-[20px]">
                    Empathy
                  </h2>
                  <p className="text-[18px] text-[#E5E5E5] font-[400] leading-[27px] tracking-[2px] max-ss:text-[16px]">
                    Understand the unique challenges and needs of SkyPtoP'
                    users, considering both the international nature of their
                    operations and the specific requirements in transportation
                    worldwide.
                  </p>
                </div>
              </div>
              <div className="w-[404px] max-lg:w-[39vw] flex flex-col items-center max-ss:px-[33px] max-ss:w-full max-xs:px-[14px]">
                <img src={Define} alt="" />
                <div className="flex flex-col gap-[16px] mt-[16px]">
                  <h2 className="text-[24px] text-[#ffffff] font-[700] leading-[36px] tracking-[2px] max-ss:text-[20px]">
                    Define
                  </h2>
                  <p className="text-[18px] text-[#E5E5E5] font-[400] leading-[27px] tracking-[2px] max-ss:text-[16px]">
                    Clearly outline the goals and objectives of the user
                    interface (UI) and user experience (UX) design, taking into
                    account the reliability and trustworthiness expected from a
                    delivering companies with years of international operation.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-[39px] max-ss:flex-col">
              <div className="w-[434px] max-lg:w-[42vw] flex flex-col items-center max-ss:px-[33px] max-ss:w-full max-xs:px-[14px]">
                <img src={Ideate} alt="" />
                <div className="flex flex-col gap-[16px] mt-[16px]">
                  <h2 className="text-[24px] text-[#ffffff] font-[700] leading-[36px] tracking-[2px] max-ss:text-[20px]">
                    Ideate
                  </h2>
                  <p className="text-[18px] text-[#E5E5E5] font-[400] leading-[27px] tracking-[2px] max-ss:text-[16px]">
                    Generate creative solutions for the UI/UX design that align
                    with SkyPtoP' brand identity and convey a sense of
                    professionalism. Explore innovative ways to enhance the user
                    journey in delivering or sending parcels, addressing any
                    pain points or inefficiencies.
                  </p>
                </div>
              </div>
              <div className="w-[404px] max-lg:w-[39vw] flex flex-col items-center max-ss:px-[33px] max-ss:w-full max-xs:px-[14px]">
                <img src={Prototype} alt="" />
                <div className="flex flex-col gap-[16px] mt-[16px]">
                  <h2 className="text-[24px] text-[#ffffff] font-[700] leading-[36px] tracking-[2px] max-ss:text-[20px]">
                    Prototype
                  </h2>
                  <p className="text-[18px] text-[#E5E5E5] font-[400] leading-[27px] tracking-[2px] max-ss:text-[16px]">
                    Develop interactive prototypes that visually represent the
                    proposed design solutions. Create a tangible representation
                    of the user interface, ensuring a seamless and intuitive
                    experience for users interacting with SkyPtoP's delivery
                    platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[709px] max-lg:w-[69vw] flex flex-col items-center max-ss:px-[33px] max-ss:w-full max-xs:px-[14px]">
              <img src={Test} alt="" />
              <div className="flex flex-col gap-[16px] mt-[16px]">
                <h2 className="text-[24px] text-[#ffffff] font-[700] leading-[36px] tracking-[2px] max-ss:text-[20px]">
                  Test
                </h2>
                <p className="text-[18px] text-[#E5E5E5] font-[400] leading-[27px] tracking-[2px] max-ss:text-[16px]">
                  Conduct thorough testing of the prototypes with actual users
                  to gather feedback and identify areas for improvement.
                  Validate the design choices by considering the international
                  user base, ensuring the UI/UX meets the diverse needs and
                  expectations of clients relying on SkyPtoP for delivery
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.UserPersonMainDiv}>
        <div>
          <h2 className={styles.UserPersonMainDivP}>User Personas</h2>
        </div>
        <div className={styles.UserPersonSecondDiv}>
          <div>
            <div className={styles.UserPersonContainerDiv}>
              <div className={styles.UserPersonContainerDivTwo}>
                <div>
                  <img
                    src={alex}
                    alt="alex"
                    className={styles.UserPersonContainerDivTwoImg}
                  />
                </div>
                <div>
                  <h1 className={styles.UserPersonContainerDivTwoH1}>
                    Alex <br></br> Piskov
                  </h1>
                </div>
              </div>
              <div className={styles.UserPersonCartMainDiv}>
                <div className={styles.UserPersonCartMainSecondDiv}>
                  <div className={styles.UserPersonCartFirstCart}>
                    <img
                      src={star}
                      alt="star"
                      className={styles.UserPersonCartFirstCartImg}
                    />
                    <p className={styles.UserPersonCartFirstCartP}>
                      Demographics
                    </p>
                  </div>
                </div>
                <div className={styles.UserPersonCartSecondCartMainDiv}>
                  <div className={styles.UserPersonCartSecondCartMainInerDiv}>
                    <div className={styles.UserPersonCartSecondCart}>
                      <img
                        src={rocketship}
                        alt="rocketship"
                        className={styles.UserPersonCartSecondCartImg}
                      />
                      <p className={styles.UserPersonCartSecondCartP}>
                        Age: 16 years old
                      </p>
                    </div>
                    <div className="flex gap-[11px]">
                      <img
                        src={rocketship}
                        alt="rocketship"
                        className="w-[15px] h-[20px]"
                      />
                      <p className={styles.UserPersonCartSecondCartP}>
                        Education: High School
                      </p>
                    </div>
                    <div className="flex gap-[11px]">
                      <img
                        src={rocketship}
                        alt="rocketship"
                        className="w-[15px] h-[20px]"
                      />
                      <p className={styles.UserPersonCartSecondCartP}>
                        Hometown: Moscow, Russia
                      </p>
                    </div>
                    <div className="flex gap-[11px]">
                      <img
                        src={rocketship}
                        alt="rocketship"
                        className="w-[15px] h-[20px]"
                      />
                      <p className={styles.UserPersonCartSecondCartP}>
                        Living: Prague, Czech Republic
                      </p>
                    </div>
                    <div className="flex gap-[11px]">
                      <img
                        src={rocketship}
                        alt="rocketship"
                        className="w-[15px] h-[20px]"
                      />
                      <p className={styles.UserPersonCartSecondCartP}>
                        Family: Single
                      </p>
                    </div>
                    <div className="flex gap-[11px]">
                      <img
                        src={rocketship}
                        alt="rocketship"
                        className="w-[15px] h-[20px]"
                      />
                      <p className="text-[14px] text-[#ffffff] font-[300] leading-[20px] max-lg:text-[14px]">
                        Occupation: Student
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.UserPersonCartTheredCartMainDiv}>
              <div className={styles.UserPersonCartTheredCartContainerDiv}>
                <div>
                  <p className={styles.UserPersonCartTheredCartP}>
                    “ I want to hangout with my friends but they prefer online
                    activities”
                  </p>
                </div>
              </div>
              <div className={styles.UserPersonCartForthCartMainDiv}>
                <div className={styles.UserPersonCartForthCartDiv}>
                  <div className={styles.UserPersonCartForthDiv}>
                    <p className={styles.UserPersonCartForthDivP}>📌 Goals</p>
                  </div>
                  <div className="text-start">
                    <p className={styles.UserPersonCartForthDivPSevond}>
                      👍 To gain admission into High School
                    </p>
                    <p className={styles.UserPersonCartForthDivPSevond}>
                      👍 To spend time playing outdoor games
                    </p>
                    <p className={styles.UserPersonCartForthDivPSevond}>
                      👍 Find people with same interests
                    </p>
                  </div>
                </div>
                <div className={styles.UserPersonCartFifthDivMain}>
                  <div className={styles.UserPersonCartFifthDiv}>
                    <p className={styles.UserPersonCartFifthDivP}>
                      😡 Fustrations
                    </p>
                  </div>
                  <div>
                    <p className={styles.UserPersonCartFifthDivPar}>
                      👍 He is forced to be online as most of his friends loves
                      online activities instead of physical meet ups.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.UserPersonCartSixthDivMain}>
                <div className="w-full text-start">
                  <p className={styles.UserPersonCartFifthDivP}>
                    🎉 Brief story
                  </p>
                </div>
                <div className="w-full text-start">
                  <p className={styles.UserPersonCartFifthDivPar}>
                    John is currently seeking to gain admission to High college.
                    He is the serious type of person and is not active on social
                    media. He only has a Facebook account. He uses his phone to
                    prepare for his exams. To him social media is a distraction.
                    He prefers offline activities such as tennis, camping,
                    hiking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.UserPersonSecondDiv}>
          <div>
            <div className={styles.UserPersonContainerDiv}>
              <div className={styles.UserPersonContainerDivTwo}>
                <div>
                  <img
                    src={Kseniya}
                    alt="Kseniya"
                    className={styles.UserPersonContainerDivTwoImg}
                  />
                </div>
                <div>
                  <h1 className={styles.UserPersonContainerDivTwoH1}>
                    Kseniya <br></br> Ilyenko
                  </h1>
                </div>
              </div>
              <div className={styles.UserPersonCartMainDiv}>
                <div className={styles.UserPersonCartMainSecondDiv}>
                  <div className={styles.UserPersonCartFirstCart}>
                    <img
                      src={star}
                      alt="star"
                      className={styles.UserPersonCartFirstCartImg}
                    />
                    <p className={styles.UserPersonCartFirstCartP}>
                      Demographics
                    </p>
                  </div>
                </div>
                <div className={styles.UserPersonCartSecondCartMainDiv}>
                  <div className={styles.UserPersonCartSecondCartMainInerDiv}>
                    <div className={styles.UserPersonCartSecondCart}>
                      <img
                        src={rocketship}
                        alt="rocketship"
                        className={styles.UserPersonCartSecondCartImg}
                      />
                      <p className={styles.UserPersonCartSecondCartP}>
                        Age: 23 years old
                      </p>
                    </div>
                    <div className="flex gap-[11px]">
                      <img
                        src={rocketship}
                        alt="rocketship"
                        className="w-[15px] h-[20px]"
                      />
                      <p className={styles.UserPersonCartSecondCartP}>
                        Education: Master degree
                      </p>
                    </div>
                    <div className="flex gap-[11px]">
                      <img
                        src={rocketship}
                        alt="rocketship"
                        className="w-[15px] h-[20px]"
                      />
                      <p className={styles.UserPersonCartSecondCartP}>
                        Hometown: Krasnodar, Russia
                      </p>
                    </div>
                    <div className="flex gap-[11px]">
                      <img
                        src={rocketship}
                        alt="rocketship"
                        className="w-[15px] h-[20px]"
                      />
                      <p className={styles.UserPersonCartSecondCartP}>
                        Living: Prague, Czech Republic
                      </p>
                    </div>
                    <div className="flex gap-[11px]">
                      <img
                        src={rocketship}
                        alt="rocketship"
                        className="w-[15px] h-[20px]"
                      />
                      <p className={styles.UserPersonCartSecondCartP}>
                        Family: Single
                      </p>
                    </div>
                    <div className="flex gap-[11px]">
                      <img
                        src={rocketship}
                        alt="rocketship"
                        className="w-[15px] h-[20px]"
                      />
                      <p className="text-[14px] text-[#ffffff] font-[300] leading-[20px] max-lg:text-[14px]">
                        Occupation: Worker
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.UserPersonCartTheredCartMainDiv}>
              <div className={styles.UserPersonCartTheredCartContainerDiv}>
                <div>
                  <p className={styles.UserPersonCartTheredCartP}>
                    “Somtime after work i want to hang out with new people that
                    have same interests ”
                  </p>
                </div>
              </div>
              <div className={styles.UserPersonCartForthCartMainDiv}>
                <div className={styles.UserPersonCartForthCartDiv}>
                  <div className={styles.UserPersonCartForthDiv}>
                    <p className={styles.UserPersonCartForthDivP}>📌 Goals</p>
                  </div>
                  <div className="text-start">
                    <p className={styles.UserPersonCartForthDivPSevond}>
                      👍 Make new friends in real life
                    </p>
                    <p className={styles.UserPersonCartForthDivPSevond}>
                      👍 Enjoy youthful age
                    </p>
                    <p className={styles.UserPersonCartForthDivPSevond}>
                      👍 Spend time with his friends
                    </p>
                  </div>
                </div>
                <div className={styles.UserPersonCartFifthDivMain}>
                  <div className={styles.UserPersonCartFifthDiv}>
                    <p className={styles.UserPersonCartFifthDivP}>
                      😡 Fustrations
                    </p>
                  </div>
                  <div>
                    <p className={styles.UserPersonCartFifthDivPar}>
                      👍 Even though I love being on social media, it has been a
                      huge distraction and her fear is that she’s becoming
                      addicted.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.UserPersonCartSixthDivMain}>
                <div className="w-full text-start">
                  <p className={styles.UserPersonCartFifthDivP}>
                    🎉 Brief story
                  </p>
                </div>
                <div className="w-full text-start">
                  <p className={styles.UserPersonCartFifthDivPar}>
                    Kseniya is currently working in an IT company. She moved to
                    Prague 2 years ago and still didn't find friends with the
                    same interests. She tried Tinder and similar apps but it’s
                    hopeless. She is looking people for to play table games and
                    bicycle rides in the mornings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[120px] px-[70px] mb-[100px] max-ss:px-[33px] max-ss:w-full max-xs:px-[14px]">
        <div className="flex flex-col items-center gap-[50px]">
          <div>
            <h2 className={styles.UserPersonMainDivP}>Design pages</h2>
          </div>
          <div>
            <img
              src={skyPtopdesign}
              alt=""
              className="w-[1093px] max-xxl:w-full"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SkyPtoP;
