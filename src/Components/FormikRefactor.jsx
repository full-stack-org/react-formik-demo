import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

import { Formik, Form, Field, ErrorMessage, FastField } from "formik";
import { error } from "./form.css";
import * as Yup from "yup";

const initialValues = {
  email: "",
  pass: "",
  confirmpass: "",
  terms: "",
  comments: "",
  social: {
    facebook: "",
    twitter: "",
  },
};

const savedValues = {
  email: "test@gmail.com",
  pass: "123456",
  confirmpass: "123456",
  terms: "true",
  comments: "Hello",
  social: {
    facebook: "face",
    twitter: "tweet me",
  },
};

const onSubmit = (values) => {
  alert(JSON.stringify(values));
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is Required"),
  pass: Yup.string().required("Password Required").min(6).max(8),
  confirmpass: Yup.string()
    .required("Confirm Password Required")
    .min(6)
    .max(8)
    .oneOf([Yup.ref("pass"), null], "Passwords must match"),
  terms: Yup.string().required("Terms Required"),
  comments: Yup.string().required("Coments Required"),

  social: Yup.object().shape({
    facebook: Yup.string().required("Facebook Data Required"),
    twitter: Yup.string().required("Twitter Data Required"),
  }),
});

export default function FormikRefactor() {
  const [formData, setFormData] = useState(null);
  return (
    <div>
      <Container className="justify-content-center">
        <h2 className="text-center">React Login From</h2>
        <Formik
          initialValues={formData || initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount
          enableReinitialize
        >
          {(formik) => {
            console.log("Form Data ", formik);
            return (
              <Form>
                <FormGroup controlId="formBasicEmail">
                  <Row>
                    <Col xl={3}>
                      <FormLabel>Email address</FormLabel>
                    </Col>
                    <Col xl={4}>
                      <Field
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        className={
                          "form-control" +
                          (formik.errors.email && formik.touched.email
                            ? " is-invalid"
                            : "") +
                          (!formik.errors.email && formik.touched.email
                            ? " is-valid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="email"
                        className="error"
                      ></ErrorMessage>
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup controlId="formBasicPassword">
                  <Row>
                    <Col xl={3}>
                      <FormLabel>Password</FormLabel>
                    </Col>
                    <Col xl={4}>
                      <Field
                        type="password"
                        placeholder="Password"
                        name="pass"
                        className={
                          "form-control" +
                          (formik.errors.pass && formik.touched.pass
                            ? " is-invalid"
                            : "") +
                          (!formik.errors.pass && formik.touched.pass
                            ? " is-valid"
                            : "")
                        }
                      />
                      <ErrorMessage name="pass"></ErrorMessage>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup controlId="formConfirmPassword">
                  <Row>
                    <Col xl={3}>
                      <FormLabel>Confirm Password</FormLabel>
                    </Col>
                    <Col xl={4}>
                      <Field
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmpass"
                        className={
                          "form-control" +
                          (formik.errors.confirmpass &&
                          formik.touched.confirmpass
                            ? " is-invalid"
                            : "") +
                          (!formik.errors.confirmpass &&
                          formik.touched.confirmpass
                            ? " is-valid"
                            : "")
                        }
                      />
                      <ErrorMessage name="confirmpass"></ErrorMessage>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup controlId="formFaceBook">
                  <Row>
                    <Col xl={3}>
                      <FormLabel>Facebook Account</FormLabel>
                    </Col>
                    <Col xl={4}>
                      <Field
                        type="text"
                        placeholder="Facebook Details"
                        name="social.facebook"
                        className={
                          "form-control" +
                          (formik.errors.social && formik.touched.social
                            ? " is-invalid"
                            : "") +
                          (!formik.errors.social && formik.touched.social
                            ? " is-valid"
                            : "")
                        }
                      />
                      <ErrorMessage name="social.facebook"></ErrorMessage>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup controlId="formTwitter">
                  <Row>
                    <Col xl={3}>
                      <FormLabel>Twitter Account</FormLabel>
                    </Col>
                    <Col xl={4}>
                      <FastField
                        type="text"
                        placeholder="Twitter Details"
                        name="social.twitter"
                        className={
                          "form-control" +
                          (formik.errors.social && formik.touched.social
                            ? " is-invalid"
                            : "") +
                          (!formik.errors.social && formik.touched.social
                            ? " is-valid"
                            : "")
                        }
                      />
                      <ErrorMessage name="social.twitter"></ErrorMessage>
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup controlId="formComments">
                  <Row>
                    <Col xl={3}>
                      <FormLabel>Comments</FormLabel>
                    </Col>
                    <Col xl={4}>
                      <Field
                        as="textarea"
                        placeholder="Enter Comments"
                        name="comments"
                        className={
                          "form-control" +
                          (formik.errors.comments && formik.touched.comments
                            ? " is-invalid"
                            : "") +
                          (!formik.errors.comments && formik.touched.comments
                            ? " is-valid"
                            : "")
                        }
                      />
                      <ErrorMessage name="comments"></ErrorMessage>
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup controlId="formBasicCheckbox">
                  <Row>
                    <Col xl={{ span: 4, offset: 3 }}>
                      <Field
                        type="checkbox"
                        label="Check me out"
                        name="terms"
                        className={
                          "form-check-input" +
                          (formik.errors.terms && formik.touched.terms
                            ? " is-invalid"
                            : "") +
                          (!formik.errors.terms && formik.touched.terms
                            ? " is-valid"
                            : "")
                        }
                      />
                      <label htmlFor="acceptTerms" className="form-check-label">
                        Accept Terms & Conditions
                      </label>
                    </Col>
                    <Col xl={{ span: 4, offset: 3 }}>
                      <ErrorMessage name="terms"></ErrorMessage>
                    </Col>
                  </Row>
                </FormGroup>

                <Row>
                  <Col xl={{ span: 4, offset: 3 }}>
                    <Button
                      variant="primary"
                      type="submit"
                      className="mr-2"
                      disabled={!formik.isValid}
                    >
                      Submit
                    </Button>
                    <Button
                      variant="success"
                      type="button"
                      className='mr-2'
                      onClick={() => setFormData(savedValues)}
                    >
                      Reload Form Data
                    </Button>
                    <Button
                      variant="danger"
                      type="reset"
                    >
                      Reset
                    </Button>
                  </Col>
                </Row>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </div>
  );
}
