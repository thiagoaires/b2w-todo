import React, { Component, Fragment } from "react"
import { GlobalStyle } from "./assets/styles/global"
import Routes from "./routes"

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Routes />
      </Fragment>
    )
  }
}

export default App
