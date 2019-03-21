import * as types from "../constants"
import restApi from "../../services/api"

export const getTodo = () => async dispatch => {
  try {
    await restApi.getTodo().then(({ data }) =>
      dispatch({
        type: types.TODO_GET,
        payload: data
      })
    )
  } catch (e) {
    console.log("erro na requisição dos TODOS")
  }
}
export const postTodo = (props, callback) => async dispatch => {
  try {
    await restApi
      .postTodo(props)
      .then(({ data }) =>
        dispatch({
          type: types.TODO_POST,
          payload: data
        })
      )
      .then(callback())
  } catch (e) {
    console.log("erro no post dos TODOS")
  }
}

export const putTodo = props => async dispatch => {
  const newProps = { ...props }
  delete newProps.id
  newProps.completed = !newProps.completed

  try {
    await restApi.putTodo(props.id, newProps).then(({ data }) =>
      dispatch({
        type: types.TODO_PUT,
        payload: data
      })
    )
  } catch (e) {
    console.log("erro no put dos TODOS")
  }
}
