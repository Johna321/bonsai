import React, { ReactElement } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUser } from "../context/AuthContext";
import BForm from "../components/BForm";

export default function createClass(): ReactElement {
    /*interface IFormInput {
        name: string;
        code: number; 
    }

    const { user } = useUser();
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<IFormInput>();
    
    const onSubmit: SubmitHandler<IFormInput> = async(data) => {
        
    }

    return(
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md" onSubmit={handleSubmit(onSubmit)}>
                
            </form>
        </div>
    );*/
    const onSubmit = (data) => {
        console.log(data);
    }
    const fields = [
        {name: "Class Name", placeholder: "Enter a class name"},
        {name: "Code", placeholder: "Enter class code"}
    ]
    return (
        <>
            <BForm onSubmit={onSubmit} fields={fields} />
        </>
    );
}