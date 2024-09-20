import React from "react";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
function Responsive() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow:1,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };
  return (
    <div className="slider-container lg:py-16 py-8 bg-[#ECEDFE]">
          <div>
                   <h2 className="py-4 text-2xl lg:text-4xl text-center text-[#0E1F51] font-bold leading-tight lg:leading-[3rem]">Our Iot Development Portfolio</h2>
               </div>
      <Slider {...settings}>
        <div>
        <section>
          <div className=' w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-9/12  mx-auto ' >
             
            <div className='grid lg:grid-cols-2  grid-cols-1 bg-gradient-to-r from-[#BE5EBC] to-[#16BDFA] drop-shadow-xl rounded-[28px] flex items-center'>
              <div className='space-y-3 lg:p-16 p-10'>
                <div>
                    <h4 className=" text-[#fff] text-xl  font-bold mb-2" > IoT Solution for Solaris Robots by Comfygen</h4>
                  <h2 className=" text-[#fff] xl:text-5xl text-3xl  w-70 font-bold xl:leading-[3rem]">
                  Innovative IoT Integration 
                 </h2>
                 <div className="py-6 flex gap-3 flex-wrap">
                      <span className="bg-white p-3 rounded-lg text-base font-semibold shadow-lg">Frontend - React</span>
                      <span className="bg-white p-3 rounded-lg text-base font-semibold shadow-lg">Backend - Nodejs</span>
                      <span className="bg-white p-3 rounded-lg text-base font-semibold shadow-lg">Backend framework - Express.js</span>
                      <span className="bg-white p-3 rounded-lg text-base font-semibold shadow-lg">Database - MongoDB</span>
                  </div>
                  <p className='text-lg text-white mt-1 '>Comfygen proudly presents its collaboration with Solaris Robots on an innovative IoT project. Tasked with enhancing disinfection processes, our team engineered a cutting-edge IoT solution that integrates seamlessly with Solaris Robots' robotic technologies. This advancement revolutionized disinfection methods, ensuring heightened efficiency, safety, and data monitoring capabilities. With features like real-time monitoring, remote control, predictive maintenance, and data analytics, our solution empowers Solaris Robots to set new standards in the industry. Leveraging IoT sensors, cloud computing, data analytics, and stringent cybersecurity measures, this project signifies our commitment to driving technological innovation. Contact Comfygen today to explore how we can elevate your project with similar transformative IoT solutions.</p>
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
                <img className='w-full' src="/img/iot-portfolio-img.webp" alt="HealthSphere Innovations" />
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
                    <h4 className=" text-[#fff] text-xl  font-bold mb-2" > IoT Solution for jetbrain by Comfygen</h4>
                  <h2 className=" text-[#fff] xl:text-5xl text-3xl  w-70 font-bold xl:leading-[3rem]">
                  Imaginative IoT Integration 
                 </h2>
                  <div className="py-6 flex gap-3 flex-wrap">
                      <span className="bg-white p-3 rounded-lg text-base font-semibold shadow-lg">Frontend - React</span>
                      <span className="bg-white p-3 rounded-lg text-base font-semibold shadow-lg">Backend - Nodejs</span>
                      <span className="bg-white p-3 rounded-lg text-base font-semibold shadow-lg">Backend framework - Express.js</span>
                      <span className="bg-white p-3 rounded-lg text-base font-semibold shadow-lg">Database - MongoDB</span>
                  </div>
                  <p className='text-lg text-white mt-1 '>Comfygen proudly presents its collaboration with jetbrain on an innovative IoT project. Tasked with enhancing disinfection processes, our team engineered a cutting-edge IoT solution that integrates seamlessly with jetbrain' robotic technologies. This advancement revolutionized disinfection methods, ensuring heightened efficiency, safety, and data monitoring capabilities. With features like real-time monitoring, remote control, predictive maintenance, and data analytics, our solution empowers jetbrain to set new standards in the industry. Leveraging IoT sensors, cloud computing, data analytics, and stringent cybersecurity measures, this project signifies our commitment to driving technological innovation. Contact Comfygen today to explore how we can elevate your project with similar transformative IoT solutions.</p>
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
                <img className='w-full' src="/img/iot-portfolio-img2.webp" alt="HealthSphere Innovations" />
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
