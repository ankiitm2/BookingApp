import { Link, useParams } from "react-router-dom";
import "./style.css";
import { FaPlus } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";
import { useState } from "react";
import Perks from "../perks/Perks";
import axios from "axios";

const PlacesPage = () => {
    const { action } = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [photoLink, setPhotoLink] = useState('');
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

    async function addPhotoLink(e) {
        e.preventDefault();
        const { data: filename } = await axios.post('/upload-by-link', { link: photoLink });
        setAddedPhotos(prev => {
            return [...prev, filename];
        })
        setPhotoLink("");
    }

    function uploadPhoto(e) {
        const files = e.target.files;
        console.log({ files });
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
                        <div className="flex gap-2">
                            <input type="text" value={photoLink} onChange={(e) => setPhotoLink(e.target.value)} placeholder={'Add using a link ....jpg'} />
                            <button onClick={addPhotoLink} className="bg-gray-200 px-4 rounded-2xl">Add&nbsp;photo</button>
                        </div>
                        <div className="mt-2 grid gap-2 grid-cols-3 md:gridcols-4 lg:grid-cols-6">
                            {addedPhotos.length > 0 && addedPhotos.map((link, index) => (
                                <div key={index}>
                                    <img className="rounded-2xl" src={'http://localhost:4000/uploads/' + link} alt="" />
                                </div>
                            ))}
                            <label className="cursor-pointer border bg-transparent rounded-2xl p-8 text-gray-500 text-2xl items-center flex gap-2 justify-center">
                                <input type="file" className="hidden" onChange={uploadPhoto} /> <MdCloudUpload className="w-8 h-8" />Upload</label>
                        </div>
                        {preInput('Description', 'description of the place')}
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                        {preInput('Perks', 'select all perks of your place')}
                        <div className="mt-2 gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                            <Perks selected={perks} onChange={setPerks} />
                        </div>
                        {preInput('Extra Info', 'house rules, etc')}
                        <textarea />
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