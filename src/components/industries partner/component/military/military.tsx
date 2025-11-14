import React from "react";
import IndustryHero from "../../industry-hero";
import IndustryCard from "../../industry-card";
import { IndustriesContent } from "../industriescontent";
import { militaryData } from "../../data/militaryData";

export const MilitaryComponent = () => {
  return (
    <div>
      <IndustryHero
        title="Military Partition Walls
Space Made Simple"
        background=""
        ctaLabel="Instant Estimate"
        ctaHref="/"
      />
      <IndustriesContent data={militaryData}/>
      <IndustryCard
      title="hola"
      image=""
      href="/"/>
    </div>
  );
};
