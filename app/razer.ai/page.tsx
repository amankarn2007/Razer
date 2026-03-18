import Footer from "../components/Footer";
import AICards from "../components/razerAi/AICards";
import Hero from "../components/razerAi/Hero";
import AINav from "../components/razerAi/navbar";
import NewSec from "../components/razerAi/NewsSection";


export default function RazerAi() {
    return (
        <div className="w-full bg-black">
            <header className="fixed w-full">
                <AINav />
            </header>

            <main className="pt-17">
                <Hero />
                <AICards />
                <NewSec />
            </main>

            <footer>
                <Footer />
            </footer>

            <LeftFixedDiv />
        </div>
    )
}

function LeftFixedDiv() {
    return (
        <div className="fixed flex flex-col gap-3 px-2 py-5 rounded-r-2xl bg-green-400 top-[40%] left-0">
            <div className=" py-2 px-2.5 rounded-4xl border-2"><i className="fa-brands fa-linkedin-in"></i></div>
            <div className=" py-2 px-2.5 rounded-4xl border-2"><i className="fa-brands fa-x-twitter"></i></div>
        </div>
    )
}