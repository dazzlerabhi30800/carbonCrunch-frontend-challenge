import "./App.css";
import FeatureSection from "./components/FeatureSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Hug from "./components/Hug";
import ServiceSection from "./components/ServiceSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Hug />
        <FeatureSection />
        <ServiceSection />
      </main>
    </>
  );
}

export default App;
