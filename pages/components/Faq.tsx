import { useState } from "react";
import { LiaQuestionSolid } from "react-icons/lia";

export default function FaqSection({ title, faqData }) {
  const [currentCount, setCurrentCount] = useState("");
  const data = faqData;
  
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-slate-100 faq-bg relative">
      <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  lg:py-20 py-10">
        <div className="md:space-y-10 space-y-6 w-full">
          <div className="titleRow mb-10">
            <div className="menus-block my-auto ">
              <h3 className="title-bg">FAQ</h3>
              <h2 className="xl:text-4xl text-3xl text-[#0E1F51] text-center font-bold">Frequently Asked Questions</h2>
              <p className="text-lg text-center font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni, excepturi in incidunt, possimus suscipit neque quia nihil, enim alias perspiciatis iusto voluptatem sunt commodi et aliquam exercitationem nostrum. Maxime!
              </p>
            </div>
          </div>
          <div className="w-full py-4 space-y-4 relative  z-40">
            {faqData.map((elem: any, index: any) => {
              const { title, desc, decs, dec1, faqList } = elem;
              return (
                <div
                  key={index}
                  className="bg-white border cursor-pointer w-full rounded-[14px]"
                  onClick={() => setCurrentCount(currentCount === index ? false : index)}
                >
                  <div className={`flex items-start gap-4 justify-between w-full px-4 py-4 rounded-tr-[14px] rounded-tl-[14px] text-base font-medium text-left md:items-center md:px-6 text-slate-800 md:text-lg  ${currentCount === index ? 'bg-[#E1EBF5]' : 'bg-white'}`}>
                    <div className="flex items-center gap-1">
                      <LiaQuestionSolid size={20} />
                      <h3 className="w-full text-[14px] font-semibold md:text-lg">{title}</h3>
                    </div>
                    {currentCount === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-all duration-200 bg-[#fff] p-1 rounded-full"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#0E1F51"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-all duration-200 bg-[#E1EBF5] p-1 rounded-full "
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="12" y1="5" x2="12" y2="19" />
                      </svg>
                    )}
                  </div>

                  <div
                    className={
                      currentCount === index
                        ? "py-2 px-6 text-black space-y-3 text-sm md:text-base transition-height duration-200 min-h-20"
                        : "pt-0 px-6 text-black space-y-3 text-sm md:text-base transition-height duration-200 min-h-0 h-0 overflow-hidden"
                    }
                  >
                    <p>{desc}</p>
                    <p>{decs}</p>
                    <p>{dec1}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
