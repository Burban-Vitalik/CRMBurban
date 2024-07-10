import React from "react";
import { LoginForm } from "./LoginForm";

interface ILoginProps {}

export const Login: React.FC<ILoginProps> = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};
