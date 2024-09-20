import { useState } from 'react';
import styles from '../styles.module.css';
import Link from 'next/link';
import Image from "next/image";

const TabItems = [
  "Blockchain",
  "Frontend",
  "Programming",
  "Database",
  "UI/UX",
  "Cloud Services",
  "APIs",
  "Authentication",
  "Push Notifications",
  "Analytics",
  "Version Control"
];

const TechStack = {
  Blockchain: [
    { img: "/img/react.webp", alt: 'React', title: "React", url: "/react-js-development", num: "1" },
    { img: "/img/angular.webp", alt: 'Angular', title: "Angular", url: "#", num: "2" },
    { img: "/svg/tech/nextjs-original.svg", alt: 'Next.js', title: "Next.js", url: "/next-js-development", num: "3" },
    { img: "/img/Vue.Js-icon.webp", alt: 'Vue.js', title: "Vue.js", url: "#", num: "4" },
    { img: "/img/flutter.webp", alt: 'Flutter', title: "Flutter", url: "#", num: "5" },
    { img: "/img/kotlin.webp", alt: 'Kotlin', title: "Kotlin", url: "#", num: "6" },
    { img: "/svg/tech/html5-original.svg", alt: 'HTML5 & CSS3', title: "HTML5 & CSS3", url: "#", num: "7" },
    { img: "/img/swift.webp", alt: 'Swift', title: "Swift", url: "#", num: "8" },
    { img: "/img/xamarin.webp", alt: 'Xamarin', title: "Xamarin", url: "#", num: "8" }
  ],
  Frontend: [
    { img: "/svg/tech/nodejs-original.svg", alt: 'Node.js', title: "Node.js", url: "/node-js-development", num: "1" },
    { img: "/images/python-stack-technology.webp", alt: 'Python', title: "Python", url: "/python-development", num: "2" },
    { img: "/img/rails.svg", alt: 'Ruby On Rails', title: "Ruby On Rails", url: "#", num: "3" },
    { img: "/img/PHP-logo.svg", alt: 'PHP', title: "PHP", url: "#", num: "4" },
    { img: "/img/java-icon-img.webp", alt: 'Java', title: "Java", url: "#", num: "5" },
    { img: "/img/django.svg", alt: 'Django', title: "Django", url: "#", num: "6" },
    { img: "/svg/tech/javascript-original.svg", alt: 'Express.js', title: "Express.js", url: "#", num: "7" },
    { img: "/img/spring.svg", alt: 'Spring Boot', title: "Spring Boot", url: "", num: "8" }
  ],
  Programming: [
    { num: "1", img: "/img/ios-apple.svg", url: "#", title: "iOS" },
    { num: "2", img: "/img/android-os.svg", url: "#", title: "Android" },
    { num: "3", img: "/img/react-native-icon.svg", url: "/react-native-development", title: "React Native" },
    { num: "4", img: "/img/flutter-icon.svg", url: "/flutter-development-company", title: "Flutter" }
  ],
  Database: [
    { img: "/img/amazon-web-services-(aws).webp", alt: 'Amazon Web Services (AWS)', title: "Amazon Web Services (AWS)", num: "1", url: "#" },
    { img: "/img/google-cloud-messaging-(gcm).webp", alt: 'Google Cloud Platform (GCP)', title: "Google Cloud Platform (GCP)", num: "2", url: "#" },
    { img: "/img/microsoft-azure.webp", alt: 'Microsoft Azure', title: "Microsoft Azure", num: "3", url: "#" }
  ],
  "UI/UX": [
    { img: "/img/adobe-xd.svg", alt: 'Adobe XD', title: "Adobe XD", num: "1", url: "#" },
    { img: "/img/sketch.svg", alt: 'Sketch', title: "Sketch", num: "2", url: "#" },
    { img: "/img/figma-icon-img.svg", alt: 'Figma', title: "Figma", num: "3", url: "#" },
    { img: "/img/invision.svg", alt: 'InVision', title: "InVision", num: "4", url: "#" },
    { img: "/img/zeplin.svg", alt: 'Zeplin', title: "Zeplin", num: "5", url: "#" }
  ],
  "Cloud Services": [
    { img: "/img/swift-(for-ios).webp", alt: 'Swift (for iOS)', title: "Swift (for iOS)", num: "1", url: "#" },
    { img: "/img/kotlin-(for-android).webp", alt: 'Kotlin (for Android)', title: "Kotlin (for Android)", num: "2", url: "#" },
    { img: "/img/javaScript-(for-web-apps).webp", alt: 'JavaScript (for web apps)', title: "JavaScript (for web apps)", num: "3", url: "#" }
  ],
  APIs: [
    { img: "/img/restful-apis.webp", alt: 'RESTful APIs', title: "RESTful APIs", num: "1", url: "#" },
    { img: "/img/graphql-icon.webp", alt: 'GraphQL', title: "GraphQL", num: "2", url: "#" },
    { img: "/img/websocket-apis.webp", alt: 'WebSocket APIs', title: "WebSocket APIs", num: "3", url: "#" }
  ],
  Authentication: [
    { img: "/img/oAuth-2.0.webp", alt: 'OAuth 2.0', title: "OAuth 2.0", num: "1", url: "#" },
    { img: "/img/jwt-(json-web-tokens).webp", alt: 'JWT (JSON Web Tokens)', title: "JWT (JSON Web Tokens)", num: "2", url: "#" },
    { img: "/img/Firebase-Authentication.webp", alt: 'Firebase Authentication', title: "Firebase Authentication", num: "3", url: "#" }
  ],
  "Push Notifications": [
    { img: "/img/Firebase-Authentication.webp", alt: 'Firebase Cloud Messaging (FCM)', title: "Firebase Cloud Messaging (FCM)", num: "1", url: "#" },
    { img: "/img/apple-push-notification-service-(apns).webp", alt: 'Apple Push Notification Service (APNs)', title: "Apple Push Notification Service (APNs)", num: "2", url: "#" },
    { img: "/img/google-cloud-messaging-(gcm).svg", alt: 'Google Cloud Messaging (GCM)', title: "Google Cloud Messaging (GCM)", num: "3", url: "#" }
  ],
  Analytics: [
    { img: "/img/google-analytics.webp", alt: 'Google Analytics', title: "Google Analytics", num: "1", url: "#" },
    { img: "/img/firebase-analytics.webp", alt: 'Firebase Analytics', title: "Firebase Analytics", num: "2", url: "#" },
    { img: "/img/sentry.webp", alt: 'Sentry', title: "Sentry", num: "3", url: "#" }
  ],
  "Version Control": [
    { img: "/img/git.webp", alt: 'Git', title: "Git", num: "1", url: "#" },
    { img: "/img/github.webp", alt: 'GitHub', title: "GitHub", num: "2", url: "#" },
    { img: "/img/bitbucket.webp", alt: 'Bitbucket', title: "Bitbucket", num: "3", url: "#" }
  ]
};

const Panelheader = [
  {
    num: "01",
    title: <h2 className='py-4 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize'> <span className='text-blue-600'>Technologies to Use  </span> for Laboratory App Development</h2>,
    decs: "Comfygen is known as the best laboratory app development company, so apparently we believe in using cutting edge technologies to build laboratory mobile applications. The technologies will create a worthy app with competitive nature:"
  },
];
export default function GuidSectionBlockchain() {
  const [tech, setTech] = useState('Blockchain');

  return (
    <section className='py-10 bg-[#223547]'>
      <div className="space-y-2 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
        {Panelheader.map((elem, index) => (
          <div key={index} className="flex flex-col justify-center text-center mx-auto">
            {elem.title}
            <p className='text-white'>{elem.decs}</p>
          </div>
        ))}
        <div className="xl:flex items-start xl:space-x-16 xl:space-y-0 space-y-8 w-full py-10">
          <div className={`${styles.tabsec} flex flex-col items-start space-y-10 justify-start xl:w-[40%] bg-[#72ABDA] p-8 rounded-xl w-full`}>
            {TabItems.map((elem, index) => (
              <span
                key={index}
                onClick={() => setTech(elem)}
                className={`${tech === elem
                  ? "bg-white border border-blue-600 text-[#223547]"
                  : "bg-transparent text-white border border-white-600"
                  } px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full`}
              >
                {elem}
              </span>
            ))}
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 divide-x-1 md:gap-6 gap-4 relative capitalize xl:w-[60%] w-full">
            {TechStack[tech]?.map((elem) => (
              <Link key={elem.num} href={elem.url} passHref>
                <div className={`${styles.TabItem} flex flex-col justify-center items-center rounded-lg bg-white space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border`}>
                  <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center">
                    <Image src={elem.img} alt={elem.title} width={50} height={50} className="group-hover:scale-105 transition-all duration-200 transform" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">{elem.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
