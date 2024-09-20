import React, { useState } from "react";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import JSON_DATA from "../json/sportsbettingapp.json"


export default function Tech() {
  const [tech, setTech] = useState(0);

  return (
    <>
      <section className="py-10">
        <div className=" space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
          <div className="flex items-center space-x-4 md:justify-center justify-start overflow-x-auto whitespace-nowrap">
            <span
              onClick={() => setTech(tech === 0 ? 0 : 0)}
              className={
                tech === 0
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                  : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer"
              }
            >
              White Label Sports Betting App Development
            </span>
            <span
              onClick={() => setTech(tech === 1 ? 0 : 1)}
              className={
                tech === 1
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                  : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer"
              }
            >
              Custom Sports Betting App Development

            </span>
          </div>
          <div className="grid  md:grid-cols-1 grid-cols-1 divide-x-1 md:gap-10 gap-6 relative pt-6 capitalize mt-5">
            {tech === 0 ? (
              <>
                <div className="lg:flex items-center space-y-10  lg:space-x-20 md:space-y-0 py-10">
                  <div className="w-full space-y-6 text-left ">
                    <div className="space-y-4">
                      <h2 className="py-2 lg:py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                        White Label Sports Betting App Development
                      </h2>
                    </div>
                    <p className="text-base text-black ">
                      White label sports betting app development service provider gives you the right to provide sports betting app development solutions keeping your business essential in mind during the development plan of action.
                    </p>
                    <p className="text-base text-black ">
                      It can support you in different ways, such as lowering risks, pitchout, reducing sports betting app development costs, and diversification. These offers encourage industry to hire a Programmer team rather than develop them themselves.
                    </p>
                  </div>
                  <div className="flex justify-center w-full lg:justify-end">
                    <Image
                      className="rounded-md pb-10 lg:pb-0"
                      title="White Label Sports Betting App Development"
                      alt="White Label Sports Betting App Development"
                      src="/img/white-label-sports-betting-app-development.webp"
                      height={436}
                      width={488}
                      loader={uploadcareLoader}
                      unoptimized={true}
                    />
                  </div>
                </div>
              </>
            ) : null}

            {tech === 1 ? (
              <>
                <div className="items-center space-y-10 md:flex md:space-x-10 md:space-y-0 py-6 lg:py-10">

                  <div className="flex flex-col lg:flex-row py-10 px-4 lg:px-10 rounded-[42px] items-center">
                    <div className="flex justify-center w-full md:justify-center ">
                      <Image
                        className="rounded-md "
                        title="Custom Sports Betting App Development"
                        alt=""
                        src="/images/custom-sports-betting-developmwent.webp"
                        height={668}
                        width={532}
                        loader={uploadcareLoader}
                        unoptimized={true} />
                    </div>
                    <div className="w-full space-y-[5px] text-left">
                      <h2 className="text-[24px] lg:text-4xl font-bold text-[#0E1F51]">
                        Custom Sports Betting App Development
                      </h2>
                      <p className="py-6 text-base font-medium text-black">
                        We can Support and counsel you on all aspects of the business, build your Online sports betting app and help you to operate effectively with our prompt and efficient support team. Custom Sports Betting App development industry services of Confygen will give you an all-round scalable sports bet app that provides users-friendly with an option to choose the type of sports bets. With our expert team of programmers, we can create a customised solution that meets your every business needed.
                      </p>
                      <p className="py-6 text-base font-medium text-black">
                        Things we consider before developing custom sports betting application
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {JSON_DATA.NewsPoint.map((elem: any, index: any) => {
                          const { title } = elem;
                          return (
                            <span key={index} className="p-6 py-2 font-medium text-black rounded-md bg-gray-200">
                              {title}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}


          </div>
        </div>
      </section>
    </>
  );
}
