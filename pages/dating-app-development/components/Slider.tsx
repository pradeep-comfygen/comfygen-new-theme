// import React from "react";
// import Slider from "react-slick";
// import { BiSolidSquareRounded } from "react-icons/bi";
// import Image from "next/image";
// import styles from '../styles.module.css'; //
// function Responsive() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     appendDots: dots => (
//       <div className={styles.sliderPagination}>
//         <ul className={styles.customDots}> {dots} </ul>
//       </div>
//     ),
//     customPaging: i => (
//       <div className={styles.customPaging}>
//         <div className={styles.paginationBullet} />
//       </div>
//     ),

//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true
//         }
//       }
//     ]
//   };

//   return (
//     <div className="slider-container bg-[#222222] lg:py-16 py-8">

//       <div className=" w-11/12 mx-auto  2xl:w-9/12 xl:w-5/6 ">
//         <h2 className="md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] text-center ">
//           Dating Apps for a Diverse Target Audience
//         </h2>
//         <p className="text-base text-white text-center">
//           At Comfygen, we adapt to different models of dating apps and help you target different audience segments. Our development team specializes in creating dating app software for multiple groups of the demographic, as stated below-
//         </p>
//       </div>
//       <Slider {...settings} className="md:m-10 m-5">
//         <div className="px-1">
//           <div className="md:p-20 p-4 bg-[#F1C37F] rounded-[18px]">
//             <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
//               <div>
//                 <h2 className="lg:text-4xl text-2xl text-white font-semibold">
//                   Dating Apps for Young Adults
//                 </h2>
//                 <p className="text-white text-lg">
//                   Dating is a concept that is very popular among young adults who are in their late teens and early twenties. Young adults are more inclined to use casual dating apps and want a fun layout for dating apps. Here are some types of dating apps that are best for the young adult audience.
//                 </p>
//                 <ul className="text-white mt-4">
//                   <li className="flex gap-1 items-center">
//                     <BiSolidSquareRounded /> Casual dating apps
//                   </li>
//                   <li className="flex gap-1 items-center">
//                     <BiSolidSquareRounded /> Gamified dating apps
//                   </li>
//                   <li className="flex gap-1 items-center">
//                     <BiSolidSquareRounded /> Tinder, like dating apps
//                   </li>
//                   <li className="flex gap-1 items-center">
//                     <BiSolidSquareRounded /> Social media-integrated dating apps
//                   </li>
//                   <li className="flex gap-1 items-center">
//                     <BiSolidSquareRounded /> Event-based dating apps
//                   </li>
//                   <li className="flex gap-1 items-center">
//                     <BiSolidSquareRounded /> Video-based dating apps
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <img width={380} className="mx-auto" src="/img/dating-apps-for-young-adults.webp" alt="Dating apps for young adults" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="px-1">
//           <div className="md:p-20 p-4 bg-[#3B82F6] rounded-[18px]">
//             <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
//               <div>
//                 <h2 className="lg:text-4xl text-2xl text-white font-semibold">
//                   Dating Apps for Professionals
//                 </h2>
//                 <p className="text-white text-lg">
//                   Dating apps for professionals are made for people who are in their 20s to 30s and want to date while having a busy lifestyle. Creating a dating app that is created specifically for professionals is a challenging task that Comfygen has achieved for many companies. Here are the types of dating apps most in demand among professionals.
//                 </p>
//                 <ul className="text-white mt-4">
//                   <li className="flex gap-1 items-center">
//                     <BiSolidSquareRounded /> Serious relationship-based dating apps
//                   </li>
//                   <li className="flex gap-1 items-center">
//                     <BiSolidSquareRounded /> Location-based dating apps
//                   </li>
//                   <li className="flex gap-1 items-center">
//                     <BiSolidSquareRounded /> Blind dating apps
//                   </li>
//                   <li className="flex gap-1 items-center">
//                     <BiSolidSquareRounded /> Niche dating apps
//                   </li>
//                   <li className="flex gap-1 items-center">
//                     <BiSolidSquareRounded /> Speed dating apps
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <img width={380} className="mx-auto" src="/img/dating-apps-for-young-adults.webp" alt="Dating apps for professionals" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="px-1">
//           <div className="md:p-20 p-4 bg-[#F1F5F9] rounded-[18px]">
//             <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
//               <div>
//                 <h2 className="lg:text-4xl text-2xl text-black font-semibold">
//                   Dating Apps for Older Adults
//                 </h2>
//                 <p className="text-black text-lg">
//                   In the US and Canada, older adults in their late 30s and 40s are also looking for a partner for companionship and finding new people for their lives. We also create niche dating apps that are targeted towards the older audience.
//                 </p>
//                 <ul className="text-black mt-4">
//                   <li className="flex gap-1 items-center">
//                     <BiSolidSquareRounded /> Location-based dating apps
//                   </li>
//                   <li className="flex gap-1 items-center">
//                     <BiSolidSquareRounded /> Event-based dating apps
//                   </li>
//                   <li className="flex gap-1 items-center">
//                     <BiSolidSquareRounded /> Serious relationship-based dating apps
//                   </li>
//                   <li className="flex gap-1 items-center">
//                     <BiSolidSquareRounded /> Niche dating apps
//                   </li>
//                   <li className="flex gap-1 items-center">
//                     <BiSolidSquareRounded /> Video dating apps
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <img width={380} className="mx-auto" src="/img/dating-apps-for-young-adults.webp" alt="Dating apps for older adults" />
//               </div>
//             </div>
//           </div>
//         </div>

//       </Slider>

//     </div>
//   );
// }

// export default Responsive;




import React from "react";
import Slider from "react-slick";
import { BiSolidSquareRounded } from "react-icons/bi";
import Image from "next/image";
import styles from '../styles.module.css';

const sections = [
  {
    title: "Dating Apps for Young Adults",
    description: "Dating is a concept that is very popular among young adults who are in their late teens and early twenties. Young adults are more inclined to use casual dating apps and want a fun layout for dating apps. Here are some types of dating apps that are best for the young adult audience.",
    items: [
      "Casual dating apps",
      "Gamified dating apps",
      "Tinder-like dating apps",
      "Social media-integrated dating apps",
      "Event-based dating apps",
      "Video-based dating apps"
    ],
    bgColor: "bg-[#F1C37F]",
    imgSrc: "/img/target-audience-adults.svg",
    imgAlt: "Dating apps for young adults"
  },
  {
    title: "Dating Apps for Professionals",
    description: "Dating apps for professionals are made for people who are in their 20s to 30s and want to date while having a busy lifestyle. Creating a dating app that is created specifically for professionals is a challenging task that Comfygen has achieved for many companies. Here are the types of dating apps most in demand among professionals.",
    items: [
      "Serious relationship-based dating apps",
      "Location-based dating apps",
      "Blind dating apps",
      "Niche dating apps",
      "Speed dating apps"
    ],
    bgColor: "bg-[#3B82F6]",
    imgSrc: "/img/dating-apps-for-young-adults.webp",
    imgAlt: "Dating apps for professionals"
  },
  {
    title: "Dating Apps for Older Adults",
    description: "In the US and Canada, older adults in their late 30s and 40s are also looking for a partner for companionship and finding new people for their lives. We also create niche dating apps that are targeted towards the older audience.",
    items: [
      "Location-based dating apps",
      "Event-based dating apps",
      "Serious relationship-based dating apps",
      "Niche dating apps",
      "Video dating apps"
    ],
    bgColor: "bg-[#B463C0]",
    imgSrc: "/img/target-audience-older-adults.svg",
    imgAlt: "Dating apps for older adults"
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
          Dating Apps for a Diverse Target Audience
        </h2>
        <p className="text-base text-white text-center">
          At Comfygen, we adapt to different models of dating apps and help you target different audience segments. Our development team specializes in creating dating app software for multiple groups of the demographic, as stated below-
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
