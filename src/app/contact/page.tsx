import GlobalPresenceSection from '@/app/components/about-us/GlobalPresenceSection';
import InnovationSection from '@/app/components/about-us/InnovationSection';
import JourneySection from '@/app/components/about-us/JourneySection';
import PartnershipSection from '@/app/components/about-us/PartnershipSection';
import ValuesSection from '@/app/components/about-us/ValuesSection';
import Navbar from '@/app/layouts/Navbar';

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <JourneySection />
      {/* <VisionSection /> */}
      {/* <MissionSection /> */}
      <ValuesSection />
      {/* <StrategySection /> */}
      <PartnershipSection />
      <InnovationSection />
      <GlobalPresenceSection />
    </main>
  );
}
