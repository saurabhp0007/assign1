import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
            return 'Email Address is required';
        } else if (!emailRegex.test(value)) {
            return 'Invalid Email Address';
        }
        return '';
    };

    const validatePassword = (value) => {
        if (!value) {
            return 'Password is required';
        } else if (value.length < 8) {
            return 'Password must be at least 8 characters';
        }
        return '';
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(validateEmail(value));
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(validatePassword(value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate email and password before submitting
        const emailValidationResult = validateEmail(email);
        const passwordValidationResult = validatePassword(password);

        setEmailError(emailValidationResult);
        setPasswordError(passwordValidationResult);

        // If both fields are valid, proceed with form submission
        if (!emailValidationResult && !passwordValidationResult) {
            navigate('/profile');
            console.log('Form submitted with:', { email, password });
            // Add further logic here (e.g., API call for authentication)
        }
        
    };

    return (
        <div className='flex justify-center items-center'>
            <div className='border border-gray-200 max-w-auto m-2 p-4 bg-[#F7F8F9]'>
                <div className='pb-72 md:pb-72 lg:pb-80 xl:pb-96 mb-11 mt-4  text-start flex flex-col items-start justify-start'>
                    <span className='font-bold text-2xl'>
                        Sign in to your <br /> POP-X Account
                    </span>
                    
                    <span className='text-base text-gray-500'>
                        Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.
                    </span>

                    <form onSubmit={handleSubmit} className='mt-8 w-80'>
                        <div className="bg-[#F7F8F9] rounded-lg mb-4">
                            <label className="block text-sm text-[#6C25FF] bg-[#F7F8F9] px-2 pt-1 pointer-events-none">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                className="bg-transparent h-10 w-full rounded-lg text-[#919191] ring-2 ring-[#CBCBCB] px-2"
                                placeholder="Enter Email Address"
                            />
                            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                        </div>

                        <div className="bg-[#F7F8F9] rounded-lg mb-4">
                            <label className="block text-sm text-[#6C25FF] bg-[#F7F8F9] px-2 pt-1 pointer-events-none">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="bg-transparent h-10 w-full rounded-lg text-[#919191] ring-2 ring-[#CBCBCB] px-2"
                                placeholder="Enter Password"
                            />
                            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                        </div>

                        <button type="submit" className='bg-[#6C25FF] hover:bg-[#919191] text-white py-2 rounded-md w-full'>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;