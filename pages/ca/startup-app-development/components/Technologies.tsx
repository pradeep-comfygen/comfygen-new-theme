import React, { useState } from "react";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
// import JSON_DATA from "../json/teleMedicine.json";

export default function Tech() {
  const [tech, setTech] = useState(0);

  const sections = [
    {
      title: "Modern Tech Trends We Use",
      description:
        "Patients and their relatives are the primary customers of your medicine delivery apps. Our customer app gives an easy way to order medicines according to doctor's prescriptions and have them delivered to your doorstep. We offer some interesting features that make your pharmacy delivery app more appealing to customers.",
      listItems: [
        "Customers can log in through different means, such as Google or email.",
        "Patients can enter the names of medications or upload prescriptions for search.",
        "You can add medicines to the shopping cart before the final payment.",
        "Our medicine delivery apps offer push notifications about order status and offers.",
        "Patients can capitalize on the flexibility of using multiple payment options.",
        "Users can provide ratings and reviews of medicines orders through the app.",
        "Customers can find the order history and repeat the orders they want.",
      ],
      imageSrc: "/img/for-patients-images.webp",
    },
    {
      title: "Medicine Delivery Apps For Business Owners",
      description:
        "As a pharmacy business owner, you would have different challenges to take care of when you use a delivery app. Whether it is inventory management or planning the routes of drivers, there are many features in our pharmacy delivery apps to help you manage your online medicine store.",
      listItems: [
        "Admins can monitor and manage all app activities through the dashboard.",
        "Business owners can track customer activities, payments, feedback, and orders.",
        "Admins can also track the activities and locations of all drivers on the dashboard.",
        "The app also helps in tracking the details and activities of all pharmacy stores.",
        "Admins can easily update coupons, discounts, and offers on the drugs.",
        "Business owners can also manage reviews, feedback, and complaints in the app.",
        "Admins can also use the dashboard for detailed analytics on app performance."
      ],
      imageSrc: "/img/for-business-owners.webp",
    },
    {
      title: "Medicine Delivery Apps For Drivers",
      description:
        "The most important requirement to run a pharmacy delivery app is a fleet of drivers. You can use our medicine app development company to create custom driver apps that serve as the connecting link between pharmacy apps and patients. Some of the unique features that we offer in our driver apps serve promising value advantages.",
      listItems: [
        "Driver profile allows drivers to register their details on the app. ",
        "Push notifications can help drivers get notifications about orders. ",
        "Drivers can also have flexible options to accept delivery orders.",
        "Our apps help you update the status of medicine deliveries.",
        "Drivers can update the status of medicine deliveries according to the plan. ",
        "Driver apps can also help drivers check their daily earnings. ",
        "Our driver apps also support route optimization features for better delivery speed."
      ],
      imageSrc: "/img/for-drivers.webp",
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
        <div className="flex flex-col justify-center text-center">
          <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
          Technologies We Use for Startup App Development
          </h2>
          {/* <p className="text-base text-slate-800">
          Developing a medicine delivery app with us brings you a wide range of advantages in different ways. We specialize in on-demand medicine delivery app development to create apps that make ordering medicines a lot easier. At the same time, our apps also help business owners manage different aspects of their pharmacy business. Delivery personnel can also access powerful features with our apps to transform pharmacy delivery performance. Check out the collection of interesting features for different participants who use our pharmacy delivery apps.
          </p> */}
        </div>
        <div className="flex items-center space-x-4 md:justify-center justify-start overflow-x-auto whitespace-nowrap">
          {sections.map((section, index) => (
            <span
              key={index}
              onClick={() => setTech(index)}
              className={
                tech === index
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                  : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer"
              }
            >
              {section.title}
            </span>
          ))}
        </div>
        <div className="grid md:grid-cols-1 grid-cols-1 divide-x-1 md:gap-10 gap-6 relative pt-6 capitalize mt-5 bg-white">
          {sections.map((section, index) => (
            tech === index && (
              <div key={index} className="flex flex-col lg:flex-row py-10 px-4 lg:px-10 rounded-[42px] items-center">
                {index % 2 === 0 ? (
                  <div className="w-full space-y-[5px] text-left">
                    <h2 className="text-[24px] lg:text-4xl font-bold text-[#0E1F51]">{section.title}</h2>
                    <p className="py-6 text-base text-black">{section.description}</p>
                    <ul className="list-disc px-6">
                      {section.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <div className="flex justify-center w-full md:justify-center">
                  <Image
                    className="rounded-md"
                    title="Custom Sports Betting App Development"
                    alt=""
                    src={section.imageSrc}
                    height={400}
                    width={400}
                    loader={uploadcareLoader}
                    unoptimized={true}
                  />
                </div>
                {index % 2 !== 0 ? (
                  <div className="w-full space-y-[5px] text-left">
                    <h2 className="text-[24px] lg:text-4xl font-bold text-[#0E1F51]">{section.title}</h2>
                    <p className="py-6 text-base text-black">{section.description}</p>
                    <ul className="list-disc px-6">
                      {section.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
