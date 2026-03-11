"use client"

import { RefObject, useEffect, useRef, useState } from "react";

export default function Review() {
    const slideNo = useRef<number>(1);

    const reviews = [
        { 
            review: "Amazing customer support, this is why i bought my Razer! Customer for life because of Kyarrah",
            author: "Matt D.",
        },
        {
            review: "Dave, the agent was very nice and professional. This was my first Razer product ever and contact with the support. If this is how things go at Razer support then you are one of the best so far. Everything went smoothly and professionally. I work in IT as well and this kind of support is rare. Keep up the good work!",
            author: "Sandor S."
        },
        {
            review: "You were truly one of the best support agents I’ve ever interacted with. Your patience, clear explanations, and willingness to go the extra mile made this experience exceptionally positive. Honestly, you felt like the best support advisor I’ve had in my life. Razer has once again proven why it is one of the best gaming companies in the industry. Not only the product quality, but also the customer support and flexibility in handling issues really stand out. This experience has strengthened my trust in Razer as a premium gaming brand. Thank you again for your outstanding support.",
            author: "Christopher D."
        },
        {
            review: "Kenneth G. understand how important resolving this issue was for me and he did just that. Some of the best customer service I have had. I hope to run into Kenneth again whenever I need further assistance.",
            author: "Matt D."
        },
        {
            review: "Beverly was incredibly helpful during my check-in process, great in assisting me to obtain my order information and my requests. Her patience and attentiveness were truly commendable, making her an exceptional agent.",
            author: "Jacoboy M."
        },
        {
            review: "I've loved Razer since I started gaming, and only you know how you can improve because you get better and better every year! Thank you, Razer, for existing!",
            author: "Matt D."
        },
        {
            review: "Razer will forever have me as a customer. This experience went completely different compared to what I thought it would be. I thought I would have to go buy a brand new mouse and was pretty upset but the Razer support team helped me get a replacement and walked me through the whole thing and this experience made my day! Thank you Razer and the support people that helped!",
            author: "Abdul A."
        },
        {
            review: "The support agent(s) were perfect. Vince especailly helped my in a very polite and effective manner. It is customer service that keeps bringing me back to Razer. My recent purchase of the BlackShark v3 Pros was heavily influenced by the support I have recieved in the past. It looks like a company that cares to invest in their customers to ensure future business. I look forward to the resolution - but regardless of the outcome I would like to say thank you to Vince for his help today.",
            author: "Joshep B."
        },
        {
            review: "I had an excellent experience with Razer Support. The representative was extremely friendly, professional, and patient throughout the entire process. Everything was explained clearly, and my issue was handled quickly and efficiently. I truly appreciate how smooth and stress-free the whole experience was. This is exactly the level of support you hope for when purchasing a premium product. Thank you for taking care of your customers!",
            author: "Maria A."
        },
        {
            review: "Honestly, I usually hate support chats. But this was an amazing experience – very fast, very helpful, straight to the point, and stress-free; everything was handled calmly and patiently. I couldn't have asked for anything better! Thank you!",
            author: "Annonymous"
        }
    ]

    const [currentIdx, setCurrentIdx] = useState(1);

    function prevCumment() {
        setCurrentIdx((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    }

    function nextCummment() {
        setCurrentIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }

    return (
        <div className="bg-zinc-900 w-full flex justify-center">
            <ReviewStruct data={reviews[currentIdx]} onPrev={prevCumment} onNext={nextCummment}/>
        </div>
    )
}


function ReviewStruct({data, onPrev, onNext}: any) {

    return (
        <div className="w-2/3 h-110 flex flex-col px-20 py-10 items-center relative">
            <h1 className="text-white text-3xl">What Our Customers Are Saying</h1>

            <div className="flex text-4xl text-green-500 pt-20 pb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            <p className="text-white text-wrap"> {data.review} </p>

            <h3 className="text-lg font-semibold text-white pt-5"> {data.author} </h3>

            <div className=" text-white cursor-pointer hover:text-green-500 absolute top-60 left-8 hover:border-2 hover:border-green-400 active:bg-green-700 text-xl py-1.5 px-1.5" onClick={onPrev}>
                <i className="fa-solid fa-angle-left" ></i>
            </div>

            <div className=" text-white cursor-pointer hover:text-green-500 absolute top-60 right-10 hover:border-2 hover:border-green-400 active:bg-green-700 text-xl py-1.5 px-1.5" onClick={onNext}>
                <i className="fa-solid fa-angle-right"></i>
            </div>
        </div>
    )
}