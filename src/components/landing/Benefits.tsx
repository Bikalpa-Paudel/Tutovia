"use client";
import Image from "next/image";
import Benefit1 from "../../../public/images/benefits/Benefits1.svg";
import BecomeExprert from "./BecomeExprert";
import { createRef, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";

gsap.registerPlugin(ScrollTrigger);

function Benefits() {
  const tittleRef = useRef(null);
  const imageRef = useRef(null);
  const cardRef = useRef(null);
  const benefits = [
    {
      number: "01",
      title: "Plagarism Free papers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis pulvinar amet leo. Et, in morbi neque diam.",
    },
    {
      number: "02",
      title: "On-time delivery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis pulvinar amet leo. Et, in morbi neque diam.",
    },
    {
      number: "03",
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis pulvinar amet leo. Et, in morbi neque diam.",
    },
    {
      number: "04",
      title: "Affordable Price",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis pulvinar amet leo. Et, in morbi neque diam.",
    },
  ];

  const numbers = [
    {
      number: 75,
      title: "Professional Experts",
    },
    {
      number: 7500,
      title: "Papers Completed",
    },
    {
      number: 75,
      title: "Professional Experts",
    },
    {
      number: 75,
      title: "Professional Experts",
    },
  ];

  useEffect(() => {
    if (!tittleRef.current || !imageRef.current || !cardRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: tittleRef.current,
        start: "top 80%",
        end: "bottom 35%",
        scrub: 1,
      },
    });

    tl.from(tittleRef.current, {
      y: -100,
      opacity: 0,
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        end: "bottom 55%",
        scrub: 1,
      },
    });

    tl2.from(imageRef.current, {
      y: 100,
      opacity: 0,
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        end: "bottom 55%",
        scrub: 1,
      },
    });

    tl3.from(cardRef.current, {
      y: 100,
      opacity: 0,
    });

    return () => {
      tl.kill();
      tl2.kill();
      tl3.kill();
    };
  }, []);
  return (
    <section
      className="laptop:py-[100px] h-auto laptop:space-y-[98px] space-y-5 py-6 px-[5%]"
      id="benefits"
    >
      <div
        className="flex gap-2 flex-col w-full justify-center items-center"
        ref={tittleRef}
      >
        <h1 className="font-bold tablet:text-[38px] text-2xl text-primary">
          Benefits of using <span className=" text-tertiary">Tutovia</span>
        </h1>
        <p className="text-center tablet:text-lg text-sm font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis
          pulvinar <br /> amet leo. Et, in morbi neque diam.
        </p>
        <div className="w-[69px] h-[6px] bg-[rgba(26,177,74,1)] mt-3"></div>
      </div>

      <div className="flex laptop:flex-row laptop:gap-0 gap-10 flex-col w-full items-center">
        <div className="laptop:w-1/2 w-full" ref={imageRef}>
          <Image src={Benefit1} alt="Benefits" />
        </div>

        <div
          className="grid h-full tablet:grid-cols-2 laptop:w-1/2 grid-cols-1 w-full gap-x-[8%] laptop:gap-y-[24%] gap-y-5"
          ref={cardRef}
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-3">
              <div>
                <h1 className="tablet:text-xl text-lg font-bold text-primary">
                  <span className=" text-tertiary">{benefit.number}.</span>{" "}
                  {benefit.title}
                </h1>
                <p className="tablet:text-lg text-sm font-medium text-justify tablet:max-w-[297px] max-w-full">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tablet:mt-[148px] grid laptop:grid-cols-4 grid-cols-2 mt-5 gap-y-10">
        {numbers.map((number, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <h1 className="tablet:text-[50px] text-2xl font-bold text-tertiary">
              <CountUp
                end={number.number}
                suffix="+"
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </h1>
            <p className="tablet:text-xl text-sm font-bold text-justify">
              {number.title}
            </p>
          </div>
        ))}
      </div>
      <BecomeExprert />
    </section>
  );
}

export default Benefits;
