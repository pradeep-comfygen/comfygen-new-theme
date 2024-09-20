import React, { useState } from "react";
import Image from "next/image";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const backend = [
  {
    img: "/img/streamlined-user-management.svg",
    alt: 'Streamlined user management',
    name: "Streamlined user management",
    desc: "Dating mobile apps make it easier for users to create profiles quickly and easily by streamlining the onboarding process. This increased onboarding efficiency results in a greater user base. By putting strong user verification techniques in place, directors can increase the platform's legitimacy and protection. This lowers the opportunity for fraudulent activity and upholds the integrity of the network. ",
    num: "1"
  },
  {
    img: "/img/data-analytics-for-better-decision-making.svg",
    alt: 'Data analytics for better decision-making',
    name: "Data analytics for better decision-making",
    desc: " A plethora of data about consumer interactions, alternatives, and behaviors is accrued by dating apps. Administrators can use information analytics equipment to achieve an insightful understanding of consumer tendencies that will aid them in making nicely informed selections about function updates, platform improvements, and marketing procedures.",
    desc1: "With the help of complete analytics, directors can keep an eye on the app's overall performance, pinpointing regions in need of development and optimizing user experience. Administrators are more able to adapt quickly to changing consumer needs and enterprise traits in the way of actual-time information analytics.",
    num: "2"
  },
  {
    img: "/img/monetization-opportunities.svg",
    alt: 'Monetization opportunities',
    name: "Monetization opportunities",
    desc: "There are some ways for relationship apps to make money, together with subscription models that provide customers with admission to top-class functions. By customizing subscription plans to satisfy the wishes of diverse consumer possibilities, administrators can set up a reliable supply of income. Administrators can work with advertisers to create in-app advertising areas that can result in new revenue streams. With this win-win approach, brands can hook up with a selected audience even as the app makes cash.",
    num: "3"
  },
  // {
  //   imgSec: "/img/dating-customer.webp"
  // }

];

const frontend = [
  {
    num: "1",
    img: "/img/convenient-access-to-potential-matches.svg",
    alt: 'Convenient access to potential matches ',
    name: "Convenient access to potential matches",
    decs: "Users of dating app development software can hook up with possible fits outdoors in their on-the-spot vicinity to the apps' potential to transcend geographical boundaries. The opportunities for locating well-suited partners are extended by using this comfort. The app is to be had by customers always, giving them flexibility after they search for viable fits. Because it is to be had 24/7, customers with tense schedules can benefit from its flexibility."
  },
  {
    num: "2",
    img: "/img/diverse-dating-pool.svg",
    alt: 'Diverse dating pool',
    name: "Diverse dating pool",
    decs: "A large range of feasible matches, such as people with comparable hobbies, backgrounds, and demographics, may be placed through courting apps. Finding a person who stocks your values and is properly matched with you is made less complex with the resources of this range.",
    decs1: "Certain dating apps target unique groups or niches, presenting users with studies that are custom-designed to fit their tastes. Because of its inclusivity, customers can connect and feel like they belong. If you want to get the right of entry to a numerous dating pool, then choose the best dating mobile app Development Company in India."
  },
  {
    num: "3",
    img: "/img/enhanced-communication-features.svg",
    alt: 'Enhanced communication features',
    name: "Enhanced communication features",
    decs: "By facilitating actual-time messaging, dating apps allow customers to have significant and short conversations. This immediate conversation hurries up the technique of organizing connections and improves the consumer's overall enjoyment. More state-of-the-art dating apps enable users to speak extra intimately by way of including capabilities like voice messages and video calls. An engagement is richer and greater, and immersive is stronger by using those communication alternatives."
  }
];
const mobile = [
  {
    num: "1",
    img: "/svg/tech/mongodb-original.svg",
    alt: 'Dashboard and Analytics',
    name: "Dashboard and Analytics",
    item: "Comprehensive overview of all ongoing activities.",
    item1: "Analytics tools for monitoring key performance indicators.",
  },
  {
    num: "2",
    img: "/svg/tech/mongodb-original.svg",
    alt: 'User and Driver Management',
    name: "User and Driver Management",
    item: "Admin controls for user and driver accounts",
    item1: "Verify and approve new driver registrations.",

  },
  {
    num: "3",
    img: "/svg/tech/mongodb-original.svg",
    alt: 'Trip Management',
    name: "Trip Management ",
    item: "Monitor and manage live trips. ",
    item1: "Access trip history, including details of completed rides.",
  },
  {
    num: "4",
    img: "/svg/tech/mongodb-original.svg",
    alt: 'Fare and Pricing Management',
    name: "Fare and Pricing Management",
    item: "Set and adjust pricing structures.",
    item1: "Apply dynamic pricing during peak hours or high demand.",
  },
  {
    num: "5",
    img: "/svg/tech/mongodb-original.svg",
    alt: 'Promotions and Discounts:',
    name: "Promotions and Discounts:",
    item: "Create and manage promotional campaigns.",
    item1: "Implement discount codes for users. ",
  },
  {
    num: "6",
    img: "/svg/tech/mongodb-original.svg",
    alt: 'Safety and Compliance:',
    name: "Safety and Compliance:",
    item: "Ensure compliance with local regulations.",
    item1: "Implement safety features such as SOS buttons and trip verification.",
  },
];


export default function Tech() {
  const [tech, setTech] = useState(0);

  return (
    <>
      {/* technology*/}
      <section className="py-20  bg-[#151B22]">
        <div className=" space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
          <div className=" py-4">
            <h2 className=" py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] text-center  mx-auto">
              Advantages of  <b className="text-[#B266C1] font-bold"> Dating Mobile Apps for </b> Admin and Users
            </h2>
            <p className="text-[#fff] text-center mt-2 text-base">Dating mobile apps have become popular and effective tools in the world of modern romance. They not only bring people together, but they also have many benefits for administrators and users. These apps offer hitherto unseen advantages, like easy access to possible matches and simplified user management.</p>
          </div>
          <div className="bg-white p-10 rounded-lg">
            <div className="flex items-center space-x-4 md:justify-center justify-start overflow-x-auto whitespace-nowrap bg-white ">
              <span
                onClick={() => setTech(tech === 0 ? 0 : 0)}
                className={
                  tech === 0
                    ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                    : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                }
              >
                Benefits for Admin
              </span>
              <span
                onClick={() => setTech(tech === 1 ? 0 : 1)}
                className={
                  tech === 1
                    ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                    : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                }
              >
                Benefits for Users

              </span>


            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 divide-x-1 md:gap-10 gap-6 relative pt-6 capitalize mt-5">
              {tech === 0 ? (
                <>
                  {backend.map((elem: any) => {
                    const { img, imgSec, name, desc, desc1, num } = elem;
                    return (
                      <div key={num} className="flex flex-col justify-start space-y-2 rounded-lg bg-[#E3FCFF]  px-6 py-10 shadow-lg transition-all duration-200 cursor-pointer group ">
                        <div className="h-14 w-14 rounded-lg bg-[#2563EB] font-semibold flex items-center justify-center shadow-xl">
                          <Image src={img} alt={name} width={40} height={40} className=" group-hover:scale-105 transition-all duration-200 transform " />
                        </div>
                        {/* <div>
                      <img src={imgSec} alt={name}  className=" w-full" />
                      </div> */}
                        <div>
                          <h3 className="text-lg font-semibold text-black text-start">
                            {name}
                          </h3>
                          <p>{desc}</p>
                          <p>{desc1}</p>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : null}

              {tech === 1 ? (
                <>
                  {frontend.map((elem: any) => {
                    const { img, name, decs, decs1 , num, item, item1, } = elem;
                    return (
                      <div key={num} className="flex flex-col justify-start space-y-2 rounded-lg bg-[#E3FCFF]  px-6 py-10 shadow-lg transition-all duration-200 cursor-pointer group ">
                        <div className="h-14 w-14 rounded-lg bg-[#2563EB] font-semibold flex items-center justify-center shadow-xl">
                          <Image src={img} alt={name} width={40} height={40} className=" group-hover:scale-105 transition-all duration-200 transform " />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black text-start">
                            {name}
                          </h3>
                          <p>{decs}</p>
                          <p>{decs1}</p>
                          {/* <ul className='space-y-1 mt-2'>
                      <li className="flex text-base text-black/80"><span className="pr-2 mt-1.5 text-[#4f4f50]">
                      <VscDebugBreakpointLog className="w-4 h-4 text-[#000]"/>
                      </span>{item} </li>
                      <li className="flex text-base text-black/80"><span className="pr-2 mt-1.5 text-[#4f4f50]">
                      <VscDebugBreakpointLog  className="w-4 h-4 text-[#000]"/>
                      </span>{item1} </li>
                      
                        </ul> */}
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : null}

              {/* {tech === 2 ? (
              <>
                {mobile.map((elem: any) => {
                 const { img, name, desc, num, item, item1,} = elem;
                 return (
                   <div key={num} className="flex flex-col justify-start space-y-2 rounded-lg bg-[#F1F5F9]  px-6 py-10 shadow-lg transition-all duration-200 cursor-pointer group ">
                     <div className="h-14 w-14 rounded-lg bg-[#2563EB] font-semibold flex items-center justify-center shadow-xl">
                       <Image src={img} alt={name} width={40} height={40} className=" group-hover:scale-105 transition-all duration-200 transform " />
                     </div>
                     <div>
                       <h3 className="text-lg font-semibold text-black text-start">
                         {name}
                       </h3>
                       <ul className='space-y-1 mt-2'>
                     <li className="flex text-base text-black/80"><span className="pr-2 mt-1.5 text-[#4f4f50]">
                     <VscDebugBreakpointLog className="w-4 h-4 text-[#000]"/>
                     </span>{item} </li>
                     <li className="flex text-base text-black/80"><span className="pr-2 mt-1.5 text-[#4f4f50]">
                     <VscDebugBreakpointLog  className="w-4 h-4 text-[#000]"/>
                     </span>{item1} </li>
                     
                   </ul>
                     </div>
                   </div>
                 );
                })}
              </>
            ) : null} */}


            </div>
          </div>
          {/* tabs */}


        </div>
      </section>
    </>
  );
}
