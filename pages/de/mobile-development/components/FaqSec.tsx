import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const Frequently = [
  {
    num: "1",
    title: "Welche Technologien und Sprachen unterstützt Comfygen für die mobile App-Entwicklung?",
    desc: "Bei Comfygen setzen wir auf führende Technologien im Bereich der mobilen App-Entwicklung, darunter Swift, Kotlin, React Native, Flutter, und viele mehr. Unsere Experten sind vielseitig und können eine Vielzahl von Technologien und Sprachen einsetzen, um eine maßgeschneiderte Lösung für Ihre Bedürfnisse zu entwickeln.",
  },
  {
    num: "2",
    title: " Wie lange dauert es normalerweise, eine mobile App von Comfygen entwickeln zu lassen?",
    desc: "Die Zeit, die für die Entwicklung einer mobilen App benötigt wird, variiert je nach Komplexität des Projekts, den gewünschten Funktionen und der Designanforderungen. In der Regel kann die Entwicklung einer qualitativ hochwertigen mobilen App mehrere Wochen bis zu mehreren Monaten dauern. Bei Comfygen achten wir darauf, einen realistischen Zeitrahmen festzulegen und transparente Kommunikation während des gesamten Entwicklungsprozesses zu gewährleisten.",
  },
  {
    num: "3",
    title: " Bietet Comfygen Unterstützung und Wartung nach der Bereitstellung der mobilen App?",
    desc: "Ja, bei Comfygen verstehen wir den Wert von kontinuierlicher Unterstützung und Wartung nach der Bereitstellung einer mobilen App. Unser Team ist darauf ausgerichtet, Ihre App auch nach der Veröffentlichung zu betreuen, um sicherzustellen, dass sie reibungslos funktioniert, sicher und aktuell bleibt, sowie den sich ändernden Anforderungen und Technologietrends gerecht wird.",
  },
  {
    num: "4",
    title: " Kann Comfygen bei der Integration von Drittanbieter-APIs in die mobile App helfen? ",
    desc: "Absolut, unsere Experten bei Comfygen sind erfahren in der nahtlosen Integration von Drittanbieter-APIs in mobile Apps. Ob es sich um Zahlungs-Gateways, Social-Media-Integrationen oder andere externe Dienste handelt, wir können sicherstellen, dass Ihre App reibungslos mit den erforderlichen APIs kommuniziert.",
  },
  {
    num: "5",
    title: "Wie sieht der Support- und Kommunikationsprozess während der Entwicklung einer mobilen App mit Comfygen aus?",
    desc: "Bei Comfygen legen wir großen Wert auf Transparenz und offene Kommunikation mit unseren Kunden. Während des gesamten Entwicklungsprozesses erhalten Sie regelmäßige Updates, Fortschrittsberichte und haben die Möglichkeit, Feedback zu geben. Unser Support-Team steht Ihnen jederzeit zur Verfügung, um Fragen zu beantworten und Unklarheiten zu beseitigen.",
  }
];

export default function GuidSectionBlockchain() {
  const [currentCount, setCurrentCount] = useState("");
  return (
    <section className=" bg-slate-100">
      <div className=" mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  lg:px-0  px-6 lg:py-20 py-10">
        <div className="md:space-y-10 space-y-6  w-full">
          <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center 2xl:leading-[3.5rem] xl:leading-[2.5rem] leading-[2rem] capitalize">
          Häufig gestellte Fragen (FAQs) zu den Mobilen App-Entwicklungsdiensten von Comfygen
          </h2>
          <div className="w-full py-4 space-y-4">
            {Frequently.map((elem: any, index: any) => {
              const { title, desc, li1, li2, li3, li4, li5, li6, } = elem;
              return (
                <div key={index} className="bg-white border cursor-pointer w-full rounded-lg"
                  onClick={() => setCurrentCount(currentCount === index ? false : index)}>
                  <div className="flex items-start justify-center w-full px-4 py-4 text-base font-medium text-left md:items-center md:px-6 text-slate-800 md:text-lg">
                    <h3 className="w-full text-base font-semibold md:text-lg">
                      {title}
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className={currentCount === index ? "icon icon-tabler icon-tabler-chevron-down rotate-180 transition-all duration-200" : "icon icon-tabler icon-tabler-chevron-down rotate-0 transition-all duration-200"} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  <div className={currentCount === index ? "py-6 px-6 text-black space-y-3 text-sm md:text-base transition-height duration-200 min-h-40" : "pt-0 px-6 text-black space-y-3 text-sm md:text-base transition-height duration-200 min-h-0 h-0 overflow-hidden"}>
                    <p>{desc}</p>
                    <ul>
                      <li>{li1}</li>
                      <li>{li2}</li>
                      <li>{li3}</li>
                      <li>{li4}</li>
                      <li>{li5}</li>
                      <li>{li6}</li>
                    </ul>
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
