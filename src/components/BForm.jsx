import React, { ReactElement } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUser } from "../context/AuthContext";

export default function BForm(props){
    const { user } = useUser();

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();
    
    const onSubmit = props.onSubmit;
    
    const genForm = () => {
        return props.fields.map((field) => {
            return(
                <>
                    <div >
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                            {field.name}
                        </label>
                    </div>
                    <input 
                        id={field.var} 
                        label={field.var} 
                        placeholder={field.placeholder}
                        className="w-full px-3 py-2 mb-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        {...register(field.var)}
                    />
                </>
            );
        });
    }

    return(
        <div className="flex flex-col absolute items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md" onSubmit={handleSubmit(onSubmit)}>
                {genForm()}
                <div>
                    <input
                        type="submit"
                        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    />
                    <button
                        onClick={() => props.toggle(false)}
                        className="px-4 py-2 text-blue focus:shadow-outline rounded"
                    >
                        Cancel
                    </button>
                </div>
                    
            </form>
        </div>
    );
}