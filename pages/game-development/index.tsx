import Link from 'next/link';
import Image from 'next/image';
import 'aos/dist/aos.css';
import React from 'react'
import Head from 'next/head';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import { ImArrowUpRight2 } from 'react-icons/im';
import dynamic from 'next/dynamic';
import styles from './styles.module.css'
import JSON_DATA from "./json/mobile.json"
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoArrowRedo } from "react-icons/io5";

const HeroSectionForm = dynamic(() => import('../components/HeroSectionForm'), {
  loading: () => <p>Loading...</p>,
})
const Header = dynamic(() => import('../components/Header'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
const SocialTab = dynamic(() => import('./components/TechnoStack'), {
  loading: () => <p>Loading...</p>,
})
const ServiceSection = dynamic(() => import('../components/ServiceSection'), {
  loading: () => <p>Loading...</p>,
})
const TalkExpert = dynamic(() => import('./components/TalkExpert'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
const BlogSection = dynamic(() => import('../components/BlogSection'), {
  loading: () => <p>Loading...</p>,
})
const FaqSection = dynamic(() => import('../components/FaqSection'), {
  loading: () => <p>Loading...</p>,
})
const HireSection = dynamic(() => import('../components/HireSection'), {
  loading: () => <p>Loading...</p>,
})
const AdviceSection = dynamic(() => import('../components/Advice'), {
  loading: () => <p>Loading...</p>,
})
const ContactFromCenter = dynamic(() => import('../components/ContactFromCenter'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
const TechnoStack = dynamic(() => import('./components/TechnoStack'), {
  loading: () => <p>Loading...</p>,
})

const BreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Books",
    "item": "https://example.com/books"
  }]
};
const ldJson = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "Top Mobile App Development Company | Comfygen",
  "url": "https://www.comfygen.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "{search_term_string}",
    "query-input": "required name=search_term_string"
  }
};
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Comfygen",
  "url": "https://www.comfygen.com/",
  "logo": "https://www.comfygen.com/svg/comfygen-logo.svg",
  "sameAs": [
    "https://twitter.com/comfygentech",
    "https://www.instagram.com/comfygen_",
    "https://www.linkedin.com/company/comfygen-private-limited",
    "https://www.facebook.com/comfygen"
  ]
};
const ProductSchema = {
  "@context": "http://www.schema.org",
  "@type": "product",
  "brand": "Comfygen",
  "name": "Mobile App Development Agency - Mobile Application Development Company",
  "image": "https://comfygen.com/img/explore-success-with-our-mobile-app-development-agency.webp",
  "description": "Comfygen is a top mobile application development company. We provide the best Mobile application development services and custom mobile app development services to enterprises & startups worldwide.",
  "aggregateRating": {
    "@type": "aggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1124"
  }
};
const Arena = [
  {
    num: "01",
    icon: <Image src="/img/extended-market-reach.webp" alt="Extended Market Reach" width={60} height={60} />,
    title: "Health Tracking",
    decs: "With the health tracking features, one is able to see how his body is responding. He can check his pulses, blood pressure, monitor how his body is keeping the health measurements, and more. Additionally, you can also monitor mental health if the application is integrated with certain advanced features. ",
  },
  {
    num: "02",
    icon: <Image src="/img/better-user-engagement.webp" alt="Better User Engagement" width={60} height={60} />,
    title: "Fix your Appointment",
    decs: "The mhealth apps can fix your appointment to the doctor through the app itself. Users can search for the healthcare professionals, and then fix their appointment to any medical professionals; be it cardiologists, physiotherapist, orthopedics, or anyone.",
  },
  {
    num: "03",
    icon: <Image src="/img/promotes-financial-inclusion.webp" alt="Promotes Financial Inclusion" width={60} height={60} />,
    title: "Video Consultation ",
    decs: "If you are unable to visit any medical professional personally but need his assistance; the mHealth apps can provide video consultations. You can process remote diagnosis through it, and get the disease treated from your comfort space. ",
  },
  {
    num: "04",
    icon: <Image src="/img/improved-speed-of-financial-services.webp" alt="Improved Speed of Financial Services" width={60} height={60} />,
    title: "Patient’s Data Storage ",
    decs: "Have you heard of Electronic Health Record (EHR) apps? We can build that with significant features to keep the patient's data secured and encrypted. Professionals can store prescriptions, test reports, medical analysis reports, preventions, treatment history, etc. It is hard to manage all this data, but with the help of EHR; these records can be settled easily. ",
  },
  {
    num: "05",
    icon: <Image src="/img/security-and-risk-management.webp" alt="CSecurity and Risk Management" width={60} height={60} />,
    title: "Symptom-Checker (ai-Driven) ",
    decs: "We can integrate an advanced AI-Driven feature called “Symptom Checker.” This feature enables the users to self-assess their symptoms and then examine their health status. The feature can properly examine and tell if you need any medical help. Also, one can make better suggestions to keep them healthy through healthcare apps.  ",
  },
  {
    num: "06",
    icon: <Image src="/img/efficient-data-management.webp" alt="Efficient Data Management" width={60} height={60} />,
    title: "Medication Reminders  ",
    decs: "It often happens that patients forget to take their medications on time. Now you have the tech-enabled feature called medication reminder, which reminds with an alarm to the patient intake their medication on time. This feature will also keep your app stand-out alone among other competitors. ",
  }
];
const WhyChooses = [
  {
    num: "1",
    bg: "#F45F391A",
    icon: <IoArrowRedo size={60} className="text-blue-500" />,
    title: "Conceptualization is the Key ",
    decs: "The development and final product always depends upon how well you have researched and conceptualized the software. Our senior developers and project managers will meticulously analyze the requirements to learn about client's expectations. Despite knowing the client's plans; we conduct a deep research on market trends, competitors, and standards to know what best to build.  ",
  },
  {
    num: "2",
    bg: "#6C54DE1A",
    icon: <IoArrowRedo size={60} className="text-blue-500" />,
    title: "Design Healthcare App ",
    decs: " You can trust our stupendous and creative UX/UI designers to create a super-engaging app. The experts can make your mHealth app super-engaging with attractive designs and user-friendly interfaces. We try to build an app with seamless navigation; so that users are able to use the application smoothly with no hassles. Our designs won’t only showcase the brand strength, but it also targets better usability for longer engagement. ",
  },
  {
    num: "3",
    bg: "#82AB101A",
    icon: <IoArrowRedo size={60} className="text-blue-600" />,
    title: "Healthcare App Development  ",
    decs: "Having a team of experienced Hybrid app developers who are familiar with Hybrid development frameworks, we are one of the top Hybrid app development companies in India, the USA, and the UAE.    ",
  },

];
const Finance = [
  {
    num: "01",
    icon: <Image src="/img/defi-dapp-development.webp" alt="Casino Game Development Company in India" width={60} height={60} />,
    title: "Frontend Programming",
    decs: "Our developers use programming languages such as HTML, CSS, JavaScript and HTML5. In addition, we also leverage JavaScript frameworks such as Angular, React, Meteor, Ember, Vue and NEXT for creating finance apps. ",
  },
  {
    num: "02",
    icon: <Image src="/img/defi-token-development.webp" alt="Casino Game Development Company in India" width={60} height={60} />,
    title: "Backend Programming",
    decs: "We specialise in banking and finance app development with our capabilities to use the top backend programming languages. You can rely on our expertise in languages such as PHP, Microsoft.NET, Go, Python, Node.js and Java for backend programming.",
  },
  {
    num: "03",
    icon: <Image src="/img/decentralized-exchange-development.webp" alt="Casino Game Development Company in India" width={60} height={60} />,
    title: "Mobile and Desktop Frameworks",
    decs: "We utilise the latest frameworks for fintech app development on mobile and desktop devices to ensure that your fintech apps work seamlessly across different platforms. We specialise in Android, iOS, Xamarin and Cordova for mobile development and C++, Python and QT for desktop app development.",
  },
  {
    num: "04",
    icon: <Image src="/img/service-for-ico-development.webp" alt="Casino Game Development Company in India" width={60} height={60} />,
    title: "Cloud Database Technology",
    decs: "Our finance app development services stand out in the market for offering the benefits of cloud computing. Our developers have expertise in cloud platforms such as AWS, Google Cloud Platform and Azure for capitalising on the benefits of scalable cloud storage for fintech apps.    ",
  }
];

export default function Mobile(props) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>Healthcare App Development Company  USA, UAE, UK | Comfygen</title>
        <meta property="og:title" content="Top-notch Mobile App Development Company USA, UAE, UK | Comfygen" />
        <meta name='description' content='Comfygen is a leading top-notch mobile application development agency in India, UK, UAE & USA that offers iPhone/iOS, Android app development services from startup to enterprise-level company. Contact Us today!' />
        <link rel='canonical' href='https://www.comfygen.com/mobile-app-development' />
        <meta name='robots' content='index,follow' />
        <meta charSet="UTF-8" />
        <meta property="og:facebook_title" content="Mobile App Development Services | Best App Development Company" />
        <meta property="og:facebook_description" content="Unlock your business's global potential with our expert mobile app developers, delivering custom, user-friendly solutions to elevate your brand's presence in the marketplace." />
        <meta property="og:twitter_title" content="Best Mobile App Development Agency India & USA | Comfygen" />
        <meta property="og:twitter_description" content="Comfygen, a Best mobile application development company in India, UK, UAE & USA that offers iPhone/iOS, Android app development services from startup to enterprise level company." />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name='copyright' content='Comfygen Private Limited' />
        <meta name='language' content='ES' />
        <meta name='abstract' content=' Mobile App Development Company' />
        <meta name='summary' content='Comfygen is the top mobile app development Industry in India.' />
        <meta name='author' content='Mr. Saddam Husen, sales@comfygen.com' />
        <meta name='reply-to' content='sales@comfygen.com' />
        <meta name='owner' content='A Founder is one of the individuals who helped establish a mobile application development agency, startup or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement.' />
        <meta name='Mobile Application Development Company' content='Comfygen is a top-notch Mobile app development organization in the USA. Get ahead of the competition with the top mobile app development company in the USA. Our expert team can bring your ideas to Business Goal.' />
        <meta name='category' content='Mobile App Development Company' />
        <meta name='coverage' content='Worldwide' />
        <meta name='distribution' content='Global' />
        <meta name='rating' content='General' />
        <meta name='subtitle' content='Mobile App Development Organization' />
        <meta name="MobileOptimized" content="320" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='og:country-name' content='India, USA, UK, UAE' />
        <meta name='og:latitude' content='26.912434°' />
        <meta name='og:longitude' content='75.787271°' />
        <meta property='og:type' content='Mobile App Development Company' />
        <meta name="google-site-verification" content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg" />
        {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ProductSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org/", "@type": "WebSite", "name": "Top Mobile App Development Company | Comfygen", "url": "https://www.comfygen.com/", "potentialAction": { "@type": "SearchAction", "target": "{search_term_string}", "query-input": "required name=search_term_string" } }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Comfygen",
            "legalName": "Comfygen Pvt. Ltd.",
            "url": "https://www.comfygen.com/",
            "logo": "https://www.comfygen.com/svg/comfygen-logo.svg",
            "foundingDate": "2019",
            "founders": [
              {
                "@type": "Person",
                "name": "Saddam Husen"
              },
              {
                "@type": "Person",
                "name": "Saddam Husen"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "F-152, Dayanand Marg, Nemi Nagar",
              "addressLocality": "Vaishali Nagar",
              "addressRegion": "Jaipur, Rajasthan, India",
              "postalCode": "302021",
              "addressCountry": "India"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "telephone": "+91 9587867258",
              "email": "sales@comfygen.com"
            },
            "areaServed": ["US", "CA", "GB", "AD", "AU", "AT", "BS", "BH", "IO", "KM", "CU", "AR", "CW", "CY", "DK", "DM", "EG", "FK", "FI", "FR", "DE", "GR", "GL", "HK", "IS", "IN", "ID", "IT", "JP", "JE", "JO", "KW", "KG", "KR", "MX", "FM", "NZ", "NI", "OM", "PE", "PH", "PL", "PT", "QA", "RO", "RU", "SA", "SG", "SE", "SZ", "CH", "TH", "TR", "TN", "UA", "UM", "AE", "039", "155", "154", "151", "150"],
            "sameAs": [
              "https://twitter.com/comfygentech",
              "https://www.instagram.com/comfygen_/?hl=en",
              "https://www.linkedin.com/company/comfygen-private-limited",
              "https://www.facebook.com/comfygen"
            ]
          })
        }} /> */}
      </Head>
      <div className="">
        <section className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }} >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-36 py-10">
              <HeroSectionForm
                heading='Healthcare App Development Company '
                ptag='It’s time to take the healthcare service industry to next-gen tech levels with Comfygen, which is the best healthcare app development company. We design tailored healthcare mobile applications compiled with HIPAA and other latest health technology revolutions. We are facilitating clinics, medical organizations, huge hospitals, and other healthcare segments with some super-efficient custom healthcare solutions, which reduces the operational costs and streamline the workflow indeed. We build mobile apps for healthcare, which does not only profit the business but ease the users to process certain things. Get Ready to be Revolutionized, Get Ready to be the Change. 
                ”'
                btnName="Discuss Now"
                btnLink='/contact-us'
                imgSrc='/img/mobile-app-development.webp'
                Width={406}
                Height={597}
                altTag='Best Mobile App Development Company'
              />
            </div>
          </div>
        </section >
        <AdviceSection
          heading='Prominent Healthcare Application Development '
          ptag='Whether you want to streamline the healthcare workflow or to automate tasks for improved efficiency; we are your one stop healthcare app development company. No matter what kind of application, solutions, and technologies client’s ask to explore, we cover them all with excellence. Our team of healthcare app developers can build mhealth apps for iOS, android, and cross-platform though.  '

          ptag1="Comfygen will assist you professionally and elevate the profitability experience with its super-efficient next-gen solutions. Our process drives agile development ensuring 100% clientele satisfaction. The development for healthcare apps and software won’t entertain the leverages of enterprises only; but also we believe in sustaining the user-engagement to keep the app alive & thriving in the marketplace for longer. "
          ptag2="Let’s discuss what you want for the healthcare industry; be it on-demand doctor visiting & scheduling apps, medical record apps, telemedicine apps, healthcare wearable apps, medical imaging app solutions, or any other. We adhere to the knowledge and expertise to build all types of healthcare apps consisting of all latest technologies and trends."
          imgSrc='/img/unlock-the-value-advantages-of-fintech-with-reliable-finance-app-development-services.webp'
          imgW={700}
          imgH={700}
          altTag='App Developers to Build Interactive Mobile Apps' />
        <ContactFromCenter />


        <section className='bg-[#DBEAFE]'>
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-14 ">
            <div className="space-y-4 text-center col-span-3">
              <h2 className="text-4xl font-bold text-center text-[#0E1F51] "> Digitize the Medical Industry with  <span className='text-[#BE5EBC]'> Innovative Healthcare App Development Services</span> <br></br>  </h2>
              <p className="text-base text-slate-800 text-center ">Comfygen provides end-to-end encrypted healthcare app development services, where we revolutionize every segment of the healthcare industry. We believe in driving healthcare workflows and operations seamlessly with the help of super-efficient technologies.

              </p>
            </div>
            <div className="grid gap-16 lg:grid-cols-3 md:grid-cols-2 xl:gap-12 py-10">

              {JSON_DATA.AppService.map((elem) => {
                const { title, img, decs, num } = elem;
                return (
                  <>
                    <div key={num} className=" p-6 space-y-4 bg-white border rounded-xl hover:translate-y-3 group hover:bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] transition-all duration-700 ease-in-out">
                      <div className="flex items-center m-auto	 justify-center w-16 h-16 p-2 text-xl font-semibold bg-[#FFEDD5] group-hover:bg-white rounded-full  ">
                        <Image width={35} height={35} src={img} alt={title} title={title} className="" />
                      </div>
                      <h3 className="text-lg font-extrabold text-[#0E1F51] group-hover:text-white transition-all duration-200 text-center">{title}</h3>
                      <p className="font-medium text-center text-black group-hover:text-white break-all transition duration-200 ease-in-out">{decs}</p>
                    </div>
                  </>
                )
              })
              }
            </div>
          </div>
        </section>

        <SocialTab />


        <section className="py-10  bg-[#F3F4F6]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">Technology Stack Used for  <span className='text-[#BA68C8]'>Finance App Development Services</span></h2>
                <p className="text-base text-slate-800">We are a reputed provider of mobile app development financial services with a specialisation in using an effective technology stack. Our developers use the latest technologies to improve the quality and performance of fintech apps.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 py-10 text-left">
                {JSON_DATA.CryptoUser.map((elem) => {
                  const { title, num, item, item1, item2, item3, item4, item5, item6, item7 } = elem;
                  return (
                    <div key={num} className="space-y-4 border p-6 bg-[#DBEAFE] rounded-xl">
                      <p className="text-2xl font-bold">{title}</p>

                      <ul className='space-y-2'>
                        {item && (
                          <li className="flex text-base text-black/80">
                            <span className="pr-2 mt-1.5 text-[#4f4f50]">
                              <IoArrowRedo className="w-4 h-4 text-[#BA68C8]" />
                            </span>
                            {item}
                          </li>
                        )}
                        {item1 && (
                          <li className="flex text-base text-black/80">
                            <span className="pr-2 mt-1.5 text-[#4f4f50]">
                              <IoArrowRedo className="w-4 h-4 text-[#BA68C8]" />
                            </span>
                            {item1}
                          </li>
                        )}
                        {item2 && (
                          <li className="flex text-base text-black/80">
                            <span className="pr-2 mt-1.5 text-[#4f4f50]">
                              <IoArrowRedo className="w-4 h-4 text-[#BA68C8]" />
                            </span>
                            {item2}
                          </li>
                        )}
                        {item3 && (
                          <li className="flex text-base text-black/80">
                            <span className="pr-2 mt-1.5 text-[#4f4f50]">
                              <IoArrowRedo className="w-4 h-4 text-[#BA68C8]" />
                            </span>
                            {item3}
                          </li>
                        )}
                        {item4 && (
                          <li className="flex text-base text-black/80">
                            <span className="pr-2 mt-1.5 text-[#4f4f50]">
                              <IoArrowRedo className="w-4 h-4 text-[#BA68C8]" />
                            </span>
                            {item4}
                          </li>
                        )}
                        {item5 && (
                          <li className="flex text-base text-black/80">
                            <span className="pr-2 mt-1.5 text-[#4f4f50]">
                              <IoArrowRedo className="w-4 h-4 text-[#BA68C8]" />
                            </span>
                            {item5}
                          </li>
                        )}
                        {item6 && (
                          <li className="flex text-base text-black/80">
                            <span className="pr-2 mt-1.5 text-[#4f4f50]">
                              <IoArrowRedo className="w-4 h-4 text-[#BA68C8]" />
                            </span>
                            {item6}
                          </li>
                        )}
                        {item7 && (
                          <li className="flex text-base text-black/80">
                            <span className="pr-2 mt-1.5 text-[#4f4f50]">
                              <IoArrowRedo className="w-4 h-4 text-[#BA68C8]" />
                            </span>
                            {item7}
                          </li>
                        )}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="py-4 lg:py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 ">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">Integrate Prominent Features in
                  <span className='text-[#BA68C8]'>Healthcare Apps </span> </h2>
                <p className="text-base text-slate-800">We assure our professional IT experts that they have proficient knowledge about technologies to integrate in your mHealth apps. Meantime, they also know what are the integral features to add in order to make the app compatible to the market standards.
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Arena.map((elem) => {
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
            </div>
          </div>
        </section>
        <section className='bg-[#DBEAFE]'  >
          <div className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12  mx-auto">
            <div className="flex flex-col justify-center lg:text-center">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl  w-70 font-bold xl:leading-[3rem]">
                Healthcare  <span className="text-blue-500">App Development Process </span></h2>
              <p className='text-base text-slate-800'>Comfygen never fails in serving clients with the excellent and agile development services. We are known to be the best healthcare app development agency for providing a streamlined process of development with no hassle and mistakes. Know our sophisticated process of mHealth app development process:
              </p>
            </div>
            <div className="grid gap-10  py-10 text-left lg:grid-cols-1  xl:gap-8">
              <div >

                <div className={`${styles.maintimeline}`}>
                  <div className={`${styles.timeline}`}>
                    <a className={`${styles.timelinecontent}`}>
                      <span className={`${styles.timelineyear}`}>1</span>
                      <div className={`${styles.timelineicon}`}>
                        <i className={`${styles.fa} ,${styles.farocket}`} aria-hidden="true"></i>
                      </div>
                      <div className={`${styles.content}`}>
                        <h3 className={`${styles.title}`}>Conceptualization is the Key </h3>
                        <p className={`${styles.description}`}>
                          The development and final product always depends upon how well you have researched and conceptualized the software. Our senior developers and project managers will meticulously analyze the requirements to learn about client's expectations. Despite knowing the client's plans; we conduct a deep research on market trends, competitors, and standards to know what best to build.

                        </p>
                      </div>
                    </a>
                  </div>
                  <div className={`${styles.timeline}`}>
                    <a className={`${styles.timelinecontent}`}>
                      <span className={`${styles.timelineyear}`}>2</span>

                      <div className={`${styles.timelineicon}`}>
                        <i className={`${styles.fa} ,${styles.fausers}`} aria-hidden="true"></i>
                      </div>

                      <div className={`${styles.content}`}>
                        <h3 className={`${styles.title}`}>Design Healthcare App </h3>
                        <p className={`${styles.description}`}>
                          You can trust our stupendous and creative UX/UI designers to create a super-engaging app. The experts can make your mHealth app super-engaging with attractive designs and user-friendly interfaces. We try to build an app with seamless navigation; so that users are able to use the application smoothly with no hassles. Our designs won’t only showcase the brand strength, but it also targets better usability for longer engagement.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className={`${styles.timeline}`}>
                    <a className={`${styles.timelinecontent}`}>
                      <span className={`${styles.timelineyear}`}>3</span>
                      <div className={`${styles.timelineicon}`}>
                        <i className={`${styles.fa} ,${styles.facog}`} aria-hidden="true"></i>
                      </div>
                      <div className={`${styles.content}`}>
                        <h3 className={`${styles.title}`}>Healthcare App Development
                        </h3>
                        <p className={`${styles.description}`}>
                          We can build exceptional healthcare mobile apps with an agile development process. Our agenda is simple, to build best and deliver excellence to clients. To ensure our excellence in healthcare app development; we integrate the apps with prominent tech-stacks and advanced technologies like AI, AR/VR, Blockchain, etc. We try our best, and dedicate the project to current and future market needs to let the software stand in the competition for years.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className={`${styles.timeline}`}>
                    <a className={`${styles.timelinecontent}`}>
                      <span className={`${styles.timelineyear}`}>4</span>
                      <div className={`${styles.timelineicon}`}>
                        <i className={`${styles.fa} ,${styles.faheart}`} aria-hidden="true"></i>
                      </div>
                      <div className={`${styles.content}`}>
                        <h3 className={`${styles.title}`}>Healthcare App Testing
                        </h3>
                        <p className={`${styles.description}`}>
                          We claim to be honest and dedicated towards the projects; therefore we pay significant attention to the testing and quality assurance segment. Comfygen has support of experienced and expert quality testers; who analyze and identify the bugs, technical errors, mistakes, additional factors, etc in the application to deliver the best and right software in client’s hands.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className={`${styles.timeline}`}>
                    <a className={`${styles.timelinecontent}`}>
                      <span className={`${styles.timelineyear}`}>5</span>

                      <div className={`${styles.timelineicon}`}>
                        <i className={`${styles.fa} ,${styles.faglobe}`} aria-hidden="true"></i>
                      </div>
                      <div className={`${styles.content}`}>
                        <h3 className={`${styles.title}`}>Healthcare App Deployment
                        </h3>
                        <p className={`${styles.description}`}>
                          We are a cross-platform app development company, which is proficient in launching mobile apps on PlayStore, AppStore, and even Both. As per our respective client’s targeted marketbase, as well as keeping the deployment platform guidelines in mind; we launch applications following high-security  measures.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className={`${styles.timeline}`}>
                    <a className={`${styles.timelinecontent}`}>
                      <span className={`${styles.timelineyear}`}>6</span>

                      <div className={`${styles.timelineicon}`}>
                        <i className={`${styles.fa} ,${styles.faapple}`} aria-hidden="true"></i>
                      </div>
                      <div className={`${styles.content}`}>
                        <h3 className={`${styles.title}`}>Application Support & Maintenance
                        </h3>
                        <p className={`${styles.description}`}>
                          Our healthcare app development service does not end with software development only. We encourage and extend our services till app’s support & maintenance or post-deployment services; where we ensure to cross-verify how the mHealth is responding in market, where is the lack, what needs to eliminate, what’s more to add, etc. As per the healthcare app performance among targeted audience and marketplace; we make the changes to keep it competitive in the market.
                        </p>
                      </div>
                    </a>
                  </div>
                  {/* <div className={`${styles.timeline}`}>
                    <a href="#" className={`${styles.timelinecontent}`}>
                      <span className={`${styles.timelineyear}`}>2017</span>

                      <div className={`${styles.timelineicon}`}>
                        <i className={`${styles.fa} ,${styles.faedit}`} aria-hidden="true"></i>
                      </div>
                      <div className={`${styles.content}`}>
                        <h3 className={`${styles.title}`}>JavaScript</h3>
                        <p className={`${styles.description}`}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                      </div>
                    </a>
                  </div> */}
                </div>

              </div>





            </div>
            <div className="flex justify-center items-center">
              <a href='https://api.whatsapp.com/send?phone=919587867258' >
                <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  Let's Communicate With IT Expert!
                </button>
              </a>
            </div>
          </div >
        </section>



        {/* <section className="py-10  bg-[#F3F4F6]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">Healthcare App   <span className='text-[#BA68C8]'>Development Process </span></h2>
                <p className="text-base text-slate-800">Comfygen never fails in serving clients with the excellent and agile development services. We are known to be the best healthcare app development agency for providing a streamlined process of development with no hassle and mistakes. Know our sophisticated process of mHealth app development process:
                </p>
              </div>
              <div className="grid gap-6 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
              {WhyChooses.map((elem) => {
                const { title, icon, decs, num } = elem;
                return (
                  <div key={num}
                    className="group border p-6 space-y-4 transition-all duration-200  group-hover:w-56 group-hover:h-56  rounded-[40px]  cursor-pointer " style={{ backgroundColor: elem.bg }} >
                    <div className="flex items-center justify-start">
                      <div className="flex items-center justify-center w-24 h-24">
                        {icon}
                      </div>
                    </div>
                    <div className='space-y-3'>
                      <h3 className="text-lg font-semibold ">
                        {title}
                      </h3>
                      <p className="break-all text-slate-800 ">
                        {decs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            </div>
          </div>
        </section> */}
        <div className="md:py-10">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">

            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Technologies Involved in Healthcare App Development

              </h2>
              <div className="space-y-2">
                <p className="text-base text-black text-justify">
                  Comfygen provides cutting-edge healthcare app development solutions, where we embark our software with best tech-stacks to make it globally approachable. Some technologies are right here to let our clients know where they are heading:
                </p>


                <div className="pt-4">
                  <a href="/contact-us" >
                    <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-[#6B8DDA]  rounded cursor-pointer text-white w-fit group">
                      Let’s Discuss
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="/img/comfygen-translate-your.webp"
                alt="Empowering Multiple Industries with the Potential of Stellar"
                className="rounded-lg"
                width={600}
                height={350}
              />
            </div>
          </section>
        </div>

        <div className="md:py-10">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="/img/we-offer-fintech-app-development-services-for-different-finance-verticals.webp"
                alt="Empowering Multiple Industries with the Potential of Stellar"
                className="rounded-lg"
                width={600}
                height={350}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Trending Technologies Involved in mHealth Apps
              </h2>
              <div className="space-y-2">
                <p className="text-base text-black text-justify">
                  How can we forget about the current market technology trends? We will never disappoint you, when it comes to beat the market competitors with some advanced technologies to integrate in the mHealth apps:
                </p>
                {/* <ul className='space-y-2 text-left'>
                  {JSON_DATA.myList3.map((item, index) => (
                    <li className="flex text-base text-black/80" key={index}><span className="pr-2 mt-1.5 text-[#4f4f50]">
                      <MdKeyboardArrowRight className="w-4 h-4" />
                    </span>{item} </li>
                  ))}
                </ul> */}
                <div className="pt-4">
                  <a href="/contact-us" >
                    <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-[#6B8DDA]  rounded cursor-pointer text-white w-fit group">
                      Let’s Discuss
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>


        {/* <section className="py-10 bg-[#DBEAFE]">
          <div className='' >
            <section className="w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0  bg-[#522FFFCC]/70 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
          </div>
        </section> */}

        <TalkExpert />
        {/* <FaqSection
          faqData={JSON_DATA.Frequently}
          title="" /> */}
        <BlogSection initialData={initialData} />
      </div >
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