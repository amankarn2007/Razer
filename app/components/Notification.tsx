import "../globals.css"

export default function Notification() {
    return (
        <div className="h-10 bg-gray-600 flex justify-center items-center mt-16">
            <p className="text-sm tracking-wide text-gray-100">
                Razer Members Week: Redeem Razer.com codes at 30% off now and save them for the big drop coming soon. 
                <span className="px-2 hover:underline cursor-pointer">Redeem Codes {'>'}</span>
            </p>
        </div>
    )
}