import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Hero from "./sec1";
import Services from "./sec2";
import WhyChooseUs from "./sec3";
import ContactUs from "../components/contactus";

export default function Home() {
  return (
    <div>
      <Navbar transparent={true} />
      <Hero />
      <Services />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </div>
  );
}
