import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';

const Panelheader = [
  {
    num: "01",
    title: "Benefits of .Net Framework",
    decs: "Experts in the .NET Framework at Comfygen enable you to take advantage of the most agile ecosystem available. These are the main justifications for using the.NET Framework when creating web apps. "
  },
];

export default function GuidSectionBlockchain() {
  const [tech, setTech] = useState(0);
  const techData = [
    {
      title: "Performance",
      data: [
        {
          title: "Performance",
          pera: "Features like sophisticated compilation and catching strategies are part of the.NET framework. These characteristics enable the web apps to operate much more quickly than they did previously.",
        }
      ]
    },
    {
      title: "Productivity",
      data: [
        {
          title: "Productivity",
          pera: "You can maximize your productivity gains by utilizing characteristics like the programming paradigm, the amount of work done by the.NET Framework, and the codes given in the libraries.",
        }
      ]
    },
    {
      title: "Security",
      data: [
        {
          title: "Security",
          pera: "Code security measures are included in the.NET Framework and have been specifically designed with the current internet environment in mind. In doing so, the system becomes more scalable."
        }
      ]
    },
    {
      title: "Integrity",
      data: [
        {
          title: "Integrity",
          pera: "The COM interop technology in the.NET Framework creates a defense against your COM parts. Apps have the ability to integrate with pre-existing apps."
        }
      ]
    }
  ];

  return (

    <div className=" space-y-2 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  py-10 ">
      {Panelheader.map((elem, index) => (
        <div key={index} className="flex flex-col justify-center text-center  mx-auto ">
          <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
            {elem.title}
          </h2>
          <p className='text-base text-slate-800'>{elem.decs}</p>
        </div>
      ))}
      <div className="xl:flex  items-start xl:space-x-16 xl:space-y-0 space-y-8 w-full py-10 px-8 rounded-2xl bg-[#BA68C8] relative ">
        <div className={`${styles.stepTab} flex flex-col items-center space-y-8  justify-start  rounded	bg-[#BA68C8]  p-6 w-full border  border-white `}>
          {techData.map((item, index) => (
            <span
              key={index}
              onClick={() => setTech(index)}
              className={
                tech === index
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-transparent  text-white border border-rounded-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full "
              }
            >
              {item.title}
            </span>
          ))}
        </div>
        <div className={`${styles.Tabafter} grid md:grid-cols-1 grid-cols-1 divide-x-1 md:gap-6 gap-4 relative capitalize xl:w-[100%] w-full bg-white p-4 `}>
          {techData[tech].data.map((elem, index) => (
            <div className="flex flex-col justify-start items-start rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border">
              <h3 className="text-lg font-semibold text-black">{elem.title}</h3>
              <p className="text-sm text-black">{elem.pera}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
