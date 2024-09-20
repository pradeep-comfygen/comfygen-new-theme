import React from 'react'
import Header from './components/HeaderBlockchain'
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import { Head } from 'next/document';
import Link from 'next/link';
import { BsFillStarFill } from 'react-icons/bs';
import AdviceSection from '../components/Advice';
import ContactFromCenter from '../components/ContactFromCenter';
import HeroSectionForm from '../components/HeroSectionForm';
import HeroSection from '../components/HeroSection';
import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image';
import styles from './styles.module.css'
import { GoArrowRight } from "react-icons/go";
const mHealth = [
	{
		num: "01",
		icon: <Image src="/img/extended-market-reach.webp" alt="Artificial Intelligence (AI) and Machine Learning (ML) " width={60} height={60} className='mx-auto' />,
		title: "Blockchain Development Services",
		decs: <p className="leading-snug text-black text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, itaque. In sed minima optio rerum atque laudantium aut provident beatae quia quibusdam, architecto sit libero assumenda minus quasi doloribus?  <Link href="/iot-development-company" passHref={true} className="text-blue-600 font-bold hover:underline"></Link> </p>,
		bttn: "read more"
	},
	{
		num: "02",
		icon: <Image src="/img/promotes-financial-inclusion.webp" alt="AR and VR Healthcare App Development" width={60} height={60} className='mx-auto' />,
		title: "Decentralized Exchange ",
		decs: <p className="leading-snug text-black text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam consequatur corrupti, repellat harum officiis aliquid eveniet nisi tempore ex doloribus quidem, esse itaque laborum recusandae natus minima, dicta magnam mollitia.<Link href="/iot-development-company" passHref={true} className="text-blue-600 font-bold hover:underline"></Link> </p>,
	},
	{
		num: "03",
		icon: <Image src="/img/promotes-financial-inclusion.webp" alt="AR and VR Healthcare App Development" width={60} height={60} className='mx-auto' />,
		title: "Token Migration platform",
		decs: <p className="leading-snug text-black text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, accusantium quod? Mollitia voluptates repudiandae hic id iusto maiores? Fuga harum similique deleniti rerum, illum veritatis optio facilis. Quos, excepturi necessitatibus. <Link href="/iot-development-company" passHref={true} className="text-blue-600 font-bold hover:underline"></Link> </p>,
	},
	{
		num: "04",
		icon: <Image src="/img/improved-speed-of-financial-services.webp" alt="BigData Healthcare App Development" width={60} height={60} className='mx-auto' />,
		title: "Token Bridge platform",
		decs: <p className="leading-snug text-black text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nostrum ea excepturi esse ratione. Consequatur tempore voluptatibus qui vitae dolores commodi minus ullam eveniet voluptatum cum? Nobis, perferendis! Soluta, atque. <Link href="/iot-development-company" passHref={true} className="text-blue-600 font-bold hover:underline"></Link> </p>,
	},
	{
		num: "05",
		icon: <Image src="/img/security-and-risk-management.webp" alt="Wearable Healthcare App Development Technology " width={60} height={60} className='mx-auto' />,
		title: "NFT Marketplace",
		decs: <p className="leading-snug text-black text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, debitis aperiam velit corrupti dignissimos et nemo quos vero accusantium itaque nihil odit officiis veritatis. Rem sed vero exercitationem assumenda. Distinctio.<Link href="/iot-development-company" passHref={true} className="text-blue-600 font-bold hover:underline"></Link> </p>,
	},
	{
		num: "06",
		icon: <Image src="/img/efficient-data-management.webp" alt="IOT Healthcare App Development" width={60} height={60} className='mx-auto' />,
		title: "DeFi lending software",
		"decs": <p className="leading-snug text-black text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, nisi, mollitia non officiis natus vitae qui fugiat fugit sint aliquam unde distinctio ipsam, consequuntur iste reprehenderit ea! Cupiditate, molestiae voluptates. <Link href="/iot-development-company" passHref={true} className="text-blue-600 font-bold hover:underline"></Link> </p>,
	}
];
const BlockchainPlatforms = [
	{
		num: "01",
		icon: <Image src="/img/extended-market-reach.webp" alt="Artificial Intelligence (AI) and Machine Learning (ML) " width={45} height={45} />,
		title: "Hyperledger",
		decs: <p className="leading-snug text-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, itaque. In sed minima optio rerum atque laudantium aut provident beatae quia quibusdam, architecto sit libero assumenda minus quasi doloribus?  <Link href="/iot-development-company" passHref={true} className="text-blue-600 font-bold hover:underline"></Link> </p>,
		bttn: "read more"
	},
	{
		num: "02",
		icon: <Image src="/img/promotes-financial-inclusion.webp" alt="AR and VR Healthcare App Development" width={45} height={45} />,
		title: "Ethereum",
		decs: <p className="leading-snug text-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam consequatur corrupti, repellat harum officiis aliquid eveniet nisi tempore ex doloribus quidem, esse itaque laborum recusandae natus minima, dicta magnam mollitia.<Link href="/iot-development-company" passHref={true} className="text-blue-600 font-bold hover:underline"></Link> </p>,
	},
	{
		num: "03",
		icon: <Image src="/img/promotes-financial-inclusion.webp" alt="AR and VR Healthcare App Development" width={45} height={45} />,
		title: "Stellar",
		decs: <p className="leading-snug text-black">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, accusantium quod? Mollitia voluptates repudiandae hic id iusto maiores? Fuga harum similique deleniti rerum, illum veritatis optio facilis. Quos, excepturi necessitatibus. <Link href="/iot-development-company" passHref={true} className="text-blue-600 font-bold hover:underline"></Link> </p>,
	},
	{
		num: "04",
		icon: <Image src="/img/improved-speed-of-financial-services.webp" alt="BigData Healthcare App Development" width={45} height={45} />,
		title: "Ripple",
		decs: <p className="leading-snug text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nostrum ea excepturi esse ratione. Consequatur tempore voluptatibus qui vitae dolores commodi minus ullam eveniet voluptatum cum? Nobis, perferendis! Soluta, atque. <Link href="/iot-development-company" passHref={true} className="text-blue-600 font-bold hover:underline"></Link> </p>,
	},
	{
		num: "05",
		icon: <Image src="/img/security-and-risk-management.webp" alt="Wearable Healthcare App Development Technology " width={45} height={45} />,
		title: "Matic Polygon",
		decs: <p className="leading-snug text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, debitis aperiam velit corrupti dignissimos et nemo quos vero accusantium itaque nihil odit officiis veritatis. Rem sed vero exercitationem assumenda. Distinctio.<Link href="/iot-development-company" passHref={true} className="text-blue-600 font-bold hover:underline"></Link> </p>,
	},
	{
		num: "06",
		icon: <Image src="/img/efficient-data-management.webp" alt="IOT Healthcare App Development" width={45} height={45} />,
		title: "EOS",
		"decs": <p className="leading-snug text-black">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, nisi, mollitia non officiis natus vitae qui fugiat fugit sint aliquam unde distinctio ipsam, consequuntur iste reprehenderit ea! Cupiditate, molestiae voluptates. <Link href="/iot-development-company" passHref={true} className="text-blue-600 font-bold hover:underline"></Link> </p>,
	},
	{
		num: "07",
		icon: <Image src="/img/improved-speed-of-financial-services.webp" alt="BigData Healthcare App Development" width={45} height={45} />,
		title: "Dragonchain",
		decs: <p className="leading-snug text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nostrum ea excepturi esse ratione. Consequatur tempore voluptatibus qui vitae dolores commodi minus ullam eveniet voluptatum cum? Nobis, perferendis! Soluta, atque. <Link href="/iot-development-company" passHref={true} className="text-blue-600 font-bold hover:underline"></Link> </p>,
	},
	{
		num: "08",
		icon: <Image src="/img/security-and-risk-management.webp" alt="Wearable Healthcare App Development Technology " width={45} height={45} />,
		title: "Hedra Hashgraph",
		decs: <p className="leading-snug text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, debitis aperiam velit corrupti dignissimos et nemo quos vero accusantium itaque nihil odit officiis veritatis. Rem sed vero exercitationem assumenda. Distinctio.<Link href="/iot-development-company" passHref={true} className="text-blue-600 font-bold hover:underline"></Link> </p>,
	},
	{
		num: "09",
		icon: <Image src="/img/efficient-data-management.webp" alt="IOT Healthcare App Development" width={45} height={45} />,
		title: "Tezos",
		"decs": <p className="leading-snug text-black">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, nisi, mollitia non officiis natus vitae qui fugiat fugit sint aliquam unde distinctio ipsam, consequuntur iste reprehenderit ea! Cupiditate, molestiae voluptates. <Link href="/iot-development-company" passHref={true} className="text-blue-600 font-bold hover:underline"></Link> </p>,
	}
];
const BenefitsIcon = [
	{
		num: "01",
		icon: <Image src="/img/polygon-matic-logo-1.webp" alt="Polygon " width={45} height={45} className='mx-auto' />,
		title: "Polygon",
	},
	{
		num: "01",
		icon: <Image src="/img/polygon-matic-logo-1.webp" alt="Polygon " width={45} height={45} className='mx-auto' />,
		title: "Polygon",
	},
	{
		num: "01",
		icon: <Image src="/img/polygon-matic-logo-1.webp" alt="Polygon " width={45} height={45} className='mx-auto' />,
		title: "Polygon",
	},
	{
		num: "01",
		icon: <Image src="/img/polygon-matic-logo-1.webp" alt="Polygon " width={45} height={45} className='mx-auto' />,
		title: "Polygon",
	},
	{
		num: "01",
		icon: <Image src="/img/polygon-matic-logo-1.webp" alt="Polygon " width={45} height={45} className='mx-auto' />,
		title: "Polygon",
	},
	{
		num: "01",
		icon: <Image src="/img/polygon-matic-logo-1.webp" alt="Polygon " width={45} height={45} className='mx-auto' />,
		title: "Polygon",
	},
	{
		num: "01",
		icon: <Image src="/img/polygon-matic-logo-1.webp" alt="Polygon " width={45} height={45} className='mx-auto' />,
		title: "Polygon",
	},
	{
		num: "01",
		icon: <Image src="/img/polygon-matic-logo-1.webp" alt="Polygon " width={45} height={45} className='mx-auto' />,
		title: "Polygon",
	},
	{
		num: "01",
		icon: <Image src="/img/polygon-matic-logo-1.webp" alt="Polygon " width={45} height={45} className='mx-auto' />,
		title: "Polygon",
	},
	{
		num: "01",
		icon: <Image src="/img/polygon-matic-logo-1.webp" alt="Polygon " width={45} height={45} className='mx-auto' />,
		title: "Polygon",
	},
	{
		num: "01",
		icon: <Image src="/img/polygon-matic-logo-1.webp" alt="Polygon " width={45} height={45} className='mx-auto' />,
		title: "Polygon",
	}

];
function index() {
	return (
		<>

			{/* hero section */}
			<div className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}>
				<div className=" bg-[#1B1C30CC]">
					<Header />
					<div className="md:py-36 py-5">
						<HeroSection
							heading='World’s Leading Blockchain Solution Provider'
							ptag1="We Embody 500+ Blockchain with our Dedication, Passion and Skills. We equip businesses with the most reliable and advanced Blockchain Solutions to secure a formidable position for our clients when the future unfolds."
							ptag="Our team has good experiences in virtual reality, blockchain and augmented reality and can help to develop metaverse components."
							btnName="Discuss Now"
							btnLink='/contact-us'
							imgSrc='/img/blockchain-bg.svg'
							Width={578}
							Height={557}
							altTag="Metaverse Development Company " />
					</div>
				</div>
			</div>
			<section className="py-20 bg-no-repeat bg-right-top "
				style={{ backgroundImage: `url("/img/block-chain-about-bg.svg")` }}>
				<div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 bg-white p-6 border    drop-shadow-xl rounded-xl py-10 ">
					<div className='grid grid-cols-3 gap-4 flex items-center'>
						<div className='col-span-2 '>
							<h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">About our Blockchain Development Services</h2>
							<p className="text-base text-slate-800"> We are a completely bootstrapped blockchain-based software development company with 4 years of track record under our belt. Comfygen Cloud is an initiative to help blockchain and crypto start-ups create groundbreaking software solutions that impact the world for the better. We have a team of expert developers and tech maestros who have been in the blockchain app development services industry for many years. Our team specializes in developing enterprise blockchain solutions for clients across different industries.</p>
							<div >
								<button className='flex items-center bg-[#000] text-white p-3 mt-5 text-base rounded-lg font-medium gap-2 bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] cursor-pointer' >Connect with Experts <GoArrowUpRight /></button>
							</div>
						</div>
						<div className=''>
							<img src="/img/defi-trading.webp" alt="" />
						</div>
					</div>
				</div>
			</section>

			<section className=" bg-no-repeat bg-fixed" style={{ backgroundImage: `url("/img/blockchain-item-bg.webp")` }}>
				<div className='py-20'   >
					<div className='mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12'>
						<div className='text-center'>
							<h2 className="py-2 text-2xl lg:text-4xl text-[#000] font-bold  leading-tight lg:leading-[3rem]  ">Our <span className='text-[#BB60BD]'>Blockchain Products</span> </h2>
							<p className="text-base text-slate-800">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, perspiciatis assumenda et hic quis enim architecto. Quae illo quo rerum assumenda maiores ut molestias nihil ducimus animi iusto, obcaecati tenetur?</p>
						</div>
						<div className="grid gap-10 py-10 text-center lg:grid-cols-2 md:grid-cols-2 xl:gap-10 ">
							{mHealth.map((elem) => {
								const { title, icon, decs, bttn } = elem;
								return (
									<div className='bg-[#F8F9FE] border border-[#516DF6] text-gray-50 rounded-xl p-8 space-y-3 text-start'>
										<span>{icon} </span>
										<h3 className="text-2xl text-center font-extrabold text-black"> {title}</h3>
										{decs}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>


			{/* <section className="py-20 bg-no-repeat bg-fixed"
				style={{ backgroundImage: `url("/img/blockchain-item-bg.webp")` }}>
				<div className='mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12'>
					<div className='text-center'>
						<h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  "><span className='text-[#BB60BD]'>Blockchain Development</span> Platforms We Majorly Work on  </h2>
						<p className="text-base text-slate-800">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, perspiciatis assumenda et hic quis enim architecto. Quae illo quo rerum assumenda maiores ut molestias nihil ducimus animi iusto, obcaecati tenetur?</p>
					</div>
					<div className="grid gap-10 py-10 text-center lg:grid-cols-3 md:grid-cols-2 xl:gap-10 ">
						{BlockchainPlatforms.map((elem) => {
							const { title, icon, decs, bttn } = elem;
							return (
								<div className='bg-[#F8F9FE] border border-[#516DF6] text-gray-50 rounded-xl p-8 space-y-3 text-start'>
									<span>{icon} </span>
									<h3 className="text-xl font-extrabold text-black"> {title}</h3>
									{decs}
								</div>
							);
						})}
					</div>
				</div>
			</section> */}

			<section className="  bg-no-repeat bg-fixed bg-cover" style={{ backgroundImage: `url("/img/about-bg.webp")` }}>
				<div className='bg-[#000]/50 py-20'>
					<div className='mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12'>
						<div className='text-center'>
							<h2 className="py-2 text-2xl lg:text-4xl text-[#fff] font-bold  leading-tight lg:leading-[3rem]  "><span className='text-[#BB60BD]'>Blockchain Development</span> Platforms We Majorly Work on  </h2>
							<p className="text-base text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, perspiciatis assumenda et hic quis enim architecto. Quae illo quo rerum assumenda maiores ut molestias nihil ducimus animi iusto, obcaecati tenetur?</p>
						</div>
						<div className="grid gap-10 py-10 text-center lg:grid-cols-3 md:grid-cols-2 xl:gap-10  ">
							{BlockchainPlatforms.map((elem) => {
								const { title, icon, decs, bttn } = elem;
								return (
									<article className={`${styles.card}`}>
										<div className={`${styles.thumb}`}></div>
										<div className={`${styles.infos}`}>
											<h2 className={`${styles.title} text-xl text-center  text-black`}>
												{title}
												<span className={`${styles.flag}`}> {icon} </span>
											</h2>
											<p className={`${styles.txt} mt-5`}>{decs}</p>
										</div>
									</article>
								);
							})}
						</div>
					</div>
				</div>
			</section>
			<section className="py-10  bg-[#F0F6FC]">
				<div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  p-6 py-10 ">
					<div>
						<h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]">We are featured on the Hyperledger <br></br>Blockchain Showcase</h2>
					</div>
					<div className='grid grid-cols-2 gap-4 flex items-center'>
						<div className=''>
							<p className={`${styles.featuredHead} text-xl  text-[#1FB8F6] font-bold  leading-tight lg:leading-[3rem]`}>Feels good to be acknowledged</p>
							<p className="text-base text-slate-800 mt-3"> As a Blockchain development company, our efforts were acknowledged when the Linux Foundation featured our online food ordering system Eatzilla on their Hyperledger Showcase, which is the first blockchain-based software solution of its kind.</p>
							<p className="text-base text-slate-800"> With Blockchain-based KYC for restaurants and delivery partners, Eatzilla makes sure that customers can trust your online food delivery platform. Any registered user on the platform can verify the authenticity of restaurants and the basic information of the delivery partners. We have also added a feature where restaurants can add information on the procurement of raw materials for the food they prepare, making sure that your customers get fresh and healthy food.</p>
							<div >
								<button className='flex items-center bg-[#000] text-white p-3 mt-5 text-base rounded-sm font-medium gap-2 bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] cursor-pointer' >Get A Free Consultation <GoArrowUpRight /></button>
							</div>
						</div>
						<div className=''>
							<img src="/img/blockchain-featured.webp" width={473} height={362} alt="" />
						</div>
					</div>
				</div>
			</section>


			<section>
				<div className='grid grid-cols-3  flex items-center bg-[#B1D7EC]'>
					<div className='bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] py-20 ps-6'>
						<h2 className=" text-xl lg:text-3xl text-[#fff] font-bold  leading-tight lg:leading-[2rem]">Benefits of Blockchain Development Solutions</h2>
						<p className="text-base text-white">Building applications on Blockchain has several advantages for your business.</p>
						<div>
							<button className='flex items-center border-[#fff] text-white p-3 mt-5 text-base rounded font-medium gap-2 border cursor-pointer' >LET'S CONNECT TO DISCUSS <GoArrowRight /></button>
						</div>
					</div>
					<div className='col-span-2 '>
						<div className='grid gap-10 py-10 text-center lg:grid-cols-6 md:grid-cols-4 gap-6 ms-3 mr-3'>
							{BenefitsIcon.map((elem) => {
								const { icon, title } = elem;
								return (
									<div className='bg-white rounded-2xl text-center mx-auto shadow-2xl border p-5'>
										{icon}
										<h5 className='text-base font-medium'>{title}</h5>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>


			<section className="bg-no-repeat bg-cover bg-fixed " style={{ backgroundImage: `url("/img/why-blockchain.webp")` }}>
				<div className='bg-[#000]/85 py-20 '>
					<div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 bg-white p-6 border    drop-shadow-xl rounded-xl py-10 ">
						<div className='grid grid-cols-2 gap-4 flex items-center'>
							<div className={`${styles.WhyComfygen}`}>
								<img src="/img/why-Comfygen-cloud-for-blockchain.webp" alt="" />
							</div>
							<div className=' '>
								<h2 className="py-2 text-xl lg:text-2xl text-[#0E1F51] font-bold ">Why Comfygen Cloud for blockchain development</h2>
								<p className="text-base text-slate-800">We are a blockchain development company with a team of visionary full-stack developers and designers who have years of experience in building enterprise-grade software solutions for businesses around the world.</p>
								<p className="text-base text-slate-800">Our core ideology revolves around quality, and we have delivered over 10+ blockchain-based solutions to our clients in different countries across continents.</p>
								<p className="text-base text-slate-800">We started our journey as a small tech start-up with a team of 4 entrepreneurial tech leaders who wanted to create innovative solutions to real-world problems. Since then, we have established ourselves as a premium blockchain development company, providing blockchain development services to start-ups and large businesses alike.</p>
								<p className="text-base text-slate-800">Every single one of our projects sees the light of day after extensive research by our competent R&D team.</p>

							</div>

						</div>
					</div>
				</div>

			</section>


		</>
	)
}

export default index