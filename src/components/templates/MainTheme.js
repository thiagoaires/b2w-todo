import React from "react"
import { Route } from "react-router-dom"

import Header from "../organisms/Header"
import Footer from "../organisms/Footer"
import { Container } from "../atom/Container/styles"

const MainTheme = ({ component: Component, ...props }) => (
  <Container>
    <Header />

    <Route
      {...props}
      render={matchProps => (
        <div>
          <Component {...matchProps} />
        </div>
      )}
    />
    <Footer />
  </Container>
)

export default MainTheme
