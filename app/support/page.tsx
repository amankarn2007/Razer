import { ReactNode } from "react";
import Hero1 from "../components/landingPage/Hero1";
import Hero2 from "../components/landingPage/Hero2";
import Hero3 from "../components/landingPage/Hero3";
import Navbar from "../components/Navbar";
import Hero from "../components/support/Hero";
import Icon from "../components/support/Icon";
import PopularCardStruct from "../components/support/Card";
import { Services } from "../components/support/Services";
import SupportBox from "../components/support/SupportBox";
import Footer from "../components/Footer";
import Review from "../components/support/Review";

export default function Support() {
    return (
        <div className="w-full">
            <header className="fixed w-full z-5">
                <Navbar />
            </header>

            <div className="pt-14">
                <Hero />
                <MenuIcons />
                <PopularCard />
                <Services />
                <SupportBox />
                <Review />
                <Footer />
            </div>
        </div>
    )
}

function MenuIcons() {
    return (
        <div className="bg-black flex items-center gap-15 justify-center">
            <Icon googleIcon="package_2" label="Razer.com Orders" />
            <Icon googleIcon="laptop_mac" label="PC" />
            <Icon googleIcon="stadia_controller" label="Console" />
            <Icon googleIcon="mobile_2" label="Mobile" />
            <Icon image={'../../chairs.svg'} label="Lifestyle" />
            <Icon image={'../../logo.svg'} label="Software & Services" />
            <Icon image={'../../giftcard.svg'} label="Razer Gift Card" />
            <Icon image={'../../gold-silver.png'} label="Razer Gold & Silver" />
            <Icon googleIcon="manufacturing" label="Replacement Parts" />
        </div>
    )
}

function PopularCard() {
    return (
        <div className="flex bg-zinc-900 justify-center py-12 gap-6">
            <PopularCardStruct 
                heading="Popular Support Videos"
                label1="View the latest support videos"
                label2="How to install or upgrade Razer Synapse"
                label3="How to migrate profiles from Razer Synapse 3 to Synapse 4"
                label4="How to assign macros in Razer Synapse 4"
                label5="How to troubleshoot and resolve headset microphone issues"
            />
            <PopularCardStruct 
                heading="Popular Support Topics"
                label1="Update your Software and Firmware for Razer Peripherals"
                label2="Razer BlackWidow Chroma V2 Support & FAQs"
                label3="Razer Headset Pairing Utility"
                label4="Remove and reattach ear cushions"
                label5="Update your Software and Firmware for Razer Systems"
            />
        </div>
    )
}