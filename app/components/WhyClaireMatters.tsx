import Image from "next/image";

export default function WhyClaireMatters() {
  return (
    <div className="box-border flex flex-col isolate items-center pb-[43px] md:pb-[43px] pt-[40px] md:pt-[78px] px-4 md:px-0 relative w-full gap-[80px] md:gap-0 overflow-x-hidden">
      {/* Title Section */}
      <div className="flex flex-col gap-[12px] md:gap-[12px] items-center not-italic relative shrink-0 text-center w-full z-[2] max-w-[358px] md:max-w-none">
        <h2 className="bg-clip-text bg-gradient-to-r font-['CooperLtBT-Regular',sans-serif] from-[#010101] leading-[normal] relative shrink-0 text-[32px] md:text-[56px] to-[#3c3f2e] tracking-[-0.64px] md:tracking-[-1.12px] w-full" style={{ WebkitTextFillColor: "transparent" }}>
          Why CLAIRE Matters
        </h2>
        <p className="font-['Saans_TRIAL',sans-serif] leading-[1.4] relative shrink-0 text-[#6e6e6e] text-[16px] md:text-[16px] tracking-[-0.32px] md:tracking-[-0.32px] w-full whitespace-pre-wrap">
          The daily struggles every medical coder knows too well
        </p>
      </div>

      {/* Main Content Container */}
      <div className="relative md:h-[1293px] mb-[-43px] md:mb-[-43px] rounded-[32px] shrink-0 w-full max-w-[1440px] mx-auto z-[1] px-4 md:px-0 overflow-hidden">
        {/* Background Vector - Desktop only */}
        <div className="hidden md:block absolute inset-0 pointer-events-none opacity-70 overflow-hidden flex items-center justify-center">
          <Image
            alt=""
            className="block max-w-none h-[1302.133px] w-[1345.005px]"
            height={1302.133}
            src="/why-claire-bg-vector.svg"
            width={1345.005}
          />
        </div>

        {/* Connecting Line Vector - Desktop */}
        <div className="hidden md:block absolute h-[1311.314px] left-1/2 translate-x-[-50%] top-[-18.48px] w-[188.163px] pointer-events-none z-[2] overflow-hidden">
          <div className="absolute bottom-0 left-[-1.34%] right-[-1.34%] top-0">
            <Image
              alt=""
              className="block max-w-none w-full h-full"
              height={1311.314}
              src="/why-claire-line-vector.svg"
              width={188.163}
            />
          </div>
        </div>

        {/* Challenge Cards Container - Mobile structure matches Figma exactly */}
        <div className="relative md:absolute md:h-[1001px] md:left-1/2 md:translate-x-[-50%] md:top-[161px] md:w-[1140px] flex flex-col md:block gap-[50px] md:gap-[10px] items-start w-full max-w-[358px] md:max-w-none mx-auto md:mx-0 z-[2] pb-[61.656px] md:pb-0">
          {/* Mobile Connecting Line Vector - Positioned exactly as in Figma */}
          <div className="md:hidden absolute h-[1481.314px] left-[19.081px] top-[-61.656px] w-[319.837px] pointer-events-none z-[1] overflow-hidden">
            <div className="absolute bottom-0 left-[-0.47%] right-[-0.47%] top-0">
              <Image
                alt=""
                className="block max-w-none size-full"
                height={1481.314}
                src="/drag-line.svg"
                width={319.837}
              />
            </div>
          </div>

          {/* Challenge 1: Left Icon on Mobile, Right Aligned on Desktop */}
          <div className="flex flex-col gap-[16px] md:gap-[24px] items-end md:items-end justify-center leading-[0] not-italic pl-[56px] pr-0 md:px-[20px] py-0 md:py-[24px] relative shrink-0 text-left md:text-right w-full md:absolute md:left-0 md:top-0 md:w-[646.574px] max-w-full rounded-[20px]">
            {/* Icon + Title Row - Mobile */}
            <div className="flex md:hidden gap-[16px] items-center relative shrink-0 w-[358px] z-[3]">
              <div className="bg-gradient-to-r from-[#3c3f2e] to-[#3c3f2e] flex items-center justify-center p-[10px] rounded-[12px] shadow-[0px_44.1px_12.41px_0px_rgba(60,63,46,0),0px_28.144px_11.302px_0px_rgba(60,63,46,0.02),0px_15.956px_9.529px_0px_rgba(60,63,46,0.07),0px_7.091px_7.091px_0px_rgba(60,63,46,0.12),0px_1.773px_3.767px_0px_rgba(60,63,46,0.14)] size-[40px] shrink-0 relative z-[3]">
                <Image alt="Clock Icon" className="block w-full h-full" height={24} src="/icon-clock.svg" width={24} />
              </div>
              <h3 className="bg-clip-text bg-gradient-to-r flex flex-col font-['Saans_TRIAL',sans-serif] font-medium from-[#010101] justify-center opacity-[0.97] relative shrink-0 text-[18px] to-[#3c3f2e] tracking-[-0.36px] w-[224.166px]" style={{ WebkitTextFillColor: "transparent" }}>
                <p className="leading-[22px] whitespace-pre-wrap">It Takes Hours to Find Definitive Coding Answers</p>
              </h3>
            </div>
            {/* Title - Desktop */}
            <h3 className="hidden md:flex bg-clip-text bg-gradient-to-r flex flex-col font-['Saans_TRIAL',sans-serif] from-[#010101] justify-center w-full opacity-[0.97] relative shrink-0 text-[20px] to-[#3c3f2e] tracking-[-0.4px]" style={{ WebkitTextFillColor: "transparent" }}>
              <p className="leading-[normal]"
            
              >It Takes Hours to Find Definitive Coding Answers</p>
            </h3>
            <div className="font-['Saans_TRIAL',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#6e6e6e] text-[0px] text-[14px] tracking-[-0.28px] md:tracking-[-0.32px] md:text-[16px] w-[min-content] whitespace-pre-wrap md:w-[530.807px] md:max-w-full">
              <p className="mb-[6px]">{`Coders and CDI professionals routinely dig through Coding Clinics, guidelines, pocket references, facility policies, and peer threads just to validate one diagnosis. Information is scattered, inconsistent, and slow to piece together. `}</p>
              <p className="font-['Saans_TRIAL',sans-serif] font-medium text-[#3c3f2e]">{`CLAIRE brings all of that to your fingertips — instantly. `}</p>
            </div>
          </div>

          {/* Challenge 2: Right Icon on Mobile, Left Aligned on Desktop */}
          <div className="flex flex-col gap-[16px] md:gap-[24px] items-start justify-end leading-[0] not-italic pl-0 pr-[56px] md:px-[20px] py-0 md:py-[24px] relative shrink-0 w-full md:absolute md:left-[493.426px] md:top-[199px] md:w-[646.574px] max-w-full rounded-[20px]">
            {/* Icon + Title Row - Mobile */}
            <div className="flex md:hidden gap-[16px] items-center justify-end relative shrink-0 w-[358px] z-[3]">
              <h3 className="bg-clip-text bg-gradient-to-r flex flex-col font-['Saans_TRIAL',sans-serif] font-medium from-[#010101] justify-center opacity-[0.97] relative shrink-0 text-[18px] text-right to-[#3c3f2e] tracking-[-0.36px] w-[186.301px]" style={{ WebkitTextFillColor: "transparent" }}>
                <p className="leading-[22px] whitespace-pre-wrap">Documentation Isn't Always Clear</p>
              </h3>
              <div className="bg-gradient-to-r from-[#3c3f2e] to-[#3c3f2e] flex items-center justify-center p-[10px] rounded-[12px] shadow-[0px_44.1px_12.41px_0px_rgba(60,63,46,0),0px_28.144px_11.302px_0px_rgba(60,63,46,0.02),0px_15.956px_9.529px_0px_rgba(60,63,46,0.07),0px_7.091px_7.091px_0px_rgba(60,63,46,0.12),0px_1.773px_3.767px_0px_rgba(60,63,46,0.14)] size-[40px] shrink-0 relative z-[3]">
                <Image alt="Files Icon" className="block w-full h-full" height={24} src="/icon-files.svg" width={24} />
              </div>
            </div>
            {/* Title - Desktop */}
            <h3 className="hidden md:flex bg-clip-text bg-gradient-to-r flex flex-col font-['Saans_TRIAL',sans-serif] font-medium from-[#010101] justify-center w-full opacity-[0.97] relative shrink-0 text-[20px] to-[#3c3f2e] tracking-[-0.4px]" style={{ WebkitTextFillColor: "transparent" }}>
              <p className="leading-[normal]">Documentation Isn't Always Clear</p>
            </h3>
            <div className="font-['Saans_TRIAL',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#6e6e6e] text-[0px] text-[16px] text-right tracking-[-0.32px] md:tracking-[-0.32px] md:text-left w-[min-content] whitespace-pre-wrap md:w-[487.517px] md:max-w-full">
              <p className="mb-[6px]">{`Providers document clinically — not in coding language. This means coders spend time interpreting severity, linking conditions, and deciding whether clarification is needed. `}</p>
              <p className="font-['Saans_TRIAL',sans-serif] font-medium text-[#3c3f2e]">{`CLAIRE explains the clinical indicators and the coding pathway in a way that is easily understood. `}</p>
            </div>
          </div>

          {/* Challenge 3: Left Icon on Mobile, Right Aligned on Desktop */}
          <div className="flex flex-col gap-[16px] md:gap-[24px] items-end md:items-end justify-center leading-[0] not-italic pl-[56px] pr-0 md:px-[20px] py-0 md:py-[24px] relative shrink-0 text-left md:text-right w-full md:absolute md:left-0 md:top-[420px] md:w-[646.574px] max-w-full rounded-[20px]">
            {/* Icon + Title Row - Mobile */}
            <div className="flex md:hidden gap-[16px] items-center relative shrink-0 w-[358px] z-[3]">
              <div className="bg-gradient-to-r from-[#3c3f2e] to-[#3c3f2e] flex items-center justify-center p-[10px] rounded-[12px] shadow-[0px_44.1px_12.41px_0px_rgba(60,63,46,0),0px_28.144px_11.302px_0px_rgba(60,63,46,0.02),0px_15.956px_9.529px_0px_rgba(60,63,46,0.07),0px_7.091px_7.091px_0px_rgba(60,63,46,0.12),0px_1.773px_3.767px_0px_rgba(60,63,46,0.14)] size-[40px] shrink-0 relative z-[3]">
                <Image alt="Users Icon" className="block w-full h-full" height={24} src="/icon-users.svg" width={24} />
              </div>
              <h3 className="bg-clip-text bg-gradient-to-r flex flex-col font-['Saans_TRIAL',sans-serif] font-medium from-[#010101] justify-center opacity-[0.97] relative shrink-0 text-[18px] to-[#3c3f2e] tracking-[-0.36px] w-[224.166px]" style={{ WebkitTextFillColor: "transparent" }}>
                <p className="leading-[22px] whitespace-pre-wrap">{`The "Ask a Friend" Bottleneck is Real `}</p>
              </h3>
            </div>
            {/* Title - Desktop */}
            <h3 className="hidden md:flex bg-clip-text bg-gradient-to-r flex flex-col font-['Saans_TRIAL',sans-serif] font-medium from-[#010101] justify-center w-full opacity-[0.97] relative shrink-0 text-[20px] to-[#3c3f2e] tracking-[-0.4px]" style={{ WebkitTextFillColor: "transparent" }}>
              <p className="leading-[normal]">{`The "Ask a Friend" Bottleneck is Real `}</p>
            </h3>
            <div className="font-['Saans_TRIAL',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#6e6e6e] text-[0px] text-[16px] tracking-[-0.32px] md:tracking-[-0.32px] w-[min-content] whitespace-pre-wrap md:w-[487.732px] md:max-w-full">
              <p className="mb-[6px]">{`When coders and CDS get stuck, they ask other SMEs — Teams chats, Slack, Facebook groups, Reddit, listservs. But waiting for someone to answer can stall coding for hours or days. `}</p>
              <p className="font-['Saans_TRIAL',sans-serif] font-medium text-[#3c3f2e]">{`CLAIRE gives expert-level clarification immediately — no waiting, no group chat fishing.`}</p>
            </div>
          </div>

          {/* Challenge 4: Right Icon on Mobile, Left Aligned on Desktop */}
          <div className="flex flex-col gap-[16px] md:gap-[24px] items-start justify-end leading-[0] not-italic pl-0 pr-[56px] md:px-[20px] py-0 md:py-[24px] relative shrink-0 w-full md:absolute md:left-[493.426px] md:top-[641px] md:w-[646.574px] max-w-full rounded-[20px]">
            {/* Icon + Title Row - Mobile */}
            <div className="flex md:hidden gap-[16px] items-center justify-end relative shrink-0 w-[358px] z-[3]">
              <h3 className="bg-clip-text bg-gradient-to-r flex flex-col font-['Saans_TRIAL',sans-serif] font-medium from-[#010101] justify-center opacity-[0.97] relative shrink-0 text-[18px] text-right to-[#3c3f2e] tracking-[-0.36px] w-[220.071px]" style={{ WebkitTextFillColor: "transparent" }}>
                <p className="leading-[22px] whitespace-pre-wrap">{`CDI Queries Are High-Risk and High-Scrutiny `}</p>
              </h3>
              <div className="bg-gradient-to-r from-[#3c3f2e] to-[#3c3f2e] flex items-center justify-center p-[10px] rounded-[12px] shadow-[0px_44.1px_12.41px_0px_rgba(60,63,46,0),0px_28.144px_11.302px_0px_rgba(60,63,46,0.02),0px_15.956px_9.529px_0px_rgba(60,63,46,0.07),0px_7.091px_7.091px_0px_rgba(60,63,46,0.12),0px_1.773px_3.767px_0px_rgba(60,63,46,0.14)] size-[40px] shrink-0 relative z-[3]">
                <Image alt="Question Icon" className="block w-full h-full" height={24} src="/icon-question.svg" width={24} />
              </div>
            </div>
            {/* Title - Desktop */}
            <h3 className="hidden md:flex bg-clip-text bg-gradient-to-r flex flex-col font-['Saans_TRIAL',sans-serif] font-medium from-[#010101] justify-center w-full opacity-[0.97] relative shrink-0 text-[20px] to-[#3c3f2e] tracking-[-0.4px]" style={{ WebkitTextFillColor: "transparent" }}>
              <p className="leading-[normal]">{`CDI Queries Are High-Risk and High-Scrutiny `}</p>
            </h3>
            <div className="font-['Saans_TRIAL',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#6e6e6e] text-[0px] text-[16px] text-right tracking-[-0.32px] md:tracking-[-0.32px] md:text-left w-[min-content] whitespace-pre-wrap md:w-[506.099px] md:max-w-full">
              <p className="mb-[6px]">{`Query compliance is complex. Coders and CDS worry about leading language, insufficient indicators, or missing the need to query altogether. `}</p>
              <p className="font-['Saans_TRIAL',sans-serif] font-medium text-[#3c3f2e]">{`CLAIRE identifies when a query is needed and provides compliant, clinically supported reasoning. `}</p>
            </div>
          </div>

          {/* Challenge 5: Left Icon on Mobile, Right Aligned on Desktop */}
          <div className="flex flex-col gap-[16px] md:gap-[24px] items-end md:items-end justify-center leading-[0] not-italic pl-[56px] pr-0 md:px-[20px] py-0 md:py-[24px] relative shrink-0 text-left md:text-right w-full md:absolute md:left-0 md:top-[840px] md:w-[646.574px] max-w-full rounded-[20px]">
            {/* Icon + Title Row - Mobile */}
            <div className="flex md:hidden gap-[16px] items-center relative shrink-0 w-[358px] z-[3]">
              <div className="bg-gradient-to-r from-[#3c3f2e] to-[#3c3f2e] flex items-center justify-center p-[10px] rounded-[12px] shadow-[0px_44.1px_12.41px_0px_rgba(60,63,46,0),0px_28.144px_11.302px_0px_rgba(60,63,46,0.02),0px_15.956px_9.529px_0px_rgba(60,63,46,0.07),0px_7.091px_7.091px_0px_rgba(60,63,46,0.12),0px_1.773px_3.767px_0px_rgba(60,63,46,0.14)] size-[40px] shrink-0 relative z-[3]">
                <Image alt="Git Pull Icon" className="block w-full h-full" height={24} src="/icon-git-pull.svg" width={24} />
              </div>
              <h3 className="bg-clip-text bg-gradient-to-r flex flex-col font-['Saans_TRIAL',sans-serif] font-medium from-[#010101] justify-center opacity-[0.97] relative shrink-0 text-[18px] to-[#3c3f2e] tracking-[-0.36px] w-[224.166px]" style={{ WebkitTextFillColor: "transparent" }}>
                <p className="leading-[22px] whitespace-pre-wrap">{`Coding Without Context Misses Impact `}</p>
              </h3>
            </div>
            {/* Title - Desktop */}
            <h3 className="hidden md:flex bg-clip-text bg-gradient-to-r flex flex-col font-['Saans_TRIAL',sans-serif] font-medium from-[#010101] justify-center w-full opacity-[0.97] relative shrink-0 text-[20px] to-[#3c3f2e] tracking-[-0.4px]" style={{ WebkitTextFillColor: "transparent" }}>
              <p className="leading-[normal]">{`Coding Without Context Misses Impact `}</p>
            </h3>
            <div className="font-['Saans_TRIAL',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#6e6e6e] text-[0px] text-[16px] tracking-[-0.32px] md:tracking-[-0.32px] w-[min-content] whitespace-pre-wrap md:w-[443.324px] md:max-w-full">
              <p className="mb-[6px]">{`A code is never "just a code." It affects DRGs, SOI/ROM, HCCs, risk scores, RAF, quality scores, and reimbursement. `}</p>
              <p className="font-['Saans_TRIAL',sans-serif] font-medium text-[#3c3f2e]">{`CLAIRE shows how conditions connect — the severity story, the financial impact, and the clinical rationale. `}</p>
            </div>
          </div>
        </div>

      

        {/* Icons positioned along the central line - Hidden on Mobile */}
        {/* Icon 1: Clock - Right side, aligned with first card */}
        <div className="hidden md:flex absolute bg-gradient-to-r from-[#3c3f2e] to-[#3c3f2e] box-border flex-col gap-[10px] items-center justify-center left-1/2 translate-x-[75.9px] p-[10px] rounded-[12px] shadow-[0px_44.1px_12.41px_0px_rgba(60,63,46,0),0px_28.144px_11.302px_0px_rgba(60,63,46,0.02),0px_15.956px_9.529px_0px_rgba(60,63,46,0.07),0px_7.091px_7.091px_0px_rgba(60,63,46,0.12),0px_1.773px_3.767px_0px_rgba(60,63,46,0.14)] size-[40px] top-[176.5px] z-[3]">
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <Image
              alt="Clock Icon"
              className="block max-w-none w-full h-full"
              height={24}
              src="/icon-clock.svg"
              width={24}
            />
          </div>
        </div>

        {/* Icon 2: Files - Left side, aligned with second card */}
        <div className="hidden md:flex absolute bg-gradient-to-r from-[#3c3f2e] to-[#3c3f2e] box-border flex-col gap-[10px] items-center justify-center left-1/2 translate-x-[-113.76px] p-[10px] rounded-[12px] shadow-[0px_44.1px_12.41px_0px_rgba(60,63,46,0),0px_28.144px_11.302px_0px_rgba(60,63,46,0.02),0px_15.956px_9.529px_0px_rgba(60,63,46,0.07),0px_7.091px_7.091px_0px_rgba(60,63,46,0.12),0px_1.773px_3.767px_0px_rgba(60,63,46,0.14)] size-[40px] to-[#3c3f2e] top-[375.5px] z-[3]">
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <Image
              alt="Files Icon"
              className="block max-w-none w-full h-full"
              height={24}
              src="/icon-files.svg"
              width={24}
            />
          </div>
        </div>

        {/* Icon 3: Users - Right side, aligned with third card */}
        <div className="hidden md:flex absolute bg-gradient-to-r from-[#3c3f2e] to-[#3c3f2e] box-border flex-col gap-[10px] items-center justify-center left-1/2 translate-x-[75.9px] p-[10px] rounded-[12px] shadow-[0px_44.1px_12.41px_0px_rgba(60,63,46,0),0px_28.144px_11.302px_0px_rgba(60,63,46,0.02),0px_15.956px_9.529px_0px_rgba(60,63,46,0.07),0px_7.091px_7.091px_0px_rgba(60,63,46,0.12),0px_1.773px_3.767px_0px_rgba(60,63,46,0.14)] size-[40px] to-[#3c3f2e] top-[596.5px] z-[3]">
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <Image
              alt="Users Icon"
              className="block max-w-none w-full h-full"
              height={24}
              src="/icon-users.svg"
              width={24}
            />
          </div>
        </div>

        {/* Icon 4: Question - Left side, aligned with fourth card */}
        <div className="hidden md:flex absolute bg-gradient-to-r from-[#3c3f2e] to-[#3c3f2e] box-border flex-col gap-[10px] items-center justify-center left-1/2 translate-x-[-113.76px] p-[10px] rounded-[12px] shadow-[0px_44.1px_12.41px_0px_rgba(60,63,46,0),0px_28.144px_11.302px_0px_rgba(60,63,46,0.02),0px_15.956px_9.529px_0px_rgba(60,63,46,0.07),0px_7.091px_7.091px_0px_rgba(60,63,46,0.12),0px_1.773px_3.767px_0px_rgba(60,63,46,0.14)] size-[40px] to-[#3c3f2e] top-[817.5px] z-[3]">
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <Image
              alt="Question Icon"
              className="block max-w-none w-full h-full"
              height={24}
              src="/icon-question.svg"
              width={24}
            />
          </div>
        </div>

        {/* Icon 5: Git Pull - Right side, aligned with fifth card */}
        <div className="hidden md:flex absolute bg-gradient-to-r from-[#3c3f2e] to-[#3c3f2e] box-border flex-col gap-[10px] items-center justify-center left-1/2 translate-x-[75.9px] p-[10px] rounded-[12px] shadow-[0px_44.1px_12.41px_0px_rgba(60,63,46,0),0px_28.144px_11.302px_0px_rgba(60,63,46,0.02),0px_15.956px_9.529px_0px_rgba(60,63,46,0.07),0px_7.091px_7.091px_0px_rgba(60,63,46,0.12),0px_1.773px_3.767px_0px_rgba(60,63,46,0.14)] size-[40px] to-[#3c3f2e] top-[1016.5px] z-[3]">
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <Image
              alt="Git Pull Icon"
              className="block max-w-none w-full h-full"
              height={24}
              src="/icon-git-pull.svg"
              width={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
