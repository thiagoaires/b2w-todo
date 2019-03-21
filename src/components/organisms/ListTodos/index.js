import React, { Fragment } from "react"
import TodoItem from "../../atom/TodoItem"
import { ContainerListTodo } from "./styles"

const ListTodos = ({ todos }) => (
  <Fragment>
    <h3>Clique nos icones para alterar o status do todo</h3>
    <ContainerListTodo>
      {todos && todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
    </ContainerListTodo>
  </Fragment>
)

export default ListTodos
