import "./globals.css"
import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";

export default function Home() {
  return (
    <div className="w-full h-screen bg-white font-razer">
      <header>
        <Navbar />
        <Notification />
      </header>

      <main>
        <Hero1 />
        <Hero2 />
        <Hero3 />
      </main>

    </div>
  );
}
