import axios from "axios"

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos"
})

const restApi = {
  getTodo: () => api.get("/"),
  postTodo: props => api.post("/", props),
  putTodo: (id, props) => api.put(`/${id}`, props)
}

export default restApi
