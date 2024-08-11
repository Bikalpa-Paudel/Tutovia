import Image from "next/image";
import Logo from "../../../public/Logo.png";
import Payment from "../../../public/Payment.png";
import { FaInstagram } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";

function Footer() {
  const socials = [
    {
      icon: <TiSocialFacebook size={24} />,
      color: "#3b5998",
      link: "https://www.facebook.com/",
    },
    {
      icon: <FaInstagram size={24} />,
      color: "#8a3ab9",
      link: "https://www.instagram.com/",
    },
    {
      icon: <TiSocialTwitter size={24} />,
      color: "#00acee",
      link: "https://www.twitter.com/",
    },
    {
      icon: <TiSocialLinkedin size={24} />,
      color: "#0e76a8",
      link: "https://www.linkedin.com/",
    },
  ];
  const services = [
    "Research Paper",
    "Case Studies",
    "Team Paper",
    "Report Writing",
  ];
  const overview = ["Home", "How we work", "About Us", "Contact"];
  return (
    <footer className="flex flex-col gap-[52px] px-[5%]">
      <div className="flex laptop:flex-row laptop:gap-0 gap-10 flex-col  justify-between">
        {/* Logo and about us */}
        <div className="flex flex-col gap-[15px] md:w-1/3 w-full">
          <Image src={Logo} alt="Logo" width={140} height={38} />
          <h2 className="font-bold text-lg leading-[26px] ">
            A little more about tutovia
          </h2>
          <p className="leading-[26px] text-justify">
            Our Mission: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ante quis pulvinar amet leo. Et, in morbi neque diam.
          </p>
          <div className="flex gap-5 mt-2">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[rgb(0,139,110)]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="grid laptop:grid-cols-3 grid-cols-2 laptop:w-1/2">
          <div className="flex flex-col gap-[15px]">
            <h2 className="font-bold text-lg">Overview</h2>
            <ul className="flex flex-col gap-3">
              {overview.map((item, index) => (
                <li key={index}>
                  {" "}
                  <span className="relative inline cursor-pointer before:bg-teal-600 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-[15px]">
            <h2 className="font-bold text-lg">Our Services</h2>
            <ul className="flex flex-col gap-3">
              {services.map((service, index) => (
                <li key={index}>
                  {" "}
                  <a
                    href="#services"
                    className="relative inline cursor-pointer before:bg-teal-600 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* we accept */}
          <div className="flex flex-col gap-[15px]">
            <h2 className="font-bold text-lg">We Accept</h2>
            <Image src={Payment} alt="Logo" width={186} height={26} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <div className="bg-[rgb(196,196,196)] h-[1px]"></div>
        <div className="flex justify-between items-center">
          <p>Copyright 2020 - 2022. Dallotech.</p>
          <p>Privacy policy | Terms and conditions | Revision Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
