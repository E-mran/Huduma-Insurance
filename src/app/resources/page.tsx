import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Tips from "./sec1";
import FAQ from "./sec2";
import PageTitle from "@/components/pagetitle";

export default function Home() {
  return (
    <div>
      <Navbar transparent={true} />
      <PageTitle title="resources" />
      <Tips />
      <FAQ />
      <Footer />
    </div>
  );
}
