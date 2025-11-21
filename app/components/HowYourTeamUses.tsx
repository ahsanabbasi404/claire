"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HowYourTeamUses() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Individual refs for mobile cards
  const mobileCardRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  
  const mobileCardInView = mobileCardRefs.map((ref) =>
    useInView(ref, { once: true, margin: "-50px" })
  );

  const useCases = [
    {
      title: "Complex Case Resolution",
      description: "Resolve ambiguous documentation in minutes instead of hours. See the complete coding pathway and documentation needs without escalating to a supervisor.",
      stat: "Minutes",
      subtext: "Not hours",
      rotateDesktop: "rotate-[356.78deg]",
      rotateMobile: "rotate-[-2deg]",
      left: "left-[129.43px]",
      top: "top-[-9.38px]"
    },
    {
      title: "CDI Query Generation",
      description: "Generate physician-ready queries instantly instead of drafting from scratch. Send queries today, not tomorrow.",
      stat: "Same Day",
      subtext: "QUERIES",
      rotateDesktop: "rotate-[7.379deg]",
      rotateMobile: "rotate-[3deg]",
      left: "left-[405.61px]",
      top: "top-[3.99px]"
    },
    {
      title: "Production Speed Boost",
      description: "Reduce time-per-chart by surfacing the coding pathway, clinical indicators, and documentation needs instantly. Coders stay in flow instead of stopping to research.",
      stat: "+15% – 30%",
      subtext: "MORE PRODUCTIVITY",
      rotateDesktop: "rotate-[357.632deg]",
      rotateMobile: "rotate-[-1.5deg]",
      left: "left-[711.57px]",
      top: "top-[-7.24px]"
    },
    {
      title: "Audit Preparation",
      description: "Review high-risk cases and identify documentation gaps before RADV audits arrive. Walk into audits confident.",
      stat: "Ready",
      subtext: "For review",
      rotateDesktop: "rotate-[3.643deg]",
      rotateMobile: "rotate-[2deg]",
      left: "left-[991.41px]",
      top: "top-[11.47px]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotate: 0,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: index === 0 ? -3.22 : index === 1 ? 7.379 : index === 2 ? -2.368 : 3.643,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const mobileCardVariants = (rotate: number, delay: number = 0) => ({
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
      rotate: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: rotate,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  });

  // Mobile card positions and rotations from Figma
  const mobileCardPositions = [
    { align: "left", top: "0.22px", rotate: 3.643 }, // Audit Preparation
    { align: "right", top: "204.41px", rotate: 356.78 }, // Complex Case Resolution
    { align: "left", top: "441.41px", rotate: 5.402 }, // CDI Query Generation
    { align: "right", top: "657.48px", rotate: 357.632 }, // Production Speed Boost
  ];

  return (
    <div className="relative w-full py-12 md:py-20 px-4 md:px-0">
      <div className="bg-neutral-100 border-t border-[rgba(60,63,46,0.1)] border-solid box-border flex flex-col gap-[30px] md:gap-[50px] items-center pb-12 md:pb-16 pt-[50px] md:pt-[80px] px-4 md:px-0 relative w-full min-h-[500px] md:min-h-[526px]">
        {/* Background Vector - Hidden on mobile */}
        <div className="hidden md:block absolute h-[404px] left-1/2 top-[50px] translate-x-[-50%] w-[804px] pointer-events-none opacity-50">
          <Image
            alt=""
            className="block max-w-none w-full h-full"
            height={404}
            src="/use-cases-bg.svg"
            width={804}
          />
        </div>

        {/* Title */}
        <h2 className="bg-clip-text bg-gradient-to-r font-['CooperLtBT-Regular',sans-serif] from-[#010101] leading-[normal] relative shrink-0 text-[32px] md:text-[56px] text-center to-[#3c3f2e] tracking-[-0.64px] md:tracking-[-1.12px] w-full max-w-[350px] md:max-w-[401.769px] z-10" style={{ WebkitTextFillColor: "transparent" }}>
          How Your Team Uses CLAIRE
        </h2>

        {/* Use Case Cards */}
        <div ref={containerRef} className="relative max-w-[1440px] mx-auto pb-8 md:pb-0">
          {/* Desktop: Grid layout with rotations */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 md:items-start md:justify-items-center relative w-full min-h-[334px] px-4 md:px-8 lg:px-12"
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                className="flex-shrink-0 w-[300px]"
                style={{
                  transform: `translateY(${index === 0 ? '-9.38px' : index === 1 ? '3.99px' : index === 2 ? '-7.24px' : '11.47px'})`
                }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="bg-white border border-[rgba(60,63,46,0.1)] border-solid box-border flex flex-col gap-[32px] items-start justify-center p-[12px] relative rounded-[20px] w-full">
                  <div className="box-border flex flex-col gap-[12px] items-start not-italic p-[12px] relative shrink-0 text-[#010101] w-full">
                    <h3 className="font-['Saans_TRIAL',sans-serif] font-medium leading-[normal] opacity-[0.97] relative shrink-0 text-[20px] tracking-[-0.4px] w-full">
                      {useCase.title}
                    </h3>
                    <p className="font-['Saans_TRIAL',sans-serif] leading-[1.4] relative shrink-0 text-[16px] tracking-[-0.32px] w-full h-[112px]">
                      {useCase.description}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#3c3f2e] to-[#3c3f2e] box-border flex flex-col font-['Saans_TRIAL',sans-serif] font-medium gap-[4px] items-center justify-center not-italic p-[14px] relative rounded-[12px] shadow-[0px_61.74px_17.374px_0px_rgba(60,63,46,0),0px_39.402px_15.823px_0px_rgba(60,63,46,0.02),0px_22.338px_13.341px_0px_rgba(60,63,46,0.07),0px_9.928px_9.928px_0px_rgba(60,63,46,0.12),0px_2.482px_5.274px_0px_rgba(60,63,46,0.14)] shrink-0 text-white w-full">
                    <p className="leading-[normal] relative shrink-0 text-[28px] tracking-[-0.56px] w-full text-center">
                      {useCase.stat}
                    </p>
                    <p className="leading-[1.4] opacity-40 relative shrink-0 text-[14px] tracking-[-0.14px] uppercase w-full text-center">
                      {useCase.subtext}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile: Stacked cards with rotations */}
          <div className="md:hidden relative w-full px-4">
            {[
              useCases[3], // Audit Preparation - first
              useCases[0], // Complex Case Resolution - second
              useCases[1], // CDI Query Generation - third
              useCases[2], // Production Speed Boost - fourth
            ].map((useCase, index) => {
              const position = mobileCardPositions[index];
              return (
                <motion.div
                  key={index}
                  ref={mobileCardRefs[index]}
                  variants={mobileCardVariants(position.rotate, 0)}
                  initial="hidden"
                  animate={mobileCardInView[index] ? "visible" : "hidden"}
                  className="relative w-full -mb-2 last:mb-0  max-w-[267px]"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-white border border-[rgba(60,63,46,0.1)] border-solid box-border flex flex-col gap-[16px] items-start justify-center p-[8px] relative rounded-[20px] w-full">
                    <div className="box-border flex flex-col gap-[8px] items-start not-italic p-[8px] relative shrink-0 text-[#010101] w-full">
                      <h3 className="font-['Saans_TRIAL',sans-serif] font-medium leading-[normal] opacity-[0.97] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">
                        {useCase.title}
                      </h3>
                      <p className="font-['Saans_TRIAL',sans-serif] leading-[1.4] relative shrink-0 text-[14px] tracking-[-0.28px] w-full">
                        {useCase.description}
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-[#3c3f2e] to-[#3c3f2e] box-border flex flex-col font-['Saans_TRIAL',sans-serif] font-medium gap-[4px] items-center justify-center not-italic p-[14px] relative rounded-[12px] shadow-[0px_61.74px_17.374px_0px_rgba(60,63,46,0),0px_39.402px_15.823px_0px_rgba(60,63,46,0.02),0px_22.338px_13.341px_0px_rgba(60,63,46,0.07),0px_9.928px_9.928px_0px_rgba(60,63,46,0.12),0px_2.482px_5.274px_0px_rgba(60,63,46,0.14)] shrink-0 text-white w-full">
                      <p className="leading-[normal] relative shrink-0 text-[24px] tracking-[-0.48px] w-full text-center">
                        {useCase.stat}
                      </p>
                      <p className="leading-[1.4] opacity-40 relative shrink-0 text-[14px] tracking-[-0.14px] uppercase w-full text-center">
                        {useCase.subtext}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

