import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';

const Panelheader = [
  {
    num: "01",
    title: "Step into a New Age of Finance with Apps Powered by Modern Technologies",
    decs: "We are specialists in finance & banking app development with the vision of offering exceptional services based on technology. Our experts leverage the latest technologies to create fintech apps that create new perspectives on user experience, security, scalability and efficiency"
  },
];

export default function GuidSectionBlockchain() {
  const [tech, setTech] = useState(0);
  const techData = [
    {
      title: "AI and ML",
      data: [
        {
          title: "Artificial Intelligence and Machine Learning",
          pera: "Our team includes the best fintech app developers with a specialisation in the integration of AI and ML in fintech apps. The power of AI and ML can empower fintech apps to provide actionable insights that can support decision-making. Our fintech apps powered by AI and ML can also offer personalised financial advice and better fraud detection.",
          url: "#"
        }
      ]
    },
    {
      title: "Metaverse",
      data: [
        {
          title: "Metaverse",
          pera: "You can step into a new era of finance mobile app development with the power of the metaverse. Our skilled and experienced fintech mobile app developers capitalise on the potential of metaverse for creating a new type of user experience in fintech apps. You can use the metaverse as a unique advantage for making your fintech apps more captivating and engaging, thereby increasing the chances of success.",
          url: "/metaverse-development"
        }
      ]
    },
    {
      title: "Blockchain Technology",
      data: [
        {
          title: "Blockchain Technology",
          pera: "As a leading finance app development service provider, we also offer the flexibility for capitalising on functionalities of blockchain. We utilise blockchain as an effective tool for improving security of fintech apps alongside delivering the value benefits of transparency for reducing the complaints of fraud in fintech apps.",
          url: "/blockchain-development"
        }
      ]
    },
    {
      title: "Cloud Computing",
      data: [
        {
          title: "Cloud Computing",
          pera: "We also make the most of cloud computing technology in our finance application development services for creating customised and scalable FinTech apps. Users can capitalise on the benefits of cloud computing to ensure accessibility of fintech apps from any device and any location. Cloud-based fintech applications have emerged as the popular favourite of users for different benefits.",
          url: "#"
        }
      ]
    },
    {
      title: "Internet of Things",
      data: [
        {
          title: "Internet of Things",
          pera: "You can find the opportunity to create fintech apps for integration of Internet of Things technology in fintech apps. We can use IoT in the best way to finance mobile applications to ensure seamless connectivity with different systems and devices that can help facilitate convenient and secure transactions.",
          url: "/iot-development-company"
        }
      ]
    },
    {
      title: "Robotic Process Automation",
      data: [
        {
          title: "Robotic Process Automation",
          pera: "The most powerful technology we use in financial application development is Robotic Process Automation or RPA. It helps us cut down additional costs and improve business efficiency through smart automation solutions for repetitive tasks. Businesses can leverage RPA in fintech apps to improve productivity and focus on other important tasks.",
          url: "#"
        }
      ]
    },
  ];

  return (

    <section className=' bg-[#DBEAFE]'>
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
              <Link key={index} href={elem.url} passHref={true}>
                <div className="flex flex-col justify-start items-start rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border">
                  <h3 className="text-lg font-semibold text-black">{elem.title}</h3>
                  <p className="text-sm text-black">{elem.pera}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
