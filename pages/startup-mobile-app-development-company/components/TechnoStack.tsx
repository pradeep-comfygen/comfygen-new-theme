import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

const IosApp = [
  { img: "/img/stackimg/swift.webp", title: "SwiftLint", url: "#", num: "1" },
  { img: "/img/stackimg/objective-c.webp", title: " Objective-C", url: "#", num: "2" },
  { img: "/img/stackimg/rx-swift.webp", title: "RxSwift", url: "#", num: "3" },
  { img: "/img/stackimg/circle-ci.webp", title: "CircleCI", url: "#", num: "4" },
  { img: "/img/stackimg/swift.webp", title: "Swift", url: "#", num: "5", },
  { img: "/img/stackimg/swift-ui.webp", title: "SwiftUI", url: "#", num: "6" },
  { img: "/img/stackimg/cocoapods.webp", title: "CocoaPods", url: "#", num: "7" },
  { img: "/img/stackimg/flutter.webp", title: "Flutter", url: "/flutter-development-company", num: "8" },
  { img: "/img/stackimg/xcode.webp", title: "Xcode", url: "#", num: "9" },
];
const AndroidApp = [
  { img: "/img/stackimg/kotlin.webp", title: "Kotlin", url: "#", num: "1" },
  { img: "/img/stackimg/fastlane.webp", title: "Fastlane", url: "#", num: "2" },
  { img: "/img/stackimg/gradle.webp", title: "Gradle", url: "#", num: "3" },
  { img: "/img/stackimg/coroutines.webp", title: "Coroutines", url: "#", num: "4" },
  { img: "/img/stackimg/dagger-2.webp", title: "Dagger2", url: "#", num: "5" },
  { img: "/img/stackimg/jetpack.webp", title: "JetPack", url: "#", num: "6" },
  { img: "/svg/tech/javascript-original.svg", title: "javascript", url: "#", num: "7" },
  { img: "/images/java-script.webp", title: "Java", url: "#", num: "8" },
  { img: "/images/dot-net-stack-technology.webp", title: ".Net", url: "#", num: "9" },
];
const CrossApp = [
  { num: "1", img: "/images/unity-stack-technology.webp", url: "#", title: "Unity" },
  { num: "2", img: "/img/stackimg/electron.webp", url: "#", title: "Electron", },
  { num: "3", img: "/img/stackimg/ionic.webp", url: "#", title: "Ionic", },
  { num: "4", img: "/img/stackimg/xamarin.webp", url: "#", title: "Xamarin", },
  { num: "5", img: "/img/stackimg/flutter.webp", url: "/flutter-development-company", title: "Flutter", },
  { num: "6", img: "/svg/tech/react-original.svg", url: "/react-native-development", title: "React Native", },
  { num: "7", img: "/img/stackimg/native-script.webp", url: "#", title: "Native Script", },
  { num: "8", img: "/svg/tech/typescript-original.svg", url: "#", title: "TypeScript", },
  { num: "9", img: "/svg/tech/javascript-original.svg", url: "#", title: "Javascript", },
];
const BackendApp = [
  { img: "/svg/tech/mongodb-original.svg", title: "mongodb", num: "1", url: "#" },
  { img: "/svg/tech/googlecloud-original.svg", title: "google Cloud", num: "2", url: "#" },
  { img: "/svg/tech/azure-original.svg", title: "azure", num: "3", url: "#" },
  { img: "/svg/tech/nginx-original.svg", title: "nginx", num: "4", url: "#" },
  { img: "/images/python-stack-technology.webp", title: "Python", num: "5", url: "/python-development" },
  { img: "/svg/tech/mysql-original-wordmark.svg", title: "mysql", num: "6", url: "#" },
  { img: "/img/stackimg/rails.webp", title: "Rails", num: "7", url: "#" },
  { img: "/img/stackimg/nodejs.svg", title: "Node.js", num: "8", url: "/node-js-development" },
  { img: "/img/stackimg/ruby.webp", title: "Ruby", num: "8", url: "#" },
];
const Panelheader = [
  {
    num: "01",
    title: "Our Full Stack Technology for Agile Mobile App Development Projects",
    decs: "To build robust mobile application app development services for your business, our Mobile app programmers gained high-level skills, got trained, and experienced for years, and handled complex projects. We are experts in core technologies to make our mobile application strong and stable. From the front-end to the back-end, from Kotlin to Swift; we know all and we opt all."
  },
];

export default function GuidSectionBlockchain() {
  const [tech, setTech] = useState(0);

  const techData = [
    IosApp,
    AndroidApp,
    CrossApp,
    BackendApp
  ];
  return (
    <>
      <section className=' bg-gray-200'>
        <div className=" space-y-2 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  py-10">
          {Panelheader.map((elem: any) => {
            const { title, decs } = elem;
            return (
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
                  {title}
                </h2>
                <p className='text-base text-slate-800'>{decs}</p>
              </div>
            );
          })}
          <div className="xl:flex items-start xl:space-x-16 xl:space-y-0 space-y-8 w-full py-10">
            <div className="flex flex-col items-center space-y-6  justify-start xl:w-[40%] bg-white p-4 w-full">
              {["iOS App Development", "Android App Development", "Cross-platform App", "Backend Development"].map((techTitle, index) => (
                <span
                  key={index}
                  onClick={() => setTech(tech === index ? 0 : index)}
                  className={
                    tech === index
                      ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                      : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  }
                >
                  {techTitle}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 divide-x-1 md:gap-6 gap-4 relative capitalize xl:w-[60%] w-full bg-white p-4">
              {techData[tech].map((elem, index) => (
                <Link key={index} href={elem.url} passHref>
                  <div className="flex flex-col justify-center items-center rounded-lg bg-white space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border">
                    <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
                      <Image src={elem.img} alt={elem.title} width={50} height={50} className="group-hover:scale-105 transition-all duration-200 transform" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">
                        {elem.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
