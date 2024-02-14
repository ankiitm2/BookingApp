import "./style.css";
import { FaPlus } from "react-icons/fa";

const PlacesPage = () => {
    return (
        <div className="PlacesPage text-center mt-8">
            <button className="bg-primary text-white font-medium px-6 py-2 rounded-full inline-flex items-center gap-2"><FaPlus /> Add new place</button>
        </div>
    )
}

export default PlacesPage