import React, { Component } from "react"

import { connect } from "react-redux"
import * as actions from "../../../store/actions"
import ListTodos from "../../organisms/ListTodos"
import CounterTodo from "../../molecules/CounterTodo"

class AllTodos extends Component {
  componentDidMount = () => this.props.getTodo()

  render() {
    const { listTodo } = this.props

    return (
      <div>
        <CounterTodo listTodo={listTodo} />
        <ListTodos todos={listTodo} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    listTodo: state.todo.listTodo
  }
}

export default connect(
  mapStateToProps,
  actions
)(AllTodos)
