import Logo from "../../assets/hotel-logo.png"
import "./style.css";
import { IoSearch } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../UserContext"

const Header = () => {
    const { user } = useContext(UserContext);
    return (
        <header className="Header flex justify-between">
            <Link to={"/"} className='logo flex items-center gap-2 font-semibold text-3xl'><img src={Logo} alt="" className='w-14' />STAY</Link>
            <div className="content h-fit items-center flex rounded-full gap-2 border border-gray-300 px-4 py-2 shadow-md shadow-gray-300">
                <div >Anywhere</div>
                <div className='border-l border-gray-300 pl-2'>Any week</div>
                <div className='border-l border-gray-300 pl-2'>Add guests</div>
                <div className='bg-orange-600 p-1 rounded-full text-white'><IoSearch /></div>
            </div>
            <Link to={user ? "/account" : "/login"} className="user w-fit h-fit flex gap-2 border border-gray-300 rounded-full items-center py-2 px-4">
                <AiOutlineMenu /> <span className='bg-gray-500 text-white p-1 rounded-full'><FaUserAlt /></span>
                {!!user && (
                    <div>
                        {user.name}
                    </div>
                )}
            </Link>
        </header>
    )
}

export default Header