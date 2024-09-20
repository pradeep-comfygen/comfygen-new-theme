// components/ContactPage.js
import Image from 'next/image';

export default function ContactPage() {
  return (

      <div className="bg-white main-content lg:mb-[600px] overflow-visible z-[3]">
        <div id="contact" className="relative pb-[7rem] bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgb(255, 255, 255), rgb(235, 238, 243)), linear-gradient(rgb(0, 92, 255), rgb(224, 233, 249))' }}>
          {/* <Image className="hidden lg:block absolute lg:bottom-[-40px] w-full" src="https://www.code-brew.com/wp-content/uploads/2023/01/footer-shape-1-1.webp" alt="footer shape" width={1920} height={200} /> */}
          <div className="absolute top-0 h-[33rem] md:h-[40rem] xl:h-[40rem] w-full bg-black"></div>
          <div className="container mx-auto">
            <div className="lg:grid lg:grid-cols-6">
              <div className="col-span-3">
                <div className="h-[400px] main-div">
                  <div className="z-20 mt-[5rem] md:mt-[14rem] xl:mt-[12rem] flex flex-col crausal-text">
                    <div className="w-full px-[30px] lg:px-0 lg:w-[80%]">
                      <h1 className="font-GalanoSemiBold text-white text-[30px] sm:text-[40px] lg:text-[40px]">
                        Top <span className="text-[#6bd1a6]">App Developers</span> in Easy-Web-Plan
                      </h1>
                      <p className="text-[16px] sm:text-[20px] lg:text-base text-justify font-GalanoLight text-white" style={{ letterSpacing: '1px' }}>
                        Easy-Web-Plan has fanatical high standards of development trusted by Government, Small/Medium sized businesses and Start-ups.
                      </p>
                      <div>
                        <div className="font-GalanoRegular text-white text-[16px] sm:text-[18px] mb-[1.5rem]">Recognised in:</div>
                        <div className="grid grid-cols-4 items-center gap-x-4">
                          <div className="flex justify-center border-r border-white">
                            <Image className="max-h-[50px]" src="/assets/contact-brand-1.webp" alt="brand 1" width={50} height={50} />
                          </div>
                          <div className="flex justify-center">
                            <Image className="max-h-[50px]" src="/assets/contact-brand-2.png" alt="brand 2" width={50} height={50} />
                          </div>
                          <div className="flex justify-center border-r border-l border-white">
                            <Image className="max-h-[50px]" src="/assets/contact-brand-3.png" alt="brand 3" width={50} height={50} />
                          </div>
                          <div className="flex justify-center">
                            <Image className="max-h-[50px]" src="/assets/contact-brand-4.webp" alt="brand 4" width={50} height={50} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[300px] md:h-[400px] hidden lg:block main-div"></div>
                <div className="h-[330px] lg:h-[400px] main-div mt-[-10rem]">
                  <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-x-[2rem] gap-y-[2rem]">
                      <div className="new-heading-style-1 w-full">
                        <div>
                          <h5 className="flex items-center gap-x-3">
                            <Image className="w-[2rem]" src="/assets/handshake.png" alt="handshake" width={32} height={32} />
                            Partnerships
                          </h5>
                          <h4>Empower your clients with Industry-Leading Technology Solutions</h4>
                          <p>Collaborate with us to earn more by selling, customizing, or integrating our products</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[400px] main-div">
                  <div className="container mx-auto">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d109827.74377350495!2d76.65403527402691!3d30.658833908502945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390febe0cae7da7f%3A0x8f34d8a3997fe1a1!2sS..C..O..54%2C%20SEC..82%2C%20Punjab%20160055!3m2!1d30.6588599!2d76.73643659999999!5e0!3m2!1sen!2sin!4v1699336385677!5m2!1sen!2sin"
                      width="100%"
                      height="400"
                      loading="lazy"
                      style={{ border: '0px' }}
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="fixed-div flex justify-center col-span-3 h-fit lg:h-[38rem]">
                <form className="mt-[2rem] w-full mr-7 lg:mr-0 lg:mt-0 lg:ml-auto lg:flex flex-col justify-around">
                  <div className="h-[39rem] xs:h-[37rem] sm:h-[36rem] contact-container bg-[#e5e1ee] mx-[1rem] lg:mx-auto my-[1rem] w-full lg:w-[28rem] xl:w-[520px]" style={{ border: '1px solid rgb(229, 225, 238)' }}>
                    <div className="bg-white h-full rounded-2xl xs:translate-x-[8px] xs:translate-y-[8px]">
                      <div className="relative input-container row mx-0 w-full pt-4" style={{ margin: '0px', paddingBottom: '0px' }}>
                        <div className="hidden xs:flex absolute top-[12px] xl:top-[40px] left-[20px] xs:left-[40px] gap-x-1">
                          <div className="rounded-full bg-[#Fc1d04] dot-shape"></div>
                          <div className="rounded-full bg-[#fc9c04] dot-shape"></div>
                          <div className="rounded-full bg-[#14b808] dot-shape"></div>
                        </div>
                        <div className="relative leading-7">
                          <h3 className="text-center text-[22px] font-Gilroy-Bold text-black">
                            Let's Build Your <span className="font-Gilroy-Bold">Dream App!</span>
                          </h3>
                          <div className="hidden lg:block absolute top-[40px] xs:top-[28px] md:top-[50px] right-[-18px]" style={{ opacity: '0.6' }}>
                            <section className="overflow-hidden h-full min-h-fit">
                              <div style={{ height: '100%', width: '100%' }}>
                                <Image className="w-[80px]" src="/assets/contact-arrow-vector.svg" alt="arrow" width={80} height={80} />
                              </div>
                            </section>
                          </div>
                        </div>
                        <div className="w-full input-box-container" style={{ paddingTop: '0px' }}>
                          <div className="flex flex-col justify-around gap-y-[1rem] xl:gap-y-[0.8rem]">
                            <div className="inputfield relative">
                              <input name="from_name" type="text" id="name" className="form-control h-full text-black block w-full px-4 py-[0.7rem] border-b border-gray-300 rounded-md focus:ring-0 focus:border-transparent" placeholder="First Name" required style={{ transition: 'all 0.3s ease 0s' }} />
                            </div>
                            <div className="inputfield relative">
                              <input name="from_email" type="email" id="email" className="form-control h-full text-black block w-full px-4 py-[0.7rem] border-b border-gray-300 rounded-md focus:ring-0 focus:border-transparent" placeholder="Email" required style={{ transition: 'all 0.3s ease 0s' }} />
                            </div>
                            <div className="flex flex-col justify-center">
                              <div className="react-tel-input flex">
                                <input className="form-control phnInput adjustWidthPhn border-red-500" placeholder="Phone" type="tel" name="from_phnNum" value="+91" />
                                <div className="flag-dropdown">
                                  <div className="selected-flag" title="India: + 91" aria-haspopup="listbox">
                                    <div className="flag in">
                                      <div className="arrow"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="relative rounded-md">
                              <textarea name="message" className="form-control h-full text-gray-700 block w-full px-4 py-[0.7rem] border-b border-gray-300 rounded-md focus:ring-0 focus:border-transparent" placeholder="What's your Project about?"  required></textarea>
                            </div>
                            <div className="text-left chai">
                              <p className="text-black font-SF-Pro-Semibold leading-[1.2]" style={{ fontSize: '14px', textAlign: 'left', paddingBottom: '10px', paddingTop: '0px' }}>What would you like to have during our business meeting?</p>
                              <ul className="grid grid-cols-2 xs:grid-cols-4">
                                <li className="w-full">
                                  <div className="optionbox flex gap-5">
                                    <input type="radio" id="option1" name="snack" required value="Black Tea" />
                                    <label className="text-black font-SF-Pro-Regular whitespace-nowrap leading-[1.2]" htmlFor="option1" style={{ fontSize: '14px' }}>Black Tea</label>
                                  </div>
                                </li>
                                <li className="w-full">
                                  <div className="optionbox flex gap-5">
                                    <input type="radio" id="option2" name="snack" required value="Green Tea" />
                                    <label className="text-black font-SF-Pro-Regular whitespace-nowrap leading-[1.2]" htmlFor="option2" style={{ fontSize: '14px' }}>Green Tea</label>
                                  </div>
                                </li>
                                <li className="w-full">
                                  <div className="optionbox flex gap-5">
                                    <input type="radio" id="option5" name="snack" required value="Coffee" />
                                    <label className="text-black font-SF-Pro-Regular whitespace-nowrap leading-[1.2]" htmlFor="option5" style={{ fontSize: '14px' }}>Coffee</label>
                                  </div>
                                </li>
                                <li className="w-full">
                                  <div className="optionbox flex gap-5">
                                    <input type="radio" id="option6" name="snack" required value="Virtual Tea" />
                                    <label className="text-black font-SF-Pro-Regular whitespace-nowrap leading-[1.2]" htmlFor="option6" style={{ fontSize: '14px' }}>Virtual Tea</label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="w-full xl:mt-[0.5rem] h-full flex flex-col justify-center gap-y-[0.7rem]">
                              <button type="submit" className="text-[18px] mt-[10px] text-white w-full bg-[#140844] font-SF-Pro-Bold py-[16px] rounded-md" style={{ letterSpacing: '1px' }}>Yes, call me!</button>
                              <p className="font-GalanoRegular text-center" style={{ lineHeight: '1.3', fontSize: '14px', paddingBottom: '15px' }}>We call back in 10-30 minutes, guaranteed!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
 
  
  );
}
