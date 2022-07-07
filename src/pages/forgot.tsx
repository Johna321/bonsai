import React, { useState } from 'react';
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
    username: string;
}

export default function Forgot() {
    const [showCode, setShowCode] = useState<boolean>(false);
    const { register, errors, handleSubmit } = useForm<IFormInput>();

    const router = useRouter();


    const onSubmit: SubmitHandler<IFormInput> = async(data) => {
        try {
            if (showCode){
                const { username, code, new_password } = data;
                await Auth.forgotPasswordSubmit(username, code, new_password);
                router.push("/login");
            } else {
                const { username }  = data;
                await Auth.forgotPassword(username);
                setShowCode(true);
            }
        } catch (err) {
            console.log("error confirming: ", err);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <form className="flex flex-col px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md " onSubmit={handleSubmit(onSubmit)}>
                <div >
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                        Username
                    </label>
                </div>
                <input
                    id="username"
                    label="username"
                    placeholder="Enter username"
                    className="w-full px-3 py-2 mb-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    {...register("username", {
                        required: {value: true, message: "Please enter a username"},
                        minLength: {
                            value: 3,
                            message: "Enter a username between 3 and 16 characters"
                        },
                        maxLength: {
                            value: 16,
                            message: "Enter a username between 3 and 16 characters"
                        }
                    })}
                />
                {showCode && (
                    <>
                        <div >
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="code">
                                Verification Code
                            </label>
                        </div>
                        <input 
                            id="code" 
                            label="code" 
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            {...register("code", {
                                required: {value: true, message: "Please enter a valid code"},
                                minLength: {
                                    value: 6,
                                    message: "Verification code should be 6 characters long"
                                },
                                maxLength: {
                                    value: 6,
                                    message: "Verification code should be 6 characters long"
                                }
                            })}
                        />
                        <div>
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                New Password
                            </label>
                        </div>
                        <input 
                            id="password" 
                            label="password" 
                            type="password"
                            placeholder="Between 3 and 16 characters"
                            className="w-full px-3 py-2 leading-tight bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            {...register("new_password", {
                                required: {value: true, message: "Please enter a password"},
                                minLength: {
                                    value: 3,
                                    message: "Enter a password between 3 and 16 characters"
                                },
                                maxLength: {
                                    value: 16,
                                    message: "Enter a password between 3 and 16 characters"
                                }
                            })}
                        />
                    </>
                )}
                <input
                    type="submit"
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                />
            </form>
        </div>
    );
}
