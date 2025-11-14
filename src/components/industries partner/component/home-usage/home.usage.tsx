import React from "react";
import IndustryHero from "../../industry-hero";
import IndustryCard from "../../industry-card";
import { IndustriesContent } from "../industriescontent";
import { homeusageData } from "../../data/homeusageData";

export const HomeusageComponent = () => {
  return (
    <div>
      <IndustryHero
        title="Home Partitions Walls
Making Space Yours"
        background=""
        ctaLabel="Instant Estimate"
        ctaHref="/"
      />
      <IndustriesContent data={homeusageData}/>
      <IndustryCard
      title="hola"
      image="https://tudelu.com/hubfs/closure_closet%20(1).mp4"
      href="/"/>
    </div>
  );
};