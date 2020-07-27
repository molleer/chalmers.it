import React from "react";
import {
    FieldWrapper,
    TextArea,
    FileUploadWrapper,
    UploadLabel,
    UploadInput
} from "./DropTextArea.style";

export const DropTextArea = props => {
    const handleUpload = event => {
        event.preventDefault();
        console.log(event);
    };

    return (
        <>
            <FieldWrapper onDrop={handleUpload}>
                <TextArea type="text" {...props} />
                <FileUploadWrapper>
                    <UploadLabel for="file-upload">
                        Lägg till filer genom att drag & droppa eller välj från
                        din dator.
                    </UploadLabel>
                    <UploadInput
                        onInput={handleUpload}
                        id="file-upload"
                        type="file"
                    />
                </FileUploadWrapper>
            </FieldWrapper>
        </>
    );
};
