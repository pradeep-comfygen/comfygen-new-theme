import { useState } from 'react';

const Frequently = [
  {
    num: "1",
    title: "How long does it take to develop a mobile app for my startup?",
    desc: "The complexity, features, and platform of a mobile application all affect how long it takes to build. It normally takes a few weeks to several months. Our staff puts forth a lot of effort to provide top-notch apps in fair amounts of time.",
  },
  {
    num: "2",
    title: "What factors determine the cost of mobile app development?",
    desc: "The cost of app development is influenced by factors like features, design complexity, platform(s), and development time. We offer transparent pricing and work closely with startups to optimize costs while delivering a quality product that meets their needs.",
  },
  {
    num: "3",
    title: "Can you help with app marketing and user acquisition?",
    desc: "Yes, we provide user acquisition and app marketing services to assist companies in effectively reaching their target audience and promoting their products. Our tactics range from social media advertising to app store optimization (ASO) to increase exposure and encourage downloads.",
  },
  {
    num: "4",
    title: "Do you provide ongoing support after the app is launched? ",
    desc: "Absolutely! We provide ongoing support and maintenance services post-launch, including updates, bug fixes, and performance enhancements. Our goal is to ensure your app remains optimized and competitive in the ever-evolving market landscape.",
  },
  {
    num: "5",
    title: "How do you ensure the security of my app and user data? ",
    desc: "Safeguarding the security of your app and user data is our top priority here at our company. We take extra steps to ensure your information is well-protected by employing cutting-edge security measures such as data encryption, secure authentication, and conducting frequent security audits. You can have peace of mind knowing that your valuable information is shielded from any possible threats.",
  },
  {
    num: "6",
    title: "Can you develop both iOS and Android apps for my startup?",
    desc: "Looking for exceptional iOS and Android applications? Look no further! Our team is dedicated to crafting cutting-edge apps that work seamlessly across various platforms. Whether you need a native app tailored for a specific platform or a versatile cross-platform solution, we've got you covered. Trust us to deliver excellence in every line of code.",
  },
  {
    num: "7",
    title: "Will I own the source code of the app after development?",
    desc: "Absolutely! After the app is created, you will have complete ownership of the source code. We believe in transparency and provide all required documentation and resources to give you ultimate control over your app.",
  },
  {
    num: "8",
    title: "How do you handle feedback and revisions during the development process?",
    desc: "We appreciate input and open contact throughout the development process. Our staff collaborates with startups to include feedback and adjustments, ensuring that the end result fulfills their expectations and needs.",
  },
  {
    num: "9",
    title: "Can you help with app monetization strategies?",
    desc: "Let us assist you in developing personalized app monetization plans that are tailored to your startup's goals and audience. Our expert advice will empower you to increase your revenue while maintaining user satisfaction. You can explore different avenues like in-app purchases, subscriptions, advertisements, and beyond to achieve this.",
  },
  {
    num: "10",
    title: "What sets your startup app development company apart from others?",
    desc: "SOur startup app development firm values customized service, openness, and a commitment to excellence. With an emphasis on offering unique solutions that create results, we work directly with startups to turn their app ideas into profitable businesses.",
  }
];




export default function GuidSectionBlockchain() {
  const [currentCount, setCurrentCount] = useState("");
  return (
    <section className=" bg-slate-100">
      <div className=" mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  lg:px-0  px-6 lg:py-20 py-10">
        <div className="md:space-y-10 space-y-6  w-full">
          <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center 2xl:leading-[3.5rem] xl:leading-[2.5rem] leading-[2rem] capitalize">
            Here are some frequently
            <b className="font-bold text-blue-600"> asked questions </b>
            <br />
            Mobile App Development
          </h2>
          <div className="w-full py-4 space-y-4">
            {Frequently.map((elem: any, index: any) => {
              const { title, desc, li1, li2, li3, li4, } = elem;
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
