import React from "react"

import { HeaderTodo, HeaderLinks } from "./styles"

export default () => (
  <HeaderTodo>
    <nav>
      <li>
        <HeaderLinks to="/">Lista de Todo</HeaderLinks>
      </li>
      <li>
        <HeaderLinks to="/add">Cadastrar novo todo</HeaderLinks>
      </li>
    </nav>
  </HeaderTodo>
)
