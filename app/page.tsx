import Background from "@/components/background/background";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
  <div className={"relative"}>
    <Background/>
    <Navbar/>
    <main className={"relative z-20 grid-cols-1 justify-between"}>
      <div id="main-section" className={"flex-1 flex items-center justify-center px-5 sm:h-[calc(100vh-68px)] md:h-[calc(100vh-272px)]"}>
        <header>
          <h1 className={"text-9xl"}>Hello! My name is Liam.</h1>
        </header>
      </div>
      <div className={"flex-1 flex-col px-10 py-32 h-screen"}>
        <header>
          <h2 id="about-section" className={"flex-1 text-center text-7xl"}>About</h2>
          <p className={"flex-1"}>Placeholder</p>
        </header>
      </div>
      <div id="projects-section">

      </div>
    </main>
  </div>
  );
}
