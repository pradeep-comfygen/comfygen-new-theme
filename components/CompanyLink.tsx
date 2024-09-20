import Image from "next/image";
import Link from "next/link";

export default function CompanyLink() {
    return (
        <section className="pb-4">
            <div className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 w-11/12 mx-auto text-center">
                <div className="grid lg:grid-cols-8 md:grid-cols-3 gap-6 pt-4">
                    <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300 bg-white">
                        <Link target="_blank" href="https://clutch.co/profile/comfygen" passHref={true}>
                            <Image
                                height="100"
                                width="150"
                                src="/img/cluth-logo.webp"
                                alt="Clutch"
                                className=" rounded-xl"
                            />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
                        <Link target="_blank" href="https://develop4u.co/company/comfygen" passHref={true}>
                            <Image
                                height="100"
                                width="150"
                                src="/img/Develop-4u.webp"
                                alt="Developer4"
                                className=" rounded-xl"
                            />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
                        <Link target="_blank" href="https://www.glassdoor.co.in/job-listing/unity-developer-comfygen-JV_KO0,15_KE16,24.htm?jl=1008552375461" passHref={true}>
                            <Image
                                height="100"
                                width="150"
                                src="/img/Glass-door.webp"
                                alt="Glassdoor"
                                className=" rounded-xl"
                            />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
                        <Link target="_blank" href="https://www.trustpilot.com/review/comfygen.com" passHref={true}>
                            <Image
                                height="100"
                                width="150"
                                src="/img/Trust-pilot.webp"
                                alt="Trustpilot"
                                className=" rounded-xl"
                            />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
                        <Link target="_blank" href="https://www.goodfirms.co/company/comfygen" passHref={true}>
                            <Image
                                height="100"
                                width="150"
                                src="/img/good-firmas.webp"
                                alt="Goodfirms"
                                className=" rounded-xl "
                            />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
                        <Link target="_blank" href="https://itrate.co/company/comfygen-pvt-ltd" passHref={true}>
                            <Image
                                height="100"
                                width="150"
                                src="/img/itrate.webp"
                                alt="Goodfirms"
                                className="w-20 rounded-xl "
                            />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
                        <Link target="_blank" href="https://www.topdevelopers.co/profile/comfygen" passHref={true}>
                            <Image
                                height="100"
                                width="150"
                                src="/img/topdevelopers-img.webp"
                                alt="topdevelopers"
                                className="w-20 rounded-xl "
                            />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
                        <Link target="_blank" href="https://www.designrush.com" passHref={true}>
                            <Image
                                height="100"
                                width="150"
                                src="/img/designrush.webp"
                                alt="Best Mobile App Development Company"
                                className="w-20 rounded-xl "
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
