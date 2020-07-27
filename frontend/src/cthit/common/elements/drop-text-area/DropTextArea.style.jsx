import Styled from "styled-components";

export const FieldWrapper = Styled.div`
  border-radius: 10px;
  border: 1px solid #DDD;
  overflow: hidden;
`;

export const TextArea = Styled.textarea`
  width: 100%;
  border: none;
  height: 100%;
  resize: none;
  padding: 1rem;
  outline-width: 0;
`;

export const FileUploadWrapper = Styled.div`
  border-top: 2px dotted #DDD;
  width: 100%;
`;

export const UploadLabel = Styled.label`
  padding: 8px;
  width: 100%;
  display: block;
`;

export const UploadInput = Styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
`;
