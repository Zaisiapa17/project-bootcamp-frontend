"use client";

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { postRegister } from '@/services/api/apiRegister';

const InputRegister = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const isFormValid = email && username && password;

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const body = {
            username: username,
            email: email,
            password: password,
        };

        console.log("Submitting:", body);

        const res = await postRegister(body);

        if (res.status === 200) {
            console.log("BERHASIL", res);
        } else {
            console.log("GAGAL", res);
        }
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <h1 className='text-gray-900 text-left mb-5 text-2xl font-medium'>Register</h1>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col w-full max-w-sm gap-1.5 text-gray-900">
                    <Label htmlFor="username" className="text-left">Username</Label>
                    <Input type="text" id="username" placeholder="input Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="flex flex-col w-full max-w-sm gap-1.5 text-gray-900">
                    <Label htmlFor="email" className="text-left">Email</Label>
                    <Input type="email" id="email" placeholder="input email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex flex-col w-full max-w-sm gap-1.5 text-gray-900">
                    <Label htmlFor="Password" className="text-left">Password</Label>
                    <Input type="password" id="Password" placeholder="input Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="flex items-center space-x-2 w-full">
                    <Button className={`w-full bg-[#708b5b] hover:bg-[#789461] ${isFormValid ? '' : 'disabled:bg-gray-400'}`} type="submit" disabled={!isFormValid}>
                        Register
                    </Button>
                </div>
                {/* {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">Registration successful!</p>} */}
            </div>
        </form>
    );
};

export default InputRegister;
