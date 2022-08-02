import { GRAPHQL_AUTH_MODE } from "@aws-amplify/auth";
import { API } from "aws-amplify";
import React from "react";
import { createStudent, createTeacher } from "../graphql/mutations";

export default function Test() {
    const data = {
        email: "johna321123@gmail.com",
        firstName: "John",
        lastName: "Aitken",
        username: "johna321",
        role: "student"
    }
    const createUser = async(data) => {
        const { email, username, firstName, lastName, role } = data;
        const newUser = { email, firstName, lastName, username };
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
                    query: createStudent,
                    variables: { input: newUser },
                    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
                });
                console.log(createNewUser);
            }
        } catch(err) {
            console.error("Error creating user: ", err);
        }
    }
    return(
        <div>
            <button onClick={() => createUser(data)}>Test</button>
        </div>
    );
}