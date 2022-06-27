import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUser } from "../context/AuthContext.tsx";
import { Auth } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";
import { useRouter } from "next/router";

interface IFormInput {
    username: string;
    password: string;
}

export default function Login() {
    const router = useRouter();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async(data) => {
        try {
            await Auth.signIn(data.username, data.password);
            router.push('/');
        } catch (err) {
            console.error("error is: ", err);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
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
                <input 
                    type="submit"
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                />
            </form>
        </div>
    );
}
