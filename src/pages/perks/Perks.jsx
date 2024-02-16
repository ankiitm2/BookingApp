import "./style.css";
import { IoWifi } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { PiDogFill } from "react-icons/pi";
import { BsFillShieldLockFill } from "react-icons/bs";
import { IoMdRadio } from "react-icons/io";


const Perks = ({ selected, onChange }) => {

    const handleCbClick = (e) => {
        const { checked, name } = e.target;
        if (checked) {
            onChange([...selected, name]);
        } else {
            onChange([...selected.filter(selectedName => selectedName !== name)]);
        }
    }

    return (
        <>
            <label className="border rounded-2xl flex gap-2 p-4 items-center cursor-pointer">
                <input type="checkbox" name="wifi" onChange={handleCbClick} />
                <IoWifi />
                <span>Wifi</span>
            </label>
            <label className="border rounded-2xl flex gap-2 p-4 items-center cursor-pointer">
                <input type="checkbox" name="parking" onChange={handleCbClick} />
                <FaCar />
                <span>Free Parking</span>
            </label>
            <label className="border rounded-2xl flex gap-2 p-4 items-center cursor-pointer">
                <input type="checkbox" name="tv" onChange={handleCbClick} />
                <PiTelevisionSimpleBold />
                <span>TV</span>
            </label>
            <label className="border rounded-2xl flex gap-2 p-4 items-center cursor-pointer">
                <input type="checkbox" name="radio" onChange={handleCbClick} />
                <IoMdRadio />
                <span>Radio</span>
            </label>
            <label className="border rounded-2xl flex gap-2 p-4 items-center cursor-pointer">
                <input type="checkbox" name="pets" onChange={handleCbClick} />
                <PiDogFill />
                <span>Pets</span>
            </label>
            <label className="border rounded-2xl flex gap-2 p-4 items-center cursor-pointer">
                <input type="checkbox" name="entrance" onChange={handleCbClick} />
                <BsFillShieldLockFill />
                <span>Private entrance</span>
            </label>
        </>
    )
}

export default Perks