import React, { useState } from "react";
import { MdOutlineEngineering } from 'react-icons/md';
import Image from 'next/image';
import 'aos/dist/aos.css';
import { FaNetworkWired } from "react-icons/fa";
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import Head from "next/head";
import { RiCustomerService2Fill, RiTodoLine } from "react-icons/ri";
import { AiOutlineDeploymentUnit, AiOutlineMobile } from "react-icons/ai";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/python.json"

const FaqSection = dynamic(() => import('../components/FaqSection'), {
  loading: () => <p>Loading...</p>,
})
const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})
const BlogSection = dynamic(() => import('../components/BlogSection'), {
  loading: () => <p>Loading...</p>,
})
const TalkExpert = dynamic(() => import('../components/TalkExpert'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
const HeroSectionForm = dynamic(() => import('../components/HeroSectionForm'), {
  loading: () => <p>Loading...</p>,
})
const ServiceSection = dynamic(() => import('../components/ServiceSection'), {
  loading: () => <p>Loading...</p>,
})
const HireSection = dynamic(() => import('../components/HireSection'), {
  loading: () => <p>Loading...</p>,
})
const AdviceSection = dynamic(() => import('../components/Advice'), {
  loading: () => <p>Loading...</p>,
})
const NewSection = dynamic(() => import('../components/NewSection'), {
  loading: () => <p>Loading...</p>,
})
const ContactFromCenter = dynamic(() => import('../components/ContactFromCenter'), {
  loading: () => <p>Loading...</p>,
});

const Services = [
  {
    num: '1',
    icon: <MdOutlineEngineering className="text-blue-400" size={60} />,
    title: 'Machine learning solutions',
    decs: 'ML apps developed by our Python developers enable better business decisions by extracting insights from data.'
  },
  {
    num: '2',
    icon: <AiOutlineDeploymentUnit className="text-blue-400" size={60} />,
    title: 'Python CMS development',
    decs: 'We Make your systems relevant by developing a highly scalable CMS web application using Python.  '
  },
  {
    num: '3',
    icon: <RiTodoLine className="text-blue-400" size={60} />,
    title: 'Migration to Python',
    decs: 'Your existing app or website can be seamlessly updated to Python without affecting your data. '
  },
  {
    num: '4',
    icon: <RiCustomerService2Fill className="text-blue-400" size={60} />,
    title: 'Custom Python development',
    decs: 'Our Python developers can develop a customized solution for your business based on Python. '
  },
  {
    num: '5',
    icon: <AiOutlineMobile className="text-blue-400" size={60} />,
    title: 'Python mobile app development',
    decs: 'Our Python developers will create a perfect mobile app for you to make your business stand out.'
  },
  {
    num: '6',
    icon: <FaNetworkWired className="text-blue-400" size={60} />,
    title: 'Django framework development',
    decs: 'High-quality Django-based web development in Python includes scientific computation, statistical analysis, and data science capabilities.  '
  },
]
export default function Altcoin(props) {

  let { initialData } = props;
  let { NewSections, Hire, myList, Frequently } = JSON_DATA

  const [currentCount, setCurrentCount] = useState(0);

  return (
    <>
      <Head>
        <title>Python Development Company In India & The USA | Hire Python Developers</title>
        <meta name="description" content="Looking for a reliable Python Development Company In India & The USA? Comfygen team of expert Python developers can help you build custom web applications, AI solutions, and more. Contact us now." />
        <link rel="canonical" href="https://www.comfygen.com/python-development" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Python Development Company In India & The USA | Hire Python Developers" />
        <meta property="og:description" content="Looking for a reliable Python Development Company In India & The USA? Comfygen team of expert Python developers can help you build custom web applications, AI solutions, and more. Contact us now." />
        <meta property="og:url" content="https://www.comfygen.com/python-development" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-12-26T08:12:32+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/python-development" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
        <meta name='language' content='en-us' />
      </Head>
      <div className='overflow-hidden'>
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading='Python Development Company'
                ptag="We are the top-tier Python Development Company In India & The USA to curate next-level mobile applications and webs. Gain exceptional results from the high performing apps built by the talented & skilled developers. Our professional Python developers have experience and expertise in developing robust, flexible and dynamically performing language permitting the clients to get top-notch webs & apps to attract success."
                btnName="Discuss Now"
                btnLink='/contact-us'
              />
            </div>
          </div>
        </div>
        <NewSection NewSection={NewSections} />
        <ContactFromCenter />
        <div className="py-10 bg-white">
          <section className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Our <span className="text-blue-600">Python Development</span> Services
                </h2>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Services.map((elem) => {
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
          </section>
        </div>
        <AdviceSection
          head='We are Python Development Company '
          heading='Best python web development company'
          ptag='    We are one of the top Python development companies that deliver cutting-edge websites, mobile apps, and web apps using advanced Python frameworks, tools, and programming languages. We ensure error-free product development with innovative project management tools and collaborative tools. You will get seamless integration with APIs and other codes from our development team because we strictly follow international coding standards. Comfygen offers top-notch Python development services for next-generation mobile and web apps. Our solutions are highly scalable, customizable, and responsive due to the use of best-in-class libraries, frameworks, and technologies.'
          imgSrc='/images/python-web-development.webp'
          imgW={564}
          imgH={559}
          altTag='Best python web development company'
        />
        <div className="py-10 ">
          <section className="items-center w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 flex lg:flex-row flex-col-reverse md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51] ">
                  Python App Development <br /> company
                </h2>
              </div>
              <p className="text-base text-black ">
                With over a decade of experience delivering Python solutions, Comfygen has delivered everything from dynamic websites to sophisticated, avant-garde web apps. You can get your dream web or app development project done with Python, an open-source, clear, and powerful object-oriented programming language.By leveraging advanced Python development frameworks, programming languages, and front-end tools, Comfygen delivers high-quality websites, web apps, and mobile applications. We have developers who are proficient in Python web development frameworks such as Django. There are similar frameworks for Python web apps such as Flask, Zope, and Pyramid, among others.
              </p>
            </div>
            <div className="flex justify-center w-full lg:justify-start pb-10 lg:pb-0">
              <Image
                src="/img/python app.webp"
                alt="Python app Development"
                className="rounded-md"
                width={1000}
                height={1000}
                loader={uploadcareLoader}
                unoptimized={true} />
            </div>
          </section>
        </div>
        <div className="py-10 bg-gray-100">
          <section className="items-center w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex lg:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg :justify-start pb-10 lg:pb-0">
              <Image
                src="/img/python-development.webp"
                alt="python development firm"
                className="rounded-md"
                width={600}
                height={600}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>

            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51] ">
                  python development firm
                </h2>
              </div>
              <p className="text-base text-black ">
                With decades of experience working across domains, we specialize in Python development services. With end-to-end Python development capabilities, we help clients unlock value and gain efficiencies. Offering Python development solutions and best-in-class consulting services, we partner with clients to achieve business objectives.
                The latest features and functionality of your web applications can be included with our expertise in Python frameworks such as Django & Flask. Building web apps quickly, efficiently, and with less coding requires the use of several Python frameworks.
              </p>
            </div>
          </section>
        </div>
        <div className="py-10">
          <section className="items-center w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 flex lg:flex-row flex-col-reverse md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51] ">
                  Leading Python Development Company In India
                </h2>
              </div>
              <p className="text-base text-black ">
                Comfygen uses Django Python and Angular 2 for frontend technologies to enable entrepreneurs to build successful start-up businesses.Through the integrated platform, entrepreneurs could confirm start-up ideas through discussion, meet investors to get seed funding, and find competent talent via an integrated recruitment portal. Multi-funding sources are integrated into the platform, all based on cryptocurrencies and blockchain technology. As a result, all three profiles of a creator, a backer, and an employee are seamlessly combined.

                To nurture ideas and turn them into profitable businesses, the solution brings entrepreneurs, investors, and employees together.
              </p>
            </div>
            <div className="flex justify-center w-full lg:justify-end pb-10 lg:pb-0">
              <Image
                src="/img/python-develop.webp"
                alt="Python Web Development"
                className="rounded-md"
                width={600}
                height={600}
                loader={uploadcareLoader}
                unoptimized={true} />
            </div>
          </section>
        </div>

        <section className="py-10">
          <div className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10" style={{ backgroundImage: `url("/img/hire-python-developer.webp")` }}>
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#222285]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={Hire} myList={myList} />
            </section>
          </div>
        </section>

        <div className="py-10">
          <section className="items-center w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex lg:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full md:justify-start pb-6 lg:pb-0">
              <Image
                src="/img/why-choose-us python-developer.webp"
                alt="Why Choose Us As Your Python Development Company?"
                className=""
                width={1000}
                height={1000}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>

            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51] ">
                  Why Choose Us As Your Python Development Company?
                </h2>
              </div>
              <p className="text-base text-black ">
                Comfygen offers our clients the latest and most futuristic Python Development by incorporating it into their projects. Object-oriented programming languages, such as Python, are high-level languages with dynamic semantics. Comfygen is a prominent Python development company with top-of-the-line Python developers who can develop complex Python-driven web applications with in-depth knowledge and experience. As a Python Django web development company, we have experience delivering large-scale projects.

                We strive to build Python desktop and web applications with state-of-the-art industry practices. If you choose Comfygen as your Python development partner, you will get out-of-the-box web solutions based on Python 3.7.0, Django, Web2py, and Flask frameworks.

                Our Python web development expertise can help you build a Python web development project. Moreover, we can help identify bottlenecks and optimize your Python application's performance.
              </p>
            </div>
          </section>
        </div>

        <TalkExpert />
        <FaqSection
          faqData={Frequently}
          title="  About python Web development Services" />
        <BlogSection initialData={initialData} />
      </div>
    </>
  )
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