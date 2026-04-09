import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HealthPassCard from "../components/HealthPassCard";
import SubscriptionSection from "../components/SubscriptionSection";
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