import Image from "next/image";
import Cryptocurrency from "../components/Cryptocurrency";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { RiTeamLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbBrandMeta, TbPolygon } from "react-icons/tb";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { HiOfficeBuilding } from "react-icons/hi";
import { SiEthereum } from "react-icons/si";
import { VscDebugConsole, VscTools } from "react-icons/vsc";
import { BsExclamationOctagon, BsLayers } from "react-icons/bs";
import dynamic from "next/dynamic";
import { IoStarSharp } from "react-icons/io5";
import JSON_DATA from "./json/cryptotoken.json";

const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const ModusSection = dynamic(() => import("../components/ModusSection"), {
  loading: () => <p>Loading...</p>,
});
const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});

const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const WhycomfygenSection = dynamic(
  () => import("../components/WhycomfygenSection"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const WhyChoose = dynamic(() => import("../components/WhyChoose"), {
  loading: () => <p>Loading...</p>,
});
const SliderSection = dynamic(() => import("../components/SliderSection"), {
  loading: () => <p>Loading...</p>,
});
const NewSection = dynamic(() => import("../components/NewSection"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Arena = [
  {
    num: "1",
    url: "/nft-marketplace-development-company",
    icon: <HiOfficeBuilding className="text-blue-400" size={50} />,
    title: "Development Of Non-Fungible Tokens (NFTs)",
    decs: "Developing NFT tokens is built around usability. NFT tokens are created by our NFT token developers with secure functionality and uniqueness in mind.",
  },
  {
    num: "2",
    url: "/defi-development-company",
    icon: <AiOutlineDeliveredProcedure className="text-blue-400" size={50} />,
    title: "Development Of The DeFi Token",
    decs: "We help our clients to design and develop DeFi tokens according to their business models, such as security tokens, equity tokens, or utility tokens. WithComfygen, you can develop DeFi tokens in full",
  },
  {
    num: "3",
    icon: <TbBrandMeta className="text-blue-400" size={50} />,
    title: "Development Of Metaverse Tokens",
    decs: "Development company for Metaverse Tokens, assist you in developing your Metaverse Tokens using Blockchain Platforms that are tailored to your specific requirements.",
  },
  {
    num: "4",
    icon: <SiEthereum className="text-blue-400" size={50} />,
    url: "/ethereum-token-development",
    title: "Development Of Ethereum Tokens",
    decs: "Using custom smart contracts made according to Ethereum Standards, we assist our clients in creating their own Ethereum Tokens. Examples include ERC-20, ERC-223, ERC-777, ERC-1400, ERC-721, ERC-827, and ERC-1155. The best development services are provided by our ERC20 token development company.",
  },
  {
    num: "5",
    icon: <VscTools className="text-blue-400" size={50} />,
    title: "Development Of BEP20 Tokens",
    decs: "By launching your ICO and offering utility benefits to members of your community, you can create BEP tokens (the trending utility token built on Binance Smart Chain). Our bep20 token development company provides the services for this token development also.",
  },
  {
    num: "6`",
    icon: <VscDebugConsole className="text-blue-400" size={50} />,
    url: "/solana-token-development",
    title: "Token Development For Solana",
    decs: "Providing Solana Token Development services with custom smart contracts on Solana and other blockchain networks, Our Solana token development company Comfygen is a pioneer in the token creation field. In order to meet your business needs, we develop high-end tokens with unique functionality.",
  },
  {
    num: "7`",
    icon: <TbPolygon className="text-blue-400" size={50} />,
    url: "/polygon-blockchain-development",
    title: "Development Of Polygon Tokens",
    decs: "Creating crypto tokens on the Polygon blockchain network is the best-in-class service offered by Polygon token development company. Get your own polygon crypto token created by our token developers.",
  },
];

const Bestchoice = [
  {
    num: "01",
    icon: <BsLayers className="text-blue-400" size={50} />,
    bg: "#F45F391A",
    title: "Transparency at 100%",
    decs: "During the entire development cycle, we provide As an iOS app development company, I prioritize transparency with my clients and stakeholders by providing clear and frequent communication, regular progress updates, and detailed project documentation.",
  },
  {
    num: "02",
    icon: <BsExclamationOctagon className="text-blue-400" size={50} />,
    bg: "#9A4ECC1A",
    title: "Support for technical issues",
    decs: "We provide technical support for iOS app development issues, including debugging, troubleshooting, and identifying solutions for problems related to app functionality, performance, and compatibility with different devices . Our technical support team gives you a seamless experience .",
  },
  {
    num: "03",
    icon: <RiTeamLine className="text-blue-400" size={50} />,
    bg: "#2390FB1A",
    title: "Experience of more than six years",
    decs: "We have more than six years of experience developing iOS applications, including user interface design, data management, API integration, and",
  },
];

export default function Ecommerce(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          Crypto Token Development Company In India & USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a reputable Token Development Company In India & USA, offers cryptocurrency token development services on Binance Smart Chain (BEP20), TRON (TRC10, TRC20, TRC721), and Ethereum (ERC20, ERC721, ERC1400) Networks."
        />
        <link rel="canonical" href="crypto-token-development-company" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Crypto Token Development Company - comfygen.com"
        />
        <meta name="language" content="En-us" />
        <meta
          property="og:description"
          content="Comfygen is a reputable Token Development Company In India & The USA, offers cryptocurrency token development services on Binance Smart Chain (BEP20), TRON (TRC10, TRC20, TRC721), and Ethereum (ERC20, ERC721, ERC1400) Networks."
        />
        <meta property="og:url" content="crypto-token-development-company" />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:13:29+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/crypto%20token.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="29 minutes" />
      </Head>
      <div className="overflow-hidden">
        {/* hero section */}
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Crypto Token Development Company"
                ptag="Comfygen is a top crypto token development company In India & The USA, that specializes in the quick creation of unique tokens on several blockchain networks. Through strong tamper-proof security procedures, our skilled blockchain professionals guarantee the security and integrity of your tokens."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <NewSection NewSection={JSON_DATA.NewSections} />
        <ContactFromCenter />
        <div className="py-10 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4">
            <div className="flex flex-col justify-center text-center">
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Token <span className="text-blue-600">Development</span>{" "}
                services
              </h2>
            </div>
            <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
              {Arena.map((elem) => {
                const { title, icon, decs, num, url } = elem;
                return (
                  <ServiceSection
                    key={num}
                    url={url}
                    Icon={icon}
                    title={title}
                    Ptag={decs}
                  />
                );
              })}
            </div>
          </section>
        </div>
        <AdviceSection
          heading="Token Development Company"
          ptag=" As one of the leading cryptocurrency token development companies in the world, Comfygen, India offers proficient assistance in token development. A few of the different domains of the crypto world that we would strengthen our Initial Exchange Offerings (IEOs), Security Token Offerings (STOs), and Initial Coin Offerings (ICOs). Positive commercial effects and ample opportunities are two of the main reasons for this."
          ptag1="Comfygen India offers high-technology crypto Token Development Services , and our developed platform will have all the necessary features to deliver a seamless user experience. We are considered the best token creators and developers in the market by all of our clients. As well as Blockchain Integration, we also develop Exchange Platforms, create and launch tokens, design and develop digital wallets, and transfer tokens between platforms."
          imgSrc="/img/token-development-company.webp"
          imgW={564}
          imgH={583}
          altTag="Token Development Company"
        />
        <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row lg:space-x-10 lg:space-y-4 py-10">
          <div className="w-full lg:w-1/2 space-y-[14px] text-left bg-[#F45F391A] p-[40px] rounded-[40px]">
            <div className="space-y-2">
              <h2 className="md:text-2xl text-xl font-semibold  text-[#0E1F51]">
                Metaverse Token Development
              </h2>
            </div>
            <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
              Online transactions within the metaverse generally involve the use
              of metaverse tokens, which are a form of virtual currency. The
              development of Metaverse Tokens can help you expand and grow your
              business with the help of Comfygen, our metaverse token
              development company . With the help of our highly skilled
              personnel, you will be able to effectively handle and manage
              different blockchain networks in our company so that you can
              handle transactions on the different networks as needed.
            </p>
          </div>
          <div className="flex justify-center w-full lg:w-1/2 lg:justify-end pb-10 lg:pb-0 ">
            <Image
              className="rounded-xl "
              title="Metaverse Token Development"
              alt="Metaverse Token Development"
              src="/images/metaverse-token.webp"
              height={450}
              width={450}
              loader={uploadcareLoader}
              unoptimized={true}
            />
          </div>
        </section>
        <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 lg:space-y-4 py-10">
          <div className="flex justify-center w-full md:justify-start">
            <Image
              className="w-full rounded-md"
              title=" NFT Token Development"
              alt=" NFT Token Development"
              src="/images/nft-token.webp"
              height={600}
              width={600}
              loader={uploadcareLoader}
              unoptimized={true}
            />
          </div>
          <div className="w-full space-y-[14px] text-left bg-[#9A4ECC1A] p-[40px] rounded-[40px]">
            <div className="space-y-2">
              <h2 className="md:text-2xl text-xl font-semibold  text-[#0E1F51]">
                NFT Token Development
              </h2>
            </div>
            <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
              Tokens are non-fungible, which ensures that tangible and
              intangible assets are properly authorized and accepted. We provide
              the best services to our clients through our NFT token development
              company . In order to enable direct communication between token
              creators and investors, we intend to implement the required
              strategies in a manner that facilitates that. We will increase the
              market value of your brand in crypto by leveraging our experience
              developing NFTs.
            </p>
          </div>
        </section>
        <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row lg:space-x-10 lg:space-y-4 py-10">
          <div className="w-full space-y-[14px] text-left bg-[#F45F391A] p-[40px] rounded-[40px]">
            <h2 className="md:text-2xl text-xl font-semibold  text-[#0E1F51]">
              DeFi Token Development
            </h2>
            <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
              It is possible to create tokens for daily use by businesses
              through defi token development, which can be used by them in their
              day-to-day transactions. Comfygen a defi token development company
              helps entrepreneurs develop their businesses using the best Defi
              tokens so that they can achieve business success. Our highly
              skilled and expert blockchain developers will develop very
              innovative blockchain solutions for you as a blockchain solution
              provider. We can help your business launch tokens like AAVE and
              COMP with our assistance.
            </p>
          </div>
          <div className="flex justify-center w-full lg:justify-end">
            <Image
              className="w-full rounded-md"
              title="DeFi Token Development"
              alt="DeFi Token Development"
              src="/images/defi-token-development.webp"
              height={600}
              width={600}
              loader={uploadcareLoader}
              unoptimized={true}
            />
          </div>
        </section>
        <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 lg:space-y-4 py-10">
          <div className="flex justify-center w-full md:justify-start">
            <Image
              className="w-full rounded-md"
              title=" BEP20 Token Development"
              src="/images/bep20-token.webp"
              alt="BEP20 Token Development"
              height={600}
              width={600}
              loader={uploadcareLoader}
              unoptimized={true}
            />
          </div>
          <div className="w-full space-y-[14px] text-left bg-[#9A4ECC1A] p-[40px] rounded-[40px]">
            <h2 className="md:text-2xl text-xl font-semibold  text-[#0E1F51]">
              BEP20 Token Development
            </h2>
            <p className="text-base leading-[26px] font-[400px] text-[#475569]">
              On the Binance Smart Chain, BEP20 tokens characterize and
              categorize tokens. Various protocols are built into these tokens.
              A full decentralized solution, interoperable with other
              frameworks, such as POS and DPOS is just some of the features
              Comfygen India has to offer for BEP-20 Token Development Services.
              Due to their thorough understanding of your enterprise’s
              requirements, our developers will assist you in developing the
              BEP20 tokens in such a manner that will enable you to accomplish
              your business objectives in a timely manner.
            </p>
          </div>
        </section>
        <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row lg:space-x-10 lg:space-y-4 py-10">
          <div className="w-full space-y-[14px] text-left bg-[#F45F391A] p-[40px] rounded-[40px]">
            <h2 className="md:text-2xl text-xl font-semibold  text-[#0E1F51]">
              Tron Token Development
            </h2>
            <p className="text-base leading-[26px] font-[400px] text-[#475569]">
              In the same way that Ethereum or EOS are blockchain networks, TRON
              is one as well. Different protocols are used for these types of
              tokens, and these tokens are developed with a particular intent in
              mind. We offer the best TRON Token Development Services in our
              tron token development company. With a great deal of experience in
              this field, we have a lot of expertise in the field. With our
              blockchain solutions, we follow the current market trends. You
              will receive assistance from our highly knowledgeable developers
              during the development process. It would be advantageous for your
              company if these tokens were developed promptly.
            </p>
          </div>
          <div className="flex justify-center w-full md:justify-end">
            <Image
              className="w-full rounded-md"
              title=" Tron Token Development"
              alt=" Tron Token Development"
              src="/images/tron-token.webp"
              height={600}
              width={600}
              loader={uploadcareLoader}
              unoptimized={true}
            />
          </div>
        </section>
        <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 lg:space-y-4 py-10">
          <div className="flex justify-center w-full lg:justify-start">
            <Image
              className=" rounded-md"
              title="Ethereum Token Development"
              alt="Ethereum Token Development"
              src="/images/ethereum-token.webp"
              height={450}
              width={450}
              loader={uploadcareLoader}
              unoptimized={true}
            />
          </div>
          <div className="w-full space-y-[14px] text-left bg-[#9A4ECC1A] p-[40px] rounded-[40px]">
            <h2 className="md:text-2xl text-xl font-semibold  text-[#0E1F51]">
              Ethereum Token Development
            </h2>
            <p className="text-base leading-[26px] font-[400px] text-[#475569]">
              We develop Ethereum Tokens following the Ethereum standards at
              Comfygen India. Ethereum blockchain is used in many smart
              contracts, eliminating the need for middlemen and making them
              cost-effective. You can avail of Ethereum Token Development
              Company provides the benefit of your business operations.
              Assisting you in the development of tokens would give your
              business a competitive advantage in the crypto world thanks to the
              talents of our developers. Your business can begin with various
              ICO platforms thanks to the development of Ethereum tokens.
            </p>
          </div>
        </section>
        <SliderSection
          Sliderdata={JSON_DATA.Sliderdata}
          Sliderheader={JSON_DATA.Sliderheader}
        />
        <WhycomfygenSection
          Qa={JSON_DATA.Qa}
          Whycomfygen={JSON_DATA.Whycomfygen}
        />
        <section className=" py-10 bg-[#F8FAFC]">
          <div className="space-y-4 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="flex flex-col justify-center text-center">
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                Types of <span className="text-blue-600">Token</span>{" "}
                Development
              </h2>
            </div>
            <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
              {JSON_DATA.White.map((elem) => {
                const { title, decs } = elem;
                return (
                  <div className="p-8 space-y-4 bg-white cursor-pointer rounded-[40px] transition-all duration-200 group hover:bg-blue-100">
                    <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200">
                      {" "}
                      {title}
                    </h3>
                    <p className=" text-black break-all transition duration-200 ease-in-out line-clamp-6 ">
                      {decs}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="py-10">
          <div
            className="bg-center bg-no-repeat bg-cover lazyload"
            style={{
              backgroundImage: `url("/images/token-development-application-developers.webp")`,
            }}
          >
            <div className="py-10 bg-no-repeat bg-cover lg:py-20 ">
              <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#893EE7]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
                <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
              </section>
            </div>
          </div>
        </section>
        <div className="bg-white">
          <section className="items-center py-10 space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 lg:space-y-0">
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                src="/images/white-label-cryptocurrency.webp"
                alt="White Label Cryptocurrency Exchange Development"
                className=""
                height={500}
                width={500}
              />
            </div>
            <div className="w-full space-y-2 text-left bg-[#F1FBFF] p-[40px] rounded-[40px]">
              <div className="space-y-3">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  White Label Cryptocurrency Exchange Development
                </h2>
              </div>
              <p className="text-base leading-7 text-black">
                Our award-winning team specializes in developing centralized,
                decentralized, and hybrid white label cryptocurrency exchange
                software. Create smart contract driven centralized white label
                exchanges (CEX) or peer-to-peer exchanges (DEX).
              </p>
              <ul className="space-y-5">
                {JSON_DATA.myList1.map((item, index) => (
                  <li className="flex" key={index}>
                    <span className="pr-2 mt-1.5 text-[#4f4f50]">
                      <IoStarSharp className="w-4 h-4" />
                    </span>
                    {item}
                    {""}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        <ModusSection
          Modus={JSON_DATA.Modus}
          ModusOperandi={JSON_DATA.ModusOperandi}
        />
        <div className="py-10 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Comfygen is the best{" "}
                  <span className="text-blue-500">
                    {" "}
                    crypto token development company.
                  </span>{" "}
                  What makes us unique?
                </h2>
                <p className="text-base text-slate-800">
                  The Comfygen team specializes in creating fungible, tradable,
                  and scalable tokens based on the value of cryptocurrency
                  markets. Recent token performance has been trending upward due
                  to these factors. The crypto token we develop should be able
                  to facilitate optimal use by participants at an affordable
                  price, thanks to exclusive parameters. Our company is strong
                  in the following areas.
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {JSON_DATA.Develop.map((elem) => {
                  const { title, img, decs } = elem;
                  return (
                    <div className="p-8 space-y-2 bg-gray-100 cursor-pointer rounded-[40px] ">
                      <div className="flex items-center justify-center w-32 h-28">
                        <Image
                          className="object-cover"
                          src={img}
                          alt={title}
                          width={60}
                          height={60}
                        />
                      </div>
                      <h3 className="text-lg font-extrabold text-[#0E1F51] ">
                        {title}
                      </h3>
                      <p className="font-medium text-black break-all line-clamp-6 group-hover:text-white">
                        {decs}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <Cryptocurrency />

        <WhyChoose Whychoose={JSON_DATA.Whychoose} Bestchoice={Bestchoice} />
        <TalkExpert />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="MultiChain Blockchain Development"
        />
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
