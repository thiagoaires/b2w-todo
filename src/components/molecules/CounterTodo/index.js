import React from "react"
import { Counter } from "./styles"

const CounterTodo = ({ listTodo }) => {
  const allTodos = listTodo.length
  const didTodos = listTodo.filter(did => did.completed === true).length
  const doTodos = listTodo.filter(did => did.completed !== true).length

  return (
    <Counter>
      Voce possui um total de {allTodos} todos
      <br />
      sendo {didTodos} realizados e {doTodos} a fazer
    </Counter>
  )
}

export default CounterTodo
