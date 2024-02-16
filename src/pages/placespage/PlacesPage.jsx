import { Link, useParams } from "react-router-dom";
import "./style.css";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import Perks from "../perks/Perks";
import PhotosUploader from "../../PhotosUploader";

const PlacesPage = () => {
    const { action } = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);


    function inputHeader(text) {
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
        )
    }
    function inputDescription(text) {
        return (
            <p className="text-sm text-gray-500">{text}</p>
        )
    }
    function preInput(header, description) {
        return (
            <div>
                {inputHeader(header)}
                {inputDescription(description)}
            </div>
        )
    }

    return (
        <div>
            {action !== 'new' && (
                <Link className="PlacesPage text-center flex justify-center mt-8" to={'/account/places/new'}>
                    <button className="bg-primary text-white font-medium px-6 py-2 rounded-full inline-flex items-center gap-2"><FaPlus /> Add new place</button>
                </Link>
            )}
            {action === 'new' && (
                <div>
                    <form>
                        {preInput('Title', 'Title for your place. Should be short ans catchy as in advertisement.')}
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="title: for example my fav place" />
                        {preInput('Address', 'Address to this place')}
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="address" />
                        {preInput('Photos', 'more = better')}
                        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
                        {preInput('Description', 'description of the place')}
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                        {preInput('Perks', 'select all perks of your place')}
                        <div className="mt-2 gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                            <Perks selected={perks} onChange={setPerks} />
                        </div>
                        {preInput('Extra Info', 'house rules, etc')}
                        <textarea value={extraInfo} onChange={(e) => setExtraInfo(e.target.value)} />
                        {preInput('Check in & out times', 'add check in and out times, remember to have some time window for cleaning the room between guests.')}
                        <div className="grid gap-2 sm:grid-cols-3">
                            <div>
                                <h3 className="mt-2 -mb-1">Check in time</h3>
                                <input type="text" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} placeholder="14" />
                            </div>
                            <div>
                                <h3 className="mt-2 -mb-1">Check out time</h3>
                                <input type="text" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} placeholder="11" />
                            </div>
                            <div>
                                <h3 className="mt-2 -mb-1">Max guests</h3>
                                <input type="number" value={maxGuests} onChange={(e) => setMaxGuests(e.target.value)} />
                            </div>
                        </div>
                        <button className="primary my-4">Save</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default PlacesPage