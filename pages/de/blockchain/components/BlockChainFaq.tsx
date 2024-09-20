import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const Frequently = [
  {
    num: "1",
    title: "Wie viel kostet die Entwicklung einer Blockchain-App?",
    desc: "Die Kosten variieren je nach Faktoren wie Anwendungskomplexität, integrierten Technologien, Einbindung von Stakeholdern, Branchenanforderungen, Compliance-Anforderungen und mehr. Im Durchschnitt liegen die Kosten zwischen 20.000 𝑡𝑜 40.000. Der beste Weg, genaue Kosten zu erhalten, besteht darin, den Entwicklern Ihre Geschäftsvision und -ziele mitzuteilen, um ein maßgeschneidertes Angebot zu erhalten.",
  },
  {
    num: "2",
    title: " Auf welchen Blockchain-Plattformen arbeiten Sie?",
    desc: "Wir sind auf dApps, Smart Contracts, Kryptowährungslösungen und verschiedene Blockchain-Anwendungen auf Plattformen wie Ethereum, Steller, PolkaDot, Quorum, Multichain, Hyperledger, Tron und Solana spezialisiert. Unser Ziel ist es, neue Sicherheitsmaßstäbe für KMUs bis hin zu Großunternehmen zu setzen und maßgeschneiderte Lösungen zu finden, die zu Ihrer Geschäftsvision für Expansion und Wachstum passen.",
  },
  {
    num: "3",
    title: "Wie lange dauert der Aufbau einer Blockchain-Lösung?",
    desc: "Im Durchschnitt beträgt die Entwicklungsdauer etwa 2-3 Monate, dieser Zeitrahmen kann jedoch je nach Faktoren wie Projektumfang, Anwendungskomplexität und Größe des Entwicklungsteams variieren. Unser Team wird das Projekt gründlich bewerten und einen klaren Zeitplan für die Entwicklung vorlegen.",
  },
  {
    num: "4",
    title: "Kann ich dedizierte Blockchain-Entwickler einstellen?",
    desc: "Ja, die Beauftragung eines dedizierten Blockchain-Entwicklers für Ihr Projekt ist machbar. Wenden Sie sich einfach an unseren Projektmanager, um den Projektumfang zu besprechen, die Verfügbarkeit von Entwicklern zu erfahren und die Details für die Einstellung spezieller Mitarbeiter entsprechend Ihren Anforderungen festzulegen.",
    
  },
  {
    num: "5",
    title: " Kann ich auf das Blockchain-Entwicklungsprojekt zugreifen?",
    desc: "Auf jeden Fall erhalten Sie regelmäßig Updates über den Fortschritt, die Erfolge, die Herausforderungen und den Gesamtstatus des Projekts. Wir legen Wert auf Transparenz und stellen sicher, dass Sie umfassend über den Projektstatus informiert sind. Diese offene Kommunikation trägt dazu bei, dass Sie auf dem Laufenden bleiben und in den Entwicklungsprozess einbezogen werden.",
  }
];

export default function GuidSectionBlockchain() {
  const [currentCount, setCurrentCount] = useState("");
  return (
    <section className=" bg-slate-100">
      <div className=" mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  lg:px-0  px-6 lg:py-20 py-10">
        <div className="md:space-y-10 space-y-6  w-full">
          <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center 2xl:leading-[3.5rem] xl:leading-[2.5rem] leading-[2rem] capitalize">
          Häufig   <b className="font-bold text-blue-600"> gestellte Fragen (FAQs) zur </b>
            Blockchain-Entwicklung
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
