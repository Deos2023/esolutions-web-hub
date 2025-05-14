
import React from 'react';
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import CollaborationsSection from "@/components/about/CollaborationsSection";
import AwardsSection from "@/components/about/AwardsSection";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import OfficeInformation from "@/components/about/OfficeInformation";

const About = () => {
  return (
    <main>
      <AboutHero />
      <section className="container mx-auto px-4 py-16">
        <OurStory />
        <CollaborationsSection />
        <AwardsSection />
        <LeadershipTeam />
        <OfficeInformation />
      </section>
    </main>
  );
};

export default About;
