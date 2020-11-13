import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikContainer() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    password: Yup.string().required("Password is Mandatory"),
    email: Yup.string()
      .email("Invalid Email Id")
      .required("Email Id Required"),
  });
  const onSubmit = (values) => console.log("Form Data", values);
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(errors, touched) => {
            return (
              <Form>
                <div className="border-black">
                  <div className="form-group">
                    <div className="row">
                      <div className="col">
                        <label htmlFor="Email">Email Id</label>
                      </div>
                      <div className="col">
                        <Field
                          name="email"
                          type="email"
                          className="form-control-input"
                        ></Field>
                        <ErrorMessage
                          name="email"
                          component="div"
                        ></ErrorMessage>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col">
                        <label htmlFor="Email">Password</label>
                      </div>
                      <div className="col">
                        <Field
                          name="password"
                          type="password"
                          className="form-control-input"
                        ></Field>
                        <ErrorMessage
                          name="password"
                          component="div"
                        ></ErrorMessage>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col offset-4">
                        <button
                          type="submit"
                          className="btn btn-primary mt-2 btn-block"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
