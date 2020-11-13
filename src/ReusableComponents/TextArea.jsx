import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

export default function TextArea(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-group">
      <div className="row justify-content-center">
        <div className="col-xs-4">
          <label htmlFor={name} className="font-weight-bold mr-2">
            {label}
          </label>
        </div>
        <div className="col-xs-8">
          <Field
            as="textarea"
            name={name}
            {...rest}
            className="form-control-text"
          />
          <ErrorMessage name={name} component={TextError} />
        </div>
      </div>
    </div>
  );
}
