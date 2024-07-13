import React from "react";
import { Button, ButtonProps } from "@mui/material";

type ICustomButtonProps = ButtonProps & {
  label: string;
};

export const CustomButton: React.FC<ICustomButtonProps> = ({
  label,
  ...props
}) => {
  return <Button {...props}>{label}</Button>;
};
