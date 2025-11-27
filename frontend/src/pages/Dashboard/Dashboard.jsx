import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Header from '../../components/Layout/Header';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
                <div className="bg-white p-6 rounded shadow">
                    <h2 className="text-xl font-semibold mb-4">Welcome, {user?.username}!</h2>
                    <p className="mb-4">Role: <span className="font-mono bg-gray-200 px-2 py-1 rounded">{user?.role}</span></p>

                    {user?.role === 'customer' && (
                        <div className="bg-blue-50 p-4 rounded border border-blue-200">
                            <h3 className="text-lg font-bold text-blue-800">Customer Panel</h3>
                            <p>View your orders, profile, and more here.</p>
                        </div>
                    )}

                    {(user?.role === 'admin' || user?.role === 'staff') && (
                        <div className="bg-purple-50 p-4 rounded border border-purple-200">
                            <h3 className="text-lg font-bold text-purple-800">Admin/Staff Panel</h3>
                            <p>Manage users, products, and system settings.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
