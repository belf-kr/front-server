import React from "react";

import { NextPage } from "next";

import SignLayout from "../../layouts/SignLayout";
import SignUpForm from "../../domain/Sign/SignUpForm";

const RegisterPage: NextPage = () => {
  return (
    <SignLayout>
      <SignUpForm />
    </SignLayout>
  );
};

export default RegisterPage;
