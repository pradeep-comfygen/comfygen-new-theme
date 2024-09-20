import { useRouter } from "next/router"
import React from "react"
import { IoArrowRedo } from "react-icons/io5";
export default function TalkExpert() {
  const history = useRouter()
  return (
    <div className="py-10" >
      <section className="items-center mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  space-y-10">
        <div className="bg-center bg-no-repeat bg-cover rounded-md bg-gradient-to-tr from-blue-400 to-purple-500" >
          <section className="px-3 lg:px-14 py-2 lg:py-20">
            <div className="container flex flex-col justify-center p-4 mx-auto space-y-8 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
              <div className="flex flex-col space-y-4 text-center lg:text-left">
                <h3 className="xl:text-4xl  text-3xl font-bold  text-white">Hire Healthcare App Developers to Gain User’s Reliability Into Your Project</h3>
                <p className="xl:text-lg text-base text-white">Do you need to hire healthcare app developers? There is nothing to worry, because you have the support from top-tier healthcare app development company “Comfygen.” We have the best healthcare mobile app developers, who can build mind-engaging mHealth apps using modern technologies and attractive designs. We have extensive years of experienced and expert healthcare app developers, who know what to build for which healthcare segment. They have vast knowledge and skills in building healthcare apps to serve advancements in the Healthcare App Development industry.  </p>
                <ul className='space-y-2'>
                <li className="flex text-base text-white">
              <span className="pr-2 mt-1.5 text-[#fff]">
                <IoArrowRedo className="w-4 h-4 text-[#fff]" />
              </span> Use of Advanced and Modern Technologies  </li>
              <li className="flex text-base text-white">
              <span className="pr-2 mt-1.5 text-[#4f4f50]">
                <IoArrowRedo className="w-4 h-4 text-[#fff]" />
              </span>Affordable Prices for Agile Development  </li>
              <li className="flex text-base text-white">
              <span className="pr-2 mt-1.5 text-[#4f4f50]">
                <IoArrowRedo className="w-4 h-4 text-[#fff]" />
              </span> Transparency with Clients   </li>
              <li className="flex text-base text-white">
              <span className="pr-2 mt-1.5 text-[#fff]">
                <IoArrowRedo className="w-4 h-4 text-[#fff]" />
              </span> Customized Healthcare App Solutions   </li>
              <li className="flex text-base text-white">
              <span className="pr-2 mt-1.5 text-[#fff]">
                <IoArrowRedo className="w-4 h-4 text-[#fff]" />
              </span> On-Time mHealth App Delivery </li>
                 </ul>
              </div>
              {/* <div className="flex flex-row items-center self-center justify-center flex-shrink-0 lg:justify-end bg-white rounded-full">
                <div className="flex flex-row">
                  <a href='https://api.whatsapp.com/send?phone=919587867258' className="bg-white text-slate-900 px-8 py-3 text-lg rounded-full flex justify-center items-center space-x-1 w-fit font-semibold overflow-hidden relative group   cursor-pointer">
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-black rounded-full group-hover:w-60 group-hover:h-60 opacity-10 origin-center"></span>Let's Talk</a>
                </div>
              </div> */}
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
