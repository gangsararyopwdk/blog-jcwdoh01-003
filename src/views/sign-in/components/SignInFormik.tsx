"use client";

import { FC, PropsWithChildren } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";
import signInFormSchema from "../schema/signInFormSchema";
import { SignInFormikValues, User } from "../types";

type SignInFormikProps = PropsWithChildren;

const SignInFormik: FC<SignInFormikProps> = ({ children }) => {
  const router = useRouter();
  const { signIn } = useAuthStore();

  const onSubmit = async (values: SignInFormikValues) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_APPLICATION_ID}/${process.env.NEXT_PUBLIC_REST_API_KEY}/data/bloggers`;

      const user: { data: User[] } = await axios.get(
        `${url}?where=%60email%60%20%3D%20'${values.email}'%20AND%20%60password%60%20%3D%20'${values.password}'`
      );

      if (user.data.length === 0) {
        toast("User tidak ditemukan");
        return;
      }

      signIn({ username: user.data[0].username, email: user.data[0].email });

      toast("Berhasil Login");

      router.push("/");
    } catch (error) {
      toast("Login Gagal");
      console.log(error);
    }
  };

  return (
    <Formik<SignInFormikValues>
      initialValues={{
        email: "",
        password: "",
        showPassword: false,
      }}
      validationSchema={signInFormSchema}
      onSubmit={onSubmit}
    >
      {children}
    </Formik>
  );
};

export default SignInFormik;
