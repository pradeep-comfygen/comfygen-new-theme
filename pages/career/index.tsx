import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Head from "next/head";
import { MdOutlineClose } from "react-icons/md";
import dynamic from "next/dynamic";
import { ImArrowUpRight2 } from "react-icons/im";
import JSON_DATA from "./json/career.json"

const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const HeroSection = dynamic(() => import("../components/HeroSection"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
export default function career(props) {
  let { initialData } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [states, setStates] = useState("");
  const [jobType, setJobType] = useState<any>();
  const [city, setCity] = useState("");
  const [relocate, setRelocate] = useState("");
  const [crntLocation, setCrntLocation] = useState("");
  const [stdCode, setStdCode] = useState("");
  const [msg, setMsg] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    const dataData = async () => {
      const data = {
        name: name,
        email: email,
        mobNo: mobNo,
        jobType: jobType,
        msg: msg,
        states: states,
        city: city,
        stdCode: stdCode,
        crntLocation: crntLocation,
        relocate: "YES"
      };
      console.log("datad ", data);
      const response = await fetch(process.env.URL + "/api/v1/createCareer ", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      console.log("datadatada ", data);
      return response.json();
    };
    setShowThankYou(true);
    dataData().then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }



  const [showThankYou, setShowThankYou] = useState(false);


  const [apiData, setApiData] = useState("");
  const [apiDataJobType, setApiDataJobType] = useState("");

  useEffect(() => {
    const apiUrl1 = 'https://www.comfygen.com/api/v1/getAllCategory';
    const apiUrl2 = 'https://www.comfygen.com/api/v1/getJobCategoryList';
    const data = {
      "keyWord": "",
      "pageNo": 1,
      "size": 10
    };

    const header = {
      method: "GET",
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }

    Promise.all([
      fetch(apiUrl1).then(response => response.json()),
      fetch(apiUrl2, header).then(response => response.json())
    ])
      .then(([data1, data2]) => {
        setApiData(data1);
        setApiDataJobType(data2);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  console.log("apiData::::", apiData)
  console.log("apiDataJobType::::", apiDataJobType)

  const [currentCount, setCurrentCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenData, setModalOpenData] = useState<any>({});


  console.log("RENDER____________modalOpenData", modalOpenData);


  const [errorsContactUs, setErrorsContactUs] = useState({});

  const handleCountryChange = (event) => {
    let errors = {};
    if (event.target.value !== "SELECTED") {
      setStdCode(event.target.value);
      errors["stdCode"] = "";
    } else {
      errors["stdCode"] = "Please select Std Code!";
    }
    setErrorsContactUs(errors);
  };


  function handleRecaptchaChange(token) {
    setRecaptchaToken(token);
  }


  return (
    <>
      <Head>
        <title>Job Openings & Career opportunities at - Comfygen.com</title>
        <meta
          name="description"
          content="Work at Comfygen, Join a team and inspire the work. Find the best job opportunity to advance your career."
        />
        <link rel="canonical" href="https://www.comfygen.com/career" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Job Openings & Career opportunities at - Comfygen.com"
        />
        <meta
          property="og:description"
          content="Work at Comfygen, Join a team and inspire the work. Find the best job opportunity to advance your career."
        />
        <meta property="og:url" content="https://www.comfygen.com/career" />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-12-06T08:49:10+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/blockchain-mim-software.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
      </Head>
      <div className="overflow-hidden">
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSection
                heading="Career At Comfygen"
                ptag="At Comfygen leaders are created. Every member here is a team player and plays a vital role in the company.
                You might be at any stage of your career whether a professional or a beginner, Comfygen will provide you ample challenges to further uplift your career. We are looking for individuals who are ready to get out of their comfort zone and create an amicable atmosphere for all.
                We believe optimum results can only be achieved if our team members are both physically and mentally sound so we try to give a balanced work-personal life to our team."
                btnName="Discuss Now"
                btnLink="#Details"
                imgSrc="/img/career-at-comfygen.webp"
                Width={791}
                Height={414}
                altTag="Career At Comfygen"
              />
            </div>
          </div>
        </div>

        <section id="Details">
          <div className="relative w-11/12 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto py-10">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <p className="font-bold text-blue-500 text-2xl">Job openings</p>
                <h2 className="py-5 text-4xl font-bold leading-[3rem] text-[#0E1F51] ">
                  We’re Hiring! Your Skills Are Valued
                </h2>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {JSON_DATA.Process.map((elem) => {
                  const { title, img, decs, num, } = elem;
                  return (
                    <div key={num} className="p-6 space-y-4  bg-[#F8FAFC] border rounded-[40px] w-full ">
                      <div className="flex items-center justify-center  h-20 w-20 rounded-full bg-white font-semibold ">
                        <Image
                          className=""
                          src={img}
                          alt={title}
                          width={50}
                          height={50}
                        />
                      </div>
                      <h3 className="text-lg font-extrabold   text-[#0E1F51] ">
                        {title}
                      </h3>
                      <div className="flex flex-wrap items-center justify-start gap-4">
                        <span className="px-3 py-1.5 text-sm font-[700] text-blue-800 rounded-full bg-blue-200 ">
                          Work From Office
                        </span>
                        {/* <span className="px-3 py-1.5 text-sm font-[700] text-blue-800 rounded-full bg-blue-200 ">
                          contractual
                        </span> */}
                        <span className="px-3 py-1.5 text-sm font-[700] text-purple-800 rounded-full bg-purple-200 ">
                          Full Time
                        </span>
                        {/* <span className="px-3 py-1.5 text-sm font-[700] text-green-800 rounded-full bg-green-200 ">
                          remote
                        </span> */}
                      </div>
                      <p className="font-medium text-black break-all line-clamp-4">
                        {decs}
                      </p>
                      <div className="flex items-center space-x-6">
                        <a href="#Hiring" className="w-full">
                          {elem && elem.title === "" || elem.title === "" ?
                            <button disabled
                              type="button"
                              className="buttoncareer inline-block rounded-[10px]  py-3 text-[16px] font-medium leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-500 bg-blue-600 w-full">
                              Vacancy Full
                            </button> :
                            <button
                              onClick={() => {
                                setJobType(elem.title);
                              }}
                              type="button"
                              className="inline-block rounded-[10px]  py-3 text-[16px] font-medium leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-500 bg-blue-600 w-full">
                              Apply Now
                            </button>
                          }
                        </a>
                        <button
                          onClick={() => {
                            setModalOpen(!modalOpen);
                            setModalOpenData(elem);
                          }}
                          type="button"
                          className="inline-block rounded-[10px]  py-3 text-[16px] font-medium leading-normal text-blue-600 border border-blue-600 transition duration-150 ease-in-out  bg-transparent w-full">
                          Details
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {modalOpen && (
              <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black/30 px-4">
                <div className="md:w-4/6 w-auto h-[500px] bg-white rounded-lg shadow-lg">
                  <div className="flex justify-between items-center border-b px-6 py-4">
                    <h3 className="text-2xl font-semibold text-slate-900 capitalize">{modalOpenData.title}</h3>
                    <div className="p-2.5 bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 transition-all duration-200 rounded-full">
                      <MdOutlineClose className="cursor-pointer text-[1.3rem]" onClick={() => setModalOpen(!modalOpen)} />
                    </div>
                  </div>
                  <div className="p-6 overflow-auto h-96">
                    <div>
                      <h4 className="text-xl font-semibold text-black">{modalOpenData.modalHead}</h4>
                      <p>{modalOpenData.para}</p>
                    </div>
                    {modalOpenData.responsibilities && Array.isArray(modalOpenData.responsibilities) && (
                      <div>
                        <h4 className="text-xl font-semibold text-black">Responsibilities</h4>
                        <ul className="font-medium text-slate-800 list-[circle] px-4 text-base">
                          {modalOpenData.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {modalOpenData.skillsQualifications && Array.isArray(modalOpenData.skillsQualifications) && (
                      <div>
                        <h4 className="text-xl font-semibold text-black">Skills/Qualifications</h4>
                        <ul className="font-medium text-slate-800 list-[circle] px-4 text-base">
                          {modalOpenData.skillsQualifications.map((skill, index) => (
                            <li key={index}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        <section className="w-full py-10 bg-gray-100">
          <div className="w-11/12 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="space-y-4 ">
              <div className="space-y-4 text-center">
                <h2 className="text-2xl font-bold text-black capitalize">
                  What are we looking for?
                </h2>
                <p>
                  We’re not just developing websites and apps here, we’re making
                  values and the foundation of our company.
                </p>
              </div>
              <div className="grid gap-4 pt-8 lg:grid-cols-3 md:grid-cols-2">
                {JSON_DATA.Arena.map((elem) => {
                  const { title, img, decs, num } = elem;
                  return (
                    <div key={num} className="space-y-4 overflow-hidden text-left bg-white border rounded-2xl">
                      <Image
                        src={img}
                        alt={title}
                        className=""
                        height={500}
                        width={500}
                      />
                      <div className="p-4 space-y-1">
                        <h3 className="text-lg font-semibold text-[#0E1F51]">{title}</h3>
                        <p className="text-base text-black ease-in-out line-clamp-5">{decs}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-white" id="Hiring">
          <div className="items-center w-11/12  space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="w-full space-y-6 text-left">
              <div className="space-y-3">
                <p className="md:text-xl text-base  md:font-[600px] font-medium text-blue-600">
                  Job Opening
                </p>
                <h2 className="md:text-[40px] text-2xl md:font-bold leading-10 text-black">
                  Apply Now
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-center lg:flex-row">
              <form
                onSubmit={handleSubmit}
                className="w-full px-8 py-12 space-y-4 text-left bg-white rounded-xl shadow-2xl"
              >
                <h3 className="text-lg font-semibold">Fill the form</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mt-4 font-light text-gray-500 dark:text-gray-50"
                    />
                    <input
                      type="text"
                      placeholder="First name*"
                      className="w-full p-2 font-light border rounded focus:outline-none focus:ring-1 focus:font-normal"
                      value={name} required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mt-4 font-light text-gray-500 dark:text-gray-50"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email*"
                      className="w-full p-2 font-light border rounded focus:outline-none focus:ring-1 focus:font-normal"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <div className="flex">
                      <select
                        id="stdCode"
                        required
                        name="stdCode"
                        value={stdCode}
                        onChange={handleCountryChange}
                        className="focus:outline-none bg-[#F7F7F7] p-2 rounded-l font-light focus:font-normal w-28"
                      >
                        <option value="SELECT" selected>Select</option>
                        {JSON_DATA.Country.map((country) => (
                          <option key={country.stdCode} value={country.stdCode}>
                            {country.stdCode}
                          </option>
                        ))}
                      </select>
                      <input
                        type="text"
                        onChange={(e) => setMobNo(e.target.value)}
                        name="mobNo"
                        required
                        value={mobNo}
                        placeholder="Enter mobile number"
                        className="w-full p-2 font-light border rounded focus:outline-none focus:ring-1 focus:font-normal"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="city"
                      className="mt-4 font-light text-gray-500 dark:text-gray-50"
                    />
                    <input
                      type="text"
                      required
                      placeholder="city *"
                      className="w-full p-2 font-light border rounded focus:outline-none focus:ring-1 focus:font-normal"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="state"
                      className="mt-4 font-light text-gray-500 dark:text-gray-50"
                    />
                    <input
                      type="text"
                      required
                      placeholder="states *"
                      className="w-full p-2 font-light border rounded focus:outline-none focus:ring-1 focus:font-normal"
                      value={states}
                      onChange={(e) => setStates(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="crntLocation"
                      className="mt-4 font-light text-gray-500 dark:text-gray-50"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Current Location *"
                      className="w-full p-2 font-light border rounded focus:outline-none focus:ring-1 focus:font-normal"
                      value={crntLocation}
                      onChange={(e) => setCrntLocation(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="jobType"
                      className="mt-4 font-light text-gray-500 dark:text-gray-50"
                    />
                    <input
                      type="text"
                      required
                      placeholder={jobType}
                      className="w-full p-2 font-light border rounded focus:outline-none focus:ring-1 focus:font-normal"
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-4">
                      <label htmlFor="relocate_yes" className="inline-flex items-center">
                        <input
                          type="radio"
                          id="relocate_yes"
                          name="relocate"
                          value="YES"
                          checked={relocate === "YES"}
                          onChange={(e) => setRelocate(e.target.value)}
                          className="form-radio h-5 w-5 text-blue-600"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label htmlFor="relocate_no" className="inline-flex items-center">
                        <input
                          type="radio"
                          id="relocate_no"
                          name="relocate"
                          value="NO"
                          checked={relocate === "NO"}
                          onChange={(e) => setRelocate(e.target.value)}
                          className="form-radio h-5 w-5 text-blue-600"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>
                  <textarea
                    rows={5}
                    placeholder="Your Message "
                    required
                    className="w-full p-2 font-light border rounded resize-none md:col-span-2 focus:outline-none focus:ring-1 focus:font-normal"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  ></textarea>
                  {/* <LazyLoad height={70} offset={100}>
                    <ReCAPTCHA
                      sitekey="6Lcu7BcqAAAAAA_P2DQ-ufUGwSj3fgfOqvG7W21H"
                      onChange={handleRecaptchaChange}
                    />
                  </LazyLoad> */}
                </div>
                <div className="flex justify-center py-4">
                  <button
                    onSubmit={handleSubmit}
                    type="submit"
                    className="flex items-center justify-center w-full px-8 py-4 space-x-2 text-[20px] text-white bg-blue-600 rounded-[10px] whitespace-nowrap"
                  >
                    <ImArrowUpRight2 />
                    <span>Submit Now</span>
                  </button>
                </div>

                {showThankYou && (
                  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg">
                      <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                      <p>Your form has been submitted successfully.</p>
                    </div>
                  </div>
                )}
              </form>
              <div className="flex items-center w-full">
                <Image
                  className="flex mx-auto rounded-md"
                  alt="Job opening"
                  src="/img/job-openings.webp"
                  height={500}
                  width={500}
                  loader={uploadcareLoader}
                  unoptimized={true}
                />
              </div>
            </div>
          </div>
        </section>
        <BlogSection initialData={initialData} />
      </div >
    </>
  );
}
export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}
