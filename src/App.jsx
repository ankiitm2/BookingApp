import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Layout from "./pages/layout/Layout"
import Indexpage from './pages/indexpage/Indexpage'
import axios from 'axios'
import { UserContextProvider } from "./UserContext"
import ProfilePage from "./pages/ProfilePage";
import PlacesPage from "./pages/placespage/PlacesPage"
import PlaceFormPage from "./pages/PlaceFormPage"

axios.defaults.baseURL = 'http://127.0.0.1:4000';
axios.defaults.withCredentials = true;


function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path='/BookingApp' element={<Layout />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Indexpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlaceFormPage />} />
          <Route path="/account/places/:id" element={<PlaceFormPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
