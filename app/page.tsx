import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyClaireMatters from "./components/WhyClaireMatters";
import WhatClaireDoes from "./components/WhatClaireDoes";
import TrainedAcrossSpecialties from "./components/TrainedAcrossSpecialties";
import WhyClaireReasoning from "./components/WhyClaireReasoning";
import HowYourTeamUses from "./components/HowYourTeamUses";
import TrustedByProfessionals from "./components/TrustedByProfessionals";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTAandFooter from "./components/CTAandFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
      <Header />
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <WhyClaireMatters />
        <WhatClaireDoes />
        <TrainedAcrossSpecialties />
        <WhyClaireReasoning />
        <HowYourTeamUses />
        <TrustedByProfessionals />
        <Pricing />
        <FAQ />
        <CTAandFooter />
      </main>
    </div>
  );
}
