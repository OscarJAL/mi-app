import React from "react";
import IndustryHero from "../../industry-hero";
import IndustryCard from "../../industry-card";
import { IndustriesContent } from "../industriescontent";
import { kitchenData } from "../../data/kitchenData";

export const KitchenComponent = () => {
  return (
    <div>
      <IndustryHero
        title="Kitchen Partition Walls
Display Made Simple"
        background=""
        ctaLabel="Instant Estimate"
        ctaHref="/"
      />

      <IndustriesContent data={kitchenData}/>
      <IndustryCard
      title="hola"
      image="https://tudelu.com/hubfs/Videos/fromkitchenett-compress.mp4"
      href="/"/>
    </div>
  );
};

