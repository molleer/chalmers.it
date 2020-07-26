import React from "react";
import { useFormik } from "formik";
import ReactMarkdown from "react-markdown";
import { FormCard, Label } from "./NewsForm.style";
import { Heading } from "../../styles/Text.styles";
import { TextField } from "cthit/common/elements";
import { TextArea } from "cthit/common/elements";
import * as Yup from "yup";

export const NewsForm = () => {
    const formik = useFormik({
        initialValues: { title: "", body: "", posted_as: null },
        onSubmit: values => console.log(values),
        validationSchema: Yup.object({
            title: Yup.string().required(),
            body: Yup.string().required()
        })
    });
    return (
        <FormCard onSubmit={formik.handleSubmit}>
            <Heading>Ny nyhet</Heading>
            <Label>Title</Label>
            <TextField
                placeholder="Title för nyheten"
                id="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
                <Label style={{ color: "red" }}>{formik.errors.title}</Label>
            ) : null}
            <Label>Innehåll</Label>
            <TextArea
                placeholder="Nyhetsinnehållet skrivs här"
                rows={20}
                id="body"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.body}
            />
            {formik.touched.body && formik.errors.body ? (
                <Label style={{ color: "red" }}>{formik.errors.body}</Label>
            ) : null}
            <button type="submit">Skicka</button>
        </FormCard>
    );
};
