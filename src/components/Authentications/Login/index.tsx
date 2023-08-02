import React from "react";
import { Formik } from "formik";
import InputField from "../../../utils/InputField/index";

import EyeIcon from "../../../assets/images/Icons/eye.svg";

const LoginForm = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-between items-center pt-[132px] pb-16">
      <div className="w-80">
        <h6 className="h6 font-normal mb-[42px]">Login to your account</h6>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
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
            isSubmitting,
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
                errors={errors.email}
                touch={touched.email}
              />
              <InputField
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                errors={errors.password}
                touch={touched.password}
                icon={EyeIcon}
              />
              <div className="flex justify-between">
                <div className="">
                  <input type="checkbox" />
                </div>
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
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
