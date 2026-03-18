import "./globals.css"
import Navbar from "./components/Navbar";
import NotificationStruct from "./components/Notification";
import Hero1 from "./components/landingPage/Hero1";
import Hero2 from "./components/landingPage/Hero2";
import ProductSection from "./components/landingPage/ProductSection";
import Footer from "./components/Footer";
import Hero3 from "./components/landingPage/Hero3";

export default function Home() {
  return (
    <div className="w-full h-screen font-razer">
      <header className="fixed top-0 left-0 w-full z-50">
        <Navbar position="fixed"/>
        <Notification />
      </header>

      <main className="flex flex-col gap-y-2 bg-zinc-800 mt-24">
        <Hero1 />
        <Hero2 />
        <Hero3 />
        <ProductSection />
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  );
}

function Notification() {
  return(
    <NotificationStruct 
      msg="Razer Members Week: Redeem Razer.com codes at 30% off now and save them for the big drop coming soon." 
    />
  )
}