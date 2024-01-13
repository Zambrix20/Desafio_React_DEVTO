import AsideLeft_DetailPost from "../components/DetailPost/AsideLeft_DetailPost";
import Main_DetailPost from "../components/DetailPost/Main_DetailPost";
import AsideRight_DetailPost from "../components/DetailPost/AsideRight_DetailPost";

export default function DetailPost({ task }) {
    return (
        <div className="grid grid-cols-[20%_52%_24%] max-w-screen-xl mx-auto gap-4 text-black ">
            {/* Aside 1 */}
            <AsideLeft_DetailPost />
            {/* Main */}
            <Main_DetailPost />
            {/* Aside 2 */}
            <AsideRight_DetailPost />
        </div>
    )
}
