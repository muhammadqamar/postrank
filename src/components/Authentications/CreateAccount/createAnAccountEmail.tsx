import React from "react";
import { Formik } from "formik";
import InputField from "../../../utils/InputField/index";
import Button from "../../../utils/Button/index";
import { GoogleIcon, EyeIcon } from "../../../icons";
import { useGoogleLogin } from "@react-oauth/google";
import { getAccountdetailsAction } from "../../../store/actions/account";
import { TextTag } from "../../../utils/Typography";

import { Link } from "react-router-dom";

interface CreateAnAccountEmail {
  setActiveTab: React.Dispatch<React.SetStateAction<string | null>>;
}
interface FormValues {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const CreateAnAccountEmail: React.FC<CreateAnAccountEmail> = ({
  setActiveTab,
}) => {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      const res = getAccountdetailsAction(
        codeResponse?.access_token,
        setActiveTab,
      );
    },
    onError: (error) => console.log("Login Failed:", error),
  });
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between items-center pt-[87px] pb-16 px-5">
      <div className="sm:w-80 w-full">
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
                onClick={() => {
                  login();
                }}
                className="w-full mb-4 p-large !font-medium !leading-5 bg-white text-gray-900 flex gap-x-[40.4px] border-[2px] border-solid rounded-full"
                icon={<GoogleIcon />}
                type={undefined}
              />
              <Button
                text="Continue with email"
                onClick={() => setActiveTab("connectProject")}
                className="w-full !bg-customBlue text-white flex justify-center mb-4 sm:font-medium !leading-5"
                type={undefined}
              />
              <Button
                onClick={() => {}}
                text="Continue with email"
                className="w-full !bg-customBlue text-white flex justify-center mb-4"
                type={undefined}
              />
            </form>
          )}
        </Formik>
      </div>
      <div className="flex sm:flex-nowrap flex-wrap justify-evenly gap-2">
        <TextTag
          as="p"
          text={"Already a member?"}
          className={"p-small !leading-[18px]"}
          color={""}
        />
        <Link to={"/login"}>
          <TextTag
            as="p"
            text={"Login now"}
            className={"p-small !font-medium"}
            color={"text-customBlue"}
          />
        </Link>
      </div>
    </div>
  );
};

export default CreateAnAccountEmail;
