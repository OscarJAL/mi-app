import React from "react";
import IndustryHero from "../../industry-hero";
import IndustryCard from "../../industry-card";
import { IndustriesContent } from "../industriescontent";
import { hospitalityData } from "../../data/hospitalityData";

export const HospitalityComponent = () => {
  return (
    <div>
      <IndustryHero
        title="Hospitality Partition Walls
Service Made Simple"
        background=""
        ctaLabel="Instant Estimate"
        ctaHref="/"
      />
      <IndustriesContent data={hospitalityData}/>
      <IndustryCard
      title="hola"
      image=""
      href="/"/>
    </div>
  );
};
