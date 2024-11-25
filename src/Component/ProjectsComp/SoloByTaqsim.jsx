import React from "react";
import solo from "../../Assets/Solo/solo.png";
import Aa from "../../Assets/futurest-img/a-futurest.png";
import rocket from "../../Assets/futurest-img/Rocket.png";
import dart from "../../Assets/futurest-img/dart.png";
import paint from "../../Assets/futurest-img/paint.png";
import phone from "../../Assets/futurest-img/phone.png";
import figma from "../../Assets/futurest-img/figma.png";
import osc1 from "../../Assets/Solo/osc1.png";
import osc2 from "../../Assets/Solo/osc2.png";
import osc3 from "../../Assets/Solo/osc3.png";
import matrix from "../../Assets/Solo/matrix.png";
import lfo1 from "../../Assets/Solo/lfo1.png";
import lfo2 from "../../Assets/Solo/lfo2.png";
import macbook from "../../Assets/Solo/macbook.png";
import uikit from "../../Assets/Solo/ui-kit.png";

const styles = {
  ProjectListContainer:
    "w-[1083px] my-[90px] flex flex-col gap-[50px] max-mb:w-full ",
  ProjectListHeading: "flex flex-col gap-[12px] max-md:items-center",
  ProjectListHeadingP: "text-[#525252] text-[15px] font-[500]",
  ProjectListHeadingH2:
    "text-[#FEFFFF] text-[36px] font-[600] max-md:text-[32px]",
  ProjectListSecondContainer:
    "flex flex-col items-center gap-[12px] max-xs:gap-[50px] p-[33px] max-mb:px-[33px] max-xs:px-[14px]",
  ProjectListSecondContainerInerDiv:
    "flex flex-col gap-[50px] mb-[36px] max-s:w-full",
  ProjectListSecondContainerInerDivTitleDiv: "flex flex-col gap-[12px]",
  ProjectListSecondContainerInerDivTitleDivP:
    "text-[#525252] font-montserrat font-[500] text-[15px] leading-[18px] text-center max-xs:text-[15px]",
  ProjectListSecondContainerInerDivTitleDivH1:
    "text-[#ffffff] font-[600] text-[36px] leading-[43px] text-center max-xs:text-[32px]",
  ProjectListSecondContainerInfoDiv: "flex gap-[9px] max-xs:flex-wrap",
  ProjectListSecondContainerInfoDivText:
    "h-[33px] py-[6px] px-[16px] text-[#FEFFFF] font-[400] text-center rounded-[69px] shadow-custom max-md:text-[13px] max-md:h-auto",
  ProjectListDescriptionContainer:
    "flex flex-row justify-center gap-[9px] w-fit flex-wrap max-md:grid max-md:grid-cols-3 max-md:gap-[9px] max-sm:grid-cols-2",
  ProjectListDescription:
    "text-[#FEFFFF] text-[14px] font-[400] bg-[#0f0f0f] rounded-[69px] shadow-custom px-[16px] py-[8px] max-md:text-center max-xs:text-[3.7vw]",
  ProjectListProjectContainer:
    "w-[781px] flex flex-col items-center gap-[24px] max-md:w-full",
  ProjectListProjectImage:
    "w-[733px] h-fit bg-no-repeat bg-cover bg-center rounded-[24px] max-md:w-full max-md:h-[590px] max-md:h-fit",
  ProjectListProjectInfo: "mt-[50px]",
  ProjectListProjectInfoSectionH1:
    "font-montserrat font-[600] text-[36px] text-[#FEFFFF] text-center max-md:text-[2rem] max-xs:text-[32px]",
  ProjectListProjectInfoSectionP:
    "font-montserrat font-[400] text-[20px] text-[#DCDCDC] text-center mt-[24px] max-md:text-[18px] max-xs:text-[1rem]",
  ProjectListGridContainerMain:
    "w-[100vw] px-[102px] max-mb:px-[33px] max-xs:px-[14px] mt-[120px] max-md:mt-[50px]",
  ProjectListGridContainerDiscriptionDiv:
    "flex flex-col gap-[24px] mb-[50px] w-[77.78vw] max-mb:w-auto max-sb:items-center",
  ProjectListGridContainerDiscriptionH1:
    "text-[36px] text-[#feffff] leading-[43px] font-[600] max-xs:text-[32px]",
  ProjectListGridContainerDiscriptionP:
    "text-[22px] text-[#6E2FEB] leading-[26px] font-[700] max-xs:text-[18px]",
  ProjectListGridContainer:
    "grid justify-center grid-cols-4 grid-rows-2 gap-x-[25px] gap-y-[59px] w-[1120px] mt-[120px] max-xxl:w-[77.78vw] max-sb:grid-cols-2 max-sb:grid-rows-4 max-xs:grid-cols-1 max-xs:grid-rows-8 max-sb:gap-y-[7.68vw] max-mb:w-full max-xs:flex max-xs:flex-col max-xs:gap-y-4",
  ProjectListSecondContainerInfoDiv:
    "flex gap-[9px] justify-center max-ss:flex-wrap mt-[50px]",
  ProjectListSecondContainerInfoDivTextAlternative:
    "h-[33px] py-[6px] px-[16px] text-[#FEFFFF] font-[400] text-center rounded-[69px] shadow-custom max-md:text-[13px] max-md:h-auto",
  ProjectListGridChild1:
    "bg-[#1A1A1A] rounded-[13.8px] row-span-2 w-[18.47] h-[572px] px-[23px] pt-[23px] max-mb:w-full",
  ProjectListGridChild1ColorDiv:
    "w-[215px] h-[404px] rounded-[13.8px] bg-[#f9412a] max-xxl:w-full ",
  ProjectListGridChild1TextDiv: "pt-[52px] flex flex-col items-start gap-[6px]",
  ProjectListGridChild1Text1:
    "font-[300] text-[18px] leading-[21px] text-[#ffffffde]",
  ProjectListGridChild1Text2:
    "font-[500] text-[18px] leading-[21px] text-[#ffffffde]",
  ProjectListGridChild2:
    "bg-[#1A1A1A] rounded-[13.8px] w-[265px] h-[253px] px-[17px] pt-[17px] max-xxl:w-full max-sb:h-full",
  ProjectListGridChild2ColorDiv:
    "w-[230px] h-[134px] rounded-[13.8px] bg-[#323232] max-xxl:w-full",
  ProjectListGridChild2TextDiv: "pt-[17px] flex flex-col items-start gap-[6px]",
  ProjectListGridChild4:
    " bg-[#1A1A1A] rounded-[13.8px] w-full h-[256px] px-[17px] pt-[17px] flex flex-col items-start max-mb:w-[20vw] max-mb:w-full max-sb:h-full",
  ProjectListGridChild4LogoTextDiv:
    "flex flex-col items-start gap-[6px] pl-[17px]",
  ProjectListGridChild3LogoTextDiv:
    "pt-[107px] flex flex-col items-start gap-[6px] max-mb:w-[265px] max-xs:pt-0 max-xs:pb-[50px] max-sb:w-full",
  ProjectListGridChild3:
    "bg-[#1A1A1A] rounded-[13.8px] row-span-2 w-[263px] h-[572px] px-[14px] py-[23px] max-xxl:w-full max-xs:h-fit",
  ProjectListGridChild5:
    " bg-[#1A1A1A] rounded-[13.8px] w-[265px] h-[256px] px-[17px] pt-[17px] max-xxl:w-full",
  ProjectListGridChild5ColorDiv:
    "w-[230px] h-[134px] rounded-[13.8px] bg-[#ffffff] max-xxl:w-full",
  ProjectListGridChild5TextDiv: "pt-[17px] flex flex-col items-start gap-[6px]",
  ProjectListGridChild6:
    " bg-[#1A1A1A] rounded-[13.8px] w-full h-[256px] px-[17px] pt-[17px] flex flex-col items-start max-mb:w-[20vw] max-mb:w-full",
  ProjectListGridChild6TextDiv: "flex flex-col items-start gap-[6px] pl-[17px]",
  ScopeMainDiv: "px-[33px] max-mb:px-[33px] max-xs:px-[14px] max-ss:px-[23px]",
  ScopeMainContainer:
    "w-[1234px] mt-[120px] max-xxl:w-full max-xxl:flex max-xxl:flex-col max-xxl:items-center",
  ScopeMainContainerFirstDiv: "mb-[100px]",
  ScopeMainContainerSecondDivContainer:
    "flex flex-col gap-[80px] max-ss:gap-[50px]",
  ScopeMainContainerCardDiv:
    "flex justify-end gap-[40px] max-xxl:flex-wrap max-xxl:justify-center max-md:gap-[5vw]",
  ScopeMainCardDiv:
    "w-[267px] h-[250px] bg-[#1a1a1a] rounded-[30px] max-ss:w-full",
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
    "py-[20px] pr-[17px] pl-[31px] w-[608px] h-[176px] bg-[#1a1a1a] rounded-[30px] flex gap-[11px] max-ss:w-full max-ss:h-fit max-ss:pl-[18px]",
  ScopeMainLastCartSecondDiv: "flex flex-col justify-center gap-[11px]",
  ScopeMainLastCartSecondDivP:
    "font-[400] text-[18px] text-[#ffffff] leading-[20px] tracking-[-0.25px] text-left",
  ScopeMainLastCartSecondDivPSpan:
    "font-[700] text-[18px] text-[#ffffff] leading-[20px] tracking-[-0.25px]",
  ScopeMainLastCartSecondDivLastP:
    "font-[400] text-[17px] text-[#ffffff] leading-[24px] tracking-[-0.25px] text-left max-ss:text-[15px]",
  ProjectListChartTitle: "font-[700] text-[22px] text-[#6e2feb] leading-[26px]",
  ScopeMainLastCartImg: "",
};

const SoloByTaqsim = () => {
  return (
    <div>
      <div className={styles.ProjectListContainer}>
        <div className={styles.ProjectListSecondContainer}>
          <div className={styles.ProjectListSecondContainerInerDiv}>
            <div className={styles.ProjectListSecondContainerInerDivTitleDiv}>
              <p className={styles.ProjectListSecondContainerInerDivTitleDivP}>
                About Project
              </p>
              <h1
                className={styles.ProjectListSecondContainerInerDivTitleDivH1}
              >
                SOLO by TAQSIM
              </h1>
            </div>
            <div className={styles.ProjectListSecondContainerInfoDiv}>
              <div>
                <p
                  className={
                    styles.ProjectListSecondContainerInfoDivTextAlternative
                  }
                >
                  Virtual instrument
                </p>
              </div>
              <div>
                <p
                  className={
                    styles.ProjectListSecondContainerInfoDivTextAlternative
                  }
                >
                  App
                </p>
              </div>
              <div>
                <p
                  className={
                    styles.ProjectListSecondContainerInfoDivTextAlternative
                  }
                >
                  Music
                </p>
              </div>
              <div>
                <p
                  className={
                    styles.ProjectListSecondContainerInfoDivTextAlternative
                  }
                >
                  View
                </p>
              </div>
            </div>
          </div>
          <div className={styles.ProjectListProjectContainer}>
            <div className={styles.ProjectListProjectImage}>
              <img src={solo} alt="" />
            </div>
            <div className={styles.ProjectListProjectInfo}>
              <div>
                <h1 className={styles.ProjectListProjectInfoSectionH1}>
                  About SkyPtoP
                </h1>
                <p className={styles.ProjectListProjectInfoSectionP}>
                  Welcome to SOLO by TAQSIM, a new virtual instrument that
                  authentically recreates the sound of modern world music.
                  Whether it is quickly playing presets, tweaking sounds,
                  setting up comprehensive modulations, or trying unique
                  microtonal scales, SOLO is designed to be easy to use. We’ve
                  partnered with musicians and producers from around the globe
                  to include a library of authentic sounds to help you stand out
                  from the crowd. If you want to explore more, you can import
                  your own custom multi-samples into SOLO.
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
              <p className={styles.ProjectListGridChild1Text1}>#f9412a</p>
              <p className={styles.ProjectListGridChild1Text2}>orange</p>
            </div>
          </div>
          <div className={styles.ProjectListGridChild2}>
            <div className={styles.ProjectListGridChild2ColorDiv}></div>
            <div className={styles.ProjectListGridChild2TextDiv}>
              <p className={styles.ProjectListGridChild1Text1}>#323232</p>
              <p className={styles.ProjectListGridChild1Text2}>Black</p>
            </div>
          </div>
          <div className={styles.ProjectListGridChild3}>
            <div>
              <img src={Aa} alt="logo" className="w-[245px] h-[312px]" />
            </div>
            <div className={styles.ProjectListGridChild3LogoTextDiv}>
              <p className={styles.ProjectListGridChild1Text1}>Inter</p>
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
              <p className={styles.ProjectListGridChild1Text1}>Inter</p>
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
              <p className={styles.ProjectListGridChild1Text1}>Inter</p>
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
                    <img
                      src={figma}
                      alt="rocket"
                      className="w-[245px] max-ss:w-[218px]"
                    />
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
      <div className="w-[1077px] mt-[120px] max-mb:w-full max-mb:px-[33px] max-ss:px-[23px]">
        <div className="mb-[50px] flex justify-center">
          <h2 className={styles.ProjectListChartTitle}>UI-KIT</h2>
        </div>
        <div>
          <div className="flex justify-center items-center gap-[16px] max-ss:flex-col">
            <div className="max-ss:w-full">
              <img src={uikit} alt="" className="max-ss:w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1077px] mt-[120px] max-mb:w-full max-mb:px-[33px] max-ss:px-[23px]">
        <div className="mb-[50px] flex justify-center">
          <h2 className={styles.ProjectListChartTitle}>3 Synth Engines</h2>
        </div>
        <div className="flex flex-col gap-[16px] justify-center">
          <div className="bg-[#1a1a1a] rounded-[22px] px-[26px] py-[20px]">
            <p className="text-[16px] text-start text-[#ffffff] font-[400] tracking-[-0.24px] max-ss:text-[15px]">
              SOLO includes 3 different synth engines - sample playback, virtual
              analog, and phase distortion - providing you the ultimate sonic
              flexibility to blend synthetic sounds with our organic wave sample
              set.Then further sculpt your sound with the onboard Moog or
              Oberheim style -12db or -24db filter and loudness envelope.
            </p>
          </div>
          <div className="flex flex-col items-center gap-[16px]">
            <div>
              <img src={osc1} alt="" />
            </div>
            <div>
              <img src={osc2} alt="" />
            </div>
            <div>
              <img src={osc3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1077px] mt-[120px] max-mb:w-full max-mb:px-[33px] max-ss:px-[23px]">
        <div>
          <div className="mb-[50px] flex justify-center">
            <h2 className={styles.ProjectListChartTitle}>
              Modulate in the Matrix
            </h2>
          </div>
        </div>
        <div className="mb-[16px]">
          <div className="bg-[#1a1a1a] rounded-[22px] px-[26px] py-[20px]">
            <p className="text-[16px] text-start text-[#ffffff] font-[400] tracking-[-0.24px]">
              The flexible modulation matrix allows you to use the 2 LFO's and
              other controllers to drive parameters throughout the
              synthesizer.Change the LFO type, rate, rate attack, depth, and
              depth attack to modulate the filter, oscillator, effects, and
              more!
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[16px] max-ss:flex-col">
          <div className="max-ss:w-full">
            <img src={matrix} alt="" className="max-ss:w-full" />
          </div>
          <div className="flex flex-col gap-[16px] max-ss:w-full max-ss:items-center">
            <div className="max-ss:w-full">
              <img src={lfo1} alt="" className="max-ss:w-full" />
            </div>
            <div className="max-ss:w-full">
              <img src={lfo2} alt="" className="max-ss:w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[996px] mt-[120px] max-mb:w-full max-mb:px-[33px] max-ss:px-[23px]">
        <div className="mb-[50px] flex justify-center">
          <p className={styles.ProjectListChartTitle}>Main page</p>
        </div>
        <div>
          <img src={macbook} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SoloByTaqsim;
