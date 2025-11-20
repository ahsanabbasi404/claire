import Image from "next/image";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "50k tokens/ month",
      features: [
        "Basic code lookups",
        "Limited chat queries",
        "No customization",
        "No file uploads"
      ],
      featured: false,
      iconColor: "normal"
    },
    {
      name: "Pro",
      price: "$24.99",
      period: "1M tokens/ month",
      features: [
        "Paste clinical notes for coding",
        "File uploads (text, PDFs)",
        "Search and save favorite codes",
        "Priority support"
      ],
      featured: true,
      iconColor: "white"
    },
    {
      name: "Premium",
      price: "$44.99",
      period: "2m tokens/ month",
      features: [
        "Everything in Pro",
        "Early access to new features"
      ],
      featured: false,
      iconColor: "normal"
    },
    {
      name: "Unlimited",
      price: "$149.99",
      period: "unlimited tokens",
      features: [
        "Everything in Premium",
        "Unlimited Usage"
      ],
      featured: false,
      iconColor: "normal"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#ffffff] to-[#f5f5f5] border-t border-[#3c3f2e] border-solid relative w-full">
      <div className="box-border flex flex-col gap-[40px] md:gap-[60px] items-center pb-[60px] md:pb-[100px] pt-[60px] md:pt-[100px] px-4 md:px-[150px] relative w-full">
        {/* Background Vector - Hidden on mobile */}
        <div className="hidden md:block absolute h-[1256.46px] left-1/2 top-[calc(50%+269px)] translate-x-[-50%] translate-y-[-50%] w-[1297.829px] pointer-events-none opacity-30">
          <Image
            alt=""
            className="block max-w-none w-full h-full"
            height={1256.46}
            src="/pricing-bg-vector.svg"
            width={1297.829}
          />
        </div>

        {/* Title */}
        <h2 className="bg-clip-text bg-gradient-to-r font-['CooperLtBT-Regular',sans-serif] from-[#010101] leading-[normal] relative shrink-0 text-[32px] md:text-[56px] text-center to-[#3c3f2e] tracking-[-0.64px] md:tracking-[-1.12px] z-10" style={{ WebkitTextFillColor: "transparent" }}>
          Simple, Flexible Pricing – No Contracts, No Suprises
        </h2>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-[16px] md:gap-[20px] items-stretch relative w-full max-w-[1140px] z-10">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`${
                plan.featured 
                  ? 'bg-gradient-to-r from-[#3c3f2e] to-[#3c3f2e] border-[rgba(255,255,255,0.7)]' 
                  : 'bg-white border-[rgba(60,63,46,0.1)]'
              } backdrop-blur-[7px] backdrop-filter border border-solid box-border flex flex-col gap-[12px] items-start p-[8px] relative rounded-[20px] w-full min-w-0`}
            >
              {/* Top Section with Price */}
              <div className="box-border flex flex-col gap-[16px] md:gap-[20px] items-center p-[12px] md:p-[16px] relative shrink-0 w-full">
                <div className={`flex flex-col font-['Saans_TRIAL',sans-serif] font-medium gap-[12px] items-start not-italic relative shrink-0 ${plan.featured ? 'text-white' : 'text-[#010101]'} w-full`}>
                  <p className="leading-[normal] min-w-full opacity-[0.97] relative shrink-0 text-[18px] md:text-[20px] tracking-[-0.36px] md:tracking-[-0.4px]">
                    {plan.name}
                  </p>
                  <p className="leading-[normal] min-w-full opacity-[0.97] relative shrink-0 text-[32px] md:text-[40px] tracking-[-0.64px] md:tracking-[-0.8px]">
                    {plan.price}
                  </p>
                  <p className="leading-[1.4] opacity-40 relative shrink-0 text-[12px] md:text-[14px] tracking-[-0.12px] md:tracking-[-0.14px] uppercase">
                    {plan.period}
                  </p>
                </div>
                
                {/* CTA Button */}
                <button className={`${
                  plan.featured 
                    ? 'bg-white text-[#3c3f2e]' 
                    : 'bg-gradient-to-r from-[#3c3f2e] to-[#3c3f2e] text-white'
                } box-border flex flex-col gap-[7.978px] items-center justify-center overflow-clip px-[20px] py-[10px] md:py-[12px] relative rounded-[12px] shadow-[0px_44.1px_12.41px_0px_rgba(60,63,46,0),0px_28.144px_11.302px_0px_rgba(60,63,46,0.02),0px_15.956px_9.529px_0px_rgba(60,63,46,0.07),0px_7.091px_7.091px_0px_rgba(60,63,46,0.12),0px_1.773px_3.767px_0px_rgba(60,63,46,0.14)] shrink-0 w-full border-none cursor-pointer hover:opacity-90 transition-opacity`}>
                  <span className="font-['Saans_TRIAL',sans-serif] font-semibold leading-[normal] not-italic opacity-[0.97] relative shrink-0 text-[14px] md:text-[16px] text-center tracking-[-0.28px] md:tracking-[-0.32px]">
                    Get Started
                  </span>
                </button>
              </div>

              {/* Features List */}
              <div className={`${
                plan.featured 
                  ? 'bg-white border-white' 
                  : 'bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] border-[#3c3f2e]'
              } border border-solid box-border flex flex-col gap-[12px] items-start p-[12px] md:p-[16px] relative rounded-[16px] shrink-0 w-full flex-1`}>
                <p className={`font-['Saans_TRIAL',sans-serif] font-medium leading-[1.4] not-italic ${plan.featured ? 'text-[#3c3f2e]' : 'opacity-40 text-[#010101]'} relative shrink-0 text-[11px] md:text-[12px] tracking-[-0.11px] md:tracking-[-0.12px] uppercase w-full`}>
                  What's included:
                </p>
                <div className="flex flex-col gap-[6px] md:gap-[7px] items-start justify-center relative shrink-0 w-full">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex gap-[8px] md:gap-[10px] items-center justify-center relative shrink-0 w-full">
                      <div className="relative shrink-0 size-[14px] md:size-[16px]">
                        <Image
                          alt=""
                          className="block max-w-none w-full h-full"
                          height={16}
                          src={plan.iconColor === "white" ? "/icon-check-white.svg" : "/icon-check.svg"}
                          width={16}
                        />
                      </div>
                      <p className="flex-1 font-['Saans_TRIAL',sans-serif] font-medium leading-[normal] not-italic opacity-[0.97] relative shrink-0 text-[#010101] text-[12px] md:text-[14px] tracking-[-0.24px] md:tracking-[-0.28px]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

