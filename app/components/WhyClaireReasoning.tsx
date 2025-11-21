"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WhyClaireReasoning() {
  const containerRef = useRef(null);
  const comparisonCardsRef = useRef(null);
  const textContentRef = useRef(null);
  const traditionalIconsRef = useRef(null);
  const claireIconRef = useRef(null);
  const traditionalFeaturesRef = useRef(null);
  const claireFeaturesRef = useRef(null);

  const containerInView = useInView(containerRef, { once: true, margin: "-100px" });
  const comparisonCardsInView = useInView(comparisonCardsRef, { once: true, margin: "-100px" });
  const textContentInView = useInView(textContentRef, { once: true, margin: "-100px" });
  const traditionalIconsInView = useInView(traditionalIconsRef, { once: true, margin: "-100px" });
  const claireIconInView = useInView(claireIconRef, { once: true, margin: "-100px" });
  const traditionalFeaturesInView = useInView(traditionalFeaturesRef, { once: true, margin: "-100px" });
  const claireFeaturesInView = useInView(claireFeaturesRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={containerInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col lg:flex-row gap-[30px] md:gap-[40px] lg:gap-[50px] items-center lg:items-start justify-center relative w-full px-4 md:px-6 lg:px-[150px] py-12 md:py-16 lg:py-20"
    >
      {/* Comparison Cards */}
      <motion.div
        ref={comparisonCardsRef}
        initial={{ opacity: 0, x: -50 }}
        animate={comparisonCardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="bg-white border border-[rgba(60,63,46,0.1)] border-solid box-border flex flex-col md:flex-row h-auto md:h-[359px] items-stretch md:items-start justify-center px-0 md:pl-[10px] md:pr-[30px] py-0 md:py-[10px] relative rounded-[20px] md:rounded-[30px] shrink-0 w-full max-w-full md:max-w-[545px] gap-0"
        style={{ willChange: 'opacity, transform', transform: 'translateZ(0)' }}
      >
        {/* Traditional Tools Card */}
        <div className="bg-neutral-100 box-border flex flex-[1_0_0] flex-col gap-[20px] md:gap-[24px] h-auto md:h-full items-start justify-center min-h-px min-w-px md:mr-[-20px] p-[16px] md:p-[20px] relative rounded-t-[20px] md:rounded-t-[20px] rounded-b-[0px] md:rounded-b-[20px] md:rounded-bl-[20px] md:rounded-br-0 md:rounded-tr-0 shrink-0 w-full min-w-0">
          {/* Icons - Frame 2095586318 */}
          <motion.div
            ref={traditionalIconsRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={traditionalIconsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-[50px] md:h-[59.999px] relative shrink-0 w-[70px] md:w-[86.402px]"
            style={{ willChange: 'opacity, transform', transform: 'translateZ(0)' }}
          >
            {/* First Icon */}
            <div className="absolute bg-white border-[0.869px] border-[rgba(60,63,46,0.1)] border-solid left-0 rounded-[8.685px] size-[42px] md:size-[52.111px] top-0">
              <div className="absolute h-[33px] md:h-[40.869px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[30px] md:w-[37.315px] overflow-hidden pointer-events-none">
                <Image
                  alt=""
                  className="absolute h-[145.11%] left-[11.59%] max-w-none top-[-20.55%] w-[282.54%]"
                  height={40.869}
                  src="/trained-across-image-1.jpg"
                  width={37.315}
                />
              </div>
            </div>
            {/* Second Icon - Rotated 4.666deg */}
            <div className="absolute flex items-center justify-center left-[25px] md:left-[30.22px] top-[3px] md:top-[3.82px]">
              <div className="flex-none rotate-[4.666deg]">
                <div className="bg-white border-[0.869px] border-[rgba(60,63,46,0.1)] border-solid relative rounded-[8.685px] size-[42px] md:size-[52.111px]">
                  <div className="absolute h-[33px] md:h-[40.869px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[30px] md:w-[37.315px] overflow-hidden pointer-events-none">
                    <Image
                      alt=""
                      className="absolute h-[208.73%] left-[-64.3%] max-w-none top-0 w-[228.61%]"
                      height={40.869}
                      src="/trained-across-image-2.jpg"
                      width={37.315}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={traditionalIconsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-['Saans_TRIAL',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#3c3f2e] text-[14px] md:text-[16px] tracking-[-0.14px] md:tracking-[-0.16px] uppercase w-full"
            style={{ willChange: 'opacity, transform', transform: 'translateZ(0)' }}
          >
            Traditional Tools
          </motion.p>
          
          <motion.div
            ref={traditionalFeaturesRef}
            initial={{ opacity: 0 }}
            animate={traditionalFeaturesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-[6px] md:gap-[8px] items-start justify-center relative shrink-0 w-full"
          >
            <div className="flex gap-[8px] md:gap-[10px] items-center justify-center relative shrink-0 w-full">
              <div className="overflow-clip relative shrink-0 size-[20px] md:size-[24px]">
                <Image
                  alt=""
                  className="block max-w-none w-full h-full"
                  height={24}
                  src="/icon-check-circle.svg"
                  width={24}
                />
              </div>
              <p className="bg-clip-text bg-gradient-to-r flex flex-[1_0_0] flex-col font-['Saans_TRIAL',sans-serif] font-medium from-[#010101] justify-center leading-[normal] min-h-px min-w-px not-italic opacity-[0.97] relative shrink-0 text-[16px] md:text-[20px] to-[#3c3f2e] tracking-[-0.32px] md:tracking-[-0.4px]" style={{ WebkitTextFillColor: "transparent" }}>
                Codes Only
              </p>
            </div>
            <div className="flex gap-[8px] md:gap-[10px] items-center justify-center relative shrink-0 w-full">
              <div className="overflow-clip relative shrink-0 size-[20px] md:size-[24px]">
                <Image
                  alt=""
                  className="block max-w-none w-full h-full"
                  height={24}
                  src="/icon-x-circle.svg"
                  width={24}
                />
              </div>
              <p className="bg-clip-text bg-gradient-to-r flex flex-[1_0_0] flex-col font-['Saans_TRIAL',sans-serif] font-medium from-[#010101] justify-center leading-[normal] min-h-px min-w-px not-italic opacity-[0.97] relative shrink-0 text-[16px] md:text-[20px] to-[#3c3f2e] tracking-[-0.32px] md:tracking-[-0.4px]" style={{ WebkitTextFillColor: "transparent" }}>
                No Context
              </p>
            </div>
            <div className="flex gap-[8px] md:gap-[10px] items-center justify-center relative shrink-0 w-full">
              <div className="overflow-clip relative shrink-0 size-[20px] md:size-[24px]">
                <Image
                  alt=""
                  className="block max-w-none w-full h-full"
                  height={24}
                  src="/icon-x-circle.svg"
                  width={24}
                />
              </div>
              <p className="bg-clip-text bg-gradient-to-r flex flex-[1_0_0] flex-col font-['Saans_TRIAL',sans-serif] font-medium from-[#010101] justify-center leading-[normal] min-h-px min-w-px not-italic opacity-[0.97] relative shrink-0 text-[16px] md:text-[20px] to-[#3c3f2e] tracking-[-0.32px] md:tracking-[-0.4px]" style={{ WebkitTextFillColor: "transparent" }}>
                Leaves you guessing
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* CLAIRE Card */}
        <div className="box-border flex flex-[1_0_0] flex-col gap-[20px] md:gap-[24px] h-auto md:h-full items-start justify-center min-h-px min-w-px md:mr-[-20px] p-[16px] md:p-[20px] relative rounded-b-[20px] md:rounded-[20px] rounded-t-[0px] md:rounded-t-[20px] shrink-0 w-full min-w-0 relative overflow-hidden">
          {/* Background Image */}
          <Image
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-b-[20px] md:rounded-[20px] rounded-t-[0px] md:rounded-t-[20px] w-full h-full"
            height={339}
            src="/trained-across-bg-image.jpg"
            width={272.5}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3c3f2e] to-[#daa03f] opacity-90 rounded-b-[20px] md:rounded-[20px] rounded-t-[0px] md:rounded-t-[20px]" />
          
          {/* Content */}
          <motion.div
            ref={claireIconRef}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={claireIconInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -10 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative shrink-0 size-[50px] md:size-[60px] z-10"
            style={{ willChange: 'opacity, transform', transform: 'translateZ(0)' }}
          >
            <div className="absolute left-0 size-[42px] md:size-[52.11px] top-0">
              <Image
                alt=""
                className="block max-w-none w-full h-full"
                height={52.11}
                src="/claire-icon.svg"
                width={52.11}
              />
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={claireIconInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-['Saans_TRIAL',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] md:text-[16px] text-white tracking-[-0.14px] md:tracking-[-0.16px] uppercase w-full z-10"
            style={{ willChange: 'opacity, transform', transform: 'translateZ(0)' }}
          >
            CLAIRE
          </motion.p>
          
          <motion.div
            ref={claireFeaturesRef}
            initial={{ opacity: 0 }}
            animate={claireFeaturesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-[6px] md:gap-[8px] items-start justify-center relative shrink-0 w-full z-10"
          >
            <div className="flex gap-[8px] md:gap-[10px] items-center justify-center relative shrink-0 w-full">
              <div className="overflow-clip relative shrink-0 size-[20px] md:size-[24px]">
                <Image
                  alt=""
                  className="block max-w-none w-full h-full"
                  height={24}
                  src="/icon-check-circle-white.svg"
                  width={24}
                />
              </div>
              <p className="flex flex-[1_0_0] flex-col font-['Saans_TRIAL',sans-serif] font-medium justify-center leading-[normal] min-h-px min-w-px not-italic opacity-[0.97] relative shrink-0 text-[16px] md:text-[20px] text-white tracking-[-0.32px] md:tracking-[-0.4px]">
                Codes
              </p>
            </div>
            <div className="flex gap-[8px] md:gap-[10px] items-center justify-center relative shrink-0 w-full">
              <div className="overflow-clip relative shrink-0 size-[20px] md:size-[24px]">
                <Image
                  alt=""
                  className="block max-w-none w-full h-full"
                  height={24}
                  src="/icon-check-circle-white.svg"
                  width={24}
                />
              </div>
              <p className="flex flex-[1_0_0] flex-col font-['Saans_TRIAL',sans-serif] font-medium justify-center leading-[normal] min-h-px min-w-px not-italic opacity-[0.97] relative shrink-0 text-[16px] md:text-[20px] text-white tracking-[-0.32px] md:tracking-[-0.4px]">
                Clinical Reasoning
              </p>
            </div>
            <div className="flex gap-[8px] md:gap-[10px] items-center justify-center relative shrink-0 w-full">
              <div className="overflow-clip relative shrink-0 size-[20px] md:size-[24px]">
                <Image
                  alt=""
                  className="block max-w-none w-full h-full"
                  height={24}
                  src="/icon-check-circle-white.svg"
                  width={24}
                />
              </div>
              <p className="flex flex-[1_0_0] flex-col font-['Saans_TRIAL',sans-serif] font-medium justify-center leading-[normal] min-h-px min-w-px not-italic opacity-[0.97] relative shrink-0 text-[16px] md:text-[20px] text-white tracking-[-0.32px] md:tracking-[-0.4px]">
                Compliance Context
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Text Content */}
      <motion.div
        ref={textContentRef}
        initial={{ opacity: 0, x: 50 }}
        animate={textContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex flex-col gap-[8px] md:gap-[12px] h-auto md:h-[404px] items-start justify-center leading-[0] not-italic relative shrink-0 w-full max-w-full md:max-w-[545px] lg:max-w-[489px]"
        style={{ willChange: 'opacity, transform', transform: 'translateZ(0)' }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={textContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-clip-text bg-gradient-to-r font-['CooperLtBT-Regular',sans-serif] from-[#010101] leading-[normal] relative shrink-0 text-[32px] md:text-[56px] to-[#3c3f2e] tracking-[-0.64px] md:tracking-[-1.12px] w-full text-left md:text-left"
          style={{ WebkitTextFillColor: "transparent", willChange: 'opacity, transform', transform: 'translateZ(0)' }}
        >
          <p className="mb-0">Why CLAIRE?</p>
          <p>Reasoning You Can Trust</p>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={textContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-['Saans_TRIAL',sans-serif] leading-[1.4] relative shrink-0 text-[#6e6e6e] text-[14px] md:text-[16px] tracking-[-0.28px] md:tracking-[-0.32px] w-full text-left"
          style={{ willChange: 'opacity, transform', transform: 'translateZ(0)' }}
        >
          <span>{`Other AI tools suggest codes. CLAIRE explains the clinical story. It feels like guidance from a senior educator—intelligent, clinically accurate, and focused on compliance. `}</span>
          <span className="text-[#010101]">Built by medical coders for coders who want to understand the why, not just code faster.</span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

