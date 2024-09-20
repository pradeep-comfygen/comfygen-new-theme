import React, { useState } from "react";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
// import JSON_DATA from "../json/teleMedicine.json";

export default function Tech() {
  const [tech, setTech] = useState(0);

  const sections = [
    {
      title: "For young adults",
      description:
        "Younger adults need quick and easy dating features that let them talk to peers freely. Younger adults want interactive dating apps that are unique in their features. Here are the features for which you can hire a dating app developer team.",
      listItems: [
        "Quick interaction and matching",
        "Interactive communication features ",
        "Social media interaction and integration",
        "Easy voice and video messages",
        "Location-based suggestions and matches"
      ],
      imageSrc: "/img/dating-apps-for-young-adults.svg",
    },
    {
      title: "For Professionals and adults ",
      description:
        "For adults who are professionals and have a busy lifestyle, the features of dating apps might be slightly different from casual dating apps. We create the best interactive dating apps for professionals and adults.",
      listItems: [
        "Detailed profile creation and view",
        "Event and date planning tools",
        "Advanced search filters ",
        "Advanced privacy settings and user controls",
        "Compatibility algorithms",
        "Wide relationship tags and customization"
      ],
      imageSrc: "/img/dating-apps-for-professionals.svg",
    },
    {
      title: "For older adults",
      description:
        "For the older audience and people in their 40s, we also create customized dating apps and websites that they can use smoothly and easily. Here are the features that we prioritize when creating web apps and software for dating among older adults. ",
      listItems: [
        "User-friendly interface ",
        "Detailed user profiles",
        "Easy communication",
        "Community building and discussion forums",
        "Improved security and trust algorithm "
      ],
      imageSrc: "/img/dating-apps-for-older-adult.svg",
    },
  ];

  return (
    <section className="lg:py-16 py-10 bg-[#223547]">
      <div className="space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
        <div className="flex flex-col justify-center text-center">
          <h2 className="py-4 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
          Features In Dating Apps You Should Always Look For!
          </h2>
          <p className="text-base text-white">
          As a leading dating website development company, we create solutions for a diverse audience. We create dating apps that are feature-rich and advanced in their functionalities. By opting for our dating app and website development services, you can pick the latest and most in-demand features that can be included in dating apps. Create a dating app for your niche audience with the best features today. 
          </p>
        </div>
        <div className="flex items-center space-x-4 md:justify-center justify-start overflow-x-auto whitespace-nowrap">
          {sections.map((section, index) => (
            <span
              key={index}
              onClick={() => setTech(index)}
              className={
                tech === index
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                  : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer"
              }
            >
              {section.title}
            </span>
          ))}
        </div>
        <div className="grid md:grid-cols-1 grid-cols-1 divide-x-1 md:gap-10 gap-6 relative pt-6 capitalize mt-5 bg-white rounded-lg">
          {sections.map((section, index) => (
            tech === index && (
              <div key={index} className="flex flex-col lg:flex-row py-10 px-4 lg:px-10 rounded-[42px] items-center lg:space-y-0 space-y-6">
                {index % 2 === 0 ? (
                  <div className="w-full space-y-[5px] text-left">
                    <h2 className="text-[24px] lg:text-4xl font-bold text-[#0E1F51]">{section.title}</h2>
                    <p className="py-6 text-base text-black">{section.description}</p>
                    <ul className="list-disc px-6">
                      {section.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <div className="flex justify-center w-full md:justify-center">
                  <Image
                    className="rounded-md"
                    title="Custom Sports Betting App Development"
                    alt=""
                    src={section.imageSrc}
                    height={400}
                    width={400}
                    loader={uploadcareLoader}
                    unoptimized={true}
                  />
                </div>
                {index % 2 !== 0 ? (
                  <div className="w-full space-y-[5px] text-left">
                    <h2 className="text-[24px] lg:text-4xl font-bold text-[#0E1F51]">{section.title}</h2>
                    <p className="py-6 text-base text-black">{section.description}</p>
                    <ul className="list-disc px-6">
                      {section.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
