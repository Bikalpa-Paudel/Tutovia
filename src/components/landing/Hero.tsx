"use client";

import React, { useEffect, useRef } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import HeroImage from "../../../public/images/hero/Hero.png";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroTextRefFirst = useRef(null);
  const heroTextRefSecond = useRef(null);
  const heroTextRefThird = useRef(null);
  const bottomRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroTextRefFirst.current,
        start: "top 10%",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl.to(heroTextRefFirst.current, {
      y: 100,
      opacity: 0,
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: heroTextRefSecond.current,
        start: "top 10%",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl2.to(heroTextRefSecond.current, {
      y: 100,
      opacity: 0,
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: heroTextRefThird.current,
        start: "top 10%",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl3.to(heroTextRefThird.current, {
      y: 100,
      opacity: 0,
    });

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: bottomRef.current,
        start: "top 10%",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl4.to(bottomRef.current, {
      y: 100,
      opacity: 0,
    });

    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 10%",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl5.to(buttonRef.current, {
      y: 100,
      opacity: 0,
    });

    const tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 2%",
        end: "bottom 15%",
        scrub: 1,
      },
    });

    tl6.to(imageRef.current, {
      y: 100,
      opacity: 0,
    });

    return () => {
      tl.kill();
      tl2.kill();
      tl3.kill();
      tl4.kill();
      tl5.kill();
      tl6.kill();
    };
  }, []);

  return (
    <section className="min-h-[60vh] tablet:min-h-[60vh] tablet:py-0 py-[10%] laptop:min-h-[80vh] flex justify-between items-center pl-[5%] laptop:pr-0 pr-[5%] ">
      <div className="laptop:w-[42%] w-full flex flex-col gap-10">
        <div className="tablet:space-y-4 space-y-5">
          <h1
            className=" font-extrabold tablet:text-[60px] text-4xl text-primary"
            ref={heroTextRefFirst}
          >
            Looking for an expert?
          </h1>
          <h2
            className=" font-semibold tablet:text-[38px] text-2xl text-primary"
            ref={heroTextRefSecond}
          >
            You can have the best people.
          </h2>
          <h2
            className=" font-semibold tablet:text-[38px] text-2xl text-[rgba(0,139,110,1)]"
            ref={heroTextRefThird}
          >
            “Right now.”
          </h2>
        </div>
        <div className=" grow-0" ref={buttonRef}>
          <PrimaryButton>Talk to the Expert</PrimaryButton>
        </div>
        <p
          className="tablet:text-lg text-sm font-medium text-justify"
          ref={bottomRef}
        >
          <span className="font-bold">Tutovia</span> is single stop solution for
          all outsourcing works. Tailored for Nepali market, we aim to connect
          Nepalese talent with <br /> opportunities abroad.
        </p>
      </div>
      <div
        className="absolute right-0 laptop:block hidden -z-50"
        ref={imageRef}
      >
        <Image src={HeroImage} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;
