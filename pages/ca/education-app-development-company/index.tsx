import Link from "next/link";
import Image from "next/image";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { ImArrowUpRight2 } from "react-icons/im";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";
import JSON_DATA from "./json/applicationConsulting.json";
import LazyLoad from "react-lazy-load";
import { MdControlPointDuplicate } from "react-icons/md";
import Providers from "./components/Providers";
import HireSection from "./components/HireSection";

const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../../components/Header"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);
const GetinTouch = dynamic(() => import("../components/Getintouch"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Demand = [
  {
    img: "/img/educational-mobile-app-development.webp",
    head: "Educational Mobile App Development",
    dec: "Educational mobile apps make learning opportunities available to students of all ages. These are apps that make it possible for students to learn through their phones. An educational mobile app can be installed on a smartphone or a tablet and used to access the internet and learn resources. Our team at Comfygen takes up customized approaches for educational mobile app development that create highly successful educational apps. ",
  },
  {
    img: "/img/educational-wearable-apps-development.webp",
    head: "Educational Wearable Apps Development ",
    dec: "Our team of professional software developers and testers also specializes in creating educational apps that can be installed on wearable devices and mobile gadgets like smartwatches and tags. We help you create wearable apps that will send the students and teachers reminders related to the classes, practice sessions, and other aspects of studies, such as tests. These also help monitor student activity inside a classroom.  ",
  },
  {
    img: "/img/educational-web-app-development.webp",
    head: "Educational Web App Development",
    dec: "Our team of professionals also recognizes how important it is to create apps that can be accessed from any device. With the development of web educational apps, we ensure that students can easily access your services and study material through just a browser. Apart from full-fledged mobile apps, we also specialize in making web apps that are easy to use and accessible for students from anywhere.",
  },
  {
    img: "/img/educational-app-development.webp",
    head: "Educational App Development ",
    dec: "Through educational app development solutions, our team aims to create solutions that will connect teachers with students and help expand the knowledge ecosystem. Our software development team takes a fresh approach to new ideas and creates software that can be used on multiple devices to help students study and improve their knowledge levels.",
  },
  {
    img: "/img/remote-learning-apps.webp",
    head: "Remote Learning Apps",
    dec: "Our team uses its skills and technical knowledge to create applications that come with remotely enabled systems for learning and teaching. We create apps that have remote learning access so students can learn from anywhere and teachers can manage their classrooms from anywhere in the world. We bring teachers and students closer with our advanced remote learning systems.",
  },
  {
    img: "/img/educational-product-development.webp",
    head: "Educational Product Development",
    dec: "Apart from software development and the creation of digital products in the educational ecosystem, our team also specializes in creating physical products and new tools that can be coupled with educational apps and classroom environments for better learning opportunities. Our team conducts product research and creates products that are relevant to your educational institution and ecosystem.",
  },
  {
    img: "/img/educational-crm-solution-development.webp",
    head: "Educational CRM Solution Development",
    dec: "When we create educational mobile apps, we also integrate CRM solutions into them so that teachers can manage their peer relationships, internal workflows, and communication with the parents easily. The CRM solutions ensure that teachers, students, and parents are well connected through the application and can share feedback about the learning processes. We have great CRM solutions that can easily integrate into a new or existing educational application.",
  },
  {
    img: "/img/educational-management-app-development.webp",
    head: "Educational Management App Development ",
    dec: "Comfygen offers development services for educational management applications. We create educational management applications for large-scale school and college chains so that the internal administration and processes can be streamlined and fully managed through an accessible app. We also create office management apps that are specifically designed for the educational sector so that payroll, attendance, and administration of the school staff can be easily managed.",
  },
  {
    img: "/img/classroom-management-application-development.webp",
    head: "Classroom Management Application Development",
    dec: "We create classroom management applications that help teachers manage their students and also create a learning environment in which everything goes on smoothly and without any disturbance. The teacher can keep an eye on the students, track their progress, and manage all the tasks related to individual students through a good classroom management app created by Comfygen.",
  },
  {
    img: "/img/custom-edtech-software-development.webp",
    head: "Custom Edtech Software Development",
    dec: "Customized edtech software development is a process that creates an edtech and edutainment application according to the specific needs and ideas of the innovator. If you want to create an app that is highly specific to your school environment or to your edtech idea, then you should hire our custom edtech development services for the project. We also create customized features for existing educational applications.",
  },
];
const Why = [
  {
    img: "/img/experts-in-edtech-app-development.webp",
    head: "Experts in Edtech App Development",
    dec: "Our team of software developers and designers are experts and experienced professionals specializing in edtech app development. Our professionals know what they need to do to deliver the perfect educational app to your company. If you want to hire a highly professional software development team that handles the project expertly, then you need to choose Comfygen.",
  },
  {
    img: "/img/custom-app-development-icon.webp",
    head: "Custom App Development ",
    dec: "If you want to stand ahead of the crowd in the edtech industry, you will need custom app development instead of just generic educational apps. Comfygen and its team can help your company develop highly specific and customized applications that will be path-breaking in the educational industry. ",
  },
  {
    img: "/img/latest-technology.webp",
    head: "Latest Technology",
    dec: "Comfygen uses the most updated and latest technology stack for app development and complete educational app testing. To create the most advanced and useful application for your user base with the latest features, hire our team of professionals who have a deep understanding of the latest trends and tech.",
  },
  {
    img: "/img/long-standing-partnerships.webp",
    head: "Long-standing Partnerships",
    dec: "Our team not only meets your requirements and deadlines but also sticks with you when you need ongoing support and maintenance services. We are a trustworthy educational app development company that is able to create long-term business partnerships with a long list of clientele.",
  },
  {
    img: "/img/top-notch-services.webp",
    head: "Top-notch Services",
    dec: "The software development and testing services we offer in the edtech sector are all top-notch and very efficient. We use our services and professional capabilities to create the best possible digital application that brings in an audience and creates revenue for you. Our clients always claim the best customer satisfaction and high-quality work from our team.",
  },
  {
    img: "/img/amazing-track-record.webp",
    head: "Amazing Track Record",
    dec: "Our track record as an educational mobile app development company is amazing and very successful. We have real success stories from our clients, and our body of work speaks for itself. When working with us, your company will be teaming up with the best professionals in the industry.",
  },
];

export default function Mobile(props) {
  let { initialData } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>
          Education App Development Company in India & USA | Comfygen
        </title>
        <meta
          property="og:title"
          content="Education App Development Company in India & USA | Comfygen"
        />
        <meta
          name="description"
          content="Comfygen is a leading best Education App Development Company In India & The USA, that offers iPhone/iOS ap development and Android app development services from startup to enterprise-level company. Contact Us today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/mobile-app-development"
        />
        <meta name="robots" content="index,follow" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Mobile App Development Services | Best App Development Company"
        />
        <meta
          property="og:facebook_description"
          content="Unlock your business's global potential with our expert mobile app developers, delivering custom, user-friendly solutions to elevate your brand's presence in the marketplace."
        />
        <meta
          property="og:twitter_title"
          content="Best Mobile App Development Agency India & USA | Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen, a Best Education App Development Company  in India, UK, UAE & USA that offers iPhone/iOS, Android app development services from startup to enterprise level company."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content=" Education App Development Company  in India"
        />
        <meta
          name="summary"
          content="Comfygen is the top mobile app development Industry in India."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a mobile application development agency, startup or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Education App Development Company "
          content="Comfygen is a top-notch Mobile app development organization in the USA. Get ahead of the competition with the top Education App Development Company  In India. Our expert team can bring your ideas to Business Goal."
        />
        <meta
          name="category"
          content="Education App Development Company  in India"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Mobile App Development Organization" />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Education App Development Company  In India"
        />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
      </Head>
      <div className="">
        <section
          className="bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className="bg-[#1B1C30CC]">
            <LazyLoad height={60} offset={100}>
              <Header />
            </LazyLoad>
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Education App Development Company "
                ptag="If you are a teacher or an innovator who wants to venture into educational tech or Ed tech, then we are the perfect company for you with Education App Development Services. At Comfygen, we develop and design educational apps with the help of professional educational app developers and testers."
                ptag1="Our Educational App Development Company creates impressive educational app solutions for schools and educational institutions. Our team has more than 15+ years of experience in the educational app development sector, and this has helped us make our mark as a leading educational software development company in India. With the advent of ed tech, you can rely on our team to create and promote a very useful and marketable education application for profits and revenue."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </section>

        <AdviceSection
          heading="Best Educational Application Development Company"
          ptag="Comfygen is the best educational app development company in India if you are looking for a dedicated team of educational app developers who are ready to work on your app project with all hands on deck. We have successfully completed more than 200+ app development projects, and our experienced team is the best at rapid app development for ed tech app projects. "
          ptag1="Our educational app development services are targeted towards creating the best kind of edtech app for our client based on their requirements and brief. We are aiming at creating educational apps that will leave a positive impact on society and its future. We create highly specific and advanced educational apps that improve the educational knowledge flow and help in the teaching and learning process."
          ptag2="By hiring educational app development services from Comfygen Private Limited, you can create an application that will become a pioneer of software and technology in the education sector. We create and provide you with an educational application that you can market to a wide range of students and help them learn better. The educational app will be made using the most feasible and cost-effective methodology of the mobile app development process."
          ptag3="We are the best educational app development company because we take every project for educational app creation very passionately and complete it with a systematic approach. Our eLearning app development services work with an internal and external feedback loop that helps us coordinate and improve throughout the app development process. Our services are easy to hire and work with, so you can get your idea turned into a resourceful and usable educational app as soon as possible."
          imgSrc="/img/educational-application-development-company.svg"
          imgW={664}
          imgH={859}
          altTag="Leading the Future with Application Consultancy Excellence"
        />
        <ContactFromCenter />
        <div className="bg-white">
          <section className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-16">
            <div className="space-y-4 text-center ">
              <div>
                <h2 className="text-4xl font-bold text-[#0E1F51] ">
                  Our Services Related to Educational App Development
                </h2>
                <p className="text-base text-black mt-2">
                  As the most renowned educational app development company, we
                  are offering a range of educational app development services
                  to our clients. Our educational app development services are
                  as follows-{" "}
                </p>
              </div>
            </div>
            <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12 mt-5">
              {JSON_DATA.AppService.map((elem) => {
                const { title, img, decs, num } = elem;
                return (
                  <div
                    key={num}
                    className="p-6 space-y-4 bg-white rounded-xl group border-2 bottom-[#dfdfdf] transition-all duration-200"
                  >
                    <div className="flex items-center justify-center w-16 h-16 p-3 text-xl font-semibold bg-[#3B82F6] rounded-full bg-gradient-to-t">
                      <Image
                        width={100}
                        height={100}
                        src={img}
                        alt={title}
                        title={title}
                        className="w-16"
                      />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 text-left">
                      {title}
                    </h3>
                    <p className="font-medium text-left text-black break-all transition duration-200 ease-in-out">
                      {decs}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <section className="bg-[#eff7ff]">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-16">
            <div>
              <h2 className="text-4xl font-bold text-[#000]  text-center">
                Our Most On-demand Custom Educational Application Development
                Solutions
              </h2>
              <p className="text-base text-black text-center">
                Comfygen is one of the most renowned educational app development
                companies in India, and it also specializes in custom app
                development. Our team of software developers, designers, and
                testers together ensure that you get the best possible
                customized educational app for your audience and your target
                market. Here are some of the top-notch custom educational
                applications that we create and offer to our client companies.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-10 grid-cols-1 mt-8">
              {Demand.map((card) => (
                <div
                  className={`${styles.DemandItem} border-2 border-[#000000c7] p-8 rounded-[20px]`}
                >
                  <div className="border bg-[#000000c7] w-20 h-20 rounded-full flex justify-center items-center ">
                    <img className="w-12 h-12" src={card.img} alt="" />
                  </div>
                  <div className="mt-4">
                    <h2 className="font-semibold lg:text-2xl text-xl">
                      {card.head}
                    </h2>
                    <p className="text-base text-[#000000c7] font-normal">
                      {card.dec}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#3B82F6]">
          <div className="flex flex-col justify-center  w-11/12 mx-auto  2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
              Who Can Avail of our Educational Application Development Services?
            </h2>
            <p className="text-base text-white md:text-center text-justify tracking-tight">
              Our tuition app development services and solutions are open to all
              entrepreneurs who have an idea that can make it big in the edtech
              world but do not know where to start. If you have a general idea
              of the educational problem you want to solve and how to do it but
              lack the technical knowledge for it, then approach Comfygen and
              hire our educational app development services for your next
              project.{" "}
            </p>
            <p className="text-base text-white md:text-center text-justify tracking-tight">
              As one of the best educational app development companies in India,
              we help people and schools create something beneficial for
              students and teachers so that the educational process is smoother
              and more fruitful. Our eLearning application development solutions
              are adopted by teachers, schools, edtech thinkers, innovators, and
              existing application owners.{" "}
            </p>
            <p className="text-base text-white md:text-center text-justify tracking-tight">
              We have helped transform existing education systems into more
              advanced and highly effective, technically enabled learning
              environments that help students learn better. We create
              educational applications and tuition app development solutions for
              the following stakeholders.{" "}
            </p>
          </div>
          <div className="justify-between items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 flex flex-col-reverse lg:flex-row md:space-x-10 md:space-y-0  border-l-4 border-b-4 border-dotted p-4 ">
            <div className="w-full lg:w-1/2 space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-4xl font-bold text-[#fff] ">
                  Educational Apps for School and College
                </h2>
              </div>
              <p className="text-base text-white break w-full lg:w-[85%]">
                Comfygen creates educational apps that help complete
                administrative tasks within a school workflow. We help automate
                and semi-automate the school and college administrative tasks so
                that educational institutions can run more smoothly.
              </p>
            </div>
            <div className="flex justify-center w-full lg:w-1/2 lg:justify-start pb-10 lg:pb-0">
              <Image
                className="rounded-md"
                title=" Educational Apps for School and College"
                alt=" Educational Apps for School and College"
                src="/img/educational-apps-for-school-and-college.svg"
                height={500}
                width={550}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex lg:space-x-10 md:space-y-0 border-r-4 border-b-4 border-dotted p-4">
            <div className="flex justify-center w-full lg:w-1/2 lg:justify-start">
              <Image
                className="rounded-md"
                title="Educational Apps for School Administration"
                alt="Educational Apps for School Administration"
                src="/img/educational-apps-for-school-administration.svg"
                height={400}
                width={550}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-4xl font-bold text-[#FFF] ">
                  Educational Apps for School Administration
                </h2>
              </div>
              <div>
                <p className="text-base text-white break">
                  We create efficient and high-performance apps for
                  administration management and internal workflow so that the
                  administrative departments of schools and colleges can work
                  smoothly with appropriate tools.
                </p>
                <ul className="text-white">
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Student information systems{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Student profile updation and
                    processing{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Attendance tracking for students
                    and staff
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Reports and analytics{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> School timetable management{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Assessment management and
                    scheduling{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Report card generation and
                    sharing{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Messages and internal
                    announcements{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="justify-between items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 flex flex-col-reverse lg:flex-row md:space-x-10 md:space-y-0  border-l-4 border-b-4 border-dotted p-4 ">
            <div className="w-full lg:w-1/2 space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-4xl font-bold text-[#fff] ">
                  Educational Apps for Teachers
                </h2>
              </div>
              <p className="text-base text-white break w-full lg:w-[85%]">
                Our team also creates educational apps for teachers so that they
                can manage their timetables, monitor student progress, and
                produce better learning outcomes. Here are some of the important
                features we include in educational apps for teachers.
              </p>
              <ul className="text-white">
                <li className="flex items-center gap-2">
                  {" "}
                  <MdControlPointDuplicate /> Lesson planning tools and digital
                  plan records{" "}
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <MdControlPointDuplicate /> Digital gradebook with remarks{" "}
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <MdControlPointDuplicate /> Assignment management
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <MdControlPointDuplicate /> All the assessments and quizzes
                  are in one place{" "}
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <MdControlPointDuplicate /> Interactive whiteboard for virtual
                  classes{" "}
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <MdControlPointDuplicate /> Communication tools for student
                  and parent feedback{" "}
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <MdControlPointDuplicate /> Parent meeting schedule management{" "}
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <MdControlPointDuplicate /> Learning resource library{" "}
                </li>
              </ul>
            </div>
            <div className="flex justify-center w-full lg:w-1/2 lg:justify-start pb-10 lg:pb-0">
              <Image
                className="rounded-md"
                title="Educational Apps for Teachers"
                alt=" Educational Apps for Teachers"
                src="/img/Rectangle 39826.svg"
                height={550}
                width={550}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>

          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex lg:space-x-10 md:space-y-0 border-r-4 border-b-4 border-dotted p-4">
            <div className="flex justify-center w-full lg:w-1/2 lg:justify-start">
              <Image
                className="rounded-md"
                title="Educational Apps for Students "
                alt="Educational Apps for Students "
                src="/img/educational-apps-for-students.svg"
                height={400}
                width={550}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-4xl font-bold text-[#FFF] ">
                  Educational Apps for Students{" "}
                </h2>
              </div>
              <div>
                <p className="text-base text-white break">
                  In the present era, students are the most tech-savvy and use
                  the internet for learning. Taking this trend a step further,
                  we create educational applications that are highly beneficial
                  for students as they can learn from anywhere and indulge in
                  continuous learning. As education app developers in India, we
                  aim to use the application to improve learning standards for
                  students. Here are the advanced features that an educational
                  app might have in it for students.{" "}
                </p>
                <ul className="text-white">
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate />
                    Interactive lessons and tutorials{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Homework records and assignment
                    tracking
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate />
                    Quizzes and assignments for practice
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Multimedia learning content
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Gamified elements for easy
                    learning{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Customized learning paths{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Schedule tracking and management{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Reminders for study{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Providers />
        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-16 py-6 bg-white">
          <div className="flex flex-col justify-center mx-auto">
            <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              The Technological Stack We Use For Educational App Development
            </h2>
            <p className="text-base text-slate-800 md:text-center text-justify tracking-tight">
              Our software development services use an extensive collection of
              technical tools and frameworks for the management of edtech app
              development. We provide our clients with the best quality
              developed product with the help of these top-notch tools and the
              most advanced technological stack. Some examples of the type of
              technology we use for educational app development are as follows-
            </p>
          </div>
          <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
            {JSON_DATA.Plateform.map((elem) => {
              const { tittle, decs, num, img } = elem;
              return (
                <div key={num} className="shadow-xl rounded-xl">
                  <div className="flex items-center justify-start px-4 py-3 space-x-3  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]">
                    <div className="flex items-center justify-center h-14 w-14 bg-white rounded shadow-md">
                      <Image
                        className="rounded-md"
                        alt={tittle}
                        src={img}
                        height={44}
                        width={44}
                        loader={uploadcareLoader}
                        unoptimized={true}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {tittle}
                    </h3>
                  </div>
                  <div className="px-4 py-4 ">
                    <p className="text-black text-justify">{decs}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <section className="bg-[#0E1F25] py-10">
          <div className="space-y-4 text-center mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
                Why Do Businesses Want to Invest in Educational App Development?
              </h2>
              <p className="text-base text-white md:text-center text-justify tracking-tight">
                Educational institutions want to benefit students and teachers
                while also looking for opportunities to make profits and build
                better relationships with students and parents. The stakeholders
                of the educational landscape, whether they are standalone
                educators or groups of schools, use our educational app
                development services for many reasons. These reasons are as
                follows-
              </p>
            </div>
            <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 py-10 text-left">
              {JSON_DATA.ConsultacnyApproach.map((elem) => {
                const { title, decs, decs1, num } = elem;
                return (
                  <div
                    key={num}
                    className="space-y-4 p-6 bg-white border border-[#0E1F51] rounded-tl-2xl rounded-br-2xl"
                  >
                    <h2 className="text-2xl font-bold text-[#0E1F51]">
                      {title}
                    </h2>
                    <p className="text-slate-900">{decs} </p>
                    <p className="text-slate-900">{decs1} </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
          <div className="flex flex-col justify-center lg:text-center">
            <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Our Working Methodology
              {/* Latest Technology Trends <span className="text-blue-500">We Adopt for Application</span> Development */}
            </h2>
            <p className="text-base text-slate-800">
              Our reputation as the most reliable and advanced educational app
              development company is set in stone because of the defined working
              methodology we follow for our projects. This phase-by-phase
              methodology is something that you can see in our ongoing projects.{" "}
            </p>
          </div>
          <div className="grid gap-10 py-10 text-left lg:grid-cols-3  xl:gap-16">
            {JSON_DATA.TechTrends.map((elem) => {
              const { title, stack, num } = elem;
              return (
                <div key={num} className={`${styles.letter} space-y-4`}>
                  <div className="shadow-lg p-2 border rounded">
                    <h3 className="text-[#0E1F51] text-xl font-bold">
                      {title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p>{stack} </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className=" bg-[#DBEAFE] lg:py-16 py-8 ">
          <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 ">
            <div className="">
              {JSON_DATA.Why.map((elem: any) => {
                const { title, num, decs } = elem;
                return (
                  <div
                    key={num}
                    className="w-full flex flex-col justify-center items-center text-center space-y-2"
                  >
                    <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">
                      {title}
                    </h2>
                    <p className="text-base text-slate-800">{decs}</p>
                  </div>
                );
              })}
            </div>
            <div className="grid  gap-10 md:grid-cols-3 grid-cols-1">
              {JSON_DATA.Choose.map((elem: any) => {
                const { title, decs, num, img } = elem;
                return (
                  <div
                    key={num}
                    className="p-6 rounded-lg border-2 border-solid bg-white border-[#0E1F51] space-y-2"
                  >
                    <div className="flex items-center justify-center bg-[#0E1F51] w-16 h-16 p-2 rounded-full ">
                      <Image src={img} alt={title} width="40" height="40" />
                    </div>
                    <div className="flex items-center  space-x-2">
                      <h2 className="text-2xl font-bold text-black">{title}</h2>
                    </div>
                    <div>
                      <p>{decs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="items-center w-11/12 space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:flex md:space-x-10 md:space-y-0 py-6 lg:py-10 ">
          {JSON_DATA.NativeApp.map((mobile) => {
            return (
              <div
                key={mobile.num}
                className="bg-gradient-to-r from-[#1A16D0]/70 to-[#A46BF2]/90  flex flex-col lg:flex-row py-10 px-4 lg:px-20 rounded-[42px] items-center"
              >
                <div className="flex justify-center w-full md:justify-start">
                  <Image
                    className="rounded-md"
                    title={mobile.head}
                    alt={mobile.head}
                    src={mobile.img}
                    height={300}
                    width={400}
                    loader={uploadcareLoader}
                    unoptimized={true}
                  />
                </div>
                <div className="w-full space-y-[5px] text-left">
                  <div className="space-y-4">
                    <h3 className="text-[24px] lg:text-4xl font-bold text-white">
                      {mobile.head}
                    </h3>
                    <p className="py-6 text-base font-light text-white">
                      {mobile.para}{" "}
                    </p>
                  </div>
                  <div>
                    <Link media="handheld" href={mobile.url} passHref={true}>
                      <div className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-medium text-blue-600 bg-white rounded-full cursor-pointer w-fit group">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-black rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                        <ImArrowUpRight2 />
                        <span>{mobile.btn}</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <section className="bg-[#0E1F51]">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-16">
            <div>
              <h2 className="text-4xl font-bold text-[#fff]  text-center">
                Why Is Comfygen the Best for the Educational App Development
                Process?{" "}
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 grid-cols-1 mt-14">
              {Why.map((card) => (
                <div
                  className={`${styles.WhyItem} border-2 border-[#fff] p-8 rounded-tr-[60px] rounded-bl-[60px]`}
                >
                  <div className="border bg-[#fff] w-20 h-20 rounded-full flex justify-center items-center ">
                    <img
                      className={`${styles.WhyImg} w-12 h-12 `}
                      src={card.img}
                      alt=""
                    />
                  </div>
                  <div className="mt-4">
                    <h2 className="font-semibold text-white lg:text-2xl text-xl">
                      {card.head}
                    </h2>
                    <p className="text-base text-[#fff] font-normal">
                      {card.dec}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-center bg-no-repeat bg-cover lazyload bg-fixed "
          style={{
            backgroundImage: `url("/img/hire-ios-mobile-app-developer.webp")`,
          }}
        >
          <div className="bg-[#000]/90 lg:py-20 py-10">
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#627BF4]/60 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={undefined} />
            </section>
          </div>
        </section>

        <section className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-10">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto xl:mb-0 xl:w-5/12">
              <div className="flex xl:py-12">
                <Image
                  src="/img/why-should-you-hire-our-educational-app-developers.svg"
                  width={800}
                  height={521}
                  blurDataURL="URL"
                  placeholder="blur"
                  loader={uploadcareLoader}
                  unoptimized={true}
                  className="bg-[#085FCC] rounded-lg shadow-lg dark:shadow-black/20 xl:ml-[50px] z-[10]"
                  alt="Do You Want More Information on Our Telemedicine Development Services?"
                />
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto xl:w-7/12">
              <div className="flex h-full items-center rounded-lg bg-[#060E41] p-6 text-center text-white xl:pl-12 xl:text-left">
                <div className="xl:pl-12 space-y-2">
                  <h2 className="mb-6 text-3xl font-bold">
                    Why should you hire our educational app developers now?
                  </h2>
                  <p className="">
                    Here are some reasons why the education app development team
                    is the best{" "}
                  </p>
                  <ul>
                    <li className="flex gap-2 items-center">
                      {" "}
                      <MdControlPointDuplicate /> Our software developers are
                      highly trained and possess multiple certifications{" "}
                    </li>
                    <li className="flex gap-2 items-center">
                      {" "}
                      <MdControlPointDuplicate /> Our team of software
                      developers already have a lot of experience in this field{" "}
                    </li>
                    <li className="flex gap-2 items-center">
                      {" "}
                      <MdControlPointDuplicate /> Our team of edtech app
                      developers always stick to the timeline and deliverables
                      of a project
                    </li>
                    <li className="flex gap-2 items-center">
                      {" "}
                      <MdControlPointDuplicate /> Our developers and designers
                      are constantly upskilling and in tune with industry trends
                    </li>
                    <li className="flex gap-2 items-center">
                      {" "}
                      <MdControlPointDuplicate /> Our development team
                      collaborates with the best practices of the industry.{" "}
                    </li>
                    <li className="flex gap-2 items-center">
                      {" "}
                      <MdControlPointDuplicate /> Our development team has a
                      collaborative attitude and a positive work ethic.
                    </li>
                  </ul>
                  <div className="pt-8">
                    <Link href="/contact-us" passHref={true}>
                      <button
                        type="button"
                        className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-900 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Get in touch now.
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="Application Consulting Services"
        />
        <GetinTouch />
        <BlogSection initialData={initialData} />
        {/* </>} */}
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
