import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const ZocDoc = [
  {
    alt: 'Apps Like ZocDoc',
    url: "#",
    img: "/img/zocdoc.webp",
    title: "Apps Like ZocDoc",
    decs: "We can build reliable and seamless doctor appointment app development services, solutions for you, just apps like ZocDoc. The application will revolutionize the meet-ups between doctors and patients in a few clicks. The doctor appointment application development accommodates hundreds and more best doctors’ profiles, and the patients have numerous options to find one of the best  consultants to resolve and treat their problems.",
  },
];
const DoctorPlus = [
  {
    alt: 'Apps Like Doctor Plus',
    url: "#",
    img: "/img/doc-plus.webp",
    title: "Apps Like Doctor Plus ",
    decs: "We can build a groundbreaking healthcare app like Doctor Plus, which is going to transform healthcare work processes. On-demand doctor booking appointment app developed by our expert developers will ease the appointment task much conveniently. Most importantly, we will also make the application advanced with some extra unique and innovative custom features.",
  },
];
const Lybrat = [
  {
    alt: 'App Like Lybrate',
    url: "#",
    img: "/img/lybrate.webp",
    title: "App Like Lybrate ",
    decs: "Lybrate helps doctors find prescriptions, billings, documents, and other information because this app keeps all the records in one place. Also, the app enables you to schedule appointments as well. The mobile developers at Comfygen can build similar apps like Lybrate with some advanced features and innovative ideas to grasp more engagement. ",
  },
];
const mFine = [
  {
    alt: 'Apps like mFine',
    url: "#",
    img: "/img/mfine.webp",
    title: "Apps like mFine ",
    decs: "mFine is another app for online doctor consultation. It is a complete package solution, where the patients can book for lab tests, health packages, skincare, care programs, scans & X-Rays, and more. We can build similar apps with better engagement possible for businesses to stand against the competition. ",
  },
];
const MyCure = [
  {
    alt: 'Apps Like MyCure',
    url: "#",
    img: "/img/apps-like-mycure.webp",
    title: "Apps Like MyCure",
    decs: "It’s an enterprise-level healthcare solution that works online and offline both. It has occupied multi-speciality clinics, healthcare centres, diagnostics, etc. This is a large-scale healthcare management solution app; which our developers can create by adding some custom features for better attractions.",
  },
];
const Bookmed = [
  {
    alt: 'Apps Like Bookmed',
    url: "#",
    img: "/img/apps-like-bookmed.webp",
    title: "Apps Like Bookmed",
    decs: "Bookmed is one prominent doctor appointment application with seamless navigations and streamlined functioning. You can select the city, choose the speciality, and make virtual appointments if required. Our healthcare developers can create such applications and even engage patients with simpler and smooth navigational and operational features. ",
  },
];

const MG = [
  {
    alt: 'Apps Like 1MG',
    url: "#",
    img: "/img/apps-like-1MG.webp",
    title: "Apps Like 1MG",
    decs: "1MG is a huge healthcare solution, where the users can choose to consult with doctors, purchase pharmaceuticals, try ayurveda, treat severe medical health problems, and more. This application is a complete solution, and we have the potential to build apps like 1MG. Our developers are proficient to add different services, features, and functions into the app to make it more competitive and market friendly. ",
  },
];
const HealthTap = [
  {
    alt: 'Apps Like HealthTap',
    url: "#",
    img: "/img/apps-like-healthtap.webp",
    title: "Apps Like HealthTap",
    decs: "It is a virtual primary care solution. You can choose the doctor based on his speciality and get treated for different medical conditions; such as children’s health, mental & behavioural issues, elder citizens medical concerns, sexual healthcare, and more. This application has raised approx. $37.85M. Our developers can build such competitive apps to grow your business quicker. ",
  },
];
const Practo = [
  {
    alt: 'Apps Like Practo',
    url: "#",
    img: "/img/apps-like-healthtap.webp",
    title: "Apps Like Practo",
    decs: "Within ten years of its establishment, Practo has become a one-stop solution for health-related services and hospitality. This application is now demanded by 15 countries. Do you want a similar kinda application to build? Well, we have experienced healthcare developers to create next-gen healthcare app development solutions and doctor appointment mobile apps to engage a vast audience.",
  },
];




const Panelheader = [
  {
    num: "01",
    title: <h2 className='py-4 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize'> White Label Doctor Appointment App Development Like </h2>,
    decs: "Get instant medical attention from the expert doctors through our efficient White label doctor booking app development like are discussed in below. Our Mobile applications offer personalised Demand Doctor Appointment App Development Services and Solutions, fulfil certain needs, and also provide quick consultations to patients. ",
    decs1: "Experience the convenient and customised healthcare app development solutions and fix the medical appointment app development services through our app development solution."
  },
];



export default function GuidSectionBlockchain() {
  const [tech, setTech] = useState(0);
  return (
    <section className='py-10 bg-[#223547]'>
      <div className=" space-y-2 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
        {Panelheader.map((elem: any) => {
          const { title, decs, decs1 } = elem;
          return (
            <div className="flex flex-col justify-center text-center  mx-auto">
              {title}
              <p className='text-white'>{decs}</p>
              <p className='text-white'>{decs1}</p>
            </div>
          );
        })}
        <div className="xl:flex  items-start xl:space-x-16 xl:space-y-0 space-y-8 w-full py-10">
          <div className={`${styles.scroll} flex flex-col items-start space-y-10  justify-start xl:w-[40%] bg-[#72ABDA] p-8  rounded-xl w-full min-h-[370px] max-h-[370px] overflow-scroll overflow-x-hidden `}>
            <span
              onClick={() => setTech(tech === 0 ? 0 : 0)}
              className={
                tech === 0
                  ? "bg-white border border-blue-600 text-[#223547] px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-transparent  text-white border border-white-600 px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              }
            >
              Apps Like ZocDoc
            </span>
            <span
              onClick={() => setTech(tech === 1 ? 0 : 1)}
              className={
                tech === 1
                  ? "bg-white border border-blue-600 text-[#223547] px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-transparent  text-white border border-white-600 px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              }
            >
              Apps Like Doctor Plus
            </span>
            <span
              onClick={() => setTech(tech === 2 ? 0 : 2)}
              className={
                tech === 2
                  ? "bg-white border border-blue-600 text-[#223547] px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-transparent  text-white border border-white-600 px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              }
            > App Like Lybrate
            </span>
            <span
              onClick={() => setTech(tech === 3 ? 0 : 3)}
              className={
                tech === 3
                  ? "bg-white border border-blue-600 text-[#223547] px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-transparent  text-white border border-white-600 px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              }
            > Apps like mFine
            </span>

            <span
              onClick={() => setTech(tech === 4 ? 0 : 4)}
              className={
                tech === 4
                  ? "bg-white border border-blue-600 text-[#223547] px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-transparent  text-white border border-white-600 px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              }
            > Apps Like MyCure
            </span>

            <span
              onClick={() => setTech(tech === 5 ? 0 : 5)}
              className={
                tech === 5
                  ? "bg-white border border-blue-600 text-[#223547] px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-transparent  text-white border border-white-600 px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              }
            > Apps Like Bookmed
            </span>

            <span
              onClick={() => setTech(tech === 6 ? 0 : 6)}
              className={
                tech === 6
                  ? "bg-white border border-blue-600 text-[#223547] px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-transparent  text-white border border-white-600 px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              }
            > Apps Like 1MG
            </span>


            <span
              onClick={() => setTech(tech === 7 ? 0 : 7)}
              className={
                tech === 7
                  ? "bg-white border border-blue-600 text-[#223547] px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-transparent  text-white border border-white-600 px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              }
            > Apps Like HealthTap
            </span>

            <span
              onClick={() => setTech(tech === 8 ? 0 : 8)}
              className={
                tech === 8
                  ? "bg-white border border-blue-600 text-[#223547] px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-transparent  text-white border border-white-600 px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              }
            > Apps Like Practo
            </span>

          </div>
          <div className="grid md:grid-cols-1 grid-cols-1 divide-x-1 md:gap-6 gap-4 relative capitalize xl:w-[60%] w-full">
            {tech === 0 ? (
              <>
                {ZocDoc.map((elem: any) => {
                  const { img, num, title, decs, url, bg } = elem;
                  return (
                    <Link href={url} passHref={true}>
                      <div

                        key={num} className={`${styles.TabItem} flex flex-col  p-10 rounded-lg bg-white  space-y-3   hover:shadow-lg transition-all duration-200 cursor-pointer group border`}>
                        <div className=" bg-white font-semibold flex items-start justify-start  ">
                          <Image src={img} alt={title} width={60} height={60} className=" group-hover:scale-105 transition-all duration-200 transform flex justify-start " />
                        </div>
                        <div>
                          <h3 className="text-3xl font-semibold text-black">
                            {title}
                          </h3>
                          <p className='text-lg text-black mt-3'>{decs}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            ) : null}

            {tech === 1 ? (
              <>
                {DoctorPlus.map((elem: any) => {
                  const { img, num, title, decs, url, bg } = elem;
                  return (
                    <Link href={url} passHref={true}>
                      <div

                        key={num} className={`${styles.TabItem} flex flex-col  p-10 rounded-lg bg-white  space-y-3   hover:shadow-lg transition-all duration-200 cursor-pointer group border`}>
                        <div className=" bg-white font-semibold flex items-start justify-start  ">
                          <Image src={img} alt={title} width={60} height={60} className=" group-hover:scale-105 transition-all duration-200 transform flex justify-start " />
                        </div>
                        <div>
                          <h3 className="text-3xl font-semibold text-black">
                            {title}
                          </h3>
                          <p className='text-lg text-black mt-3'>{decs}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            ) : null}

            {tech === 2 ? (
              <>
                {Lybrat.map((elem: any) => {
                  const { img, num, title, decs, url, bg } = elem;
                  return (
                    <Link href={url} passHref={true}>
                      <div

                        key={num} className={`${styles.TabItem} flex flex-col  p-10 rounded-lg bg-white  space-y-3   hover:shadow-lg transition-all duration-200 cursor-pointer group border`}>
                        <div className=" bg-white font-semibold flex items-start justify-start  ">
                          <Image src={img} alt={title} width={60} height={60} className=" group-hover:scale-105 transition-all duration-200 transform flex justify-start " />
                        </div>
                        <div>
                          <h3 className="text-3xl font-semibold text-black">
                            {title}
                          </h3>
                          <p className='text-lg text-black mt-3'>{decs}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            ) : null}
            {tech === 3 ? (
              <>
                {mFine.map((elem: any) => {
                  const { img, num, title, decs, url, bg } = elem;
                  return (
                    <Link href={url} passHref={true}>
                      <div

                        key={num} className={`${styles.TabItem} flex flex-col  p-10 rounded-lg bg-white  space-y-3   hover:shadow-lg transition-all duration-200 cursor-pointer group border`}>
                        <div className=" bg-white font-semibold flex items-start justify-start  ">
                          <Image src={img} alt={title} width={60} height={60} className=" group-hover:scale-105 transition-all duration-200 transform flex justify-start " />
                        </div>
                        <div>
                          <h3 className="text-3xl font-semibold text-black">
                            {title}
                          </h3>
                          <p className='text-lg text-black mt-3'>{decs}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            ) : null}

            {tech === 4 ? (
              <>
                {MyCure.map((elem: any) => {
                  const { img, num, title, decs, url, bg } = elem;
                  return (
                    <Link href={url} passHref={true}>
                      <div
                        key={num} className={`${styles.TabItem} flex flex-col  p-10 rounded-lg bg-white  space-y-3   hover:shadow-lg transition-all duration-200 cursor-pointer group border`}>
                        <div className=" bg-white font-semibold flex items-start justify-start  ">
                          <Image src={img} alt={title} width={60} height={60} className=" group-hover:scale-105 transition-all duration-200 transform flex justify-start " />
                        </div>
                        <div>
                          <h3 className="text-3xl font-semibold text-black">
                            {title}
                          </h3>
                          <p className='text-lg text-black mt-3'>{decs}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            ) : null}

            {tech === 5 ? (
              <>
                {Bookmed.map((elem: any) => {
                  const { img, num, title, decs, url, bg } = elem;
                  return (
                    <Link href={url} passHref={true}>
                      <div
                        key={num} className={`${styles.TabItem} flex flex-col  p-10 rounded-lg bg-white  space-y-3   hover:shadow-lg transition-all duration-200 cursor-pointer group border`}>
                        <div className=" bg-white font-semibold flex items-start justify-start  ">
                          <Image src={img} alt={title} width={60} height={60} className=" group-hover:scale-105 transition-all duration-200 transform flex justify-start " />
                        </div>
                        <div>
                          <h3 className="text-3xl font-semibold text-black">
                            {title}
                          </h3>
                          <p className='text-lg text-black mt-3'>{decs}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            ) : null}

            {tech === 6 ? (
              <>
                {MG.map((elem: any) => {
                  const { img, num, title, decs, url, bg } = elem;
                  return (
                    <Link href={url} passHref={true}>
                      <div
                        key={num} className={`${styles.TabItem} flex flex-col  p-10 rounded-lg bg-white  space-y-3   hover:shadow-lg transition-all duration-200 cursor-pointer group border`}>
                        <div className=" bg-white font-semibold flex items-start justify-start  ">
                          <Image src={img} alt={title} width={60} height={60} className=" group-hover:scale-105 transition-all duration-200 transform flex justify-start " />
                        </div>
                        <div>
                          <h3 className="text-3xl font-semibold text-black">
                            {title}
                          </h3>
                          <p className='text-lg text-black mt-3'>{decs}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            ) : null}

            {tech === 7 ? (
              <>
                {HealthTap.map((elem: any) => {
                  const { img, num, title, decs, url, bg } = elem;
                  return (
                    <Link href={url} passHref={true}>
                      <div
                        key={num} className={`${styles.TabItem} flex flex-col  p-10 rounded-lg bg-white  space-y-3   hover:shadow-lg transition-all duration-200 cursor-pointer group border`}>
                        <div className=" bg-white font-semibold flex items-start justify-start  ">
                          <Image src={img} alt={title} width={60} height={60} className=" group-hover:scale-105 transition-all duration-200 transform flex justify-start " />
                        </div>
                        <div>
                          <h3 className="text-3xl font-semibold text-black">
                            {title}
                          </h3>
                          <p className='text-lg text-black mt-3'>{decs}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            ) : null}

            {tech === 8 ? (
              <>
                {Practo.map((elem: any) => {
                  const { img, num, title, decs, url, bg } = elem;
                  return (
                    <Link href={url} passHref={true}>
                      <div
                        key={num} className={`${styles.TabItem} flex flex-col  p-10 rounded-lg bg-white  space-y-3   hover:shadow-lg transition-all duration-200 cursor-pointer group border`}>
                        <div className=" bg-white font-semibold flex items-start justify-start  ">
                          <Image src={img} alt={title} width={60} height={60} className=" group-hover:scale-105 transition-all duration-200 transform flex justify-start " />
                        </div>
                        <div>
                          <h3 className="text-3xl font-semibold text-black">
                            {title}
                          </h3>
                          <p className='text-lg text-black mt-3'>{decs}</p>
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
