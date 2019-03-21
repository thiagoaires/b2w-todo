import React from "react"
import { HashRouter, Switch } from "react-router-dom"

import MainTheme from "../components/templates/MainTheme"

import AllTodos from "../components/pages/AllTodos"
import FormTodo from "../components/pages/FormTodo"

const Routes = () => (
  <HashRouter>
    <Switch>
      <MainTheme exact path="/" component={AllTodos} />
      <MainTheme exact path="/add" component={FormTodo} />
    </Switch>
  </HashRouter>
)

export default Routes
