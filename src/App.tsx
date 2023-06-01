import About from "./components/About";
import Community from "./components/Community";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Pricing from "./components/Pricing";
import Programs from "./components/Programs";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Programs />
      <Pricing />
      <Community />
    </div>
  );
}

export default App;
