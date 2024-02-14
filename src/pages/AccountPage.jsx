import { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import { Link, useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import PlacesPage from './placespage/PlacesPage';

const AccountPage = () => {
    const [redirect, setRedirect] = useState(null);
    const { ready, user, setUser } = useContext(UserContext)
    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }

    async function logout() {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }

    if (!ready) {
        return "Loading..."
    }

    if (ready && !user && !redirect) {
        return <Navigate to={"/login"} />
    }


    function linkClasses(type = null) {
        let classes = 'py-2 px-6 font-medium';
        if (type === subpage) {
            classes += ' bg-primary text-white rounded-full'
        }
        return classes;
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <div className='account mt-4'>
            <nav className='flex justify-center gap-2'>
                <Link className={linkClasses('profile')} to={"/account"}>My Profile</Link>
                <Link className={linkClasses('bookings')} to={"/account/bookings"}>My Bookings</Link>
                <Link className={linkClasses('places')} to={"/account/places"}>My Accommodation</Link>
            </nav>
            {subpage === 'profile' && (
                <div className="flex flex-col mx-auto max-w-lg mt-3">
                    <div className="text text-center font-medium">Logged in as <span className='capitalize'>{user.name}</span> ({user.email})</div>
                    <button onClick={logout} className='bg-primary text-white rounded-full py-2 mt-2'>Log out</button>
                </div>
            )}
            {subpage === 'places' && (
                <PlacesPage />
            )}
        </div>
    )
}

export default AccountPage