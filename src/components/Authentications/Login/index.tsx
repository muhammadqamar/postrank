import React from "react";
import { Formik } from "formik";
import InputField from "../../../utils/InputField";
import Button from "../../../utils/Button/index";

import { EyeIcon, GoogleIcon, WarningIcon } from "../../../icons";
import { TextTag } from "../../../utils/Typography";
import { Link } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const LoginForm = () => {
  return (
    <div className="bg-white h-screen flex flex-col !justify-between items-center sm:pt-[132px] pt-20 sm:pb-16 pb-8">
      <div className="sm:w-80 w-72">
        <TextTag
          as="h6"
          text={"Login to your account"}
          className={"h6 mb-[42px]"}
          color={""}
        />
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values: FormValues) => {
            const errors: FormErrors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Email doesn’t exist";
            }

            if (values.password !== "correctpassword") {
              errors.password = "Wrong password";
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
                icon={<WarningIcon />}
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
                icon={<EyeIcon />}
                placeholder=""
                className="mb-5"
              />
              <div className="flex items-center justify-between mb-[42px]">
                <label htmlFor="rememberMe" className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    className="mr-2 border-2 border-solid border-commonGray rounded cursor-pointer"
                  />
                  <TextTag
                    as="span"
                    text={"Remember me"}
                    className={"p-medium"}
                    color={""}
                  />
                </label>
                <Link to="/reset-password" className="!text-customBlue p-small">
                  Reset Password
                </Link>
              </div>
              <Button
                text="Login"
                onClick={() => handleSubmit()}
                className="w-full !bg-customBlue !text-white flex justify-center mb-4"
                type={undefined}
              />
              <Button
                text="Continue with Google"
                onClick={() => handleSubmit()}
                className="w-full p-large font-medium !bg-white !text-gray-900 flex gap-x-[40.4px] border-[2px] border-solid rounded-full"
                icon={<GoogleIcon />}
                type={undefined}
              />
            </form>
          )}
        </Formik>
      </div>
      <div className="flex gap-2">
        <TextTag
          as="p"
          text={"Don’t have an account?"}
          className={"p-small"}
          color={""}
        />
        <a className="p-small font-medium !text-customBlue" href="#">
          Create now
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
