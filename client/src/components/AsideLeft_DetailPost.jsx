

export default function AsideLeft_DetailPost() {
    return (
        <aside>
            <div
                className="flex flex-col items-center gap-8 mt-20"
            >
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <img src="https://img.icons8.com/glyph-neue/64/1A1A1A/hearts.png" className="w-7 h-7 hover:rounded-full hover:bg-red-500/80" />
                    <span>305</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <img src="https://img.icons8.com/sf-regular/48/1A1A1A/messaging-.png" className="w-7 h-7 hover:rounded-full hover:bg-orange-500/80" />
                    <span>95</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <img src="https://img.icons8.com/sf-regular/48/1A1A1A/bookmark-ribbon.png" className="w-8 h-7 hover:rounded-full hover:bg-blue-500/80" />
                    <span>651</span>
                </div>
                <div className=" flex items-center cursor-pointer hover:rounded-full hover:bg-gray-200/50 p-2">
                    <img src="https://img.icons8.com/ios-filled/50/1A1A1A/ellipsis.png" className="w-7 h-7" />
                </div>
            </div>
        </aside >
    )
}
