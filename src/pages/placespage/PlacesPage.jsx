import { Link, useParams } from "react-router-dom";
import "./style.css";
import { FaPlus } from "react-icons/fa";
import PlaceFormPage from "../PlaceFormPage";
import AccountNav from "../AccountNav";

const PlacesPage = () => {
    function linkClasses(type = null) {
        let classes = 'inline-flex items-center gap-1 py-2 px-6 font-medium rounded-full';
        if (type === false) {
            classes += ' bg-primary text-white '
        } else {
            classes += ' bg-gray-200'
        }
        return classes;
    }

    return (
        <div>
            <AccountNav />
            <Link className="PlacesPage text-center flex justify-center mt-8" to={'/account/places/new'}>
                <button className="bg-primary text-white font-medium px-6 py-2 rounded-full inline-flex items-center gap-2"><FaPlus /> Add new place</button>
            </Link>
        </div>
    )
}

export default PlacesPage