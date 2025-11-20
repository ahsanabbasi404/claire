import Image from "next/image";

export default function WhatClaireDoes() {
  return (
    <div className="bg-gradient-to-b from-[#3c3f2e] to-[#1e2110] box-border flex flex-col gap-[40px] md:gap-[60px] isolate items-center pb-[50px] md:pb-[100px] pt-[60px] md:pt-[100px] px-4 md:px-[150px] relative w-full z-10 overflow-visible">
      {/* Background Vector */}
      <div className="absolute h-[600px] md:h-[1302.133px] left-1/2 md:left-[47.5px] top-1/2 md:top-[-679px] translate-x-[-50%] md:translate-x-0 translate-y-[-50%] md:translate-y-0 w-[100vw] md:w-[1345.005px] pointer-events-none opacity-20 md:opacity-20 z-[1]">
        <Image
          alt=""
          className="block max-w-none w-full h-full"
          height={1302.133}
          src="/sections/what-claire-does/what-claire-bg-vector.svg"
          width={1345.005}
        />
      </div>

     
      
      {/* Top Banner */}
      <div className="absolute bg-white border border-[#3c3f2e] border-solid box-border flex gap-[15px] items-center justify-center left-1/2 px-[16px] md:px-[25px] py-[8px] md:py-[12px] rounded-[40px] md:rounded-[81px] top-[-18px] md:top-[-22px] translate-x-[-50%] z-[4] max-w-[calc(100%-32px)] md:max-w-none w-auto">
        <p className="font-['Saans_TRIAL',sans-serif] font-semibold leading-[1.3] md:leading-[1.4] not-italic relative text-[#3c3f2e] text-[10px] md:text-[14px] text-center tracking-[-0.1px] md:tracking-[-0.14px] uppercase max-w-full">
          Traditional tools give you codes. CLAIRE gives you confidence.
        </p>
        {/* <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-1px_2px_0px_rgba(0,0,0,0.2),inset_0px_-2px_1px_0px_#ffffff]" /> */}
      </div>

      {/* Title Section */}
      <div className="flex flex-col gap-[8px] md:gap-[12px] items-center not-italic relative shrink-0 text-center text-white z-[3] mt-[20px] md:mt-0">
        <h2 className="font-['CooperLtBT-Regular',sans-serif] leading-[normal] relative shrink-0 text-[32px] md:text-[56px] tracking-[-0.64px] md:tracking-[-1.12px]">
          What CLAIRE Does
        </h2>
        <p className="font-['Saans_TRIAL:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[14px] md:text-[16px] tracking-[-0.28px] md:tracking-[-0.32px] w-full max-w-[536.574px] px-4 md:px-0">
          Every answer explained. Every decision supported.
        </p>
      </div>

      {/* Feature Cards Grid - Responsive: Stack on mobile, 3 columns on desktop */}
      <div className="flex flex-col md:flex-row gap-[20px] items-stretch md:items-start justify-center relative w-full max-w-[1140px] mx-auto z-[2]">
        {/* Column 1 */}
        <div className="flex flex-col gap-[20px] items-stretch relative w-full md:w-[calc(33.333%-14px)] lg:w-[366.667px] md:min-h-[674px]">
          {/* Card 1: Instant CDI Query Generation */}
          <div className="bg-gradient-to-b border border-[rgba(255,255,255,0.1)] border-solid from-[rgba(0,0,0,0.3)] md:h-[302px] relative rounded-[16px] md:rounded-[20px] shrink-0 to-[rgba(0,0,0,0)] w-full min-h-[300px] md:min-h-0 overflow-hidden">
            {/* Blur gradient overlay at bottom - full card width */}
            <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-[#3c3f2e] to-transparent pointer-events-none z-10" />
            <div className="box-border flex flex-col gap-[12px] md:h-[302px] items-start overflow-visible p-[20px] md:p-[24px] relative rounded-[inherit] w-full">
              <h3 className="flex flex-col font-['Saans_TRIAL',sans-serif] font-medium justify-center leading-[0] w-full not-italic opacity-[0.97] relative shrink-0 text-[16px] md:text-[18px] text-white tracking-[-0.32px] md:tracking-[-0.36px]">
                <p className="leading-[normal]">Instant CDI Query Generation</p>
              </h3>
              <p className="font-['Saans_TRIAL',sans-serif] leading-[1.4] w-full not-italic opacity-60 relative shrink-0 text-[14px] text-white tracking-[-0.28px]">
                {`Create compliant, clinically appropriate CDI queries in seconds. Physicians actually respond because they understand what you're asking.`}
              </p>
              {/* Query UI Preview */}
              <div className="mt-auto w-full relative h-[140px] md:h-[146.529px] overflow-visible px-2">
                <div className="relative h-full w-full scale-[0.75] md:scale-[0.9] origin-center">
                  {/* Generate Query Button */}
                  <div className="absolute flex items-center justify-center left-1/2 top-[2.8px] translate-x-[-50%] translate-y-0 z-[3]">
                    <div className="flex-none rotate-[0.568deg]">
                      <div className="bg-white border-[0.977px] border-[rgba(60,63,46,0.1)] border-solid box-border flex gap-[11.728px] items-center justify-center p-[10px] relative rounded-[10.137px] w-[121.302px]">
                        <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[#010101] text-[13.486px] tracking-[-0.2697px] whitespace-nowrap">
                          Generate Query
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Query Card */}
                  <div className="absolute flex items-center justify-center left-[5%] md:left-[calc(50%-131.32px)] top-[26.78px] translate-x-0 md:translate-x-[-50%] z-[2]">
                    <div className="flex-none rotate-[4.459deg]">
                      <div className="bg-[#383a2c] border border-[rgba(255,255,255,0.4)] border-solid box-border flex flex-col gap-[12px] items-start leading-[1.4] not-italic p-[14px] relative rounded-[10.38px] text-[11.799px] text-white tracking-[-0.236px] w-[162.778px] max-w-[calc(100%-20px)] md:max-w-none">
                        <p className="opacity-40 relative shrink-0 uppercase w-full">Query</p>
                        <p className="relative shrink-0 w-full">Would you clarify if sepsis criteria are met?</p>
                      </div>
                    </div>
                  </div>
                  {/* Clinical Indicators Card */}
                  <div className="absolute flex items-center justify-center right-[5%] md:right-[calc(50%-75.78px)] top-[26.78px] translate-x-0 md:translate-x-[50%] z-[1]">
                    <div className="flex-none rotate-[353.946deg]">
                      <div className="bg-[#383a2c] border-[0.917px] border-[rgba(255,255,255,0.1)] border-solid box-border flex flex-col gap-[11px] items-start not-italic p-[12.833px] relative rounded-[9.515px] text-[10.816px] text-white tracking-[-0.2163px] w-[244.244px] max-w-[calc(100%-20px)] md:max-w-none">
                        <p className="leading-[1.4] opacity-40 relative shrink-0 uppercase w-full">Clinical Indicators present:</p>
                        <ul className="block leading-[1.4] relative shrink-0 w-full list-disc list-inside space-y-[3.67px]">
                          <li>Tachycardia (HR 115)</li>
                          <li>Elevated lactate (3.2)</li>
                          <li>WBC 18,000</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Searchable Medical Code */}
          <div className="bg-gradient-to-b border border-[rgba(255,255,255,0.1)] border-solid flex-[1_0_0] flex-col from-[rgba(0,0,0,0.3)] gap-[12px] items-start min-h-[300px] md:min-h-0 p-[20px] md:p-[24px] relative rounded-[16px] md:rounded-[20px] shrink-0 to-[rgba(0,0,0,0)] w-full overflow-hidden">
            {/* Blur gradient overlay at bottom - full card width */}
            <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-[#3c3f2e] to-transparent pointer-events-none z-10" />
            <h3 className="flex flex-col font-['Saans_TRIAL',sans-serif] font-medium justify-center leading-[0] w-full not-italic opacity-[0.97] relative shrink-0 text-[16px] md:text-[18px] text-white tracking-[-0.32px] md:tracking-[-0.36px]">
              <p className="leading-[normal]">Searchable Medical Code</p>
            </h3>
            <p className="font-['Saans_TRIAL:Regular',sans-serif] leading-[1.4] w-full not-italic opacity-60 relative shrink-0 text-[14px] text-white tracking-[-0.28px]">
              {`Reference ICD-10-CM, CPT, HCPCS, ICD-10-PCS all integrated and searchable. No tab-switching between tools. `}
            </p>
            {/* Search UI Preview */}
            <div className="mt-auto w-full relative h-[140px] md:h-[149.122px] overflow-visible">
              <div className="relative h-full w-full">
                {/* Search Input */}
                <div className="absolute bg-[#383a2c] border border-[rgba(255,255,255,0.5)] border-solid box-border flex gap-[11.444px] items-center left-0 p-[13.351px] rounded-[12px] top-0 w-full max-w-[319px]">
                  <div className="relative shrink-0 size-[18.495px]">
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                    </svg>
                  </div>
                  <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[13.564px] text-white tracking-[-0.2713px]">
                    atrial firbillation
                  </p>
                </div>
                {/* Result Cards */}
                <div className="absolute flex items-center justify-center left-1/2 top-[30.89px] translate-x-[-50%]">
                  <div className="flex-none rotate-[357.365deg]">
                    <div className="bg-white border-[0.977px] border-[rgba(60,63,46,0.1)] border-solid box-border flex gap-[11.728px] items-center p-[7.818px] relative rounded-[10.137px] w-[297px] max-w-full">
                      <div className="bg-[#3c3f2e] box-border flex gap-[5.864px] items-center justify-center px-[7.818px] py-[4.886px] relative rounded-[5.864px] shrink-0">
                        <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[10.75px] text-white tracking-[-0.1075px] uppercase">ICD-10</p>
                      </div>
                      <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[#010101] text-[13.486px] tracking-[-0.2697px]">I48.91 - Unspec AFib</p>
                    </div>
                  </div>
                </div>
               
                <div className="absolute bg-gradient-to-b border-[0.843px] border-[rgba(60,63,46,0.1)] border-solid box-border flex from-[rgba(56,58,44,0)] gap-[10.114px] items-center left-1/2 opacity-40 p-[6.742px] rounded-bl-[8.742px] rounded-br-[8.742px] to-[rgba(56,58,44,0.6)] top-[84.61px] translate-x-[-50%] w-[256.127px]">
                  <div className="bg-[rgba(255,255,255,0.2)] box-border flex gap-[5.057px] items-center justify-center px-[6.742px] py-[4.214px] relative rounded-[5.057px] shrink-0">
                    <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[9.271px] text-white tracking-[-0.0927px] uppercase">ICD-10</p>
                  </div>
                  <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[11.63px] text-white tracking-[-0.2326px]">I48.2 - Chronic AFib</p>
                </div>
                <div className="absolute bg-gradient-to-b border-[0.715px] border-[rgba(60,63,46,0.1)] border-solid box-border flex from-[rgba(56,58,44,0)] gap-[8.583px] items-center left-1/2 p-[5.722px] rounded-bl-[7.418px] rounded-br-[7.418px] to-[rgba(56,58,44,0.6)] top-[119.53px] translate-x-[-50%] w-[217.357px]">
                  <div className="bg-[rgba(255,255,255,0.2)] box-border flex gap-[4.291px] items-center justify-center px-[5.722px] py-[3.576px] relative rounded-[4.291px] shrink-0">
                    <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[7.867px] text-white tracking-[-0.0787px] uppercase">CPT</p>
                  </div>
                  <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[9.869px] text-white tracking-[-0.1974px]">93000 - ECG</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-[20px] items-stretch relative w-full md:w-[calc(33.333%-14px)] lg:w-[366.667px] md:min-h-[674px]">
          {/* Card 3: Step-by-Step Clinical Reasoning */}
          <div className="bg-gradient-to-b border border-[rgba(255,255,255,0.7)] border-solid box-border flex flex-col from-[rgba(0,0,0,0.1)] gap-[12px] md:h-[360px] items-start p-[20px] md:p-[24px] relative rounded-[16px] md:rounded-[20px] shrink-0 to-[rgba(0,0,0,0)] w-full min-h-[360px] md:min-h-0 overflow-hidden">
            {/* Blur gradient overlay at bottom - full card width */}
            <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-transparent pointer-events-none z-10" />
            <h3 className="flex flex-col font-['Saans_TRIAL',sans-serif] font-medium justify-center leading-[0] w-full not-italic opacity-[0.97] relative shrink-0 text-[16px] md:text-[18px] text-white tracking-[-0.32px] md:tracking-[-0.36px]">
              <p className="leading-[normal]">Step-by-Step Clinical Reasoning</p>
            </h3>
            <p className="font-['Saans_TRIAL:Regular',sans-serif] leading-[1.4] w-full not-italic opacity-60 relative shrink-0 text-[14px] text-white tracking-[-0.28px]">
              {`Every code includes the "why"—diagnostic criteria, clinical indicators, documentation requirements, and DRG/HCC awareness.`}
            </p>
            {/* Step-by-Step UI Preview */}
            <div className="mt-auto w-full relative h-[200px] md:h-[223.539px] overflow-visible">
              <div className="relative h-full w-full">
                {/* Step 3: Code */}
                <div className="absolute flex items-center justify-center left-1/2 top-[10px] translate-x-[-50%]">
                  <div className="flex-none rotate-[356.525deg]">
                    <div className="bg-white border-[0.977px] border-[rgba(60,63,46,0.1)] border-solid box-border flex flex-col gap-[11px] items-start leading-[1.4] not-italic p-[13px] relative rounded-[12px] text-[#010101] text-[10.816px] tracking-[-0.2163px] w-[244.244px] max-w-[calc(100%-20px)]">
                      <p className="relative shrink-0 uppercase w-full">Step 3: code</p>
                      <p className="relative shrink-0 w-full">N17.1 captures both acuity and severity for DRG impact</p>
                    </div>
                  </div>
                </div>
                {/* Step 2: Classify */}
                <div className="absolute flex items-center justify-center left-0 top-[81.67px]">
                  <div className="flex-none rotate-[353.742deg]">
                    <div className="bg-[#383a2c] border-[0.825px] border-[rgba(255,255,255,0.5)] border-solid box-border flex flex-col gap-[9.9px] items-start leading-[1.4] not-italic p-[11.55px] relative rounded-[8.563px] text-[9.734px] text-white tracking-[-0.1947px] w-[242.919px] max-w-[calc(100%-20px)]">
                      <p className="opacity-40 relative shrink-0 uppercase w-full">Step 2: classify</p>
                      <p className="relative shrink-0 w-full">{`Stage 2 AKI based on creatinine elevation >2-3x baseline`}</p>
                    </div>
                  </div>
                </div>
                {/* Step 1: Identify */}
                <div className="absolute flex items-center justify-center left-1/2 top-[143.43px] translate-x-[-50%]">
                  <div className="flex-none rotate-[1.21deg]">
                    <div className="bg-[#383a2c] border-[0.825px] border-[rgba(255,255,255,0.1)] border-solid box-border flex flex-col gap-[9.9px] items-start leading-[1.4] not-italic p-[11.55px] relative rounded-[8.563px] text-[9.734px] text-white tracking-[-0.1947px] w-[242.919px] max-w-[calc(100%-20px)]">
                      <p className="opacity-40 relative shrink-0 uppercase w-full">Step 1: Identify</p>
                      <p className="relative shrink-0 w-full">{`Patient meets criteria for acute kidney injury (Cr increase >0.3)`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: DRG & HCC Impact Visibility */}
          <div className="bg-gradient-to-b border border-[rgba(255,255,255,0.1)] border-solid flex-[1_0_0] flex-col from-[rgba(0,0,0,0.3)] gap-[12px] items-start min-h-[280px] md:min-h-0 p-[20px] md:p-[24px] relative rounded-[16px] md:rounded-[20px] shrink-0 to-[rgba(0,0,0,0)] w-full overflow-hidden">
            {/* Blur gradient overlay at bottom - full card width */}
            <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-[#3c3f2e] to-transparent pointer-events-none z-10" />
            <h3 className="flex flex-col font-['Saans_TRIAL',sans-serif] font-medium justify-center leading-[0] w-full not-italic opacity-[0.97] relative shrink-0 text-[16px] md:text-[18px] text-white tracking-[-0.32px] md:tracking-[-0.36px]">
              <p className="leading-[normal]">{`DRG & HCC Impact Visibility`}</p>
            </h3>
            <p className="font-['Saans_TRIAL:Regular',sans-serif] leading-[1.4] w-full not-italic opacity-60 relative shrink-0 text-[14px] text-white tracking-[-0.28px]">
              {`Understand how your coding decisions affect case severity, reimbursement, and compliance. `}
            </p>
            {/* DRG/HCC UI Preview */}
            <div className="mt-auto w-full relative h-[140px] md:h-[145.921px] overflow-visible">
              <div className="relative h-full w-full">
                {/* DRG Impact Card */}
                <div className="absolute flex items-center justify-center left-1/2 top-[calc(50%-26.94px)] translate-x-[-50%] translate-y-[-50%]">
                  <div className="flex-none rotate-[3.286deg]">
                    <div className="bg-white border-[1.101px] border-[rgba(60,63,46,0.1)] border-solid box-border flex flex-col gap-[12.392px] items-start p-[14.645px] relative rounded-[13.518px] w-[304.163px] max-w-[calc(100%-20px)]">
                      <div className="flex gap-[12.392px] items-start relative shrink-0 w-full">
                        <p className="flex-[1_0_0] font-medium leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[#010101] text-[12.184px] tracking-[-0.2437px] uppercase">DRG Impact</p>
                        <div className="bg-[#4caf50] box-border flex gap-[6.606px] items-center justify-center px-[8.808px] py-[5.505px] relative rounded-[6.606px] shrink-0">
                          <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[12.111px] text-white tracking-[-0.1211px] uppercase">+$4,200</p>
                        </div>
                      </div>
                      <div className="flex gap-[7.886px] items-start relative shrink-0 w-full">
                        <div className="bg-[#63b967] h-[4.967px] rounded-[18.024px] shrink-0 w-[188.759px]" />
                        <div className="bg-[#63b967] flex-[1_0_0] h-[4.967px] min-h-px min-w-px opacity-10 rounded-[18.024px] shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* SOI Score */}
                <div className="absolute flex items-center justify-center left-[calc(50%-79.43px)] top-[calc(50%+36.89px)] translate-x-[-50%] translate-y-[-50%]">
                  <div className="flex-none rotate-[354.952deg]">
                    <div className="bg-[#383a2c] border-[0.679px] border-[rgba(255,255,255,0.5)] border-solid box-border flex flex-col items-center leading-[1.4] not-italic pb-[10.696px] pt-[9.873px] px-[4.937px] rounded-[7.046px] text-white w-[116.011px]">
                      <p className="relative shrink-0 text-[22.215px] tracking-[-0.4443px]">3.2</p>
                      <p className="opacity-40 relative shrink-0 text-[8.009px] tracking-[-0.1602px] uppercase">SOI Score</p>
                    </div>
                  </div>
                </div>
                {/* HCC 18 */}
                <div className="absolute flex items-center justify-center left-[calc(50%+79.43px)] top-[calc(50%+37.18px)] translate-x-[-50%] translate-y-[-50%]">
                  <div className="flex-none rotate-[354.952deg]">
                    <div className="bg-[#383a2c] border-[0.679px] border-[rgba(255,255,255,0.5)] border-solid box-border flex flex-col items-center leading-[1.4] not-italic pb-[10.696px] pt-[9.873px] px-[4.937px] relative rounded-[7.046px] text-white w-[116.011px]">
                      <p className="relative shrink-0 text-[22.215px] tracking-[-0.4443px]">HCC 18</p>
                      <p className="opacity-40 relative shrink-0 text-[8.009px] tracking-[-0.1602px] uppercase">RAF +0.318</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-[20px] items-stretch relative w-full md:w-[calc(33.333%-14px)] lg:w-[366.667px] md:min-h-[674px]">
          {/* Card 5: Intelligent Code Suggestions */}
          <div className="bg-gradient-to-b border border-[rgba(255,255,255,0.1)] border-solid from-[rgba(0,0,0,0.3)] md:h-[325px] relative rounded-[16px] md:rounded-[20px] shrink-0 to-[rgba(0,0,0,0)] w-full min-h-[320px] md:min-h-0 overflow-hidden">
            {/* Blur gradient overlay at bottom - full card width */}
            <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-[#3c3f2e] to-transparent pointer-events-none z-10" />
            <div className="box-border flex flex-col gap-[12px] md:h-[325px] items-start overflow-visible p-[20px] md:p-[24px] relative rounded-[inherit] w-full">
              <h3 className="flex flex-col font-['Saans_TRIAL',sans-serif] font-medium justify-center leading-[0] w-full not-italic opacity-[0.97] relative shrink-0 text-[16px] md:text-[18px] text-white tracking-[-0.32px] md:tracking-[-0.36px]">
                <p className="leading-[normal]">Intelligent Code Suggestions</p>
              </h3>
              <p className="font-['Saans_TRIAL',sans-serif] leading-[1.4] w-full not-italic opacity-60 relative shrink-0 text-[14px] text-white tracking-[-0.28px]">
                Context-aware ICD-10-CM, CPT, and HCPCS recommendations. CLAIRE interprets natural language clinical notes and explains the clinical reasoning behind every suggestion.
              </p>
              {/* Code Suggestions UI Preview */}
              <div className="mt-auto w-full relative h-[120px] md:h-[130.049px] overflow-visible">
                <div className="relative h-full w-full">
                  {/* Patient Note */}
                  <div className="absolute flex items-center justify-center left-1/2 top-[calc(50%+29.61px)] translate-x-[-50%] translate-y-[-50%]">
                    <div className="flex-none rotate-[358.113deg]">
                      <div className="bg-gradient-to-r border border-[rgba(255,255,255,0.1)] border-solid box-border flex flex-col from-[rgba(255,255,255,0.05)] gap-[16.608px] h-[61.162px] items-start justify-center p-[12.232px] relative rounded-[10.38px] to-[rgba(153,153,153,0.05)] w-[294.453px] max-w-[calc(100%-20px)]">
                        <p className="leading-[1.4] not-italic relative shrink-0 text-[11.799px] text-white tracking-[-0.236px] w-full">
                          📋 Patient admitted with acute exacerbation of COPD with hypoxemia requiring supplemental oxygen...
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Code J44.1 */}
                  <div className="absolute flex items-center justify-center left-[calc(50%+66.29px)] top-[calc(50%-15.03px)] translate-x-[-50%] translate-y-[-50%]">
                    <div className="flex-none rotate-[1.464deg]">
                      <div className="bg-white border-[0.868px] border-[rgba(60,63,46,0.1)] border-solid box-border flex gap-[10.412px] items-center p-[6.942px] relative rounded-[9px]">
                        <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[#010101] text-[11.973px] tracking-[-0.2395px]">J44.1</p>
                        <div className="bg-[#4caf50] box-border flex gap-[5.206px] items-center justify-center px-[6.942px] py-[4.339px] relative rounded-[5.206px] shrink-0">
                          <svg className="size-[12.148px]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[9.545px] text-white tracking-[-0.0954px] uppercase">Explained</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Code J96.01 */}
                  <div className="absolute flex items-center justify-center left-[calc(50%-47.45px)] top-[calc(50%-36.57px)] translate-x-[-50%] translate-y-[-50%]">
                    <div className="flex-none rotate-[353.903deg]">
                      <div className="bg-white border-[0.977px] border-[rgba(60,63,46,0.1)] border-solid box-border flex gap-[11.728px] items-center p-[7.818px] relative rounded-[10.137px]">
                        <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[#010101] text-[13.486px] tracking-[-0.2697px]">J96.01</p>
                        <div className="bg-[#4caf50] box-border flex gap-[5.864px] items-center justify-center px-[7.818px] py-[4.886px] relative rounded-[5.864px] shrink-0">
                          <svg className="size-[13.682px]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[10.75px] text-white tracking-[-0.1075px] uppercase">Explained</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: Audit & Compliance Support */}
          <div className="bg-gradient-to-b border border-[rgba(255,255,255,0.1)] border-solid flex-[1_0_0] flex-col from-[rgba(0,0,0,0.3)] gap-[12px] items-start min-h-[300px] md:min-h-0 p-[20px] md:p-[24px] relative rounded-[16px] md:rounded-[20px] shrink-0 to-[rgba(0,0,0,0)] w-full overflow-hidden">
            {/* Blur gradient overlay at bottom - full card width */}
            <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-[#3c3f2e] to-transparent pointer-events-none z-10" />
            <h3 className="flex flex-col font-['Saans_TRIAL',sans-serif] font-medium justify-center leading-[0] w-full not-italic opacity-[0.97] relative shrink-0 text-[16px] md:text-[18px] text-white tracking-[-0.32px] md:tracking-[-0.36px]">
              <p className="leading-[normal]">{`Audit & Compliance Support`}</p>
            </h3>
            <p className="font-['Saans_TRIAL:Regular',sans-serif] leading-[1.4] w-full not-italic opacity-60 relative shrink-0 text-[14px] text-white tracking-[-0.28px]">
              Identify documentation gaps and coding vulnerabilities before RADV audits or external reviews arrive.
            </p>
            {/* Audit UI Preview */}
            <div className="mt-auto w-full relative h-[180px] md:h-[192.169px] overflow-visible">
              <div className="relative h-full w-full">
                {/* Audit Readiness Score */}
                <div className="absolute flex items-center justify-center left-1/2 top-[-4.35px] translate-x-[-50%]">
                  <div className="flex-none rotate-[357.587deg]">
                    <div className="bg-white border-[0.679px] border-[rgba(255,255,255,0.5)] border-solid box-border flex flex-col items-center leading-[1.4] not-italic pb-[10.696px] pt-[9.873px] px-[4.937px] relative rounded-[10px] w-[208.036px]">
                      <p className="relative shrink-0 text-[#55b359] text-[22.215px] tracking-[-0.4443px]">94%</p>
                      <p className="relative shrink-0 text-[#010101] text-[8.009px] tracking-[-0.1602px] uppercase">Audit readiness score</p>
                    </div>
                  </div>
                </div>
                {/* Valid Item */}
                <div className="absolute flex items-center justify-center left-[9.46px] top-[53.24px]">
                  <div className="flex-none rotate-[2.916deg]">
                    <div className="bg-[#383a2c] border-[0.843px] border-[rgba(255,255,255,0.1)] border-solid box-border flex gap-[10.114px] items-center p-[6.742px] relative rounded-[8.742px]">
                      <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[11.63px] text-white tracking-[-0.2326px]">Pneumonia meets all CMS criteria</p>
                      <div className="bg-[rgba(255,255,255,0.2)] box-border flex gap-[5.057px] items-center justify-center px-[6.742px] py-[4.214px] relative rounded-[5.057px] shrink-0">
                        <svg className="size-[14px]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[9.271px] text-white tracking-[-0.0927px] uppercase">valid</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Gap Items */}
                <div className="absolute bg-[#383a2c] border-[0.843px] border-[rgba(255,255,255,0.1)] border-solid box-border flex gap-[10.114px] items-center left-0 opacity-60 p-[6.742px] relative rounded-[8.742px] top-[102.09px] w-full md:w-auto">
                  <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[11.63px] text-white tracking-[-0.2326px]">CHF diagnosis lacks EF documentation</p>
                  <div className="bg-[rgba(255,255,255,0.2)] box-border flex gap-[5.057px] items-center justify-center px-[6.742px] py-[4.214px] relative rounded-[5.057px] shrink-0">
                    <svg className="size-[14px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                    <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[9.271px] text-white tracking-[-0.0927px] uppercase">Gap</p>
                  </div>
                </div>
                <div className="absolute flex items-center justify-center left-[25.26px] top-[134.53px] opacity-20">
                  <div className="flex-none rotate-[5.711deg]">
                    <div className="bg-[#383a2c] border-[0.843px] border-[rgba(255,255,255,0.1)] border-solid box-border flex gap-[10.114px] items-center p-[6.742px] relative rounded-[8.742px]">
                      <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[11.63px] text-white tracking-[-0.2326px]">Sepsis query recommended</p>
                      <div className="bg-[rgba(255,255,255,0.2)] box-border flex gap-[5.057px] items-center justify-center px-[6.742px] py-[4.214px] relative rounded-[5.057px] shrink-0">
                        <svg className="size-[14px]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                        <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[9.271px] text-white tracking-[-0.0927px] uppercase">Gap</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
