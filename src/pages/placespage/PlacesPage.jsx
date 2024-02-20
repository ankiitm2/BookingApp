import { Link } from "react-router-dom";
import "./style.css";
import { FaPlus } from "react-icons/fa";
import AccountNav from "../AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";

const PlacesPage = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios.get('/places').then(({ data }) => {
            setPlaces(data);
        })
    }, [])

    return (
        <div>
            <AccountNav />
            <div className="titleTop text-center mt-8">
                <p>List of all the List</p>
            </div>
            <Link className="PlacesPage text-center flex justify-center " to={'/account/places/new'}>
                <button className="bg-primary text-white font-medium px-6 py-2 rounded-full inline-flex items-center gap-2"><FaPlus /> Add new place</button>
            </Link>

            <div className="list mt-4">
                {places.length > 0 && places.map((place, index) => (
                    <Link to={'/account/places/' + place._id} key={index} className="flex gap-4 bg-gray-100 p-4 rounded-2xl">
                        <div className="w-32 h-32 bg-gray-300 grow shrink-0">
                            {place.photos.length > 0 && (
                                <img src={place.photos[0]} />
                            )}
                        </div>
                        <div className="grow-0 shrink">
                            <h2 className="text-xl">{place.title}</h2>
                            <p className="text-sm mt-2">{place.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default PlacesPage