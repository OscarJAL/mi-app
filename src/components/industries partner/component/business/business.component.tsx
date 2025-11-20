import React from "react";
import IndustryHero from "../../industry-hero";
import IndustryCard from "../../industry-card";
import { IndustriesContent } from "../industriescontent";
import { businessData } from "../../data/businessData";


export const BusinessComponent = () => {
  return (
    <div>
      <IndustryHero
        title="Business Partition Walls
Made Simple"
        background="https://tudelu.com/hubfs/clothing_store_r1.mp4"
        ctaLabel="Instant Estimate"
        ctaHref="/"
      />

      <IndustriesContent data={businessData}/>
      <IndustryCard
      title="hola"
      image=""
      href="/"/>
    </div>
  );
};

//https://tudelu.com/hubfs/clothing_store_r1.mp4