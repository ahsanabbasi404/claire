"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TrainedAcrossSpecialties() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  const containerInView = useInView(containerRef, { once: true, margin: "-100px" });
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const descriptionInView = useInView(descriptionRef, { once: true, margin: "-100px" });
  const buttonInView = useInView(buttonRef, { once: true, margin: "-100px" });

  return (
    <div className="relative w-full px-4 md:px-6 lg:px-8 py-0 md:py-12 z-20">
      {/* Main Banner Card - Positioned with negative margin to overlap the previous section */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="border-[1.5px] border-solid border-white relative rounded-[16px] md:rounded-[32px] w-full max-w-[1268.993px] mx-auto overflow-hidden -mt-[20px] md:-mt-[100px]"
        style={{ willChange: 'opacity, transform', transform: 'translateZ(0)' }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px] md:rounded-[32px]">
          <Image
            alt="Medical professional studying"
            className="absolute h-[123.14%] left-0 max-w-none top-[-11.57%] w-full object-cover object-center"
            height={577.621}
            src="/trained-across-bg-image.jpg"
            width={1268.993}
            priority
            sizes="(max-width: 768px) 100vw, 1268.993px"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute bg-gradient-to-l from-[41.071%] from-[rgba(0,0,0,0)] h-full left-0 rounded-[16px] md:rounded-[32px] to-[rgba(0,0,0,0.5)] top-0 w-full md:h-[577.621px] md:left-1/2 md:top-1/2 md:translate-x-[-50%] md:translate-y-[-50%] md:w-[1268.993px]" />
        
        {/* Content */}
        <div className="box-border flex flex-col gap-[16px] md:gap-[24px] items-start justify-end overflow-clip p-[30px] md:p-[50px] relative rounded-[inherit] w-full min-h-[400px] md:min-h-[577.621px]">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, x: -30 }}
            animate={titleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-[8px] md:gap-[12px] items-start justify-center not-italic relative shrink-0 text-white z-10"
            style={{ willChange: 'opacity, transform', transform: 'translateZ(0)' }}
          >
            <h2 className="font-['CooperLtBT-Regular',sans-serif] leading-[normal] relative shrink-0 text-[32px] md:text-[56px] tracking-[-0.64px] md:tracking-[-1.12px] w-full max-w-[493.73px]">
              Trained Across Clinical Specialties
            </h2>
            <motion.p
              ref={descriptionRef}
              initial={{ opacity: 0, x: -30 }}
              animate={descriptionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-['Saans_TRIAL',sans-serif] leading-[1.4] relative shrink-0 text-[14px] md:text-[16px] tracking-[-0.28px] md:tracking-[-0.32px] w-full max-w-[536.574px]"
              style={{ willChange: 'opacity, transform', transform: 'translateZ(0)' }}
            >
              {`Built on thousands of real clinical scenarios. CLAIRE understands diagnostic criteria and coding pathways across Hospital Medicine, Cardiology, Pulmonary & Critical Care, Nephrology, Infectious Disease, General Surgery, Trauma & Orthopedics, Neurology, Oncology, and more.`}
            </motion.p>
          </motion.div>
          <motion.button
            ref={buttonRef}
            initial={{ opacity: 0, y: 20 }}
            animate={buttonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white box-border flex flex-col gap-[7.978px] items-center justify-center overflow-clip px-[16px] md:px-[20px] py-[10px] md:py-[12px] relative rounded-[12px] shadow-[0px_44.1px_12.41px_0px_rgba(60,63,46,0),0px_28.144px_11.302px_0px_rgba(60,63,46,0.02),0px_15.956px_9.529px_0px_rgba(60,63,46,0.07),0px_7.091px_7.091px_0px_rgba(60,63,46,0.12),0px_1.773px_3.767px_0px_rgba(60,63,46,0.14)] shrink-0 w-[200px] md:w-[283px] z-10 hover:opacity-90 transition-opacity"
            style={{ willChange: 'opacity, transform', transform: 'translateZ(0)' }}
          >
            <span className="flex flex-col font-['Saans_TRIAL',sans-serif] font-semibold justify-center leading-[0] not-italic opacity-[0.97] relative shrink-0 text-[#3c3f2e] text-[14px] md:text-[16px] text-center tracking-[-0.28px] md:tracking-[-0.32px] whitespace-nowrap">
              <p className="leading-[normal]">Read more</p>
            </span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

