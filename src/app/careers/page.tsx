import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import WhoWeAre from "./sec1";
import Careers from "./sec1";
import Jobs from "./sec2";
import PageTitle from "@/components/pagetitle";

export default function Home() {
  return (
    <div>
      <Navbar transparent={true} />
      <PageTitle title="job openings" />
      <Careers />
      <Jobs />
      <Footer />
    </div>
  );
}
