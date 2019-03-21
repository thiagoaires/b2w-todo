import * as types from "../constants"

const INITIAL_STATE = {
  listTodo: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TODO_GET:
      return { ...state, listTodo: action.payload }
    case types.TODO_POST:
      return { ...state, listTodo: [...state.listTodo, action.payload] }
    case types.TODO_PUT:
      const updateItem = state.listTodo.map(todo =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      )
      return { ...state, listTodo: updateItem }
    default:
      return state
  }
}
