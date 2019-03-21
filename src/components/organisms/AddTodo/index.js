import React, { Fragment } from "react"
import { withFormik } from "formik"
import { withRouter } from "react-router-dom"
import * as Yup from "yup"
import * as actions from "../../../store/actions"
import { connect } from "react-redux"
import { compose } from "redux"
import { ErrorMessage } from "../../atom/ErrorMessage"
import { AddForm } from "./styles"

const AddTodo = ({ values, errors, handleChange, handleSubmit }) => (
  <Fragment>
    <AddForm onSubmit={handleSubmit}>
      <h2>Adicionar Todo</h2>
      <input type="hidden" value="values.userId" name="userId" />
      {!!errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
      <input
        name="title"
        type="text"
        placeholder="Nome do Todo"
        onChange={handleChange}
        value={values.title}
      />
      <input
        name="completed"
        type="checkbox"
        value={values.checkbox}
        onChange={handleChange}
      />
      <label htmlFor="completed">completo?</label>
      <button type="submit">Cadastrar todo</button>
    </AddForm>
  </Fragment>
)

export default withRouter(
  compose(
    connect(
      null,
      actions
    ),
    withFormik({
      mapPropsToValues: () => ({
        userId: 1,
        title: "",
        completed: false
      }),
      validateOnBlur: false,
      validateOnChange: false,
      validationSchema: Yup.object().shape({
        title: Yup.string().required("Campo Obrigatório")
      }),
      handleSubmit: (values, { props }) =>
        props.postTodo(values, () => props.history.push("/"))
    })
  )(AddTodo)
)
