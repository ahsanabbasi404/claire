"use client";

import Image from "next/image";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "How does CLAIRE work?",
      answer: "CLAIRE uses advanced AI to analyze clinical documentation and provide accurate medical codes with detailed explanations.",
    },
    {
      question: "Is CLAIRE HIPAA compliant?",
      answer: "",
    },
    {
      question: "What training do I need?",
      answer: "",
    },
    {
      question: "How accurate are the code suggestions?",
      answer: "",
    },
    {
      question: "Can CLAIRE integrate with our EMR?",
      answer: "",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="flex flex-col gap-[40px] items-center relative w-full py-12 md:py-20 px-4 md:px-[150px]">
      {/* Title */}
      <h2 className="bg-clip-text bg-gradient-to-r font-['CooperLtBT-Regular',sans-serif] from-[#010101] leading-[normal] relative shrink-0 text-[32px] md:text-[56px] text-center to-[#3c3f2e] tracking-[-0.64px] md:tracking-[-1.12px] z-[2]" style={{ WebkitTextFillColor: "transparent" }}>
        Frequently Asked Questions
      </h2>

      {/* FAQ Items */}
      <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full max-w-[776px] z-[1]">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`box-border flex flex-col gap-[12px] items-start justify-center p-[16px] md:p-[20px] relative rounded-[16px] md:rounded-[20px] shrink-0 w-full cursor-pointer transition-all ${
                isOpen
                  ? "bg-[#3c3f2e] shadow-[13px_20px_24px_0px_rgba(156,156,156,0.09),3px_5px_13px_0px_rgba(156,156,156,0.1)]"
                  : "bg-white border border-[rgba(60,63,46,0.1)] border-solid"
              }`}
            >
              {/* Question Header */}
              <div className="flex gap-[10px] items-center justify-center relative shrink-0 w-full">
                <p
                  className={`flex flex-[1_0_0] flex-col font-['Saans_TRIAL',sans-serif] font-medium justify-center leading-[1.4] min-h-px min-w-px not-italic opacity-[0.97] relative shrink-0 text-[18px] md:text-[22px] tracking-[-0.36px] md:tracking-[-0.44px] whitespace-pre-wrap ${
                    isOpen ? "text-white" : "text-[#010101]"
                  }`}
                >
                  {faq.question}
                </p>
                <div className="relative shrink-0 size-[20px] md:size-[24px]">
                  <Image
                    alt={isOpen ? "Collapse" : "Expand"}
                    className="block max-w-none w-full h-full"
                    height={24}
                    src={isOpen ? "/icon-minus.svg" : "/icon-plus.svg"}
                    width={24}
                  />
                </div>
              </div>

              {/* Answer Content */}
              {isOpen && faq.answer && (
                <p
                  className={`font-['Saans_TRIAL',sans-serif] leading-[normal] md:leading-[normal] not-italic relative shrink-0 text-[16px] tracking-[-0.32px] w-full whitespace-pre-wrap ${
                    isOpen ? "text-white" : "text-[#010101]"
                  }`}
                >
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

