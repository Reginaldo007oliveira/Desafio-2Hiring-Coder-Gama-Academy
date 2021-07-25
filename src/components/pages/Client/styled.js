import styled from "styled-components";

export const H1 = styled.h1`
  color: #1391f2;
  font-family: "Roboto", sans-serif;
  font-weight: 1700;
  margin: 0 0 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Fieldset = styled.fieldset`
  margin: 0 0 12px 0;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #000000;
  font-size: 0.8em;
  font-weight: bold;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: none;
  background-color: #fefefe;
  padding: 8px;
`;

export const ButtonNew = styled.button`
  color: #ffffff;
  font-size: 0.9em;
  padding: 12px;
  border-radius: 3px;
  border: none;
  background-color: #088ff7;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

export const ButtonSubmit = styled.button`
  color: #ffffff;
  font-size: 1.2em;
  padding: 12px 24px;
  border-radius: 3px;
  border: none;
  background-color: #0590fc;
  cursor: pointer;
`;

export const ButtonDelete = styled.button`
  color: #e74200;
  font-size: 1.2em;
  padding: 12px 24px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
`;
