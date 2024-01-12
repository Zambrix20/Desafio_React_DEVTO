import { Link } from "react-router-dom";

export default function AsideRight() {
    return (
        <aside className="flex flex-col gap-2">
            <section className="bg-white text-black rounded-md border-solid border border-gray-200 h-[fit-content]">
                <header className="p-4 rounded-md">
                    <h3 className="text-xl font-bold hover:text-blue-700 cursor-pointer ">#discuss</h3>
                    <div className="text-gray-500 text-xs">Discussion threads targeting the whole community</div>
                </header>
                <div>
                    <div className="cursor-pointer p-4">
                        <div className="hover:text-blue-700">Which Skills Are Essential for Junior Full Stack Developers? ✅👨‍💻</div>
                        <p className="text-gray-500 text-sm">7 comments</p>
                    </div>
                    <div className="cursor-pointer p-4">
                        <div className="hover:text-blue-700">What is your challenge of this month?</div>
                        <p className="text-gray-500 text-sm">22 comments</p>
                    </div>
                    <div className="cursor-pointer p-4">
                        <div className="hover:text-blue-700">Sorting Algorithm Theory VS Implement 🧐?</div>
                        <p className="text-gray-500 text-sm">2 comments</p>
                    </div>
                    <div className="cursor-pointer p-4">
                        <div className="hover:text-blue-700">What is your challenge of this month?</div>
                        <p className="text-gray-500 text-sm">20 comments</p>
                    </div>
                </div>
            </section>
            <section className="bg-white text-black rounded-md border-solid border border-gray-200">
                <header className="p-4 rounded-md">
                    <h3 className="text-xl font-bold hover:text-blue-700 cursor-pointer ">#watercooler</h3>
                    <div className="text-gray-500 text-xs">Light, and off-topic conversation</div>
                </header>
                <div>
                    <div className="cursor-pointer p-4">
                        <div className="hover:text-blue-700">Where is Meme Monday in 2024?</div>
                        <p className="text-gray-500 text-sm">2 comments</p>
                    </div>
                    <div className="cursor-pointer p-4">
                        <div className="hover:text-blue-700">Who is coming to FOSDEM 2024??</div>
                        <p className="text-gray-500 text-sm">2 comments</p>
                    </div>
                    <div className="cursor-pointer p-4">
                        <div className="hover:text-blue-700">Coming Out as an Eldritch God</div>
                        <div
                            className="bg-yellow-400 text-black rounded-md w-11 text-center "
                        >New</div>
                    </div>
                </div>
            </section>
        </aside>
    )
}
