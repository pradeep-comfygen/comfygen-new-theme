import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const testimonials = [
  {
    text: "“InboundLabs helped me to find the weak points of our web presence. It is important to get an external view of your strategy and they have helped us so much in this point. They have been very professional and honest with their proposals. Highly recommended.”",
    name: "Sergio Gazeau",
    title: "Digital Marketing Manager, Company Name",
  },
  {
    text: "InboundLabs helped me to find the weak points of our web presence. It is important to get an external view of your strategy and they have helped us so much in this point. They have been very professional and honest with their proposals. Highly recommended.”",
    name: "Sergio Gazeau",
    title: "Digital Marketing Manager, Company Name",
  },
];


const TestimonialCarousel = () => {
  const [count, setCount] = useState(0); 
  const intervalRef = useRef(null); 


  useEffect(() => {
    const updateCounter = () => {
      setCount((prev) => {
        if (prev < 500) return prev + 1; 
        clearInterval(intervalRef.current); 
        return prev;
      });
    };

    intervalRef.current = setInterval(updateCounter, 5); 

    return () => clearInterval(intervalRef.current); 
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="lg:py-16 py-10 bg-white">
      <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
        <div className="titleRow mb-4">
          <div className="menus-block my-auto">
            <h3 className="title-bg">Testimonials</h3>
            <h2 className="xl:text-4xl text-3xl text-[#0E1F51] text-center font-bold">
              Client Testimonials
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="text-white bg-[#2563EB] py-2 px-6 text-base font-semibold rounded-full">
            {count}+ Trusted Clients
          </span>
        </div>
        <div className="text-center mt-8">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-4">
                <p className="text-lg italic testimonials-items relative z-40 text-black mb-4 max-w-2xl mx-auto">
                  {testimonial.text}
                </p>
                <div className="details text-black">
                  <span className="block font-semibold">{testimonial.name}</span>
                  <span className="block text-sm">{testimonial.title}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

// Custom arrow components for navigation
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} right-4 z-10`}
      style={{ ...style, display: 'block', background: 'transparent' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} left-4 z-10`}
      style={{ ...style, display: 'block', background: 'transparent' }}
      onClick={onClick}
    />
  );
}

export default TestimonialCarousel;
