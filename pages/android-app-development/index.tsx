import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import React from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';
import JSON_DATA from "./json/ios.json"
import Image from 'next/image';
import styles from './styles.module.css'
import { IoStarSharp } from "react-icons/io5";
import ConnectWithExpertButton from '../components/button/ConnectWithExpertButton';

const WhycomfygenSection = dynamic(() => import('./components/WhycomfygenSection'), {
  loading: () => <p>Loading...</p>,
})
const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})

const TalkExpert = dynamic(() => import('../components/TalkExpert'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
const BlogSection = dynamic(() => import('../components/BlogSection'), {
  loading: () => <p>Loading...</p>,
})
const HeroSectionForm = dynamic(() => import('../components/HeroSectionForm'), {
  loading: () => <p>Loading...</p>,
})
const HeroSectionFormForAndroid = dynamic(() => import('../components/HeroSectionFormForAndroid'), {
  loading: () => <p>Loading...</p>,
})
const ServiceSection = dynamic(() => import('../components/ServiceSection'), {
  loading: () => <p>Loading...</p>,
})
const FaqSection = dynamic(() => import('../components/FaqSection'), {
  loading: () => <p>Loading...</p>,
})
const HireSection = dynamic(() => import('../components/HireSection'), {
  loading: () => <p>Loading...</p>,
})
const WhyChoose = dynamic(() => import('../components/WhyChooseNew'), {
  loading: () => <p>Loading...</p>,
})
const ContactFromCenter = dynamic(() => import('../components/ContactFromCenter'), {
  loading: () => <p>Loading...</p>,
})

const ChooseUs = [
  {
    num: "1",
    icon: <img src="/img/android-app-design-and-development.webp" width={50} alt="Android App Design and Development" />,
    title: "Android App Design and Development",
    decs: <p>We are the best Android app development service provider with the capability to understand the unique needs of end users. Our experts can design Android apps and create productive solutions in alignment with customer expectations. Our consultants can help you choose the best Android platforms and essential technologies for Android development. </p>

    ,
  },
  {
    num: "2",
    icon: <img src="/img/native-android-app-dev.webp" width={50} alt="Native Android App Development" />,
    title: "Native Android App Development",
    decs: <p>We also specialize in native Android app development services tailored to help you come up with apps that work on Android OS. Our custom Android app development company specializes in designing robust and scalable native apps. We can develop custom native Android apps for businesses in different industries while maintaining higher levels of performance.</p>,
  },
  {
    num: "3",
    icon: <img src="/img/kotlin-app-developme.webp" width={50} alt=" Kotlin App Development" />,
    title: " Kotlin App Development",
    decs: <p>As the top destination for custom Android app development,  Comfygen is also your reliable partner for developing Android apps with Kotlin. Our experts specialize in the statically typed programming language and the top features offered by Kotlin to create powerful apps. We can help you save time by avoiding common errors in the development process with Kotlin.</p>,
  },
  {
    num: "4",
    icon: <img src="/img/cross-platform-app-dev.webp" width={50} alt="Cross-Platform App Development" />,
    title: "Cross-Platform App Development",
    decs: <p>We specialize in cross-platform app development to help businesses unravel new business opportunities across different platforms. Our custom Android application development services can be tailored to address the requirements for creating cross-platform apps. Our team of experts has earned experience working with different technologies, thereby guaranteeing better efficiency.</p>,
  },
  {
    num: "5",
    icon: <img src="/img/tablet-app-developme.webp" width={50} alt="Tablet App Development" />,
    title: "Tablet App Development",
    decs: <p>We are the best spot for you to hire Android application developers to develop tablet apps. Businesses should be available to their customers through apps on any type of device, and tablets have been gaining a lot of popularity. Our experts can help you create Android apps for tablets with seamless user experiences and appealing features.</p>
  },
  {
    num: "6",
    icon: <img src="/img/ar-core-app-developme.webp" width={50} alt="ARCore App Development" />,
    title: "ARCore App Development",
    decs: <p>With us, you can also avail yourself of the services of a  dedicated Android app developer to take care of your ARCore app development needs. Our developers can help you utilize the potential of ARCore to tap into the advantages of augmented reality. We can help you with convenient and fast AR content development solutions that are in alignment with your commercial objectives. </p>,
  },
  {
    num: "7",
    icon: <img src="/img/app-testing-and-qual.webp" width={50} alt="App Testing and Quality Assurance" />,
    title: "App Testing and Quality Assurance",
    decs: <p>Our custom Android application development workflow is tailored to prioritize performance and security. We offer comprehensive app testing and quality assurance services to ensure that your Android apps are completely free of glitches. Our experts use a combination of automated and manual testing processes to create efficient Android applications for the future. </p>,
  },
  {
    num: "8",
    icon: <img src="/img/app-maintenance-and-spots.webp" width={60} alt=" App Maintenance and Support" />,
    title: " App Maintenance and Support",
    decs: <p>You can also rely on our custom Android mobile app design and development services for best quality of support. Our clients are our foremost responsibility as we serve as their partners even after the deployment process by serving timely maintenance services. You can reach out to our experts at any time to find the best solutions to your problems.</p>,
  },
];

const schema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "brand": {
    "@type": "Brand",
    "name": "iOS App Development Company | ios mobile app development company"
  },
  "description": "Comfygen is your dependable partner for the creation of a top iOS app development company in UK, USA and UAE, providing first-class iOS Application Development Services to help your online swift app development services for ventures to reach new heights.",
  "image": "https://www.comfygen.com/svg/comfygen-logo.svg",
  "name": "Custom iPhone App Development Company | Comfygen",
  "review": [{
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.9"
    },
    "author": {
      "@type": "Person",
      "name": "Mr. Saddam Husen"
    }
  }],
  "offers": {
    "@type": "Offer",
    "url": "https://www.comfygen.com/ios-app-development",
    "priceCurrency": "USD",
    "seller": {
      "@type": "Organization",
      "name": "Comfygen Private Limited"
    }
  }
}

const ldJson = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "priceRange": "$20-$55",
  "image": "https://www.comfygen.com/svg/comfygen-logo.svg",
  "@id": "https://www.comfygen.com/ios-app-development",
  "name": "Best iOS App Development Company India, USA, UAE, Germany",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "F-152, Dayanand Marg, Nemi Nagar,",
    "addressLocality": "Vaishali Nagar, Near D A V Centenary Public School",
    "addressRegion": "Jaipur, Rajasthan",
    "postalCode": "302021",
    "addressCountry": "IN"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.9",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Saddam husen"
    }
  },
  "url": "https://www.comfygen.com/ios-app-development",
  "telephone": "+91 9587867258"
};


const WhyChoosed = [
  {
    "num": "1",
    "img": "/img/kotlin.webp",
    "title": "Kotlin",
    "decs": <p className="break-all text-slate-900 ">Kotlin is a trusted addition to the technology stack for Android app development as it helps in faster development of Android apps. It is a new statically typed programming language that helps more than 60% of professional Android developers boost their productivity, code safety, and developer satisfaction.</p>
  },
  {
    "num": "2",
    "img": "/img/java.webp",
    "title": "Java",
    "decs": <p className="break-all text-slate-900 ">Our Android app developers  also specialize in the use of Java to create powerful apps. Java is platform-agnostic and can work on any platform. With its distinct Java Runtime Environment and API, Java offers credible resources for creating Android apps. On top of that, Java also provides flexibility compared to other languages.</p>
  },
  {
    "num": "3",
    "img": "/img/android-studio.png.webp",
    "title": "Android Studio",
    "decs": <p className="break-all text-slate-900 ">You can hire Android app developer for your app development project from our platform to make the most of tools like Android Studio. It is the official Integrated Development Environment (IDE) for developing Android apps. Our experts help you make the most of the advanced features in Android Studio to enhance productivity in Android app development.</p>
  },
  {
    "num": "4",
    "img": "/img/android-sdk.webp",
    "title": "Android SDK",
    "decs": <p className="break-all text-slate-900 ">Android SDK or software development kit is one of the top tools that you can choose from when creating Android apps. It helps us make the most of Android app development software  with a comprehensive collection of development tools. The SDK includes libraries, a debugger, tutorials, and sample code for faster app development.</p>
  }
  ,
  {
    "num": "5",
    "img": "/img/retrofit.webp",
    "title": "Retrofit",
    "decs": <p className="break-all text-slate-900 ">Our experts can also help you with Kotlin app development by using the best of Retrofit to develop Android apps. It is a type-safe HTTP client suited for Android and Java development and helps in easier consumption of RESTful APIs in an Android application. Retrofit is also useful for managing creation of HTTP requests, error management, and response parsing.</p>
  }
  ,
  {
    "num": "6",
    "img": "/img/room-database.webp",
    "title": "Room Database",
    "decs": <p className="break-all text-slate-900 ">We have emerged as one of the top destinations for   Android app development with our specialization in technologies like Room Database. Room is a persistence library available in the Android Jetpack framework that can help develop and manage abstractions over SQLite. We can utilize the Room Database to ensure cost-efficient and powerful storage.</p>
  }
  ,
  {
    "num": "7",
    "img": "/img/firebase.png.webp",
    "title": "Firebase",
    "decs": <p className="break-all text-slate-900 ">Our experts offer the assurance of best Android mobile app development service with specialization in the use of Firebase. It is a trusted mobile platform to help developers create high-quality apps and expand their user base. The complementary features of Firebase can align with your specific needs alongside serving the power of Google Analytics. </p>
  }
  ,
  {
    "num": "8",
    "img": "/img/flutter.webp",
    "title": "Flutter (for cross-platform development)",
    "decs": <p className="break-all text-slate-900 ">We also offer the advantage of Flutter in our tech stack for Android application development, which offers cross-platform compatibility. Flutter is a portable UI toolkit of Google that helps create beautiful and natively compiled applications tailored for mobile, desktop, and web use through a single codebase. It is free and open source and works with existing code.</p>
  }
  ,
  {
    "num": "9",
    "img": "/img/ar-core.png.webp",
    "title": "ARCore (for AR apps)",
    "decs": <p className="break-all text-slate-900 ">Our specialists can help you take the next step in  Android web development by creating AR apps with ARCore. Augmented reality is the next big thing in Android apps, and we can use ARCore to create augmented reality experiences. We can use APIs with ARCore to empower smartphones with capabilities for sensing the environment and interacting with information.</p>
  }

];
const Whycomfygen = [
  {
    num: "1",
    title: " Project-based Model",
    desc: <p>You can choose our project-based model for hiring our experts to work on Android web development  and mobile development projects over a specific duration.</p>
  },
  {
    num: "2",
    title: "Dedicated Development Team",
    desc: <p>We also offer the option to  hire Android developers and create a dedicated development team. It can help you avail yourself of the expertise of our developers anytime and within your control. </p>
  },
  {
    num: "3",
    title: "App Development Outsourcing",
    desc: <p>You can also outsource your app development projects to our  Android app development agency with the assurance of multiple benefits, including flexibility and timely results.</p>,
  }
];

const Chartacterstics = [
  {
    "num": "1",
    "img": "/images/rapid-deployment.svg",
    urlLink:"ca/application-consulting-services",
    "title": "Expert Android Developers",
    "decs": <p className='break-all text-slate-800 line-clamp-5'>We are one of the first options you should look for before searching for  ‘Android app developer near me’ as we help you leverage the services of expert developers. Our team includes qualified and experienced Android developers who can create different types of Android apps. </p>
  },
  {
    "num": "2",
    "img": "/img/user-centric-design-approach.webp",
    "title": "User-Centric Design Approach",
    "decs": <p className='break-all text-slate-800 line-clamp-5'>Our effectiveness in delivering the best Android apps revolves around the user-centric design approach. We focus on the requirements of users in the app development process to ensure effective personalization of our Android apps. You can rely on our experts to create apps with appealing user experiences. </p>
  },
  {
    "num": "3",
    "img": "/images/control-access.svg",
    "title": "Cutting-edge Technologies",
    "decs": <p className='break-all text-slate-800 line-clamp-5'>You can hire an Android app developer from our team with the assurance of specialization in cutting-edge technologies. Our experts utilize latest technologies, such as Kotlin, Jetpack Compose, Flutter, and other frameworks, to create Android apps with desired features.</p>
  },
  {
    "num": "4",
    "img": "/images/speed-efficiency.svg",
    "title": "Timely Project Delivery",
    "decs": <p className='break-all text-slate-800 line-clamp-5'>We also offer AWS Android app development  and different types of app development services with the assurance of timely delivery. Our workflow for Android app development involves the use of milestones to ensure faster time to market for your apps.</p>
  },
  {
    "num": "5",
    "img": "/img/competitive-pricing-icon.webp",
    "title": "Competitive Pricing",
    "decs": <p className='break-all text-slate-800 line-clamp-5'>Our Android app development cost is significantly competitive as we focus on delivering app development services at cost-effective prices. We pay attention to the optimal use of resources so that your app development projects are beneficial for you and our team. </p>
  },
  {
    "num": "6",
    "img": "/img/competitive-pricing-icon.webp",
    "title": " Client Testimonials",
    "decs": <p className='break-all text-slate-800 line-clamp-5'>The best way to determine our effectiveness in Android native app development is to outline our client testimonials. You can use our client testimonials to find a clear impression of our effectiveness in serving the app development needs of our clients.</p>
  }
];

const LatestTechno = [
  {
    "num": "01",
    "title": "We have a team of certified developers",
  },
  {
    "num": "02",
    "title": "We have an extensive portfolio of successful Android projects",
  },
  {
    "num": "03",
    "title": "Our experts have an in-depth understanding of latest Android trends",
  },
  {
    "num": "04",
    "title": "Our developers have excellent skills in collaboration and communication ",
  }
  ,
  {
    "num": "05",
    "title": "Our development team also complies with Google Play Guidelines",
  }
];
const Qa = [
  {
    num: "1",
    title: "Make the Most of Our Engagement Models",
    desc: "We are the most popular platform for Android application development services with different types of engagement models. You can use our following engagement models depending on your requirements and goals for Android app development. "
  },
];

export default function Mobile(props) {
  let { initialData } = props;

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Head>
        <title>Best Custom Android App Development Company in India and the USA | Comfygen
        </title>
        <meta name="description" content="Get started with Top-class Android App Development Company based in India and USA. We create innovative mobile apps that engage your users. Comfygen builds Custom Android apps from scratch, design user-friendly interfaces, and optimize for performance." />
        <link rel="canonical" href="https://www.comfygen.com/android-app-development" />
        <meta property="og:locale" content="en-us" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Trusted Android App Development Company In India & USA | Comfygen " />
        <meta property="og:description" content="Comfygen is a Premier Android App Development Company In India & The USA. We create custom Android apps from scratch, prioritize user-friendly design, optimize performance, and offer tailored solutions for startups and enterprises. Contact us today! " />
        <meta property="og:url" content="https://www.comfygen.com/android-app-development" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-10-13T10:04:03+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/services/mltichain-Blockchain-Development-Services.png?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.comfygen.com/ios-app-development" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-12-26T08:12:32+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/blockchain-mim-software.png?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
      </Head>
      <div className="overflow-hidden">
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}>
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionFormForAndroid
                heading='Best Custom Android App Development Company'
                ptag="How do you plan to market the app, and do you need any integrations with existing systems, as well as specific apps you admire for inspiration? Choose a prominent Best Custom Android App Development Company In India & The USA like Comfygen to popularize your brand online and stand out from the crowd. "
                ptag2='We have an expert team of Android app developers to work on all the issues and details related to Android app development services. We have taken care of the latest conventions with better user engagement and cutting-edge technologies in Custom android app development. Connect with us to develop sustainable and customized Android app development services!'
                li='Custom Android Mobile App Development'
                li1='Android App Migration & Upgrades'
                li2='Native Android App Development'
                li3=' Android Mobile App Integrations'
                li4='E-Commerce Android App Development'
                li5='Android App UI/UX Development'
                li6='Android Web-based App Development'
                li7=' Android App Support & Maintenance'
                btnName="Discuss Now"
                btnLink='/contact-us'
              />
            </div>
          </div>
        </div>
        <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 py-10">
          <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0 ">
            <Image
              src="/img/your-android-app-dev.webp"
              alt="Your Android App Development Partner"
              className="rounded-lg"
              width={500}
              height={500}
            />
          </div>
          <div className="w-full space-y-4 text-center md:text-left">
            <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Your Android App Development Partner
            </h2>
            <div className="space-y-2">
              <p className="text-base text-black text-justify">
                The scope for developing Android applications is better than ever as businesses want to reach their customers on mobile phones. We are a reliable <b>Android app development company </b> with the capabilities you need to build a successful application tailored to your user preferences. Our clients trust us to deliver the best value of personalization in their apps. </p>
              <div className="flex justify-start items-start mt-5">
                <ConnectWithExpertButton url={"/contact-us"} title={"LET'S CONNECT TO DISCUSS A PROJECT"} />
              </div>
            </div>
          </div>
        </section>
        <div className='bg-[#0F1628] py-10 '>
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 ">
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                The Android App Development Landscape</h2>
              <div className="space-y-2">
                <p className="text-base text-white text-justify">
                  The Android app development landscape has been evolving at a rapid pace with the arrival of new types of devices. As the <b> top Android app development company,</b> we stay updated with latest trends and developments in the industry. We know that businesses have to adapt to latest technologies, such as artificial intelligence and augmented reality. In addition, businesses need faster time to market their apps compared to industry standards.</p>
                <div className="flex justify-start items-start mt-5">
                  <ConnectWithExpertButton url={"/contact-us"} title={"Let’s Discuss"} />
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full lg:justify-end pt-10 lg:pt-0 ">
              <Image
                src="/img/the-android-app-dev.webp"
                alt="The Android App Development Landscap"
                className="rounded-lg"
                width={500}
                height={500}
              />
            </div>
          </section>
        </div>
        <ContactFromCenter />
        <div className="py-10 bg-white">
          <section className="w-11/12  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto space-y-4">
            <div className="flex flex-col justify-center  mx-auto text-center">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                Android
                <span className="text-blue-500"> App Development Services</span> Offered by Us
              </h2>
              <p>We offer a curated selection of <b> Android app development services </b> to help you find solutions to all your Android development needs in one place. Take a look at the special highlights of what you can get with us when creating Android apps. </p>
            </div>
            <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10" >
              {ChooseUs.map((elem) => {
                const { title, icon, decs, num } = elem;
                return (
                  <ServiceSection
                    key={num}
                    Icon={icon}
                    title={title}
                    Ptag={decs}
                  />
                );
              })}
            </div>
            <div className="flex justify-center items-center mt-5">
              <ConnectWithExpertButton url={"/contact-us"} title={"NEED ASSISTANCE WITH YOUR PROJECT"} />
            </div>
          </section>
        </div>
        <div className="bg-center bg-no-repeat bg-cover " style={{ backgroundImage: `url("/img/decentralized-exchange-img.webp")` }}>
          <section className="items-center w-11/12 py-20  space-y-10  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:flex md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-center md:text-left" >
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-1">
                <div>
                  <div className="flex flex-col space-y-2">
                    <h2 className="py-2 lg:py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">Our Technology Stack for delivering best Android App</h2>
                    <p>You can <b>hire Android developers</b> from our team with the assurance of expertise in the modern technology stack to create Android apps.</p>
                    <div>
                      <h3 className=" text-1xl lg:text-2xl font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">Detailed Technologies Used:</h3>
                    </div>
                    <div className="flex justify-start items-center mt-5">
                      <ConnectWithExpertButton url={"https://api.whatsapp.com/send?phone=919587867258"} title={"Connect with IT Experts"} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className={`${styles.TechnologyStack} grid gap-10 p-8 text-left lg:grid-cols-1 md:grid-cols-1 max-h-[500px] overflow-auto `}>
                    {WhyChoosed.map((elem) => {
                      const { title, img, decs, num } = elem;
                      return (
                        <div key={num}
                          className="group border-b-2 border-[#0E1F51] pb-6 space-y-4 transition-all duration-200  cursor-pointer " >
                          <div className="flex items-center justify-start">
                            <div className="flex items-center justify-center gap-3 ">
                              <Image src={img} alt="" width={40} height={40} />
                              <h3 className="text-2xl font-semibold ">
                                {title}
                              </h3>
                            </div>
                          </div>
                          <div className='space-y-3'>
                            {decs}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>
            </div>
          </section>
        </div>
        <WhyChoose Whychoose={JSON_DATA.Whychoose} Bestchoice={JSON_DATA.Bestchoice} />
        <div className="bg-center bg-no-repeat bg-cover bg-fixed " style={{ backgroundImage: `url("/img/android-process-bg.webp")` }}>
          <section className=" py-4 lg:py-20  bg-[rgba(5,10,20,.95)]/30"  >
            <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
              <div className="space-y-4">
                <div className="flex flex-col justify-center text-center ">
                  <h2 className="py-2 text-2xl lg:text-4xl text-[#fff] font-bold  leading-tight lg:leading-[3rem] ">Working <span className="text-[#B564C0]"> Methodology Use  </span> By Us To Develop Android App  </h2>
                  <p className='text-white'>We are a trusted <b>Android app development company in India</b>  with a comprehensive and tested workflow to create Android applications. Our custom app development company can help you enhance your development strategy and offer viable solutions. We focus on the design of seamless experiences alongside creating apps that deliver desired value to the users. Dive deeper into our methodology and how it can help you develop successful Android apps. </p>
                </div>
                <div className={`${styles.timeline}`}>
                  <div className={`${styles.outer}`}>
                    <div className={`${styles.card}`}>
                      <div className={`${styles.info}`}>
                        <h3 className={`${styles.title}`}>Ideation and Conceptualization</h3>
                        <p>The first stage of our development workflow is an effective choice for <b>cloud-based Android app development</b> as it focuses on discovery of ideas. Our consultants work with clients to identify their specific requirements and determine the ideal tools that can help in creating Android apps according to their specifications. </p>
                      </div>
                    </div>
                    <div className={`${styles.card}`}>
                      <div className={`${styles.info}`}>
                        <h3 className={`${styles.title}`}>App Design</h3>
                        <p>Our <b>Android app development services company</b> also specializes in personalized app design to create effective prototypes for Android apps. We use the inputs offered by clients in the ideation stage to design the MVP with all essential features. Our experts can use the app design to check the feasibility of your app idea.</p>
                      </div>
                    </div>
                    <div className={`${styles.card}`}>
                      <div className={`${styles.info}`}>
                        <h3 className={`${styles.title}`}>Development</h3>
                        <p>In the development stage, we shape the Android app into reality by leveraging the app design conceptualized in the previous stage. We are the <b>best Android app development company in India,</b> with specialization in different types of technology to create powerful and efficient apps. Our development team works in coordination with clients to optimize Android apps effectively.</p>
                      </div>
                    </div>
                    <div className={`${styles.card}`}>
                      <div className={`${styles.info}`}>
                        <h3 className={`${styles.title}`}>Testing and Quality Assurance</h3>
                        <p>You can <b>hire Android app development services</b> from Comfygen for the assurance of security and quality. We implement manual and automated testing to check whether your Android app functions according to your specifications. Our testing and quality assurance methods ensure that you get secure Android apps without the concerns of latency. </p>
                      </div>
                    </div>
                    <div className={`${styles.card}`}>
                      <div className={`${styles.info}`}>
                        <h3 className={`${styles.title}`}>Deployment to Google Play Store</h3>
                        <p>Our claims of delivering the <b>best Android app development services</b> also draw the limelight on our capability for deploying apps. We help you make the best practices for deploying your Android apps on Google Play store. Most importantly, our team also pays attention to targeted marketing for your apps.</p>
                      </div>
                    </div>
                    <div className={`${styles.card}`}>
                      <div className={`${styles.info}`}>
                        <h3 className={`${styles.title}`}>Post-Launch Support</h3>
                        <p>We are a top <b> Android app development company in Pune</b> and different locations worldwide for traveling the extra mile for our clients. Our experts can help you with post-launch support services that help you solve all types of concerns with your apps. With a seamless experience for app owners and users, we stand out in the market for our exclusive support services.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center mt-5">
                <ConnectWithExpertButton url={"/contact-us"} title={"SCHEDULE A CALL"} />
              </div>
            </div>
          </section>
        </div>
        <div className="bg-white">
          <section className="items-center py-10 space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 lg:space-y-0">
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                src="/img/we-cater-to-various-.webp"
                alt=" We Cater to various Industries to provide App Development Services"
                className=""
                height={500}
                width={500}
              />
            </div>
            <div className="w-full space-y-2 text-left bg-[#FEEFEB] p-[40px] rounded-[40px]">
              <div className="space-y-3">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  We Cater to various Industries to provide App Development Services
                </h2>
              </div>
              <p className="text-base leading-7 text-black">We are a powerful Android app development company with experience in serving the app development needs of companies in different industries. Our experts have served clients in different industries, such as, </p>
              <ul className="space-y-1">
                {JSON_DATA.myList1.map((item, index) => (
                  <li className="flex" key={index}>
                    <span className="pr-2 mt-1 text-[#4f4f50]">
                      <IoStarSharp className="w-4 h-4" />
                    </span>
                    {item}{""}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        <WhycomfygenSection Qa={Qa} Whycomfygen={Whycomfygen} />
        <section className="py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#0E1F51]  "> Why Choose Comfygen for <span className="text-blue-600">Android App Development?</span></h2>
                <p>Comfygen is a dedicated agency that avails Android app development at affordable costs with the assurance of best results. We offer unique value advantages that make us the ideal destination for Android development for all clients.</p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {Chartacterstics.map((elem) => {
                  const { img, title, decs,urlLink } = elem;
                  return (
                    <div className="border-2 p-6 space-y-4 bg-white rounded-[40px]">
                      <div className="flex items-center justify-start mb-5">
                        <Image
                          src={img}
                          className="object-cover" width={50} height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-lg font-semibold"><a href={urlLink}>{title}</a></h3>
                      {decs}
                    </div>);
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <ConnectWithExpertButton url={"/contact-us"} title={"Get A Free Consultation"} />
              </div>
            </div>
          </div>
        </section>
        <section className="lg:py-16 py-4 bg-[#D0E6F0]">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">Why do you need to Hire our Android App Development Experts? </h2>
              <p className="text-base text-slate-800">Comfygen is a top destination for <b>offshore Android development </b> where you can hire the best developers for Android development projects. We have included professional experts in our team for <b> Android game development</b> and other types of projects. All the experts in our team have been tested for their ability to cater to the requirements of clients in different industries. </p>
              <p className="text-base text-slate-800">You can <b>hire Android developers </b> from our platform with the guarantee of timely delivery of projects. Most important of all, our experts can guarantee that your Android apps can stand up to industry benchmarks. </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {LatestTechno.map((elem) => {
                const { title, num, } = elem;
                return (
                  <div key={num} className="border flex justify-start items-center p-3 space-y-2 shadow border-l-[16px] rounded-l-2xl border-[#16BDFA]">
                    <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">{title}</p>
                  </div>)
              })}
            </div>
          </div>
        </section>
        <section className="bg-center bg-no-repeat bg-cover lazyload bg-fixed " style={{ backgroundImage: `url("/img/hire-ios-mobile-app-developer.webp")` }}>
          <div className='bg-[#000]/80 lg:py-20 py-10'>
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#2563EB]/40 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
          </div>
        </section>
        <TalkExpert />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="" />
        <BlogSection initialData={initialData} />
      </div>
    </>
  );
}
// This gets called on every request
export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}