import { Hero } from "@/components/hero";
import { Reviews } from "@/components/reviews";
import Beans from "@/components/beans";
import Location from "@/components/location";

export default function Home() {
  return (
    <section>
      <div className="mt-[-70px]">
        <Hero />
      </div>

      <div className="mt-[60px]">
        <Reviews />
      </div>

      <div className="mt-[100px]">
        <Beans />
      </div>

      <div>
        <Location />
      </div>
    </section>
  );
}
