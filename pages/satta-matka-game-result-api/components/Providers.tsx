import React, { useState } from "react";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
// import JSON_DATA from "../json/teleMedicine.json";

export default function Tech() {
  const [tech, setTech] = useState(0);

  const sections = [
    {
      title: "For small companies ",
      description:
        "Small-scale companies can also get a Satta Matka result API developed with our services. The services we offer are adapted to small-scale companies and small businesses to create features.",
      listItems: [
        "Basic Result Retrieval",
        "Simple Integration",
        "Limited Data ",
        "Basic Security",
        "Proper Documentation"
      ],
      imageSrc: "/img/dating-apps-for-young-adults.svg",
    },
    {
      title: "For Mid-scale companies",
      description:
        "The Mid-Scale Companies can also get a Satta Matka Result API software that can be integrated into gaming software. The Satta Matka gaming result API is made to function swiftly with the gaming application. ",
      listItems: [
        "Extended result history",
        "User Authentication ",
        "Analytics",
        "Customization",
        "Higher request limits"
      ],
      imageSrc: "/img/dating-apps-for-professionals.svg",
    },
    {
      title: "For large gaming companies",
      description:
        "Large gaming companies also need to use satta matka result net in their online gambling apps to increase the interaction of users with the app layout. Large gaming companies need a layout and a strong API that can handle all the traffic to the app.",
      listItems: [
        "Comprehensive data access",
        "Advanced data security",
        "Highly scalable",
        "Advanced analytics",
        "Customization and filtering"
      ],
      imageSrc: "/img/dating-apps-for-older-adult.svg",
    },
  ];

  return (
    <section className="lg:py-16 py-10 bg-[#223547]">
      <div className="space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
        <div className="flex flex-col justify-center text-center">
          <h2 className="py-4 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
          Satta Matka Game Result API for a diverse audience
          </h2>
          <p className="text-base text-white">
          As a leading development team that creates APIs for Satta Result Matka, we create our API solutions that will help create full-fledged gaming and gambling apps for online stakeholders. For example, our solutions are meant for companies on small, mid, and large scales. The level of API development also depends on the features that the clients want to include in the API framework.
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
