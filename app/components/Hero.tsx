"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const suggestedQuestions = [
    "Does this meet sepsis?",
    "Is AKI or dehydration principal?",
    "Is this unspecified or more specific?",
    "Does this meet criteria for device complication?",
    "Is this revision vs replacement?",
  ];

  const demoRef = useRef(null);
  const isInView = useInView(demoRef, { once: true, margin: "-200px" });

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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 1.15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const searchVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const questionVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.5 + i * 0.1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <div className="box-border flex flex-col gap-[30px] md:gap-[60px] items-center pb-[60px] md:pb-[120px] pt-[30px] md:pt-[94px] px-4 md:px-0 relative w-full overflow-x-hidden md:overflow-y-clip">
      {/* Background Vector */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute h-[600px] md:h-[1256.46px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[calc(100%-32px)] max-w-[1297.829px] md:w-[1297.829px] pointer-events-none opacity-30 md:opacity-100 overflow-hidden"
      >
        <motion.div
          animate={{
            rotate: [0, 2, -2, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            alt=""
            className="block max-w-none w-full h-full"
            height={1256.46}
            src="/hero-bg-vector.svg"
            width={1297.829}
            priority
          />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col gap-[16px] md:gap-[24px] items-center relative z-10 w-full max-w-[1140px] px-4 md:px-0">
        {/* Tagline Banner */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-[#ececec] border border-[rgba(0,0,0,0.1)] border-solid relative rounded-[20px] md:rounded-[30px] shrink-0 inline-block max-w-[calc(100%-32px)] md:max-w-none md:pt-[44px] md:pb-0"
        >
          <div className="box-border flex gap-[10px] items-center overflow-clip p-[4px] relative rounded-[inherit]">
            {/* Decorative Vectors - Hidden on mobile */}
            <motion.div
              initial={{ x: -30, opacity: 0, rotate: -45 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="hidden md:block absolute h-[72px] left-[100.5px] top-[-44px] w-[50px] pointer-events-none overflow-visible"
            >
              <Image
                alt=""
                className="block max-w-none w-full h-full"
                height={72}
                src="/vector-3190.svg"
                width={50}
              />
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0, rotate: 0 }}
              animate={{ x: 0, opacity: 1, rotate: 38.66 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="hidden md:block absolute flex items-center justify-center left-[249.82px] top-[-18px] w-[84px] h-[87px] pointer-events-none overflow-visible"
            >
              <div className="flex-none rotate-[38.66deg]">
                <Image
                  alt=""
                  className="block max-w-none w-full h-full"
                  height={87}
                  src="/vector-3193.svg"
                  width={84}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0, rotate: 0 }}
              animate={{ x: 0, opacity: 1, rotate: 38.66 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              className="hidden md:block absolute flex items-center justify-center left-[280.5px] top-[-18.02px] w-[136px] h-[135px] pointer-events-none overflow-visible"
            >
              <div className="flex-none rotate-[38.66deg]">
                <Image
                  alt=""
                  className="block max-w-none w-full h-full"
                  height={135}
                  src="/vector-3192.svg"
                  width={136}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#f1f1f1] box-border flex gap-[15px] items-center justify-center px-[12px] py-[8px] relative rounded-[16px] md:rounded-[20px] shadow-[0px_151px_42px_0px_rgba(0,0,0,0),0px_96px_39px_0px_rgba(0,0,0,0.01),0px_54px_33px_0px_rgba(0,0,0,0.03),0px_24px_24px_0px_rgba(0,0,0,0.04),0px_6px_13px_0px_rgba(0,0,0,0.05)] shrink-0"
            >
              <p className="font-['Saans_TRIAL',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#3c3f2e] text-[10px] sm:text-[11px] md:text-[12px] text-center tracking-[-0.1px] sm:tracking-[-0.11px] md:tracking-[-0.12px] uppercase whitespace-nowrap">
                AI Medical Coding Assistant Built by Coders, for Coders
              </p>
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-1px_2px_0px_rgba(0,0,0,0.2),inset_0px_2px_1px_0px_#ffffff]" />
            </motion.div>
          </div>
        </motion.div>

        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col gap-[8px] md:gap-[12px] items-center not-italic relative shrink-0 w-full px-4 md:px-0"
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-clip-text bg-gradient-to-r font-['CooperLtBT-Regular',sans-serif] from-[#010101] leading-[normal] relative shrink-0 text-[32px] sm:text-[42px] md:text-[56px] to-[#3c3f2e] tracking-[-0.64px] md:tracking-[-1.12px] text-center"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            Clarity in Every Code
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-['Saans_TRIAL',sans-serif] leading-[1.4] relative shrink-0 text-[#6e6e6e] text-[14px] md:text-[16px] text-center tracking-[-0.28px] md:tracking-[-0.32px] w-full max-w-[536.574px] whitespace-pre-wrap px-2 md:px-0"
          >
            <p className="leading-[1.4] mb-0">{`Stop guessing. CLAIRE is the intelligent medical coding and CDI assistant that interprets clinical documentation, suggests accurate ICD-10-CM, CPT, `}</p>
            <p className="leading-[1.4] mb-0">{`HCPCS codes, and explains the clinical reasoning behind every `}</p>
            <p className="leading-[1.4]">
              <span>{`answer. `}</span>
              <span className="text-[#010101]">No delays. No bottlenecks. Just trusted guidance.</span>
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-[10px] items-stretch sm:items-start justify-center relative shrink-0 w-full max-w-[500px] md:max-w-none px-4 md:px-0"
        >
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(60,63,46,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#3c3f2e] to-[#3c3f2e] box-border flex flex-col gap-[7.978px] items-center justify-center overflow-clip px-[16px] md:px-[20px] py-[10px] md:py-[12px] relative rounded-[12px] shadow-[0px_44.1px_12.41px_0px_rgba(60,63,46,0),0px_28.144px_11.302px_0px_rgba(60,63,46,0.02),0px_15.956px_9.529px_0px_rgba(60,63,46,0.07),0px_7.091px_7.091px_0px_rgba(60,63,46,0.12),0px_1.773px_3.767px_0px_rgba(60,63,46,0.14)] shrink-0 border-none cursor-pointer w-full sm:w-auto"
          >
            <span className="flex flex-col font-['Saans_TRIAL',sans-serif] font-semibold justify-center leading-[0] not-italic opacity-[0.97] relative shrink-0 text-[14px] md:text-[16px] text-center text-white tracking-[-0.28px] md:tracking-[-0.32px] whitespace-nowrap">
              <p className="leading-[normal]">Start Your Free Trial</p>
            </span>
          </motion.button>
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(60,63,46,0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="backdrop-blur-[2px] backdrop-filter bg-gradient-to-r from-[rgba(60,63,46,0.1)] to-[rgba(60,63,46,0.1)] box-border flex flex-col gap-[7.978px] items-center justify-center overflow-clip px-[16px] md:px-[20px] py-[10px] md:py-[12px] relative rounded-[12px] shrink-0 border-none cursor-pointer w-full sm:w-auto"
          >
            <span className="flex flex-col font-['Saans_TRIAL',sans-serif] font-semibold justify-center leading-[0] not-italic opacity-[0.97] relative shrink-0 text-[#3c3f2e] text-[14px] md:text-[16px] text-center tracking-[-0.28px] md:tracking-[-0.32px] whitespace-nowrap">
              <p className="leading-[normal]">See CLAIRE in Action</p>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Interactive Demo Section */}
      <motion.div
        ref={demoRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col gap-[20px] md:gap-[32px] items-center relative z-10 w-full max-w-[1140px] mx-auto px-4 md:px-0"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="relative w-full max-w-[900px] md:max-w-[1000px] h-[220px] md:h-[400px] rounded-[16px] md:rounded-[24px] overflow-hidden"
        >
          {/* Background Image */}
          <motion.div variants={imageVariants}>
            <Image
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              height={400}
              src="/hero-bg-image.jpg"
              width={1000}
              priority
            />
          </motion.div>

          {/* Search Interface */}
          <div className="absolute flex flex-col gap-[6px] md:gap-[10.551px] items-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[calc(100%-32px)] md:w-[calc(100%-64px)]">
            {/* Search Input */}
            <motion.div
              variants={searchVariants}
              whileHover={{ scale: 1.02 }}
              className="backdrop-blur-[14.069px] backdrop-filter bg-gradient-to-b border-[1.107px] border-[rgba(255,255,255,0.1)] border-solid from-[rgba(255,255,255,0.1)] h-[70px] md:h-[107.787px] relative rounded-[12px] md:rounded-[17.718px] shrink-0 to-[rgba(255,255,255,0.01)] w-full"
            >
              <div className="box-border flex gap-[8px] md:gap-[11.812px] h-full items-center overflow-clip p-[12px] md:p-[17.718px] relative rounded-[inherit] w-full">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? {
                    opacity: [0.7, 1, 0.7],
                  } : { opacity: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2,
                  }}
                  className="font-['Saans_TRIAL',sans-serif] flex-[1_0_0] leading-[normal] not-italic relative text-[14px] md:text-[20.671px] text-white tracking-[-0.28px] md:tracking-[-0.6201px]"
                >
                  How can i help you today?
                </motion.p>
              </div>
            </motion.div>

            {/* Suggested Questions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="flex flex-wrap gap-[5px] md:gap-[9.379px] items-start justify-center md:justify-start relative w-full"
            >
              {suggestedQuestions.map((question, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={questionVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[rgba(0,0,0,0.1)] border-[0.586px] border-[rgba(255,255,255,0.1)] border-solid rounded-[8px] md:rounded-[9.379px] cursor-pointer transition-colors"
                >
                  <div className="px-[8px] py-[6px] md:px-[12px] md:py-[9.379px]">
                    <p className="font-['Saans_TRIAL',sans-serif] font-medium leading-[1.2] text-[10px] md:text-[14.069px] text-white tracking-[-0.1px] md:tracking-[-0.1407px]">
                      {question}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Feature Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-[12px] sm:gap-[8px] relative shrink-0 w-full max-w-[700px] md:max-w-none"
        >
          {[
            { icon: "/icon-shield.svg", text: "HIPaa compliant", alt: "Shield Icon" },
            { icon: "/icon-seal.svg", text: "No Credit Card Required", alt: "Seal Icon" },
            { icon: "/icon-lightning.svg", text: "Setup in 5 Minutes", alt: "Lightning Icon" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0, y: 10 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex gap-[8px] items-center justify-center relative shrink-0 w-full sm:w-auto min-w-0 sm:min-w-[216px]"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1 + index * 0.3,
                  ease: "easeInOut",
                }}
                className="overflow-clip relative shrink-0 size-[28px] md:size-[32px]"
              >
                <Image
                  alt={item.alt}
                  className="block max-w-none w-full h-full"
                  height={32}
                  src={item.icon}
                  width={32}
                />
              </motion.div>
              <p className="font-['Saans_TRIAL',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#3c3f2e] text-[11px] md:text-[12px] text-center tracking-[-0.11px] md:tracking-[-0.12px] uppercase whitespace-nowrap">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

