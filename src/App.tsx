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
  return (
    <div className="relative">
      <div className="fixed top-0 right-0 flex justify-end text-light/50 py-4 px-10 gap-6 font-montserrat bg-dark w-1/2">
        <h1>About</h1>
        <h1>Portfolio</h1>
        <h1>Contact</h1>
      </div>
      {/* FIRST PAGE */}
      <div className="flex h-screen">
        <div className="w-full h-full flex flex-col justify-center items-end p-12 text-dark gap-2 font-merriweather bg-light">
          <h1 className="text-7xl font-semibold">nathalie</h1>
          <h1 className="text-xl">I want to be rich</h1>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center p-12 bg-dark text-light">
          <h1 className="font-montserrat">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            eleifend porta odio in lacinia. Vivamus eleifend ornare ante, ut
            ultrices nibh laoreet in. Quisque luctus ligula dui, et pellentesque
            odio interdum rutrum. Donec vitae accumsan magna. Cras hendrerit,
            augue vel sagittis interdum, nisl diam efficitur velit, id varius
            libero sem sed risus.
          </h1>
        </div>
      </div>
      {/* SECOND PAGE */}
      <div className="h-fit flex">
        <div className="w-full flex flex-col justify-center items-end p-12 text-dark gap-2 font-merriweather bg-light">
          <h1 className="text-7xl font-semibold">skills</h1>
        </div>
        <div className="w-full  flex flex-col justify-center items-center p-12 text-light gap-2 font-montserrat bg-dark">
          <div className="gap-6 flex flex-col">
            <h1 className="font-montserrat">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eleifend porta odio in lacinia. Vivamus eleifend ornare ante, ut
              ultrices nibh laoreet in. Quisque luctus ligula dui, et
              pellentesque odio interdum rutrum.
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
        </div>
      </div>
      {/* THIRD PAGE */}
      <div className="h-fit flex">
        <div className="w-full flex flex-col justify-center items-end p-12 text-dark gap-2 font-merriweather bg-light">
          <h1 className="text-7xl font-semibold">portfolio</h1>
        </div>
        <div className="w-full  flex flex-col justify-center items-start p-12 text-light gap-2 font-montserrat bg-dark"></div>
      </div>
      {/* FOURTH PAGE */}
      <div className="h-fit flex w-full">
        <div className="w-full flex flex-col justify-center items-end p-12 text-dark gap-2 font-merriweather bg-light">
          <h1 className="text-7xl font-semibold">contact</h1>
        </div>
        <div className="w-full flex flex-col justify-center items-start p-12 text-light gap-2 font-montserrat bg-dark">
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
        </div>
      </div>
    </div>
  );
}

export default App;
