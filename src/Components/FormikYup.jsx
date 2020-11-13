import React from "react";
import {
  Row,
  Col,
  Container,
  Form,
  Button,
  FormGroup,
  FormControl,
  FormCheck,
  FormLabel,
} from "react-bootstrap";

import { useFormik } from "formik";
import { error } from "./form.css";
import * as Yup from "yup";

const initialValues = {
  email: "",
  pass: "",
  confirmpass: "",
  terms: "",
};

const onSubmit = (values) => {
  alert(JSON.stringify(values));
};

const validationSchema = Yup.object({
  email: Yup.string().email().required("Email is Required"),
  pass: Yup.string().required("Password Required").min(6).max(8),
  confirmpass: Yup.string().required("Confirm Password Required").min(6).max(8),
  terms: Yup.string().required("Terms Required"),
});

export default function FormikYup() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log("Values", formik.errors);
  return (
    <div>
      <Container className="text-center">
        <h2 className="text-center">React Login From</h2>
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup controlId="formBasicEmail">
            <Row className="mt-5">
              <Col xl={3}>
                <FormLabel>Email address</FormLabel>
              </Col>
              <Col xl={4}>
                <FormControl
                  type="email"
                  placeholder="Enter email"
                  onChange={formik.handleChange}
                  name="email"
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </Col>
            </Row>
          </FormGroup>

          <FormGroup controlId="formBasicPassword">
            <Row className="mt-5">
              <Col xl={3}>
                <FormLabel>Password</FormLabel>
              </Col>
              <Col xl={4}>
                <FormControl
                  type="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="pass"
                  value={formik.values.pass}
                />
                {formik.touched.pass && formik.errors.pass ? (
                  <div className="error">{formik.errors.pass}</div>
                ) : null}
              </Col>
            </Row>
          </FormGroup>
          <FormGroup controlId="formConfirmPassword">
            <Row className="mt-5">
              <Col xl={3}>
                <FormLabel>Confirm Password</FormLabel>
              </Col>
              <Col xl={4}>
                <FormControl
                  type="password"
                  placeholder="Confirm Password"
                  onChange={formik.handleChange}
                  name="confirmpass"
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmpass}
                />
                {formik.touched.confirmpass && formik.errors.confirmpass ? (
                  <div className="error">{formik.errors.confirmpass}</div>
                ) : null}
              </Col>
            </Row>
          </FormGroup>

          <FormGroup controlId="formBasicCheckbox">
            <Row>
              <Col xl={{ span: 2, offset: 3 }}>
                <FormCheck
                  type="checkbox"
                  label="Check me out"
                  name="terms"
                  value={formik.values.terms}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.terms && formik.errors.terms ? (
                  <div className="error">{formik.errors.terms}</div>
                ) : null}
              </Col>
            </Row>
          </FormGroup>

          <Row>
            <Col xl={{ span: 4, offset: 3 }}>
              <Button variant="primary" type="submit" block>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
