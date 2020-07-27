import React, { useState } from "react";
import { TextField, TextArea } from "../cthit/common/elements";
import { DropTextArea } from "cthit/common/elements";
export default {
    title: "Elements"
};

export const TextFields = () => {
    const [value, setValue] = useState("");
    return (
        <>
            <label
                style={{ verticalAlign: "top", display: "flex" }}
                for="tfield"
            >
                TextField
            </label>
            <TextField
                value={value}
                onChange={e => setValue(e.target.value)}
                type="email"
                id="tfield"
                placeholder="Email"
            />
        </>
    );
};

export const TextAreas = () => {
    const [value, setValue] = useState("");
    return (
        <>
            <label
                style={{ verticalAlign: "top", display: "flex" }}
                for="tarea"
            >
                Text Area
            </label>
            <TextArea
                rows={10}
                value={value}
                onChange={e => setValue(e.target.value)}
                type="email"
                id="tarea"
                placeholder="Free Text"
            />
        </>
    );
};

export const DragAndDropTextArea = () => {
    return <DropTextArea rows={10} />;
};
