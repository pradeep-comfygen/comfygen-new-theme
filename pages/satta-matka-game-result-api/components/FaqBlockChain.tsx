import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const Frequently = [
  {
    num: "1",
    title: "What do you understand about a Satta Matka Game API?",
    desc: "A Game API, otherwise known as an Application Programming Interface, describes objects that developers use to develop and integrate integral game features like graphics, sound, and user interactions into their programs.",
  },
  {
    num: "2",
    title: "Are Game APIs important in game development?",
    desc: "By providing ready-made functionalities, the Matka Auto Result API simplifies the development process, thereby enabling the developers to concentrate on producing original content and gameplay elements. They make it possible to develop faster while ensuring cross-platform compatibility."
  },
  {
    num: "3",
    title: "What is contained in most Satta Matka Game Result APIs?",
    desc: "Most Satta Matka game result APIs have features such as rendering graphics, handling user input, managing physics as well as collisions, playing audio files, enabling multiplayer networking capabilities, and supporting different game engines, amongst others.",
  },
  {
    num: "4",
    title: "How do Satta Matka Game APIs benefit developers?",
    desc: "Developers benefit from streamlined development processes, reduced coding effort, and access to advanced features. The game result APIs provide a standardized way to implement complex functionalities, improving development efficiency and game performance.",
    
  },
  {
    num: "5",
    title: "What technologies are out there for making Satta Matka Game Result APIs?",
    desc: "Technologies for making Game result APIs comprise C++, C#, Python-like programming languages, OpenGL and DirectX as graphics libraries, Box2D and Bullet as physics engines, and Unity and Unreal Engine as game engines.",
  },
  {
    num: "6",
    title: "How does one ensure cross-platform compatibility in the case of Satta Matka Game APIs?",
    desc: "By providing standard interfaces and abstract layers that manage platform-specific information, Satta Matka games can be played on any operating system or device without hindrances.",
  },
  {
    num: "7",
    title: "What are some of the security aspects worth considering when developing Satta Matka Game Result APIs?",
    desc: "Some key security actions involve preventing unauthorized access, ensuring secure data transmission, stopping cheating and alterations, and updating the APIs to address vulnerabilities and enhance their security features from time to time.",
  },
  {
    num: "8",
    title: "What is the expected cost to create an API for Satta Matka gaming?",
    desc: "Satta Matka gaming API creation varies in cost based on its complexity and required functionalities, as well as the expertise of developers working on it, usually between US 30,000 and 100,000 dollars. The expenses include the designing phase first, then the developing phase, after that comes testing, and last is the maintenance period.",
  },
  {
    num: "9",
    title: "What’s the usual time frame for making a Satta Matka gaming application programming interface?",
    desc: "It takes between 3 months and 8 months because of its varying timelines; this period covers the planning part, which involves the designing phase then, followed by coding & testing, after which we have initial deployment. ",
  },
  {
    num: "10",
    title: "What are some future directions that Satta matka gaming APIs would take?",
    desc: "Some trends in the future include better support for virtual/augmented realities; machine learning used together with artificial intelligence on various types of play helps enhance game plays while cloud-based gaming attracts more attention; finally, developers need more advanced tools that help them design captivatingly realistic and interactive games.",
  },
];


export default function GuidSectionBlockchain() {
  const [currentCount, setCurrentCount] = useState("");
  return (
    <section className=" bg-slate-100">
      <div className=" mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  lg:px-0  px-6 lg:py-20 py-10">
        <div className="md:space-y-10 space-y-6  w-full">
          <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center 2xl:leading-[3.5rem] xl:leading-[2.5rem] leading-[2rem] capitalize">
           frequently asked
            <b className="font-bold text-blue-600"> questions (FAQs)  </b>
           
          </h2>
          <div className="w-full py-4 space-y-4">
            {Frequently.map((elem: any, index: any) => {
              const { title, desc, li1, li2, li3, li4, li5, li6, } = elem;
              return (
                <div key={index} className="bg-white border cursor-pointer w-full rounded-lg"
                  onClick={() => setCurrentCount(currentCount === index ? false : index)}>
                  <div className="flex items-start justify-center w-full px-4 py-4 text-base font-medium text-left md:items-center md:px-6 text-slate-800 md:text-lg">
                    <h3 className="w-full text-base font-semibold md:text-lg">
                      {title}
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className={currentCount === index ? "icon icon-tabler icon-tabler-chevron-down rotate-180 transition-all duration-200" : "icon icon-tabler icon-tabler-chevron-down rotate-0 transition-all duration-200"} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  <div className={currentCount === index ? "py-6 px-6 text-black space-y-3 text-sm md:text-base transition-height duration-200 min-h-40" : "pt-0 px-6 text-black space-y-3 text-sm md:text-base transition-height duration-200 min-h-0 h-0 overflow-hidden"}>
                    <p>{desc}</p>
                    <ul>
                      <li>{li1}</li>
                      <li>{li2}</li>
                      <li>{li3}</li>
                      <li>{li4}</li>
                      <li>{li5}</li>
                      <li>{li6}</li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
