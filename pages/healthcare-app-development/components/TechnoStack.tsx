import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const IosApp = [
  { 
  alt: 'HIPAA ', 
  title: "HIPAA", 
  pera:"Our experts follow the Health Insurance Portability and Accountability Act (HIPAA) guidelines to ensure better security and safety of data. ", 
  url: "#", 
  num: "1" },
];
const AndroidApp = [
  {
  alt: 'HITECH ',
   title: "HITECH",
   pera:"We develop healthcare app development services compliant with the HITECH electronic health record (EHR) system to support your applications with the latest technology. ", 
   url: "#", 
   num: "1" },
  
];
const CrossApp = [
  { num: "1", 
   url: "#", 
   title: "FDA" ,
   pera:"We develop the mobile application development services, solutions, which adheres the guidelines and standards of FDA, and also approved by the Food app development and Drug Administration Authority.", 
  },
  
];
const Computing = [
  { num: "1", 
   url: "#", 
   title: "GDPR " ,
   pera:"We do mental healthcare app development following the GDPR rules and regulations. It ensures for secured messaging and encrypted file transfers.", 
  },
  
];
const InternetThings= [
  { num: "1", 
   url: "#", 
   title: "Internet of Things" ,
   pera:"You can find the opportunity to create fintech apps for integration of Internet of Things technology in fintech apps. We can use IoT in the best way to finance mobile applications to ensure seamless connectivity with different systems and devices that can help facilitate convenient and secure transactions.", 
  },
  
];
const RoboticProcess = [
  { num: "1", 
   url: "#", 
   title: "Robotic Process Automation" ,
   pera:"The most powerful technology we use in financial application development is Robotic Process Automation or RPA. It helps us cut down additional costs and improve business efficiency through smart automation solutions for repetitive tasks. Businesses can leverage RPA in fintech apps to improve productivity and focus on other important tasks.", 
  },
  
];

const BackendApp = [
  { img: "/svg/tech/mongodb-original.svg", alt: 'Mongodb', title: "mongodb", num: "1", url: "#" },
  { img: "/svg/tech/googlecloud-original.svg", alt: 'Googlecloud', title: "google Cloud", num: "2", url: "#" },
  { img: "/svg/tech/azure-original.svg", alt: 'Azure', title: "azure", num: "3", url: "#" },
  { img: "/svg/tech/nginx-original.svg", alt: 'Nginx', title: "nginx", num: "4", url: "#" },
  { img: "/images/python-stack-technology.webp", alt: 'Python', title: "Python", num: "5", url: "/python-development" },
  { img: "/svg/tech/mysql-original-wordmark.svg", alt: 'Mysql', title: "mysql", num: "6", url: "#" },
  { img: "/img/stackimg/rails.webp", alt: 'Rail', title: "Rails", num: "7", url: "#" },
  { img: "/img/stackimg/nodejs.svg", alt: 'Node js', title: "Node.js", num: "8", url: "/node-js-development" },
  { img: "/img/stackimg/ruby.webp", alt: 'Ruby', title: "Ruby", num: "8", url: "#" },
];
const Panelheader = [
  {
    num: "01",
    title: "Be Ready to Access Compliance Friendly Healthcare App Solutions",
    decs: "Before building the healthcare app solutions, the most imperative prerequisite is to follow the compliances. Comfygen knows about it, which is why we prioritize building mHealth apps following all the compliances; such as:  "
  },
];




export default function GuidSectionBlockchain() {
  const [tech, setTech] = useState(0);
  return (
    <section className='bg-[#fff]'>
      <div className=" space-y-2 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  py-16 ">
        {Panelheader.map((elem: any) => {
          const { title, decs } = elem;
          return (
            <div className="flex flex-col justify-center text-center  mx-auto ">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
                {title}
              </h2>
              <p className='text-base text-slate-800'>{decs}</p>
            </div>
          );
        })}
        <div className="xl:flex  items-start xl:space-x-16 xl:space-y-0 space-y-8 w-full py-10 px-8 rounded-2xl bg-[#BA68C8] relative ">
          <div className={`${styles.stepTab} flex flex-col items-center space-y-1 justify-start  r  p-6 w-full bg-[#fff] `}>
            <span
              onClick={() => setTech(tech === 0 ? 0 : 0)}
              className={ 
                tech === 0
                  ? "bg-blue-600 border border-white text-white px-6 py-2 text-1xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-[#BA68C8] text-white border border-rounded-600 px-6 py-2 text-1xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full "
              }
            >
            HIPAA 
            </span>
            <span
              onClick={() => setTech(tech === 1 ? 0 : 1)}
              className={
                tech === 1
                ? "bg-blue-600 border border-white text-white px-6 py-2 text-1xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                : "bg-[#BA68C8] text-white border border-rounded-600 px-6 py-2 text-1xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full "
              }
            >
           HITECH
            </span>
            <span
              onClick={() => setTech(tech === 2 ? 0 : 2)}
              className={
                tech === 2
                ? "bg-blue-600 border border-white text-white px-6 py-2 text-1xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-[#BA68C8] text-white border border-rounded-600 px-6 py-2 text-1xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full "
              }
            > FDA
            </span>
            <span
              onClick={() => setTech(tech === 3 ? 0 : 3)}
              className={
                tech === 3
                ? "bg-blue-600 border border-white text-white px-6 py-2 text-1xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-[#BA68C8] text-white border border-rounded-600 px-6 py-2 text-1xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full "
              }
            > GDPR
            </span>
            {/* <span
              onClick={() => setTech(tech === 4 ? 0 :4)}
              className={
                tech === 4
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-transparent text-white border border-white-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              }
            > Internet of Things
            </span>
            <span
              onClick={() => setTech(tech === 5 ? 0 : 5)}
              className={
                tech === 5
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-transparent text-white border border-white-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              }
            > Robotic Process Automation
            </span> */}
          </div>
          <div  className={`${styles.Tabafter} grid md:grid-cols-1 grid-cols-1 divide-x-1 md:gap-6 gap-4 relative capitalize xl:w-[100%] w-full bg-white p-4 `}>
            {tech === 0 ? (
              <>
                {IosApp.map((elem: any) => {
                  const { img, num, title, url,pera , bg } = elem;
                  return (
                    <Link href={url} passHref={true}>
                      <div
                        key={num}
                        className="flex flex-col justify-start items-start rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                      >
                        {/* <div className="h-100 w-100 font-semibold flex items-start justify-start ">
                          <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                        </div> */}
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            {title}
                          </h3>
                        </div>
                        <div>
                          <p className="text-sm text-black">
                            {pera}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            ) : null}

            {tech === 1 ? (
              <>
                {AndroidApp.map((elem: any) => {
                  const { img, title, num, url,pera, bg } = elem;
                  return (
                    <Link href={url} passHref={true}>
                      <div
                        key={num}
                        className="flex flex-col justify-start items-start rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                      >
                        {/* <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-start justify-start ">
                          <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                        </div> */}
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            {title}
                          </h3>
                        </div>
                        <div>
                          <p className="text-sm text-black">
                            {pera}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            ) : null}

            {tech === 2 ? (
              <>
                {CrossApp.map((elem: any) => {
                  const { img, num, title, bg,pera, url } = elem;
                  return (
                    <Link href={url} passHref={true}>
                      <div
                        key={num}
                        className="flex flex-col justify-start items-start rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                      >
                        {/* <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-start justify-start ">
                          <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                        </div> */}
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            {title}
                          </h3>
                        </div>
                        <div>
                          <p className="text-sm text-black">
                            {pera}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            ) : null}
          {tech === 3 ? (
              <>
                {Computing.map((elem: any) => {
                  const { img, num, title, bg,pera, url } = elem;
                  return (
                    <Link href={url} passHref={true}>
                      <div
                        key={num}
                        className="flex flex-col justify-start items-start rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                      >
                        {/* <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-start justify-start ">
                          <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                        </div> */}
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            {title}
                          </h3>
                        </div>
                        <div>
                          <p className="text-sm text-black">
                            {pera}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            ) : null}
            {tech === 4 ? (
              <>
                {InternetThings.map((elem: any) => {
                  const { img, num, title, bg,pera, url } = elem;
                  return (
                    <Link href={url} passHref={true}>
                      <div
                        key={num}
                        className="flex flex-col justify-start items-start rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                      >
                        {/* <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-start justify-start ">
                          <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                        </div> */}
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            {title}
                          </h3>
                        </div>
                        <div>
                          <p className="text-sm text-black">
                            {pera}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            ) : null}
            {tech === 5 ? (
              <>
                {RoboticProcess.map((elem: any) => {
                  const { img, num, title, bg,pera, url } = elem;
                  return (
                    <Link href={url} passHref={true}>
                      <div
                        key={num}
                        className="flex flex-col justify-start items-start rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                      >
                        {/* <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-start justify-start ">
                          <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                        </div> */}
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            {title}
                          </h3>
                        </div>
                        <div>
                          <p className="text-sm text-black">
                            {pera}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            ) : null}

          </div>
        </div>
      </div>
    </section>


  );
}
