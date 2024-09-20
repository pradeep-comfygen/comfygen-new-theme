import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from '../styles.module.css'
const bettinggames = [
  { num: "1", title: "Android Studio", bg: "#F45F391A"  },
  { num: "2", title: "Android SDK", bg: "#F45F391A"  },
  { num: "3", title: "XML", bg: "#F45F391A"  },
  { num: "4", title: " Kotline", bg: "#F45F391A"  },
  { num: "5", title: "Java", bg: "#F45F391A"  },
 
];
const fantasygames = [
  { num: "1", title: "XD", bg: "#F45F391A"  },
  { num: "2", title: "Photoshop", bg: "#F45F391A"  },
  { num: "3", title: "Illustrator", bg: "#F45F391A"  },
  { num: "4", title: " Figma", bg: "#F45F391A"  },
  { num: "5", title: "InVision", bg: "#F45F391A"  },
  { num: "6", title: "Zeplin", bg: "#F45F391A"  },
  { num: "7", title: "Sketch", bg: "#F45F391A"  },
];
const apigames = [
  { num: "1", title: "HTML/CSS3", bg: "#F45F391A"  },
  { num: "2", title: "MEAN", bg: "#F45F391A"  },
  { num: "3", title: "Vue.Js", bg: "#F45F391A"  },
  { num: "4", title: " Backbone.Js", bg: "#F45F391A"  },
  { num: "5", title: "Angular.Js", bg: "#F45F391A"  },
  { num: "6", title: "React.Js/React Native", bg: "#F45F391A"  },
  { num: "7", title: "Node.Js", bg: "#F45F391A"  },
  { num: "6", title: "Laravel", bg: "#F45F391A"  },
  { num: "7", title: "Codelgniter", bg: "#F45F391A"  },
];
const apigames1 = [
  { num: "1", title: "Firebase Realtime Database", bg: "#F45F391A"  },
  { num: "2", title: "Firestore", bg: "#F45F391A"  },
  { num: "3", title: "AWS Amplify", bg: "#F45F391A"  },
  { num: "4", title: "Room DB", bg: "#F45F391A"  },
  { num: "5", title: "Mongo DB", bg: "#F45F391A"  },
  { num: "6", title: "Microsoft SQL", bg: "#F45F391A"  },
  { num: "7", title: "Postgre SQL", bg: "#F45F391A"  },
];
const apigames2 = [
  { num: "1", title: "Chat Bot", bg: "#F45F391A"  },
  { num: "2", title: "Face Detection", bg: "#F45F391A"  },
  { num: "3", title: "Network Calling", bg: "#F45F391A"  },
  { num: "4", title: "Image Processing", bg: "#F45F391A"  },
  { num: "5", title: "Integrate Payment", bg: "#F45F391A"  },
  { num: "6", title: "InApp Purchase", bg: "#F45F391A"  },
  { num: "7", title: "Custom Views", bg: "#F45F391A"  },
  { num: "3", title: "Firebase", bg: "#F45F391A"  },
  { num: "4", title: "Firebase Chat", bg: "#F45F391A"  },
  { num: "5", title: "Socket", bg: "#F45F391A"  },
  { num: "6", title: "Databinding", bg: "#F45F391A"  },
  { num: "7", title: "Dependency", bg: "#F45F391A"  },
];
const apigames3 = [
  { num: "1", title: "Apple Pay", bg: "#F45F391A"  },
  { num: "2", title: "Google Pay", bg: "#F45F391A"  },
  { num: "3", title: "Stripe", bg: "#F45F391A"  },
  { num: "4", title: "PayPal", bg: "#F45F391A"  },
];
const apigames4 = [
  { num: "1", title: "Jira", bg: "#F45F391A"  },
  { num: "2", title: "Trello", bg: "#F45F391A"  },
  { num: "3", title: "Slack", bg: "#F45F391A"  },
];
const Panelheader = [
  {
    num: "01",
    title: "Technologies Involved in Healthcare App Development",
    decs: <p className="text-base  text-[#475569]">Comfygen provides cutting-edge healthcare app development services, solutions, where we embark our healthcare software development with best tech-stacks to make it globally approachable. Some technologies are right here to let our clients know where they are heading:</p>,
  },
];

export default function OurBestGame() {
  const [tech, setTech] = useState(0);
  return (
    <section className="py-20  bg-[#0B0E43]/90 bg-no-repeat bg-center bg-cover  " >
      <div className=" space-y-6 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 bg-white p-6 rounded-xl">
        {Panelheader.map((elem: any) => {
          const { title, decs, num } = elem;
          return (
            <div key={num} className="flex flex-col justify-center text-center  mx-auto">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
                {title}
              </h2>
              {decs}
            </div>
          );
        })}
        <div  className={`${styles.TabSecmain} items-center `}>
          <div  className={`${styles.TabSecmaindd} flex items-center  justify-center   rounded  gap-3  `}>
            <span
              onClick={() => setTech(tech === 0 ? 0 : 0)}
              className={
                tech === 0 
                  ? "bg-blue-600 border border-blue-600 text-white font-bold px-6 py-2 text-sm rounded-full capitalize cursor-pointer  w-full"
                  : "bg-transparent  text-[#000] font-bold border border-[#B961BE] px-6 py-2 text-sm rounded-full capitalize cursor-pointer  w-full"
              }
            >
             Technologies
            </span>
            <span
              onClick={() => setTech(tech === 1 ? 0 : 1)}
              className={
                tech === 1
                ? "bg-blue-600 border border-blue-600 text-white font-bold px-6 py-2 text-sm rounded-full capitalize cursor-pointer xl:w-80 w-full"
                : "bg-transparent  text-[#000] font-bold border border-[#B961BE] px-6 py-2 text-sm rounded-full capitalize cursor-pointer xl:w-80 w-full"
              }
            >
              UI/UX
            </span>
            <span
              onClick={() => setTech(tech === 2 ? 0 : 2)}
              className={
                tech === 2
                ? "bg-blue-600 border border-blue-600 text-white font-bold px-6 py-2 text-sm rounded-full capitalize cursor-pointer xl:w-80 w-full"
                : "bg-transparent  text-[#000] font-bold border border-[#B961BE] px-6 py-2 text-sm rounded-full capitalize cursor-pointer xl:w-80 w-full"
              }
            >  WEB/Frontend
            </span>
            <span
              onClick={() => setTech(tech === 3 ? 0 : 3)}
              className={
                tech === 3
                ? "bg-blue-600 border border-blue-600 text-white font-bold px-6 py-2 text-sm rounded-full capitalize cursor-pointer xl:w-80 w-full"
                : "bg-transparent  text-[#000] font-bold border border-[#B961BE] px-6 py-2 text-sm rounded-full capitalize cursor-pointer xl:w-80 w-full"
              }
            >  Backend 
            </span>
            <span
              onClick={() => setTech(tech === 4 ? 0 : 4)}
              className={
                tech === 4
                ? "bg-blue-600 border border-blue-600 text-white font-bold px-6 py-2 text-sm rounded-full capitalize cursor-pointer xl:w-80 w-full"
                : "bg-transparent  text-[#000] font-bold border border-[#B961BE] px-6 py-2 text-sm rounded-full capitalize cursor-pointer xl:w-80 w-full"
              }
            >  <p className={`${styles.TabSec}`}>3rd PartyLibraries</p>
            </span>
            <span
              onClick={() => setTech(tech === 5 ? 0 : 5)}
              className={
                tech === 5
                ? "bg-blue-600 border border-blue-600 text-white font-bold px-6 py-2 text-sm rounded-full capitalize cursor-pointer xl:w-80 w-full"
                : "bg-transparent  text-[#000] font-bold border border-[#B961BE] px-6 py-2 text-sm rounded-full capitalize cursor-pointer xl:w-80 w-full"
              }
            > 
            <p className={`${styles.TabSec}`}>Payment Gateway</p>
            </span>
            <span
              onClick={() => setTech(tech === 6 ? 0 : 6)}
              className={
                tech === 6
                ? "bg-blue-600 border border-blue-600 text-white font-bold px-6 py-2 text-sm rounded-full capitalize cursor-pointer xl:w-80 w-full"
                : "bg-transparent  text-[#000] font-bold border border-[#B961BE] px-6 py-2 text-sm rounded-full capitalize cursor-pointer xl:w-80 w-full"
              }
            > 
           <p className={`${styles.TabSec}`}>PM Tools</p>  
            </span>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-3 divide-x-1 md:gap-6 gap-4 relative capitalize xl:w-[100%] w-full mt-5 mb-5">
            {tech === 0 ? (
              <>
                {bettinggames.map((elem: any) => {
                  const { img, num, title, url } = elem;
                  return (  
                      <div key={num}
                        className="flex items-center justify-center p-4 space-x-2 rounded-lg border-2 border-dashed border-[#121212]" style={{ backgroundColor: elem.bg }}>
                        {/* <div className="flex items-center justify-center ">
                          <Image src={img} alt={title} width="40" height="40" />
                        </div> */}
                        <h3 className="text-base font-bold text-black">
                          {title}
                        </h3>
                      </div>
                  );
                })}
              </>
            ) : null}
            {tech === 1 ? (
              <>
                {fantasygames.map((elem: any) => {
                  const { img, title, num, url } = elem;
                  return (         
                      <div key={num}
                        className="flex items-center justify-center p-4 space-x-2 rounded-lg border-2 border-dashed border-[#121212]" style={{ backgroundColor: elem.bg }}>
                        {/* <div className="flex items-center justify-center ">
                          <Image src={img} alt={title} width="40" height="40" />
                        </div> */}
                        <h3 className="text-base font-bold text-black">
                          {title}
                        </h3>
                      </div>
                  );
                })}
              </>
            ) : null}
            {tech === 2 ? (
              <>
                {apigames.map((elem: any) => {
                  const {  num, title, url } = elem;
                  return (                  
                      <div key={num}
                        className="flex items-center  p-4 space-x-2 rounded-lg border-2 border-dashed border-[#121212]" style={{ backgroundColor: elem.bg }}>
                        {/* <div className="flex items-center justify-center ">
                          <Image src={img} alt={title} width="40" height="40" />
                        </div> */}
                        <h3 className="text-base font-bold text-black">
                          {title}
                        </h3>
                      </div>                
                  );
                })}
              </>
            ) : null}
              {tech === 3 ? (
              <>
                {apigames1.map((elem: any) => {
                  const {  num, title, url } = elem;
                  return (
                      <div key={num}
                        className="flex items-center  p-4 space-x-2 rounded-lg border-2 border-dashed border-[#121212]" style={{ backgroundColor: elem.bg }}>
                        {/* <div className="flex items-center justify-center ">
                          <Image src={img} alt={title} width="40" height="40" />
                        </div> */}
                        <h3 className="text-base font-bold text-black">
                          {title}
                        </h3>
                      </div>              
                  );
                })}
              </>
            ) : null}
              {tech === 4 ? (
              <>
                {apigames2.map((elem: any) => {
                  const {  num, title, url } = elem;
                  return (                    
                      <div key={num}
                        className="flex items-center  p-4 space-x-2 rounded-lg border-2 border-dashed border-[#121212]" style={{ backgroundColor: elem.bg }}>
                        {/* <div className="flex items-center justify-center ">
                          <Image src={img} alt={title} width="40" height="40" />
                        </div> */}
                        <h3 className="text-base font-bold text-black">
                          {title}
                        </h3>
                      </div>
                  
                  );
                })}
              </>
            ) : null}
              {tech === 5 ? (
              <>
                {apigames3.map((elem: any) => {
                  const {  num, title, url } = elem;
                  return (                  
                      <div key={num}
                        className="flex items-center  p-4 space-x-2 rounded-lg border-2 border-dashed border-[#121212]" style={{ backgroundColor: elem.bg }}>
                        {/* <div className="flex items-center justify-center ">
                          <Image src={img} alt={title} width="40" height="40" />
                        </div> */}
                        <h3 className="text-base font-bold text-black">
                          {title}
                        </h3>
                      </div>              
                  );
                })}
              </>
            ) : null}
              {tech === 6 ? (
              <>
                {apigames4.map((elem: any) => {
                  const {  num, title, url } = elem;
                  return (
                      <div key={num}
                        className="flex items-center  p-4 space-x-2 rounded-lg border-2 border-dashed border-[#121212]" style={{ backgroundColor: elem.bg }}>
                        {/* <div className="flex items-center justify-center ">
                          <Image src={img} alt={title} width="40" height="40" />
                        </div> */}
                        <h3 className="text-base font-bold text-black">
                          {title}
                        </h3>
                      </div>
                  );
                })}
              </>
            ) : null}
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 ">
          <a href="/contact-us" >
            <button className="shadow-2xl mt-5 inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
            Connect with Experts
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
