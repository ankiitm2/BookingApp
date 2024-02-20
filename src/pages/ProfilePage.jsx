import { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import { useLocation, useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import PlacesPage from './placespage/PlacesPage';
import AccountNav from './AccountNav';


const AccountPage = () => {
    const [redirect, setRedirect] = useState(null);
    const { ready, user, setUser } = useContext(UserContext)
    // let { subpage } = useParams();

    const { pathName } = useLocation();
    console.log('pathName', pathName);
    let subpage = pathName?.split('/')?.[2];
    console.log({ subpage })

    async function logout() {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }

    if (subpage === undefined) {
        subpage = 'profile';
    }

    if (!ready) {
        return "Loading..."
    }

    if (ready && !user && !redirect) {
        return <Navigate to={"/login"} />
    }


    if (redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <div className='account mt-4'>
            <AccountNav subpage={subpage} />
            {subpage === 'profile' && (
                <div className="flex flex-col mx-auto max-w-lg mt-8">
                    <div className="text text-center font-medium">Logged in as <span className='capitalize'>{user.name}</span> ({user.email})</div>
                    <button onClick={logout} className='bg-primary text-white rounded-full py-2 px-6 m-auto mt-2 w-fit '>Log out</button>
                </div>
            )}
            {subpage === 'places' && (
                <PlacesPage />
            )}
        </div>
    )
}

export default AccountPage