import Image from "next/image";

export default function HowYourTeamUses() {
  const useCases = [
    {
      title: "Complex Case Resolution",
      description: "Resolve ambiguous documentation in minutes instead of hours. See the complete coding pathway and documentation needs without escalating to a supervisor.",
      stat: "Minutes",
      subtext: "Not hours",
      rotate: "rotate-[-3.22deg]",
      left: "left-[129.43px]",
      top: "top-[-9.38px]"
    },
    {
      title: "CDI Query Generation",
      description: "Generate physician-ready queries instantly instead of drafting from scratch. Send queries today, not tomorrow.",
      stat: "Same Day",
      subtext: "QUERIES",
      rotate: "rotate-[7.379deg]",
      left: "left-[445.55px]",
      top: "top-[3.99px]"
    },
    {
      title: "Production Speed Boost",
      description: "Reduce time-per-chart by surfacing the coding pathway, clinical indicators, and documentation needs instantly. Coders stay in flow instead of stopping to research.",
      stat: "+15% – 30%",
      subtext: "MORE PRODUCTIVITY",
      rotate: "rotate-[-2.368deg]",
      left: "left-[711.57px]",
      top: "top-[-7.24px]"
    },
    {
      title: "Audit Preparation",
      description: "Review high-risk cases and identify documentation gaps before RADV audits arrive. Walk into audits confident.",
      stat: "Ready",
      subtext: "For review",
      rotate: "rotate-[3.643deg]",
      left: "left-[1011.17px]",
      top: "top-[11.47px]"
    }
  ];

  return (
    <div className="relative w-full py-12 md:py-20 px-4 md:px-0">
      <div className="bg-neutral-100 border-t border-[rgba(60,63,46,0.1)] border-solid box-border flex flex-col gap-[30px] md:gap-[50px] items-center pb-0 pt-[50px] md:pt-[80px] px-4 md:px-0 relative w-full min-h-[500px] md:h-[526px]">
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
        <div className="relative w-full max-w-[1440px] mx-auto pb-8 md:pb-0">
          <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 lg:gap-8 items-stretch justify-center w-full px-4 md:px-0">
            {useCases.map((useCase, index) => (
              <div key={index} className={`bg-white border border-[rgba(60,63,46,0.1)] border-solid box-border flex flex-col gap-[24px] md:gap-[32px] items-start justify-center p-[12px] relative rounded-[20px] w-full md:w-[calc(50%-12px)] lg:w-[300px] ${index < 2 ? 'md:rotate-[-2deg]' : 'md:rotate-[2deg]'}`}>
                <div className="box-border flex flex-col gap-[12px] items-start not-italic p-[12px] relative shrink-0 text-[#010101] w-full">
                  <h3 className="font-['Saans_TRIAL',sans-serif] font-medium leading-[normal] opacity-[0.97] relative shrink-0 text-[18px] md:text-[20px] tracking-[-0.36px] md:tracking-[-0.4px] w-full">
                    {useCase.title}
                  </h3>
                  <p className="font-['Saans_TRIAL',sans-serif] leading-[1.4] relative shrink-0 text-[14px] md:text-[16px] tracking-[-0.28px] md:tracking-[-0.32px] w-full md:h-[112px]">
                    {useCase.description}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-[#3c3f2e] to-[#3c3f2e] box-border flex flex-col font-['Saans_TRIAL',sans-serif] font-medium gap-[4px] items-center justify-center not-italic p-[14px] relative rounded-[12px] shadow-[0px_61.74px_17.374px_0px_rgba(60,63,46,0),0px_39.402px_15.823px_0px_rgba(60,63,46,0.02),0px_22.338px_13.341px_0px_rgba(60,63,46,0.07),0px_9.928px_9.928px_0px_rgba(60,63,46,0.12),0px_2.482px_5.274px_0px_rgba(60,63,46,0.14)] shrink-0 text-white w-full">
                  <p className="leading-[normal] relative shrink-0 text-[24px] md:text-[28px] tracking-[-0.48px] md:tracking-[-0.56px] w-full text-center">
                    {useCase.stat}
                  </p>
                  <p className="leading-[1.4] opacity-40 relative shrink-0 text-[12px] md:text-[14px] tracking-[-0.12px] md:tracking-[-0.14px] uppercase w-full text-center">
                    {useCase.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

