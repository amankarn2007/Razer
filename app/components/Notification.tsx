import "../globals.css"

export default function NotificationStruct({msg}: {msg: string}) {
    return (
        <div className="h-10 bg-zinc-800 flex justify-center items-center">
            <p className="text-sm tracking-wide text-gray-100">
                { msg }
                <span className="px-2 hover:underline cursor-pointer">Redeem Codes {'>'}</span>
            </p>
        </div>
    )
}