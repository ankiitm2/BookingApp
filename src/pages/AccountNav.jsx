import { FaUserLarge } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const AccountNav = ({ subpage }) => {
    const { pathName } = useLocation();
    console.log('pathName', pathName);
    // let subpage = pathName?.split('/')?.[2];
    console.log({ subpage })

    function linkClasses(type = null) {
        let classes = 'inline-flex items-center gap-1 py-2 px-6 font-medium rounded-full';
        if (type === subpage) {
            classes += ' bg-primary text-white '
        } else {
            classes += ' bg-gray-200'
        }
        return classes;
    }
    return (
        <nav className='flex justify-center gap-2'>
            <Link className={linkClasses('profile')} to={"/account"}><FaUserLarge />My Profile</Link>
            <Link className={linkClasses('bookings')} to={"/account/bookings"}><FaCalendarCheck />My Bookings</Link>
            <Link className={linkClasses('places')} to={"/account/places"}><FaBuilding />My Accommodation</Link>
        </nav>
    )
}

export default AccountNav