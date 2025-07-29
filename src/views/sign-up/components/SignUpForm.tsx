"use client";

import { useFormikContext } from "formik";
import { SignUpFormikValues } from "../types";

const SignUpForm = () => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    getFieldProps,
    setFieldValue,
  } = useFormikContext<SignUpFormikValues>();

  return (
    <div className="flex flex-col gap-4">
      {/* ==== Username ==== */}
      <div className="w-full">
        <input
          {...getFieldProps("username")}
          placeholder="Username"
          className={`w-full p-[18px_24px] rounded-[4px] ${
            errors.username && touched.username
              ? "shadow-[0px_0px_0px_1px_#C73E1D]"
              : "shadow-[0px_0px_0px_1px_#E3E3E3]"
          }`}
        />

        {errors.username && touched.username && (
          <p className="text-sm text-red-600 mt-[8px]">{errors.username}</p>
        )}
      </div>

      {/* ==== Email ==== */}
      <div className="w-full">
        <input
          {...getFieldProps("email")}
          placeholder="Email"
          className={`w-full p-[18px_24px] rounded-[4px] ${
            errors.email && touched.email
              ? "shadow-[0px_0px_0px_1px_#C73E1D]"
              : "shadow-[0px_0px_0px_1px_#E3E3E3]"
          }`}
        />
        {errors.email && touched.email && (
          <p className="text-sm text-red-600 mt-[8px]">{errors.email}</p>
        )}
      </div>

      {/* ==== Password ==== */}
      <div className="w-full">
        <div className="w-full relative">
          <input
            {...getFieldProps("password")}
            type={values.showPassword ? "text" : "password"}
            placeholder="Password"
            className={`w-full p-[18px_24px] rounded-[4px] ${
              errors.password && touched.password
                ? "shadow-[0px_0px_0px_1px_#C73E1D]"
                : "shadow-[0px_0px_0px_1px_#E3E3E3]"
            }`}
          />

          <div
            className="absolute top-1/2 right-[24px] -translate-y-1/2 cursor-pointer"
            onClick={() => setFieldValue("showPassword", !values.showPassword)}
          >
            {values.showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}
          </div>
        </div>

        {errors.password && touched.password && (
          <p className="text-sm text-red-600 mt-[8px]">{errors.password}</p>
        )}
      </div>

      <button
        type="submit"
        className="p-[8px_40px] bg-black rounded-[2px] cursor-pointer"
        onClick={() => handleSubmit()}
      >
        <p className="p-0 font-mono text-base text-white">Sign Up</p>
      </button>
    </div>
  );
};

export default SignUpForm;
