import Head from "next/head";
import Image from "next/image";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillBehanceCircle, AiFillLinkedin, AiFillInstagram, AiFillGithub, AiFillYoutube} from 'react-icons/ai';
import {SiGmail} from 'react-icons/si';
import avatar from "../public/avatar.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Graphtech Designers Portfolio</title>
        <meta name="description" content="Graphtech Designers Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className=" bg-blue-50 min-h-screen">
        <section>
          <nav className="  drop-shadow-sm py-3 px-3 mb-10 flex justify-between bg-blue-50">
            <Image src="/logo.png" alt="Logo" width="160" height="14" />
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-blue-600 text-lg  hover:text-blue-900 transition duration-300 ease-in-out" /> 
              </li>
              <li><a className="text-sm font-archia ml-5 rounded-3xl bg-blue-200 text-blue-600 py-2 px-4 hover:bg-blue-300 transition duration-300 ease-in-out" href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="relative overflow-hidden rounded-full mx-auto w-60 h-60 mb-2">
              <Image src={avatar} className="drop-shadow-lg rounded-full hover:scale-110 transition duration-300 ease-in-out" />
          </div>
          <div className="py-3 px-3 font-archia text-center">
            <h2 className="text-xl text-blue-600 font-black">Makki Mohammed Zaib Shaikh</h2>
            <h3 className="py-1 text-lg text-slate-900">Developer & Designer</h3>
            <p className="py-2 text-lg leading-7 text-slate-900">Freelancer providing services for programming and design content needs. Contact me and let's get cracking!</p>
          </div>
          <div className="flex justify-center gap-5">
            <ul className="text-4xl text-slate-400 hover:text-slate-800 transition duration-300 ease-in-out"><a href="https://www.behance.net/mohammedzaibshaikh" target="_blank" alt="Behance"><AiFillBehanceCircle /></a></ul>
            <ul className="text-4xl text-slate-400 hover:text-slate-800 transition duration-300 ease-in-out"><a href="https://www.linkedin.com/in/mohammedzaibshaikh/" target="_blank" alt="LinkedIn"><AiFillLinkedin /></a></ul>
            <ul className="text-4xl text-slate-400 hover:text-slate-800 transition duration-300 ease-in-out"><a href="https://www.instagram.com/zaibshaikh_exe" target="_blank" alt="Instagram"><AiFillInstagram /></a></ul>
            <ul className="text-4xl text-slate-400 hover:text-slate-800 transition duration-300 ease-in-out"><a href="https://github.com/zaibshaikh" target="_blank" alt="Github"><AiFillGithub /></a></ul>
            <ul className="text-4xl text-slate-400 hover:text-slate-800 transition duration-300 ease-in-out"><a href="https://www.youtube.com/@makkimohammedzaibshaikh7688" target="_blank" alt="YouTube"><AiFillYoutube /></a></ul>
            <ul className="text-4xl text-slate-400 hover:text-slate-800 transition duration-300 ease-in-out"><a href="mailto:szaib.shaikh@gmail.com" target="_blank" alt="Email"><SiGmail /></a></ul>
            </div>
        </section>

        <section>
          <div className="py-6 text-center font-archia px-3">
            <h3 className="text-xl text-blue-600 font-black">Services I offer</h3>
            <p className="py-2 text-lg leading-7 text-slate-900">Since the beginning of my journey as a freelancer designer & developer, I've done remote work for <span className="text-blue-600">agencies</span> consulted for <span className="text-blue-600">startups</span> and collaborated with talented people to create digital products for both business and consumer use.</p>
          </div>
        </section>

      </main>
    </div>
  );
}