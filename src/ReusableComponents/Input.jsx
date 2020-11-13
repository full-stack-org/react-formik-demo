import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

export default function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-group mt-4">
      <div className="row justify-content-center">
        <div className="col-xs-3">
          <label htmlFor={name} className="mr-3 font-weight-bold">
            {label}
          </label>
        </div>
        <div className="col-xs-6">
          <Field name={name} {...rest} className="form-control-input" />
          <ErrorMessage name={name} component={TextError} />
        </div>
      </div>
    </div>
  );
}
