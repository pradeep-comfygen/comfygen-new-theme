import styles from "./styles.module.css";
import { MdGroups } from "react-icons/md";

const WhyChoose = () => (
  <>
    <section className="bg-cover relative why-choose-sec "
      style={{
        backgroundImage: 'url("/image/why-choose-us.webp")'
      }} >
      <div className={styles.WhyChooseUsA}>
        <img src="/image/why-choose-us-style2.webp" alt="" />
      </div>
      <div className={styles.WhyChooseUsB}>
        <img src="/image/why-choose-us-style2.webp" alt="" />
      </div>
     
      <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:py-16 py-10 relative z-40">
        <div className="grid lg:grid-cols-2 lg:gap-14 gap-8">
          <div>
            <h2 className="xl:text-4xl text-3xl text-[#fff] mt-3 font-bold">Why Choose Us?</h2>
            <div className="mt-1">
              <p className="text-base text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit non ab officiis, distinctio exercitationem eum similique obcaecati repellat tenetur nihil adipisci consectetur rem labore quod nesciunt ullam voluptatem? Iure, laudantium.</p>
              <div className="grid lg:grid-cols-2 lg:gap-10 gap-6 mt-10">
                <div className="space-y-3 Why-Choose-Card relative cursor-pointer">
                  <div className="bg-white p-2 rounded-[8px] w-[68px] h-[68px] flex justify-center items-center why-box ">
                    <MdGroups className="text-[#3192ff] why-icon " size={40} />
                  </div>
                  <div>
                    <h2 className="text-white lg:text-2xl text-xl font-bold cursor-pointer">Cost-effectiveness</h2>
                    <p className="text-base text-white cursor-pointer">Reduce development cost by choosing customized development services</p>
                  </div>
                </div>
                <div className="space-y-3 Why-Choose-Card relative cursor-pointer">
                  <div className="bg-white p-2 rounded-[8px] w-[68px] h-[68px] flex justify-center items-center why-box ">
                    <MdGroups className="text-[#3192ff] why-icon  " size={40} />
                  </div>
                  <div>
                    <h2 className="text-white lg:text-2xl text-xl font-bold cursor-pointer">Team of Experts</h2>
                    <p className="text-base text-white cursor-pointer">Top-notch services attract and have opportunities to gain more customers</p>
                  </div>
                </div>
                <div className="space-y-3 Why-Choose-Card relative cursor-pointer">
                  <div className="bg-white p-2 rounded-[8px] w-[68px] h-[68px] flex justify-center items-center why-box ">
                    <MdGroups className="text-[#3192ff] why-icon  " size={40} />
                  </div>
                  <div>
                    <h2 className="text-white lg:text-2xl text-xl font-bold cursor-pointer">We are available 24x7</h2>
                    <p className="text-base text-white cursor-pointer">Top-notch services attract and have opportunities to gain more customers</p>
                  </div>
                </div>
                <div className="space-y-3 Why-Choose-Card relative cursor-pointer" >
                  <div className="bg-white p-2 rounded-[8px] w-[68px] h-[68px] flex justify-center items-center why-box ">
                    <MdGroups className="text-[#3192ff] why-icon  " size={40} />
                  </div>
                  <div>
                    <h2 className="text-white lg:text-2xl text-xl font-bold cursor-pointer">Timely delivery</h2>
                    <p className="text-base text-white cursor-pointer">Top-notch services attract and have opportunities to gain more customers</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="btn btn-fix lazyloaded mt-7 border border-[#00000042]">
                  Get In Touch <svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738"> <path id="Path_1487529" data-name="Path 1487529" d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z" transform="translate(-521.511 -1346.214)" fill="#000"></path> </svg> </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </>

);

export default WhyChoose;
