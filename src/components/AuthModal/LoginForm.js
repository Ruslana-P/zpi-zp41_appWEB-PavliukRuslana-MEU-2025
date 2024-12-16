import React from "react";
import {
  Form,
  Field,
  Input,
  SubmitButton,
  Description,
} from "./LoginFormStyled";

const LoginForm = () => {
  return (
    <Form>
      <Description>Enter your username and password to login.</Description>
      <Field>
        <Input type="email" placeholder="Enter your email" required />
      </Field>
      <Field>
        <Input type="password" placeholder="Enter your password" required />
      </Field>
      <SubmitButton type="submit">Login</SubmitButton>
    </Form>
  );
};

export default LoginForm;
