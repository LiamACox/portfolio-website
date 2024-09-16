import Background from "@/components/background/background";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return <div>
    <Background/>
    <Navbar/>
    <div id="main-section">SECTION 1</div>
    <div id="about-section">SECTION 2</div>
    <div id="projects-section">SECTION 3</div>
  </div>;
}
