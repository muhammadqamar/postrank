import React from "react";
import { Formik } from "formik";
import InputField from "../../../utils/InputField/index";
import Button from "../../../utils/Button/index";

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
        <h6 className="h6 font-normal mb-[42px]">Reset password</h6>
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
                className={""}
              />
              <Button
                text="Reset password"
                onClick={() => handleSubmit()}
                className="w-full bg-blue-500 text-white flex justify-center mt-[42px]"
                type={undefined}
              />
            </form>
          )}
        </Formik>
      </div>
      <div className="flex gap-2">
        <p className="p-small text-gray-900">Already a member?</p>
        <a className="p-small font-medium text-blue-500" href="#">
          Login now!
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
