import { TextField, TextFieldProps } from "@mui/material";
import { useField, FieldAttributes } from "formik";

import React from "react";

type CustomTextFieldProps = FieldAttributes<TextFieldProps> & {
  label: string;
};

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      {...field}
      {...props}
      label={label}
      variant="outlined"
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
      fullWidth
    />
  );
};

export default CustomTextField;
