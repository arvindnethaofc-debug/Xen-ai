import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Agents from "../components/Agents";
import Architecture from "../components/Architecture";
import HealthPassCard from "../components/HealthPassCard";
export default function Home() {
  return (
    <main>
    <Navbar />
<Hero />
<HealthPassCard /> 
<SubscriptionSection />   {/* 👈 MOVE HERE */}
<Agents />
<Architecture />
    </main>
  );
}