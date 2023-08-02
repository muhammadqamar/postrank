import React from "react";
import { Formik } from "formik";
import InputField from "../../../utils/InputField/index";
import Button from "../../../utils/Button/index";

import EyeIcon from "../../../assets/images/Icons/eye.svg";
import Google from "../../../assets/images/Icons/google.svg";

interface FormValues {
  email: string;
}

interface FormErrors {
  email?: string;
}

const LoginForm = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-between items-center pt-[132px] pb-16">
      <div className="w-80">
        <h6 className="h6 font-normal mb-[42px]">Login to your account</h6>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values: FormValues) => {
            const errors: FormErrors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            // isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <InputField
                label="Email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors?.email}
                touch={touched.email}
                icon={""}
                placeholder={""}
                className={"mb-5"}
              />
              <InputField
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={errors?.password}
                touch={touched.password}
                icon={EyeIcon}
                placeholder={""}
                className={"mb-5"}
              />
              <div className="flex items-center justify-between mb-[42px]">
                <label htmlFor="rememberMe" className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    className="mr-2 leading-tight cursor-pointer"
                  />
                  <span className="p-medium">Remember me</span>
                </label>
                <a href="#" className="text-blue-500 p-small">
                  Reset Password
                </a>
              </div>
              <Button
                text="Login"
                onClick={() => handleSubmit()}
                className="w-full bg-blue-500 text-white flex justify-center mb-4"
                type={undefined}
              />
              <Button
                text="Continue with Google"
                onClick={() => handleSubmit()}
                className="w-full p-large font-medium bg-white text-gray-900 flex gap-x-[40.4px] border-[2px] border-solid rounded-full"
                icon={<img src={Google} alt="Google Icon" />}
                type={undefined}
              />
            </form>
          )}
        </Formik>
      </div>
      <div className="flex gap-2">
        <p className="p-small text-gray-900">Don’t have an account?</p>
        <a className="p-small font-medium text-blue-500" href="#">
          Create now
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
