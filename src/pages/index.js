import Image from "next/image";
import { inter } from "/src/ui/fonts.js";
import { sarabun } from "/src/ui/fonts.js";

import profilePhoto from "/public/images/ProfilePhoto.svg";

import linkedIn from "/public/images/LinkedIn.svg";
import gitHub from "/public/images/GitHub.svg";
import discord from "/public/images/Discord.svg";

import portfolioP from "/public/images/PortfolioProject.png";
import realEstateP from "/public/images/RealEstateProject.png";


function Socials({ size }) {
  return (
    <div className={`flex justify-center`}>
      <a href="https://www.linkedin.com/in/hailegebriel-bizuayehu" className="pointer-events-auto hover:-translate-y-1 delay-0 px-[0.625rem] pt-[0.625rem] transition-all duration-300">
        <Image src={linkedIn} width={size} height={size} alt="Hailegebriel Bizuayehu" />
      </a>

      <a href="https://github.com/HailegebrielB" className="pointer-events-auto px-[0.625rem] pt-[0.625rem] hover:-translate-y-1 delay-0 transition-all duration-300">
        <Image src={gitHub} width={size} height={size} alt="Hailegebriel Bizuayehu" />
      </a>

      <a href="https://www.discordapp.com/users/hali._." className="pointer-events-auto px-[0.625rem] pt-[0.625rem] hover:-translate-y-1 delay-0 transition-all duration-300">
        <Image src={discord} width={size} height={size} alt="Hailegebriel Bizuayehu" />
      </a>
    </div>
  );
}

function ProjectCard({ image, color }) {
  return (<div className="w-[165px] h-[100px] lg:w-[330px] lg:h-[200px] overflow-clip mt-5 relative">
    <Image src={image} fill alt="Hailegebriel Bizuayehu" className={`border-solid border-[${color}] border-2 rounded-md`}></Image>
  </div>);
}

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-10 ${inter.className} antialiased bg-[#0D1D2E]`}
    >
      <header className="flex w-full flex-wrap lg:h-screen justify-center border-b-white border-b-2 pb-5">
        <div className="w-full flex items-center flex-col lg:flex-row lg:justify-between">
          <div className=" w-full flex text-center  justify-center lg:w-5/12">

            <div className="relative w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] mt-20">
              <Image src={profilePhoto} fill alt=" Hailegebriel Bizuayehu" />
            </div>


          </div>
          <div className=" w-full flex text-center flex-col justify-end items-center lg:mt-[100px] lg:w-7/12">
            <h1 className="text-[#DEB992] font-black mt-4 text-2xl lg:text-4xl">Hailegebriel<br></br> Bizuayehu</h1>
            <p className={`${sarabun.class} text-white mt-8 text-left lg:w-[40ch] lg:text-lg`}>I'm a current cs student at UMD, with an avid love for computer science, and all things computers.<br></br><br></br>
              Some of my hobbies include playing on my schools Ultimate Frisbee Team,
              and competing in hackathons.</p>
          </div>
        </div>

        <div className="w-full mt-10 self-end lg:flex lg:justify-end lg:ml-10">
          <Socials size={40} />
        </div>


      </header>

      <section className="w-full flex flex-col text-left lg:px-10">
        <h2 className="bg-gradient-to-r from-[#DEB992] to-white text-transparent bg-clip-text font-black mt-4 text-xl" >Currently Working On</h2>
        <ProjectCard image={portfolioP} color={"#DEB992"}></ProjectCard>
        <p className={`text-white ${sarabun.class} mt-2 lg:text-lg`}>This portfolio page! Designed using Figma, and implemented using, next.js and tailwind.</p>
        <h2 className="bg-gradient-to-r from-[#DEB992] to-white text-transparent bg-clip-text font-black mt-4 text-xl" >Past Projects</h2>
        <ProjectCard image={realEstateP} color={"#000"} />
        <p className={`text-white ${sarabun.class} mt-2 lg:text-lg`}>Mock real estate website created using just html and css.</p>
      </section>
    </main >
  );
}
