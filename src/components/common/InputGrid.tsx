"use client";
import React, { RefObject, useState } from "react";
import { Button } from "../ui/button";
import { roboto_mono } from "@/lib/fonts";
import { Input } from "../ui/input";

interface InputGridProps {
    numOfInput?: number;
    inputText?: string;
    onSubmit: (values: string[]) => void;
    formRef: RefObject<HTMLFormElement>;
}

const InputGrid: React.FC<InputGridProps> = ({
    numOfInput = 12,
    onSubmit,
    inputText,
    formRef,
}) => {
    const initialValues: { [key: string]: string } = {};

    for (let i = 1; i <= numOfInput; i++) {
        initialValues[`field${i}`] = "";
    }

    const [values, setValues] = useState<{ [key: string]: string }>(
        initialValues
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const formDataEntries = Object.fromEntries(formData.entries());

        const formValues = Object.values(formDataEntries).map((val) =>
            (val as string).trim()
        );
        console.log({ formData }, { formDataEntries });
        console.log("Form Values:", formValues);
        console.log(typeof formValues);
        onSubmit(formValues);
    };
    return (
        <div className={`p-6  ${roboto_mono.className}`}>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4   gap-4`}
            >
                {Object.keys(values).map((key, index) => (
                    <Input
                        key={index}
                        type="text"
                        name={key}
                        value={values[key]}
                        onChange={handleChange}
                        placeholder={`Key ${index + 1}`}
                        className="border border-gray-300 p-2 rounded inline-block"
                    />
                ))}
            </form>
        </div>
    );
};

export default InputGrid;
