import React from "react";
import { RegisterForm } from "./RegisterForm";

interface IRegisterProps {}

export const Register: React.FC<IRegisterProps> = () => {
  return (
    <div>
      <RegisterForm />
    </div>
  );
};
