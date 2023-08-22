import "./App.css";
import {
  BiLogoReact,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoPython,
  BiLogoFlutter,
} from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiKotlin } from "react-icons/si";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import Contact from "./components/contact/contact";

function App() {
  const renderContainer = (
    leftContent: React.ReactNode,
    rightContent: React.ReactNode,
    extraContainerClassName?: string,
    leftContainerExtraClassName?: string,
    rightContainerExtraClassname?: string
  ) => {
    const containerClassName = `flex lg:flex-row flex-col ${extraContainerClassName}`;
    const leftContainerClassName = `lg:w-1/2 flex flex-col justify-center items-end p-12 text-dark gap-2 font-merriweather bg-light  ${leftContainerExtraClassName}`;
    const rightContainerClassName = `lg:w-1/2 flex flex-col justify-center items-start p-12 text-light gap-2 font-montserrat bg-dark ${rightContainerExtraClassname}`;
    return (
      <div className={containerClassName}>
        <div className={leftContainerClassName}>{leftContent}</div>
        <div className={rightContainerClassName}>{rightContent}</div>
      </div>
    );
  };

  const renderAbout = () => {
    const extraContainerClassName = "md:h-screen";
    const leftContainerClassName = "pt-36 lg:pt-0";

    const leftContent = renderTitle("nathalie teh", 'web developer');
    const rightContent = (
      <h1 className="font-montserrat text-sm sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        eleifend porta odio in lacinia. Vivamus eleifend ornare ante, ut
        ultrices nibh laoreet in. Quisque luctus ligula dui, et pellentesque
        odio interdum rutrum. Donec vitae accumsan magna. Cras hendrerit, augue
        vel sagittis interdum, nisl diam efficitur velit, id varius libero sem
        sed risus.
      </h1>
    );

    return renderContainer(
      leftContent,
      rightContent,
      extraContainerClassName,
      leftContainerClassName
    );
  };

  const renderSkills = () => {
    const leftContent = renderTitle("skills");
    const rightContent = (
      <div className="gap-6 flex flex-col">
        <h1 className="font-montserrat text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          eleifend porta odio in lacinia. Vivamus eleifend ornare ante, ut
          ultrices nibh laoreet in. Quisque luctus ligula dui, et pellentesque
          odio interdum rutrum.
        </h1>
        <div className="flex items-center gap-1.5">
          <BiLogoReact size={25} />
          <TbBrandNextjs size={25} />
          <BiLogoTailwindCss size={25} />
          <DiJavascript1 size={25} />
          <BiLogoTypescript size={25} />
          <BiLogoPython size={25} />
          <SiKotlin size={17} />
          <BiLogoFlutter size={23} />
        </div>
      </div>
    );

    return renderContainer(leftContent, rightContent);
  };

  const renderContact = () => {
    const leftContent = renderTitle("contact");
    const rightContent = (
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-2 mt-6">
          <div className="flex gap-2 items-center">
            <AiOutlineMail size={25} />
            <p>londonhippos@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center">
            <AiFillGithub size={25} />
            <p>https://github.com/nathalie7890</p>
          </div>
        </div>
        <div className="mt-10 w-full">
          <h1 className="mb-6 text-2xl">Leave me a message</h1>
          <Contact />
        </div>
      </div>
    );

    return renderContainer(leftContent, rightContent);
  };

  const renderTitle = (title: string, subtitle?: string) => {
    return (
      <>
        <h1 className="lg:text-7xl md:text-6xl text-5xl font-semibold">
          {title}
        </h1>
        <h3 className="text-xl mt-2 font-semibold">{subtitle}</h3>
      </>
    );
  };

  return (
    <div className="relative">
      <div className="fixed top-0 right-0 flex justify-end text-light/50 py-4 px-10 gap-6 font-montserrat bg-dark lg:w-1/2 w-full">
        <h1>About</h1>
        <h1>Portfolio</h1>
        <h1>Contact</h1>
      </div>
      {renderAbout()}
      {renderSkills()}
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/2 flex flex-col justify-center items-end p-12 text-dark gap-2 font-merriweather bg-light">
          {renderTitle("portfolio")}
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-start p-12 text-light gap-2 font-montserrat bg-dark"></div>
      </div>
      {renderContact()}
    </div>
  );
}

export default App;
