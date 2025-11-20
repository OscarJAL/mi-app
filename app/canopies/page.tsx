// app/canopies/page.tsx

import { CanopiesInUseSection } from "@/src/components/industries partner/component/canopies-components/CanopiesInUseSection";
import { HeroCanopies } from "@/src/components/industries partner/component/canopies-components/HeroCanopie";
import { InstantEstimateCTA } from "@/src/components/industries partner/component/canopies-components/InstantEstimateCTA";
import { ProductsSection } from "@/src/components/industries partner/component/canopies-components/productSection";
//import { TudeluFooter } from "@/src/components/industries partner/component/canopies-components/TudeluFooter";

export default function CanopiesPage() {
  return (
    <main className="min-h-screen bg-[#fff8f3] text-neutral-900">
      <HeroCanopies />
      <ProductsSection />
      <CanopiesInUseSection />
      <InstantEstimateCTA />
      
    </main>
  );
}
