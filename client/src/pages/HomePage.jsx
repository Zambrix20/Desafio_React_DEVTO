import { Link } from "react-router-dom";
import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import MainHome from "../components/MainHome";

export default function HomePage() {
    return (
        <div className="grid grid-cols-[22%_56%_22%] gap-4">
            {/* Aside 1 */}
            <AsideLeft />
            {/* Main */}
            <MainHome />
            {/* Aside 2 */}
            <AsideRight />
        </div>
    );
}
