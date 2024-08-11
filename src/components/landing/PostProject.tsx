"use client";
import React, { useEffect, useRef } from "react";
import SmallLogo from "../../../public/SmallLogo.png";
import Image from "next/image";
import TertiaryButton from "../buttons/TertiaryButton";
import Project1 from "../../../public/images/project/Project1.png";
import Project2 from "../../../public/images/project/Project2.png";
import Project3 from "../../../public/images/project/Project3.png";
import Project4 from "../../../public/images/project/Project4.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function PostProject() {
  const goto = [
    " Goto expert.tutovia.com",
    " Goto expert.tutovia.com",
    " Goto expert.tutovia.com",
    " Goto expert.tutovia.com",
  ];

  const imageRef = useRef(null);
  const imageRef1 = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current || !imageRef1.current || !contentRef) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl.from(imageRef.current, {
      y: -100,
      opacity: 0,
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef1.current,
        start: "top 80%",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl2.from(imageRef1.current, {
      y: 100,
      opacity: 0,
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl3.from(contentRef.current, {
      x: 10,
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
      className="bg-primary flex w-full items-center justify-center laptop:py-[98px] py-[30px]"
      id="work"
    >
      <div className="grid  laptop:grid-cols-[430px_430px] tablet:grid-cols-[600px] grid-cols-[350px]  place-items-center gap-[50px]">
        <div className="grid gap-10 grid-cols-2 h-full">
          <div
            className="flex flex-col items-center justify-center h-full gap-5 laptop:w-[165px] tablet:w-[200px] max-w-[150]"
            ref={imageRef}
          >
            <Image src={Project1} alt="Project1" objectFit="conver" />

            <Image src={Project3} alt="Project2" />
          </div>
          <div
            className="flex flex-col laptop:max-w-[165px] tablet:max-w-[200px] max-w-[150] gap-5"
            ref={imageRef1}
          >
            <Image src={Project2} alt="Project2" className="flex-[1.2]" />
            <Image src={Project4} alt="Project4" className="flex-[.8]" />
          </div>
        </div>
        <div className="space-y-[40px]" ref={contentRef}>
          <div className="flex flex-col lapttop:max-w-[409px] max-w-full gap-3">
            <h1 className="text-[#ffffff] tablet:text-[38px] text-2xl  font-bold">
              Need your Assignments to be done?
            </h1>
            <div className="h-[6px] w-[69px] bg-[rgba(26,177,74,1)]"></div>
          </div>

          <ul className="text-[rgb(244,244,244)] space-y-[27px]">
            {goto.map((item, index) => (
              <li key={index} className="flex items-center gap-[10px]">
                <Image src={SmallLogo} alt="Logo" width={20} height={20} />
                <span className="relative inline cursor-pointer before:bg-teal-600 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <TertiaryButton>Post a Project</TertiaryButton>
        </div>
      </div>
    </section>
  );
}

export default PostProject;
