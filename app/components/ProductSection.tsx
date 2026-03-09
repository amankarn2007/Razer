

export default function () {
    return (
        <div className="flex flex-col gap-3 bg-zinc-900">
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    )
}

function Section1() {
    return (
        <div className="flex gap-2.5 h-145 text-white">
            <Structure 
                img="https://assets2.razerzone.com/images/pnx.assets/78469fb028824550e6c2dde590034f8b/razer-laptop-sleeve-16-b-950x580.webp"
                heading1={` RAZER LAPTOP SLEEVE 16 ${'"'} `}
                heading3="WITH WIRELESS CHARGING FOR DEVICES"
                link1="Learn More"
                link2="Buy"        
            />
    
            <Structure 
                img="https://assets2.razerzone.com/images/pnx.assets/78469fb028824550e6c2dde590034f8b/niko-collection-b-950x580-desktop.webp" 
                heading1="RAZER NIKO COLLECTION"
                heading3="FEEL THE FIRE"
                link1="Learn More"
                link2="Buy"
            />
        </div>
    )
}

function Section2() {
    return (
        <div className="flex gap-2.5 h-145 text-white">
            <Structure 
                img="https://assets2.razerzone.com/images/pnx.assets/ddbf9528b0efb962584ff34313d4b7d4/nvidia-resident-evil-requiem-950x580.webp"
                heading1="SCORE RESIDENT EVIL REQUIEM"
                heading3="WORTH $69.99 WITH SELECTED RAZER LAPTOPS"
                link1="Learn More"
            />
    
            <Structure 
                img="https://assets2.razerzone.com/images/pnx.assets/ddbf9528b0efb962584ff34313d4b7d4/amd-game-bundle-crimson-desert-b-950x580-desktop.webp" 
                heading1="UNLOCK CRIMSON DESERT"
                heading3="WORTH $69.99 WITH SELECTED RAZER LAPTOPS"
                link1="Learn More"
            />
        </div>
    )
}

function Section3() {
    return (
        <div className="flex gap-2.5 h-145 text-white">
            <Structure 
                img="https://assets2.razerzone.com/images/pnx.assets/78469fb028824550e6c2dde590034f8b/razer-blackshark-v3-x-hyperspeed-950x580-desktop.webp"
                heading1="RASER BLACKSHARK V3"
                heading2="X HYPERSPEED"
                heading3="FOR THE PRO"
                link1="Learn More"
                link2="Buy"        
            />
    
            <Structure 
                img="https://assets2.razerzone.com/images/pnx.assets/78469fb028824550e6c2dde590034f8b/razer-huntsman-signature-edition-950x580-desktop.webp" 
                heading1="RAZER HUNTSMAN"
                heading2="SIGNATURE EDITION"
                heading3="PRECISION-ENGINEERED. MASTER-CRAFTED."
                link1="Learn More"
                link2="Notify Me"
                isExclusive={true}
            />
        </div>
    )
}


interface Struct {
    img: string,
    heading1: string,
    heading2?: string,
    heading3: string,
    link1: string,
    link2?: string
    isExclusive?: boolean
}

function Structure(props: Struct) {
    return (
        <div className="overflow-hidden relative">
            <img src={props.img} className="h-full object-cover object-center" alt="img" />

            { props.isExclusive && 
                <div className="absolute top-5 left-70 font-bold text-sm px-3 py-0.5 text-black bg-orange-500">
                    ONLY AT RAZER
                </div>
            }

            <div className="absolute top-13 left-37 text-white flex flex-col items-center">
                <h1 className="text-4xl font-bold tracking-wider">{props.heading1}</h1>
                { props.heading2 && 
                    <h1 className="text-4xl font-bold tracking-wider">{props.heading2}</h1>
                }
                <h2 className="text-xl pt-2">{props.heading3}</h2>

                <div className="flex gap-10 pt-2">
                    <div className="flex items-center gap-2">
                        <h3 className=" hover:underline">{props.link1}</h3>
                        <span className="text-green-500 text-2xl no-underline">{'>'}</span>
                    </div>

                    { props.link2 && 
                        <div className="flex items-center gap-2">
                            <h3 className=" hover:underline">{props.link2}</h3>
                            <span className="text-green-500 text-2xl no-underline">{'>'}</span>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}