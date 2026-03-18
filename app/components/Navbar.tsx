"use client"
import { useRouter } from "next/navigation"
import "../globals.css"
import { useState } from "react";
import ShopingModal from "./modals/shoppingModal";

interface Nav {
    position?: string
}

export default function Navbar(props: Nav) {
    const router = useRouter();
    const [shoppingModal, setShoppingModal] = useState(false);

    function handleModal() {
        if(shoppingModal) setShoppingModal(false);
        else setShoppingModal(true);
    }

    return (
        <div className="bg-black h-12 w-full flex items-center justify-center gap-15 py-7 border-b-2 border-green-500" >
           
            <img src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg" className="bg-black h-8 cursor-pointer" alt="logo" onClick={() => router.push("/")} />

            <ul className="flex text-white gap-13 cursor-pointer">
                <IconElem label={"Store"} />
                <IconElem label={"PC"} />
                <IconElem label={"Console"} />
                <IconElem label={"Mobile"} />
                <IconElem label={"Furniture & Lifestyle"} />
                <IconElem label={"Gold & Silver"} />
                <IconElem label={"Community"} onClick={() => router.push("/community")} />
                <IconElem label={"Razer.AI"} />
                <IconElem label={"Support"} onClick={() => router.push("/support")}/>
            </ul>

            <div className="flex items-center gap-10 text-white">
                <div className="opacity-70 hover:opacity-100 cursor-pointer">
                    <span className="material-symbols-outlined">search</span>
                </div>
                <div className="opacity-70 hover:opacity-100 cursor-pointer" onClick={handleModal} >
                    <span className="material-symbols-outlined">shopping_cart</span>
                </div>
            </div>

            { shoppingModal && 
                <ShopingModal />
            }
        </div>
    )
}

interface Icon {
    label: string,
    onClick?: () => void
}

function IconElem({label, onClick}: Icon) {
    return (
        <div className="opacity-70 hover:opacity-100" onClick={onClick}>
            <h4>{label}</h4>
        </div>
    )
}

function NavModal() {
    return (
        <div>
            
        </div>
    )
}