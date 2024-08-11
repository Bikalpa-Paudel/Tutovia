"use client";
import Image from "next/image";
import Programming from "../../../public/images/service/Programmming.png";
import Writing from "../../../public/images/service/Writing.png";
import Maths from "../../../public/images/service/Maths.png";
import Esssay from "../../../public/images/service/Essay.jpg";
import Ielts from "../../../public/images/service/Ielts.png";
import Marquee from "react-fast-marquee";

function Service() {
  const services = [
    {
      title: "IT & Programming",
      image: Programming,
    },
    {
      title: "Writing & Citation",
      image: Writing,
    },
    {
      title: "Mathematics & Tutoring",
      image: Maths,
    },
    {
      title: "IELTS/TOEFL Preparation",
      image: Ielts,
    },
    {
      title: "Essays",
      image: Esssay,
    },
  ];

  return (
    <section className="laptop:pb-[100px] pb-[50px] px-[5%] " id="services">
      <div className="flex flex-col gap-12">
        <div className="flex gap-2 flex-col w-full justify-center items-center">
          <h1 className="font-bold tablet:text-[38px] text-2xl text-primary">
            Our services meets your need.
          </h1>
          <h2 className="tablet:text-[24px] text-base font-extrabold text-[rgba(0,139,110,1)]">
            On-time and On-Budget
          </h2>
        </div>
        <div>
          <Marquee
            gradient={false}
            pauseOnHover={true}
            speed={50}
            autoFill={true}
            className="w-full flex justify-between"
          >
            {services.map((service, index) => (
              <div className="space-y-[15px] mx-5" key={index}>
                <div className="h-[292px] w-[233px] relative">
                  {index > 2 ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      // layout="responsive"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="right"
                      quality={100}
                    />
                  ) : (
                    <Image
                      src={service.image}
                      alt={service.title}
                      // layout="responsive"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      quality={100}
                    />
                  )}
                </div>
                <h3 className="text-xl font-fold text-secondary">
                  {service.title}
                </h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Service;
