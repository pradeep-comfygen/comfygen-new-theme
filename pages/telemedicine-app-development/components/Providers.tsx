import React, { useState } from "react";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import JSON_DATA from "../json/teleMedicine.json";

export default function Tech() {
  const [tech, setTech] = useState(0);
  
  const sections = [
    {
      title: "Features for Patients",
      description:
        "We can help you create a comprehensive telemedicine app that can transform the patient experience with the help of experts. Our telemedicine platform development services have the capability to streamline accessibility of healthcare services for patients. You can trust us to integrate the following features in patient-facing apps,",
      listItems: [
        "Medication intake and prescription refill reminders.",
        "Booking and scheduling medical appointments.",
        "Remote diagnostic monitoring through wearables data.",
        "Secure in-app payment gateways.",
        "Remote audio/video consultation with doctors.",
        "Real-time health status monitoring.",
      ],
      imageSrc: "/img/Clinical-Apps-For-Admin.webp",
    },
    {
      title: "Features for Healthcare Providers",
      description:
        "Healthcare providers such as doctors, caregivers, and support staff can explore new avenues for delivering healthcare with our telemedicine solutions. Your telemedicine app development project can cater to the pressing concerns of healthcare providers with our expertise. Our app development team can develop telemedicine apps with distinctive features for healthcare providers, such as,",
      listItems: [
        "Remote accessibility of Electronic Health Records.",
        "Emergency video consultation.",
        "Support staff and caregiver training.",
        "Real-time monitoring of ICU patients.",
        "Accessible collaboration channels.",
        "Flexibility for issuing online prescriptions.",
      ],
      imageSrc: "/img/clinical-apps-for-medical-professionals.webp",
    },
    {
      title: "Features for Clinics and Healthcare Organizations",
      description:
        "Clinics and healthcare organizations also need a distinct set of features to carry out their operations effectively and with enhanced productivity. We can help you develop a telemedicine app for clinics and healthcare organizations with cutting-edge features such as,",
      listItems: [
        "Automated pharmaceutical inventory management.",
        "Integrated invoicing and insurance claims systems.",
        "Internal workflow monitoring and management.",
        "Medical equipment and clinical asset tracking.",
        "Doctor and staff shift scheduling system.",
        "Accessibility of educational resources.",
      ],
      imageSrc: "/img/apps-for-patients.webp",
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
        <div className="flex flex-col justify-center text-center">
          <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
            Advanced Feature Sets for Your Telemedicine Apps
          </h2>
          <p className="text-base text-slate-800">
            The diverse range of solutions you can avail yourself of with our telemedicine apps for different users is only a glimpse of our effectiveness in creating telemedicine applications. We are a competent telemedicine software development company looking for new milestones in transforming healthcare app development. Our vision guides us through the mazes of latest technological advancements to pick the best technologies and integrate features that cater to emerging requirements in healthcare.
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
        <div className="grid md:grid-cols-1 grid-cols-1 divide-x-1 md:gap-10 gap-6 relative pt-6 capitalize mt-5 bg-white">
          {sections.map((section, index) => (
            tech === index && (
              <div key={index} className="flex flex-col lg:flex-row py-10 px-4 lg:px-10 rounded-[42px] items-center">
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
                    title={section.title}
                    alt={section.title}
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
