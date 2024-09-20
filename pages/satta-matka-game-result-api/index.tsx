import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/ecommerceapp.json";
import styles from "./styles.module.css";
import ConnectWithExpertButton from "../components/button/ConnectWithExpertButton";
import Slider from "./components/Slider";
import Providers from "./components/Providers";

const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const FaqBlockChain = dynamic(() => import("./components/FaqBlockChain"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(() => import("../components/ContactFromCenter"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const AdviceSection = dynamic(() => import("./components/Advice"), {
  loading: () => <p>Loading...</p>,
});

const Ourtech = [
  {
    num: "",
    img: "/images/Front-end development languages.webp",
    title: "Front-end development languages",
    decs: "Front-end development languages are used to create the front end or the client side of the API and generate the layout of the API on which the results will be displayed. There are many front-end languages and technologies, such as HTML and CSS, that we use to create the front end.",
  },
  {
    num: "",
    img: "/images/Back-end development languages.webp",
    title: "Back-end development languages",
    decs: "The back-end development languages that we use are deployed to create a strong server side for an API. The Satta Matka Game result API is created with the help of back-end languages like Python, Java, Go, Node.js, etc.",
  },
  {
    num: "",
    img: "/images/Mobile development tools.webp",
    title: "Mobile development tools",
    decs: "Our team undertakes mobile development as an important part of the development of the Satta Matka Game Result API. We create the mobile version of this API so that the API can be integrated into the mobile app version very easily. ",
  },
  {
    num: "",
    img: "/images/Desktop development tools.webp",
    title: "Desktop development tools",
    decs: "A desktop version of the Satta Matka Game Result API is also necessary for people who use the app on the desktop. We use the most recent and updated Satta Matka Game Result API tools for desktop development.",
  },
  {
    num: "",
    img: "/images/Wearable integration kit.webp",
    title: "Wearable integration kit ",
    decs: "At Comfygen, we take the most modern approach to create an API for the Satta Matka game result, and this is achieved by creating the API with extensions to be integrated into wearables and devices other than mobile phones.",
  },
];

export default function Ecommerce(props) {
  let { initialData } = props;

  let { Hire, myList } = JSON_DATA;

  return (
    <>
      <Head>
        <title>
          Satta Matka Game Result API Development Company In India | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a top online dating app development company In India & The USA, we redefine global connection with cutting-edge online dating app development services. We Develop dating apps like Tinder & Bumble or a fully custom dating mobile applications. Contact us now for Uniting hearts across borders is our passion."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/dating-app-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best Dating App Development Company In India & The USA | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen is a top online dating app development company In India & The USA, we redefine global connection with cutting-edge online dating app development services. We Develop dating apps like Tinder & Bumble or a fully custom dating mobile applications. Contact us now for Uniting hearts across borders is our passion."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/dating-app-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:13:21+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/illuslator/banner_vector.webp?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="language" content="en-us" />
      </Head>
      <div className="overflow-hidden">
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Satta Matka Game Result API Development Company "
                ptag="Comfygen is a top-class software development company that specializes in the creation of different application software and APIs. With the creation of APIs, our team aims at creating the most advanced communication channels between different parts of applications. The team at Comfygen also works with Virtual Reality and Augmented Reality to create a Satta Matka Game Result API that creates an interactive interface for gamers who use such an app regularly. If you are looking at Satta Matka Auto Result API to show the Satta Matka Result to users, then you should opt for the API development services that Comfygen extends to its clients. Even for a Matka API auto-result website, we can create tailor-made solutions. "
                btnName="Discuss Now"
                btnLink="/contact-us"
                imgSrc="/img/e-commerce-app-web-development.webp"
                Width={534}
                Height={544}
                altTag="Dating App Development Services"
              />
            </div>
          </div>
        </div>
        <AdviceSection
          heading="Best Satta Matka Game Result API development company"
          ptag="Comfygen is the best Matka Satta API development company, and it creates an interface to show the Matka Satta Result at the time of game completion. The company has a team of game developers who are well-versed in the technologies and skills needed for Satta Matka Game Result API development. The Satta Matta Matka Result that you see on the app is very important as an outcome, and the API is integrated properly to make the players aware of the game result."
          ptag1="Our team creates an API that can communicate with the internal game structure and the user end to show the result accurately so that the user can make decisions after the display of the results. The development team focuses on creating an API that shows Satta Matka's Results fast and accurately. For your Satta Matka Result today, you should choose Comfygen to kick off the result API creation process. "
          imgSrc="/images/Best Satta Matka Game Result API development company.webp"
          imgW={433}
          imgH={325}
          altTag="Dating Mobile App Development Company in India and the USA"
        />
        <ContactFromCenter />
        <section className="lg:py-16 py-8 bg-[#151B22]">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className=" text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
                  Our Services Related To Satta Matka Game Result API
                </h2>
                <p className="text-white text-base">
                  As the best Satta Matka Game Result API development company,
                  the Satta Matka Result Fast API is created in the best way
                  possible. You can create another layer to convey the result to
                  the user, which calculates the results and displays the
                  outcomes to the users. There are a plethora of services that
                  we offer to our clients, and these services are as follows-
                </p>
              </div>
              <div className="grid  text-left lg:grid-cols-2 md:grid-cols-2 mt-5 gap-7 ">
                {JSON_DATA.Arena.map((elem: any) => {
                  const { img, title, num, desc } = elem;
                  return (
                    <div
                      key={num}
                      className={`${styles.foodcard} w-full flex bg-white rounded-xl  flex-col justify-center  p-8 relative mt-5`}
                    >
                      <div className="mt-2">
                        <img src={img} alt={title} className="w-12 h-12"/>
                      </div>
                      <h2 className=" font-bold 2xl:text-3xl xl:text-3xl text-lg text-slate-800 text-start mt-4  ">
                        {title}
                      </h2>
                      <div className="space-y-1">
                        <p className="text-base text-slate-800">{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 lg:py-20 bg-gray-100">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#0E1F51]  ">
                  Our Top Notch Custom Satta Matka Game Result API Solutions{" "}
                </h2>
                <p>
                  We offer our clients the best customized Satta Matka Game
                  Result API solutions according to what they need. The satta
                  matka game result API solutions are created in a customized
                  manner for our client so the whole application can be
                  optimized and used across a large audience.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 mb-5">
                {JSON_DATA.Chartacterstics.map((elem) => {
                  const { img, title, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className={`${styles.BenefitsCard} border-2 border-[#97BDFA] p-6 space-y-4 bg-white rounded-[15px] relative`}
                    >
                      <div className="flex items-center justify-start mb-5">
                        <Image
                          src={img}
                          className="object-cover"
                          width={50}
                          height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-[#3B82F6]">
                        {title}
                      </h3>
                      <div>
                        <p className="break-all text-slate-800 line-clamp-5">
                          {decs}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <ConnectWithExpertButton
                  url={"/contact-us"}
                  title={"Connect with IT Experts"}
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="lg:bg-center  bg-left bg-repeat bg-fixed py-10 lg:py-20 "
          style={{ backgroundImage: `url("/img/dating-bg-2.svg")` }}
        >
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-16 py-4">
            <div className=" grid grid-cols-1 lg:gap-10 gap-6 mx-auto  xl:grid-cols-12  items-center">
              <div className="col-span-6">
                <div className=" ">
                  <div className="flex flex-col justify-center text-start  mx-auto">
                    <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff]  ">
                      Who can take advantage of our Satta Matka Result API
                      development services?
                    </h2>
                    <p className="text-base text-white">
                      As a satta Matka Result Live API development team, we
                      always look at the possibility of using our API to create
                      an app that is made to deal with gamers and gamblers who
                      want the full virtual experience. We create solutions for
                      companies that want to create a full-fledged Satta Matka
                      Game app. Our team of developers also focuses on creating
                      an API for an online gaming app that includes the Satta
                      Matka gaming format, among many other choices.{" "}
                    </p>
                    <p className="text-base text-white">
                      We have customized and generic API development solutions
                      for our clients so that they can create an app that shows
                      Satta Matka result in Satta Matka results very accurately
                      and as soon as the game finishes. Our solutions can be
                      used by large-scale, mid-scale, and small-scale companies.
                      Game development and owning companies who want to venture
                      into a wider range of gaming applications can also avail
                      of our customized solutions.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Providers />
        <Slider />
        <section>
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:py-16 py-8 ">
            <div>
              <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#000]  text-center ">
                Our technology stack for delivering Satta Matka Gaming API
              </h2>
              <p className="text-center text-base text-black">
                We use some particular technologies and tools to create a Satta
                Matka Game Result API. We use advanced development kits to
                create the Satta Matka Game Result API from scratch{" "}
              </p>
            </div>
            <div className="">
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-1">
                {Ourtech.map((elem) => {
                  const { title, img, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className=" p-8 space-y-4 transition-all duration-200  cursor-pointer border-2 border-[#0004] rounded-[20px] mt-5 "
                    >
                      <Image src={img} alt="" width={40} height={40} />
                      <div className="">
                        <h3 className="text-2xl text-black font-semibold ">
                          {title}
                        </h3>
                        <p className=" text-black ">{decs}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 lg:py-20 bg-[#223547]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff]  ">
                  Why do businesses want to invest in Satta Matka Gaming API
                  development?
                </h2>
                <p className="text-base text-white">
                  Satta Matka Game result APIs are in high demand, and companies
                  are developing these APIs to launch and integrate into apps.
                  There are many reasons why a company would want to create a
                  Satta Matka Game result API for its application. Here are the
                  most prominent reasons.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 mt-5">
                {JSON_DATA.FoodAppMaker.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div className={`${styles.BenefitsCardItem} relative`}>
                      <div className={`${styles.BenefitsCardItemImg} relative`}>
                        <Image
                          src={img}
                          className="object-cover"
                          width={35}
                          height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-[#fff] text-start">
                        {title}
                      </h3>
                      <div className="mt-3">
                        <p className="break-all text-white text-start ">
                          {decs}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <ConnectWithExpertButton
                  url={"/contact-us"}
                  title={"Connect with IT Experts"}
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-center bg-repeat bg-fixed  "
          style={{ backgroundImage: `url("/img/grid-box-dark.svg")` }}
        >
          <div className="bg-[#222222]/95 lg:py-16 py-8">
            <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
              <div className="space-y-4 text-center">
                <div className="flex flex-col justify-center text-center  mx-auto">
                  <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff]  ">
                    Emerging technologies we leverage to create Satta Matka Game
                    Result API
                  </h2>
                  <p className="text-base text-white">
                    IN the creation of the most modern Satta Matka Game Result
                    API, we always keep the most recent technological
                    developments at the forefront. We help you create API
                    features with the latest technologies so you get the most
                    advanced API for integration into the application.
                  </p>
                </div>
                <div className="grid gap-12 pt-8 text-left lg:grid-cols-3 md:grid-cols-1">
                  {JSON_DATA.WhyChooseDating.map((elem) => {
                    const { img, title, decs } = elem;
                    return (
                      <div className={`${styles.WhyChooseDatingItem} relative`}>
                        <div>
                          <Image
                            src={img}
                            className="object-cover"
                            width={60}
                            height={60}
                            alt={title}
                          />
                        </div>
                        <h3 className="text-2xl font-bold text-[#fff] text-start mt-4">
                          {title}
                        </h3>
                        <div className="mt-3">
                          <p className=" text-white text-start ">{decs}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-center items-center mt-5">
                  <ConnectWithExpertButton
                    url={"/contact-us"}
                    title={"Connect with IT Experts"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-20 bg-gray-100">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#0E1F51]  ">
                  Features of our Web3 Satta Matka Gaming Result API development
                </h2>
                <p>
                  At Comfygen, we use advanced Web3 technologies to create
                  unique and novel features that can be integrated into the app,
                  so the user gets something new to experience. The web3
                  technologies that we include are as follows-
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {JSON_DATA.Features.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div
                      className={`${styles.BenefitsCard11} border-2 border-[#B266C1] p-6 space-y-4 bg-white rounded-[15px] relative`}
                    >
                      <div className="flex items-center justify-start mb-5">
                        <Image
                          src={img}
                          className="object-cover"
                          width={50}
                          height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-[#B266C1]">
                        {title}
                      </h3>
                      <div>
                        <p className="break-all text-slate-800 line-clamp-5">
                          {decs}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <ConnectWithExpertButton
                  url={"/contact-us"}
                  title={"Connect with IT Experts"}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-20 bg-[#fff]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#000]  ">
                  Our Working Methodology for Implementing Satta Matka Game
                  Result API Solutions
                </h2>
                <p className="text-base text-black">
                  Our Working Methodology is well-divided and highly streamlined
                  to provide you with suitable and faster Satta matka auto
                  result API solutions. Our working methodology has multiple
                  phases, and it is as follows-{" "}
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-3 md:grid-cols-3 mt-5">
                {JSON_DATA.FeaturesWeb3.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div
                      className={`${styles.BenefitsCardItem1} border border-[#00000034] rounded-[10px] p-6 `}
                    >
                      <div className={`${styles.BenefitsCardItemImg1} `}>
                        <Image
                          src={img}
                          className="object-cover"
                          width={35}
                          height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-2xl mt-4 font-bold text-[#000] text-start">
                        {title}
                      </h3>
                      <p className=" text-black">{decs}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <ConnectWithExpertButton
                  url={"/contact-us"}
                  title={"Connect with IT Experts"}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-20 bg-[#223547]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff]  ">
                  Engage with our team through flexible models
                </h2>
                <p className="text-base text-white">
                  At Comfygen, we believe in flexibility, and this comes through
                  the type of engagement models and flexible development
                  solutions we offer to our clients. We cater to small, mid-,
                  and large-scale businesses, so we have a diverse range of
                  engagement models.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 mt-5">
                {JSON_DATA.fdj.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div className="border p-8 rounded-[10px]  ">
                      <div className="bg-white w-20 h-20 rounded-[10px] flex justify-center p-3">
                        <Image
                          src={img}
                          className="object-cover"
                          width={35}
                          height={50}
                          alt={title}
                        />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-2xl font-bold text-[#fff] text-start">
                          {title}
                        </h3>
                        <p className="break-all text-white text-start ">
                          {decs}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <ConnectWithExpertButton
                  url={"/contact-us"}
                  title={"Connect with IT Experts"}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-20 bg-[#fff]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#000]  ">
                  Why choose Comfygen for Satta Matka Game Result API
                  development?
                </h2>
                <p className="text-base text-black">
                  Comfygen is the best software and app development company in
                  the field. For Matka Satta Result Today and API development,
                  it is the best company you can choose and go ahead with. We
                  are the best for Satta Matta Matka Live Result today API
                  development team, and here is the proof.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {JSON_DATA.WhyChooseComfygen.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div className="border p-8 rounded-[14px]">
                      <div>
                        <Image
                          src={img}
                          className="object-cover"
                          width={50}
                          height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-2xl mt-3 font-bold text-[#000] text-start">
                        {title}
                      </h3>
                      <div className="">
                        <p className=" text-start ">{decs}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <TalkExpert />
        <section
          className="bg-center bg-no-repeat bg-cover lazyload bg-fixed "
          style={{
            backgroundImage: `url("/img/hire-ios-mobile-app-developer.webp")`,
          }}
        >
          <div className="bg-[#000]/90 lg:py-20 py-10">
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#627BF4]/60 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={Hire} myList={myList} />
            </section>
          </div>
        </section>

        <section className="lg:py-16 py-8">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
              <div>
                <img
                  src="/images/are-you-looking.svg"
                  className="w-80"
                  alt="are you lokking for"
                />
              </div>
              <div>
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#000]  ">
                  Are you looking for more information about Satta Matka Game
                  result API services from Comfygen?
                </h2>
                <p className="text-base">
                  Have you taken a look at our Matka API developer's guide and
                  want to learn more about our development services? We are
                  eager to consult you and advise you about Matka API result
                  development. Connect with our team and start the discussion
                  about Matka API services to know more.
                </p>
                <div className="flex justify-start items-start mt-5">
                  <ConnectWithExpertButton
                    url={"/contact-us"}
                    title={"Connect with IT Experts"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqBlockChain />
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
