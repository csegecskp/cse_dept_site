"use client";

import { DeptConstants } from "@/constants/DeptConstants";
import Image from "next/image";
import ColoredSection from "./ColoredSection";
import {
  useInView,
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  cubicBezier,
} from "framer-motion";
import { useRef,useEffect } from "react";
import gsap from "gsap";


const imageAnimationVariants = {
  invisible: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const DeptLogo = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  // const opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const capTop = useTransform(scrollYProgress, [0.5, 0.8], [400, 0], {
    ease: cubicBezier(0.455, 0.03, 0.515, 0.955),
  });
  const logoTop = useTransform(scrollYProgress, [0.55, 0.85], [400, 0], {
    ease: cubicBezier(0.455, 0.03, 0.515, 0.955),
  });
  const scaleCap = useTransform(scrollYProgress, [0.5, 0.8], [0.9, 1], {
    ease: cubicBezier(0.455, 0.03, 0.515, 0.955),
  });

  const scaleLogo = useTransform(scrollYProgress, [0.55, 0.85], [0.95, 1], {
    ease: cubicBezier(0.455, 0.03, 0.515, 0.955),
  });
  const visionTextOpacity = useTransform(
    scrollYProgress,
    [0.75, 0.85],
    [0, 1],
    {
      ease: cubicBezier(0.455, 0.03, 0.515, 0.955),
    }
  );
  const visionTextY = useTransform(scrollYProgress, [0.75, 0.85], [200, 0], {
    ease: cubicBezier(0.455, 0.03, 0.515, 0.955),
  });
  const missionTextOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1], {
    ease: cubicBezier(0.455, 0.03, 0.515, 0.955),
  });
  const missionTextY = useTransform(scrollYProgress, [0.85, 1], [200, 0], {
    ease: cubicBezier(0.455, 0.03, 0.515, 0.955),
  });


    const item1=useRef(null);
    const item2=useRef(null);
    const item3=useRef(null);
    const item4=useRef(null);
    let xPercent=0;
    let direction =-1;

  useEffect(()=>{
    requestAnimationFrame(animation);
  },[])

  const animation=()=>{
    if(xPercent<=-100){
      xPercent=0; 
    }
    gsap.set(item1.current,{xPercent:xPercent})
    gsap.set(item2.current,{xPercent:xPercent})
    gsap.set(item3.current,{xPercent:xPercent})
    gsap.set(item4.current,{xPercent:xPercent})
    xPercent+=0.15*direction
    requestAnimationFrame(animation)
  }
  




  return (
    <ColoredSection color="BLACK">
      <div
        ref={containerRef}
        className="flex flex-col px-12 md:px-20 py-8 justify-center items-center min-h-screen"
        id="mission"
      >
        <div className="flex justify-center align-items-center relative px-5 md:px-0">
          <motion.img
            style={{
              y: logoTop,
              scale: scaleLogo,
            }}
            src="/cse.png"
            width={480}
            height={280}
            alt="cse Image"
            className="cse-image "
          />
          <motion.div
            style={{
              // opacity: opacity,
              y: capTop,
              scale: scaleCap,
            }}
            className="absolute top-[-42%] left-[-10%]  md:left-[-23%]"
          >
            <Image
              src="/cap.png"
              width={200}
              height={200}
              alt="Cap Image"
              className="cap-image w-[25vw] md:w-[200px]"
            />
          </motion.div>
        </div>
        <div className="flex sm:flex-row flex-col w-full justify-around pt-8 gap-4 md:gap-0">
          <motion.div
            style={{
              opacity: visionTextOpacity,
              y: visionTextY,
            }}
            className="sm:w-5/12 w-full"
          >
            <Image
              src="/Vision.png"
              width={400}
              height={400}
              alt="vision"
              className="w-full"
            />
            <p className="text-gray-500 text-xl pr-8 md:pr-12 mt-2">
              {DeptConstants.vision}
            </p>
          </motion.div>
          <motion.div
            style={{
              opacity: missionTextOpacity,
              y: missionTextY,
            }}
            className="flex justify-end sm:w-5/12 w-full "
          >
            <div className="flex flex-col items-end">
              <Image
                src="/Mission.png"
                width={400}
                height={400}
                alt="mission"
                className="w-full"
              />
              <p className="text-gray-500 text-xl pl-8 md:pl-12 mt-2">
                {DeptConstants.mission}
              </p>
            </div>
          </motion.div>
        </div>

        <div className=" hidden overflow-hidden lg:flex items-center w-screen mt-24">
          <motion.div
            className="flex whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 10, // Adjust this value for speed
              ease: "linear",
            }}
          >
            <div className="flex items-center min-w-max  h-[100px] lg:justify-normal justify-center  ">
              <p className="inline-block text-[56px] mx-10 text-[#9E9E9E] font-extrabold font-bebasneue">
                {" "}
                NATIONAL BOARD OF ACCREDITATION ACCREDITED{" "}
              </p>
              <img
                src="./nba.svg"
                alt="Description"
                className="inline-block border-x-4 border-[#9E9E9E] px-10 text-[#9E9E9E] border-solid min-w-max"
              />
            </div>

            <div className="flex items-center min-w-max  h-[100px] lg:justify-normal justify-center  ">
              <p className="inline-block text-[56px] mx-10 text-[#9E9E9E] font-extrabold font-bebasneue">
                {" "}
                NATIONAL BOARD OF ACCREDITATION ACCREDITED{" "}
              </p>
              <img
                src="./nba.svg"
                alt="Description"
                className="inline-block border-x-4 border-[#9E9E9E] px-10 text-[#9E9E9E] border-solid min-w-max"
              />
            </div>

            <div className="flex items-center min-w-max  h-[100px] lg:justify-normal justify-center  ">
              <p className="inline-block text-[56px] mx-10 text-[#9E9E9E] font-extrabold font-bebasneue">
                {" "}
                NATIONAL BOARD OF ACCREDITATION ACCREDITED{" "}
              </p>
              <img
                src="./nba.svg"
                alt="Description"
                className="inline-block border-x-4 border-[#9E9E9E] px-10 text-[#9E9E9E] border-solid min-w-max"
              />
            </div>
          </motion.div>
        </div>

        <div className="lg:hidden flex items-center whitespace-nowrap gap-2 h-[100px] max-w-screen">
          <p className=" text-[24px] text-[#9E9E9E] font-extrabold font-bebasneue"></p>

          <div className="overflow-hidden flex  flex-row items-center w-screen   ">
            <div
              className="flex items-center whitespace-nowrap gap-5 h-[100px]  max-w-screen "
              ref={item1}
            >
              <p className=" lg:text-4xl text-2xl text-[#9E9E9E] font-extrabold font-bebasneue pl-5">
                NATIONAL BOARD OF ACCREDITATION ACCREDITED
              </p>
              <div className="border-x-4 border-[#9E9E9E] border-solid px-2">
                <img
                  src="./nba.svg"
                  alt="Description"
                  className="  text-[#9E9E9E] min-w-[33px] min-h-[33px]"
                />
              </div>
            </div>

            <div
              className="flex  items-center whitespace-nowrap gap-5 h-[100px]"
              ref={item2}
            >
              <p className=" lg:text-4xl text-2xl text-[#9E9E9E] font-extrabold font-bebasneue pl-5">
                NATIONAL BOARD OF ACCREDITATION ACCREDITED
              </p>
              <div className="border-x-4 border-[#9E9E9E] border-solid px-2">
                <img
                  src="./nba.svg"
                  alt="Description"
                  className="  text-[#9E9E9E] min-w-[33px] min-h-[33px]"
                />
              </div>
            </div>
            <div
              className="flex items-center whitespace-nowrap gap-5 h-[100px] "
              ref={item3}
            >
              <p className="lg:text-4xl text-2xl text-[#9E9E9E] font-extrabold font-bebasneue pl-5">
                NATIONAL BOARD OF ACCREDITATION ACCREDITED
              </p>
              <div className="border-x-4 border-[#9E9E9E] border-solid px-2">
                <img
                  src="./nba.svg"
                  alt="Description"
                  className="  text-[#9E9E9E] min-w-[33px] min-h-[33px]"
                />
              </div>
            </div>

            <div
              className="flex items-center whitespace-nowrap gap-5 h-[100px] "
              ref={item4}
            >
              <p className="lg:text-4xl text-2xl text-[#9E9E9E] font-extrabold font-bebasneue pl-5">
                NATIONAL BOARD OF ACCREDITATION ACCREDITED
              </p>
              <div className="border-x-4 border-[#9E9E9E] border-solid px-2">
                <img
                  src="./nba.svg"
                  alt="Description"
                  className="  text-[#9E9E9E] min-w-[33px] min-h-[33px]"
                />
              </div>
            </div>
          </div>
          {/* <div className=" flex items-center whitespace-nowrap gap-5 h-[100px] w-screen lg:hidden  justify-center"   >
          <p className=" text-2xl text-[#9E9E9E] font-extrabold font-bebasneue" >
            NATIONAL BOARD OF ACCREDITATION ACCREDITED
          </p>
          <div className="border-x-4 border-[#9E9E9E] border-solid px-2">
            <img
              src="./nba.svg"
              alt="Description"
              className="  text-[#9E9E9E] min-w-[33px] min-h-[33px]"
            />
          </div>
        </div> */}
        </div>
      </div>
    </ColoredSection>
  );
};

export default DeptLogo;
