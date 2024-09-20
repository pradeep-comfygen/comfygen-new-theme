// components/Tabs.js

import React, { useState } from 'react';
import styles from '../styles.module.css'
import { MdOutlineControlPoint } from "react-icons/md";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const generateHtmlContent = (text) => `
  <li class="text-base text-black/80">
    ${text}
  </li>
`;




  // accordien 

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'Medication Interaction Checker Apps',
      content: 'Check for potential interactions between multiple medications to ensure patient safety.',
    },
    {
      title: 'Rehabilitation and Physical Therapy Apps',
      content: 'Provide guided exercises and rehabilitation plans for patients recovering from injuries or surgeries.',
    },
    {
      title: 'Remote Monitoring for Elderly Care Apps',
      content: 'Monitor the health and well-being of elderly patients living alone and provide alerts in case of emergencies.',
    },
    {
      title: 'Nutrition Planning and Meal Delivery Apps',
      content: "Offer personalized nutrition plans and facilitate  <a class='text-blue-600 font-bold hover:underline' href='/food-delivery-app-development'>food delivery services</a> tailored to patients' dietary needs.",
    },
    {
      title: 'Pregnancy and Baby Care Apps',
      content: 'Assist expecting mothers and new parents with pregnancy tracking, baby development milestones, breastfeeding support, etc.',
    },
    {
      title: 'Chronic Pain Management Apps',
      content: 'Provide tools for tracking pain levels, identifying triggers, and managing chronic pain through various interventions.',
    },
    {
      title: 'Emergency Response Apps',
      content: 'Connect users with emergency services and provide first aid instructions in case of medical emergencies.',
    },
  ];


  const accordionData1 = [
    {
      title: 'Electronic Health Record (EHR) Apps',
      content: 'Enable healthcare professionals to access and update patient records securely.',
    },
    {
      title: 'Medical Reference Apps',
      content: "Provide quick access to medical literature, drug databases, <a class='text-blue-600 font-bold hover:underline' href='/clinical-application-development'>clinical guidelines</a>, etc.",
    },
    {
      title: 'Medical Imaging Apps',
      content: "Aid in the interpretation and analysis of medical images such as X-rays, MRIs, CT scans, etc.",
    },
    {
      title: 'Medical Calculator Apps',
      content: " Assist healthcare professionals in performing various medical calculations such as drug dosages, BMI calculations, etc.",
    },
    {
      title: 'Continuing Medical Education (CME) Apps',
      content: "Offer courses, webinars, and resources for professionals to fulfill their ongoing education requirements.",
    },
    {
      title: 'Healthcare Analytics and Reporting Apps',
      content: "Provide insights and visualization tools to help healthcare professionals analyze data and generate reports for decision-making.",
    }
  ];

  const accordionData2 = [
    {
      title: 'Practice Management Apps',
      content: "Help healthcare providers manage appointments, billing, inventory, staff schedules, etc.",
    },
    {
      title: 'Clinical Decision Support Systems (CDSS)',
      content: "Offer insights, alerts, and recommendations to healthcare providers based on patient data and medical knowledge.",
    },
    {
      title: 'Remote Patient Monitoring (RPM) Apps',
      content: "Enable continuous monitoring of patient's health metrics remotely, allowing early intervention when necessary.",
    },
    {
      title: 'Health Information Exchange (HIE) Apps',
      content: "Facilitate the secure exchange of patient health information between different healthcare providers and systems.",
    },
    {
      title: 'Healthcare Supply Chain Management Apps',
      content: 'Optimize the procurement, distribution, and inventory management of medical supplies and pharmaceuticals.',
    },
    {
      title: 'Integrated Care Coordination Apps',
      content: "Facilitate communication and collaboration between different healthcare providers involved in a patient's care continuum.",
    }
  ];

  return (

    <section className='lg:py-16 py-8'>
      <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
        <div className="flex flex-col justify-center text-center mb-8">
          <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold leading-tight lg:leading-[3rem]">
            Types of mHealth Apps We Build</h2>
          <p className="text-base text-slate-800">Comfygen is an experienced custom healthcare app development company in India and the USA that promises to stand on clientele expectations. We can create tailored custom mHealth apps to resolve specific problems to evolve the whole healthcare ecosystem. Here are some types of mHealth apps our development team can build:</p>
        </div>
        <div className={styles.tabs} >
          <div className='bg-[#0070F3] rounded-tr-lg rounded-tl-lg p-3 overflow-scroll overflow-y-hidden	 '>
            <div className={styles.tabList}>
              {['Apps for Patients', 'Apps for Professionals', 'Apps for Healthcare Providers'].map((tab, index) => (
                <button
                  key={index}
                  className={`${styles.tabButton} ${activeTab === index ? styles.active : ''}`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.tabContent}>
            {activeTab === 0 && (
              <div className={styles.tabPane}>
                <div className='lg:p-6'>
                  <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 text-left items-center">
                    <div>
                      <div className="">
                        {accordionData.map((item, index) => (
                          <div key={index} className="border-b border-gray-200 my-3 bg-[#0E1F51] text-white rounded-[6px]">
                            <button
                              onClick={() => toggleAccordion(index)}
                              className="w-full text-left px-4 py-3 focus:outline-none"
                            >
                              <div className="flex justify-between items-center">
                                <span className="text-lg font-medium">{item.title}</span>
                                <svg
                                  className={`w-5 h-5 transform transition-transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'
                                    }`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </div>
                            </button>
                            {activeIndex === index && (
                              <div className="p-4 text-white transition-all duration-300 ease-in-out" dangerouslySetInnerHTML={{ __html: item.content }}>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <img width={500} src="/img/apps-for-patients-img.svg" alt="best healthcare app development company" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className={styles.tabPane}>
                <div className='p-6'>
                  <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 text-left items-center">
                    <div className="">
                      {accordionData1.map((item, index) => (
                        <div key={index} className="border-b border-gray-200 my-3 bg-[#0E1F51] text-white rounded-[6px]">
                          <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full text-left px-4 py-3 focus:outline-none"
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-lg font-medium">{item.title}</span>
                              <svg
                                className={`w-5 h-5 transform transition-transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'
                                  }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </button>
                          {activeIndex === index && (
                            <div className="p-4 text-white transition-all duration-300 ease-in-out" dangerouslySetInnerHTML={{ __html: item.content }}>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div>
                      <img src="/img/apps-for-professionals-image.svg" alt="healthcare app development company usa" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className={styles.tabPane}>
                <div className='lg:p-6'>
                  <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 text-left items-center">
                    <div className="">
                      {accordionData2.map((item, index) => (
                        <div key={index} className="border-b border-gray-200 my-3 bg-[#0E1F51] text-white rounded-[6px]">
                          <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full text-left px-4 py-3 focus:outline-none"
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-lg font-medium">{item.title}</span>
                              <svg
                                className={`w-5 h-5 transform transition-transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'
                                  }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </button>
                          {activeIndex === index && (
                            <div className="p-4 text-white transition-all duration-300 ease-in-out" dangerouslySetInnerHTML={{ __html: item.content }}>

                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div>
                      <img width={500} src="/img/apps-for-healthcare-providers.svg" alt="healthcare app development company in India" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>



      </div>

    </section>


  );
};

export default Tabs;
