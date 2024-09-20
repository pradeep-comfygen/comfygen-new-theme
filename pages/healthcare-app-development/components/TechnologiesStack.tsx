import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const BlockchainStack = [
  { img: "/img/android-studio.webp", alt: 'Android Studio', title: "Android Studio", url: "#", num: "1" },
  { img: "/img/android-sdk-icon.webp", alt: 'Android SDK', title: "Android SDK", url: "#", num: "2" },
  { img: "/img/xml-icon.webp", alt: 'XML', title: "XML", url: "#", num: "3" },
  { img: "/img/kotlin-icon.webp", alt: 'Kotline', title: "Kotline", url: "#", num: "4" },
  { img: "/img/java-icon.webp", alt: 'Java', title: "Java", url: "#", num: "5", },

];
const FrontendStack = [
  { img: "/img/adobe-xd-icon.webp", alt: 'XD', title: "XD", url: "#", num: "1" },
  { img: "/img/photoshop.webp", alt: 'Photoshop', title: "Photoshop", url: "#", num: "2" },
  { img: "/img/Illustrator-icon.webp", alt: 'Illustrator', title: "Illustrator", url: "/next-js-development", num: "3" },
  { img: "/img/figma-icon.webp", alt: 'Figma', title: "Figma", url: "#", num: "4" },
  { img: "/img/InVision-icon.webp", alt: 'InVision', title: "InVision", url: "#", num: "5" },
  { img: "/img/sketch-icon.webp", alt: 'Zeplin', title: "Sketch", url: "#", num: "6" },

];
const ProgrammStack = [
  { num: "1", img: "/svg/tech/html5-original.svg", url: "/web-design", title: "HTML/CSS3" },
  { num: "2", img: "/images/java-script.webp", url: "#", title: "MEAN", },
  { num: "3", img: "/img/Vue.Js-icon.webp", url: "#", title: "Vue.Js", },
  { num: "4", img: "/img/Backbone.Js-icon.webp", url: "#", title: "Backbone.Js", },
  { num: "5", img: "/img/angular.Js-icon.webp", url: "#", title: "Angular.Js", },
  { num: "6", img: "/img/react-icon.webp", url: "/react-js-development", title: "React.Js", },
  { num: "6", img: "/img/react-icon.webp", url: "/react-native-development", title: "React Native", },
  { num: "7", img: "/img/node-icon.webp", url: "/node-js-development", title: "Node.Js", },
  { num: "8", img: "/img/laravel-icon.webp", url: "#", title: "Laravel", },
  { num: "9", img: "/img/Codelgniter.webp", url: "#", title: "Codelgniter", }
];
const DatabaseStack = [
  { img: "/img/firebase-realtime-database.webp", alt: 'Firebase Realtime Database', title: "Firebase Realtime Database", num: "1", url: "#" },
  { img: "/img/firestore-icon.webp", alt: 'Firestore  ', title: "Firestore  ", num: "2", url: "#" },
  { img: "/img/aws-amplify-icon.webp", alt: 'AWS Amplify', title: "AWS Amplify", num: "3", url: "#" },
  { img: "/img/room-db.webp", alt: 'Room DB', title: "Room DB", num: "4", url: "#" },
  { img: "/svg/tech/mongodb-original.svg", alt: 'Mongo DB', title: "Mongo DB", num: "5", url: "#" },
  { img: "/img/microsoft-sql-icon.webp", alt: 'Microsoft SQL', title: "Microsoft SQL", num: "6", url: "#" },
  { img: "/img/postgre-sql.webp", alt: 'Postgre SQL', title: "Postgre SQL", num: "7", url: "#" },
 
];
const PartyLibraries = [
  { img: "/img/chat-bot-icon.webp", alt: 'Chat Bot', title: "Chat Bot", num: "1", url: "#" },
  { img: "/img/face-detection.webp", alt: 'Face Detection ', title: "Face Detection ", num: "2", url: "#" },
  { img: "/img/network-calling.webp", alt: 'Network Calling', title: "Network Calling", num: "3", url: "#" },
  { img: "/img/image-processing.webp", alt: 'Image Processing', title: "Image Processing", num: "4", url: "#" },
  { img: "/img/integrate-payment.webp", alt: 'Integrate Payment', title: "Integrate Payment", num: "5", url: "#" },
  { img: "/img/in-app-purchase.webp", alt: 'InApp Purchase', title: "InApp Purchase", num: "6", url: "#" },
  { img: "/img/custom-views.webp", alt: 'Custom Views', title: "Custom Views", num: "7", url: "#" },
  { img: "/svg/tech/firebase-plain.svg", alt: 'Firebase', title: "Firebase", num: "8", url: "#" },
  { img: "/svg/tech/firebase-plain.svg", alt: 'Firebase Chat', title: "IFirebase Chat", num: "9", url: "#" },
  { img: "/img/socket-icon.webp", alt: 'Socket', title: "Socket", num: "10", url: "#" },
  { img: "/img/databinding-icon.webp", alt: 'Databinding', title: "Databinding", num: "11", url: "#" },
  { img: "/img/dependency.webp", alt: 'Dependency', title: "Dependency", num: "12", url: "#" },
];
const PaymentGateway = [
  { img: "/img/apple-pay.webp", alt: 'Apple Pay', title: "Apple Pay", num: "1", url: "#" },
  { img: "/img/google-pay-icon.webp", alt: 'Google Pay', title: "Google Pay", num: "2", url: "#" },
  { img: "/img/stripe-icon.webp", alt: 'Stripe', title: "Stripe", num: "3", url: "#" },
  { img: "/img/paypal.webp", alt: 'PayPal', title: "PayPal", num: "4", url: "#" },
];
const PMTools= [
  { img: "/img/Jira-icon.webp", alt: 'Jira', title: "Jira", num: "1", url: "#" },
  { img: "/img/trello-icon.webp", alt: 'Trello', title: "Trello", num: "2", url: "#" },
  { img: "/img/slack.webp", alt: 'Slack', title: "Slack", num: "3", url: "#" },
];
const Panelheader = [
  {
    num: "01",
    title: "Technologies Involved In Healthcare App Development",
    dec: "Comfygen provides cutting-edge healthcare app development services, solutions, where we embark our healthcare software development with best tech-stacks to make it globally approachable. Some technologies are right here to let our clients know where they are heading:"
  },
];




export default function GuidSectionBlockchain() {
  const [tech, setTech] = useState(0);
  return (
    <div className=" space-y-2 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 bg-white  py-10">
      {Panelheader.map((elem: any) => {
        const { title,dec } = elem;
        return (
          <div className="flex flex-col justify-center text-center  mx-auto">
            <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
              {title}
            </h2>
            <p>{dec}</p>
          </div>
        );
      })}
      <div className="xl:flex  items-start xl:space-x-16 xl:space-y-0 space-y-8 w-full py-10">
        <div className="flex flex-col items-start space-y-6  justify-start xl:w-[40%]  w-full">
          <span
            onClick={() => setTech(tech === 0 ? 0 : 0)}
            className={
              tech === 0
                ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
            }
          >
            Technologies
          </span>
          <span
            onClick={() => setTech(tech === 1 ? 0 : 1)}
            className={
              tech === 1
                ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                : "bg-transparent text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
            }
          >
            UI/UX
          </span>
          <span
            onClick={() => setTech(tech === 2 ? 0 : 2)}
            className={
              tech === 2
                ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
            }
          > WEB/Frontend
          </span>
          <span
            onClick={() => setTech(tech === 3 ? 0 : 3)}
            className={
              tech === 3
                ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
            }
          > Backend & Database
          </span>
          <span
            onClick={() => setTech(tech === 4 ? 0 : 4)}
            className={
              tech === 4
                ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
            }
          > 3rd PartyLibraries
          </span>
          <span
            onClick={() => setTech(tech === 5 ? 0 : 5)}
            className={
              tech === 5
                ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
            }
          > Payment Gateway
          </span>
          <span
            onClick={() => setTech(tech === 6 ? 0 : 6)}
            className={
              tech === 6
                ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
            }
          > PM Tools
          </span>

        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 divide-x-1 md:gap-6 gap-4 relative capitalize xl:w-[60%] w-full">
          {tech === 0 ? (
            <>
              {BlockchainStack.map((elem: any) => {
                const { img, num, title, url, bg } = elem;
                return (
                  <Link href={url} passHref={true}>
                    <div
                      key={num}
                      className="flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
                        <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : null}

          {tech === 1 ? (
            <>
              {FrontendStack.map((elem: any) => {
                const { img, title, num, url, bg } = elem;
                return (
                  <Link href={url} passHref={true}>
                    <div
                      key={num}
                      className="flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
                        <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : null}

          {tech === 2 ? (
            <>
              {ProgrammStack.map((elem: any) => {
                const { img, num, title, bg, url } = elem;
                return (
                  <Link href={url} passHref={true}>
                    <div
                      key={num}
                      className="flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
                        <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black text-center">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : null}
          {tech === 3 ? (
            <>
              {DatabaseStack.map((elem: any) => {
                const { img, num, title, bg, url } = elem;
                return (
                  <Link href={url} passHref={true}>
                    <div
                      key={num}
                      className="flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
                        <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black text-center">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : null}
           {tech === 4 ? (
            <>
              {PartyLibraries.map((elem: any) => {
                const { img, num, title, bg, url } = elem;
                return (
                  <Link href={url} passHref={true}>
                    <div
                      key={num}
                      className="flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
                        <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : null}
           {tech === 5 ? (
            <>
              {PaymentGateway.map((elem: any) => {
                const { img, num, title, bg, url } = elem;
                return (
                  <Link href={url} passHref={true}>
                    <div
                      key={num}
                      className="flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
                        <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : null}
           {tech === 6 ? (
            <>
              {PMTools.map((elem: any) => {
                const { img, num, title, bg, url } = elem;
                return (
                  <Link href={url} passHref={true}>
                    <div
                      key={num}
                      className="flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
                        <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : null}
          

        </div>
      </div>
      <div className="flex justify-center items-center">
              <a href='/contact-us' >
                <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                Connect with Experts
                </button>
              </a>
            </div>
    </div>


  );
}
