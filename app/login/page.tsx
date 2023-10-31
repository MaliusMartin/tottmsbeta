'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Appfrom from "../components/Appform";

const Login = () => {
    const [checkNumber, setCheckNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/tottmsapi/auth/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ check_number: checkNumber, password }),
            });

            if (response.status === 200) {
              
              window.location.href = '/trequest';
                // Login successful, redirect or set a session token
            } else {
                // Handle login failure, perhaps by showing an error message
            }
        } catch (error) {
            console.error(error);
            // Handle the error, perhaps by displaying an error message
        }
    };

    return (
        <div className="flex flex-col items-center text-black justify-center h-screen font-mono">
            <div className="flex justify-center font-bold items-center">
                <h1 className="text-4xl mb-10">LOGIN PAGE</h1>
            </div>

            <h3 className="font-bold mb-10">
                TAMISEMI ONLINE TEACHER TRANSFER MANAGEMENT SYSTEM
            </h3>

            <form>
                <div className="flex justify-center font-bold items-center">
                    <input
                        className="input input-bordered input-primary w-full max-w-xs"
                        type="text"
                        placeholder="Check Number"
                        value={checkNumber}
                        onChange={(e) => setCheckNumber(e.target.value)}
                    />
                </div>
                <br />
                <div className="flex justify-center font-bold items-center py-4">
                    <input
                        className="input input-bordered input-primary w-full max-w-xs"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex justify-center font-bold items-center">
                    <button
                        className="btn btn-wide btn-outline"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                </div>
                <div className="p-4">
                    <p>
                        Don&apos;t have an account? Check and register{' '}
                        <Link href="/" className="font-bold text-red-600">
                            here
                        </Link>
                    </p>
                </div>
                <div className="p-4">
                    <p>
                        Forgot password{' '}
                        <Link href="/" className="font-bold text-red-600">
                            recover
                        </Link>
                    </p>
                </div>

                <div className="flex justify-center font-bold items-center py-16">
                    <Appfrom form={{}} />
                </div>
            </form>
        </div>
    );
};

export default Login;




