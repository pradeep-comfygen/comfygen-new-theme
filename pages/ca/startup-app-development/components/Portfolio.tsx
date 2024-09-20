import React from "react";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";


function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="slider-container lg:py-16 py-8 bg-[#ECEDFE]">
      <div>
        <h2 className="py-4 text-2xl lg:text-4xl text-center text-[#0E1F51] font-bold leading-tight lg:leading-[3rem]">Our StartUp Mobile App Development Portfolio</h2>
      </div>
      <Slider {...settings}>
        <div>
          <section>
            <div className=' w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-9/12  mx-auto ' >
              <div className='grid lg:grid-cols-2  grid-cols-1 bg-gradient-to-r from-[#BE5EBC] to-[#16BDFA] drop-shadow-xl rounded-[28px] flex items-center'>
                <div className='space-y-3 lg:p-16 p-10'>
                  <div>
                    <h2 className=" text-[#fff] xl:text-5xl text-3xl  w-70 font-bold xl:leading-[3rem]">
                    Fitclub
                    </h2>
                    <div className="py-6 flex gap-3 flex-wrap">
                      <span className="bg-white p-3 rounded-lg  text-sm font-semibold shadow-lg">Frontend - React</span>
                      <span className="bg-white p-3 rounded-lg  text-sm font-semibold shadow-lg">Backend - Nodejs</span>
                      <span className="bg-white p-3 rounded-lg  text-sm font-semibold shadow-lg">Backend framework - Express.js</span>
                      <span className="bg-white p-3 rounded-lg  text-sm font-semibold shadow-lg">Database - MongoDB</span>
                    </div>
                    <p className='text-lg text-white mt-1 '>Our team developed Fitclub, a revolutionary fitness app that integrates personalized workout plans with real-time health tracking. Users can set fitness goals, track progress, and receive custom workout recommendations based on their fitness level and preferences. Fitclub has garnered over 100,000 downloads within its first year, receiving rave reviews for its user-friendly interface and effective fitness algorithms.</p>
                  </div>
                  <div className="lg:flex  justify-start items-center gap-3 space-y-3">
                    <a href='/portfolio' >
                      <button className="shadow-2xl  inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-[#fff] flex gap-2  rounded cursor-pointer text-black w-fit group rounded-full">
                      Get a Live Demo <FaArrowRight className='font-normal' />
                      </button>
                    </a>
                    <a href='/quote' >
                      <button className="shadow-2xl lg:mt-0 mt-3 inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-[#fff] flex gap-2  rounded cursor-pointer text-black w-fit group rounded-full">
                       Contact Us <FaArrowRight className='font-normal' />
                      </button>
                    </a>
                  </div>
                </div>
                <div className='flex justify-center p-6'>
                  <img className='w-full' src="/img/footer-fitclub-img.webp" alt="startup web app development company" />
                </div>
              </div>

            </div>
          </section>
        </div>

        <div>
          <section>
            <div className=' w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-9/12  mx-auto ' >

              <div className='grid lg:grid-cols-2  grid-cols-1 bg-gradient-to-r from-[#BE5EBC] to-[#16BDFA] drop-shadow-xl rounded-[28px] flex items-center'>
                <div className='space-y-3 lg:p-16 p-10'>
                  <div>
                    {/* <h4 className=" text-[#fff] text-xl  font-bold mb-2" >E-Commerce App Developers by Comfygen</h4> */}
                    <h2 className=" text-[#fff] xl:text-5xl text-3xl  w-70 font-bold xl:leading-[3rem]">
                    iChef
                    </h2>
                    <div className="py-6 flex gap-3 flex-wrap">
                      <span className="bg-white p-3 rounded-lg  text-sm font-semibold shadow-lg">Frontend - React</span>
                      <span className="bg-white p-3 rounded-lg  text-sm font-semibold shadow-lg">Backend - Nodejs</span>
                      <span className="bg-white p-3 rounded-lg  text-sm font-semibold shadow-lg">Backend framework - Express.js</span>
                      <span className="bg-white p-3 rounded-lg  text-sm font-semibold shadow-lg">Database - MongoDB</span>
                    </div>
                    <p className='text-lg text-white mt-1 '>iChef is a cutting-edge culinary app designed to simplify meal planning and cooking for busy professionals. Our developers crafted iChef to include intuitive recipe browsing, automated grocery list generation, and personalized meal recommendations based on dietary preferences. Since its launch, iChef has been featured in top tech publications and has gained a loyal user base of food enthusiasts worldwide.</p>
                  </div>
                  <div className="lg:flex  justify-start items-center gap-3 space-y-3">
                    <a href='/portfolio' >
                      <button className="shadow-2xl  inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-[#fff] flex gap-2  rounded cursor-pointer text-black w-fit group rounded-full">
                        Portfolio <FaArrowRight className='font-normal' />
                      </button>
                    </a>
                    <a href='/quote' >
                      <button className="shadow-2xl lg:mt-0 mt-3 inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-[#fff] flex gap-2  rounded cursor-pointer text-black w-fit group rounded-full">
                        Get a Free Demo<FaArrowRight className='font-normal' />
                      </button>
                    </a>
                  </div>
                </div>
                <div className='flex justify-center p-6'>
                  <img className='w-full' src="/img/ichef-portfolio.webp" alt="Startup mobile App development Services" />
                </div>
              </div>

            </div>
          </section>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
