"use client";
import Link from "next/link";
import React from "react";
import { auth } from "../../../../firebase";
import * as Yup from "yup";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useFormik } from "formik";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const signupValidationSchema = Yup.object({
    name: Yup.string().required("Name is required").min(2, "Name must be at least 2 characters long"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters long").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords don&apos;t match")
      .required("Confirm Password is required"),
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowconfirmPassword] = React.useState(false);

  const loginInitialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: signupValidationSchema,
    onSubmit: (values) => {
      try {
        createUserWithEmailAndPassword(auth, values.email, values.password);
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <section className="login max-w-[450px]">
      <div className="container">
        <h3 className="mb-8 uppercase">Sign Up</h3>

        <div className="form">
          <div className="auth__input__field mb-4">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} />
            {formik.touched.name && formik.errors.name ? <span className="error">{formik.errors.name}</span> : ""}
          </div>
          <div className="auth__input__field mb-4">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
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

          <div className="auth__input__field mb-4">
            <label htmlFor="password">Confirm Password</label>
            <div className="password__field relative">
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
              <button className="icon absolute top-[50%] right-[10px] translate-y-[-50%]" onClick={() => setShowconfirmPassword((prev) => !prev)}>
                {!showConfirmPassword ? <IoMdEye className="text-black" /> : <IoMdEyeOff className="text-black" />}
              </button>
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? <span className="error">{formik.errors.confirmPassword}</span> : ""}
          </div>

          <button
            type="button"
            className="w-full text-center bg-red-500 text-white rounded-[5px] py-1 hover:bg-red-400 mb-4"
            onClick={() => formik.handleSubmit()}
          >
            Create Account
          </button>

          <p className="text-center">
            Already have an account ?
            <Link href={"/login"} className="text-blue-500">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
