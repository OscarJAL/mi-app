import React from "react";
import IndustryHero from "../../industry-hero";
import IndustryCard from "../../industry-card";
import { IndustriesContent } from "../industriescontent";
import { govermmentData } from "../../data/govermmentData";

export const GovermmentComponent = () => {
  return (
    <div>
      <IndustryHero
        title="Government Partition Walls
Privacy Made Simple"
        background=""
        ctaLabel="Instant Estimate"
        ctaHref="/"
      />
      <IndustriesContent data={govermmentData}/>
      <IndustryCard
      title="hola"
      image=""
      href="/"/>
    </div>
  );
};