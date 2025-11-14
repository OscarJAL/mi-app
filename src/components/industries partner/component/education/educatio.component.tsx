import React from "react";
import IndustryHero from "../../industry-hero";
import IndustryCard from "../../industry-card";
import { IndustriesContent } from "../industriescontent";
import { educationData } from "../../data/educationData";


export const EducationComponent = () => {
  return (
    <div>
      <IndustryHero
        title="Educatin Partition Walls
Made Simple"
        background=""
        ctaLabel="Instant Estimate"
        ctaHref="/"
      />
      <IndustriesContent data={educationData}/>
      <IndustryCard
      title="hola"
      image=""
      href="/"/>
    </div>
  );
};
