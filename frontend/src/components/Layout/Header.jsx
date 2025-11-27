import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">SYP App</Link>
                <nav>
                    <ul className="flex space-x-4">
                        {user ? (
                            <>
                                <li><span className="font-semibold">Welcome, {user.role}</span></li>
                                <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
                                <li><button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">Logout</button></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/login" className="hover:underline">Login</Link></li>
                                <li><Link to="/register" className="hover:underline">Register</Link></li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
