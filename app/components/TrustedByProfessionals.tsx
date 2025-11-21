import Image from "next/image";

export default function TrustedByProfessionals() {
  const testimonials = [
    // Column 1
    [
      {
        quote: '"CLAIRE cut coding time in half. I\'m getting clinical reasoning, not just codes. That\'s the difference between guessing and knowing."',
        role: "MEDICAL CODER",
        org: "400-bed Hospital System"
      },
      {
        quote: '"CLAIRE has completely changed the way I approach complex cases. The clinical reasoning she provides helps me understand the \'why\' behind every code. My accuracy and speed have both improved."',
        role: "CODER",
        org: "Acute Care Hospital"
      },
      {
        quote: '"I used to spend so much time hunting through Coding Clinics and notes. CLAIRE surfaces the documentation I need instantly. I\'m completing charts faster than ever."',
        role: "INPATIENT CODER",
        org: "Virtual Care"
      }
    ],
    // Column 2
    [
      {
        quote: '"Our CDI queries are better and compliant. Physicians actually respond. CLAIRE understands what clinicians need."',
        role: "CDI SPECIALIST",
        org: "Health System"
      },
      {
        quote: '"The query drafts are phenomenal. They\'re physician-ready, compliant, and capture the exact clinical indicators we need. Our query turnaround time has dropped dramatically."',
        role: "CDI SPECIALIST",
        org: "Integrated Health System"
      },
      {
        quote: '"CLAIRE flags unsupported diagnoses before we submit claims. Our audit risk has gone down significantly, and we walk into reviews prepared."',
        role: "AUDIT & COMPLIANCE",
        org: "Lead – MA Plan Vendor"
      }
    ],
    // Column 3
    [
      {
        quote: '"New coders learn the why behind codes immediately. Onboarding time dropped 30%. CLAIRE is our training game-changer."',
        role: "HIM MANAGER",
        org: "Regional Hospital Network"
      },
      {
        quote: '"My team used to escalate tons of ambiguous cases. Now they run them through CLAIRE first. Escalations are down, production is up, and everyone feels more confident."',
        role: "CODING SUPERVISOR",
        org: "Multispecialty Group"
      },
      {
        quote: '"Production is up, questions are down, and quality is better. Truly a game changer."',
        role: "SUPERVISOR",
        org: "Health Promotion"
      }
    ]
  ];

  return (
    <div className="flex flex-col gap-[20px] md:gap-[30px] items-center relative w-full pt-20 md:pt-32 pb-12 md:pb-20 px-4 md:px-[150px] isolate">
      {/* Title */}
      <h2 className="bg-clip-text bg-gradient-to-r font-['CooperLtBT-Regular',sans-serif] from-[#010101] leading-[normal] relative shrink-0 text-[32px] md:text-[56px] text-center to-[#3c3f2e] tracking-[-0.64px] md:tracking-[-1.12px] z-[2]" style={{ WebkitTextFillColor: "transparent" }}>
        Trusted by Medical Coding Professionals
      </h2>

      {/* Desktop View */}
      <div className="hidden md:flex flex-col items-center relative shrink-0 w-full max-w-[1140px] z-[1]">
        {/* Testimonials Grid - CSS Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch justify-items-center w-full mb-[-100px] pb-[120px] gap-6">
          {/* Flatten testimonials and render in grid */}
          {testimonials.flat().map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white border border-[rgba(60,63,46,0.1)] border-solid box-border flex flex-col gap-[32px] items-start justify-between p-[24px] relative rounded-[20px] shrink-0 w-full max-w-[366.667px] h-full"
            >
              <p className="font-['Saans_TRIAL',sans-serif] font-medium leading-[1.4] not-italic opacity-[0.97] relative shrink-0 text-[#010101] text-[22px] tracking-[-0.44px] w-full">
                {testimonial.quote}
              </p>
              <div className="flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] w-full">
                <p className="font-['Saans_TRIAL',sans-serif] font-medium relative shrink-0 text-[#010101] tracking-[-0.16px] uppercase w-full">
                  {testimonial.role}
                </p>
                <p className="font-['Saans_TRIAL',sans-serif] relative shrink-0 text-[#6e6e6e] tracking-[-0.32px] w-full">
                  {testimonial.org}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Vector Container with Gradient Overlays */}
        <div className="absolute h-[492.82px] left-1/2 translate-x-[-50%] bottom-[80px] w-[509.046px] pointer-events-none z-[5]">
          {/* SVG Image */}
          <Image
            alt=""
            className="block max-w-none w-full h-full"
            height={492.82}
            src="/reviews-vector-1.svg"
            width={509.046}
          />
          
          {/* Left side white gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-50" style={{ width: '30%', left: 0 }} />
          
          {/* Right side white gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent opacity-50" style={{ width: '30%', right: 0 }} />
          
          {/* Bottom gradient overlay - transparent to white */}
          <div 
            className="absolute inset-x-0 bottom-0 h-full pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)',
              borderBottom: '1px solid rgba(234, 101, 24, 0.00)'
            }}
          />
        </div>

        {/* Stats Section with Blur Effect */}
        <div className="flex h-[198px] items-center justify-center overflow-visible relative shrink-0 w-full max-w-[1141px] z-20"
        >
          {/* Blurred Background Drop */}
          <div className="absolute inset-0 backdrop-blur-sm bg-white/70 rounded-[20px] shadow-xl border border-[rgba(60,63,46,0.1)] z-0" />
          
          {/* Stat 1 */}
          <div className="flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 z-10">
            <p 
              className="font-['Saans_TRIAL',sans-serif] font-medium leading-[normal] relative shrink-0 text-[64px] tracking-[-1.28px] whitespace-nowrap" 
              style={{ 
                background: 'linear-gradient(180deg, #DAA03F 0%, #994F0C 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 500,
              }}
            >
              50+
            </p>
            <p className="font-['Saans_TRIAL',sans-serif] leading-[1.4] opacity-40 relative shrink-0 text-[#010101] text-[14px] tracking-[-0.14px] uppercase">
              Healthcare Facilities
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 z-10">
            <p 
              className="font-['Saans_TRIAL',sans-serif] font-medium leading-[normal] relative shrink-0 text-[64px] tracking-[-1.28px] whitespace-nowrap" 
              style={{ 
                background: 'linear-gradient(180deg, #DAA03F 0%, #994F0C 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 500,
              }}
            >
              10,000+
            </p>
            <p className="font-['Saans_TRIAL',sans-serif] leading-[1.4] opacity-40 relative shrink-0 text-[#010101] text-[14px] tracking-[-0.14px] uppercase">
              Codes Explained Daily
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 z-10">
            <p 
              className="font-['Saans_TRIAL',sans-serif] font-medium leading-[normal] relative shrink-0 text-[64px] tracking-[-1.28px] whitespace-nowrap" 
              style={{ 
                background: 'linear-gradient(180deg, #DAA03F 0%, #994F0C 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 500,
                fontSize: '64px',
              }}
            >
              4.9/5
            </p>
            <p className="font-['Saans_TRIAL',sans-serif] leading-[1.4] opacity-40 relative shrink-0 text-[#010101] text-[14px] tracking-[-0.14px] uppercase">
              Average Rating
            </p>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-4 w-full">
        {/* Only First 3 Testimonials on Mobile */}
        {testimonials.flat().slice(0, 3).map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white border border-[rgba(60,63,46,0.1)] border-solid box-border flex flex-col gap-[24px] items-start justify-center p-[20px] relative rounded-[16px] shrink-0 w-full"
          >
            <p className="font-['Saans_TRIAL',sans-serif] font-medium leading-[1.4] not-italic opacity-[0.97] relative shrink-0 text-[#010101] text-[18px] tracking-[-0.36px] w-full">
              {testimonial.quote}
            </p>
            <div className="flex flex-col gap-[6px] items-start leading-[normal] not-italic relative shrink-0 text-[14px] w-full">
              <p className="font-['Saans_TRIAL',sans-serif] font-medium relative shrink-0 text-[#010101] tracking-[-0.14px] uppercase w-full">
                {testimonial.role}
              </p>
              <p className="font-['Saans_TRIAL',sans-serif] relative shrink-0 text-[#6e6e6e] tracking-[-0.28px] w-full">
                {testimonial.org}
              </p>
            </div>
          </div>
        ))}
        
        {/* Central Graphic - Mobile */}
        <div className="flex items-center justify-center w-full my-6 relative">
          <div className="relative w-full max-w-[100%] h-auto flex items-center justify-center">
            <Image
              alt=""
              className="block max-w-none w-full h-auto object-contain"
              height={323}
              src="/reviews-vector-1.svg"
              width={509.046}
            />
          </div>
        </div>
        
        {/* Mobile Stats */}
        <div className="flex flex-col gap-8 items-center justify-center w-full mt-4">
          <div className="flex flex-col gap-[4px] items-center justify-center">
            <p 
              className="font-['Saans_TRIAL',sans-serif] font-medium leading-[normal] relative shrink-0 text-[48px] tracking-[-0.96px]"
              style={{ 
                background: 'linear-gradient(180deg, #DAA03F 0%, #994F0C 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              50+
            </p>
            <p className="font-['Saans_TRIAL',sans-serif] leading-[1.4] opacity-40 relative shrink-0 text-[#010101] text-[12px] tracking-[-0.12px] uppercase">
              Healthcare Facilities
            </p>
          </div>
          <div className="flex flex-col gap-[4px] items-center justify-center">
            <p 
              className="font-['Saans_TRIAL',sans-serif] font-medium leading-[normal] relative shrink-0 text-[48px] tracking-[-0.96px]"
              style={{ 
                background: 'linear-gradient(180deg, #DAA03F 0%, #994F0C 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              10,000+
            </p>
            <p className="font-['Saans_TRIAL',sans-serif] leading-[1.4] opacity-40 relative shrink-0 text-[#010101] text-[12px] tracking-[-0.12px] uppercase">
              Codes Explained Daily
            </p>
          </div>
          <div className="flex flex-col gap-[4px] items-center justify-center">
            <p 
              className="font-['Saans_TRIAL',sans-serif] font-medium leading-[normal] relative shrink-0 text-[48px] tracking-[-0.96px]"
              style={{ 
                background: 'linear-gradient(180deg, #DAA03F 0%, #994F0C 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              4.9/5
            </p>
            <p className="font-['Saans_TRIAL',sans-serif] leading-[1.4] opacity-40 relative shrink-0 text-[#010101] text-[12px] tracking-[-0.12px] uppercase">
              Average Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
