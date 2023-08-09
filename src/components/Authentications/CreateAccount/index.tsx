import React, { useState } from "react";
import { Formik } from "formik";
import InputField from "../../../utils/InputField/index";
import Button from "../../../utils/Button/index";
import { GoogleIcon, EyeIcon } from "../../../icons";
import { TextTag } from "../../../utils/Typography";
import ConnectProject from "./connectProject";
import AddNewFolder from "./addNewFolder";
import Success from "./success";
import PersonalInformation from "./personalInformation";
import CreateNewProject from "./createNewProject";
interface FormValues {
  email: string;
}

interface FormErrors {
  email?: string;
}

const LoginForm = () => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };

  const maskPassword = password.replace(/./g, "*");
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between items-center pt-[132px]">
      <div className="w-80">
        <TextTag
          as="h6"
          text={"Create an account"}
          className={"h6 font-normal mb-[42px]"}
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
                onChange={handlePasswordChange}
                onBlur={handleBlur}
                value={maskPassword}
                error={errors?.password}
                touch={touched.password}
                icon={<EyeIcon />}
                placeholder={""}
                className={""}
              />
              <TextTag
                as="p"
                text={
                  "Password must be at least 8 characters and must contain at least 1 capital letter and 1 digit."
                }
                className={"p-small mb-5"}
                color={""}
              />
              <Button
                text="Continue with Google"
                onClick={() => handleSubmit()}
                className="w-full mb-4 p-large font-medium bg-white text-gray-900 flex gap-x-[40.4px] border-[2px] border-solid rounded-full"
                icon={<GoogleIcon />}
                type={undefined}
              />
              <Button
                text="Continue with email"
                onClick={() => handleSubmit()}
                className="w-full bg-blue-500 text-white flex justify-center mb-4"
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
        <a className="p-small font-medium text-blue-500" href="#">
          Login now
        </a>
      </div>
      <PersonalInformation />
      <CreateNewProject />
      <ConnectProject />
      <AddNewFolder />
      <Success />
    </div>
  );
};

export default LoginForm;
