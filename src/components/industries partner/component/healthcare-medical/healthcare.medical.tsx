import React from "react";
import IndustryHero from "../../industry-hero";
import IndustryCard from "../../industry-card";
import { IndustriesContent } from "../industriescontent";
import { healthcareData } from "../../data/healthcareData";

export const MedicalComponent = () => {
  return (
    <div>
      <IndustryHero
        title="Healthcare Partition Walls
Care Made Simple"
        background=""
        ctaLabel="Instant Estimate"
        ctaHref="/"
      />
      <IndustriesContent data={healthcareData}/>
      <IndustryCard
      title="hola"
      image=""
      href="/"/>
    </div>
  );
};