import { useEffect, useState } from "react";
import Head from 'next/head'
import { useUser } from "../context/AuthContext";
import { Auth, API } from "aws-amplify";
import { useRouter } from "next/router";
import { getClass, getStudentClasses, listClasses, listStudentClasses, getStudent } from "../graphql/queries";
import { createClass, createStudentClasses } from "../graphql/mutations";
import { Class, ListClassesQuery } from "../API";
import BForm from '../components/BForm';
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/auth";


export default function Home() {
    const { user } = useUser();
    const router = useRouter();
    const [classes, setClasses] = useState<Class[]>([]);
    const [showCreate, setShowCreate] = useState<boolean>(false);
    const [showJoin, setShowJoin] = useState<boolean>(false);

    console.log(user);
    console.log(classes);
    
    useEffect(() => {
        const fetchClassesFromAPI = async() => {
            /*const allClasses = (await API.graphql({ 
                query: listClasses,
                authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
             })) as {
                data: ListClassesQuery;
                errors: any[];
            };
            if (allClasses.data){
                setClasses(allClasses.data.listClasses.items as Class[]);
                return allClasses.data.listClasses.items as Class[];
            } else {
                throw new Error("Could not get classes");
            }*/
            let classesQuery = {};
            if(user){
                if (user.attributes['custom:role'] === "teacher"){
                    classesQuery = await API.graphql({
                        query: listClasses,
                        variables: { filter: {teacherClassesId: {eq: user.attributes.sub}} },
                        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
                    });
                    if (classesQuery.data){
                        setClasses(classesQuery.data.listClasses.items as Class[]);
                        return classesQuery.data.listClasses.items as Class[];
                    } else {
                        throw new Error("Could not get classes");
                    }
                } else {
                    classesQuery = await API.graphql({
                        query: listStudentClasses,
                        variables: {filter: {studentID: {eq: user.attributes.sub}}},
                        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
                    });
                    if (classesQuery.data){
                        setClasses(classesQuery.data.listStudentClasses.items.map((obj) => obj.class));
                        return classesQuery.data.listStudentClasses.items.map((obj) => obj.class);
                    } else {
                        throw new Error("Could not get classes");
                    }
                }
            }
            // } else {
            //     const classesQuery = await API.graphql({
            //         query: listClasses,
            //         authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
            //     });
            //     setClasses(classesQuery.data.listClasses.items as Class[]);
            //     return classesQuery.data.listClasses.items as Class[];
            // }
        };
        fetchClassesFromAPI();
    }, [user]);

    const renderClasses = () => {
        return classes.map((room) => {
            return (
                <div className="border-black-500 border-2 m-2">
                    <h1>{room.name} ({room.code})</h1>
                    <h3>{room.owner}</h3>
                </div>
            );
        });
    }

    async function signOut(){
        try {
            await Auth.signOut();
        } catch (err) {
            console.error('error signing out', err);
        }
    }

    const generateClassPin = () => {
        let pin = [];
        let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 7; i++)
            pin[i] = chars[Math.floor(Math.random() * chars.length)];
        return pin.join('');
    } 
    
    const handleCreateClass = async(data) => {
        const pin = await generateClassPin();
        const { className } = data;
        const newClass = { 
            name: className,
            code: pin,
            teacherClassesId: user.attributes.sub
        };
        try {
            const createNewClass = await API.graphql({
                query: createClass,
                variables: { input: newClass },
                authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
            });
            console.log(createNewClass);
            setShowCreate(false);
        } catch (err) {
            console.error("Error creating class: ", err);
        }
    }

    const handleJoinClass = async(data) => {
        const { classCode } = data;
        console.log(classCode);
        try {
            const findClassQuery = await API.graphql({
                query: listClasses,
                variables: { filter: {code: {eq: classCode}}},
                authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
            });
            const classID = findClassQuery.data.listClasses.items[0].id;
            const studentID = await user.attributes.sub;
            const joinClass = await API.graphql({
                query: createStudentClasses,
                variables: { input: { classID, studentID }},
                authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
            })
            console.log(joinClass);
            setShowJoin(false);
        } catch(err) {
            console.error("Error joining class: ", err);
        }
    }
    
    const createFields = [{name: "Class Name", placeholder: "Enter the class name", var: "className"}]
    const joinFields = [{name: "Code", placeholder: "Enter the class code", var: "classCode"}]

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Bonsai</title>
                <meta name="description" content="Service dedicated to helping teachers" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col flex-1 w-full px-20 text-center">
                <h1 className="text-3xl font-bold">
                    Welcome to{' '}
                    <a className="text-green-800 hover:underline" href="#">
                        Bonsai
                    </a>
                </h1>
                {(showCreate || showJoin) &&
                    <div>
                        <BForm 
                            onSubmit={showCreate ? handleCreateClass : handleJoinClass} 
                            toggle={showCreate ? setShowCreate : setShowJoin}
                            fields={showCreate ? createFields : joinFields}
                        />
                    </div>
                }
                <p>you are {user ? user.username + ", a " + user.attributes['custom:role'] : "not signed in"}</p>
                {user && user.attributes['custom:role'] === "teacher" ? 
                    <div>
                        <button 
                            onClick={() => setShowCreate(true)}
                            className="px-4 py-2 rounded text-white bg-blue-700"
                        >
                            Create a class
                        </button>
                    </div>
                    :
                    <div>
                        <button 
                            onClick={() => setShowJoin(true)}
                            className="px-4 py-2 rounded text-white bg-blue-700"
                        >
                            Join a class
                        </button>
                    </div> 
                }
                {user && 
                    <div>
                        {renderClasses()}
                    </div>
                }
            </main>
            <footer>
                <div>
                    {user ?
                        <button 
                            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:shadow-outline"
                            onClick={signOut}
                        >
                            Sign out
                        </button>
                        :
                        <div>
                            <button 
                                className="px-4 py-2 m-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:shadow-outline"
                                onClick={() => router.push('/login')}
                            >
                                Log in
                            </button>
                            <button 
                                className="px-4 py-2 m-2 rounded text-blue hover:bg-gray-300 focus:shadow-outline"
                                onClick={() => router.push('/signup')}
                            >
                                Sign up
                            </button>

                        </div>
                    }
                </div>
                </footer>

        </div>
    );
}

/*
const generateClassPin = () => {
    const fs = require('fs');
    let pin = [];
    let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 7; i++)
        pin[i] = chars[Math.floor(Math.random() * chars.length)];
    const code = pin.join('') + "\n";
    fs.readFile('../.data/.code', (err, data) => {
        if (err) throw err;
        if (data.includes(code)) return generateClassPin();
        else {
            fs.writeFile('../.data/.code', code, err => console.error(err));
            console.log(code);
            return pin.join('');
        }
    });
}
*/