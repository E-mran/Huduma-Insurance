import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import WhoWeAre from "./sec1";
import PageTitle from "@/components/pagetitle";

export default function Home() {
  return (
    <div>
      <Navbar transparent={true} />
      <PageTitle title="insurance" />
      <WhoWeAre />
      <Footer />
    </div>
  );
}
