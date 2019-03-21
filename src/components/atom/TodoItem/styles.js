import styled from "styled-components"

export const TodoItemList = styled.li`
  border-radius: 5px;
  width: calc(25% - 20px);
  padding: 15px;
  margin: 10px;
  list-style: none;
  height: 110px;
  align-items: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
  background-color: ${props => (props.completed ? "#cfd" : "#fff")};
  opacity: ${props => (props.completed ? 0.4 : 1)};
`

export const TodoButton = styled.button`
  background: none;
  border: none;
  font-size: 150%;
`
