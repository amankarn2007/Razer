"use client"
import { useState } from "react"

interface NewsItem {
    imageSource: string,
    imageLabel: string,
    title: string
}

const allNews: NewsItem[] = [
    {
        imageSource: "./community/IMG-4.jpg",
        imageLabel: "Community",
        title: "The Silence is Lying to You: Why the Razer BlackShark V3 Pro is the Ultimate Horror Companion"
    },
    {
        imageSource: "./community/img-2.jpg",
        imageLabel: "Technology",
        title: "When Games Feel More Alive: Adaptive Immersive Experience at GDC 2026"
    },
    {
        imageSource: "./community/IMG-6.jpg",
        imageLabel: "Community",
        title: "AI That Plays to Test: Razer QA Companion-AI at GDC 2026"
    },
    {
        imageSource: "./community/img-1.jpg",
        imageLabel: "Community",
        title: "AI That Plays to Test: Razer QA Companion-AI at GDC 2026"
    },
    {
        imageSource: "./community/img-222.jpg",
        imageLabel: "Technology",
        title: "Experience Dynamic Haptics Today"
    },
    {
        imageSource: "./community/IMG-3.jpg",
        imageLabel: "Community",
        title: "Razer AVA Goes Agentic: A New Chapter at GDC 2026 "
    }
]

export default function NewsFeedSec() {
    const itemsPerSlide = 3;
    const [idx, setIdx] = useState(0);
    const slides = [];

    for(let i = 0; i < allNews.length; i += itemsPerSlide){
        slides.push(allNews.slice(i, i + itemsPerSlide))
    }

    const totalSlides = slides.length;

    function handlePrev() {
        setIdx((prev) => (prev - 1 + totalSlides) % totalSlides);
    }

    function handleNext() {
        setIdx((prev) => (prev + 1) % totalSlides);
    }

    return (
        <div className="bg-black w-full pb-10 flex flex-col items-center justify-center gap-y-10">
            <h1 className="text-5xl text-white font-semibold">COMMUNITY NEWSFEED</h1>

            <div className="w-full h-110 max-w-365 flex items-center px-13 py-5 group">
                <span className="material-symbols-outlined text-green-500 text-7xl! font-light! cursor-pointer opacity-0 group-hover:opacity-100" onClick={handlePrev}>arrow_back_ios</span>

                <div className="overflow-x-auto flex-1">
                    <div className="flex flex-nowrap items-center justify-evenly pb-4">
                        <NewsFeedSlide newsItems={slides[idx]} />
                    </div>
                </div>

                <span className="material-symbols-outlined text-green-500 text-7xl! font-light! cursor-pointer opacity-0 group-hover:opacity-100" onClick={handleNext}>
                    arrow_forward_ios
                </span>
            </div>
        </div>
    )
}

//slides ke har news ko map karo
function NewsFeedSlide({ newsItems }: { newsItems: NewsItem[]}) {
    return (
        <>
            {
                newsItems.map((news, i) => (
                    <NewsFeedStruct 
                        key={i}
                        imageSource={news.imageSource}
                        title={news.title}
                        imageLabel={news.imageLabel}
                    />
                ))
            }
        </>
    )
}

//frontent structure of News
interface NewsItem {
    imageSource: string, 
    title: string, 
    imageLabel: string
}

function NewsFeedStruct({imageSource, title, imageLabel}: NewsItem) {
    return (
        <div className="shrink-0 w-[calc(33.333%-8px) flex flex-col items-center justify-center w-100 border-2 px-5 cursor-pointer">

            <div className=" bg-yellow-200 relative overflow-hidden">
                <img
                    src={imageSource}
                    className="h-50.5 w-85 hover:scale-105 object-cover transition-transform"
                    alt=""
                />
                <p className="text-black bg-green-400 px-2 font-bold absolute bottom-0 left-0 z-2 uppercase">
                    {imageLabel}
                </p>
            </div>

            <div className="text-white text-center font-semibold text-base/8 text-[1.75rem] py-2">
                <p>{title}</p>
            </div>
        </div>
    )
}