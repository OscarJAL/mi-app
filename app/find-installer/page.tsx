import Header from "@/src/components/find-installer/header";
import Hero from "@/src/components/find-installer/hero";
import WhyUseInstaller from "@/src/components/find-installer/whyUseInstaller";
import ZipSearch from "@/src/components/find-installer/zipsearch";
import CTASection from "@/src/components/find-installer/CTASection";
import Footer from "@/src/components/find-installer/footer";


export default function FindInstallerPage() {
  return (
    <main className="bg-[#fbf7f2] text-[#1c1a17]">
      <Header />
      <Hero />
      <ZipSearch />
      <WhyUseInstaller />
      <CTASection />
      <Footer />
    </main>
  );
}