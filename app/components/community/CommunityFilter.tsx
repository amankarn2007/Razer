


export default function Filter() {
    return (
        <div className="w-full h-25 bg-zinc-900 flex items-center justify-center gap-8 border-b border-green-500 pt-2">
            <FilterStruct
                url="https://assets2.razerzone.com/images/main-menu/icons/icon-blog.svg"
                label="Blog"
            />
            <FilterStruct
                url="https://assets2.razerzone.com/images/main-menu/icons/icon-razerstreamer.svg"
                label="#RazerCreator"
            />
            <FilterStruct
                url="https://assets2.razerzone.com/images/main-menu/icons/icon-esports.svg"
                label="Team Razer"
            />

            <FilterStruct
                url="https://assets2.razerzone.com/images/main-menu/icons/icon-events.svg"
                label="Events"
            />
            <FilterStruct
                url="https://assets2.razerzone.com/images/main-menu/icons/icon-sustainability.svg"
                label="Sustainability"
            />
            <FilterStruct
                url="https://assets2.razerzone.com/images/main-menu/icons/icon-wallpapers.svg"
                label="Wallpapers"
            />
            <FilterStruct
                url="https://assets2.razerzone.com/images/main-menu/icons/icon-stickers.svg"
                label="Stickers"
            />

            <FilterStruct
                url="https://assets2.razerzone.com/images/main-menu/icons/icon-developers.svg"
                label="Developers"
            />

        </div>
    )
}

function FilterStruct({url, label}: {url: string, label: string}) {
    return (
        <div className="text-white flex flex-col justify-center items-center text-2xl cursor-pointer hover:scale-105 transition-transform group">
            <img src={url} width={35} alt=""/>
            <p className="text-sm pt-1 group-hover:text-green-400">{label}</p>
        </div>
    )
}