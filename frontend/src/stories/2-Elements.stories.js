import React from "react";
import { TextField } from "../cthit/common/elements";
export default {
    title: "Elements"
};

export const TextFields = () => {
    return (
        <>
            <label
                style={{ verticalAlign: "top", display: "flex" }}
                for="tfield"
            >
                Hello
            </label>
            <TextField type="password" id="tfield" placeholder="Password" />
        </>
    );
};
