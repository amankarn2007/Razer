

export default function ShopingModal() {
    return (
        <div className="h-70 w-70 bg-zinc-900 absolute top-15 right-40 rounded-b-xl rounded-l-xl border-2 border-gray-700 flex flex-col px-5 py-5 font-sans">
            <p className="text-gray-400">Your cart is empty</p>
            <div className="flex flex-col text-white py-5">
                <a href="" className="py-2 border-t border-gray-600 flex items-center gap-4">
                    <span className="material-symbols-outlined">shopping_cart</span>
                    Cart
                </a>

                <a href="" className="py-2 border-t border-gray-600 flex items-center gap-4">
                    <span className="material-symbols-outlined">orders</span>
                    Orders
                </a>
                <a href="" className="py-2 border-t border-gray-600 flex items-center gap-4">
                    <span className="material-symbols-outlined">person</span>
                    Account
                </a>
                <a href="" className="py-2 border-t border-gray-600 flex items-center gap-4">
                    <span className="material-symbols-outlined">diamond</span>
                    Razer Silver Rewards
                </a>
                <a href="" className="py-2 border-t border-gray-600 flex items-center gap-4">
                    <span className="material-symbols-outlined">login</span>
                    Login
                </a>
            </div>
        </div>
    )
}