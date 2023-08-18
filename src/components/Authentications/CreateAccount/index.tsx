import React from "react";
import { Formik } from "formik";
import InputField from "../../../utils/InputField/index";
import Button from "../../../utils/Button/index";
import { GoogleIcon, EyeIcon } from "../../../icons";
import { TextTag } from "../../../utils/Typography";
import ConnectProject from "./connectProject";
import AddNewFolder from "./addNewFolder";
import Success from "./success";
import CreateNewProject from "./createNewProject";
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
    <div className="bg-white min-h-screen flex flex-col justify-between items-center pt-[132px]">
      <div className="w-80">
        <TextTag
          as="h6"
          text={"Create an account"}
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
            if (!values.password) {
              errors.password = "Required";
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
                className={""}
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
                placeholder={""}
                className={"!mb-0"}
              />
              <TextTag
                as="p"
                text={
                  "Password must be at least 8 characters and must contain at least 1 capital letter and 1 digit."
                }
                className={"p-small mb-[42px]"}
                color={""}
              />
              <Button
                text="Continue with Google"
                onClick={() => handleSubmit()}
                className="w-full mb-4 p-large !font-medium bg-white text-gray-900 flex gap-x-[40.4px] border-[2px] border-solid rounded-full"
                icon={<GoogleIcon />}
                type={undefined}
              />
              <Button
                text="Continue with email"
                onClick={() => handleSubmit()}
                className="w-full !bg-customBlue text-white flex justify-center mb-4"
                type={undefined}
              />
            </form>
          )}
        </Formik>
      </div>
      <div className="flex gap-2">
        <TextTag
          as="p"
          text={"Already a member?"}
          className={"p-small"}
          color={""}
        />
        <Link to={"/login"}>
          <TextTag
            as="p"
            text={"Login now"}
            className={"p-small font-medium"}
            color={"text-customBlue"}
          />
        </Link>
      </div>
      <ConnectProject />
      <CreateNewProject />
      <AddNewFolder />
      <Success />
    </div>
  );
};

export default LoginForm;
