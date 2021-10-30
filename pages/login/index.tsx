import React from "react";

import { NextPage } from "next";

import SignLayout from "../../layouts/SignLayout";
import SignInForm from "../../domain/Sign/SignInForm";

const LoginPage: NextPage = () => {
  return (
    <SignLayout>
      <SignInForm />
    </SignLayout>
  );
};

export default LoginPage;
