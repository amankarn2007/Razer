

export default function Hero1() {
    return (
        <div className="h-screen w-full overflow-hidden relative">
            <img src="https://assets2.razerzone.com/images/pnx.assets/9e9c8899d41fad7df09cb2f646df2691/cinnamoroll-birthday-2026-homepage-desktop2x.webp" className="w-full h-full object-cover object-center" alt="Hero1" />

            <div className="absolute top-12 left-115 flex flex-col items-center">
                <h1 className="text-6xl font-extrabold">RAZER | CINNAMOROLL</h1>
                <h2 className="py-3 text-3xl">CLOUDY DAYS, COZY PLAYS</h2>

                <h3 className="text-xl hover:underline">Learn More {'>'}</h3>
            </div>
        </div>
    )
}