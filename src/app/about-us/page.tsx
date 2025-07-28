import GlobalPresenceSection from '@/app/components/about-us/GlobalPresenceSection';
import InnovationSection from '@/app/components/about-us/InnovationSection';
import JourneySection from '@/app/components/about-us/JourneySection';
import PartnershipSection from '@/app/components/about-us/PartnershipSection';
import ValuesSection from '@/app/components/about-us/ValuesSection';
import Navbar from '@/app/components/Navbar';

// src/app/about-us/page.tsx
export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <JourneySection />
      {/* <VisionSection /> */}
      {/* <MissionSection /> */}
      <ValuesSection />
      {/* <StrategySection /> */}
      <PartnershipSection />
      <InnovationSection />
      <GlobalPresenceSection />
    </>
  );
}
