import AsideLeft_DetailPost from "../components/AsideLeft_DetailPost";
import Main_DetailPost from "../components/Main_DetailPost";
import AsideRight_DetailPost from "../components/AsideRight_DetailPost";
import TaskCard from "../components/TaskCard";

export default function DetailPost() {
    // console.log('TASK345', task);
    return (
        // <div className="grid grid-cols-[8%_64%_28%] max-w-screen-xl mx-auto gap-4 text-black ">
        <div className="grid grid-cols-[4rem_7fr_3fr] max-w-screen-xl mx-auto gap-4 text-black ">
            {/* Aside 1 */}
            <AsideLeft_DetailPost />
            {/* Main */}
            <Main_DetailPost />
            {/* <TaskCard /> */}
            {/* Aside 2 */}
            <AsideRight_DetailPost />
        </div>
    )
}
