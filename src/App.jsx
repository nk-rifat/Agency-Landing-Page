import "./App.css";
import Brands from "./Components/Brands/Brands";
import Faq from "./Components/FAQ/Faq";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import PricingPlans from "./Components/PricingPlans/PricingPlans";
import Service from "./Components/Service/Service";
import Stats from "./Components/Stats/Stats";
import Testimonial from "./Components/Testimonial/Testimonial";
import Trial from "./Components/Trial/Trial";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Service />
      <Stats />
      <Testimonial />
      <PricingPlans />
      <Faq />
      <Trial />
      <Footer />
    </>
  );
}

export default App;
