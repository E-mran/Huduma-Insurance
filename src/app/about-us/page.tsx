import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import WhoWeAre from "./sec1";
import Vision from "./sec2";
import Careers from "./sec3";
import PageTitle from "@/components/pagetitle";

export default function Home() {
  return (
    <div>
      <Navbar transparent={true} />
      <PageTitle title="About Us" />
      <WhoWeAre />
      <Vision />
      <Careers />
      <Footer />
    </div>
  );
}
