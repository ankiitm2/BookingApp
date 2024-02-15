import "./style.css";
import { IoWifi } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { PiDogFill } from "react-icons/pi";
import { BsFillShieldLockFill } from "react-icons/bs";
import { IoMdRadio } from "react-icons/io";


const Perks = ({ selected, onChange }) => {
    return (
        <>
            <label className="border rounded-2xl flex gap-2 p-4 items-center cursor-pointer">
                <input type="checkbox" />
                <IoWifi />
                <span>Wifi</span>
            </label>
            <label className="border rounded-2xl flex gap-2 p-4 items-center cursor-pointer">
                <input type="checkbox" />
                <FaCar />
                <span>Free Parking</span>
            </label>
            <label className="border rounded-2xl flex gap-2 p-4 items-center cursor-pointer">
                <input type="checkbox" />
                <PiTelevisionSimpleBold />
                <span>TV</span>
            </label>
            <label className="border rounded-2xl flex gap-2 p-4 items-center cursor-pointer">
                <input type="checkbox" />
                <IoMdRadio />
                <span>Radio</span>
            </label>
            <label className="border rounded-2xl flex gap-2 p-4 items-center cursor-pointer">
                <input type="checkbox" />
                <PiDogFill />
                <span>Pets</span>
            </label>
            <label className="border rounded-2xl flex gap-2 p-4 items-center cursor-pointer">
                <input type="checkbox" />
                <BsFillShieldLockFill />
                <span>Private entrance</span>
            </label>
        </>
    )
}

export default Perks