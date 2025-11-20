import Image from "next/image";

export default function CTAandFooter() {
  return (
    <div className="flex flex-col gap-[60px] md:gap-[80px] items-center relative w-full px-4 md:px-[150px] py-12 md:py-20">
      {/* CTA Section */}
      <div className="box-border flex flex-col gap-[32px] md:gap-[50px] items-center overflow-clip p-[40px] md:p-[100px] relative rounded-[16px] md:rounded-[24px] shrink-0 w-full max-w-[1440px] isolate">
        {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden rounded-[16px] md:rounded-[24px]">
          <div className="flex-none h-[100%] md:h-[1140px] rotate-[90deg] scale-y-[-100%] w-[100%] md:w-[421px]">
            <div className="relative size-full">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px] md:rounded-[24px]">
                <Image
                  alt=""
                  className="absolute h-full left-1/2 top-0 -translate-x-1/2 w-[200%] max-w-none object-cover"
                  height={1140}
                  src="/cta-bg-image.jpg"
                  width={421}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Content */}
        <div className="flex flex-col gap-[8px] md:gap-[12px] items-center not-italic relative shrink-0 text-center text-white z-10">
          <h2 className="font-['CooperLtBT-Regular',sans-serif] leading-[normal] relative shrink-0 text-[32px] md:text-[56px] tracking-[-0.64px] md:tracking-[-1.12px]">
            Experience Clinical Clarity Today
          </h2>
          <p className="font-['Saans_TRIAL',sans-serif] leading-[1.4] relative shrink-0 text-[14px] md:text-[16px] tracking-[-0.28px] md:tracking-[-0.32px] w-full max-w-[620.994px]">
            Join medical coding professionals who trust CLAIRE for accurate, explained guidance. Start your free trial—no credit card required. No EMR integration needed.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-[12px] items-stretch md:items-start relative shrink-0 w-full md:w-auto z-10">
          <button className="bg-white box-border flex flex-col gap-[7.978px] items-center justify-center overflow-clip px-[20px] py-[10px] md:py-[12px] relative rounded-[12px] shadow-[0px_44.1px_12.41px_0px_rgba(60,63,46,0),0px_28.144px_11.302px_0px_rgba(60,63,46,0.02),0px_15.956px_9.529px_0px_rgba(60,63,46,0.07),0px_7.091px_7.091px_0px_rgba(60,63,46,0.12),0px_1.773px_3.767px_0px_rgba(60,63,46,0.14)] shrink-0 border-none cursor-pointer hover:opacity-90 transition-opacity w-full md:w-auto">
            <span className="font-['Saans_TRIAL',sans-serif] font-semibold leading-[normal] not-italic opacity-[0.97] relative shrink-0 text-[#3c3f2e] text-[14px] md:text-[16px] text-center tracking-[-0.28px] md:tracking-[-0.32px]">
              Start your Free Trial
            </span>
          </button>
          <button className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] border-solid relative rounded-[12px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity w-full md:w-auto">
            <div className="box-border flex flex-col gap-[7.978px] items-center justify-center overflow-clip px-[20px] py-[10px] md:py-[12px] relative rounded-[inherit]">
              <span className="font-['Saans_TRIAL',sans-serif] font-semibold leading-[normal] not-italic opacity-[0.97] relative shrink-0 text-[14px] md:text-[16px] text-center text-white tracking-[-0.28px] md:tracking-[-0.32px]">
                Request a Demo
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col gap-[40px] md:gap-[65px] items-start relative shrink-0 w-full max-w-[1440px] isolate">
        {/* Background Vector - Decorative element */}
        <div className="hidden md:block absolute h-[481.965px] left-[849.42px] top-0 w-[497.834px] pointer-events-none z-[3]">
          <Image
            alt=""
            className="block max-w-none w-full h-full"
            height={481.965}
            src="/footer-bg-vector.svg"
            width={497.834}
          />
        </div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-start justify-between relative shrink-0 w-full z-10 gap-8 md:gap-0">
          {/* Left Side - Brand and Links */}
          <div className="flex flex-col gap-[40px] md:gap-[65px] items-start relative shrink-0">
            <div className="bg-clip-text bg-gradient-to-r font-['CooperLtBT-Regular',sans-serif] from-[#010101] leading-[normal] not-italic relative shrink-0 text-[28px] md:text-[40px] to-[#3c3f2e] tracking-[-0.56px] md:tracking-[-0.8px] max-w-[600px] md:w-[677.298px]" style={{ WebkitTextFillColor: "transparent" }}>
              <p className="mb-0">The AI Medical Coding Assistant,</p>
              <p>Built for Real-World Clinical Workflows</p>
            </div>

            {/* Footer Links */}
            <nav className="flex flex-wrap font-['Saans_TRIAL',sans-serif] font-medium gap-[24px] md:gap-[42px] items-start leading-[normal] not-italic relative shrink-0 text-[#010101] text-[12px] md:text-[14px] tracking-[-0.24px] md:tracking-[-0.28px]">
              <a href="#product-tour" className="opacity-[0.97] hover:opacity-100 transition-opacity">
                Product Tour
              </a>
              <a href="#documentation" className="opacity-[0.97] hover:opacity-100 transition-opacity">
                Documentation
              </a>
              <a href="#pricing" className="opacity-[0.97] hover:opacity-100 transition-opacity">
                Pricing
              </a>
              <a href="#about" className="opacity-[0.97] hover:opacity-100 transition-opacity">
                About Us
              </a>
              <a href="#contact" className="opacity-[0.97] hover:opacity-100 transition-opacity">
                Contact
              </a>
              <a href="#privacy" className="opacity-[0.97] hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <a href="#terms" className="opacity-[0.97] hover:opacity-100 transition-opacity">
                Terms of Service
              </a>
            </nav>
          </div>

          {/* Right Side - Contact Info */}
          <div className="flex flex-col gap-[8px] items-start relative shrink-0">
            <div className="flex gap-[8px] md:gap-[10px] items-start justify-center relative shrink-0">
              <div className="relative shrink-0 size-[18px] md:size-[20px] mt-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11Z" stroke="#010101" strokeWidth="1.5"/>
                  <path d="M10 18C13 15 17 12.3137 17 8C17 4.68629 13.866 2 10 2C6.13401 2 3 4.68629 3 8C3 12.3137 7 15 10 18Z" stroke="#010101" strokeWidth="1.5"/>
                </svg>
              </div>
              <p className="font-['Saans_TRIAL',sans-serif] font-medium leading-[normal] not-italic opacity-[0.97] relative shrink-0 text-[#010101] text-[12px] md:text-[14px] tracking-[-0.24px] md:tracking-[-0.28px] w-[180px] md:w-[193px]">
                4860 Telephone Rd, Ste 103 #101 Ventura, CA 93003
              </p>
            </div>
            <div className="flex gap-[8px] md:gap-[10px] items-center justify-center relative shrink-0">
              <div className="relative shrink-0 size-[18px] md:size-[20px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 4L10 8M10 8L6 4M10 8V18" stroke="#010101" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 13V16C3 16.5523 3.44772 17 4 17H16C16.5523 17 17 16.5523 17 16V13" stroke="#010101" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="font-['Saans_TRIAL',sans-serif] font-medium leading-[normal] not-italic opacity-[0.97] relative shrink-0 text-[#010101] text-[12px] md:text-[14px] tracking-[-0.24px] md:tracking-[-0.28px]">
                (805) 500-2777
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(60,63,46,0.2)] border-solid box-border flex flex-col md:flex-row items-center justify-between px-0 py-[20px] md:py-[29px] relative shrink-0 w-full z-10 gap-4 md:gap-0">
          {/* Logo */}
          <div className="box-border flex gap-[6px] md:gap-[8.421px] items-center overflow-clip p-[0.842px] relative shrink-0">
            <div className="relative shrink-0 w-[40px] h-[40px] md:w-[46.316px] md:h-[46.316px]">
              <Image
                alt="Claire Logo Icon"
                className="block max-w-none w-full h-full"
                height={46.316}
                src="/logo-icon.svg"
                width={46.316}
              />
            </div>
            <div className="h-[30px] md:h-[35.368px] relative shrink-0 w-[103px] md:w-[120.474px]">
              <Image
                alt="Claire Logo Text"
                className="block max-w-none w-full h-full"
                height={35.368}
                src="/logo-text.svg"
                width={120.474}
              />
            </div>
          </div>

          {/* Copyright */}
          <p className="font-['Saans_TRIAL',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] md:text-[14px] tracking-[-0.24px] md:tracking-[-0.28px]">
            © 2024 CLAIRE IT AI. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

