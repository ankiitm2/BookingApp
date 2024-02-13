import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import "./style.css"

const Layout = () => {
    return (
        <div className="Layout m-4 flex flex-col min-h-screen">
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout