import Hero from "../Components/Hero";
import About from "../Components/About";
import Work from "../Components/Work";
// import Testimonial from "./Components/Testimonial";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Work />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;