import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

export default function FormikContainer() {
  const initialValues = {
    email: "",
    address: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email Format")
      .required("Email Required"),
    address: Yup.string().required("Address is Required"),
  });
  const onSubmit = (values) => {
    console.log("Form Data is ", values);
  };

  return (
    <div className="container main-container mt-4 w-xs-100 w-lg-50 h-100">
      <h2 className="display-5 mt-2">Login Form</h2>
      <div className="row justify-content-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <FormikControl
                control="input"
                type="input"
                label="Email"
                name="email"
              />
              <FormikControl
                control="textarea"
                type="textarea"
                label="Address"
                name="address"
              />
              <button type="submit" className="btn btn-danger mb-4">
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
