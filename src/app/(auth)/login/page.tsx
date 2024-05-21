"use client";

import GoogleLoginAuth from "@/components/molecule/googleAuth";
import { useNotification } from "@/context/alertProvider";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import * as Yup from "yup";
import { IoMdEye, IoIosEyeOff, IoMdEyeOff } from "react-icons/io";

const loginValidationSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("email is required"),
  password: Yup.string().min(6, "Password must be at least 6 digit long").required("Password is required"),
});

export default function Login() {
  const { showNotification } = useNotification();

  const [showPassword, setShowPassword] = React.useState(false);

  const LoginInitialState = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: LoginInitialState,
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      try {
        console.log(values);
      } catch (e) {
        console.log(e);
        showNotification({
          open: true,
          message: "Something went wrong",
          variant: "error",
        });
      }
    },
  });
  return (
    <div className="login">
      <div className="container">
        <h3 className="mb-8 uppercase">Login</h3>

        <GoogleLoginAuth />

        {/* <form onSubmit={formik.handleSubmit}>
          <div className="auth__input__field mb-4">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
            {formik.touched.email && formik.errors.email ? <span className="error">{formik.errors.email}</span> : ""}
          </div>
          <div className="auth__input__field mb-4">
            <label htmlFor="password">Password</label>

            <div className="password__field relative">
              <input type={showPassword ? "text" : "password"} name="password" value={formik.values.password} onChange={formik.handleChange} />
              <button className="icon absolute top-[50%] right-[10px] translate-y-[-50%]" onClick={() => setShowPassword((prev) => !prev)}>
                {!showPassword ? <IoMdEye className="text-black" /> : <IoMdEyeOff className="text-black" />}
              </button>
            </div>
            {formik.touched.password && formik.errors.password ? <span className="error">{formik.errors.password}</span> : ""}
          </div>

          <div className="auth__input__field mb-4 text-end">
            <p className="text-blue-500">
              <Link href={"/forgetPassword"}>Forget Password ?</Link>
            </p>
          </div>

          <button
            type="button"
            onClick={() => formik.handleSubmit()}
            className="w-full text-center bg-red-500 text-white rounded-[5px] py-1 hover:bg-red-400 mb-4"
          >
            Login
          </button>

          <p>
            Don&apos;t have an account ?
            <Link href={"/signup"} className="text-blue-500">
              Sign up
            </Link>
          </p>
        </form> */}
      </div>
    </div>
  );
}
