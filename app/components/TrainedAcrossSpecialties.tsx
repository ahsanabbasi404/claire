import Image from "next/image";

export default function TrainedAcrossSpecialties() {
  return (
    <div className="relative w-full px-4 md:px-[150px] py-0 md:py-12 z-20">
      {/* Main Banner Card - Positioned with negative margin to overlap the previous section */}
      <div className="border-[1.5px] border-solid border-white relative rounded-[16px] md:rounded-[32px] w-full max-w-[1268.993px] mx-auto overflow-hidden -mt-[50px] md:-mt-[100px]">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px] md:rounded-[32px]">
          <Image
            alt=""
            className="absolute h-[123.14%] left-0 max-w-none top-[-11.57%] w-full object-cover"
            height={577.621}
            src="/trained-across-bg-image.jpg"
            width={1268.993}
            priority
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute  bg-gradient-to-l from-[41.071%] from-[rgba(0,0,0,0)] h-[577.621px] left-1/2 rounded-[16px] md:rounded-[32px] to-[rgba(0,0,0,0.5)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1268.993px]" />
        
        {/* Content */}
        <div className="box-border flex flex-col gap-[16px] md:gap-[24px] items-start justify-end overflow-clip p-[30px] md:p-[50px] relative rounded-[inherit] w-full min-h-[400px] md:min-h-[577.621px]">
          <div className="flex flex-col gap-[8px] md:gap-[12px] items-start justify-center not-italic relative shrink-0 text-white z-10">
            <h2 className="font-['CooperLtBT-Regular',sans-serif] leading-[normal] relative shrink-0 text-[32px] md:text-[56px] tracking-[-0.64px] md:tracking-[-1.12px] w-full max-w-[493.73px]">
              Trained Across Clinical Specialties
            </h2>
            <p className="font-['Saans_TRIAL',sans-serif] leading-[1.4] relative shrink-0 text-[14px] md:text-[16px] tracking-[-0.28px] md:tracking-[-0.32px] w-full max-w-[536.574px]">
              {`Built on thousands of real clinical scenarios. CLAIRE understands diagnostic criteria and coding pathways across Hospital Medicine, Cardiology, Pulmonary & Critical Care, Nephrology, Infectious Disease, General Surgery, Trauma & Orthopedics, Neurology, Oncology, and more.`}
            </p>
          </div>
          <button className="bg-white box-border flex flex-col gap-[7.978px] items-center justify-center overflow-clip px-[16px] md:px-[20px] py-[10px] md:py-[12px] relative rounded-[12px] shadow-[0px_44.1px_12.41px_0px_rgba(60,63,46,0),0px_28.144px_11.302px_0px_rgba(60,63,46,0.02),0px_15.956px_9.529px_0px_rgba(60,63,46,0.07),0px_7.091px_7.091px_0px_rgba(60,63,46,0.12),0px_1.773px_3.767px_0px_rgba(60,63,46,0.14)] shrink-0 w-[200px] md:w-[283px] z-10 hover:opacity-90 transition-opacity">
            <span className="flex flex-col font-['Saans_TRIAL',sans-serif] font-semibold justify-center leading-[0] not-italic opacity-[0.97] relative shrink-0 text-[#3c3f2e] text-[14px] md:text-[16px] text-center tracking-[-0.28px] md:tracking-[-0.32px] whitespace-nowrap">
              <p className="leading-[normal]">Read more</p>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

