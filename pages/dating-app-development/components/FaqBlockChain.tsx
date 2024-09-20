import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const Frequently = [
  {
    num: "1",
    title: "How much time does it take to develop a dating app from scratch?",
    desc: "At Comfygen, we take the time to create a dating app with all the modern features, and this takes us 3 to 6 months at the minimum.",
  },
  {
    num: "2",
    title: "How much does it cost to develop a dating app?",
    desc: "The cost of developing a dating app can go from $50,000 to $150,000, depending on the level of complexity and features it has. "
  },
  {
    num: "3",
    title: "Do you have the team expertise to create a Dating app MVP?",
    desc: "Yes. We have collaborated with a lot of clients to create dating app MVPs for the initial round of deployment.",
  },
  {
    num: "4",
    title: "How do you ensure the data security and privacy of users in a dating app?",
    desc: "We use data privacy technologies like encryption, multi-factor authentication, user profile controls, deletion of messages, and other features to make sure that people can use the dating app very privately. ",
    
  },
  {
    num: "5",
    title: "What are the strategies that can be used for the deployment of a dating app? ",
    desc: "Social media marketing, influencer marketing, and referral programs are great ways to get the dating app off the ground after its development and testing.",
  },
  {
    num: "6",
    title: "How can dating apps be monetized?",
    desc: "Adding in-app purchases, subscription plans, or going for a freemium model for application creation are ways of monetizing the dating app. ",
  },
  {
    num: "7",
    title: "What are the key challenges in dating app development?",
    desc: "The common challenges in dating app development that we combat during the development phase are managing the scalability, creating a user-friendly and interactive interface, ensuring user safety, and managing user queries and complaints in the post-launch phase.",
  },
  {
    num: "8",
    title: "Do you have to adhere to some legal compliance frameworks when creating a dating app?",
    desc: "Yes, data security compliance rules and privacy rules have to be met with age verification, clear terms of service, etc.",
  },
  {
    num: "9",
    title: "What are the latest technologies in dating apps?",
    desc: "Voice-enabled search, communication, and social media integration are some of the latest trends in dating apps that create a comprehensive experience for users. ",
  },
  {
    num: "10",
    title: "How is the UX designed for a dating application?",
    desc: "We understand that the UI and UX play a major role in determining the popularity of a dating application. We create a dating app with easy navigation, accessible user controls, and clean and interactive visual elements so that users can maintain their interest in using the application.",
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
