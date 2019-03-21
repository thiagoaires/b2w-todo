import React from "react"
import { TodoItemList, TodoButton } from "./styles"
import * as actions from "../../../store/actions"
import { connect } from "react-redux"

const TodoItem = props => (
  <TodoItemList completed={props.todo.completed}>
    <TodoButton onClick={() => props.putTodo(props.todo)}>
      {!props.todo.completed ? (
        <span role="img" aria-label="ok">
          👌
        </span>
      ) : (
        <span role="img" aria-label="not">
          ⛔
        </span>
      )}
    </TodoButton>
    <b>Por {props.todo.userId}</b> {props.todo.title}
  </TodoItemList>
)

export default connect(
  null,
  actions
)(TodoItem)
