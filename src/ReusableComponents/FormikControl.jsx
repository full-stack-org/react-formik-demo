import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";

export default function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
    case "checkbox":
    case "radio":
    case "date":
    default:
      return null;
  }
}
