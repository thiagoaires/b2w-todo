import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderTodo = styled.header`
  background: #fff;
  border-radius: 0 5px 5px 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 15px 10px;

  & nav {
    display: flex;
    justify-content: space-around;
  }

  & li {
    list-style: none;
  }
`

export const HeaderLinks = styled(Link)`
  background: #eee;
  border-radius: 0 5px 5px 0;
  color: #333;
  padding: 20px;
  display: block;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  transition: ease-in 300ms;

  &:hover {
    background: #fc0;
  }
`
