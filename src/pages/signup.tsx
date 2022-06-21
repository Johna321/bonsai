import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUser } from '../context/AuthContext.tsx';
import { Auth } from "aws-amplify";

interface IFormInput {
    username: string;
    email: string;
    password: string;
}

export default function Signup() {
    const { user, setUser } = useUser();
    const [showCode, setShowCode] = useState<boolean>(false);

    const { register, errors, handleSubmit } = useForm<IFormInput>();
    
    const onSubmit: SubmitHandler<IFormInput> = async(data) => {
        try {
            if (showCode){
                confirmSignUp(data);
            } else {
                await signUpWithEmailAndPassword(data);
                setShowCode(true);
            }
        } catch (err) {
            console.log(err);
        }
    };

    async function signUpWithEmailAndPassword(data: IFormInput){
        const { username, password, email } = data;
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                },
            });
            console.log("Signed up a user", user);
        } catch (error) {
            console.log("error signing up: ", error);
        }
    }

    async function confirmSignUp(data: IFormInput) {
        const { username, password, email, code } = data;
        try {
            await Auth.confirmSignUp(username, code);
            const amplifyUser = await Auth.signIn(username, password);
            console.log("successfully signed in a user");
        } catch (err) {
            console.log("error confirming sign up", err);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                id="username" 
                label="username" 
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
            <input 
                id="email" 
                label="email" 
                {...register("email", {
                    required: {value: true, message: "Please enter an e-mail"},
                })}
            />
            <input 
                id="password" 
                label="password" 
                {...register("password", {
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
            {showCode && (
                <input 
                    id="verification" 
                    label="verification" 
                    {...register("password", {
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
            )}
            <input type="submit" />
        </form>
    );
}
