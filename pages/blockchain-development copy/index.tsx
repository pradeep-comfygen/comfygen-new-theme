import { useRef, useState } from 'react';
import 'aos/dist/aos.css';
import React from 'react'
import Image from "next/image";
import Head from 'next/head';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import { BsArrowDownCircle, BsArrowUpCircle, BsFillStarFill } from 'react-icons/bs';
import dynamic from 'next/dynamic';
import { SiNike } from 'react-icons/si';
import styles from './styles.module.css'
import JSON_DATA from "./json/blockchain.json"
import Center from './components/Center';
import { VscActivateBreakpoints } from "react-icons/vsc";
const AltcoinCom = dynamic(() => import('./components/AltcoinCom'), {
  loading: () => <p>Loading...</p>,
})
const FaqBlockChain = dynamic(() => import('./components/FaqBlockChain'), {
  loading: () => <p>Loading...</p>,
})
const TechnoStack = dynamic(() => import('./components/TechnoStack'), {
  loading: () => <p>Loading...</p>,
})
const ServiceSection = dynamic(() => import('./components/ServiceSection'), {
  loading: () => <p>Loading...</p>,
})
const HeroSectionForm = dynamic(() => import('../components/HeroSectionForm'), {
  loading: () => <p>Loading...</p>,
})

const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})
const BlogSection = dynamic(() => import('../components/BlogSection'), {
  loading: () => <p>Loading...</p>,
})
const GuidSectionBlockchain = dynamic(() => import('./components/GuidSectionBlockchain'), {
  loading: () => <p>Loading...</p>,
})
const ContactFromCenter = dynamic(() => import('../components/ContactFromCenter'), {
  loading: () => <p>Loading...</p>,
})
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const Process = [
  {
    num: '1',
    url: "/blockchain-consulting-services",
    icon: <Image src="/img/blockchain-technology-consulting-icon.webp" alt="Blockchain Technology Consulting" width={60} height={60} />,
    title: 'Blockchain Technology Consulting',
    decs: 'Get ideas and plans to profit your business with end-to-end blockchain development technology consulting. Our experts evaluate the current business model and suggest the best custom blockchain app development services that suit the needs. The blockchain app developers come across strategic insights to find the righteous technology incur in the blockchain development services.'
  },
  {
    num: '2',
    url: "/nft-marketplace-development-company",
    icon: <Image src="/img/blockchain-nft-marketplace-dev-icon.webp" alt="NFT Marketplace Development" width={60} height={60} />,
    title: 'Blockchain NFT Marketplace Development',
    decs: 'We advise our clients to build the Blockchain NFT marketplace development services for bidding, Blockchain NFT Trading, and sell their digital assets. Our blockchain programmers are experienced in developing cross-chain marketplaces, preventing the interoperability issues and facilitating multi-chain compatible Blockchain NFTs Development.'
  },
  {
    num: '3',
    icon: <Image src="/img/blockchain-supply-chain-development-icon.webp" alt="Blockchain Supply Chain Development" width={60} height={60} />,
    title: 'Blockchain Supply Chain Development ',
    decs: 'We step towards developing, deploying and managing blockchain supply chain development services. Our motto is to provide complete transparency with clients in the entire blockchain app development product’s journey. The blockchain supply chain development services fill gaps in communication and also eliminate the data-transfer errors.'
  },
  {
    num: '4',
    icon: <Image src="/img/blockchain-smart-contracts-development-(ICO).webp" alt="Smart Contracts Development (ICO)" width={60} height={60} />,
    url: "/smart-contract-development",
    title: 'Blockchain Smart Contracts Development (ICO)',
    decs: 'In the Blockchain Smart Contracts Development (ICO), we develop and launch self-executing contracts for the public blockchain app development and private blockchain app development networks. We build super-efficient blockchain smart contracts development for crowdfunding, Blockchain NFT Projects, blockchain dApps app development and blockchain supply chain management development solutions.'
  },
  {
    num: '5',
    icon: <Image src="/img/blockchain-wallet-development-icon.webp" alt="Blockchain Wallet Development" width={60} height={60} />,
    url: "/crypto-wallet-development",
    title: 'Blockchain Wallet Development',
    decs: 'We develop feature enriched blockchain wallet software development for webs and apps. It supports the exchange of various digital assets and currencies, which is also integrated with blockchain cross-chain token swapping. Blockchain Wallets Development Services will be integrated with latest tech-trending features and functionalities to make them super-efficient.'
  },
  {
    num: '6',
    icon: <Image src="/img/custom-blockchain-app-development.webp" alt="Custom Blockchain App Development" width={60} height={60} />,
    title: 'Custom Blockchain App Development ',
    decs: <p>Our skilled and experienced blockchain developers/programmers are expertise in working with different blockchain development platforms such as, <a href="/stellar-blockchain-development-company" className='font-bold'>Stellar blockchain development</a> , Polkadot blockchain development, <a className='font-bold' href="/hyperledger-blockchain-development">Hyperledger blockchain development</a> , Tron blockchain development, EOD blockchain development, Tezos blockchain development, etc.We have the knowledge and expertise experience in scalable blockchain application development services for SMBs and large scale enterprises.</p>
  },
  {
    num: '7',
    icon: <Image src="/img/automatic--manual-ico-dashboard.webp" alt="Automatic / Manual ICO Dashboard " width={60} height={60} />,
    title: 'Automatic / Manual Blockchain ICO Dashboard',
    decs: 'Our team of expert blockchain developers provide various decentralized development services to budding with crypto entrepreneurs using Blockchain ICO tokens to raise the funding in your businesses. The blockchain development experts will create full-fledged exchange offering to receive massive funding.'
  },
  // {
  //   num: '8',
  //   icon: <Image src="/img/crowdfunding-software.webp" alt="Crowdfunding Software" width={60} height={60} />,
  //   title: 'Crowdfunding Blockchain Software Development',
  //   decs: 'The clients can do funding in their favourite blockchain app development projects or also they can build easy-to-navigate platforms, where the users can raise funding using the crypto-enabled crowdfunding software. Our blockchain developers can manage the platforms and are capable of developing seamless navigate crowdfunding software to work out best with funding.'
  // },
  // {
  //   num: '9',
  //   icon: <Image src="/img/crypto-penny-auction-software.webp" alt="Crypto Penny Auction Software" width={60} height={60} />,
  //   title: 'Blockchain Crypto Penny Auction Software',
  //   decs: 'We have the skills of advanced and latest technologies & methodologies enabling the crypto penny auction software development. Our agenda is to integrate the blockchain software development services with enriched features and functionalities that will help clients to generate passive income.'
  // },
  // {
  //   num: '10',
  //   icon: <Image src="/img/deFi-lending-software.webp" alt="DeFi Lending Software" width={60} height={60} />,
  //   url: "/defi-development-company",
  //   title: 'Blockchain DeFi Lending Software',
  //   decs: 'Our expertise includes modern technologies, latest tech-trends, feasible platforms to process for streamlined Blockchain DeFi lending software development services. Our expertise in DeFi software development solutions fulfills client’s requirements to obtain huge funding.'
  // },
  {
    num: '11',
    icon: <Image src="/img/decentralized-exchange-icon.webp" alt="Decentralized Exchange (OTC Exchange)" width={60} height={60} />,
    title: 'Decentralized Exchange (OTC Exchange)',
    decs: <p>Our blockchain software development company builds a hack-proof, agile and robust decentralized exchange platform for <a href="/android-app-development" className='text-white font-bold'>Android blockchain development</a> and <a href="/ios-app-development" className='text-white font-bold'>iOS blockchain development</a> platform to enable the real-time exchange of various digital currencies efficiently and securely.</p>
  },
  {
    num: '12',
    icon: <Image src="/img/tokenization-icon.webp" alt="Tokenization (Token Bridge / Token Migration)" width={60} height={60} />,
    title: 'Tokenization (Token Bridge / Token Migration)',
    decs: 'Our expert blockchain programmers can help the clients to tokenize the desirable assets, assure trust, efficiency and transparency. Through Blockchain tokenization, we can eliminate volatility and extract more liquidity to a board the collection of assets.'
  },
  // {
  //   num: '13',
  //   icon: <Image src="/img/bitcoin-buy-&-sell-platform.webp" alt="Tokenization (Token Bridge / Token Migration)" width={60} height={60} />,
  //   title: 'Bitcoin Buy & Sell Platform',
  //   decs: 'We will build a super-efficient Bitcoin Buy & Sell blockchain development platform, which is the most trending and demanding solution. This is the platform, which enables the buyers and sellers to exchange cryptocurrency without hassles and any lengthier processes. We have a team of professional blockchain developers who can build such a platform for crypto exchange effortlessly. '
  // },
  // {
  //   num: '13',
  //   icon: <Image src="/img/p2p-crypto-exchange.webp" alt="Tokenization (Token Bridge / Token Migration)" width={60} height={60} />,
  //   title: 'P2P Crypto Exchange',
  //   decs: 'P2P Crypto Exchange services allow connecting different parties with each other, and exchange their cryptocurrency without any hassle or fear of losing their funds. They are buyers and sellers, both parties connect to one-another to exchange their cryptos seamlessly. We will build the P2P crypto exchange platform with accuracy, flexibility, and speed.'
  // }
  ,
  {
    num: '13',
    icon: <Image src="/img/private-blockchain-development-network.webp" alt="Tokenization (Token Bridge / Token Migration)" width={60} height={60} />,
    title: 'Private Blockchain Development Network',
    decs: "For the banking and financial organizations, it is vital to have fully secured finance solutions. Having a Private Blockchain Network development solution is a key solution, where the users need permission to access into the framework. The developers integrate permissioned framework methods, which makes your platform fully secured and restrict the users' participation without permissions."
  }
  ,
  {
    num: '14',
    icon: <Image src="/img/blockchain-based-nft-marketplaces.webp" alt="Tokenization (Token Bridge / Token Migration)" width={60} height={60} />,
    title: 'Blockchain-Based NFT Marketplaces',
    decs: 'Every business nowadays is struggling with frauds in their transactional aspects. Building Blockchain-Based NFT Marketplaces ensures to create a promising environment for the businesses as well as users to process secured and encrypted transactions between buyers and sellers. We have a team of experts, who can build safer and secure decentralized marketplaces including other blockchain development services.'
  }
  ,
  {
    num: '15',
    icon: <Image src="/img/decentralized-app-development(dApps).webp" alt="Tokenization (Token Bridge / Token Migration)" width={60} height={60} />,
    url: "/dapp-development-company",
    title: 'Decentralized App Development (dApps)',
    decs: 'The dApps are built on the decentralized network and combined with Smart Contracts with front-end user interface. The main reason for choosing dApps is its zero downtime, ensured privacy solution, verifiable behavior, data integrity, and more. dApps are the most secured platforms for any businesses, and our experts ensure for some real high level security in their solutions.'
  }
  ,
  // {
  //   num: '13',
  //   url: "/cryptocurrency-exchange-development",
  //   icon: <Image src="/img/blockchain-cryptocurrency-exchange.webp" alt="Tokenization (Token Bridge / Token Migration)" width={60} height={60} />,
  //   title: 'Blockchain Cryptocurrency Exchange',
  //   decs: 'We build some super-efficient and secured blockchain development solutions, which are best to use for the blockchain cryptocurrency exchange. Here the users practice uninterrupted experience. The buyers can sell their cryptocurrencies with its seamless user-interface and its smooth experience. Moreover the users can sell their cryptocurrencies with the use of regular currencies as well.'
  // }



];
const Features = [
  {
    "num": "1",
    "url": "https://www.comfygen.com",
    "img": "/img/ai-in-blockchain-development-integration.webp",
    "title": "AI Based Blockchain Development Integration ",
    "decs": <p className='break-all text-slate-800 '>The integration of AI into blockchain development technology holds significant potential, driven by open-source AI models and concerns about centralized control. Open-source models like LLaMA and Dolly have reduced barriers for Web3 blockchain development platforms to incorporate generative AI capabilities. This AI blockchain development integration can manifest through DApps with conversational features and even new Web3 platforms designed around AI as a foundational component. The concept of a blockchain optimized for generative AI is emerging, offering capabilities like running AI nodes and supporting various stages of AI model blockchain development. Such integration can enhance transparency and interpretability, addressing the unique demands of AI in blockchain ecosystems.</p>
  },
  {
    "num": "2",
    "url": "/metaverse-development",
    "img": "/img/metaverse-integration-in-blockchain.webp",
    "title": "Metaverse Integration in Blockchain Application Development",
    "decs": <p className='break-all text-slate-800 '>The integration of the Metaverse into blockchain development technology is a transformative concept. Blockchain app development can secure Metaverse blockchain application development assets, enable decentralized virtual economies, and provide trust and interoperability across virtual worlds. Blockchain based Smart contracts development services can govern virtual property ownership and transactions, while blockchain-based tokens can represent virtual assets. This fusion empowers users with true ownership and control within the Metaverse blockchain development, fostering innovation and a seamless virtual experience.</p>
  },
  {
    "num": "3",
    "url": "/game-development-company",
    "img": "/img/gamification-in-blockchain-development-technology.webp",
    "title": "Gamification in Blockchain Development Technology ",
    "decs": <p className='break-all text-slate-800 '>Gamification integrated with blockchain development technology can revolutionize various industries. By tokenizing in-game blockchain development assets and achievements, players can truly own and trade them across games. Smart contracts can ensure fairness in tournaments and reward distribution. Blockchain also enhances transparency, security, and fraud prevention in gaming. This fusion incentivizes engagement, fosters player-driven economies, and creates novel gaming experiences with real-world asset value.</p>,
  }
];
const website = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "Top Blockchain App Development Company | Comfygen",
  "url": "https://www.comfygen.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "{search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Comfygen - Best Blockchain Development Service Provider",
  "url": "https://www.comfygen.com/",
  "logo": "https://www.comfygen.com/svg/comfygen-logo.svg",
  "sameAs": [
    "https://twitter.com/comfygentech",
    "https://www.instagram.com/comfygen_/?hl=en",
    "https://www.linkedin.com/company/comfygen-private-limited",
    "https://www.facebook.com/comfygen"
  ]
}
const product = {
  "@context": "http://www.schema.org",
  "@type": "product",
  "brand": "Comfygen",
  "name": "Blockchain App Development Company - Blockchain App Development Service",
  "image": "https://www.comfygen.com/_next/image?url=%2Fimg%2Fexperts-to-build-and-manage-decentralised-solution.webp&w=828&q=75",
  "description": "Comfygen Private Limited is top Blockchain App Development Company. We provide the best Blockchain application development services to enterprises & startups worldwide.",
  "aggregateRating": {
    "@type": "aggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1124"
  }
}

const additionalOrganization = {
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
    "telephone": "[+91 9587867258]",
    "email": "sales@comfygen.com"
  },
  "areaServed": [
    "US", "CA", "GB", "AD", "AU", "AT", "BS", "BH", "IO", "KM", "CU", "AR", "CW", "CY", "DK", "DM", "EG", "FK", "FI", "FR", "DE", "GR", "GL", "HK", "IS", "IN", "ID", "IT", "JP", "JE", "JO", "KW", "KG", "KR", "MX", "FM", "NZ", "NI", "OM", "PE", "PH", "PL", "PT", "QA", "RO", "RU", "SA", "SG", "SE", "SZ", "CH", "TH", "TR", "TN", "UA", "UM", "AE", "039", "155", "154", "151", "150"
  ],
  "sameAs": [
    "https://twitter.com/comfygentech",
    "https://www.instagram.com/comfygen_/?hl=en",
    "https://www.linkedin.com/company/comfygen-private-limited",
    "https://www.facebook.com/comfygen"
  ]
}

export default function Blockchain(props) {
  const [showContent, setShowContent] = useState(false);
  let { initialData } = props;

  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Blockchain App Development Company In India | Blockchain Development Services</title>
        <meta name='description' content='We Have rich experience In Blockchain Development using Latest Platforms for Blockchain App Development Services in India with expertise in Ethereum, EOS, Polygon, Ripple, Openchain, Multichain, Solana, Avalanche, Polkadot, NEAR, Binance smart chain, Substrate, Cosmos, and Tron.' />
        <link rel='canonical' href='https://www.comfygen.com/blockchain-development' />
        <meta name='robots' content='INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1' />
        <meta charSet="UTF-8" />
        <meta property="og:facebook_title" content="Best Blockchain Development Agency | Top Blockchain App Development Services" />
        <meta property="og:facebook_description" content="Discover the cutting-edge advancements and innovations in the blockchain development industry. From decentralized applications to smart contracts, we dive deep into the technologies that are revolutionizing various sectors worldwide. Learn about the top-notch blockchain development service providers and their contributions to this transformative field." />
        <meta property="og:twitter_title" content="Top Empowering Businesses: The Top Service Providers of Blockchain Development Solutions | Blockchain Development Software Programmers" />
        <meta property="og:twitter_description" content="The Power of Blockchain software Development: Exploring the Best in Blockchain Development Industry. Hire Top Blockchain Developers: Building a Strong Foundation for Your Project with comfygen." />
        <meta property="schema:type" content="Best Unveiling Excellence: Discover the Top Blockchain Development Service Providers" />
        <meta name='copyright' content='Comfygen Private Limited' />
        <meta name='language' content='En' />
        <meta name='abstract' content='Blockchain App Development Firm' />
        <meta name='summary' content='Comfygen is a reliable and trusted name in the Blockchain App development industry, specializing in providing top-notch blockchain app development service providers via gobally. With a team of skilled blockchain professionals and a track record of successful blockchain app development projects, Comfygen is dedicated to helping businesses harness the power of blockchain development technology.' />
        <meta name='author' content='Mr. Saddam Husen, sales@comfygen.com' />
        <meta name='reply-to' content='sales@comfygen.com' />
        <meta name='owner' content='A Founder is one of the individuals who helped establish a Blockchain App Development Company, firm, industry, startups or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement.' />
        <meta name='Blockchain Software Development Company' content='Comfygen: Your Trusted Partner for Blockchain Development Service Providers Whether you need expertise in decentralized applications, smart contracts, or blockchain consulting, Comfygen is your go-to partner for all your blockchain development needs. Comfygen offer tailored solutions that are designed to meet your specific requirements and drive your business towards success in the digital era. Partner with Comfygen and unlock the potential of blockchain for your organization.' />
        <meta name='category' content='Leading BlockChain App Devlopment Company In the USA, UAE, India' />
        <meta name='coverage' content='Worldwide' />
        <meta name='distribution' content='Global' />
        <meta name='rating' content='General' />
        <meta name='subtitle' content='A1 Blockchain Software Development Agency' />
        <meta name="MobileOptimized" content="320" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name="HandheldFriendly" content="true" />
        <meta name='og:country-name' content='India' />
        <meta name='og:latitude' content='26.912434°' />
        <meta name='og:longitude' content='75.787271°' />
        <meta property='og:type' content='website' />
        <meta name="google-site-verification" content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(additionalOrganization) }} />
      </Head>
      <div className="bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}>
        <div className=" bg-[#1B1C30CC]">
          <Header />
          <div className="md:py-28 py-5">
            <HeroSectionForm
              heading='Blockchain Development Company In India'
              ptag='Comfygen has a strong expertise in building custom blockchain development services, solutions using a variety of technologies like Hyperledger, EVM, Solidity, Cosmos, and Substrate. Well! Blockchain Development Company in India revolutionizing the SMEs and large scale businesses towards automating their operations. Our reliable and secure blockchain development services got you covered with their blockchain app development services. Comfygen leverages the businesses with feasible blockchain integrity, Blockchain data security, and improves efficiency with custom blockchain app development company in India. Hire skilled blockchain developers from comfygen to understand the development of Blockchain NFTs, Blockchain bridges, Blockchain NFT marketplace development services, Blockchain metaverse development services, Blockchain DEX development services, Blockchain tokens development services and Blockchain dApps development services with excellence. '
              btnName="Discuss Now"
              btnLink='/contact-us'
              imgSrc='/images/blockchain-software-development-company.webp'
              Width={552}
              Height={691}
              altTag="Blockchain Development Company In India"
            />
          </div>
        </div>
      </div>
      <div className="md:py-10 bg-[#e1fcff] ">
        <section className="items-center mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 ">
          <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
            <Image
              src="/img/experts-to-build-and-manage.webp"
              alt="Experts to Build and Manage Decentralised Solutions"
              className="rounded-r-lg"
              width={800}
              height={800}
            />
          </div>
          <div className="w-full space-y-1 text-left p-8 bg-[#fff] rounded-l-lg shadow-2xl">
            <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Experts to Develop and Manage Top-Class Blockchain Software Development
            </h2>
            <div className="space-y-1">
              <p className="text-base text-black">Comfygen acquires the latest technologies and is equipped with skilled experienced blockchain developers to craft prominent blockchain software development services. We have a dedicated full-stack blockchain software developers / programmers team with years of experience to build enterprise-grade blockchain software development services, and solutions with the integration of advanced techs. We are your Partner in Blockchain Development services having the capability to provide simpler to complex crypto and digital currency development services in the minimum possible time-frame. </p>
              <p className="text-base text-black">We craft custom blockchain app development services and solutions using Cosmos blockchain app development, EVM blockchain app development, Solidity blockchain app development, Substrate blockchain app development, Hyperledger blockchain app development and other reliable blockchain app development platforms. Our blockchain development experts have the excellence to build decentralized or blockchain app development platforms for DEX blockchain app development, dApps blockchain app development, NFTs blockchain app development, bridges, Metaverse blockchain app development and Real World tokenization. The team uses the latest technologies, advanced framWe are the leading blockchain app development company in Jaipur using cutting-edge technologies, such as Java, JavaScript, <a href="/node-js-development" className='text-blue-600 font-bold hover:underline'>Node.JS</a> , Golang, Solidity, <a href="/python-development" className='text-blue-600 font-bold hover:underline'>Python</a>, WebAssembly, and Objective C++ to develop custom blockchain software development. Don’t wait and avail the leverages of decentralized platforms to gain infinite business opportunities.</p>
              <ul className='space-y-2 text-left'>
                {JSON_DATA.myList3.map((item, index) => (
                  <li className="flex text-base text-black/80" key={index}><span className="pr-2 mt-1.5 text-[#4f4f50]">
                    <BsFillStarFill className="w-4 h-4" />
                  </span>{item} </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="md:py-10 bg-[#fff]">
        <section className="items-center mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
          <div className="w-full space-y-2 text-center md:text-left  bg-[#fff] rounded-l-lg">
            <div className="space-y-6">
              <p className="text-lg text-black text-justify">For the knowledgeable and interested entrepreneurs, here are some facts and figures of the blockchain development agency displayed. These figures are an assurance to interested investors telling that, “Blockchain application development Is Your Solution, because Blockchain Development Services Is Your Future.”  </p>
              <ul className='space-y-4 text-left'>
                {JSON_DATA.InfluencingList.map((item, index) => (
                  <li className="flex text-base text-black/80" key={index}><span className="pr-2 mt-1.5 text-[#4f4f50]">
                    <VscActivateBreakpoints className="w-5 h-5 text-[#BB5FC2]" />
                  </span>{item} </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
            <div className='p-8'>
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                <span className='text-[#BB5FC2]'>Influencing Facts and Figures </span> on Blockchain Application Development Industry</h2>
              <Image
                src="/img/blockchain-featured.webp"
                alt="Experts to Build and Manage Decentralised Solutions"
                className="rounded-r-lg"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
      </div>
      <ContactFromCenter />
      <section className=" bg-center bg-fixed bg-cover " style={{ backgroundImage: `url("/img/blockchain-services-bg.webp")` }}>
        <div className='bg-[#000]/70 py-5 lg:py-10'>
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className="py-2 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Collaborate with Us for Leading-Edge  <span className='text-[#B563C0]'>Blockchain Development </span> Services
                </h2>
                <p className='text-base text-white'>The talented minds have expertise in blockchain applications & software development services following the current tech-trends in the marketplace. They are potent to build different blockchain application development services with assured scalability.</p>
              </div>
              <div className="grid  py-0 lg:py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10 gap-4">
                {Process.map((elem) => {
                  const { title, icon, decs, url, num } = elem;
                  return (
                    <ServiceSection
                      url={url}
                      key={num}
                      Icon={icon}
                      title={title}
                      Ptag={decs}
                    />
                  );
                })}
              </div>
              <div className="flex justify-center items-center">
                <a href="/contact-us" >
                  <button className="shadow-lg transition-all hover:scale-75 duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Let’s connect Now!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-10 bg-[#0F192E]">
        <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0">
          <div className="w-full space-y-6 text-center md:text-left">
            <div className="flex flex-col justify-center text-center ">
              <h2 className="py-4 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Latest <span className="text-[#B066C1] capitalize"> Platforms for Blockchain </span>Development
              </h2>
              <p className="text-base text-white">Our blockchain techies provide limitless and trending decentralized development services with advancements using below given blockchain development platforms:</p>
            </div>
            <div className="grid  lg:grid-cols-3 md:grid-cols-2 pt-8 text-left">


              {JSON_DATA.Platforms.slice(0, 9).map((elem) => {
                const { title, img, decs, num, url } = elem;
                return (
                  <div key={num} className="p-4 border border-[#31446a]  hover:bg-[#1b2b4d] relative overflow-hidden transition duration-300 transform shadow-lg  h-86">
                    <a href={url}>
                      <div className="flex flex-col justify-center items-center p-10 space-y-2">
                        <Image className="object-cover" src={img} alt={title} width={100} height={100} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#fff] text-center">
                          {title}
                        </h3>
                        <p className=" text-sm text-white text-center">
                          {decs}
                        </p>
                      </div>
                    </a>
                  </div>
                );
              })}



              {showContent ? (
                <>

                  
                    {JSON_DATA.Platforms.slice(9, 18).map((elem) => {
                      const { title, img, decs, num } = elem;
                      return (
                        <div key={num} className="p-4 border border-[#31446a] hover:bg-[#1b2b4d] relative overflow-hidden transition duration-300 transform shadow-lg  h-86">
                          <div className="flex flex-col justify-center items-center p-10 space-y-2">
                            <Image className="object-cover" src={img} alt={title} width={100} height={100} />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-[#fff] text-center">
                              {title}
                            </h3>
                            <p className=" text-sm text-white text-center">
                              {decs}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                 

                </>
              ) : null}
            </div>
            {showContent ? <div className="flex justify-center items-center">
              <button className="inline-flex items-center px-6 py-1 text-base font-medium  active bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white rounded-full  text-center  cursor-pointer transition duration-300 relative " onClick={() => setShowContent(!showContent)}>< BsArrowUpCircle size={40} className="px-2" />Load Less </button>
            </div>
              :
              <div className="flex justify-center items-center">
                <button className="inline-flex items-center px-6 py-1 text-base font-medium  active bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white rounded-full  text-center  cursor-pointer transition duration-300 relative " onClick={() => setShowContent(!showContent)}><BsArrowDownCircle size={40} className="px-2" />Load More</button>
              </div>}
          </div>
        </section>
      </div>
      <section className="items-center w-full space-y-0 md:flex md:space-x-10 md:space-y-0 ">
        <div className={`${styles.mobileappsolution} w-full lazyload`}>
          <div className="bg-gradient-to-l from-[#6DA5FF]/90 to-[#7B55EA]/90  flex flex-col-reverse lg:flex-row w-full  ">
            <div className="flex flex-col justify-start w-11/12 py-10  space-y-10 text-start 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
              {
                JSON_DATA.MobileSolution.map(blockchain => {
                  return (
                    <div key={blockchain.num} className='space-y-2' >
                      <h2 className="text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-start">{blockchain.head}  </h2>
                      <p className='text-white text-start'>{blockchain.description}</p>
                      <p className='text-white text-start'>{blockchain.description1}</p>
                      <p className='text-white text-start'>{blockchain.description2}</p>
                    </div>
                  );
                })
              }
              <div className={`${styles.VariousIndustries} grid grid-cols-1 gap-4  lg:grid-cols-4 md:grid-cols-3 `} >
                {
                  JSON_DATA.Solution.map(blockchain => {
                    return (
                      <div key={blockchain.num} className='flex items-center p-4 transition-all duration-200 rounded-lg bg-slate-100 hover:bg-gray-100'>
                        <div className="items-center justify-start space-y-2 md:flex md:space-x-2 md:space-y-0 ">
                          <div className='md:bg-white md:p-2 md:rounded-lg'>
                            <Image title={blockchain.title} alt={blockchain.title}
                              src={blockchain.img} height={100} width={100} />
                          </div>
                          <p className='py-4 text-lg font-semibold text-gray-800 '>{blockchain.title}</p>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
          <div className="space-y-4 text-center ">
            <h2 className="text-4xl font-bold text-[#0E1F51] ">Blockchain Software Development <span className='text-blue-500'> Leading Secured Business  </span> Operations</h2>
            <p className="text-base text-slate-800">Blockchain technology promotes multiple leverages to businesses and also revamp its operations with cost-effective measures, less time-consumption, build trust in the blockchain development organization ecosystem, and more. Know the best ways how the <b>decentralized development solutions</b> can transform businesses through blockchain development services:</p>
          </div>
          <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
            {JSON_DATA.LeadingSoftware.map((elem) => {
              const { title, img, decs, num } = elem;
              return (
                <div key={num} className={`${styles.SecuredItem} p-6 space-y-4 bg-white `}>
                  <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold bg-orange-100 group-hover:bg-white rounded-full bg-gradient-to-t">
                    <Image width={100} height={100} src={img} alt={title} title={title} className="w-16" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 text-left">{title}</h3>
                  <p className="font-medium text-black transition duration-200 ease-in-out">{decs}</p>
                </div>
              );
            })}
            <div className={`${styles.SecuredItem} p-6 space-y-4 bg-white flex flex-col justify-center`}>
              <p className="font-medium text-black transition duration-200 ease-in-out">Attention blockchain enthusiasts! Are you looking to revolutionize your business with cutting-edge blockchain solutions? Don't miss out on the opportunity to connect with our esteemed blockchain development company in India and USA.</p>
              <div className="flex justify-start items-start">
                <a href="https://api.whatsapp.com/send?phone=919587867258" className='flex justify-start items-start' >
                  <button className="shadow-2xl  relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Let’s connect Now!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechnoStack />
      <div className={`${styles.SeamlessSec1} `}>
        <div className={`${styles.SeamlessSec2} `}>
        </div>
      </div>
      <div className={`${styles.SeamlessSec} `}>
        <div className=' py-10'>
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center mx-auto">
                <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
                  Streamlined Blockchain App Development Process for Seamless Services And Solutions
                </h2>
                <p className="text-base text-white md:text-center text-justify tracking-tight">Our Blockchain Development Company based In India has 100+ experts occupied in multiple simpler to complex blockchain development services. We have the skillset to manage all projects simultaneously due to the streamlined process:  </p>
              </div>
              <div>
                <ul className={`${styles.timeline} `}>
                  <li className={`${styles.timelineevent} `}>
                    <label className={`${styles.timelineeventicon} `}></label>
                    <div className={`${styles.timelineeventcopy} `}>
                      <p className={`${styles.timelineeventthumbnail} `}>Step One</p>
                      <h3 className='text-white'>Blockchain Consulting</h3>
                      <p className='text-white'>Firstly our experts conduct market research, analyze the competitors, select the right blockchain technology, tools and platforms. Consultation is important to finalize the project with appropriate planning for processing further and maintaining transparency with clients.</p>
                    </div>
                  </li>
                  <li className={`${styles.timelineevent} `}>
                    <label className={`${styles.timelineeventicon} `}></label>
                    <div className={`${styles.timelineeventcopy} `}>
                      <p className={`${styles.timelineeventthumbnail} `}>Step Two</p>
                      <h3 className='text-white'>User Experience and Technical Design</h3>
                      <p className='text-white'>We deliver highly impressive and interactive designs in the project for seamless user-experience. In the technical designs; we provide entire blueprint designs including platform database designs, technical components defined designs, and others.</p>
                    </div>
                  </li>
                  <li className={`${styles.timelineevent} `}>
                    <label className={`${styles.timelineeventicon} `}></label>
                    <div className={`${styles.timelineeventcopy} `}>
                      <p className={`${styles.timelineeventthumbnail} `}>Step Three</p>
                      <h3 className='text-white'>Entreprise Blockchain Development</h3>
                      <p className='text-white'>Our blockchain developers will create an advanced tech based enterprise grade blockchain development solution. The programmers will build scalable decentralized solutions helping clients to boost their businesses with maximum possible ROI.</p>
                    </div>
                  </li>
                  <li className={`${styles.timelineevent} `}>
                    <label className={`${styles.timelineeventicon} `}></label>
                    <div className={`${styles.timelineeventcopy} `}>
                      <p className={`${styles.timelineeventthumbnail} `}>Step Four</p>
                      <h3 className='text-white'>Deployment</h3>
                      <p className='text-white'>We deploy the blockchain developed solution in 4 stages; which are backend deployment, frontend deployment, blockchain network configuration and validation of the nodes. Also before deployment, our smart developers test the solution to know whether it's working seamlessly.</p>
                    </div>
                  </li>
                  <li className={`${styles.timelineevent} `}>
                    <label className={`${styles.timelineeventicon} `}></label>
                    <div className={`${styles.timelineeventcopy} `}>
                      <p className={`${styles.timelineeventthumbnail} `}>Step Five</p>
                      <h3 className='text-white'>Support & Maintenance</h3>
                      <p className='text-white'>Our job does not end here, because the blockchain development experts monitor, maintain and support the new OS releases, third party upgrades and new releases. We are responsible to resolve all problems and upgrades required to happen after the launch.</p>
                    </div>
                  </li>
                  <li className={`${styles.timelineevent} `}>
                    <label className={`${styles.timelineeventicon} `}></label>
                    <div className={`${styles.timelineeventcopy} `}>
                      <p className={`${styles.timelineeventthumbnail} `}>Step Six</p>
                      <h3 className='text-white'>Migration & Upgrades</h3>
                      <p className='text-white'>Our expert blockchain developers provide operational support including migrating the site from existing applications to blockchain or other blockchain protocol to another without disruptions. Also we added dApps upgrades as well to assure for 0 downtime.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="">
                <a href="/contact-us" >
                  <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Let’s Get Your Blockchain  Now!
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
        <div className="flex flex-col justify-center lg:text-center">
          <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
            Latest Tech Trends  <span className="text-blue-500">Incurred in Blockchain </span> Development</h2>
        </div>
        <div className="grid gap-10 pt-8 text-left lg:grid-cols-1 md:grid-cols-1">
          {Features.map((elem) => {
            const { img, title, decs, url } = elem;
            return (
              <div className={`${styles.BenefitsCard1} border-2 border-[#3B82F6] p-6 space-y-4 bg-white rounded-[15px] relative`}>
                <a href={url}>
                  <div className="flex items-center justify-start mb-5">
                    <Image
                      src={img}
                      className="object-cover" width={50} height={50}
                      alt={title}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#3B82F6]">{title}</h3>
                  {decs}
                </a>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center mt-5">
          <a href='https://api.whatsapp.com/send?phone=919587867258' className='mt-5'>
            <button className="shadow-2xl mt-5  relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
              Let's Communicate With IT Expert!
            </button>
          </a>
        </div>
      </section>
      <div className={`${styles.WhyChoose1} `}>
        <div className={`${styles.WhyChoose2} `}>
        </div>
      </div>
      <div className={`${styles.WhyChoose} `}>
        <div className=' py-10'>
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center mx-auto">
                <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
                  Why Choose Comfygen for Blockchain Development?
                </h2>
                <p className="text-base text-white md:text-center text-justify tracking-tight">
                  When you search for a <a href="/blockchain-development" className='text-white font-bold'>blockchain development agency in India </a>, we are standing in the queue being the top rated blockchain development service provider offering excellent and innovative advanced tech based services. </p>
              </div>
              <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 py-10 text-left">
                {JSON_DATA.WhyChooseComfygen.map((elem) => {
                  const { title, decs, } = elem;
                  return (
                    <div className={`${styles.WhyChooseItem} space-y-4 p-6 border`}>
                      <p className="text-2xl font-bold text-white">{title}</p>
                      <p className='text-white'>{decs} </p>
                    </div>
                  )
                })
                }
              </div>
              <div className="">
                <a href="/contact-us" >
                  <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Let’s Get Your Blockchain  Now!
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <AltcoinCom />
      <section className="py-6 lg:py-20 bg-[#E1FCFF]">
        <div className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex lg:flex-row flex-col-reverse lg:space-x-10 md:space-y-0">
          <div className="w-full space-y-2 text-left">
            <div className="space-y-1">
              <h2 className=" text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                How to Choose the Right Blockchain Development Company In Jaipur?
              </h2>
            </div>
            <p className="text-base text-black ">Now you know enough how blockchain technology implementation can help your business, what are its use-cases, challenges of blockchain and decentralized technology, and more. Hiring a blockchain development agency in Jaipur, India is the right decision, because they are expert professionals skilled to integrate blockchain technology and build new advanced decentralized solutions. </p>
            <p className="text-base text-black ">You must take a few considerations to find which blockchain development company in India is best to hire for your blockchain app development services; such as:</p>
            <div className="w-full text-left">
              <ul className="space-y-1 text-black">
                {JSON_DATA.myList1.map((item, index) => (
                  <li className="flex " key={index}><span className='pr-4'>
                    <SiNike size={26} />
                  </span>{item} </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-center w-full lg:justify-end">
            <Image
              className="rounded-md"
              title=" How to Choose the Right Blockchain Development Company?"
              alt=" How to Choose the Right Blockchain Development Company?"
              src="/img/blockchain-based-solution-img.webp"
              height={500}
              width={500}
              loader={uploadcareLoader}
              unoptimized={true}
            />
          </div>
        </div>
      </section>
      <section className="">
        <div className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10" style={{ backgroundImage: `url("/img/hire.webp")` }}>
          <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0  bg-[#522FFFCC]/90 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
            <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
          </section>
        </div>
      </section>
      <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-10">
        <div className="space-y-4">
          <div className="flex flex-col justify-center text-center">
            <h2 className="py-4 text-3xl lg:text-4xl font-bold leading-[2.5rem] lg:leading-[3rem] text-[#0E1F51] capitalize">
              Need More about readymade products
            </h2>
          </div>
          <div className="grid gap-4 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-8">
            {JSON_DATA.ReadymadeProduct.map((elem) => {
              const { title, img, decs, num, url } = elem;
              return (
                <div key={num} className="space-y-2 overflow-hidden text-left bg-white border rounded-xl p-6 ">
                  <Image src={img} alt={title} height={500} width={500} />
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-[#0E1F51]">{title} </h3>
                    <div className={`h-40 overflow-y-auto  ${styles.cardbar}`}>
                      <p className="text-base text-black text-justify tracking-tight  pr-4">{decs}</p>
                      <div className='pt-2'>
                        <a href={url} title="More Detail page">
                          <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-2 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                            More
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <a href='https://api.whatsapp.com/send?phone=919587867258' >
            <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
              Let's Communicate With IT Experts!
            </button>
          </a>
        </div>
      </div>

      <FaqBlockChain />
      <GuidSectionBlockchain />
      <BlogSection initialData={initialData} />
    </div>
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