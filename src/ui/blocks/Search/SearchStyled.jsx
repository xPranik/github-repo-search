import styled from "styled-components";

export const FormWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto 30px;
`;

export const BaseForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const ErrorLabel = styled.span`
  font-size: 12px;
  color: #e44545;
  position: absolute;
  top: 100%;
  left: 3px;
`;

export const BaseInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 4px;
  border: 1px solid #b3b3b3;
  border-radius: 4px 0 0 4px;
  &:active,
  &:focus {
    outline: none;
    border-color: #d5ab78;
  }
`;

export const BaseSelect = styled.select`
  width: 300px;
  height: 25px;
  margin-top: 16px;
  font-size: 14px;
  padding: 4px;
  border: 1px solid #b3b3b3;
  border-radius: 4px 0 0 4px;
  &:active,
  &:focus {
    outline: none;
    border-color: #d5ab78;
  }
`;

export const SubmitButton = styled.button`
  width: 90px;
  height: 40px;
  padding: 4px;
  border: 1px solid #b3b3b3;
  border-radius: 0 4px 4px 0;
  color: black;
  background-color: #d5ab78;
  transition: all 0.2s;
  &:hover {
    background-color: #d19e60;
  }
`;
