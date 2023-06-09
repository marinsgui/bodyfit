import About from "./components/About";
import Community from "./components/Community";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Pricing from "./components/Pricing";
import Programs from "./components/Programs";
import Faq from "./components/Faq";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Programs />
      <Pricing />
      <Community />
      <Faq />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
