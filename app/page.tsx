import { Hero } from "@/components/hero";
import { Reviews } from "@/components/reviews";
export default function Home() {
  return (
    <section>
      <div className="mt-[-70px]">
        <Hero />
      </div>

      <div className="mt-[40px]">
        <Reviews />
      </div>
    </section>
  );
}
