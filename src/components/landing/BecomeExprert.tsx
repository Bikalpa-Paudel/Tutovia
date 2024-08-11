"use client";
import Image from "next/image";
import Benefits2 from "../../../public/images/benefits/Benefits2.svg";
import Benefits3 from "../../../public/images/benefits/Benefits3.svg";
import SmallLogo from "../../../public/SmallLogo.png";
import TertiaryButton from "../buttons/TertiaryButton";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BecomeExprert() {
  const goto = [
    " Goto expert.tutovia.com",
    " Goto expert.tutovia.com",
    " Goto expert.tutovia.com",
  ];

  const imageRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const middleRef = useRef(null);

  useEffect(() => {
    if (
      !imageRef.current ||
      !topRef.current ||
      !bottomRef.current ||
      !middleRef.current
    )
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: topRef.current,
        start: "top 85%",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl.from(topRef.current, {
      y: -100,
      opacity: 0,
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 85%",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl2.from(imageRef.current, {
      x: 10,
      opacity: 0,
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: middleRef.current,
        start: "top 85%",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl3.from(middleRef.current, {
      x: -50,
      opacity: 0,
    });

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: bottomRef.current,
        start: "top 85%",
        end: "bottom 60%",
        scrub: 1,
      },
    });

    tl4.from(bottomRef.current, {
      y: 100,
      opacity: 0,
    });

    return () => {
      tl.kill();
      tl2.kill();
      tl3.kill();
      tl4.kill();
    };
  }, []);

  return (
    <div className="py-[70px] px-2 laptop:pl-[80px] flex laptop:flex-row flex-col-reverse laptop:pr-[65px] relative rounded-[10px]">
      <Image
        src={Benefits2}
        alt="Benefits2"
        layout="fill"
        objectFit="cover"
        className="-z-[50] rounded-[10px]"
      />

      <div className="space-y-[40px] laptop:w-[60%] w-full">
        <div
          className="flex flex-col lapttop:max-w-[664px] gap-5 max-w-full text-[#ffffff]"
          ref={topRef}
        >
          <h1 className="tablet:text-[38px] text-2xl  font-bold">
            Have a skillset to solve the problems?
          </h1>
          <p className="tablet:text-lg text-base font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quis
            pulvinar <br /> amet leo. Et, in morbi neque diam.
          </p>
          <div className="h-[6px] w-[69px] bg-[rgba(26,177,74,1)]"></div>
        </div>

        <ul className="text-[rgb(244,244,244)] space-y-[27px]" ref={middleRef}>
          {goto.map((item, index) => (
            <li key={index} className="flex items-center gap-[10px]">
              <Image src={SmallLogo} alt="Logo" width={20} height={20} />
              <span className="relative inline cursor-pointer before:bg-teal-600 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="" ref={bottomRef}>
          <TertiaryButton>Become an expert</TertiaryButton>
        </div>
      </div>
      <Image src={Benefits3} alt="Benefits3" ref={imageRef} />
    </div>
  );
}

export default BecomeExprert;
