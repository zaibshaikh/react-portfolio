import Head from "next/head";
import Image from "next/image";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillBehanceCircle, AiFillLinkedin, AiFillInstagram, AiFillGithub, AiFillYoutube} from 'react-icons/ai';
import {SiGmail} from 'react-icons/si';
import avatar from "../public/avatar.jpg";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import code from "../public/code.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Graphtech Designers Portfolio</title>
        <meta name="description" content="Graphtech Designers Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className=" bg-blue-50 dark:bg-slate-900 transition duration-300 ease-in-out">
        <section>
          <nav className="drop-shadow-sm dark:drop-shadow-md py-3 px-3 mb-10  bg-blue-50 dark:bg-slate-900 transition duration-300 ease-in-out " >
            <div className="lg:max-w-screen-lg mx-auto flex justify-between">
            <h1 className="font-archia font-bold uppercase text-slate-900 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-600 transition duration-300 ease-in-out">Graphtech Designers</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-blue-600 text-lg  hover:text-blue-900 transition duration-300 ease-in-out dark:text-slate-300 dark:hover:text-blue-600" /> 
              </li>
              <li><a className="text-sm font-archia ml-5 rounded-3xl bg-blue-200 text-slate-900 py-2 px-4 hover:bg-blue-300 transition duration-300 ease-in-out dark:bg-blue-300 dark:hover:bg-blue-600" href="#">Resume</a></li>
            </ul>
            </div>
          </nav>
          <div className="lg:flex lg:flex-row lg:items-center lg:mt-20 lg:max-w-screen-lg mx-auto">  
          <div className="relative overflow-hidden rounded-full mx-auto w-60 h-60 mb-2">
              <Image src={avatar} className="drop-shadow-xl rounded-full hover:scale-110 transition duration-300 ease-in-out" />
          </div>
          <div className="py-3 px-3 font-archia text-center lg:max-w-screen-lg mx-auto lg:text-left">
            <h2 className="text-xl text-blue-600 font-black">Makki Mohammed Zaib Shaikh</h2>
            <h3 className="py-1 text-lg text-slate-900 dark:text-slate-300 transition duration-300 ease-in-out">Developer & Designer</h3>
            <p className="py-2 text-lg leading-7 text-slate-900 dark:text-slate-300 transition duration-300 ease-in-out lg:max-w-screen-sm mx-auto">Freelancer providing services for programming and design content needs. Contact me and let's get cracking!</p>
          <div className="flex justify-center gap-5 lg:max-w-screen-lg mx-auto lg:justify-start">
            <ul className="text-4xl text-slate-400 hover:text-slate-800 dark:hover:text-blue-600 transition duration-300 ease-in-out"><a href="https://www.behance.net/mohammedzaibshaikh" target="_blank" alt="Behance"><AiFillBehanceCircle /></a></ul>
            <ul className="text-4xl text-slate-400 hover:text-slate-900 dark:hover:text-blue-600 transition duration-300 ease-in-out"><a href="https://www.linkedin.com/in/mohammedzaibshaikh/" target="_blank" alt="LinkedIn"><AiFillLinkedin /></a></ul>
            <ul className="text-4xl text-slate-400 hover:text-slate-900 dark:hover:text-blue-600 transition duration-300 ease-in-out"><a href="https://www.instagram.com/zaibshaikh_exe" target="_blank" alt="Instagram"><AiFillInstagram /></a></ul>
            <ul className="text-4xl text-slate-400 hover:text-slate-900 dark:hover:text-blue-600 transition duration-300 ease-in-out"><a href="https://github.com/zaibshaikh" target="_blank" alt="Github"><AiFillGithub /></a></ul>
            <ul className="text-4xl text-slate-400 hover:text-slate-900 dark:hover:text-blue-600 transition duration-300 ease-in-out"><a href="https://www.youtube.com/@makkimohammedzaibshaikh7688" target="_blank" alt="YouTube"><AiFillYoutube /></a></ul>
            <ul className="text-4xl text-slate-400 hover:text-slate-900 dark:hover:text-blue-600 transition duration-300 ease-in-out"><a href="mailto:szaib.shaikh@gmail.com" target="_blank" alt="Email"><SiGmail /></a></ul>
            </div>
          </div>
          </div>
        </section>

        <section>
          <div className="py-3 text-center font-archia px-3 lg:max-w-screen-lg mx-auto">
            <h3 className="text-xl pt-6 text-blue-600 font-black md:mt-10">Services I offer</h3>
            <p className="py-2 text-lg leading-7 text-slate-900 dark:text-slate-300 transition duration-300 ease-in-out">Since the beginning of my journey as a freelancer designer & developer, I've done remote work for <span className="text-blue-600">agencies</span> consulted for <span className="text-blue-600">startups</span> and collaborated with talented people to create digital products for both business and consumer use.</p>
          </div>
        </section>

        <div className="text-slate-900 lg:max-w-screen-lg flex flex-col px-3 md:flex-row lg:flex lg:flex-row gap-5 mx-auto">
          <div className="bg-white dark:bg-slate-800 dark:text-slate-300 transition duration-300 ease-in-out font-archia text-center rounded-lg lg:w-1/3 md:w-1/3 drop-shadow-sm dark:drop-shadow-md py-5 px-5">
            <span className="flex items-center justify-center">
            <Image src={design} className="rotate-0 hover:-rotate-12 transition duration-300 ease-in-out" width="60"/>
            <h1 className="ml-5 font-semibold text-md text-blue-600">Beautiful Designs</h1>
            </span>
            <p className="py-4 leading-7">Creating elegant designs suited for your needs design needs.</p>
            <h4 className="text-left text-md font-semibold">Design tools I used:</h4>
            <div className="indent-5 text-left first-line:py-6 leading-8">
            <p>- Adobe Illustrator</p>
            <p>- Adobe Photoshop</p>
            <p>- Adobe Indesign</p>
            <p>- Adobe XD</p>
            <p>- Figma</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 dark:text-slate-300 transition duration-300 ease-in-out font-archia text-center rounded-lg lg:w-1/3 md:w-1/3 drop-shadow-sm py-3 px-5">
            <span className="flex items-center justify-center">
            <Image src={code} className="rotate-0 hover:-rotate-12 transition duration-300 ease-in-out" width="60"/>
            <h1 className="ml-5 font-semibold text-md text-blue-600">Elegant Codes</h1>
            </span>
            <p className="py-4 leading-7">Need a website that loads faster than your buttered toast from your toaster? We have got you covered.</p>
            <h4 className="text-left text-md font-semibold">Design tools I used:</h4>
            <div className="indent-5 text-left first-line:py-6 leading-8">
            <p>- HTML</p>
            <p>- CSS</p>
            <p>- JS</p>
            <p>- React</p>
            <p>- PHP</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 dark:text-slate-300 transition duration-300 ease-in-out font-archia text-center rounded-lg lg:w-1/3 md:w-1/3 drop-shadow-sm py-5 px-5">
            <span className="flex items-center justify-center">
            <Image src={consulting} className="rotate-0 hover:-rotate-12 transition duration-300 ease-in-out" width="60"/>
            <h1 className="ml-5 font-semibold text-md text-blue-600">Marvelous SEO</h1>
            </span>
            <p className="py-4 leading-7">Get yourself ranked up in the guaranteed time, No hassle!</p>
            <h4 className="text-left text-md font-semibold">Design tools I used:</h4>
            <div className="indent-5 text-left first-line:py-6 leading-8">
            <p>- Google Workspace</p>
            <p>- Page Speed</p>
            <p>- Analytics</p>
            </div>
          </div>
        </div>
        <div className="font-archia px-3 lg:max-w-screen-lg mx-auto">
          <h2 className="text-xl pt-10 text-blue-600 font-black text-center lg:mt-20 md:mt-10">Portfolio</h2>
          <p className="py-2 text-lg text-center leading-7 text-slate-900 dark:text-slate-300 transition duration-300 ease-in-out">I have been working as a developer and designer for past 6 years. I offer wide range of services, including Rebranding / Brand design, Video Editing & Programming.Here are some of my work!</p>
        </div>
        <div className="px-3 pt-5 flex flex-col md:flex-row sd:flex-col gap-5 overflow-hidden lg:max-w-screen-lg mx-auto">
          <div className="flex flex-col gap-5">
          <div className="basis-1/3 flex 1 overflow-hidden rounded-lg"><Image src={web1} className="rounded-lg object-cover hover:scale-110 transition duration-300 ease-in-out" width={'100%'} height={'100%'} /></div>
          <div className="basis-1/3 flex 1 overflow-hidden rounded-lg"><Image src={web2} className="rounded-lg object-cover hover:scale-110 transition duration-300 ease-in-out" width={'100%'} height={'100%'} /></div>
          <div className="basis-1/3 flex 1 overflow-hidden rounded-lg"><Image src={web3} className="rounded-lg object-cover hover:scale-110 transition duration-300 ease-in-out" width={'100%'} height={'100%'} /></div>
          </div>
          <div className="flex flex-col gap-5">
          <div className="basis-1/3 flex 1 overflow-hidden rounded-lg"><Image src={web4} className="rounded-lg object-cover hover:scale-110 transition duration-300 ease-in-out" width={'100%'} height={'100%'} /></div>
          <div className="basis-1/3 flex 1 overflow-hidden rounded-lg"><Image src={web5} className="rounded-lg object-cover hover:scale-110 transition duration-300 ease-in-out" width={'100%'} height={'100%'} /></div>
          <div className="basis-1/3 flex 1 overflow-hidden rounded-lg"><Image src={web6} className="rounded-lg object-cover hover:scale-110 transition duration-300 ease-in-out" width={'100%'} height={'100%'} /></div>
          </div>
        </div>
        <div className="text-right font-archia mt-10 py-5 text-slate-900 text-md dark:text-slate-300 mx-auto">
          <p className="lg:max-w-screen-lg mx-auto">2023 Graphtech Designers. All rights are reserved.</p>
        </div>
      </main>
    </div>
  );
}