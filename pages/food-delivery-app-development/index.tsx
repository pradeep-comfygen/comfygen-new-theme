import Image from "next/image";
import { MdFeaturedPlayList } from "react-icons/md";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Head from "next/head";
import { FaRegNewspaper } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { RxComponent1 } from "react-icons/rx";
import { CgStack } from "react-icons/cg";
import { IoGridOutline } from "react-icons/io5";
import { RxDot } from "react-icons/rx";
import dynamic from "next/dynamic";
import EcomCom from "../components/EcomCom";
import JSON_DATA from "./json/ecommerceapp.json";
import styles from "./styles.module.css";
import { RiCustomerServiceLine } from "react-icons/ri";
import Tech from "./components/tech";
import SocialTab from "./components/SocialTab";
import { GiTeamIdea } from "react-icons/gi";
import HeroSectionForFoodDelivery from "./components/HeroSectionForFoodDelivery";
import NEW_JSON_DATA from "./json/fooddel.json";

const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});
const Advice = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const WhycomfygenSection = dynamic(
  () => import("../components/WhycomfygenSection"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const NewSection = dynamic(() => import("../components/NewSection"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});

const jsonLdData = {
  "@context": "http://www.schema.org",
  "@type": "Product",
  brand: "Comfygen Private Limited",
  name: "On-Demand Food Delivery App Development Company in India and USA - Food/Meal Delivery App Development Service",
  image:
    "https://www.comfygen.com/img/on-demand-food-delivery-solution.webp&w=640&q=75",
  description:
    "Comfygen is a leading food delivery app development Company. We provide the best custom and whitelabel food delivery application development services like Zomato, Swiggy, Talabat, Deliveroo, DoorDash, GrubHub and Many more to enterprises & startups worldwide.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1127",
  },
};

const Chartacterstics = [
  {
    num: "1",
    img: "/img/strong-digital-presence.webp",
    title: "Strong Digital Presence ",
    decs: (
      <p className="break-all text-slate-800 ">
        In the present-day international enterprise, having a robust online
        presence is important to success. Restaurants and meal companies can
        create an interesting and person-pleasant platform that accurately
        represents their brand identity by using meal shipping app improvement
        services.
      </p>
    ),
    decs1: (
      <p>
        {" "}
        In addition to growing visibility, a nicely designed app is a powerful
        advertising device that allows businesses to display their menu, special
        offers, and precise selling points. In today's technologically superior
        world, having a strong online presence is important to ultimately be
        relevant and competitive, not just positive.
      </p>
    ),
  },
  {
    num: "3",
    img: "/img/easy-tracking-and-report-analysis.webp",
    title: "Easy Tracking and Report Analysis",
    decs: (
      <p className="break-all text-slate-800 ">
        Customer satisfaction is greatly stimulated through transparency, and
        actual-time tracking functions are sturdy in shape for food transport
        app development services. Consumers can screen the development of their
        orders from instruction to transport, which builds confidence and
        improves the user's enjoyment as a whole.
      </p>
    ),
    decs1: (
      <p className="break-all text-slate-800 ">
        Furthermore, businesses can use state-of-the-art analytics capabilities
        constructed into the app to analyze more approximately popular menu
        objects, height ordering durations, and purchaser behavior. Businesses
        are able to adjust to shifting marketplace dynamics, make properly
        informed selections, and enhance their strategies thanks to this
        records-driven approach.{" "}
      </p>
    ),
  },
  {
    num: "2",
    img: "/img/save-time-and-human-intervention.webp",
    title: "Save Time and Human Intervention",
    decs: (
      <p className="break-all text-slate-800 ">
        By getting rid of the want for manual intervention, automating the
        ordering and transport technique minimizes mistakes and streamlines
        operations. Both customers and organizations can save time by
        effortlessly placing orders, tracking deliveries, and browsing menus. By
        releasing personnel to concentrate on important obligations like food
        training and pleasant assurance, the automation of repetitive duties
        enhances the overall efficiency of the meal transport environment.
      </p>
    ),
  },

  {
    num: "4",
    img: "/img/payment-gateway-integration.webp",
    title: "Payment Gateway Integration",
    decs: (
      <p className="break-all text-slate-800 ">
        For any meal shipping app to prevail, bills should be made quickly and
        securely. Strong payment gateway integration is a characteristic of
        meals transport app development offerings, allowing users to make
        payments comfortably using a whole lot of channels like credit
        score/debit playing cards, virtual wallets, or other online charge
        alternatives. This gives an easy and safe fee process, which improves
        consumer enjoyment whilst also supporting retaining clients.
      </p>
    ),
  },
  {
    num: "5",
    img: "/img/api-integration.webp",
    title: "API Integration",
    decs: (
      <p className="break-all text-slate-800 ">
        Modern technological solutions are characterized by their
        interconnectedness, and food delivery app development services use API
        integration to build an ecosystem that works as a whole. The app's
        capability is advanced through integrating with third-birthday party
        services like mapping and geolocation APIs for unique deals with
        monitoring. Additionally, APIs can be used to process orders, control
        inventory, and establish connections with other structures, all of which
        assist meal transport businesses in building a streamlined and cohesive
        virtual infrastructure.
      </p>
    ),
  },
  {
    num: "7",
    img: "/img/setup-server-backup.webp",
    title: "Setup Server Backup",
    decs: (
      <p className="break-all text-slate-800 ">
        It is impossible to exaggerate the significance of data security and
        continuity when developing food delivery apps. An important part of
        these services is server backup setup, which ensures that vital
        information, which includes customer records, order history, and menu
        info, is robotically and securely subsidized. A strong server backup
        system ensures much less fat loss and helps quick recovery in the event
        of unanticipated events or technical problems, permitting businesses to
        keep operational continuity and uphold purchaser beliefs.
      </p>
    ),
  },
  {
    num: "6",
    img: "/img/app-store-submissions-and-optimisation.webp",
    title: "App Store Submissions and Optimisation",
    decs: (
      <p className="break-all text-slate-800 ">
        Users' access to the app depends on careful consideration of app store
        submissions and optimization. App development services for food delivery
        include knowledge of how to navigate app store submission procedures and
        make sure the app complies with all rules and specifications.{" "}
      </p>
    ),
    decs1: (
      <p className="break-all text-slate-800 ">
        Additionally, search engine optimization strategies are utilized to
        improve the utility's visibility in search effects, raising the
        probability that prospective customers will locate it. Having a strong
        online presence within the app is critical for developing the person
        base and drawing in new clients.{" "}
      </p>
    ),
  },
];
const Hireexpert = [
  {
    num: "1",
    img: "/img/certified-developers.webp",
    title: "  User Login and Registration",
    decs: (
      <p className="break-all text-slate-800 ">
        Our online meal delivery app service at ComfyGen starts with a quick and
        easy registration process. By entering basic information like name,
        email address, and contact details, users can create accounts with ease.
        In order to customize the user revel in and make order monitoring and
        communication less difficult within the future, this step is critical.
        After registering, users can quick and easily access the app's functions
        by means of securely logging in with their credentials.
      </p>
    ),
  },
  {
    num: "3",
    img: "/img/portfolio-and-previous-food-delivery-app-projects.webp",
    title: " Browsing and Selection of Restaurants",
    decs: (
      <p className="break-all text-slate-800 ">
        After efficaciously logging in, customers are shown an smooth-to-use
        interface that lets them explore the extensive type of restaurants the
        platform has to offer. Our app gives a wealth of information about each
        eating place, such as menus, prices, cuisines, and evaluations from
        shoppers. Customers can without problems explore the product way to its
        person-pleasant design, which supports them in making selections
        primarily based on their options. Users can without problems find new
        eating options by means of using filtering alternatives like cuisine
        type, delivery time, and scores, which in addition improve the surfing
        experience.{" "}
      </p>
    ),
  },
  {
    num: "2",
    img: "/img/understanding-of-the-latest-industry-trends.webp",
    title: "Placing Orders",
    decs: (
      <p className="break-all text-slate-800 ">
        After selecting their favourite eating place, clients can without
        difficulty region an order on line. Customers can fast upload products
        to their virtual carts, modify orders, and test their selections earlier
        than confirming because of the consumer-pleasant interface of our app.
        We provide features like order history, which let users repeat past
        orders with just one click, to increase convenience. Additionally, the
        app estimates delivery times, informing users and guaranteeing a clear
        and effective ordering process
      </p>
    ),
  },

  {
    num: "4",
    img: "/img/collaboration-icon.svg",
    title: " Payment Options",
    decs: (
      <p className="break-all text-slate-800 ">
        Users of ComfyGen's online meal transport app can select from a lot of
        secure and handy fee strategies. The seamless and secure transaction
        experience that our app offers is made viable by using its integration
        with reliable and stable charge gateways, which be given credit/debit
        cards, virtual wallets, and other on line payment strategies.
        Transparency and trust between users, the app, and the affiliated
        restaurants are promoted by the clear payment confirmations and receipts
        that are generated.{" "}
      </p>
    ),
  },
  {
    num: "5",
    img: "/img/adherence-to-industry-regulations.webp",
    title: "Tracking Deliveries",
    decs: (
      <p className="break-all text-slate-800 ">
        Real-time order tracking is one of our online meal delivery service's
        best features. Through an interactive map interface, users can track
        their deliveries in real-time after confirming the order and making the
        payment. Real-time updates on the delivery person's whereabouts,
        anticipated arrival time, and other pertinent information are provided
        by this feature. With a clear picture of when their delectable meal will
        arrive at their door, the tracking feature gives users an extra layer of
        excitement and transparency.
      </p>
    ),
  },
  {
    num: "6",
    img: "/img/adherence-to-industry-regulations.webp",
    title: "Order Confirmation and Notifications",
    decs: (
      <p className="break-all text-slate-800 ">
        Users receive instant order confirmation notifications after placing a
        successful order. Important information like the order summary, the
        anticipated delivery time, and a distinct order ID are included in these
        notifications. Users are kept informed at every step of the process by
        receiving regular updates that include the order's status (prepared, out
        for delivery, delivered). Proactive communication lowers uncertainty and
        improves customer satisfaction by guaranteeing a smooth and stress-free
        experience.
      </p>
    ),
  },
  {
    num: "7",
    img: "/img/adherence-to-industry-regulations.webp",
    title: " Feedback and Reviews",
    decs: (
      <p className="break-all text-slate-800 ">
        Users can offer reviews and comments based on their experiences after
        the order is delivered. Users of our app are welcome to comment on the
        overall service, delivery time, and quality of the food. In addition to
        allowing users to voice their opinions, this two-way communication gives
        eateries and the app service insightful information that promotes a
        cycle of continuous improvement.
      </p>
    ),
  },
  {
    num: "8",
    img: "/img/adherence-to-industry-regulations.webp",
    title: "  Customer Support",
    decs: (
      <p className="break-all text-slate-800 ">
        Customer support is a top priority for ComfyGen, and any questions or
        issues will be promptly resolved. Through the app, users can quickly get
        in touch with a dedicated customer support channel for help with orders,
        refunds, or general questions. Our amiable and effective support staff
        makes sure that customers feel understood and appreciated, which
        enhances their overall experience.
      </p>
    ),
  },
];
const Features = [
  {
    num: "1",
    img: "/img/user-app.webp",
    title: "User APP",
    decs: (
      <p className="break-all text-slate-800 ">
        The person app offers easy and intuitive enjoyment and is the entry
        point to an international gastronomic delights. Customers might also
        easily explore various eating places, cuisines, and menu items thanks to
        its aesthetically beautiful interface. Users can discover their desired
        dining alternatives based totally on criteria like cuisine type,
        vicinity, and scores, which is a way to sturdy seek and clear out
        options. A glad consumer's enjoyment is facilitated through customizable
        orders, secure fee methods, and the ease of actual-time order
        monitoring.{" "}
      </p>
    ),
  },
  {
    num: "2",
    img: "/img/restaurant-app.webp",
    title: "Restaurant App Development",
    decs: (
      <p className="break-all text-slate-800 ">
        Restaurants come with a particular app that makes coping with their
        online presence more effective. With the help of this app, restaurants
        can pick out and update their menus in actual time, giving purchasers
        proper access to modern picks. Notifications permit eating places to
        answer client wishes via the use of alerting them as fast as orders are
        obtained, decreasing processing time. Restaurants can create and manage
        reductions, promotions, and unique offers with the assistance of the
        app, which moreover has capabilities as a promotional device.
      </p>
    ),
  },
  {
    num: "3",
    img: "/img/real-time-order-tracking.webp",
    title: "Real-Time Order Tracking",
    decs: (
      <p className="break-all text-slate-800 ">
        A crucial feature that helps customers, restaurants, and shipping
        personnel is actual-time order tracking. From the time an order is
        placed to the factor of shipping, customers can follow its development.
        In addition to imparting facts to customers, this transparency enables
        users to manipulate their expectancies for transport instances.
        GPS-enabled tracking guarantees first-rate feasible navigation for
        transport personnel, resulting in timely and effective deliveries.
      </p>
    ),
  },
  {
    num: "4",
    img: "/img/delivery-app-icon.webp",
    title: "Delivery App Development",
    decs: (
      <p className="break-all text-slate-800 ">
        The delivery app's goal is to make shipping personnel's duties extra
        efficient so that you can send entire orders quickly and as they should
        be. It makes it easier to assign orders based on proximity, which
        maximizes the effectiveness of transport routes. To ensure precise and
        well-timed deliveries, the app makes use of GPS monitoring to direct the
        shipping body of workers to the restaurant and user locations.
        Capabilities for transport confirmation provide a radical photograph of
        order fulfillment.
      </p>
    ),
  },
  {
    num: "5",
    img: "/img/admin-panel-icon'.webp",
    title: "Admin Panel",
    decs: (
      <p className="break-all text-slate-800 ">
        The admin panel, which serves as the device's valuable gadget, provides
        a centralized hub for going for walks and the net meal ordering and
        delivery enterprise. A thorough dashboard provides statistics on sales,
        order volumes, consumer behavior, and critical metrics. Administrators
        can effectively supervise and manage user debts and restaurant
        partnerships and guarantee that platform policies are observed. In
        addition, the admin panel is vital for managing economic transactions,
        commission structures, reporting, and payment and commission
        administration.
      </p>
    ),
  },
  {
    num: "6",
    img: "/img/advanced-feature.webp",
    title: "Advanced Feature",
    decs: (
      <p className="break-all text-slate-800 ">
        Advanced capabilities beautify the platform's sophistication and
        competitiveness beyond its core functionalities. Customers can be
        engaged by sending out push notifications with pertinent statistics,
        order confirmations, and updates on promotions. Support for more than
        one language ensures accessibility for a wide variety of users, taking
        into consideration their linguistic alternatives. Users are empowered to
        percentage their stories through comments and rating structures, which
        sell duty and permit ongoing development. With the help of an in-app
        chat aid, users, eating places, and shipping groups of workers can speak
        without difficulty, and troubles may be quickly resolved.
      </p>
    ),
  },
];

const FoodAppMaker = [
  {
    num: "1",
    img: "/img/convenience.webp",
    title: "Convenience",
    decs: (
      <p className="break-all text-white text-start ">
        Our food app creator places a high value on user comfort, providing a
        smooth and intuitive interface that revolutionizes dining. With a few
        taps on their mobile devices, customers can browse menus and discover
        lots of restaurants and area orders. Users can easily navigate from menu
        choice to stable charge with the help of the user-pleasant layout, which
        puts the world of cuisine at their fingertips{" "}
      </p>
    ),
  },
  {
    num: "2",
    img: "/img/user-centric-design-approach.webp",
    title: "Time-Saving",
    decs: (
      <p className="break-all text-white text-start ">
        Our food app creator is built around efficiency. Users can save a
        significant amount of time by expediting the ordering process compared
        to traditional dine-in or phone order scenarios. Users can enjoy their
        favorite meals without needless delays because of the app's expedited
        experience, which includes quick order placement, easy navigation, and
        real-time tracking.
      </p>
    ),
  },
  {
    num: "3",
    img: "/img/variety-of-choices.webp",
    title: "Variety of Choices",
    decs: (
      <p className="break-all text-white text-start ">
        Our food app developer values diversity. Customers have access to a wide
        style of culinary options, which includes both worldwide and regional
        specialties. Thanks to the app's extensive eating place network,
        customers of all tastes and options can discover and experience a wide
        variety of dishes. The app offers customers a wide variety of options at
        their fingertips, irrespective of their possibilities for consolation
        meals, global delicacies, or healthful alternatives.
      </p>
    ),
  },
  {
    num: "4",
    img: "/img/delivery-efficiency.webp",
    title: "Delivery Efficiency",
    decs: (
      <p className="break-all text-white ">
        The creator of our meal app prioritizes effective delivery. Smooth
        communication channels, GPS-enabled delivery staff navigation, and
        real-time order tracking all help to make delivery processes
        well-planned and effective. Customers can follow their orders from the
        time they place them until they are delivered, guaranteeing openness and
        prompt delivery of their preferred meals.
      </p>
    ),
  },
];
const Arena = [
  {
    num: "1",
    icon: (
      <img
        src="/img/single-restaurants.webp"
        width={100}
        height={100}
        alt=" Restaurant Food Delivery App"
      />
    ),
    title: "Single Restaurant Food Delivery App development",
    decs: "Comfygen makes it easier for individual restaurants looking to build a strong online presence to create customized on-demand food delivery app development services. This model gives independent restaurants the freedom to control their branding, menu selections, and pricing policies. ",
    decs1:
      "Single restaurants can establish a direct relationship with their patrons and offer a more customized experience by having their own dedicated app. With the help of Comfygen, these businesses can manage their delivery logistics in-house or in conjunction with nearby couriers, providing a smooth and managed experience.",
    decs2:
      "Still, independent eateries might have trouble getting noticed in a cutthroat market. In order to solve this, Comfygen incorporates powerful marketing tools into the app, helping eateries increase their clientele and reach.",
  },
  {
    num: "2",
    icon: (
      <img
        src="/img/food-chain-stores.webp"
        width={100}
        height={100}
        alt="Food chain image"
      />
    ),
    decs: (
      <p>
        Comfygen offers{" "}
        <a href="/mobile-app-development" className="text-blue-500">
          mobile app development services{" "}
        </a>{" "}
        that help restaurant chains and franchises create a unified platform.
        This makes it possible for chain stores to provide a single online
        presence for a number of locations while keeping branding, menu
        selections, and prices constant. This model ensures a consistent
        customer experience while increasing efficiency by centralizing order
        management and delivery operations.{" "}
      </p>
    ),
    decs1:
      "Despite these benefits, there can be difficulties in overseeing franchisee coordination and upholding a consistent brand image across various locations. To solve these problems, Comfygen collaborates closely with grocery chains, offering flexible and scalable solutions that improve customer satisfaction and operational efficiency.",
    title: "Food chain stores Food Delivery App development",
  },
  {
    num: "3",
    icon: (
      <img
        src="/img/cloud-kitchen.webp"
        width={100}
        height={100}
        alt="Cloud Kitchen image"
      />
    ),
    decs: "Comfygen is aware of how cloud kitchens are becoming more and more common in the food delivery sector. Our mobile app development services enable online-only restaurants to operate virtually, doing away with the requirement for actual dine-in locations. Because they don't need prime retail locations, cloud kitchens provide affordable solutions. From the same kitchen, operators can test out several virtual restaurant concepts, giving patrons a variety of culinary choices.",
    decs1:
      "For cloud kitchens, however, building a brand presence is essential because they might not receive traditional foot traffic. Comfygen helps cloud kitchens differentiate themselves in a crowded market by providing strategic digital marketing solutions that help them develop and promote their brand. ",
    title: "Cloud Kitchen Food Delivery App development",
  },
  {
    num: "4",
    icon: (
      <img
        src="/img/food-delivery-aggregators.webp"
        width={100}
        height={100}
        alt="Food Delivery Aggregators image"
      />
    ),
    decs: "Comfygen specializes in creating applications for food delivery aggregators, meeting the increasing need for platforms that allow users to connect with a variety of eateries and culinary styles. Aggregators function as marketplaces, providing users with the convenience of comparing different restaurants in one location. The technology behind Comfygen guarantees an easy-to-use interface, effective delivery logistics, and features like reviews and ratings that help users and restaurants establish trust.",
    decs1:
      "Although they give consumers a lot of options, food delivery aggregators struggle with commission structures and fierce competition. Comfygen contributes to the success of the platform by working with aggregators to implement fair commission models and by incorporating cutting-edge features that improve the user experience overall. ",
    title: "Food Delivery Aggregators",
  },
];

let { AppService } = NEW_JSON_DATA;

export default function Ecommerce(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          Best Food Delivery App Development Company In India | Build Meal
          Delivery App 🛵
        </title>
        <meta
          name="description"
          content="Comfygen is your top choice for cost-effective food delivery app development company In India. Revolutionize your food business with efficient mobile app development solutions. Contact us today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/food-delivery-app-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best Food Delivery App Development Company In India & The USA | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen Your top choice for cost-effective food delivery app development company In India. Revolutionize your food business with efficient Food mobile app development services solutions. Contact us for Build Food Delivery App for iOS & Android today!"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/food-delivery-app-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:13:21+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/illuslator/banner_vector.webp?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="language" content="en-us" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>
      <div className="overflow-hidden">
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForFoodDelivery
                heading="Food Delivery App Development Company"
                ptag="Are you seeking to create a top-tier online food delivery application? Look no further than Comfygen Pvt. Ltd., a premier mobile app development company in India, specializing in on-demand food delivery app development services. With a focus on various on-demand meal delivery app development models to Build Food Delivery Applications, Comfygen ensures successful outcomes for your project.  "
                ptag1="Comfygen offers you a variety of benefits:"
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <AdviceSection
          heading="On-demand Food Delivery App  Development Solution"
          ptag=" Our on-demand meal transport development service provider at Comfygen transforms dining reviews via fast and easy linking customers with a wide variety of nearby eateries. With an interface that is simple to apply and accessible on both <a href='/ios-app-development' class='text-blue-600'>iOS app development</a>  and Android app development, the platform offers secure payments, personalized orders, and seamless browsing. "
          ptag1="Transparency and effective delivery are ensured through real-time order tracking with GPS integration. Comfygen works with a wide range of restaurants, regularly changing menus to offer a diverse range of cuisines. Trust and satisfaction are fostered by an improved user experience, which is enhanced by secure payment gateways and customer reviews. "
          ptag2="Orders are effectively managed by our strong backend system, guaranteeing a seamless experience. Comfygen is dedicated to upholding local laws, promoting food safety, and complying with regulations. Because loyalty programs and promotions inspire user engagement, Comfygen is the cross-to-supply for smooth, reliable, and exciting meal delivery development services."
          imgSrc="/img/on-demand-food-delivery-solution.webp"
          imgW={833}
          imgH={625}
          altTag="No 1 Food Delivery App Development Company In USA"
        />
        <div className="  bg-[#223547]">
          <section
            className=" bg-no-repeat bg-[center_bottom_0rem] 	bg-[length:200px_200px]"
            style={{ backgroundImage: `url("/img/cta-img.webp")` }}
          >
            <div className="flex flex-col-reverse items-center mx-auto space-y-10  lg:flex-row md:space-x-10 md:space-y-0 py-20">
              <div className="flex justify-center  lg:justify-end pb-10 lg:pb-0 w-full">
                <Image
                  className="rounded-md"
                  title="  Develop Smarter Financial Solutions for Your Business"
                  alt=" Delivery image"
                  src="/img/food-app-pic.webp"
                  height={923}
                  width={676}
                  loader={uploadcareLoader}
                  unoptimized={true}
                />
              </div>
              <div className="w-full space-y-6 text-left">
                <div className="space-y-2 pr-5">
                  <h2 className="lg:text-3xl text-2xl lg:font-bold font-semibold text-[#fff] ">
                    <span className="">
                      Build Food Delivery App Development{" "}
                    </span>{" "}
                    Like UberEats, Swiggy & Zomato
                  </h2>
                  <p className="text-sm text-white">
                    Our aim at Comfygen is to broaden a contemporary meals
                    shipping app by fusing the best factors of famous{" "}
                    <a href="/web-development" className="text-blue-500">
                      website development
                    </a>{" "}
                    like Uber Eats, Swiggy, and Zomato. Our intuitive interface
                    guarantees smooth enjoyment by allowing users to browse
                    numerous eating place alternatives quickly and without
                    problems, personalize orders, and properly make bills. .
                  </p>
                  <p className="text-sm text-white">
                    Real-time order tracking with GPS integration improves
                    online food delivery development efficiency and
                    transparency. Comfygen works with a large network of nearby
                    restaurants, regularly changing menus to provide a variety
                    of food options. A reliable platform is enhanced by ratings,
                    reviews, and secure payment gateways from customers.{" "}
                  </p>
                  <p className="text-sm text-white">
                    Orders are effectively managed by our reliable backend
                    system, which guarantees a seamless operational procedure.
                    Comfygen places a high priority on following local laws and
                    regulations, as well as promoting food safety. Promotional
                    tactics and loyalty programs raise user involvement and
                    establish Comfygen as a top option.
                  </p>
                </div>
                <div className="flex flex-row pr-5">
                  <a
                    href="https://api.whatsapp.com/send?phone=919587867258"
                    className="bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white px-8 py-3 text-lg text-sm rounded-full flex justify-center items-center space-x-1 w-fit font-semibold overflow-hidden relative group   cursor-pointer"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10 origin-center"></span>
                    Let's Communicate With IT Expert !
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div
            className="bg-center bg-repeat bg-fixed "
            style={{ backgroundImage: `url("/img/grid-box-dark.svg")` }}
          >
            <section className="bg-[#DBEAFE]">
              <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-14">
                <div className="space-y-4 text-center col-span-3">
                  <h2 className="text-4xl font-bold text-center text-[#0E1F51]">
                    Explore our Food Delivery App Development Services
                  </h2>
                  <p className="text-base text-slate-800 text-center ">
                    At Comfygen, we recognize that a smooth and intuitive online
                    experience is critical to the success of your meal delivery
                    business. Our comprehensive food delivery app development
                    services are painstakingly designed to turn your business
                    concepts into a solid and cutting-edge framework. Let's
                    examine the main phases of our offerings, from the first
                    consultation to the continuing upkeep and assistance.
                  </p>
                </div>
                <div className="grid gap-16 lg:grid-cols-3 md:grid-cols-2 xl:gap-12 py-10">
                  {AppService.map((elem) => {
                    const { title, img, decs, decs1, num, urlLink } = elem;
                    return (
                      <div
                        key={num}
                        className=" p-6 space-y-4 bg-white border rounded-xl hover:translate-y-3 group transition-all duration-700 ease-in-out"
                      >
                        <div className="flex items-center m-auto justify-center w-20 h-20 p-2 text-xl font-semibold bg-[#FFf] border border-[#00000017] rounded-full">
                          <Image
                            width={50}
                            height={50}
                            src={img}
                            alt={title}
                            title={title}
                            className=""
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-extrabold text-[#0E1F51]  transition-all duration-200 text-center">
                            <a href={urlLink}>{title}</a>
                          </h3>
                          <p
                            className="font-medium text-center text-black  break-all transition duration-200 ease-in-out"
                            dangerouslySetInnerHTML={{ __html: decs }}
                          ></p>
                          <p
                            className="font-medium text-center text-black  break-all transition duration-200 ease-in-out"
                            dangerouslySetInnerHTML={{ __html: decs1 }}
                          ></p>
                        </div>
                      </div>
                    );
                  })}

                  {/* <img
                    className="rounded-lg"
                    src="/img/taxi-process.webp"
                    alt="Taxi Booking"
                  /> */}
                </div>
                {/* <div className="flex justify-ce items-center mt-5">
                  <a href="https://api.whatsapp.com/send?phone=919587867258">
                    <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                      Talk To Consultant
                    </button>
                  </a>
                </div> */}
              </div>
            </section>
            {/* <div className="bg-[#14141c]/95">
              <section className="items-center w-11/12 py-20  space-y-10  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:flex md:space-x-10 md:space-y-0">
                <div className="w-full space-y-6 text-center md:text-left">
                  <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-1">
                    <div>
                      <div className="flex flex-col space-y-2">
                        <h2 className="py-2 lg:py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
                          Explore our{" "}
                          <span className="text-white">
                            Food Delivery App Development
                          </span>{" "}
                          Services
                        </h2>
                        <p className="text-white">
                          At Comfygen, we recognize that a smooth and intuitive
                          online experience is critical to the success of your
                          meal delivery business. Our comprehensive food
                          delivery app development services are painstakingly
                          designed to turn your business concepts into a solid
                          and cutting-edge framework. Let's examine the main
                          phases of our offerings, from the first consultation
                          to the continuing upkeep and assistance.{" "}
                        </p>
                        <img
                          className="rounded-lg"
                          src="/img/taxi-process.webp"
                          alt="Taxi Booking"
                        />
                        <div className="flex justify-start items-center mt-5">
                          <a href="https://api.whatsapp.com/send?phone=919587867258">
                            <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                              Talk To Consultant
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className={`${styles.TechnologyStack} grid gap-10 p-8 text-left lg:grid-cols-1 md:grid-cols-1 max-h-[600px] overflow-auto `}
                      >
                        {JSON_DATA.WhyChoosed.map((elem) => {
                          const { title, img, decs, decs1, num } = elem;
                          return (
                            <div
                              key={num}
                              className="group border-b-4 border-[#473a92] pb-6 space-y-4 transition-all duration-200  cursor-pointer "
                            >
                              <div className="flex items-center justify-start">
                                <div className="flex items-center justify-center gap-3 ">
                                  <Image
                                    src={img}
                                    alt=""
                                    width={40}
                                    height={40}
                                  />
                                  <h3 className="text-2xl text-white font-semibold ">
                                    {title}
                                  </h3>
                                </div>
                              </div>
                              <div className="space-y-3">
                                <p className="break-all text-white ">{decs}</p>
                                <p className="break-all text-white ">{decs1}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div> */}
          </div>
        </div>
        <ContactFromCenter />
        <section className="py-10 bg-[#151B22]">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 lg:py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
                  On-Demand{" "}
                  <span className="text-white">
                    Food Delivery App Development
                  </span>{" "}
                  Business Models
                </h2>
                <p className="text-white text-base">
                  Our on-call for meals transport app improvement at Comfygen
                  helps a huge form of commercial enterprise models, making sure
                  that our platform can be customized to meet the precise
                  necessities and tastes of diverse food delivery app
                  development industry stakeholders.
                </p>
              </div>
              <div className="grid  text-left lg:grid-cols-2 md:grid-cols-2 mt-5 gap-7 ">
                {Arena.map((elem: any) => {
                  const { icon, title, num, decs, decs1, decs2 } = elem;
                  return (
                    <div
                      key={num}
                      className={`${styles.foodcard} w-full flex bg-white rounded-xl  flex-col justify-center  p-8 relative`}
                    >
                      <h2 className=" font-bold 2xl:text-3xl xl:text-3xl text-lg text-slate-800 text-start">
                        {title}
                      </h2>
                      <div className="mt-4 space-y-1">
                        <p className="text-base text-slate-800">{decs}</p>
                        <p className="text-base text-slate-800">{decs1}</p>
                        <p className="text-base text-slate-800">{decs2}</p>
                      </div>
                      {icon}
                      <div className={`${styles.grdotone}`}></div>
                      <div className={`${styles.grdottwo}`}></div>
                      <div className={`${styles.grdotthree}`}></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 lg:py-20 bg-gray-100">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#0E1F51]  ">
                  Benefits of{" "}
                  <span className=""> Food Delivery App Development </span>{" "}
                  Industry
                </h2>
                <p>
                  The incorporation of meals transport app development services
                  has become a disruptive pressure in the ever-changing meals
                  industry, imparting unparalleled comfort to organizations and
                  consumers alike. Let's explore the many advantages of these
                  service providers, from building a solid online presence to
                  guaranteeing smooth operations with payment gateway
                  integration and server backup configuration.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-2">
                {Chartacterstics.map((elem) => {
                  const { img, title, decs, decs1 } = elem;
                  return (
                    <div
                      className={`${styles.BenefitsCard} border-2 border-[#97BDFA] p-6 space-y-4 bg-white rounded-[15px] relative`}
                    >
                      <div className="flex items-center justify-start mb-5">
                        <Image
                          src={img}
                          className="object-cover"
                          width={50}
                          height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-[#3B82F6]">
                        {title}
                      </h3>
                      <div>
                        {decs}
                        {decs1}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <a href="/contact-us " className="mt-5">
                  <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Connect with IT Experts
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-20 bg-gray-100">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#0E1F51]  ">
                  Features of{" "}
                  <span className=""> Online Food Ordering and Delivery </span>{" "}
                  Business
                </h2>
                <p>
                  Meal provider enterprises are changing quickly, and online
                  ordering and shipping are actually important capabilities of
                  the dining industry. A number of features intended to enhance
                  user revel, expedite eating place operations, and ensure
                  powerful transport logistics are the muse of those platforms'
                  success.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-2">
                {Features.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div
                      className={` border-2  p-6 space-y-4 bg-white rounded-[15px] relative`}
                    >
                      <div className="flex items-center justify-start mb-5">
                        <Image
                          src={img}
                          className="object-cover"
                          width={50}
                          height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-2xl font-bold ">{title}</h3>
                      <div>{decs}</div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <a href="/contact-us " className="mt-5">
                  <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Connect with IT Experts
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 lg:py-20 bg-[#223547]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff]  ">
                  Benefits Of Choosing Our{" "}
                  <span className="''"> Food App Maker </span>
                </h2>
                <p className="text-base text-white">
                  Selecting our food app developer entails a number of
                  advantages that completely change how consumers engage and
                  perceive the food delivery app development industry.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2">
                {FoodAppMaker.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div className={`${styles.BenefitsCardItem} relative`}>
                      <div className={`${styles.BenefitsCardItemImg} relative`}>
                        <Image
                          src={img}
                          className="object-cover"
                          width={35}
                          height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-[#fff] text-start">
                        {title}
                      </h3>
                      <div>{decs}</div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <a href="/contact-us " className="mt-5">
                  <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Connect with IT Experts
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className=" bg-[#E3FCFF]">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-16 py-4">
            <div className=" grid grid-cols-1 lg:gap-10 gap-6 mx-auto  xl:grid-cols-2">
              <div className="flex justify-center items-center">
                <img
                  src="/img/food-app-maker.webp"
                  alt="food app maker"
                  className="w-full"
                />
              </div>
              <div className="xl:space-y-10 space-y-4">
                <div className="flex flex-col justify-center text-start  mx-auto">
                  <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#000]  ">
                    The Process We Follow to Develop the Ultimate{" "}
                    <span className=""> Food Delivery App Development</span>
                  </h2>
                  <p className="text-base text-black">
                    Developing an excellent meal transport app entails cautious
                    planning and thought. We observe an intensive system at our
                    improvement hub that consists of discovery, design,
                    improvement, testing, deployment, and continuous help to
                    make sure that users, eating places, and delivery teams of
                    workers have a smooth and enjoyable level.
                  </p>
                </div>
                <div
                  className={`${styles.Choosingcard} max-h-[600px] overflow-auto`}
                >
                  {JSON_DATA.WhyChooserr.map((nftmarketplace) => {
                    return (
                      <div
                        key={nftmarketplace.num}
                        className="border p-6 space-y-2 shadow-xl bg-white "
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-[#223547] rounded flex items-center justify-center ">
                            <img
                              src={nftmarketplace.img}
                              width={32}
                              height={32}
                              alt={nftmarketplace.alt}
                            />
                          </div>
                          <h2 className="text-[#223547] text-2xl font-bold">
                            {nftmarketplace.title}
                          </h2>
                        </div>

                        <p className="text-base text-[#000]">
                          {nftmarketplace.decs}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-16 py-4">
            <div className=" grid grid-cols-1 lg:gap-10 gap-6 mx-auto  xl:grid-cols-12 lg:grid-cols-12">
              <div className="col-span-8">
                <div className=" ">
                  <div className="flex flex-col justify-center text-start  mx-auto">
                    <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#000]  ">
                      Why Choose India Based Company “Comfygen” for{" "}
                      <span className="''">
                        {" "}
                        Food Delivery App Development?{" "}
                      </span>
                    </h2>
                    <p className="text-base text-black">
                      Our company, Comfygen, is a leader in the field of
                      developing food delivery apps. The following are strong
                      arguments for giving us your culinary vision:
                    </p>
                  </div>
                  <div
                    className={`${styles.Choosecaferd}  grid   gap-6 mx-auto xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1`}
                  >
                    {JSON_DATA.WhyChoose.map((nftmarketplace) => {
                      return (
                        <div
                          key={nftmarketplace.num}
                          className={`${styles.Choosecard} p-6 shadow-xl bg-white`}
                        >
                          <div className="flex items-center gap-2">
                            <h2 className="text-[#223547] text-2xl font-bold">
                              {nftmarketplace.title}
                            </h2>
                          </div>
                          <p className="text-base text-[#000]">
                            {nftmarketplace.decs}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-span-4  ">
                <div className="flex justify-center items-center">
                  <img
                    src="/img/why-choose-comfygen-for-food-delivery-app.webp"
                    alt="Why Choose Comfygen for Food Delivery App?"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-center bg-no-repeat bg-cover lazyload bg-fixed "
          style={{
            backgroundImage: `url("/img/hire-ios-mobile-app-developer.webp")`,
          }}
        >
          <div className="bg-[#000]/90 lg:py-20 py-10">
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#627BF4]/60 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
          </div>
        </section>
        <section className="py-10 lg:py-20 bg-gray-100">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#0E1F51]  ">
                  How Our{" "}
                  <span className="">
                    {" "}
                    Online Food Delivery App Development{" "}
                  </span>{" "}
                  Service Works?
                </h2>
                <p>
                  The goal of ComfyGen's online meal delivery app service is to
                  provide a seamless, user-focused experience from signup to
                  delivery
                </p>
              </div>
              <div className="grid gap-6 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {Hireexpert.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div className="border-2 p-6 space-y-4 bg-white rounded-[40px]">
                      <div className="flex items-center justify-start mb-5">
                        <Image
                          src={img}
                          className="object-cover"
                          width={50}
                          height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-lg font-semibold">{title}</h3>
                      {decs}
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <a href="/contact-us ">
                  <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Connect with IT Experts
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="items-center w-full py-10 space-y-0 md:flex md:space-x-10 md:space-y-0 lg:py-10">
          <div className={`${styles.mobileappsolution} w-full lazyload`}>
            <div className="bg-gradient-to-l from-[#6DA5FF]/70 to-[#7B55EA]/90  flex flex-col-reverse lg:flex-row w-full  ">
              <div className="flex flex-col justify-start w-11/12 py-10  space-y-10 text-start 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
                {JSON_DATA.MobileSolution.map((mobile) => {
                  return (
                    <div key={mobile.num} className="space-y-6">
                      <h2 className="text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                        {mobile.head}{" "}
                      </h2>
                    </div>
                  );
                })}
                <div className="grid grid-cols-2 gap-4 py-5 lg:grid-cols-4 md:grid-cols-3 ">
                  {JSON_DATA.Solution.map((mobile) => {
                    return (
                      <div
                        key={mobile.num}
                        className="flex items-center p-4 transition-all duration-200 rounded-lg bg-slate-100 hover:bg-gray-100"
                      >
                        <a href={mobile.url}>
                          <div className="items-center justify-start space-y-2 md:flex md:space-x-2 md:space-y-0 ">
                            <div className="md:bg-white md:p-2 md:rounded-lg">
                              <Image
                                title={mobile.title}
                                alt={mobile.title}
                                src={mobile.img}
                                height={50}
                                width={50}
                              />
                            </div>
                            <p className="py-4 text-lg font-semibold text-gray-800 ">
                              {mobile.title}
                            </p>
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <TalkExpert />
        <FaqSection faqData={JSON_DATA.Frequently} title="" />
        <BlogSection initialData={initialData} />
      </div>
    </>
  );
}
// This gets called on every request
export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}

// export async function getServerSideProps({ res }) {
//   try {
//     const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");

//     // Check if the response is successful
//     if (!resData.ok) {
//       console.error("Failed to fetch data:", resData.statusText);
//       return { props: { initialData: null, error: true } };
//     }

//     const data = await resData.json();

//     res.setHeader(
//       "Cache-Control",
//       "public, s-maxage=10, stale-while-revalidate=59"
//     );

//     return { props: { initialData: data } };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return { props: { initialData: null, error: true } };
//   }
// }
