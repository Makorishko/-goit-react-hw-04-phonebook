import styled from 'styled-components';

export const FormContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
  width: 400px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;

  label {
    font-size: 18px;
    font-weight: 400;
  }
  button {
    background-color: white;
    width: fit-content;
    border-radius: 5px;
    border: 1px solid grey;
  }
`;
