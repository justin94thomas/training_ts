import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { registerUser } from './RegisterSlice';
import '../Login/styles.css';

interface FormData {
    name: string;
    password: string;
    email: string,
    role: string
}

const Register: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        password: '',
        email: '',
        role: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { registered, loading, error } = useSelector((state: RootState) => state.register);

    const roles = [
        { id: 'role-admin', name: 'Admin' },
        { id: 'role-user', name: 'User' },
        { id: 'role-guest', name: 'Guest' },
    ];

    useEffect(() => {
        if (registered) {
            navigate('/');
        }
    }, [registered, navigate]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(registerUser(formData));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="login-box">
                    <h2>Registeration</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Full Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="email"
                                placeholder="Email ID"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select Role</option>
                                {roles.map((role) => (
                                    <option key={role.id} value={role.id}>
                                        {role.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="input-group password-group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button className="submit-button" type="submit" disabled={loading}>
                            {loading ? 'Registering User...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div >
        </div >
    );

};

export default Register;
