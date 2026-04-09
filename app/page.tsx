import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HealthPassCard from "../components/HealthPassCard";
import SubscriptionSection from "../components/SubscriptionSection"; // ✅ THIS LINE
import Agents from "../components/Agents";
import Architecture from "../components/Architecture";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HealthPassCard />
      <SubscriptionSection />
      <Agents />
      <Architecture />
    </main>
  );
}