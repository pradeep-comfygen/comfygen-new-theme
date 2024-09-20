import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbPointFilled } from "react-icons/tb";

function Responsive() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      }
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div >
          <div className="grid lg:grid-cols-2 ">
            <div className="bg-[#26304F] py-10 px-8 flex items-center ">
              <div className=" ">
                <h2 className="xl:text-4xl text-3xl text-white text-start font-bold">
                  Fitclub Mobile App
                </h2>
                <p className="text-lg text-start font-normal text-white">
                  Welcome to FitClub, where your fitness journey meets innovation. Seamlessly sculpt your well-being with our all-in-one mobile app, empowering you to own your health like never before. Unleash the power of convenience and comprehensive access, tailored for your fitness success.
                </p>
                <ul className="mt-3 space-y-1">
                  <li className="flex items-center gap-2 text-white text-base"><TbPointFilled />Mobile application for both Android and iOS.</li>
                  <li className="flex items-center gap-2 text-white text-base"><TbPointFilled />Real-time workout tracking and performance analytics.</li>
                  <li className="flex items-center gap-2 text-white text-base"><TbPointFilled />Secure user authentication and management.</li>
                  <li className="flex items-center gap-2 text-white text-base"><TbPointFilled />Integration with fitness tracking devices.</li>
                </ul>
                <div className="md:flex md:space-y-0 space-y-5 gap-6 items-center mt-7">
                  <button className="btn btn-fix lazyloaded  border border-[#00000042]">
                    Connect Experts <svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738"> <path id="Path_1487529" data-name="Path 1487529" d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z" transform="translate(-521.511 -1346.214)" fill="#000"></path> </svg> </button>
                  <button style={{ padding: '6px 52px' }} className="ripple-effect-button">
                    Explore Work
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#CFFC3F] p-8">
              <img className="w-full mx-auto" src="/img/footer-fitclub-img.webp" alt="" />
            </div>
          </div >
        </div >
        <div >
          <div className="grid lg:grid-cols-2 ">
            <div className="bg-[#26304F] py-10 px-8 flex items-center ">
              <div className=" ">
                <h2 className="xl:text-4xl text-3xl text-white text-start font-bold">
                  Fitclub Mobile App
                </h2>
                <p className="text-lg text-start font-normal text-white">
                  Welcome to FitClub, where your fitness journey meets innovation. Seamlessly sculpt your well-being with our all-in-one mobile app, empowering you to own your health like never before. Unleash the power of convenience and comprehensive access, tailored for your fitness success.
                </p>
                <ul className="mt-3 space-y-1">
                  <li className="flex items-center gap-2 text-white text-base"><TbPointFilled />Mobile application for both Android and iOS.</li>
                  <li className="flex items-center gap-2 text-white text-base"><TbPointFilled />Real-time workout tracking and performance analytics.</li>
                  <li className="flex items-center gap-2 text-white text-base"><TbPointFilled />Secure user authentication and management.</li>
                  <li className="flex items-center gap-2 text-white text-base"><TbPointFilled />Integration with fitness tracking devices.</li>
                </ul>
                <div className="md:flex md:space-y-0 space-y-5 gap-6 items-center mt-7">
                  <button className="btn btn-fix lazyloaded  border border-[#00000042]">
                    Connect Experts <svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738"> <path id="Path_1487529" data-name="Path 1487529" d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z" transform="translate(-521.511 -1346.214)" fill="#000"></path> </svg> </button>
                  <button style={{ padding: '6px 52px' }} className="ripple-effect-button">
                    Explore Work
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#CFFC3F] p-8">
              <img className="w-full mx-auto" src="/img/footer-fitclub-img.webp" alt="" />
            </div>
          </div >
        </div>
      </Slider >
    </div >
  );
}

// Define the Portfolio component
export default function Portfolio() {
  return (
    <>
      <section className="bg-[#F9F9FB] lg:py-16 py-10">
        <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-10 ">
          <div className="titleRow mb-10 ">
            <div className="menus-block my-auto">
              <h3 className="title-bg">Portfolio</h3>
              <h2 className="xl:text-4xl text-3xl text-[#0E1F51] text-center font-bold">Our Portfolio</h2>
              <p className="text-lg text-center font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni, excepturi in incidunt, possimus suscipit neque quia nihil, enim alias perspiciatis iusto voluptatem sunt commodi et aliquam exercitationem nostrum. Maxime!</p>
            </div>
          </div>
          {/* <div className="mb-10">
            <h2 className="xl:text-4xl text-3xl text-[#0E1F51] text-center font-bold">
              Our Portfolio
            </h2>
            <p className="text-lg text-center font-normal md:w-[75%] mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              reiciendis error explicabo vel hic nemo delectus, ea blanditiis!
              Explicabo, libero. Repellat quod, fugiat voluptas mollitia
              laudantium et omnis rerum rem.
            </p>
          </div> */}
        </div>
        <Responsive />
      </section>
    </>
  );
}
