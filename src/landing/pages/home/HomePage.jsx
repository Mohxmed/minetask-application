import HeroSection from "./HeroSection";
import Features from "./Features";
import StartNow from "./StartNow";
import { useAuthContext } from "@/features/auth/context/AuthProvider";

function HomePage() {
  const { user } = useAuthContext();
  return (
    <>
      <HeroSection />
      <Features />
      {!user && <StartNow />}
    </>
  );
}

export default HomePage;
