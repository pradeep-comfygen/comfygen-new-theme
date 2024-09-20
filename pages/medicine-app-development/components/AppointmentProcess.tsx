import React, { useState } from "react";
import Image from "next/image";
import styles from '../styles.module.css'
import Link from "next/link";

export default function AppointmentProcess() {
  return (
    <>
      <section className="bg-start bg-cover  bg-fixed   " style={{ backgroundImage: `url("/img/doctor-booking-app-development-process.webp")` }} >
        <div className="bg-[#120933]/90">
          <div className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12  mx-auto">
            <div className="flex flex-col justify-center lg:text-center">
              <h2 className="py-4 text-[#fff] xl:text-4xl text-3xl  w-70 font-bold xl:leading-[3rem]">
              Our Medicine App Development Process</h2>
              <p className='text-base text-white  '>Our comprehensive medicine app development process allows us to deliver maximum value for your organization. We take an extremely thorough approach, applying our healthcare expertise to ensure the highest quality and security standards at every stage.</p>
            </div>
            {/* <div className="grid gap-10  py-10 text-left lg:grid-cols-1  xl:gap-8">
              <div className={`${styles.Roadmapcontainer}`}>
                <div className={`${styles.timelineblock} ${styles.timelineblockright}`}>
                  <div className={`${styles.marker}`} ></div>
                  <div className={`${styles.timelinecontent}`}>
                    <h3>Plan the Project</h3>
                    <p>Planning is key for app success. We learn about your users and company. We research user needs and challenges, check out competitors, and gather detailed requirements. Our experts make a UX/UI plan. Finally, we organize the project.</p>
                    <h4 className="text-base font-semibold mt-1">What you get:</h4>
                    <ul className="list-disc	px-6">
                      <li>Validated idea with research</li>
                      <li>Custom features</li>
                      <li>UX strategy</li>
                      <li>Detailed plans and docs</li>
                    </ul>
                  </div>
                </div>
                <div className={`${styles.timelineblock} ${styles.timelineblockleft}`}>
                  <div className={`${styles.marker}`}></div>
                  <div className={`${styles.timelinecontent}`}>
                    <h3>Design Intuitive UX/UI</h3>
                    <p>Our UX experts design easy interactions and interfaces. We map user paths. We organize the app structure logically. We make simple wireframe layouts. Then, designers create beautiful screens with your branding.</p>
                    <h4 className="text-base font-semibold mt-1">What you get</h4>
                    <ul className="list-disc	px-6">
                      <li>Smooth UX focused on simplicity</li>
                      <li>Beautiful visuals</li>
                    </ul>
                  </div>
                </div>
                <div className={`${styles.timelineblock} ${styles.timelineblockright}`}>
                  <div className={`${styles.marker}`} ></div>
                  <div className={`${styles.timelinecontent}`}>
                    <h3>Develop Robust Front and Back Ends</h3>
                    <p>Our engineers build a strong, flexible app foundation. We code intuitive interfaces for the web, iOS, and Android. We develop secure cloud servers and databases. We enable seamless data integration. </p>
                    <h4 className="text-base font-semibold mt-1">What you get</h4>
                    <ul className="list-disc	px-6">
                      <li>Enterprise-level software that can expand as needed</li>

                    </ul>
                  </div>
                </div>
                <div className={`${styles.timelineblock} ${styles.timelineblockleft}`}>
                  <div className={`${styles.marker}`}></div>
                  <div className={`${styles.timelinecontent}`}>
                    <h3>Integrate with Healthcare Systems</h3>
                    <p>We connect your app with existing systems. Our engineers build APIs for data sharing. We integrate with EHRs, management software, and more. We enable user provisioning linked to healthcare directories.</p>
                    <h4 className="text-base font-semibold mt-1">What you get:</h4>
                    <ul className="list-disc	px-6">
                      <li>Unified digital environment</li>
                      <li>Your app at the center of workflows</li>
                    </ul>
                  </div>
                </div>
                <div className={`${styles.timelineblock} ${styles.timelineblockright}`}>
                  <div className={`${styles.marker}`} ></div>
                  <div className={`${styles.timelinecontent}`}>
                    <h3>Test Your Medicine Application</h3>
                    <p>We thoroughly test your app before release. Developers create automated tests. We do user acceptance testing with patients and providers. Security auditors check for vulnerabilities. We confirm compliance with regulations like HIPAA.</p>
                    <h4 className="text-base font-semibold mt-1">What you get:</h4>
                    <ul className="list-disc	px-6">
                      <li>Thoroughly validated app</li>
                      <li>HIPAA-compliant and ready-for-use</li>
                    </ul>
                  </div>
                </div>
                <div className={`${styles.timelineblock} ${styles.timelineblockleft}`}>
                  <div className={`${styles.marker}`}></div>
                  <div className={`${styles.timelinecontent}`}>
                    <h3>Deploy the Application</h3>
                    <p>After approval, we help deploy the app. We assist with cloud setup and security. We create help docs and train staff. We continue improving performance and expanding capabilities post-launch.</p>
                    <h4 className="text-base font-semibold mt-1">What you get:</h4>
                    <ul className="list-disc	px-6">
                      <li>Successfully deployed app</li>
                      <li>Engaged users leveraging the new tools</li>
                    </ul>
                  </div>
                </div>
                <div className={`${styles.timelineblock} ${styles.timelineblockright}`}>
                  <div className={`${styles.marker}`} ></div>
                  <div className={`${styles.timelinecontent}`}>
                    <h3>Provide Ongoing Support</h3>
                    <p>We build long-term client partnerships, provide ongoing enhancements and support, expand capabilities quarterly, immediately resolve bugs or issues, and help upgrade systems to stay on top of the latest technology.</p>
                    <h4 className="text-base font-semibold mt-1">What you get:</h4>
                    <ul className="list-disc	px-6">
                      <li>Future-proof solutions</li>
                      <li>Continuous improvements to meet changing healthcare needs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="grid gap-10  py-10 text-left lg:grid-cols-1  xl:gap-8">
              <div className="col-md-12">
                <div className={`${styles.Yearlytimeline}`}>
                  <div className={`${styles.timeline}`}>
                    <a href="" className={`${styles.timelinecontent}`}>
                      <div className={`${styles.timelineicon}`}><i className="fa fa-instagram"></i></div>
                      <h3 className={`${styles.title} text-black text-4xl font-bold`   } >Plan the Project</h3>
                      <p className={`${styles.description} text-black text-start`}>
                      Planning is key for app success. We learn about your users and company. We research user needs and challenges, check out competitors, and gather detailed requirements. Our experts make a <a className="text-blue-500" href="/web-design">UX/UI development</a>  plan. Finally, we organize the project.
                      </p>
                      <h4 className="text-base font-semibold mt-1">What you get:</h4>
                      <ul className="list-disc	px-6">
                        <li>Validated idea with research</li>
                        <li>Custom features</li>
                        <li>UX strategy</li>
                        <li>Detailed plans and docs</li>
                      </ul>
                    </a>
                  </div>

                  <div className={`${styles.timeline}`}>
                    <a href="" className={`${styles.timelinecontent}`}>
                      <div className={`${styles.timelineicon}`}><i className="fa fa-instagram"></i></div>
                      <h3 className={`${styles.title}`}>Design Intuitive UX/UI</h3>
                      <p className={`${styles.description} text-black text-start`}>
                      Our UX experts design easy interactions and interfaces. We map user paths. We organize the app structure logically. We make simple wireframe layouts. Then, designers create beautiful screens with your branding.
                      </p>
                      <ul className="list-disc	px-6">
                        <li>Smooth UX focused on simplicity</li>
                        <li>Beautiful visuals</li>
                      </ul>
                    </a>
                  </div>
                  <div className={`${styles.timeline}`}>
                    <a href="" className={`${styles.timelinecontent}`}>
                      <div className={`${styles.timelineicon}`}><i className="fa fa-instagram"></i></div>
                      <h3 className={`${styles.title}`}>Develop Robust Front and Back Ends</h3>
                      <p className={`${styles.description} text-black text-start`}>
                      Our engineers build a strong, flexible app foundation. We code intuitive interfaces for web development, <a className="text-blue-500" href="/ios-app-development">iOS app development</a> , and  <a className="text-blue-500" href="/android-app-development">Android app development</a> . We develop secure cloud servers and databases. We enable seamless data integration.
                      </p>
                      <h4 className="text-base font-semibold mt-1">What you get:</h4>
                      <ul className="list-disc	px-6">
                      <li>Enterprise-level software that can expand as needed</li>
                    </ul>
                    </a>
                  </div>
                  <div className={`${styles.timeline}`}>
                    <a href="" className={`${styles.timelinecontent}`}>
                      <div className={`${styles.timelineicon}`}><i className="fa fa-instagram"></i></div>
                      <h3 className={`${styles.title}`}>Integrate with Healthcare Systems</h3>
                      <p className={`${styles.description} text-black text-start`}>
                      We connect your app with existing systems. Our engineers build APIs for data sharing. We integrate with EHRs, management software, and more. We enable user provisioning linked to healthcare directories.</p>
                      <h4 className="text-base font-semibold mt-1">What you get:</h4>
                      <ul className="list-disc	px-6">
                      <li>Unified digital environment</li>
                      <li>Your app at the center of workflows</li>
                    </ul>
                    </a>
                  </div>

                  <div className={`${styles.timeline}`}>
                    <a href="" className={`${styles.timelinecontent}`}>
                      <div className={`${styles.timelineicon}`}><i className="fa fa-instagram"></i></div>
                      <h3 className={`${styles.title}`}>Test Your Medicine Application</h3>
                      <p className={`${styles.description} text-black text-start`}>
                      We thoroughly test your app before release. Developers create automated tests. We do user acceptance testing with patients and providers. Security auditors check for vulnerabilities. We confirm compliance with regulations like HIPAA.</p>
                      <h4 className="text-base font-semibold mt-1">What you get:</h4>
                      <ul className="list-disc	px-6">
                      <li>Thoroughly validated app</li>
                      <li>HIPAA-compliant and ready-for-use</li>
                    </ul>
                    </a>
                  </div>

                  <div className={`${styles.timeline}`}>
                    <a href="" className={`${styles.timelinecontent}`}>
                      <div className={`${styles.timelineicon}`}><i className="fa fa-instagram"></i></div>
                      <h3 className={`${styles.title}`}> Deploy the Application</h3>
                      <p className={`${styles.description} text-black text-start`}>
                      After approval, we help deploy the app. We assist with cloud setup and security. We create help docs and train staff. We continue improving performance and expanding capabilities post-launch. </p>
                      <h4 className="text-base font-semibold mt-1">What you get:</h4>
                      <ul className="list-disc	px-6">
                      <li>Successfully deployed app</li>
                      <li>Engaged users leveraging the new tools</li>
                    </ul>
                    </a>
                  </div>
                  <div className={`${styles.timeline}`}>
                    <a href="" className={`${styles.timelinecontent}`}>
                      <div className={`${styles.timelineicon}`}><i className="fa fa-instagram"></i></div>
                      <h3 className={`${styles.title}`}>Provide Ongoing Support</h3>
                      <p className={`${styles.description} text-black text-start`}>
                      We build long-term client partnerships, provide ongoing enhancements and support, expand capabilities quarterly, immediately resolve bugs or issues, and help upgrade systems to stay on top of the latest technology.
                      </p>
                    <h4 className="text-base font-semibold mt-1">What you get:</h4>
                    <ul className="list-disc	px-6">
                      <li>Future-proof solutions</li>
                      <li>Continuous improvements to meet changing healthcare needs</li>
                    </ul>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <a href='/contact-us' >
                <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  Let's Communicate With IT Expert!
                </button>
              </a>
            </div>
          </div >
        </div>

      </section>
    </>
  );
}