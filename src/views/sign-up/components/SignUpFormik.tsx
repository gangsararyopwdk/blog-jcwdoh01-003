"use client";

import { FC, PropsWithChildren } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Formik, FormikHelpers } from "formik";
import { SignUpFormikValues } from "../types";
import signUpFormSchema from "../schema/SignUpFormSchema";

type SignUpFormikProps = PropsWithChildren;

const SignUpFormik: FC<SignUpFormikProps> = ({ children }) => {
  const onSubmit = async (
    values: SignUpFormikValues,
    { resetForm }: FormikHelpers<SignUpFormikValues>
  ) => {
    try {
      const payload = {
        username: values.username,
        email: values.email,
        password: values.password,
      };

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_APPLICATION_ID}/${process.env.NEXT_PUBLIC_REST_API_KEY}/data/bloggers`,
        payload
      );

      resetForm();

      toast("Sign up sukses");
    } catch (error) {
      toast("Sign up gagal");
      console.log(error);
    }
  };

  return (
    <Formik<SignUpFormikValues>
      initialValues={{
        username: "",
        email: "",
        password: "",
        showPassword: false,
      }}
      validationSchema={signUpFormSchema}
      onSubmit={onSubmit}
    >
      <>{children}</>
    </Formik>
  );
};

export default SignUpFormik;
