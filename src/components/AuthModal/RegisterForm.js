import React from "react";
import {
  Form,
  Field,
  Input,
  SubmitButton,
  Actions,
  Description,
} from "./RegisterFormStyled";

const RegisterForm = () => {
  return (
    <Form>
      <Description>Enter your email and password to register.</Description>
      <Field>
        <Input type="text" placeholder="Username" required />
      </Field>
      <Field>
        <Input type="email" placeholder="Enter your email address" required />
      </Field>
      <Field>
        <Input type="password" placeholder="Password" required />
      </Field>
      <Field>
        <Input type="password" placeholder="Confirm Password" required />
      </Field>
      <Actions>
        <SubmitButton type="submit">Register</SubmitButton>
      </Actions>
    </Form>
  );
};

export default RegisterForm;
