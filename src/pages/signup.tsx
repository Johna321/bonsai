import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUser } from '../context/AuthContext';
import { Auth, API, graphqlOperation } from "aws-amplify";
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/auth';
import { useRouter } from "next/router";
import { 
    createStudent,
    createTeacher,
} from "../graphql/mutations";

interface IFormInput {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    code: string;
}

export default function Signup() {
    const [showCode, setShowCode] = useState<boolean>(false);
    const router = useRouter();

    const { register, errors, handleSubmit } = useForm<IFormInput>();
    
    const createUser = async(data: IFormInput) => {
        const { username, email, firstName, lastName, role } = data;
        const theUser = await Auth.currentAuthenticatedUser();
        const userAttributes = await Auth.userAttributes(theUser);
        console.log(userAttributes[0].Value);
        const id = userAttributes[0].Value;
        const newUser = { id, username, email, firstName, lastName };
        try{
            if (role === "student"){
                const createNewUser = await API.graphql({
                    query: createStudent,
                    variables: { input: newUser },
                    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
                });
                console.log(createNewUser);
            } else {
                const createNewUser = await API.graphql({
                    query: createTeacher,
                    variables: { input: newUser },
                    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
                });
                console.log(createNewUser);
            }
        } catch(err) {
            console.error("Error creating user: ", err);
        }
        router.push('/');
    };
    
    const onSubmit: SubmitHandler<IFormInput> = async(data) => {
        try {
            console.log(data);
            if (showCode){
                await confirmSignUp(data);
                createUser(data);
            } else {
                await signUpWithEmailAndPassword(data);
                setShowCode(true);
            }
        } catch (err) {
            console.error(err);
        }
    };

    async function signUpWithEmailAndPassword(data: IFormInput){
        const { username, password, email, role } = data;
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                    'custom:role': role,
                },
            });
            console.log("Signed up a user", user);
        } catch (error) {
            console.log("error signing up: ", error);
        }
    }

    async function confirmSignUp(data: IFormInput) {
        const { username, password, email, role, code } = data;
        try {
            await Auth.confirmSignUp(username, code);
            const amplifyUser = await Auth.signIn(username, password);
            console.log("successfully signed in a user");
        } catch (err) {
            console.log("error confirming sign up", err);
        }
    }
    

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen align-items">
            <form className="flex flex-col px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md " onSubmit={handleSubmit(onSubmit)}>
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
                <div >
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                        Email
                    </label>
                </div>
                <input 
                    id="email" 
                    label="email" 
                    placeholder="i.e. example@sample.com"
                    className="w-full px-3 py-2 mb-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    {...register("email", {
                        required: {value: true, message: "Please enter an e-mail"},
                    })}
                />
                <div >
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                        Name
                    </label>
                </div>
                <input 
                    id="firstName" 
                    label="firstName" 
                    placeholder="First"
                    className="w-full px-3 py-2 mb-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    {...register("firstName", {
                        required: {value: true, message: "Please enter a first name"},
                    })}
                />
                <input 
                    id="lastName" 
                    label="lastName" 
                    placeholder="Last"
                    className="w-full px-3 py-2 mb-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    {...register("lastName", {
                        required: {value: true, message: "Please enter a last name"},
                    })}
                />
                <div >
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="role">
                        I am a...
                    </label>
                </div>
                <select 
                    id="role" 
                    label="role" 
                    className="w-full px-3 py-2 mb-2 leading-tight text-gray-700 border rounded shadow appearance-none form-select focus:outline-none focus:shadow-outline "
                    {...register("role", {
                        required: {value: true, message: "Please select an option"},
                    })}
                >
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                </select>
                <div >
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                        Password
                    </label>
                </div>
                <input 
                    id="password" 
                    label="password" 
                    type="password"
                    placeholder="Between 3 and 16 characters"
                    className="w-full px-3 py-2 leading-tight bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
                    </>
                )}
                </div>
                <input 
                    type="submit"
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                />
            </form>
        </div>
    );
}
