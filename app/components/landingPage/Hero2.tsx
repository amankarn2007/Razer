

export default function Hero2() {
    return (
        <div className="w-full h-screen relative overflow-hidden text-white">
            <img src="https://assets2.razerzone.com/images/pnx.assets/9e2eff819a57e93c0961c8376b68e2f7/razer-kiyo-v2-homepage-desktop2x.webp" className="w-full h-full object-cover object-center" alt="Hero3" />

            <div className="absolute top-12 left-140 flex flex-col items-center">
                <h1 className="text-6xl font-extrabold">RAZER KIYO V2</h1>
                <h2 className="py-3 text-3xl">4K. NOW WITH AI.</h2>

                <div className="flex gap-2">
                    <div className="flex items-center gap-2">
                        <h3 className="text-xl hover:underline">Learn More</h3>
                        <span className="text-green-500 text-2xl no-underline">{'>'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <h3 className="text-xl hover:underline">Buy</h3>
                        <span className="text-green-500 text-2xl no-underline">{'>'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}