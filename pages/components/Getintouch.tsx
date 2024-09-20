import React from "react";
import { HiMapPin } from "react-icons/hi2";
import ContactFrom from "./ContactFrom";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
export default function GetinTouch() {
  return (
    <div className="bg-slate-100 py-20">
      <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
        <div className="flex flex-col justify-start text-left space-y-2">
          <p className=" font-bold 2xl:text-4xl xl:text-3xl  text-2xl text-[#0E1F51] ">
            Hey! Let’s Talk
          </p>
        </div>
      </div>
      <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-7 lg:py-10  md:flex md:space-x-10 md:space-y-0 space-y-6 ">
        <ContactFrom />
        <div className="p-5 lg:p-8 space-y-6 bg-white text-white rounded-lg md:w-[35%] w-full">
          <h3 className="text-black text-2xl font-bold">India 🇮🇳</h3>
          <div className="flex  space-x-4 capitalize">
            <div className="p-3 bg-[#F7F7F7] flex justify-center items-center text-2xl text-blue-600 rounded-lg ">
              <MdPhoneInTalk />
            </div>
            <a href="tel:9587867258">
              <p className="text-blue-600 font-semibold text-lg">
                Call Anytime
              </p>
              <p className="text-black text-base font-medium">+91 9587867258</p>
              {/* <p className="text-black text-base font-medium">+1 579-977-4475</p> */}
            </a>
          </div>
          <div className="flex space-x-4">
            <div className="p-3 bg-[#F7F7F7] text-2xl text-blue-600 rounded-lg ">
              <MdEmail />
            </div>
            <a href="mailto:sales@comfygen.com">
              <p className="text-blue-600 font-semibold text-lg">Send Email</p>
              <p className="text-black text-base font-medium">
                sales@comfygen.com
              </p>
            </a>
          </div>
          <div className="flex space-x-4 cursor-pointer items-start">
            <div className="p-3 bg-[#f7f7f7] text-2xl text-blue-600 rounded-lg ">
              <HiMapPin />
            </div>
            <div>
              <a
                href="https://goo.gl/maps/wRhHjdj8Av6PDKiu9"
                target="_blank"
                rel="noreferrer" >
                <p className="text-blue-600 font-semibold text-lg"> Visit Us</p>
                <p className="text-black text-base font-medium"> F-152, Dayanand Marg, Nemi Nagar, Vaishali Nagar, Near D A V Centenary Public School, Jaipur, Rajasthan 302021</p>
              </a>
            </div>
          </div>
          {/* <div className="flex space-x-4 cursor-pointer items-start">
            <div className="p-3 bg-[#f7f7f7] text-2xl text-blue-600 rounded-lg ">
              <HiMapPin />
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11522.359904776837!2d-79.2307963!3d43.7813695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1589864dd35%3A0x802002f86fbcc7e4!2sComfygen%20Private%20Limited!5e0!3m2!1sen!2sin!4v1717836601080!5m2!1sen!2sin"
                width="300"
                height="100"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <a
                href="https://goo.gl/maps/wRhHjdj8Av6PDKiu9"
                target="_blank"
                rel="noreferrer" >
                <p className="text-blue-600 font-semibold text-lg"> Visit Us</p>
                <p className="text-black text-base font-medium">40 Tuxedo Ct, Toronto, ON M1G 3S7, Canada</p>
              </a>
            </div>
          </div> */}
        </div>
        <div className="p-5 lg:p-8 space-y-6 bg-white text-white rounded-lg md:w-[35%] w-full">
          <h3 className="text-black text-2xl font-bold">Canada 🇨🇦</h3>
          <div className="flex  space-x-4 capitalize">
            <div className="p-3 bg-[#F7F7F7] flex justify-center items-center text-2xl text-blue-600 rounded-lg ">
              <MdPhoneInTalk />
            </div>
            <a href="tel:579-977-4475">
              <p className="text-blue-600 font-semibold text-lg">
                Call Anytime
              </p>
              <p className="text-black text-base font-medium">+1 579-977-4475</p>
            </a>
          </div>
          <div className="flex space-x-4">
            <div className="p-3 bg-[#F7F7F7] text-2xl text-blue-600 rounded-lg ">
              <MdEmail />
            </div>
            <a href="mailto:sales@comfygen.com">
              <p className="text-blue-600 font-semibold text-lg">Send Email</p>
              <p className="text-black text-base font-medium">
                sales@comfygen.com
              </p>
            </a>
          </div>
          <div className="flex space-x-4 cursor-pointer items-start">
            <div className="p-3 bg-[#f7f7f7] text-2xl text-blue-600 rounded-lg ">
              <HiMapPin />
            </div>
            <div>
              <a
                href="https://maps.app.goo.gl/KiqaoAo3doPuUrh38"
                target="_blank"
                rel="noreferrer" >
                <p className="text-blue-600 font-semibold text-lg"> Visit Us</p>
                <p className="text-black text-base font-medium"> 40 Tuxedo Ct, Toronto, ON M1G 3S7, Canada</p>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
