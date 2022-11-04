import { ChangeEvent, FormEvent, useState } from "react";
import { Sub } from "../interfaces/AppInterfaces";

export const Form = () => {
    const [values, setValues] = useState<Sub>({
        nick: "",
        subMonths: 0,
        avatar: "", 
        description: "",
    });

    type HandleChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
    };

    const handleChange = (evt: HandleChange) => {
        const { name, value } = evt.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={values.nick}
                    type="text"
                    name="nick"
                    placeholder="Nick"
                    onChange={handleChange}
                />
                <input
                    value={values.subMonths}
                    type="number"
                    name="subMonths"
                    placeholder="Months"
                    onChange={handleChange}
                />
                <input
                    value={values.avatar}
                    type="text"
                    name="avatar"
                    placeholder="Avatar"
                    onChange={handleChange}
                />
                <textarea
                    value={values.description}
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                />
                <button type="submit">Add new Sub</button>
            </form>
        </>
    );
};
