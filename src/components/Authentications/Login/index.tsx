/* eslint-disable prettier/prettier */
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import InputField from "../../../utils/InputField/index";

import EyeIcon from "../../../assets/images/Icons/eye.svg";

type Values = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const initialValues: Values = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: Values) => {
    console.log("Email:", values.email);
    console.log("Password:", values.password);
  };

  const validateForm = (values: Values) => {
    const errors: Partial<Values> = {};

    const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    if (!values.email) {
      errors.email = "Email is Required!";
    } else if (!isValidEmail(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    }

    return errors;
  };

  return (
    <div className="bg-white h-screen flex items-center justify-center">
      <div className="bg-white w-96 p-8 shadow-lg rounded-lg">
        <h6 className="text-2xl font-bold mb-4">Login to your account</h6>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validateForm}
        >
          {() => (
            <Form className="space-y-4">
              <div>
                <Field
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  component={() => (
                    <InputField label="Email" placeholder="Enter your email" />
                  )}
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <Field
                  type="password"
                  name="password"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  component={() => (
                    <InputField
                      label="Email"
                      placeholder="Enter your email"
                      EyeIcon={EyeIcon}
                    />
                  )}
                />
                <ErrorMessage
                  name="password"
                  component="password"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="rememberMe" className="flex items-center">
                  <Field
                    type="checkbox"
                    name="rememberMe"
                    className="mr-2 leading-tight cursor-pointer"
                  />
                  <span className="text-sm">Remember me</span>
                </label>
                <a href="#" className="text-blue-500 text-sm">
                  Reset Password
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-medium rounded py-2"
              >
                Login
              </button>
              <div className="mt-4">
                <button className="bg-white text-black font-medium rounded py-2 w-full border">
                  Continue with Google
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
