import { Link, Navigate } from "react-router-dom";
import "./style.css"
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(<FaEyeSlash className="w-7 h-6" />);
    const [errorMessage, setErrorMessage] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleToggle = () => {
        setType(type === 'password' ? 'text' : 'password');
        setIcon(type === 'password' ? <FaEye className="w-7 h-6" /> : <FaEyeSlash className="w-7 h-6" />);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if (!email || !password || password.length < 8) {
                setErrorMessage("Please enter a valid email and a password with at least 8 characters.");
                return;
            }
            await axios.post('/login', { email, password }, { withCredentials: true });
            alert('Login successful');
            setRedirect(true);
        } catch (e) {
            alert('Login failed');
        }
    };

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div className='Login grow flex items-center justify-around'>
            <div className="min-w-96">
                <h1 className='text-3xl text-center font-medium'>Login</h1>
                <form className='max-w-md mx-auto' onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder='your@email.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="password flex items-center relative">
                        <input
                            type={type}
                            minLength={8}
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                            required
                        />
                        <span className="absolute right-2" onClick={handleToggle}>{icon}</span>
                    </div>
                    {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                    <button className='primary mt-1' type="submit">Login</button>
                    <div className="register text-center py-2 text-gray-500">Don't have an account? <Link className="text-black underline" to="/register">Register Now</Link></div>
                </form>
            </div>
        </div>
    );
};

export default Login;
