import styled from "styled-components"

export const AddForm = styled.form`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  padding: 15px 10px;
  width: 50%;

  & input[type="text"] {
    width: 100%;
    font-size: 18px;
    padding: 5px 10px;
    margin: 10px 0;
  }
  & button {
    border: none;
    background: #fc0;
    display: block;
    padding: 10px 15px;
    font-size: 20px;
    margin: 10px auto;
  }
`
