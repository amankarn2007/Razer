import "../globals.css"

export default function Navbar() {
    return (
        <div className="bg-black h-12 w-full flex items-center justify-center gap-15 py-8 border-b-2 border-green-500 fixed z-5 top-0 left-0">
           
            <img src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg" className="bg-black h-8 cursor-pointer" alt="logo" />

            <ul className="flex text-white gap-13 cursor-pointer">
                <IconElem label={"Store"} />
                <IconElem label={"PC"} />
                <IconElem label={"Console"} />
                <IconElem label={"Mobile"} />
                <IconElem label={"Furniture & Lifestyle"} />
                <IconElem label={"Gold & Silver"} />
                <IconElem label={"Community"} />
                <IconElem label={"Razer.AI"} />
                <IconElem label={"Support"} />
            </ul>

            <div className="flex items-center gap-10 text-white">
                <div className="opacity-70 hover:opacity-100 cursor-pointer">
                    <span className="material-symbols-outlined">search</span>
                </div>
                <div className="opacity-70 hover:opacity-100 cursor-pointer">
                    <span className="material-symbols-outlined">shopping_cart</span>
                </div>
            </div>
        </div>
    )
}

function IconElem({label}: {label: string}) {
    return (
        <div className="opacity-70 hover:opacity-100">
            <h4>{label}</h4>
        </div>
    )
}