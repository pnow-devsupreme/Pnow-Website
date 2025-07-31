import GlobalPresenceSection from '@/app/components/about-us/GlobalPresenceSection';
import InnovationSection from '@/app/components/about-us/InnovationSection';
import JourneySection from '@/app/components/about-us/JourneySection';
import MissionSection from '@/app/components/about-us/MissionSection';
import PartnershipSection from '@/app/components/about-us/PartnershipSection';
import ValuesSection from '@/app/components/about-us/ValuesSection';
import VisionSection from '@/app/components/about-us/VisionSection';
import ContactSection from '@/app/components/contact-us/ContactSection';

export default function AboutUsPage() {
  return (
    <>
      <JourneySection />
      <VisionSection />
      <MissionSection />
      <ValuesSection />
      {/* <StrategySection /> */}
      <PartnershipSection />
      <InnovationSection />
      <GlobalPresenceSection />
      <ContactSection />
    </>
  );
}
