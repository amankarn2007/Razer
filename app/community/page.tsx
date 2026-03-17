import Filter from "../components/community/CommunityFilter"
import NewsFeedSec from "../components/community/NewsFeedSection"
import WelcomeSection from "../components/community/WelcomeSection"
import Navbar from "../components/Navbar"
import NotificationStruct from "../components/Notification"

export default function Community() {
    return (
        <div className="bg-black w-full h-screen">
            <header className="fixed w-full z-5">
                <Navbar position="fixed" />
            </header>
            <main className="pt-15">
                <Filter />
                <Notification />
                <Hero />
                <WelcomeSection />
                <NewsFeedSec />
                
                <CommunityNews/>
            </main>
            
            <footer></footer>
        </div>
    )
}

function Hero() {
    return (
        <div>
            <img src="https://assets2.razerzone.com/images/pnx.assets/8c47b13725a3ac40eaa1a5833bd91114/razer-community-hero.webp" className="w-screen" alt="" />
        </div>
    )
}

function Notification() {
    return (
        <NotificationStruct 
            msg="Razer Members Week: Earn up to US$80 return credit plus 30% off Razer.com codes for maximum savings on gaming gear. " 
        />
    )
}

function CommunityNews() {
    return (
        <div className="w-full bg-black py-5 flex flex-col items-center justify-center">
            <h1 className="text-5xl text-white font-semibold uppercase">What's Happening on our Community</h1>

            <div className="flex py-10 overflow-x-auto scrollbar-hide">
                <Container 
                    img="./community/razer-1.webp"
                    heading="Advent Calendar 2025"
                    desc="We’re kicking off 12 days of festive fun to celebrate the community that powers us."
                />
                {/*<Container 
                    img="./community/razer-1.webp"
                    heading="Advent Calendar 2025"
                    desc="We’re kicking off 12 days of festive fun to celebrate the community that powers us."
                />
                <Container 
                    img="./community/razer-1.webp"
                    heading="Advent Calendar 2025"
                    desc="We’re kicking off 12 days of festive fun to celebrate the community that powers us."
                />*/}
            </div>
        </div>
    )
}

interface CommNews {
    img: string,
    heading: string,
    desc: string
}

function Container({img, heading, desc}: CommNews) {
    return (
        <div className="">
            <div className="h-110 w-170 object-cover overflow-hidden">
                <img src={img} className="scale-125" alt="" />
            </div>

            <div className="text-white px-5">
                <div className="py-5">
                    <h3 className="text-2xl uppercase font-medium">{heading}</h3>
                    <p className="text-gray-400 text-lg text-wrap">{desc}</p>
                </div>
                <a href="" className="text-green-400 text-lg hover:underline">Learn More {">"}</a>
            </div>
        </div>
    )
}