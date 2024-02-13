import { Link } from "react-router-dom";
import "./style.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(<FaEyeSlash className="w-7 h-6" />);
    const [errorMessage, setErrorMessage] = useState("");

    const handleToggle = () => {
        setType(type === 'password' ? 'text' : 'password');
        setIcon(type === 'password' ? <FaEye className="w-7 h-6" /> : <FaEyeSlash className="w-7 h-6" />);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/register', {
                name,
                email,
                password,
            });

            if (!email || !password || password.length < 8) {
                setErrorMessage("Please enter a valid email and a password with at least 8 characters.");
                return;
            }
            if (password !== confirmPassword) {
                setErrorMessage("Password do not match!!!")
                setTimeout(() => (
                    setErrorMessage("")
                ), 1500)
            }
            alert("Registration successful. Now you can login")
        } catch {
            alert("Registration failed. Please try again later")
        }
    };

    return (
        <div className='Login grow flex items-center justify-around'>
            <div className="min-w-96">
                <h1 className='text-3xl text-center font-medium'>Register</h1>
                <form className='max-w-md mx-auto' onSubmit={handleRegister}>
                    <input
                        type="text"
                        value={name}
                        placeholder='your name'
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    <input type="text" placeholder="confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                    <button className='primary mt-1' type="submit">Register</button>
                    <div className="register text-center py-2 text-gray-500">Already have an account? <Link className="text-black underline" to="/login">Login</Link></div>
                </form>
            </div>
        </div>
    );
};

export default Register;
