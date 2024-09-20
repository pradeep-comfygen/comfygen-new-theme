import styles from "./styles.module.css";
import { MdSend } from "react-icons/md";
import { MdOutlineWhatsapp, MdEmail, MdOutlineAddIcCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { MdAddLocation } from "react-icons/md";

const Form = () => (
  <section className={styles.sectionContainer}>
    <div
      className="bg-cover relative bg-fixed why-choose-sec"
      style={{ backgroundImage: 'url("/image/main-form.webp")' }}
    >
      <div className={styles.WhyChooseUsA}>
        <img src="/image/why-choose-us-style2.webp" alt="" />
      </div>
      <div className={styles.WhyChooseUsB}>
        <img src="/image/why-choose-us-style2.webp" alt="" />
      </div>
      <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:py-16 py-10 relative z-40">
        <div className="grid lg:grid-cols-2 lg:gap-14 gap-8 items-center">
          {/* Sticky Form Container */}
          <div
            className={`${styles.stickyFormContainer} bg-[#26314F] rounded-[14px] form-bg`}
          >
            <div className="border border-[#fff] rounded-[14px] px-8 py-10 bg-[#26314f82] md:translate-x-[14px] translate-x-[6px] translate-y-[-14px]">
              <h2 className="xl:text-3xl text-xl text-[#fff] text-start font-bold">
                Top App Developers in Easy-Web-Plan
              </h2>
              <p className="text-white text-lg mt-6">Contact us</p>
              <div>
                <div className="flex flex-wrap items-center mb-5 py-2 px-4 rounded-md border border-gray-100">
                  <MdOutlineAddIcCall className="border-r text-white p-2" size={50} />
                  <div className="ml-5">
                    <span className="text-lg text-white font-medium">India</span>
                    <p className="text-base text-white">+91 9587867258</p>
                  </div>
                </div>
                <div className="contact-us-text flex flex-wrap items-center mb-5 py-2 px-4 rounded-md border border-gray-100">
                  <MdOutlineAddIcCall className="border-r text-white p-2" size={50} />
                  <div className="ml-5">
                    <span className="text-lg text-white font-medium">Canada</span>
                    <p className="text-base text-white">+1 579-977-4475</p>
                  </div>
                </div>
                <div className="contact-us-text flex flex-wrap items-center mb-5 py-2 px-4 rounded-md border border-gray-100">
                  <MdEmail className="border-r text-white p-2" size={50} />
                  <div className="ml-5">
                    <span className="text-lg text-white font-medium">
                      Mail to our Department
                    </span>
                    <p className="text-base text-white">sales@comfygen.com</p>
                  </div>
                </div>
              </div>
              {/* Social Links */}
              <p className="text-white text-lg mt-4">Follow us on :-</p>
              <div className="flex gap-4 items-center mt-2">
                <div className="text-white hover:text-black transition rounded-full border border-white group hover:bg-white w-12 h-12 flex items-center justify-center cursor-pointer">
                  <BsLinkedin size={22} />
                </div>
                <div className="text-white hover:text-black transition group hover:bg-white rounded-full border border-white w-12 h-12 flex items-center justify-center cursor-pointer">
                  <GrInstagram size={22} />
                </div>
                <div className="text-white hover:text-black transition group hover:bg-white rounded-full border border-white w-12 h-12 flex items-center justify-center cursor-pointer">
                  <FaFacebookF size={22} />
                </div>
                <div className="text-white rounded-full border border-white w-12 h-12 flex items-center justify-center cursor-pointer hover:text-black transition group hover:bg-white">
                  <FaXTwitter size={22} />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="h-[39rem] xs:h-[37rem] sm:h-[36rem] contact-container rounded-[14px] bg-[#e5e1ee]  lg:mx-[auto] my-[1rem] w-full lg:w-[28rem] xl:w-[520px]">
            <div className="bg-white h-full rounded-2xl md:translate-x-[14px]  translate-x-[6px] translate-y-[14px]">
              <form className="lg:p-10 md:p-6 p-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="">
                    <div className="flex gap-x-1">
                      <div className="rounded-full w-3 h-3 bg-[#Fc1d04] dot-shape"></div>
                      <div className="rounded-full w-3 h-3 bg-[#fc9c04] dot-shape"></div>
                      <div className="rounded-full w-3 h-3 bg-[#14b808] dot-shape"></div>
                    </div>
                  </div>
                  <h2 className="xl:text-2xl text-xl text-black text-start font-bold">
                    Let's Build Your Dream Project
                  </h2>
                </div>
                <div className="grid lg:grid-cols-1 grid-cols-1 gap-4 mt-5">
                  <div className="relative">
                    <input
                      name="firstName"
                      type="text"
                      className="form-control h-full text-black block w-full px-4 py-[0.7rem] border-b border-gray-300 focus:ring-0"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="relative">
                    <input
                      name="email"
                      type="email"
                      className="form-control h-full text-black block w-full px-4 py-[0.7rem] border-b border-gray-300 focus:ring-0"
                      placeholder="Email"
                    />
                  </div>
                  <div className="relative">
                    <input
                      name="mobileNumber"
                      type="number"
                      className="form-control h-full text-black block w-full px-4 py-[0.7rem] border-b border-gray-300 focus:ring-0"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="relative">
                    <input
                      name="subject"
                      type="text"
                      className="form-control h-full text-black block w-full px-4 py-[0.7rem] border-b border-gray-300 focus:ring-0"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="">
                    <textarea
                      name="message"
                      className="block w-full text-black px-4 py-3 border-b border-gray-300 focus:ring-0"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="flex justify-between flex-col gap-5 items-center">
                    <button
                      type="button"
                      className="text-white w-full bg-blue-600 px-8 py-3 gap-4 font-bold text-lg rounded-full justify-center items-center overflow-hidden relative inline-flex group cursor-pointer"
                    >
                      Send Message <MdSend className="form-icon" size={35} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Additional Section */}
    <div className="bg-[#fff] lg:py-16 py-10">
      <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16">
          <div>
            <div className="mb-6">
              <h2 className="xl:text-4xl text-3xl text-[#0E1F51] text-start font-bold">
                Top App Developer
              </h2>
              <p className="text-base text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur minima ad neque vero, quia quas velit!
              </p>
            </div>
            <div className="gap-6 grid lg:grid-cols-2 grid-cols-1">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4058.1009453550514!2d75.7413189!3d26.9102501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3134aeb1007%3A0x6b2253a37cf5c82e!2sCOMFYGEN%20PRIVATE%20LIMITED!5e1!3m2!1sen!2sin!4v1726816960924!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <span className="text-[#00000098]">  F-152, Dayanand Marg, Vaishali Nagar, Jaipur, Rajasthan 302021</span>
                {/* <MdAddLocation className="min-text-[40px]" /> */}
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4058.1009453550514!2d75.7413189!3d26.9102501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3134aeb1007%3A0x6b2253a37cf5c82e!2sCOMFYGEN%20PRIVATE%20LIMITED!5e1!3m2!1sen!2sin!4v1726816960924!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <span className="text-[#00000098]">  40 Tuxedo Ct, Toronto, ON M1G 3S7, Canada</span>
              </div>



              {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d205.35462250477474!2d-79.23073514269447!3d43.78135096764892!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1589864dd35%3A0x802002f86fbcc7e4!2sComfygen%20Private%20Limited!5e1!3m2!1sen!2sin!4v1726816853198!5m2!1sen!2sin"
              width="600"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
            </div>
          </div>
          <div className="">
            <div>
              <h2 className="xl:text-4xl text-3xl text-[#0E1F51] text-start font-bold">
                Compliance, Affiliations and Partnerships
              </h2>
              <p className="text-base text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur minima ad neque vero
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-5 mt-4">
              <div className="bg-[#F1F5F9] py-2 px-4 rounded-[6px] border border-[#00000018] flex justify-center items-center">
                <img width={155} src="/image/partners-dummy-img1.webp" alt="" />
              </div>
              <div className="bg-[#F1F5F9] py-2 px-4 rounded-[6px] border border-[#00000018] flex justify-center items-center">
                <img width={155} src="/image/partners-dummy-img2.webp" alt="" />
              </div>
              <div className="bg-[#F1F5F9] py-2 px-4 rounded-[6px] border border-[#00000018] flex justify-center items-center">
                <img width={155} src="/image/partners-dummy-img3.webp" alt="" />
              </div>
              <div className="bg-[#F1F5F9] py-2 px-4 rounded-[6px] border border-[#00000018] flex justify-center items-center">
                <img width={155} src="/image/partners-dummy-img4.webp" alt="" />
              </div>
              <div className="bg-[#F1F5F9] py-2 px-4 rounded-[6px] border border-[#00000018] flex justify-center items-center">
                <img width={155} src="/image/partners-dummy-img1.webp" alt="" />
              </div>
              <div className="bg-[#F1F5F9] py-2 px-4 rounded-[6px] border border-[#00000018] flex justify-center items-center">
                <img width={155} src="/image/partners-dummy-img2.webp" alt="" />
              </div>
              <div className="bg-[#F1F5F9] py-2 px-4 rounded-[6px] border border-[#00000018] flex justify-center items-center">
                <img width={155} src="/image/partners-dummy-img3.webp" alt="" />
              </div>
              <div className="bg-[#F1F5F9] py-2 px-4 rounded-[6px] border border-[#00000018] flex justify-center items-center">
                <img width={155} src="/image/partners-dummy-img2.webp" alt="" />
              </div>
              <div className="bg-[#F1F5F9] py-2 px-4 rounded-[6px] border border-[#00000018] flex justify-center items-center">
                <img width={155} src="/image/partners-dummy-img1.webp" alt="" />
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Form;
