import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Explainer } from "@/components/sections/Explainer";
import { Challenges } from "@/components/sections/Challenges";
import { Roles, ServiceModels } from "@/components/sections/Services";
import { TechStackGrid } from "@/components/sections/TechStackGrid";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Benefits } from "@/components/sections/Benefits";
import { About } from "@/components/sections/About";
import { CtaBand } from "@/components/sections/CtaBand";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata = pageMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <div id="home">
        <Hero />
        <TrustBar />
        <Explainer />
        <Challenges />
      </div>

      <div id="services">
        <ServiceModels />
        <Roles />
        <TechStackGrid />
        <EngagementModels />
      </div>

      <div id="how-it-works">
        <ProcessSteps />
        <Benefits />
      </div>

      <div id="about">
        <About />
        <CtaBand />
      </div>

      <ContactSection id="contact" />
    </>
  );
}
