import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUser } from "../context/AuthContext.tsx";
import { Auth } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";
import { useRouter } from "next/router";

import { XIcon } from "@heroicons/react/solid";

interface IFormInput {
    username: string;
    password: string;
}

export default function Login() {
    const router = useRouter();
    const [signInError, setSignInError] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormInput>();

    useEffect(() => {
        if (open) {
            setTimeout(() => {setOpen(false)}, 20000)
        } 
    }, [open, signInError])

    const onSubmit: SubmitHandler<IFormInput> = async(data) => {
        try {
            await Auth.signIn(data.username, data.password);
            router.push('/');
        } catch (err) {
            console.error("error is: ", err);
            setSignInError(err.message);
            setOpen(true);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <button onClick={() => {setOpen(true); setSignInError("THERES AN ERROR")}}>Open</button>
            <form className="flex flex-col items-center px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full mb-4">
                    <div >
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                            Username
                        </label>
                    </div>
                    <input 
                        id="username" 
                        label="username" 
                        placeholder="i.e. johndoe305"
                        className="w-full px-3 py-2 mb-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        {...register("username", {required: {value: true, message: "Please enter a username"}})}
                    />
                    <div >
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                            Password
                        </label>
                    </div>
                    <input 
                        id="password" 
                        label="password" 
                        type="password"
                        placeholder="password"
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        {...register("password", {required: {value: true, message: "Please enter a password"}})}
                    />
                </div>
                <div>
                    <input 
                        type="submit"
                        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    />
                    <button 
                        onClick={() => {router.push('/forgot')}}
                        className="p-2 m-1 text-sm rounded text-blue focus:shadow-outline"
                    >
                        Forgot password?
                    </button>
                </div>
            </form>
            {open && (
                <div className="px-4 py-3 text-red-900 bg-red-100 border-t-4 border-red-500 rounded-b shadow-md" role="alert">
                    <div className="flex items-center justify-content space-x-10">
                        <div>
                            <p className="font-bold">Error</p>
                            <p className="text-sm">{signInError}</p>
                        </div>
                        <div className="cursor-pointer" onClick={() => {setOpen(false)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
