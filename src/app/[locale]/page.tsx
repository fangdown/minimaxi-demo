import { HeroCarousel } from "@/components/home/HeroCarousel";
import { ModelMatrix } from "@/components/home/ModelMatrix";
import { ProductMatrix } from "@/components/home/ProductMatrix";
import { CompanyIntro } from "@/components/home/CompanyIntro";

export default async function HomePage() {
  return (
    <div>
      <HeroCarousel />
      <ModelMatrix />
      <ProductMatrix />
      <CompanyIntro />
    </div>
  );
}
