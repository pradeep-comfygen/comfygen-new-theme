import React from "react";
import Slider from "react-slick";
import { BiSolidSquareRounded } from "react-icons/bi";
import Image from "next/image";
import styles from '../styles.module.css';

const sections = [
  {
    title: "For users",
    description: "Users need features that make the Satta Matka game result API to be interesting and interactive. The features are as follows-",
    items: [
      "Gameplay access ",
      "Real-time results",
      "User authentication",
      "Betting Management ",
      "Transaction History "
    ],
    bgColor: "bg-[#F1C37F]",
    imgSrc: "/images/For-users.svg",
    imgAlt: "for users"
  },
  {
    title: "Admin features",
    description: "If you think about the admin panel, there are some features that are only included in the admin panel and are meant to make the management of the API possible. Admin panel includes the following features.",
    items: [
      "Control dashboard ",
      "User management ",
      "Game Management",
      "Result Management",
      "Report and Analytics"
    ],
    bgColor: "bg-[#3B82F6]",
    imgSrc: "/images/Admin-features.svg",
    imgAlt: "admin fetures"
  },
  {
    title: "For companies",
    description: "In the larger scenario of the company, there are some features that are included to make the management of the Satta Matka Game result API easy for the company side. The features are as follows- ",
    items: [
      "API integration",
      "Customization",
      "Scalability",
      "Multi-platform Support",
      "Comprehensive analytics"
    ],
    bgColor: "bg-[#B463C0]",
    imgSrc: "/images/For-companies.svg",
    imgAlt: "Satta Matka Auto result API"
  }
];

function Responsive() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    appendDots: dots => (
      <div className={styles.sliderPagination}>
        <ul className={styles.customDots}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className={styles.customPaging}>
        <div className={styles.paginationBullet} />
      </div>
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 1, dots: true } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true } }
    ]
  };

  return (
    <div className="slider-container bg-[#222222] lg:py-16 py-8">
      <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6">
        <h2 className="md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] text-center">
        Features to Look for In Satta Matka Result API
        </h2>
        <p className="text-base text-white text-center">
        In the Satta Matta Matka Live result API that we create, we add features that are meant for different sector stakeholders. The features are meant to be included in different Satta Matka Gaming apps to make sure that the result is displayed very fast and in an interesting manner.
        </p>
      </div>
      <Slider {...settings} className="md:m-10 m-5">
        {sections.map((section, index) => (
          <div className="px-1" key={index}>
            <div className={`md:p-20 p-4 ${section.bgColor} rounded-[18px]`}>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
                <div>
                  <h2 className="lg:text-4xl text-2xl text-white font-semibold">
                    {section.title}
                  </h2>
                  <p className="text-white text-lg">
                    {section.description}
                  </p>
                  <ul className="text-white mt-4">
                    {section.items.map((item, idx) => (
                      <li className="flex gap-1 items-center" key={idx}>
                        <BiSolidSquareRounded /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <img width={380} className="mx-auto" src={section.imgSrc} alt={section.imgAlt} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Responsive;
